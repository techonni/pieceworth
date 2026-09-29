import type { APIRoute } from "astro";
import { guidePath, guides, paths } from "../lib/i18n";

export const GET: APIRoute = ({ site }) => {
  const pagePaths = Object.values(paths).flatMap((page) => [page.en, page.fr]);
  const guidePaths = (["en", "fr"] as const).flatMap((lang) => guides[lang].map((guide) => guidePath(lang, guide)));
  const urls = [...pagePaths, ...guidePaths].map((path) => `  <url><loc>${new URL(path, site).href}</loc></url>`).join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
};
