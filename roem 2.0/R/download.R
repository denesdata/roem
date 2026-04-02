if (!requireNamespace("remotes", quietly = TRUE)) install.packages("remotes")
remotes::install_github("MarianNecula/TEMPO")
library(TEMPO)

TARGET_MATRIX <- "IND104P"
OUTPUT_DIR    <- "roem 2.0/TEMPO data"

message("Downloading matrix: ", TARGET_MATRIX)

dir.create(OUTPUT_DIR, showWarnings = FALSE, recursive = TRUE)

# Set working directory to output dir so tempo_bulk writes files there
old_wd <- getwd()
setwd(OUTPUT_DIR)
message("Working directory set to: ", getwd())

df <- tryCatch({
  tempo_bulk(matrices = TARGET_MATRIX)
}, error = function(e) {
  message("tempo_bulk error: ", conditionMessage(e))
  NULL
})

# Restore working directory
setwd(old_wd)

message("Class of result: ", class(df))

# List everything written to output dir
files_written <- list.files(OUTPUT_DIR, full.names = FALSE)
message("Files in output dir: ", paste(files_written, collapse = ", "))

if (!is.null(df)) {
  if (is.data.frame(df)) {
    out <- file.path(OUTPUT_DIR, "IND104P.csv")
    write.csv(df, out, row.names = FALSE)
    message("Saved: ", nrow(df), " rows → ", out)
  } else if (is.list(df)) {
    message("Result is list, length: ", length(df))
    for (i in seq_along(df)) {
      if (is.data.frame(df[[i]])) {
        out <- file.path(OUTPUT_DIR, paste0("IND104P_", i, ".csv"))
        write.csv(df[[i]], out, row.names = FALSE)
        message("Saved part ", i, ": ", nrow(df[[i]]), " rows → ", out)
      }
    }
  }
}

# Log the run — fixed column structure
log_entry <- data.frame(
  matrix    = TARGET_MATRIX,
  success   = !is.null(df),
  files     = paste(list.files(OUTPUT_DIR, pattern = "\\.csv$")[
                list.files(OUTPUT_DIR, pattern = "\\.csv$") != "run_log.csv"
              ], collapse = "; "),
  timestamp = as.character(Sys.time()),
  stringsAsFactors = FALSE
)

log_file <- file.path(OUTPUT_DIR, "run_log.csv")
if (file.exists(log_file)) {
  existing <- read.csv(log_file, stringsAsFactors = FALSE)
  # Force same columns before rbind
  for (col in names(log_entry)) {
    if (!col %in% names(existing)) existing[[col]] <- NA
  }
  existing <- existing[, names(log_entry)]
  log_entry <- rbind(existing, log_entry)
}
write.csv(log_entry, log_file, row.names = FALSE)

message("Done.")
