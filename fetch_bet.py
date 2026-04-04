import csv
import os
from datetime import date
import pandas
import yfinance as yf

TICKER   = "^BET.RO"
CSV_PATH = "roem 2.0/Financial Markets/BET index.csv"
FIELDS   = ["Date", "Open", "High", "Low", "Close"]

# BET index launched September 1997
HISTORY_START = "1997-09-01"


def load_existing_dates(path):
    if not os.path.exists(path):
        return set()
    with open(path, newline="", encoding="utf-8") as f:
        return {row["Date"] for row in csv.DictReader(f)}


def flatten(df):
    """Flatten MultiIndex columns that yfinance returns for single tickers."""
    if isinstance(df.columns, pandas.MultiIndex):
        df.columns = [col[0] for col in df.columns]
    return df


def fetch(start, end=None):
    if end is None:
        end = date.today().isoformat()
    print(f"  Downloading {TICKER}  {start} → {end}")

    df = yf.download(TICKER, start=start, end=end, auto_adjust=True, progress=False)
    print(f"  Raw rows returned: {len(df)}")

    if df.empty:
        return []

    df = flatten(df)
    print(f"  Columns after flatten: {df.columns.tolist()}")

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

    if not existing:
        print("No existing data — fetching full history...")
        rows = fetch(start=HISTORY_START)
        if rows:
            write_csv(CSV_PATH, rows)
        else:
            print("ERROR: No data returned. Check ticker or Yahoo Finance availability.")
    else:
        print(f"Found {len(existing)} existing dates, fetching recent...")
        rows = fetch(start=sorted(existing)[-1])
        n = append_new(CSV_PATH, rows, existing)
        print(f"Done — {n} new row(s) added.")
