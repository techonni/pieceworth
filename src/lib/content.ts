// All the site's content: brands (affiliate partners) and guides.
// Facts about each store were read on its official pages on the date in `checkedOn` / `updatedOn`.
// Never invent an affiliate link: `affiliateUrl` stays empty until Techonni gives the Impact link.

export const siteName = "Pieceworth";
export const tagline = "Buy luxury wisely: where to shop, what to check, and whether the piece is worth it.";

export type Brand = {
  slug: string;
  name: string;
  kind: string;
  summary: string;
  website: string;
  affiliateUrl?: string;
  // Shown next to the button when the affiliate link opens a regional store.
  linkNote?: string;
  goodFor: string[];
  watchOut: string[];
  facts: { label: string; value: string }[];
  sources: { label: string; url: string }[];
  checkedOn: string;
};

export type Step = { title: string; text: string };

export type Guide = {
  slug: string;
  question: string;
  summary: string;
  updatedOn: string;
  intro: string;
  verdict?: string;
  steps: Step[];
  pitfalls: string[];
  brands: string[];
  sources: { label: string; url: string }[];
  related: string[];
};

export const brands: Brand[] = [
  {
    slug: "italist",
    name: "Italist",
    kind: "New designer pieces at a discount",
    summary: "An online store that sells brand-new designer fashion shipped directly from partner boutiques in Italy.",
    website: "https://www.italist.com",
    affiliateUrl: "https://italistinc.pxf.io/c/4284523/3912929/53066?u=https%3A%2F%2Fwww.italist.com%2F",
    goodFor: [
      "Current designer pieces (Prada, Gucci, Saint Laurent, Bottega Veneta…) below full retail price.",
      "Buyers who want duties and taxes shown before paying.",
    ],
    watchOut: [
      "Returns cost money unless you take store credit.",
      "Final Sale items can't be returned unless they arrive damaged or faulty.",
    ],
    facts: [
      { label: "Ships from", value: "Partner boutiques in Italy" },
      { label: "Delivery", value: "Free express shipping, usually 7–14 business days" },
      { label: "Duties and taxes", value: "Calculated at checkout, no extra fees on delivery" },
      { label: "Returns", value: "14 days from delivery; return costs deducted unless you choose store credit" },
      { label: "Authenticity", value: "Lifetime authenticity guarantee: 100% refund if an item is found inauthentic" },
    ],
    sources: [
      { label: "Italist: shipping policy", url: "https://italist.com/policies/shipping-policy" },
      { label: "Italist: lifetime authenticity guarantee", url: "https://italist.com/pages/lifetime-authenticity-guarantee" },
      { label: "Italist: returns and refunds", url: "https://italist.gorgias.help/en-US/articles/returns-and-refunds-353682" },
    ],
    checkedOn: "2026-09-29",
  },
  {
    slug: "hardly-ever-worn-it",
    name: "Hardly Ever Worn It (HEWI)",
    kind: "Pre-owned luxury",
    summary: "A London marketplace for pre-owned and like-new designer pieces, from private sellers and items managed by HEWI.",
    website: "https://www.hardlyeverwornit.com",
    affiliateUrl: "https://hewi.pxf.io/c/4284523/3912974/53088",
    goodFor: [
      "Sought-after pieces (Hermès, Chanel, Louis Vuitton, Dior) that are sold out or cost much more new.",
      "One-of-a-kind finds: every listing is a single item.",
    ],
    watchOut: [
      "Private sellers set their own return policy.",
      "Outside the UK, import duties and taxes may be charged on delivery.",
      "Jewelry and watches can't be returned.",
    ],
    facts: [
      { label: "Based in", value: "United Kingdom" },
      { label: "Sellers", value: "Private sellers, and items « Managed by HEWI »" },
      { label: "Authenticity", value: "Items pre-screened before listing; items managed by HEWI checked in-house" },
      { label: "Payment", value: "Held by HEWI and released to the seller once you've received the item" },
      { label: "Returns", value: "14 days for managed items; private sellers must accept returns if the item isn't as described" },
      { label: "Duties", value: "May be charged by your customs on delivery, paid by the buyer" },
    ],
    sources: [
      { label: "HEWI: how it works", url: "https://hardlyeverwornit.com/pages/how-it-works" },
      { label: "HEWI help: authentication", url: "https://hewi.gorgias.help/en-US/articles/authentication-367611" },
      { label: "HEWI help: returns and refunds", url: "https://hewi.gorgias.help/en-US/articles/returns-refunds-367608" },
      { label: "HEWI help: shipping and delivery", url: "https://hewi.gorgias.help/en-US/articles/shipping-delivery-367607" },
    ],
    checkedOn: "2026-09-29",
  },
  {
    slug: "the-apartment-cosenza",
    name: "The Apartment Cosenza",
    kind: "Italian designer boutique",
    summary: "A multi-brand fashion boutique based in Cosenza, Italy, with an online store that ships worldwide.",
    website: "https://www.theapartmentcosenza.com",
    affiliateUrl: "https://TheApartment.onepath.io/c/4284523/4044967/57681",
    goodFor: [
      "Designer labels such as Givenchy, The Attico, Rick Owens and Jil Sander.",
      "Shopping in your own currency: prices in EUR, USD, GBP and six more.",
    ],
    watchOut: [
      "Check delivery times, duties and the return policy for your country on the store before ordering.",
    ],
    facts: [
      { label: "Based in", value: "Cosenza, Italy" },
      { label: "Sells", value: "Women's and men's clothing, bags, shoes, accessories, jewelry, beauty and home" },
      { label: "Ships to", value: "More than 200 countries and territories" },
      { label: "Currencies", value: "EUR, USD, GBP, JPY, CNY, AUD, CAD, HKD, KRW" },
    ],
    sources: [{ label: "The Apartment Cosenza (official store)", url: "https://www.theapartmentcosenza.com" }],
    checkedOn: "2026-09-29",
  },
  {
    slug: "coach",
    name: "Coach",
    kind: "Accessible luxury",
    summary: "The New York leather goods house, founded in 1941, known for its bags, small leather goods and accessories.",
    website: "https://www.coach.com",
    affiliateUrl: "https://coacheu.pxf.io/c/4284523/3935292/52133",
    linkNote: "Opens Coach's European store (Belgium)",
    goodFor: [
      "A first designer bag in quality leather at a lower price than the big European houses.",
      "Everyday bags and small leather goods.",
    ],
    watchOut: [
      "Check the return policy and shipping to your country on coach.com before ordering.",
    ],
    facts: [
      { label: "Founded", value: "1941, New York" },
      { label: "Known for", value: "Leather bags, wallets and accessories" },
    ],
    sources: [{ label: "Coach (official site)", url: "https://www.coach.com" }],
    checkedOn: "2026-09-29",
  },
];

