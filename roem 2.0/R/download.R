if (!requireNamespace("remotes", quietly = TRUE)) install.packages("remotes")
remotes::install_github("MarianNecula/TEMPO")
library(TEMPO)

TARGET_MATRIX <- "IND104P"
OUTPUT_DIR    <- "roem 2.0/TEMPO data"

message("Downloading matrix: ", TARGET_MATRIX)

dir.create(OUTPUT_DIR, showWarnings = FALSE, recursive = TRUE)

# Capture the return value directly — don't pass dir argument
df <- tryCatch({
  tempo_bulk(TARGET_MATRIX)
}, error = function(e) {
  message("tempo_bulk error: ", conditionMessage(e))
  NULL
})

message("Class of result: ", class(df))
message("Type of result: ",  typeof(df))

if (!is.null(df)) {
  if (is.data.frame(df)) {
    out <- file.path(OUTPUT_DIR, "IND104P.csv")
    write.csv(df, out, row.names = FALSE)
    message("Saved dataframe: ", nrow(df), " rows, ", ncol(df), " cols → ", out)
  } else if (is.list(df)) {
    # Sometimes tempo_bulk returns a list of dataframes
    message("Result is a list of length: ", length(df))
    for (i in seq_along(df)) {
      item <- df[[i]]
      if (is.data.frame(item)) {
        out <- file.path(OUTPUT_DIR, paste0("IND104P_", i, ".csv"))
        write.csv(item, out, row.names = FALSE)
        message("Saved list item ", i, ": ", nrow(item), " rows → ", out)
      }
    }
  } else {
    message("Unexpected result type — raw printing:")
    print(df)
  }
} else {
  message("Result was NULL — nothing to save")
}

# Log the run
files_written <- list.files(OUTPUT_DIR, pattern = "\\.csv$", full.names = FALSE)
files_written <- files_written[files_written != "run_log.csv"]

log_entry <- data.frame(
  matrix    = TARGET_MATRIX,
  files     = paste(files_written, collapse = "; "),
  rows      = if (!is.null(df) && is.data.frame(df)) nrow(df) else 0,
  timestamp = as.character(Sys.time())
)

log_file <- file.path(OUTPUT_DIR, "run_log.csv")
if (file.exists(log_file)) {
  existing <- read.csv(log_file)
  log_entry <- rbind(existing, log_entry)
}
write.csv(log_entry, log_file, row.names = FALSE)

message("Done.")
