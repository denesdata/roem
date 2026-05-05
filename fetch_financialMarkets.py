import csv
import os
from datetime import date
import pandas
import yfinance as yf

INDICES = [
    {"ticker": "^BET.RO", "path": "roem 2.0/Financial Markets/BET index.csv"},
    {"ticker": "000001.SS",   "path": "roem 2.0/Financial Markets/SSEC.csv"},
]
FIELDS = ["Date", "Close"]


def load_existing_dates(path):
    if not os.path.exists(path):
        return set()
    with open(path, newline="", encoding="utf-8") as f:
        return {row["Date"] for row in csv.DictReader(f)}


def fetch(ticker):
    df = yf.download(ticker, period="5d", auto_adjust=True, progress=False)
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


def append_new(path, rows, existing):
    new = sorted(
        [r for r in rows if r["Date"] not in existing],
        key=lambda r: r["Date"]
    )
    if not new:
        print(f"  No new rows.")
        return
    with open(path, "a", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDS)
        writer.writerows(new)
    for r in new:
        print(f"  added {r['Date']}  close={r['Close']}")


if __name__ == "__main__":
    for index in INDICES:
        print(f"[{date.today()}] {index['ticker']}")
        existing = load_existing_dates(index["path"])
        rows = fetch(index["ticker"])
        append_new(index["path"], rows, existing)