export const guides: Guide[] = [
  {
    slug: "is-italist-legit",
    question: "Is Italist legit? What to know before you order",
    summary: "How Italist works, its authenticity guarantee, delivery, duties and the return rules that catch people out.",
    updatedOn: "2026-09-29",
    intro:
      "Italist sells brand-new designer pieces shipped straight from partner boutiques in Italy, often below full retail price. Here is how it works, and the few rules to read before you pay.",
    verdict:
      "Italist is a real store with a written lifetime authenticity guarantee. The main thing to plan for is returns: they cost money unless you take store credit.",
    steps: [
      {
        title: "Understand where the item comes from",
        text: "Italist doesn't hold a big stock of its own. Each item ships directly from one of its partner boutiques in Italy. Italist says these are authorized boutiques carrying official, current-season merchandise from the brands.",
      },
      {
        title: "Read the authenticity guarantee",
        text: "Italist offers a lifetime authenticity guarantee: if an item you received is ever found to be inauthentic, it refunds 100% of what you paid. Items arrive brand new, in their original packaging, with the original tags.",
      },
      {
        title: "Check the final price at checkout",
        text: "Shipping is free and express, and usually takes 7 to 14 business days. Duties and taxes are calculated at checkout, so there are no extra fees to pay on delivery. Compare the total at checkout, not just the discounted price on the product page.",
      },
      {
        title: "Look for « Final Sale » before you buy",
        text: "Final Sale items can't be returned, unless they arrive damaged or faulty. If you're unsure about the size or the color, avoid them or check the size guide twice.",
      },
      {
        title: "Know how returns work",
        text: "You have 14 days from delivery to return an eligible item. If you ask for a refund to your card, return shipping, customs duties and courier charges are deducted. If you choose store credit instead, nothing is deducted. Refunds are processed 7 to 10 business days after the package reaches the warehouse.",
      },
      {
        title: "Report a problem quickly",
        text: "If an item arrives damaged or isn't what you ordered, contact support right away instead of starting a normal return: Italist's warranty applies during the 14-day return window.",
      },
    ],
    pitfalls: [
      "Comparing the product price with a local store without adding duties and taxes shown at checkout.",
      "Buying a Final Sale item in a size you're not sure about.",
      "Asking for a card refund without knowing that return costs will be deducted.",
    ],
    brands: ["italist"],
    sources: [
      { label: "Italist: shipping policy", url: "https://italist.com/policies/shipping-policy" },
      { label: "Italist: lifetime authenticity guarantee", url: "https://italist.com/pages/lifetime-authenticity-guarantee" },
      { label: "Italist: returns and refunds", url: "https://italist.gorgias.help/en-US/articles/returns-and-refunds-353682" },
    ],
    related: ["new-at-a-discount-or-pre-owned", "import-duties-luxury-from-italy-or-uk"],
  },
  {
    slug: "is-hardly-ever-worn-it-legit",
    question: "Is Hardly Ever Worn It (HEWI) legit? How buying pre-owned works",
    summary: "Private sellers vs items managed by HEWI, authentication, payment protection, returns and duties.",
    updatedOn: "2026-09-29",
    intro:
      "Hardly Ever Worn It is a London marketplace for pre-owned and like-new designer fashion. The rules depend on who sells the item, so check that first on every listing.",
    verdict:
      "HEWI screens items before they go live and holds your payment until you've received the piece. Items « Managed by HEWI » give you the most protection; with private sellers, read their return policy before buying.",
    steps: [
      {
        title: "See who is selling",
        text: "There are two kinds of listings. « Managed by HEWI » items are handled and shipped by HEWI itself. Other items are listed by private sellers, who ship them directly to you.",
      },
      {
        title: "Understand the authentication",
        text: "HEWI says every item is pre-screened for authenticity before it's listed, by an in-house team with more than 10 years of experience. Items managed by HEWI are physically checked in-house. For some high-value pieces, such as certain Hermès bags, fine jewelry or watches, HEWI may ask for an external authentication.",
      },
      {
        title: "Know when the seller gets paid",
        text: "You pay HEWI, not the seller. The money is only released to the seller once you've received your order and are happy with it. That gives you time to check the piece.",
      },
      {
        title: "Read the return rules for that listing",
        text: "Managed items can be returned within 14 days of delivery if they're unworn and unused. Private sellers choose their own return policy, but must accept a return if the item isn't as described. Jewelry and watches can't be returned.",
      },
      {
        title: "Plan for duties outside the UK",
        text: "HEWI is based in the UK. If you're ordering from another country, your customs may charge import duties and taxes on delivery. They're paid by the buyer, and HEWI can't predict the amount.",
      },
      {
        title: "Check the piece as soon as it arrives",
        text: "Compare it with the listing photos and description before wearing it or removing any tags. If you have a doubt about authenticity, contact HEWI support right away: it can investigate and may inspect the item.",
      },
    ],
    pitfalls: [
      "Buying from a private seller without reading their return policy.",
      "Forgetting that jewelry and watches can't be returned.",
      "Removing tags before checking that the item matches the listing.",
      "Not budgeting for import duties when ordering from outside the UK.",
    ],
    brands: ["hardly-ever-worn-it"],
    sources: [
      { label: "HEWI: how it works", url: "https://hardlyeverwornit.com/pages/how-it-works" },
      { label: "HEWI help: authentication", url: "https://hewi.gorgias.help/en-US/articles/authentication-367611" },
      { label: "HEWI help: returns and refunds", url: "https://hewi.gorgias.help/en-US/articles/returns-refunds-367608" },
      { label: "HEWI help: shipping and delivery", url: "https://hewi.gorgias.help/en-US/articles/shipping-delivery-367607" },
    ],
    related: ["new-at-a-discount-or-pre-owned", "import-duties-luxury-from-italy-or-uk"],
  },
  {
    slug: "new-at-a-discount-or-pre-owned",
    question: "New at a discount or pre-owned: how to pay less for a designer piece",
    summary: "Three ways to buy luxury for less, and which one fits the piece you want.",
    updatedOn: "2026-09-29",
    intro:
      "Paying full price in a flagship store isn't the only way to own a designer piece. Depending on what you want, a discounted new item, a pre-owned one or an accessible luxury brand can make more sense.",
    steps: [
      {
        title: "Decide what matters most to you",
        text: "Do you want a brand-new piece with tags, a specific model that's sold out, or simply a beautiful leather bag at a sensible price? Your answer points to one of the three options below.",
      },
      {
        title: "Brand new, below retail: European boutiques",
        text: "Stores like Italist sell current designer pieces shipped from boutiques in Italy, often below full retail price. You get a new item with its original packaging and tags. Watch the return rules: they're usually stricter than in a flagship store.",
      },
      {
        title: "Sold out or iconic: pre-owned",
        text: "Pre-owned marketplaces like Hardly Ever Worn It are where you find pieces that are no longer in stores, or classic models at a lower price than new. Each listing is one item: check its condition, who sells it and the return rules before buying.",
      },
      {
        title: "Quality leather for less: accessible luxury",
        text: "Houses like Coach make leather bags and accessories at prices well below the big European houses. It's a good route for a first designer bag you'll use every day.",
      },
      {
        title: "Compare the total, not the tag",
        text: "Add shipping, duties and taxes, and the cost of a possible return. A lower price from abroad can end up close to a local price once everything is included.",
      },
    ],
    pitfalls: [
      "Chasing the biggest discount on a piece you wouldn't buy at full price.",
      "Forgetting duties and return costs when comparing prices.",
      "Buying pre-owned without looking at the condition photos in detail.",
    ],
    brands: ["italist", "hardly-ever-worn-it", "coach", "the-apartment-cosenza"],
    sources: [
      { label: "Italist: shipping policy", url: "https://italist.com/policies/shipping-policy" },
      { label: "HEWI: how it works", url: "https://hardlyeverwornit.com/pages/how-it-works" },
    ],
    related: ["is-italist-legit", "is-hardly-ever-worn-it-legit"],
  },
  {
    slug: "import-duties-luxury-from-italy-or-uk",
    question: "Buying luxury from Italy or the UK: will you pay import duties?",
    summary: "When duties are included at checkout, when they're charged on delivery, and how to avoid surprises.",
    updatedOn: "2026-09-29",
    intro:
      "Many luxury stores ship worldwide, but they don't all handle duties and taxes the same way. Some include them at checkout; others leave them to be paid when the parcel arrives.",
    steps: [
      {
        title: "Find out where the item ships from",
        text: "The rules depend on the country the parcel leaves from and the country it goes to. Italist ships from Italy. Hardly Ever Worn It is based in the UK. The Apartment Cosenza is in Italy.",
      },
      {
        title: "Check whether duties are included at checkout",
        text: "Some stores calculate duties and taxes at checkout, so the price you pay is final. Italist works this way: duties and taxes are shown at checkout, with no extra fees on delivery.",
      },
      {
        title: "Or plan to pay on delivery",
        text: "Other stores leave duties to the buyer. HEWI says international orders may be charged import duties and taxes when they reach your country, set by your local customs, and it can't predict the amount. The carrier usually asks for payment before handing over the parcel.",
      },
      {
        title: "Estimate before you buy",
        text: "Look up your own customs authority's rules for clothing, bags or jewelry from that country. Rates and thresholds change, so check them on the day you order rather than relying on an old forum post.",
      },
      {
        title: "Remember duties on returns",
        text: "Returning an item doesn't always get your duties back. At Italist, customs duties are deducted from card refunds. At HEWI, returns involving customs charges are refunded minus return shipping and a handling fee.",
      },
    ],
    pitfalls: [
      "Assuming « free shipping » means no other costs.",
      "Refusing a parcel to avoid duties: it can create return costs and delays.",
      "Relying on duty rates you read months ago.",
    ],
    brands: ["italist", "hardly-ever-worn-it", "the-apartment-cosenza"],
    sources: [
      { label: "Italist: shipping policy", url: "https://italist.com/policies/shipping-policy" },
      { label: "Italist: returns and refunds", url: "https://italist.gorgias.help/en-US/articles/returns-and-refunds-353682" },
      { label: "HEWI help: shipping and delivery", url: "https://hewi.gorgias.help/en-US/articles/shipping-delivery-367607" },
      { label: "HEWI help: returns and refunds", url: "https://hewi.gorgias.help/en-US/articles/returns-refunds-367608" },
    ],
    related: ["is-italist-legit", "is-hardly-ever-worn-it-legit"],
  },
];

export function getBrand(slug: string) {
  return brands.find((brand) => brand.slug === slug);
}

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function brandLink(brand: Brand) {
  return brand.affiliateUrl ?? brand.website;
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
