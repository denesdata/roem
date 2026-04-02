library(curl)
library(jsonlite)

TARGET_MATRIX <- "IND104P"
OUTPUT_DIR    <- "roem 2.0/TEMPO data"
API_BASE      <- "http://statistici.insse.ro:8077/tempo-ins/matrix"

dir.create(OUTPUT_DIR, showWarnings = FALSE, recursive = TRUE)

# ── Step 1: get matrix metadata ───────────────────────────────────────────────
message("Fetching metadata for: ", TARGET_MATRIX)

meta_url <- paste0(API_BASE, "/", TARGET_MATRIX, "?lang=en")
message("Metadata URL: ", meta_url)

meta_raw <- tryCatch(
  readLines(curl(meta_url), warn = FALSE),
  error = function(e) { message("Metadata fetch failed: ", e$message); NULL }
)

if (is.null(meta_raw)) stop("Cannot reach INSSE API.")

meta <- fromJSON(paste(meta_raw, collapse = ""))
message("Matrix name: ", meta$matrixName)

# ── Step 2: build the data request payload ────────────────────────────────────
# Get all dimension values for a full download
dims <- meta$headline
payload_dims <- lapply(dims$values, function(v) list(
  id    = v$id,
  value = v$text
))
names(payload_dims) <- dims$dimCode

payload <- list(
  language  = "en",
  matrixName = TARGET_MATRIX,
  queryType  = "DATA",
  headline   = payload_dims
)

# ── Step 3: POST request for data ─────────────────────────────────────────────
data_url <- paste0(API_BASE, "/dataSet/", TARGET_MATRIX)
message("Requesting data from: ", data_url)

MAX_TRIES <- 3
result <- NULL

for (i in seq_len(MAX_TRIES)) {
  message("Attempt ", i, " of ", MAX_TRIES)
  result <- tryCatch({
    h <- new_handle()
    handle_setopt(h, copypostfields = toJSON(payload, auto_unbox = TRUE))
    handle_setheaders(h, "Content-Type" = "application/json")
    resp <- curl_fetch_memory(data_url, handle = h)
    raw_text <- rawToChar(resp$content)
    message("Response size: ", nchar(raw_text), " chars")
    parsed <- fromJSON(raw_text)
    parsed
  }, error = function(e) {
    message("Attempt ", i, " failed: ", e$message)
    Sys.sleep(15)
    NULL
  })
  if (!is.null(result)) break
}

# ── Step 4: save ──────────────────────────────────────────────────────────────
if (!is.null(result)) {
  if (is.data.frame(result)) {
    out <- file.path(OUTPUT_DIR, paste0(TARGET_MATRIX, ".csv"))
    write.csv(result, out, row.names = FALSE)
    message("Saved: ", nrow(result), " rows → ", out)
  } else {
    # Save raw JSON so we can inspect the structure
    out <- file.path(OUTPUT_DIR, paste0(TARGET_MATRIX, "_raw.json"))
    writeLines(toJSON(result, pretty = TRUE), out)
    message("Saved raw JSON → ", out)
    message("Structure: ")
    str(result)
  }
} else {
  message("All attempts failed.")
}

# ── Step 5: log ───────────────────────────────────────────────────────────────
log_entry <- data.frame(
  matrix    = TARGET_MATRIX,
  success   = !is.null(result),
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
