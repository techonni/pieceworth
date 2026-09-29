"""Build the shop catalog (src/data/catalog.json) from the HEWI « Brand New » Impact catalog.

Usage: python3 scripts/make-catalog.py ~/Downloads/Brand-New-Feed_CUSTOM.csv 2026-09-29

Keeps in-stock products only (a sold-out piece earns nothing), one entry per product (size variants
are merged), sorted by discount. Also picks the pieces shown on the home page.
Images and links come from the catalog, which Impact provides for affiliates (see make-picks.py).
"""

import csv
import json
import sys
import urllib.parse
from pathlib import Path

# Same list as make-picks.py: brands featured on the home page.
LUXURY = {
    "Prada", "Miu Miu", "Gucci", "Saint Laurent", "Valentino Garavani", "Burberry", "Balenciaga",
    "Alexander McQueen", "Ferragamo", "Chloé", "Jacquemus", "Givenchy", "Dolce & Gabbana", "Jil Sander",
    "Marni", "Bottega Veneta", "Fendi", "Loewe", "Celine", "Versace", "Stella McCartney", "Bally",
}
# Home page mix, in display order (category slug, count): bags and small leather goods only (Techonni, 29/09).
FEATURED = [("bags", 10), ("wallets", 4)]
FEATURED_MIN_PRICE = 150  # GBP
FEATURED_MIN_DISCOUNT = 30  # %


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


def category(row: dict) -> str:
    source, title = row["Category"], row["Title"].lower()
    mapping = {
        "Handbag & Wallet Accessories": "bags",
        "Wallets": "wallets",
        "Luggage & Bags": "wallets",  # travel wallets and beauty cases
        "Belts": "belts",
        "Hats": "hats",
        "Flats": "hats",  # flat caps
        "Jewelry": "jewelry",
        "Brooches & Lapel Pins": "jewelry",
        "Scarves & Shawls": "scarves",
    }
    if source in mapping:
        return mapping[source]
    if not source:
        if any(word in title for word in ("beanie", " cap", " hat")):
            return "hats"
        if any(word in title for word in ("wallet", "card", "case", "purse", "pouch")):
            return "wallets"
        if any(word in title for word in (" bag", "clutch", "backpack", "tote")):
            return "bags"
    return "accessories"


def is_eyewear(row: dict) -> bool:
    text = f"{row['Category']} {row['Title']}".lower()
    return any(word in text for word in ("sunglass", "glasses", "eyewear", "optical", "eyeglass", "spectacle"))


def name(row: dict) -> str:
    title = row["Title"].split(" — ")[0].removesuffix(" /").strip()
    vendor = row["Vendor"]
    if title.lower().startswith(vendor.lower()):
        title = title[len(vendor):].strip()
    return title or row["Title"]


def main() -> None:
    source, checked_on = Path(sys.argv[1]).expanduser(), sys.argv[2]
    products = {}
    with source.open(encoding="utf-8-sig") as handle:
        for row in csv.DictReader(handle):
            if row["Availability"] != "InStock" or row["Condition"] != "New":
                continue
            if is_eyewear(row):  # no sunglasses or glasses anywhere on the site (Techonni, 29/09)
                continue
            url = product_url(row["URL"])
            key = urllib.parse.urlparse(url).path
            price, was = number(row["Sale Price"] or row["Price"]), number(row["Compare at"])
            if price <= 0:
                continue
            if key in products and products[key]["price"] <= round(price):
                continue
            discount = round((1 - price / was) * 100) if was > price else 0
            products[key] = {
                "brand": row["Vendor"],
                "name": name(row),
                "detail": row["Color"],
                "price": round(price),
                "was": round(was) if discount else 0,
                "discount": discount,
                "category": category(row),
                "gender": row["Gender"],
                "image": row["Image"] + "&width=640",
                "url": url,
            }

    items = sorted(products.values(), key=lambda item: (-item["discount"], -item["price"]))
    for index, item in enumerate(items):
        item["id"] = index

    featured, per_brand = [], {}
    for slug, count in FEATURED:
        taken = 0
        for item in items:
            if taken == count:
                break
            if item["category"] != slug or item["brand"] not in LUXURY or per_brand.get(item["brand"], 0) >= 2:
                continue
            if item["price"] < FEATURED_MIN_PRICE or item["discount"] < FEATURED_MIN_DISCOUNT:
                continue
            per_brand[item["brand"]] = per_brand.get(item["brand"], 0) + 1
            featured.append(item["id"])
            taken += 1

    output = Path(__file__).resolve().parent.parent / "src/data/catalog.json"
    catalog = {"checkedOn": checked_on, "currency": "GBP", "featured": featured, "items": items}
    output.write_text(json.dumps(catalog, ensure_ascii=False, separators=(",", ":")) + "\n", encoding="utf-8")
    print(f"{len(items)} products, {len(featured)} featured → {output}")


if __name__ == "__main__":
    main()
