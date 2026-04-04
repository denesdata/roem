import csv
import os
from datetime import date
import pandas
import yfinance as yf

TICKER   = "^BET.RO"
CSV_PATH = "roem 2.0/Financial Markets/BET index.csv"
FIELDS   = ["Date", "Close"]


def load_existing_dates():
    if not os.path.exists(CSV_PATH):
        return set()
    with open(CSV_PATH, newline="", encoding="utf-8") as f:
        return {row["Date"] for row in csv.DictReader(f)}


def fetch():
    df = yf.download(TICKER, period="5d", auto_adjust=True, progress=False)
    if isinstance(df.columns, pandas.MultiIndex):
        df.columns = [col[0] for col in df.columns]
    rows = []
    for ts, row in df.iterrows():
        if pandas.isna(row["Close"]):
            continue
        rows.append({
            "Date":  ts.strftime("%Y-%m-%d"),
            "Close": round(float(row["Close"]), 2),
        })
    return rows


if __name__ == "__main__":
    existing = load_existing_dates()
    rows = [r for r in fetch() if r["Date"] not in existing]

    if not rows:
        print("No new rows.")
    else:
        with open(CSV_PATH, "a", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(f, fieldnames=FIELDS)
            writer.writerows(rows)
        for r in rows:
            print(f"Added {r['Date']}  close={r['Close']}")
