// Two languages: English (US audience) at the root, French under /fr/.
// A guide exists in both languages with the same `id` and its own local `slug`.
import { guidesEn } from "./guides-en";
import { guidesFr } from "./guides-fr";

export type Lang = "en" | "fr";

export type Guide = {
  id: string;
  slug: string;
  question: string;
  summary: string;
  updatedOn: string;
  intro: string;
  verdict?: string;
  steps: { title: string; text: string }[];
  pitfalls: string[];
  sources: { label: string; url: string }[];
  related: string[]; // ids
};

export const siteName = "Pieceworth";
export const store = { name: "Farfetch", url: "https://www.farfetch.com/" };

export const guides: Record<Lang, Guide[]> = { en: guidesEn, fr: guidesFr };

// Language switch labels, top right of every page.
export const langLabels: Record<Lang, string> = { en: "US", fr: "FR" };
export const locales: Record<Lang, string> = { en: "en_US", fr: "fr_FR" };

export const paths = {
  home: { en: "/", fr: "/fr/" },
  guides: { en: "/guides/", fr: "/fr/guides/" },
  about: { en: "/about/", fr: "/fr/a-propos/" },
  disclosure: { en: "/affiliate-disclosure/", fr: "/fr/affiliation/" },
} as const;

export function guidePath(lang: Lang, guide: Guide) {
  return `${paths.guides[lang]}${guide.slug}/`;
}

export function getGuide(lang: Lang, id: string) {
  return guides[lang].find((guide) => guide.id === id);
}

// hreflang links and language switch targets for a guide.
export function guideAlternates(id: string) {
  return (["en", "fr"] as const).flatMap((lang) => {
    const guide = getGuide(lang, id);
    return guide ? [{ lang, path: guidePath(lang, guide) }] : [];
  });
}

export function pageAlternates(page: keyof typeof paths) {
  return (["en", "fr"] as const).map((lang) => ({ lang, path: paths[page][lang] }));
}

export function formatDate(lang: Lang, iso: string) {
  return new Date(iso).toLocaleDateString(lang === "en" ? "en-US" : "fr-FR", { year: "numeric", month: "long", day: "numeric" });
}

export const ui = {
  en: {
    tagline: "Buy luxury wisely",
    description: "Short, honest guides to buying luxury online: prices, duties, delivery and returns, from the stores' own pages.",
    home: "Home",
    guides: "Guides",
    about: "About",
    heroTitle: ["Buy luxury ", "wisely", "."],
    heroText: "Clear answers before you order on Farfetch: prices, duties, delivery, returns and payment. Short, honest guides.",
    guideLabel: "Guide",
    updated: "Updated",
    pitfalls: "Common mistakes",
    store: "The store in this guide",
    visit: "Visit Farfetch",
    affiliate: "Affiliate link",
    sources: "Official sources",
    readNext: "Read next",
    guidesTitle: "Guides",
    guidesDescription: "Guides to buying on Farfetch: legit or not, prices, duties, delivery, returns, payment and sizing.",
    footerLine: "Pieceworth · Buy luxury wisely",
    footer: "Pieceworth is an independent site, not affiliated with Farfetch. Some links are affiliate links: if you buy through them, we may earn a commission at no extra cost to you.",
    disclosure: "Affiliate disclosure",
    footerCheck: "Always check prices, delivery and return rules on the store's own site before you buy.",
    notFound: "Page not found",
    notFoundText: "This page doesn't exist, or it has moved.",
    backHome: "Back to the home page",
  },
  fr: {
    tagline: "Acheter le luxe avec discernement",
    description: "Des guides courts et honnêtes pour acheter le luxe en ligne : prix, douane, livraison et retours, d'après les pages officielles des boutiques.",
    home: "Accueil",
    guides: "Guides",
    about: "À propos",
    heroTitle: ["Acheter le luxe ", "sereinement", "."],
    heroText: "Des réponses claires avant de commander sur Farfetch : prix, douane, livraison, retours et paiement. Des guides courts et honnêtes.",
    guideLabel: "Guide",
    updated: "Mis à jour le",
    pitfalls: "Erreurs fréquentes",
    store: "La boutique de ce guide",
    visit: "Voir Farfetch",
    affiliate: "Lien affilié",
    sources: "Sources officielles",
    readNext: "À lire ensuite",
    guidesTitle: "Guides",
    guidesDescription: "Guides pour acheter sur Farfetch : fiabilité, prix, douane, livraison, retours, paiement et tailles.",
    footerLine: "Pieceworth · Acheter le luxe avec discernement",
    footer: "Pieceworth est un site indépendant, sans lien avec Farfetch. Certains liens sont affiliés : si vous achetez par leur biais, nous pouvons toucher une commission, sans surcoût pour vous.",
    disclosure: "Liens affiliés",
    footerCheck: "Vérifiez toujours les prix, la livraison et les règles de retour sur le site de la boutique avant d'acheter.",
    notFound: "Page introuvable",
    notFoundText: "Cette page n'existe pas, ou elle a changé d'adresse.",
    backHome: "Retour à l'accueil",
  },
} as const;
