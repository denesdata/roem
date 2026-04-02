if (!requireNamespace("remotes", quietly = TRUE)) install.packages("remotes")
remotes::install_github("MarianNecula/TEMPO")
library(TEMPO)

TARGET_MATRIX <- "IND104P"
OUTPUT_DIR    <- "roem 2.0/TEMPO data"

message("Downloading matrix: ", TARGET_MATRIX)

dir.create(OUTPUT_DIR, showWarnings = FALSE, recursive = TRUE)

tryCatch({
  tempo_bulk(TARGET_MATRIX, dir = OUTPUT_DIR)
  message("Download call completed.")
}, error = function(e) {
  message("tempo_bulk error: ", conditionMessage(e))
})

# List what was written
files_written <- list.files(OUTPUT_DIR, full.names = TRUE)
message("Files in output dir:")
print(files_written)

# If tempo_bulk wrote an xlsx or csv, copy it to a clean named CSV
data_file <- files_written[grepl("IND104P|ind104p", files_written, ignore.case = TRUE)]
data_file <- data_file[!grepl("run_log", data_file)]

if (length(data_file) > 0) {
  message("Data file found: ", data_file[1])
  # If it's already a csv, just confirm; if xlsx read and re-save
  if (grepl("\\.csv$", data_file[1], ignore.case = TRUE)) {
    message("CSV confirmed at: ", data_file[1])
  } else {
    if (!requireNamespace("readxl", quietly = TRUE)) install.packages("readxl")
    df <- readxl::read_excel(data_file[1])
    out <- file.path(OUTPUT_DIR, "IND104P.csv")
    write.csv(df, out, row.names = FALSE)
    message("Converted to CSV: ", out)
  }
} else {
  message("WARNING: no data file found for IND104P")
}

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
