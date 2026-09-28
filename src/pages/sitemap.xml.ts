import type { APIRoute } from "astro";
import { brands, guides } from "../lib/content";

export const GET: APIRoute = ({ site }) => {
  const paths = [
    "/",
    "/guides/",
    "/stores/",
    "/about/",
    "/affiliate-disclosure/",
    ...guides.map((guide) => `/guides/${guide.slug}/`),
    ...brands.map((brand) => `/stores/${brand.slug}/`),
  ];
  const urls = paths.map((path) => `  <url><loc>${new URL(path, site).href}</loc></url>`).join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
};
