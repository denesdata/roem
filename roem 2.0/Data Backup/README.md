# RoEM data backup

Daily copy of the data files the RoEM website and the data API publish, written by the RoEM 2.0 data pipeline
(publisher → Postgres → published files → this folder). One commit per day, only when a file changed; the git history
of this folder is the history of the published data.

- `<domain>/<code>.csv`: one file per tile, the same content as `https://roem-api.csaladen.es/tiles/<code>.csv`
  (also served at `/api/tiles/<code>.csv` on the website; JSON and Excel versions are available there too). Columns: `period`, `period_label`, `series`, the dimension
  codes with their labels in English, Romanian and Hungarian, `value`, `unit` (pivot tiles: one column per code).
- `views/`: computed JSON views (DFM and economic heatmaps).
- `manifest.json`: every file with its dataset, source, unit, row count, period range and SHA-256.

Names follow the RoEM naming convention (`docs/NAMING.md` in the roem2 repository). The full history of every value
(vintages) is in the RoEM database and the API (`/v1/datasets/<slug>`); this folder holds the latest state each day.
The old files elsewhere in this repository are left as they were.
