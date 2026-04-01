if (!requireNamespace("remotes", quietly = TRUE)) install.packages("remotes")
remotes::install_github("MarianNecula/TEMPO")
library(TEMPO)

TARGET_MATRIX <- "EAI_IND104P"

message("Downloading matrix: ", TARGET_MATRIX)

dir.create("data", showWarnings = FALSE)

result <- tryCatch({
  df <- tempo_bulk(TARGET_MATRIX)
  out <- paste0("data/", TARGET_MATRIX, ".csv")
  write.csv(df, out, row.names = FALSE)
  message("Success: ", nrow(df), " rows saved to ", out)
  df
}, error = function(e) {
  message("Download failed: ", conditionMessage(e))
  NULL
})

# Save a run log
log_entry <- data.frame(
  matrix    = TARGET_MATRIX,
  success   = !is.null(result),
  rows      = if (!is.null(result)) nrow(result) else 0,
  timestamp = as.character(Sys.time())
)

log_file <- "data/run_log.csv"
if (file.exists(log_file)) {
  existing <- read.csv(log_file)
  log_entry <- rbind(existing, log_entry)
}
write.csv(log_entry, log_file, row.names = FALSE)
