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

dim_info <- lapply(dims, function(d) {
  ids <- sapply(d$options, function(o) as.integer(o$nomItemId))
  list(dimCode = as.integer(d$dimCode), label = d$label, ids = ids)
})

for (di in dim_info) {
  message("Dim ", di$dimCode, " (", di$label, "): ", length(di$ids), " items")
}

# ── Step 2: try every likely DTO field name ───────────────────────────────────
data_url <- paste0(API_BASE, "/dataSet/", TARGET_MATRIX)
raw_file <- file.path(OUTPUT_DIR, paste0(TARGET_MATRIX, "_raw.json"))

# Build dimension block in different ways
dim_block_a <- lapply(dim_info, function(d) {
  list(dimCode = d$dimCode, nomItemIds = d$ids)
})

dim_block_b <- lapply(dim_info, function(d) {
  list(dimCode = d$dimCode, selectedNomItemIds = d$ids)
})

dim_block_c <- lapply(dim_info, function(d) {
  list(dimCode = d$dimCode, values = d$ids)
})

dim_block_d <- lapply(dim_info, function(d) {
  list(dimCode = d$dimCode, items = d$ids)
})

payloads <- list(
  f1  = list(matrixName = TARGET_MATRIX, language = "en", details    = dim_block_a),
  f2  = list(matrixName = TARGET_MATRIX, language = "en", details    = dim_block_b),
  f3  = list(matrixName = TARGET_MATRIX, language = "en", details    = dim_block_c),
  f4  = list(matrixName = TARGET_MATRIX, language = "en", details    = dim_block_d),
  f5  = list(matrixName = TARGET_MATRIX, language = "en", dimensions = dim_block_a),
  f6  = list(matrixName = TARGET_MATRIX, language = "en", dimensions = dim_block_b),
  f7  = list(matrixName = TARGET_MATRIX, language = "en", query      = dim_block_a),
  f8  = list(matrixName = TARGET_MATRIX, language = "en", filters    = dim_block_a),
  f9  = list(matrixName = TARGET_MATRIX, language = "ro", details    = dim_block_a),
  f10 = list(matrixName = TARGET_MATRIX, details  = dim_block_a)
)

best_response <- NULL
best_format   <- NULL
last_response <- NULL

for (fmt_name in names(payloads)) {
  message("\nTrying format ", fmt_name, "...")
  payload_json <- toJSON(payloads[[fmt_name]], auto_unbox = TRUE)
  message("Payload preview: ", substr(payload_json, 1, 150))

  resp_text <- tryCatch({
    h <- new_handle()
    handle_setopt(h, copypostfields = payload_json)
    handle_setheaders(h, "Content-Type" = "application/json")
    resp <- curl_fetch_memory(data_url, handle = h)
    rawToChar(resp$content)
  }, error = function(e) {
    message("Request error: ", e$message); NULL
  })

  last_response <- resp_text

  if (!is.null(resp_text)) {
    message("Response (first 300): ", substr(resp_text, 1, 300))
    is_error <- grepl('"status":400|"status":500|"status":404', resp_text)
    if (!is_error && nchar(resp_text) > 50) {
      message("=== SUCCESS with format ", fmt_name, " ===")
      best_response <- resp_text
      best_format   <- fmt_name
      break
    }
  }
  Sys.sleep(2)
}

# ── Step 3: save and parse ────────────────────────────────────────────────────
final_response <- if (!is.null(best_response)) best_response else last_response
writeLines(final_response, raw_file)
message("Response saved to: ", raw_file)

if (!is.null(best_response)) {
  result <- tryCatch(
    fromJSON(best_response, simplifyVector = TRUE),
    error = function(e) { message("Parse error: ", e$message); NULL }
  )

  if (!is.null(result)) {
    message("Result class: ", class(result))
    message("Names: ", paste(names(result), collapse = ", "))
    str(result, max.level = 2)

    df <- if (is.data.frame(result)) {
      result
    } else if (is.list(result)) {
      dfs <- Filter(is.data.frame, result)
      if (length(dfs) > 0) dfs[[which.max(sapply(dfs, nrow))]] else NULL
    } else NULL

    if (!is.null(df) && nrow(df) > 0) {
      out <- file.path(OUTPUT_DIR, paste0(TARGET_MATRIX, ".csv"))
      write.csv(df, out, row.names = FALSE)
      message("CSV saved: ", nrow(df), " rows x ", ncol(df), " cols → ", out)
    } else {
      message("Response parsed but no dataframe found — check _raw.json")
    }
  }
} else {
  message("All formats failed — check _raw.json for last response")
}

# ── Step 4: log ───────────────────────────────────────────────────────────────
log_entry <- data.frame(
  matrix  = TARGET_MATRIX,
  format  = if (!is.null(best_format)) best_format else "none",
  success = !is.null(best_response),
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
