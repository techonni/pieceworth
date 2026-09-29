// Pinterest pins (1000 × 1500 JPEG) in public/pins/<slug>.jpg: one per guide, plus the weekly picks.
// Typographic only (no brand images), in the site's minimal style. Rendered with the local Chrome.
//
// Run: node --experimental-strip-types scripts/make-pins.mjs [--chrome <path>]
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const args = process.argv.slice(2);
const chromeIndex = args.indexOf("--chrome");
const chrome = chromeIndex === -1 ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" : args[chromeIndex + 1];
const { guides } = await import(join(root, "src/lib/content.ts"));

const outDir = join(root, "public/pins");
mkdirSync(outDir, { recursive: true });
const work = mkdtempSync(join(tmpdir(), "pieceworth-pins-"));
const fonts = join(root, "node_modules/@fontsource");

// Short pin titles; the words in [brackets] are set in italic.
const titles = {
  "is-italist-legit": "Is [Italist] legit?",
  "is-hardly-ever-worn-it-legit": "Is [HEWI] legit?",
  "new-at-a-discount-or-pre-owned": "Designer pieces, [for less]",
  "import-duties-luxury-from-italy-or-uk": "Luxury from abroad: the [duties] trap",
  "where-to-buy-bottega-veneta-for-less": "Bottega Veneta, [for less]",
  "italist-or-the-brand-official-store": "Italist or the [official store]?",
  "buying-pre-owned-luxury-first-time": "Your first [pre-owned] designer piece",
  "check-designer-bag-before-buying-pre-owned": "Check a pre-owned bag [before you buy]",
};

const escape = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const styled = (text) => escape(text).replace(/\[([^\]]+)\]/g, "<em>$1</em>");

const page = ({ kicker, title, lines, footer }) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face { font-family: Cormorant; font-weight: 500; src: url("file://${fonts}/cormorant-garamond/files/cormorant-garamond-latin-500-normal.woff2"); }
@font-face { font-family: Cormorant; font-weight: 500; font-style: italic; src: url("file://${fonts}/cormorant-garamond/files/cormorant-garamond-latin-500-italic.woff2"); }
* { margin: 0; box-sizing: border-box; }
body { width: 1000px; height: 1500px; background: #fcfcfa; color: #161616; font-family: Cormorant, Georgia, serif;
  padding: 110px 100px; display: flex; flex-direction: column; }
.brand { font-size: 34px; letter-spacing: 0.08em; }
.kicker { margin-top: 250px; font-family: Helvetica, Arial, sans-serif; font-size: 22px; letter-spacing: 0.22em; text-transform: uppercase; color: #75726c; }
h1 { margin-top: 36px; font-size: 104px; line-height: 1.02; font-weight: 500; }
em { font-style: italic; }
hr { margin: 70px 0 50px; border: 0; border-top: 2px solid #161616; width: 90px; }
ul { list-style: none; padding: 0; font-family: Helvetica, Arial, sans-serif; font-size: 29px; line-height: 1.5; color: #3c3a36; }
li + li { margin-top: 14px; }
li::before { content: "— "; color: #75726c; }
.footer { margin-top: auto; font-family: Helvetica, Arial, sans-serif; font-size: 24px; letter-spacing: 0.14em; color: #75726c; text-transform: uppercase; }
</style></head><body>
<div class="brand">Pieceworth</div>
<div class="kicker">${escape(kicker)}</div>
<h1>${styled(title)}</h1>
<hr>
<ul>${lines.map((line) => `<li>${escape(line)}</li>`).join("")}</ul>
<div class="footer">${escape(footer)}</div>
</body></html>`;

const pins = guides.map((guide) => ({
  slug: guide.slug,
  kicker: "Guide",
  title: titles[guide.slug] ?? guide.question,
  lines: guide.steps.slice(0, 4).map((step) => step.title),
  footer: "pieceworth.com · free guide",
}));
pins.push({
  slug: "picks-new-designer-bags-on-sale",
  kicker: "This week's picks",
  title: "Brand-new designer bags, [on sale]",
  lines: ["Unworn, with tags", "Prada, Saint Laurent, Gucci, Burberry…", "Reduced by at least 30%", "Updated every week"],
  footer: "pieceworth.com · picks",
});

for (const pin of pins) {
  const html = join(work, `${pin.slug}.html`);
  const png = join(work, `${pin.slug}.png`);
  writeFileSync(html, page(pin));
  execFileSync(chrome, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--allow-file-access-from-files",
    "--window-size=1000,1500", `--screenshot=${png}`, `file://${html}`], { stdio: "ignore" });
  execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "86", png, "--out", join(outDir, `${pin.slug}.jpg`)], { stdio: "ignore" });
  console.log(`public/pins/${pin.slug}.jpg`);
}
