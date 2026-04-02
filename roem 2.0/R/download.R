if (!requireNamespace("remotes", quietly = TRUE)) install.packages("remotes")
remotes::install_github("MarianNecula/TEMPO")
library(TEMPO)

TARGET_MATRIX <- "IND104P"
OUTPUT_DIR    <- "roem 2.0/TEMPO data"

message("Downloading matrix: ", TARGET_MATRIX)

dir.create(OUTPUT_DIR, showWarnings = FALSE, recursive = TRUE)

result <- NULL
MAX_TRIES <- 3

for (i in seq_len(MAX_TRIES)) {
  message("Attempt ", i, " of ", MAX_TRIES)
  result <- tryCatch({
    df <- tempo_bulk(TARGET_MATRIX, dir = OUTPUT_DIR)
    message("Success: saved to ", OUTPUT_DIR)
    df
  }, error = function(e) {
    message("Attempt ", i, " failed: ", conditionMessage(e))
    Sys.sleep(10)
    NULL
  })
  if (!is.null(result)) break
}

if (!is.null(result)) {
  out <- file.path(OUTPUT_DIR, paste0(TARGET_MATRIX, ".csv"))
  write.csv(result, out, row.names = FALSE)
  message("CSV written to: ", out)
}

log_entry <- data.frame(
  matrix    = TARGET_MATRIX,
  success   = !is.null(result),
  rows      = if (!is.null(result)) nrow(result) else 0,
  timestamp = as.character(Sys.time())
)

log_file <- file.path(OUTPUT_DIR, "run_log.csv")
if (file.exists(log_file)) {
  existing <- read.csv(log_file)
  log_entry <- rbind(existing, log_entry)
}
write.csv(log_entry, log_file, row.names = FALSE)

if (is.null(result)) stop("All attempts failed for matrix: ", TARGET_MATRIX)
