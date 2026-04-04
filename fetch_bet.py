import csv
import os
from datetime import date, timedelta, datetime
import yfinance as yf

TICKER   = "^BET.RO"
CSV_PATH = "roem 2.0/Financial Markets/BET index.csv"
FIELDS   = ["date", "open", "high", "low", "close", "volume"]


def load_existing_dates(path):
    if not os.path.exists(path):
        return set()
    with open(path, newline="") as f:
        return {row["date"] for row in csv.DictReader(f)}


def fetch(ticker, days_back=7):
    start = (date.today() - timedelta(days=days_back * 2)).isoformat()
    end   = (date.today() + timedelta(days=1)).isoformat()
    df    = yf.download(ticker, start=start, end=end, auto_adjust=True, progress=False)
    if df.empty:
        return []

    # yfinance returns MultiIndex columns when downloading a single ticker;
    # flatten to simple column names
    if isinstance(df.columns, __import__('pandas').MultiIndex):
        df.columns = [col[0] for col in df.columns]

    rows = []
    for ts, row in df.iterrows():
        rows.append({
            "date":   ts.strftime("%Y-%m-%d"),
            "open":   round(float(row["Open"]),  2),
            "high":   round(float(row["High"]),  2),
            "low":    round(float(row["Low"]),   2),
            "close":  round(float(row["Close"]), 2),
            "volume": int(row["Volume"]) if row["Volume"] == row["Volume"] else 0,
        })
    return rows


def append_new(path, rows, existing):
    new = sorted([r for r in rows if r["date"] not in existing], key=lambda r: r["date"])
    if not new:
        print("No new rows.")
        return 0
    os.makedirs(os.path.dirname(path), exist_ok=True)
    write_header = not os.path.exists(path)
    with open(path, "a", newline="") as f:
        w = csv.DictWriter(f, fieldnames=FIELDS)
        if write_header:
            w.writeheader()
        w.writerows(new)
    for r in new:
        print(f"  added {r['date']}  close={r['close']}")
    return len(new)


if __name__ == "__main__":
    print(f"[{date.today()} UTC] Fetching {TICKER}...")
    existing = load_existing_dates(CSV_PATH)
    rows     = fetch(TICKER)
    n        = append_new(CSV_PATH, rows, existing)
    print(f"Done — {n} new row(s).")
