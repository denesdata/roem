import csv
import os
from datetime import date
import pandas
import yfinance as yf

TICKER   = "^BET.RO"
CSV_PATH = "roem 2.0/Financial Markets/BET index.csv"
FIELDS   = ["Date", "Open", "High", "Low", "Close"]


def load_existing_dates(path):
    if not os.path.exists(path):
        return set()
    with open(path, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        return {row["Date"] for row in reader}


def fetch(ticker, full_history=False):
    period = "max" if full_history else "5d"
    df = yf.download(ticker, period=period, auto_adjust=True, progress=False)
    if df.empty:
        print("No data returned from Yahoo Finance.")
        return []

    # Flatten MultiIndex columns (yfinance >= 0.2.x returns these for single tickers)
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


def write_csv(path, rows):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDS)
        writer.writeheader()
        writer.writerows(rows)
    print(f"Written {len(rows)} rows to {path}")


def append_new(path, rows, existing_dates):
    new = sorted(
        [r for r in rows if r["Date"] not in existing_dates],
        key=lambda r: r["Date"]
    )
    if not new:
        print("No new rows to add.")
        return 0
    with open(path, "a", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDS)
        writer.writerows(new)
    for r in new:
        print(f"  added {r['Date']}  close={r['Close']}")
    return len(new)


if __name__ == "__main__":
    print(f"[{date.today()}] Fetching {TICKER}...")

    existing = load_existing_dates(CSV_PATH)
    full_history = len(existing) == 0

    if full_history:
        print("No existing data — fetching full history...")
        rows = fetch(TICKER, full_history=True)
        write_csv(CSV_PATH, rows)
    else:
        rows = fetch(TICKER, full_history=False)
        n = append_new(CSV_PATH, rows, existing)
        print(f"Done — {n} new row(s) added.")
