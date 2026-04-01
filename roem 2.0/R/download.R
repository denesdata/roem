if (!requireNamespace("remotes", quietly = TRUE)) install.packages("remotes")
remotes::install_github("MarianNecula/TEMPO")
library(TEMPO)

# ── Step 1: search TOC for the right matrix code ─────────────────────────────
message("Fetching table of contents...")
toc <- tryCatch(tempo_toc(), error = function(e) {
  message("TOC fetch failed: ", conditionMessage(e))
  NULL
})

if (!is.null(toc)) {
  message("=== Columns in TOC ===")
  print(names(toc))
  message("=== First few rows ===")
  print(head(toc))

  # Search for GDP / national accounts related tables
  matches <- toc[apply(toc, 1, function(row) {
    any(grepl("EAI|PIB|GDP|IND104|conturi|national", row, ignore.case = TRUE))
  }), ]
  message("=== Matching matrices ===")
  print(matches)
}

# ── Step 2: download with retry ───────────────────────────────────────────────
TARGET_MATRIX <- "EAI_IND104P"
MAX_TRIES <- 3

message("\nDownloading matrix: ", TARGET_MATRIX)

dir.create("roem 2.0/TEMPO data", showWarnings = FALSE, recursive = TRUE)

result <- NULL
for (i in seq_len(MAX_TRIES)) {
  message("Attempt ", i, " of ", MAX_TRIES)
  result <- tryCatch({
    df <- tempo_bulk(TARGET_MATRIX)
    out <- "roem 2.0/TEMPO data/EAI_IND104P.csv"
    write.csv(df, out, row.names = FALSE)
    message("Success: ", nrow(df), " rows saved to ", out)
    df
  }, error = function(e) {
    message("Attempt ", i, " failed: ", conditionMessage(e))
    Sys.sleep(10)
    NULL
  })
  if (!is.null(result)) break
}

# ── Step 3: log the run ───────────────────────────────────────────────────────
log_entry <- data.frame(
  matrix    = TARGET_MATRIX,
  success   = !is.null(result),
  rows      = if (!is.null(result)) nrow(result) else 0,
  timestamp = as.character(Sys.time())
)

log_file <- "roem 2.0/TEMPO data/run_log.csv"
if (file.exists(log_file)) {
  existing <- read.csv(log_file)
  log_entry <- rbind(existing, log_entry)
}
write.csv(log_entry, log_file, row.names = FALSE)

if (is.null(result)) stop("All attempts failed for matrix: ", TARGET_MATRIX)
