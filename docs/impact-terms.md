# Impact contracts (read on 2026-09-29, last modified 2026-09-28)

| Brand | Program | Commission | No commission on |
|---|---|---|---|
| Italist | 53066 | 10% of order | items under $250; promo codes 5OFFNEXT, 10ATCHECKOUT, Infinity, LOYALTY150, WELCOME10 |
| HEWI | 53088 | 6% new customer, 4% others | promo code BANK10 |
| The Apartment | 57681 | 7% of order | — |
| Coach EU (Tapestry) | 52133 | 6% of order | only EU and DE online sales count |

All four: last click, 30-day attribution window, brand may reverse up to 100% (returns).
Payment: validated 27 days after the end of the month, paid 20 days later (Coach: validated 30 days after month end, invoiced on the 5th, paid 60 days after invoicing).
Terms can change with 1 day notice (The Apartment: 7 days).

The contracts say nothing about images. Rule for the site: only use creatives and product-catalog images provided inside Impact, never images copied from the stores' websites.

## Consequences for content
- Italist is the priority (highest rate, AOV around $1,100). Feature items of $250 or more.
- Never publish the brands' promo codes: sales with them pay nothing.
- HEWI pays more for new customers: target first-time pre-owned buyers.
- Coach only pays on European sales: no Coach-focused guides for the US audience; revisit with FR/PT versions.

## HEWI product catalog (Brand New feed)
- Export from Impact as CSV (`Brand-New-Feed_CUSTOM.csv`), then: `python3 scripts/make-picks.py <csv> <YYYY-MM-DD>` → `src/data/picks-hewi-new-bags.json` → page `/picks/new-designer-bags-on-sale/`. Refresh weekly.
- The catalog's own tracking links (ad 4026132, hewi-shop.myshopify.com) end on an Impact « Dead End » page, so the site rebuilds tracked links to hardlyeverwornit.com with the working HEWI link (ad 3912974, `?u=`).
- Images: catalog images provided through Impact, hotlinked from the Shopify CDN (`&width=640`).
