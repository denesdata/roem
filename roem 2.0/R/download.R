library(curl)
library(jsonlite)

TARGET_MATRIX <- "IND104P"
OUTPUT_DIR    <- "roem 2.0/TEMPO data"
API_BASE      <- "http://statistici.insse.ro:8077/tempo-ins/matrix"

dir.create(OUTPUT_DIR, showWarnings = FALSE, recursive = TRUE)

# ── Step 1: fetch metadata ────────────────────────────────────────────────────
message("Fetching metadata for: ", TARGET_MATRIX)

meta_url <- paste0(API_BASE, "/", TARGET_MATRIX, "?lang=en")
meta_raw <- tryCatch({
  h <- new_handle()
  resp <- curl_fetch_memory(meta_url, handle = h)
  rawToChar(resp$content)
}, error = function(e) { message("Metadata fetch failed: ", e$message); NULL })

if (is.null(meta_raw)) stop("Cannot reach INSSE API.")
meta <- fromJSON(meta_raw, simplifyVector = FALSE)
dims <- meta$dimensionsMap
message("Number of dimensions: ", length(dims))

# ── Step 2: try multiple payload formats ──────────────────────────────────────
data_url <- paste0(API_BASE, "/dataSet/", TARGET_MATRIX)

# Extract dim info
dim_info <- lapply(dims, function(d) {
  ids <- sapply(d$options, function(o) as.integer(o$nomItemId))
  list(dimCode = d$dimCode, label = d$label, ids = ids, count = length(ids))
})

for (di in dim_info) {
  message("Dim ", di$dimCode, " (", di$label, "): ", di$count, " items, first id: ", di$ids[1])
}

# Format 1: array of {dimCode, nomItemIds}
payload1 <- list(
  matrixName = TARGET_MATRIX,
  language   = "en",
  details    = lapply(dim_info, function(d) {
    list(dimCode = d$dimCode, nomItemIds = d$ids)
  })
)

# Format 2: flat array of nomItemId arrays in order
payload2 <- lapply(dim_info, function(d) d$ids)

# Format 3: named list by dimCode
payload3 <- setNames(
  lapply(dim_info, function(d) d$ids),
  sapply(dim_info, function(d) as.character(d$dimCode))
)

# Format 4: same as TEMPO package likely uses — array of arrays
payload4 <- list(
  matrixName = TARGET_MATRIX,
  language   = "en",
  arr        = lapply(dim_info, function(d) d$ids)
)

# Format 5: minimal — just the nomItemId arrays
payload5 <- list(
  matrixName = TARGET_MATRIX,
  arr        = lapply(dim_info, function(d) d$ids)
)

payloads <- list(
  format1 = payload1,
  format2 = payload2,
  format3 = payload3,
  format4 = payload4,
  format5 = payload5
)

# ── Step 3: try each payload format ──────────────────────────────────────────
raw_file <- file.path(OUTPUT_DIR, paste0(TARGET_MATRIX, "_raw.json"))
best_response <- NULL
best_format   <- NULL

for (fmt_name in names(payloads)) {
  message("\nTrying payload ", fmt_name, "...")
  payload_json <- toJSON(payloads[[fmt_name]], auto_unbox = TRUE)
  message("Payload: ", substr(payload_json, 1, 200))

  resp_text <- tryCatch({
    h <- new_handle()
    handle_setopt(h, copypostfields = payload_json)
    handle_setheaders(h, "Content-Type" = "application/json")
    resp <- curl_fetch_memory(data_url, handle = h)
    rawToChar(resp$content)
  }, error = function(e) {
    message("Request failed: ", e$message)
    NULL
  })

  if (!is.null(resp_text)) {
    message("Response size: ", nchar(resp_text), " chars")
    message("First 300 chars: ", substr(resp_text, 1, 300))

    if (!grepl('"status":500', resp_text) && nchar(resp_text) > 100) {
      message("SUCCESS with ", fmt_name, "!")
      best_response <- resp_text
      best_format   <- fmt_name
      break
    }
  }
  Sys.sleep(3)
}

# ── Step 4: save response ─────────────────────────────────────────────────────
if (!is.null(best_response)) {
  writeLines(best_response, raw_file)
  message("Saved raw response (", best_format, ") to: ", raw_file)

  result <- tryCatch(
    fromJSON(best_response, simplifyVector = TRUE),
    error = function(e) { message("Parse error: ", e$message); NULL }
  )

  if (!is.null(result) && is.data.frame(result)) {
    out <- file.path(OUTPUT_DIR, paste0(TARGET_MATRIX, ".csv"))
    write.csv(result, out, row.names = FALSE)
    message("Saved CSV: ", nrow(result), " rows x ", ncol(result), " cols")
  } else if (!is.null(result)) {
    message("Result class: ", class(result))
    message("Result names: ", paste(names(result), collapse = ", "))
    str(result, max.level = 2)
  }
} else {
  message("All payload formats failed — saving last response for inspection")
  writeLines(if (!is.null(resp_text)) resp_text else "{}", raw_file)
}

# ── Step 5: log ───────────────────────────────────────────────────────────────
log_entry <- data.frame(
  matrix         = TARGET_MATRIX,
  working_format = if (!is.null(best_format)) best_format else "none",
  success        = !is.null(best_response),
  timestamp      = as.character(Sys.time()),
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
