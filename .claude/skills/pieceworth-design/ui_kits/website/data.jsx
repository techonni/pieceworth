window.PW = (window.PieceworthDS || Object.keys(window).map(k => { try { const v = window[k]; return v && typeof v === 'object' && v.SiteLayout && v.StoreLink ? v : null; } catch (e) { return null; } }).find(Boolean)) || {};
// Copy from src/lib/content.ts (techonni/pieceworth). Step bodies abbreviated.
window.PWData = {
  brands: [
    { slug: 'italist', name: 'Italist', kind: 'New designer pieces at a discount', summary: 'An online store that sells brand-new designer fashion shipped directly from partner boutiques in Italy.' },
    { slug: 'hardly-ever-worn-it', name: 'Hardly Ever Worn It (HEWI)', kind: 'Pre-owned luxury', summary: 'A London marketplace for pre-owned and like-new designer pieces, from private sellers and items managed by HEWI.' },
    { slug: 'the-apartment', name: 'The Apartment Cosenza', kind: 'Italian designer boutique', summary: 'A multi-brand fashion boutique based in Cosenza, Italy, with an online store that ships worldwide.' },
    { slug: 'coach', name: 'Coach', kind: 'Accessible luxury', summary: 'The New York leather goods house, founded in 1941, known for its bags, small leather goods and accessories.' },
  ],
  guides: [
    { slug: 'is-italist-legit', question: 'Is Italist legit? What to know before you order', summary: 'How Italist works, its authenticity guarantee, delivery, duties and the return rules that catch people out.', brands: ['italist'],
      steps: ['Understand where the item comes from', 'Read the authenticity guarantee', 'Check the final price at checkout', 'Look for « Final Sale » before you buy', 'Know how returns work', 'Report a problem quickly'] },
    { slug: 'is-hardly-ever-worn-it-legit', question: 'Is Hardly Ever Worn It (HEWI) legit? How buying pre-owned works', summary: 'Private sellers vs items managed by HEWI, authentication, payment protection, returns and duties.', brands: ['hardly-ever-worn-it'],
      steps: ['See who is selling', 'Understand the authentication', 'Know when the seller gets paid', 'Read the return rules for that listing', 'Plan for duties outside the UK', 'Check the piece as soon as it arrives'] },
    { slug: 'new-at-a-discount-or-pre-owned', question: 'New at a discount or pre-owned: how to pay less for a designer piece', summary: 'Three ways to buy luxury for less, and which one fits the piece you want.', brands: ['italist', 'hardly-ever-worn-it', 'coach'],
      steps: ['Decide what matters most to you', 'Brand new, below retail: European boutiques', 'Sold out or iconic: pre-owned', 'Quality leather for less: accessible luxury', 'Compare the total, not the tag'] },
    { slug: 'import-duties-luxury-from-italy-or-uk', question: 'Buying luxury from Italy or the UK: will you pay import duties?', summary: "When duties are included at checkout, when they're charged on delivery, and how to avoid surprises.", brands: ['italist', 'hardly-ever-worn-it'],
      steps: ['Find out where the item ships from', 'Check whether duties are included at checkout', 'Or plan to pay on delivery', 'Estimate before you buy', 'Remember duties on returns'] },
    { slug: 'where-to-buy-bottega-veneta-for-less', question: 'Where to buy Bottega Veneta for less', summary: 'Discounted new pieces from Italian boutiques, or pre-owned: how to pay less for Bottega Veneta without taking risks.', brands: ['italist', 'hardly-ever-worn-it'],
      steps: ['Know which piece you want', 'Look at new pieces from Italian boutiques', 'Look at pre-owned for bags', 'Compare the real total', 'Check the condition and the return rules'] },
    { slug: 'italist-or-the-brand-official-store', question: "Italist or the brand's official store: where should you buy?", summary: 'Price, authenticity, delivery and returns compared, so you know when each option makes sense.', brands: ['italist'],
      steps: ['Compare the price', 'Compare authenticity', 'Compare delivery and returns'] },
  ],
};
