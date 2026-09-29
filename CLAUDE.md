## Project

Pieceworth (pieceworth.com): an anonymous affiliate site about buying luxury wisely, in **English** (US audience first). Owner: Techonni (not a developer; answer him in Portuguese, simply). Design is **minimal** by his request: ivory background, serif titles, no decoration.

- Stack: Astro + Tailwind, static. All content in `src/lib/content.ts` (brands and guides).
- Hosting: **Cloudflare Pages** (project `pieceworth`), deploys `main` on every push. Check changes on https://pieceworth.com (HTTP 200) after pushing; the Cloudflare connector cannot read Pages deployments.
- Local dev server: `npx astro dev --port 4322 --background`.

## Affiliate rules

- Programs on Impact: Italist 10%, The Apartment 7%, HEWI 6% new / 4% others, Coach EU 6% (EU sales only). Full terms: `docs/impact-terms.md`. Read it before writing money content.
- Never invent an affiliate link. Links to a precise page use `deepLink()` (Impact `?u=`), always with a SubId1 naming the page.
- Never publish the brands' promo codes (sales with them pay no commission). Italist pays nothing on items under $250.
- Images: only Impact catalog images or our own designs. Never copy images from the stores' websites.
- Every fact about a store comes from its official pages, with the date checked and the source listed in the guide. Don't write claims you haven't verified.

## Recurring work

- Weekly picks: Techonni exports the HEWI « Brand New » catalog from Impact → `python3 scripts/make-picks.py <csv> <YYYY-MM-DD>` → check links and images → publish.
- Pinterest: `node --experimental-strip-types scripts/make-pins.mjs` renders pins in `public/pins/`; the bulk upload CSV goes in `docs/pinterest-agendar-N.csv` and Techonni uploads it (Settings → Bulk create Pins). Start slowly: 2 pins a day.

## End of session

Update `docs/PROXIMA-SESSAO.md` (state, what's pending on Techonni's side, next steps), push it to `main`, and send him the file.
