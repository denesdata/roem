library(curl)
library(jsonlite)

TARGET_MATRIX <- "IND104P"
OUTPUT_DIR    <- "roem 2.0/TEMPO data"

dir.create(OUTPUT_DIR, showWarnings = FALSE, recursive = TRUE)

# ── Step 1: fetch metadata ────────────────────────────────────────────────────
message("Fetching metadata...")
meta_url <- paste0("http://statistici.insse.ro:8077/tempo-ins/matrix/", TARGET_MATRIX, "?lang=en")
meta_raw <- tryCatch({
  rawToChar(curl_fetch_memory(meta_url)$content)
}, error = function(e) { stop("Metadata fetch failed: ", e$message) })

meta     <- fromJSON(meta_raw, simplifyVector = FALSE)
dims     <- meta$dimensionsMap
dim_info <- lapply(dims, function(d) {
  ids <- sapply(d$options, function(o) as.integer(o$nomItemId))
  list(dimCode = as.integer(d$dimCode), ids = ids, label = d$label)
})
for (di in dim_info) message("Dim ", di$dimCode, " (", di$label, "): ", length(di$ids), " items")

# ── Step 2: build pivot payload ───────────────────────────────────────────────
pivot_url     <- "http://statistici.insse.ro:8077/tempo-ins/pivot"
pivot_payload <- setNames(
  lapply(dim_info, function(d) d$ids),
  paste0("dim", sapply(dim_info, function(d) d$dimCode))
)
pivot_payload$matrix   <- TARGET_MATRIX
pivot_payload$language <- "en"
payload_json <- toJSON(pivot_payload, auto_unbox = TRUE)

# ── Step 3: retry until we get a real CSV ────────────────────────────────────
MAX_TRIES  <- 10
SLEEP_SECS <- 20
result     <- NULL
raw_file   <- file.path(OUTPUT_DIR, paste0(TARGET_MATRIX, "_raw.json"))

for (i in seq_len(MAX_TRIES)) {
  message("Attempt ", i, " of ", MAX_TRIES, "...")

  resp_text <- tryCatch({
    h <- new_handle()
    handle_setopt(h, copypostfields = payload_json)
    handle_setheaders(h, "Content-Type" = "application/json")
    handle_setopt(h, timeout = 60L)
    rawToChar(curl_fetch_memory(pivot_url, handle = h)$content)
  }, error = function(e) {
    message("  Request error: ", e$message)
    NULL
  })

  if (is.null(resp_text)) {
    message("  No response — waiting ", SLEEP_SECS, "s")
    Sys.sleep(SLEEP_SECS)
    next
  }

  message("  Response size: ", nchar(resp_text), " chars")
  message("  First 200 chars: ", substr(resp_text, 1, 200))

  # Success: response contains "Valoare" (CSV header) and no error status
  is_error <- grepl('"status":400|"status":500|"status":404', resp_text)
  is_csv   <- grepl("Valoare", resp_text) && nchar(resp_text) > 100

  if (is_csv && !is_error) {
    message("  CSV detected — parsing...")
    df <- tryCatch(
      read.csv(text = resp_text, stringsAsFactors = FALSE, fileEncoding = "UTF-8"),
      error = function(e) {
        # fallback without encoding
        tryCatch(
          read.csv(text = resp_text, stringsAsFactors = FALSE),
          error = function(e2) { message("  CSV parse failed: ", e2$message); NULL }
        )
      }
    )

    if (!is.null(df) && nrow(df) > 0) {
      message("  Parsed: ", nrow(df), " rows x ", ncol(df), " cols")
      writeLines(resp_text, raw_file)
      out <- file.path(OUTPUT_DIR, paste0(TARGET_MATRIX, ".csv"))
      write.csv(df, out, row.names = FALSE, fileEncoding = "UTF-8")
      message("  Saved → ", out)
      result <- df
      break
    }
  }

  message("  Not a valid CSV yet — waiting ", SLEEP_SECS, "s before retry")
  Sys.sleep(SLEEP_SECS)
}

if (is.null(result)) message("All ", MAX_TRIES, " attempts failed.")

# ── Step 4: log ───────────────────────────────────────────────────────────────
log_entry <- data.frame(
  matrix    = TARGET_MATRIX,
  success   = !is.null(result),
  rows      = if (!is.null(result)) nrow(result) else 0,
  timestamp = as.character(Sys.time()),
  stringsAsFactors = FALSE
)

log_file <- file.path(OUTPUT_DIR, "run_log.csv")
if (file.exists(log_file)) {
  existing <- read.csv(log_file, stringsAsFactors = FALSE)
  for (col in names(log_entry)) if (!col %in% names(existing)) existing[[col]] <- NA
  log_entry <- rbind(existing[, names(log_entry)], log_entry)
}
write.csv(log_entry, log_file, row.names = FALSE)
message("Done.")
