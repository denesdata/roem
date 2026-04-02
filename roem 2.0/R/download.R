library(curl)
library(jsonlite)

TARGET_MATRIX <- "IND104P"
OUTPUT_DIR    <- "roem 2.0/TEMPO data"
API_BASE      <- "http://statistici.insse.ro:8077/tempo-ins/matrix"

dir.create(OUTPUT_DIR, showWarnings = FALSE, recursive = TRUE)

# ── Step 1: get matrix metadata to inspect structure ─────────────────────────
message("Fetching metadata for: ", TARGET_MATRIX)

meta_url <- paste0(API_BASE, "/", TARGET_MATRIX, "?lang=en")
meta_raw <- tryCatch({
  h <- new_handle()
  resp <- curl_fetch_memory(meta_url, handle = h)
  rawToChar(resp$content)
}, error = function(e) { message("Metadata fetch failed: ", e$message); NULL })

if (is.null(meta_raw)) stop("Cannot reach INSSE API.")

# Save raw metadata so we can inspect it
meta_file <- file.path(OUTPUT_DIR, paste0(TARGET_MATRIX, "_meta.json"))
writeLines(meta_raw, meta_file)
message("Metadata saved to: ", meta_file)

# Parse and print structure
meta <- fromJSON(meta_raw)
message("=== Metadata structure ===")
str(meta)
message("=== Top level names ===")
print(names(meta))

# ── Step 2: log ───────────────────────────────────────────────────────────────
log_entry <- data.frame(
  matrix    = TARGET_MATRIX,
  step      = "metadata_fetch",
  success   = !is.null(meta),
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
