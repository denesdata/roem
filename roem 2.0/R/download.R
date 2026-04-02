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
meta <- fromJSON(meta_raw)

# ── Step 2: extract all nomItemIds from each dimension ────────────────────────
dims <- meta$dimensionsMap
message("Number of dimensions: ", length(dims))

# Build the details list — all item IDs for each dimension
details_list <- lapply(seq_along(dims), function(i) {
  d <- dims[[i]]
  ids <- d$options$nomItemId
  message("Dim ", d$dimCode, " (", d$label, "): ", length(ids), " options")
  ids
})

# The API expects a flat list of all selected nomItemIds per dimension
payload <- list(
  language   = "en",
  matrixName = TARGET_MATRIX,
  queryType  = "DATA",
  details    = details_list
)

message("Payload built. Dim sizes: ", paste(sapply(details_list, length), collapse = " x "))

# ── Step 3: POST with retry ───────────────────────────────────────────────────
data_url <- paste0(API_BASE, "/dataSet/", TARGET_MATRIX)
message("POSTing to: ", data_url)

MAX_TRIES <- 3
raw_text  <- NULL

for (i in seq_len(MAX_TRIES)) {
  message("Attempt ", i, " of ", MAX_TRIES)
  raw_text <- tryCatch({
    h <- new_handle()
    handle_setopt(h, copypostfields = toJSON(payload, auto_unbox = FALSE))
    handle_setheaders(h, "Content-Type" = "application/json")
    resp <- curl_fetch_memory(data_url, handle = h)
    txt  <- rawToChar(resp$content)
    message("Response size: ", nchar(txt), " chars")
    message("First 500 chars: ", substr(txt, 1, 500))
    txt
  }, error = function(e) {
    message("Attempt ", i, " failed: ", e$message)
    Sys.sleep(15)
    NULL
  })
  if (!is.null(raw_text)) break
}

if (is.null(raw_text)) stop("All attempts failed.")

# ── Step 4: parse and save ────────────────────────────────────────────────────
# Save raw response always so we can inspect if needed
raw_file <- file.path(OUTPUT_DIR, paste0(TARGET_MATRIX, "_raw.json"))
writeLines(raw_text, raw_file)
message("Raw response saved to: ", raw_file)

result <- tryCatch(fromJSON(raw_text), error = function(e) {
  message("JSON parse error: ", e$message)
  NULL
})

if (!is.null(result)) {
  message("Result class: ", class(result))
  message("Result names: ", paste(names(result), collapse = ", "))
  str(result, max.level = 2)

  # Try to extract the data frame — API typically returns dataset + metadata
  df <- if (is.data.frame(result)) {
    result
  } else if ("dataset" %in% names(result)) {
    as.data.frame(result$dataset)
  } else if (is.list(result)) {
    # Find the largest data frame inside
    dfs <- Filter(is.data.frame, result)
    if (length(dfs) > 0) dfs[[which.max(sapply(dfs, nrow))]] else NULL
  } else NULL

  if (!is.null(df)) {
    out <- file.path(OUTPUT_DIR, paste0(TARGET_MATRIX, ".csv"))
    write.csv(df, out, row.names = FALSE)
    message("Saved: ", nrow(df), " rows x ", ncol(df), " cols → ", out)
  } else {
    message("Could not extract dataframe — check _raw.json for structure")
  }
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
