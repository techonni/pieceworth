// Shop catalog: in-stock « Brand New » HEWI products, built by scripts/make-catalog.py from the Impact catalog.
// Pages: /shop/ → /shop/<category>/[page]/ and /shop/brands/ → /shop/brands/<brand>/[page]/.
// No page per product: each card links straight to the store (tracked deep link).
import catalog from "../data/catalog.json";

export type Product = (typeof catalog.items)[number];

export const checkedOn = catalog.checkedOn;
export const currency = catalog.currency;
export const products: Product[] = catalog.items;
export const featured: Product[] = catalog.featured.map((id) => catalog.items[id]);

export const PER_PAGE = 48;
// A brand gets its own page from this many products; smaller brands stay in the category pages.
export const MIN_BRAND_PRODUCTS = 8;

export const categories = [
  { slug: "bags", label: "Bags", title: "Designer bags" },
  { slug: "wallets", label: "Wallets & card holders", title: "Designer wallets and card holders" },
  { slug: "sunglasses", label: "Sunglasses", title: "Designer sunglasses" },
  { slug: "belts", label: "Belts", title: "Designer belts" },
  { slug: "scarves", label: "Scarves", title: "Designer scarves" },
  { slug: "jewelry", label: "Jewelry", title: "Designer jewelry" },
  { slug: "hats", label: "Hats", title: "Designer hats" },
  { slug: "accessories", label: "Other accessories", title: "Other designer accessories" },
].map((category) => ({ ...category, items: products.filter((item) => item.category === category.slug) }));

export function slugify(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const shopBrands = Object.entries(
  products.reduce<Record<string, Product[]>>((groups, item) => {
    (groups[item.brand] ||= []).push(item);
    return groups;
  }, {}),
)
  .filter(([, items]) => items.length >= MIN_BRAND_PRODUCTS)
  .map(([name, items]) => ({ name, slug: slugify(name), items }))
  .sort((a, b) => a.name.localeCompare(b.name));

export function brandPage(name: string) {
  const brand = shopBrands.find((item) => item.name === name);
  return brand ? `/shop/brands/${brand.slug}/` : undefined;
}

// Paths for a paginated list: page 1 at `base`, then `base2/`, `base3/`…
export function paginate<T>(items: T[], base: string) {
  const total = Math.max(1, Math.ceil(items.length / PER_PAGE));
  const href = (page: number) => (page === 1 ? base : `${base}${page}/`);
  return Array.from({ length: total }, (_, index) => ({
    page: index + 1,
    total,
    param: index === 0 ? undefined : String(index + 1),
    items: items.slice(index * PER_PAGE, (index + 1) * PER_PAGE),
    href,
  }));
}

export const money = (value: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency, maximumFractionDigits: 0 }).format(value);

export const count = (value: number) => new Intl.NumberFormat("en-US").format(value);
