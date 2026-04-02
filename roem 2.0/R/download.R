if (!requireNamespace("remotes", quietly = TRUE)) install.packages("remotes")
remotes::install_github("MarianNecula/TEMPO")
library(TEMPO)

TARGET_MATRIX <- "IND104P"
OUTPUT_DIR    <- "roem 2.0/TEMPO data"

message("Downloading matrix: ", TARGET_MATRIX)

dir.create(OUTPUT_DIR, showWarnings = FALSE, recursive = TRUE)

# tempo_bulk downloads the file itself into OUTPUT_DIR
# we just need to not crash if it returns NULL or invisibly
tryCatch({
  tempo_bulk(TARGET_MATRIX, dir = OUTPUT_DIR)
  message("Download call completed.")
}, error = function(e) {
  message("tempo_bulk error (may still have written file): ", conditionMessage(e))
})

# Find whatever file was written to the output dir
files_written <- list.files(OUTPUT_DIR, pattern = "\\.csv$|\\.xls", full.names = TRUE)
message("Files found in output dir: ", paste(files_written, collapse = ", "))

# Log the run
log_entry <- data.frame(
  matrix    = TARGET_MATRIX,
  files     = paste(basename(files_written), collapse = "; "),
  timestamp = as.character(Sys.time())
)

log_file <- file.path(OUTPUT_DIR, "run_log.csv")
if (file.exists(log_file)) {
  existing <- read.csv(log_file)
  log_entry <- rbind(existing, log_entry)
}
write.csv(log_entry, log_file, row.names = FALSE)

message("Done.")
