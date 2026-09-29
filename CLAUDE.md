## Project

Pieceworth (pieceworth.com): an anonymous affiliate site about buying luxury wisely, in **English** (US audience first). Owner: Techonni (not a developer; answer him in Portuguese, short and direct). Design is **minimal** by his request: ivory background, serif titles, no decoration (see « Brand kit » below).

- Stack: Astro + Tailwind, static. All content in `src/lib/content.ts` (brands and guides).
- Hosting: **Cloudflare Pages** (project `pieceworth`), deploys `main` on every push. Check changes on https://pieceworth.com (HTTP 200) after pushing; the Cloudflare connector cannot read Pages deployments.
- Local dev server: `npx astro dev --port 4322 --background`.

## Brand kit (applies to every role)

The design system lives in `.claude/skills/pieceworth-design/` (skill `pieceworth-design`). Anyone working on Pieceworth, whatever the task (developer, designer, writer, SEO, social media, email, ads), must follow it. Load the skill before producing anything visible: pages, components, pins, social images, emails, mockups, decks, copy.

- **Colors:** only Paper `#fcfcfa` (background), Ink `#161616` (text), Muted `#75726c` (secondary), Line `#e8e6e1` (1px hairlines). White only behind product images. No accent, no red/green, no gradients, no textures.
- **Type:** Cormorant Garamond 500 for titles and the wordmark; Geist for body (15px/28px). Eyebrows: 12px uppercase, tracking 0.18em, Muted. Sizes in `tokens/typography.css`.
- **Layout:** one centered column, max 42rem. No cards, no shadows, 0 radius, no buttons (calls to action are underlined text links with ↗), no icons, no emoji, no fixed elements. Hover = fade to 60%.
- **Voice:** calm, practical, "you" for the reader, "we" for the site. Headlines are questions the reader would type, in sentence case. Imperative steps. No hype, no exclamation marks. Separators `·`, list marker `—`, « » for store section names, `↗` on outbound links.
- **Assets:** logo, cover and favicon in `.claude/skills/pieceworth-design/assets/` (live copies in `public/brand/`). Pins are typographic 1000×1500, made by `scripts/make-pins.mjs`.
- Reuse the patterns in `components/core/` and `ui_kits/website/` instead of inventing new ones. If the site's styles change (`src/styles/global.css`), update the kit's tokens too.

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
