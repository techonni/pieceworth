"""Build the weekly « brand-new designer bags on sale » selection from the HEWI Impact catalog.

Usage: python3 scripts/make-picks.py ~/Downloads/Brand-New-Feed_CUSTOM.csv 2026-09-29

The catalog's own tracking links end on an Impact « Dead End » page (the catalog ad isn't active
on our account), so the site builds its own tracked links to hardlyeverwornit.com (see deepLink).
Images come from the catalog, which Impact provides for affiliates to promote the products.
"""

import csv
import json
import sys
import urllib.parse
from pathlib import Path

LUXURY = {
    "Prada", "Miu Miu", "Gucci", "Saint Laurent", "Valentino Garavani", "Burberry", "Balenciaga",
    "Alexander McQueen", "Ferragamo", "Chloé", "Jacquemus", "Givenchy", "Dolce & Gabbana", "Jil Sander",
    "Marni", "Bottega Veneta", "Fendi", "Loewe", "Celine", "Versace", "Stella McCartney", "Bally",
}
MIN_PRICE = 250  # GBP, keeps the selection in the premium range
MIN_DISCOUNT = 0.30
PER_BRAND = 2
COUNT = 12
TIERS = [(1000, 10**9), (MIN_PRICE, 1000)]  # half the picks in each price range (GBP)


def number(value: str) -> float:
    try:
        return float(value)
    except ValueError:
        return 0.0


def product_url(tracking_url: str) -> str:
    """The catalog link wraps a hewi-shop.myshopify.com URL; rebuild it on the public domain."""
    target = urllib.parse.parse_qs(urllib.parse.urlparse(tracking_url).query)["u"][0]
    parsed = urllib.parse.urlparse(target)
    return f"https://hardlyeverwornit.com{parsed.path}?{parsed.query}"


def main() -> None:
    source, checked_on = Path(sys.argv[1]).expanduser(), sys.argv[2]
    candidates = []
    with source.open(encoding="utf-8") as handle:
        for row in csv.DictReader(handle):
            if row["Availability"] != "InStock" or row["Vendor"] not in LUXURY:
                continue
            if row["Category"] != "Handbag & Wallet Accessories" or "bag" not in row["Title"].lower():
                continue
            price, was = number(row["Sale Price"] or row["Price"]), number(row["Compare at"])
            if price < MIN_PRICE or was <= price or 1 - price / was < MIN_DISCOUNT:
                continue
            title = row["Title"].split(" — ")
            candidates.append({
                "brand": row["Vendor"],
                "name": title[0].removeprefix(row["Vendor"]).strip() or title[0],
                "detail": row["Color"] or (title[1] if len(title) > 1 else ""),
                "price": round(price),
                "was": round(was),
                "discount": round((1 - price / was) * 100),
                "currency": row["Currency"],
                "image": row["Image"] + "&width=640",
                "url": product_url(row["URL"]),
                "sku": row["Variant SKU"],
            })

    candidates.sort(key=lambda item: (-item["discount"], -item["price"]))
    picks, per_brand = [], {}
    for low, high in TIERS:
        taken = 0
        for item in candidates:
            if not low <= item["price"] < high or item in picks or per_brand.get(item["brand"], 0) >= PER_BRAND:
                continue
            per_brand[item["brand"]] = per_brand.get(item["brand"], 0) + 1
            picks.append(item)
            taken += 1
            if taken == COUNT // len(TIERS):
                break

    out = Path(__file__).resolve().parent.parent / "src/data/picks-hewi-new-bags.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps({"checkedOn": checked_on, "items": picks}, ensure_ascii=False, indent=2) + "\n")
    print(f"{len(candidates)} candidates, {len(picks)} picks written to {out}")


if __name__ == "__main__":
    main()
