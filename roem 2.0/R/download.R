if (!requireNamespace("remotes", quietly = TRUE)) install.packages("remotes")
remotes::install_github("MarianNecula/TEMPO")
library(TEMPO)

TARGET_MATRIX <- "EAI_IND104P"

message("Downloading matrix: ", TARGET_MATRIX)

dir.create("roem 2.0/TEMPO data", showWarnings = FALSE, recursive = TRUE)

result <- tryCatch({
  df <- tempo_bulk(TARGET_MATRIX)
  out <- "roem 2.0/TEMPO data/EAI_IND104P.csv"
  write.csv(df, out, row.names = FALSE)
  message("Success: ", nrow(df), " rows saved to ", out)
  df
}, error = function(e) {
  message("Download failed: ", conditionMessage(e))
  NULL
})

log_entry <- data.frame(
  matrix    = TARGET_MATRIX,
  success   = !is.null(result),
  rows      = if (!is.null(result)) nrow(result) else 0,
  t
