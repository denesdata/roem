import csv
import os
from datetime import date
import pandas
import yfinance as yf

TICKER   = "^BET.RO"
CSV_PATH = "roem 2.0/Financial Markets/BET index.csv"
FIELDS   = ["Date", "Open", "High", "Low", "Close"]


def fetch():
    df = yf.download(TICKER, period="1mo", auto_adjust=True, progress=False)
    if isinstance(df.columns, pandas.MultiIndex):
        df.columns = [col[0] for col in df.columns]
    rows = []
    for ts, row in df.iterrows():
        if pandas.isna(row["Close"]):
            continue
        rows.append({
            "Date":  ts.strftime("%Y-%m-%d"),
            "Open":  round(float(row["Open"]),  2),
            "High":  round(float(row["High"]),  2),
            "Low":   round(float(row["Low"]),   2),
            "Close": round(float(row["Close"]), 2),
        })
    return rows


if __name__ == "__main__":
    rows = fetch()
    os.makedirs(os.path.dirname(CSV_PATH), exist_ok=True)
    with open(CSV_PATH, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDS)
        writer.writeheader()
        writer.writerows(rows)
    print(f"Written {len(rows)} rows.")
