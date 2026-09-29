# Pieceworth Design System

Pieceworth (pieceworth.com) is an anonymous, independent affiliate site about buying luxury wisely, written in English for a US-first audience. It publishes short how-to guides ("Is Italist legit?"), store fact sheets, and a weekly "Picks" page of discounted designer bags. Revenue comes from Impact affiliate links (Italist, HEWI, The Apartment, Coach EU). Design is deliberately minimal by the owner's request: **ivory background, serif titles, no decoration.**

**Source:** GitHub `techonni/pieceworth` (branch `main`) — Astro 7 + Tailwind 4, static, hosted on Cloudflare Pages. Styles: `src/styles/global.css`; shell: `src/layouts/Base.astro`; pages: `src/pages/**`; all copy: `src/lib/content.ts`; pins: `scripts/make-pins.mjs`.

## Index
- `styles.css` — entry point (imports only) → `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`
- `components/core/` — SiteLayout, Eyebrow, PageTitle, EntryList, StoreGrid, StoreLink, Verdict, GuideStep, DashList, FactList, PickCard (+ `core.card.html`)
- `ui_kits/website/` — interactive recreation (Home, Guides, Guide, Picks, Stores, Store, About)
- `guidelines/` — foundation specimen cards (colors, type, links, spacing, layout, brand)
- `assets/` — `pieceworth-logo.png`, `pieceworth-cover.png`, `favicon.svg`, `pins/*.jpg`
- `SKILL.md` — Agent Skill entry

The source has no component library (one Astro component, `StoreLink`); the other components are the repeated Tailwind patterns in the page templates, extracted 1:1. **Intentional additions:** none beyond these extractions.

## Content fundamentals
- **Voice:** calm, practical, second person ("before you buy", "you may earn…"). "We" for the site ("the date we checked them"). Never hype.
- **Headlines are questions** the reader would type: "Is Italist legit? What to know before you order", "Where to buy Bottega Veneta for less".
- **Sentence case** everywhere; uppercase only via the eyebrow style (GUIDES, THIS WEEK, GUIDE · UPDATED …).
- **Steps are imperative:** "Check the final price at checkout", "Look for « Final Sale » before you buy".
- **Honesty signals:** dates checked, official sources listed, "Affiliate link" beside every outbound link, footer disclosure on every page. "Rules change: check them again before you buy."
- Punctuation: middle dot `·` as separator, em dash `—` as list marker, French guillemets « » for store section names, `↗` on outbound links, `−` (minus) for discounts.
- **No emoji.** No exclamation marks. Numbers written out in prose ("Twelve bags").
- Rules: never publish promo codes; never invent affiliate links; only verified facts.

## Visual foundations
- **Palette:** four colors only — Paper `#fcfcfa`, Ink `#161616`, Muted `#75726c`, Line `#e8e6e1`. Product images sit directly on Paper with `mix-blend-mode: multiply`, so their white background disappears (no white wells). No accent color, no semantic red/green.
- **Type:** Cormorant Garamond 500 for all headings and the wordmark (hero 52/1.1, article 44/1.15, page 40/1.25, step 24, entry 22, verdict 21, related 20). Geist for body 15/28, small 13, caption 12. Eyebrows: 12px uppercase, tracking 0.18em, muted. Product brand labels: 12px uppercase 0.14em ink. Pins use italic Cormorant for emphasis words.
- **Layout:** one centered column, max-width 42rem (672px), 20px/24px side padding. Header baseline-aligned, 32px vertical padding. Sections 56–64px apart; guide steps 40px apart. Main has 96px bottom padding.
- **Dividers:** 1px Line hairlines above/below lists and between rows; 1px Ink only for the link underline and the verdict's left rule.
- **Backgrounds:** flat Paper. No images, gradients, textures or patterns on pages.
- **Imagery:** only Impact catalog product shots, object-contain in squares on Paper, `mix-blend-mode: multiply` (no white box). Pins (1000×1500) are purely typographic.
- **Corners:** 0 radius everywhere. **Shadows:** none. **Cards:** none — content sits directly on paper between hairlines.
- **Hover:** links and rows fade to 60% opacity; muted links turn Ink; product images fade to 80%. **Press:** no state. **Animation:** only the default Tailwind 150ms opacity transition on images. No transparency/blur layers, no fixed elements.
- **Buttons:** none exist — calls to action are underlined text links with ↗.

## Iconography
No icon set, icon font or SVG icons. The only glyphs are unicode: `↗` (outbound), `—` (list bullet), `·` (separator), `−` (discount), « ». Favicon is `assets/favicon.svg`. Do not add icons.

## Fonts
The repo installs `@fontsource-variable/geist` and `@fontsource/cormorant-garamond` (500, 600) from npm; binaries aren't committed, so `tokens/fonts.css` loads the same families from Google Fonts.
