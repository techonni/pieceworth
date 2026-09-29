"""Photo check for the shop: keep only upright, front-facing products of a similar size (Techonni, 29/09).

Each catalog image is downloaded small (300px wide) and measured on its white background:
- size of the product as shown in the site's square (too small or edge-to-edge is rejected),
- left/right symmetry (a front view is symmetric; angled shots, side straps and models are not),
- plain white background, nothing touching the edges.
Thresholds were tuned on Techonni's examples. Measures are cached in scripts/photo-cache.json by image URL.
"""

import concurrent.futures
import io
import json
import urllib.request
from pathlib import Path

import numpy as np
from PIL import Image

CACHE = Path(__file__).resolve().parent / "photo-cache.json"


def measure(image_url: str) -> dict:
    request = urllib.request.Request(image_url.replace("&width=640", "&width=300"), headers={"User-Agent": "Mozilla/5.0"})
    raw = Image.open(io.BytesIO(urllib.request.urlopen(request, timeout=30).read())).convert("RGBA")
    width, height = raw.size
    image = Image.new("RGB", raw.size, (255, 255, 255))
    image.paste(raw, mask=raw.split()[3])
    pixels = np.asarray(image).astype(int)
    corners = np.concatenate([pixels[:5, :5], pixels[:5, -5:], pixels[-5:, :5], pixels[-5:, -5:]]).reshape(-1, 3)
    background = np.median(corners, axis=0)
    mask = np.abs(pixels - background).max(axis=2) > 18
    rows = np.where(mask.sum(1) > max(1, width * 0.004))[0]
    cols = np.where(mask.sum(0) > max(1, height * 0.004))[0]
    if len(rows) == 0 or len(cols) == 0:
        return {"empty": 1}
    top, bottom, left, right = rows[0], rows[-1], cols[0], cols[-1]
    crop = mask[top : bottom + 1, left : right + 1]
    body = crop[int(crop.shape[0] * 0.4) :]  # lower part: ignores handles and straps
    side = max(width, height)  # the site shows each image contained in a square
    return {
        "dw": round((right - left + 1) / side, 3),
        "dh": round((bottom - top + 1) / side, 3),
        "sym": round((crop & crop[:, ::-1]).sum() / max((crop | crop[:, ::-1]).sum(), 1), 3),
        "bsym": round((body & body[:, ::-1]).sum() / max((body | body[:, ::-1]).sum(), 1), 3),
        "edge": int(left <= 1 or right >= width - 2 or top <= 1 or bottom >= height - 2),
        "bg": int(background.mean()),
    }


def verdict(m: dict, category: str) -> bool:
    if m.get("empty") or m.get("error") or m["edge"] or m["bg"] < 240:
        return False
    size = max(m["dw"], m["dh"])
    if size < 0.58 or size > 0.88:  # too small in the square, or filling it edge to edge
        return False
    if m["dw"] * m["dh"] < (0.23 if category == "bags" else 0.17):  # flat, low pieces look tiny
        return False
    return m["sym"] >= 0.9 and m["bsym"] >= 0.9  # front view, upright


def keep_beautiful(items: list[dict]) -> list[dict]:
    cache = json.loads(CACHE.read_text()) if CACHE.exists() else {}

    def safe(url: str) -> dict:
        try:
            return measure(url)
        except Exception:
            return {"error": 1}

    missing = [item["image"] for item in items if item["image"] not in cache]
    with concurrent.futures.ThreadPoolExecutor(32) as pool:
        for url, result in zip(missing, pool.map(safe, missing)):
            if not result.get("error"):
                cache[url] = result
    live = {item["image"] for item in items}
    CACHE.write_text(json.dumps({url: m for url, m in cache.items() if url in live}, separators=(",", ":")) + "\n")
    return [item for item in items if verdict(cache.get(item["image"], {"error": 1}), item["category"])]
