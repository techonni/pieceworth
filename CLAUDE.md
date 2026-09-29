## Project

Pieceworth (pieceworth.com): an anonymous affiliate site about buying luxury wisely. Owner: Techonni (not a developer; answer him in Portuguese, short and direct). Design is **minimal** by his request: ivory background, serif titles, no decoration (see « Brand kit » below).

- Stack: Astro + Tailwind, static. Guides in `src/lib/guides-en.ts` and `src/lib/guides-fr.ts`; languages, paths and UI text in `src/lib/i18n.ts`.
- Languages: English (US audience) at the root, French (France and Belgium) under `/fr/`. Every guide exists in both, same `id`, local `slug`. The « US · FR » switch at the top right goes to the same page in the other language (hreflang). The French version uses EU facts (duties, Klarna limits), not US ones.
- Every page except the home passes `crumbs` to `Base.astro` (visible breadcrumb + BreadcrumbList JSON-LD); new pages must too.
- Hosting: **Cloudflare Pages** (project `pieceworth`), deploys `main` on every push. Check changes on https://pieceworth.com (HTTP 200) after pushing; the Cloudflare connector cannot read Pages deployments. One push = one build (free plan: 500 builds/month): batch changes.
- Local dev server: `npx astro dev --port 4322 --background`.

## Brand kit (applies to every role)

The design system lives in `.claude/skills/pieceworth-design/` (skill `pieceworth-design`). Anyone working on Pieceworth, whatever the task (developer, designer, writer, SEO, social media, email, ads), must follow it. Load the skill before producing anything visible: pages, components, pins, social images, emails, mockups, decks, copy.

- **Colors:** only Paper `#fcfcfa` (background), Ink `#161616` (text), Muted `#75726c` (secondary), Line `#e8e6e1` (1px hairlines). No white boxes. No accent, no red/green, no gradients, no textures.
- **Type:** Cormorant Garamond 500 for titles and the wordmark; Geist for body (15px/28px). Eyebrows: 12px uppercase, tracking 0.18em, Muted. Sizes in `tokens/typography.css`.
- **Layout:** one centered column, max 42rem. No cards, no shadows, 0 radius, no buttons (calls to action are underlined text links with ↗), no icons, no emoji, no fixed elements. Hover = fade to 60%.
- **Voice:** calm, practical, "you" for the reader, "we" for the site. Headlines are questions the reader would type, in sentence case. Imperative steps. No hype, no exclamation marks. Separators `·`, list marker `—`, « » for store section names, `↗` on outbound links.
- **Assets:** logo, cover and favicon in `.claude/skills/pieceworth-design/assets/` (live copies in `public/brand/`).
- Reuse the patterns in `components/core/` and `ui_kits/website/` instead of inventing new ones. If the site's styles change (`src/styles/global.css`), update the kit's tokens too.

## Affiliate rules

- Techonni left Impact (29/09/2026): no Impact links, programs or catalogs anymore. Old Impact work is in git history only.
- Network: **Sovrn Commerce** (one approval for the whole site, then 50,000+ stores). Its script in `Base.astro` turns plain store links into affiliate links: write normal links to the store (e.g. `https://www.farfetch.com/...`), never invent tracking links. Farfetch is confirmed to work through Sovrn.
- Store links in guides carry `rel="sponsored"` and the « Affiliate link » mention; the footer and `/affiliate-disclosure/` explain it.
- Never publish promo codes.
- Every fact about a store comes from its official pages, with the date checked and the source listed in the guide. Don't write claims you haven't verified. Farfetch facts read so far: `docs/farfetch-facts.md` (farfetch.com blocks scripts: read its pages in the browser).
- Product images (if a shop comes back): only images the network provides or our own designs; homogeneous photos (upright, front-facing, similar size, black or very dark brown products), set on the page background with `mix-blend-multiply`, never on a white box.

## End of session

Update `docs/PROXIMA-SESSAO.md` (state, what's pending on Techonni's side, next steps), push it to `main`, and send him the file.
