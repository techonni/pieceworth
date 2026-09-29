import type { APIRoute } from "astro";
import { brands, guides } from "../lib/content";
import { categories, paginate, shopBrands } from "../lib/catalog";

export const GET: APIRoute = ({ site }) => {
  const paths = [
    "/",
    "/guides/",
    "/stores/",
    "/picks/new-designer-bags-on-sale/",
    "/about/",
    "/affiliate-disclosure/",
    ...guides.map((guide) => `/guides/${guide.slug}/`),
    ...brands.map((brand) => `/stores/${brand.slug}/`),
    "/shop/",
    "/shop/brands/",
    ...categories.flatMap((category) => paginate(category.items, `/shop/${category.slug}/`).map((page) => page.href(page.page))),
    ...shopBrands.flatMap((brand) => paginate(brand.items, `/shop/brands/${brand.slug}/`).map((page) => page.href(page.page))),
  ];
  const urls = paths.map((path) => `  <url><loc>${new URL(path, site).href}</loc></url>`).join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
};
