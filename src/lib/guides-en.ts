// English guides (US audience). Every fact comes from Farfetch's official pages listed in `sources`,
// read on the date in `updatedOn` (notes: docs/farfetch-facts.md). Store links are plain links: the Sovrn
// script turns them into affiliate links. Never publish promo codes.
import type { Guide } from "./i18n";

const FAQ = { label: "Farfetch: FAQs", url: "https://www.farfetch.com/faqs/" };
const RETURNS = { label: "Farfetch: returns and refunds", url: "https://www.farfetch.com/returns-and-refunds/" };
const D = "2026-09-29";

export const guidesEn: Guide[] = [
  {
    id: "legit",
    slug: "is-farfetch-legit",
    question: "Is Farfetch legit? What to know before you order",
    summary: "How Farfetch works, its authenticity promise, duties for US orders and the return rules to read before you pay.",
    updatedOn: D,
    intro:
      "Farfetch is an online marketplace where you buy from luxury brands and partner boutiques around the world in one checkout. Here is what its own pages say about authenticity, prices, delivery and returns.",
    verdict:
      "Farfetch guarantees the authenticity of what it sells and ships to the US with duties included. The points to plan for are prices that change with your destination, parcels that arrive separately, and Final Sale items.",
    steps: [
      {
        title: "Understand who you are buying from",
        text: "On Farfetch you shop from brands and partner boutiques. Each of them sets its own prices, which is why the same item can cost differently depending on where it ships from and where it goes.",
      },
      {
        title: "Read the authenticity promise",
        text: "Farfetch says its selection comes from leading luxury brands and boutiques worldwide, and that it guarantees the authenticity of the items. Orders arrive in a protective Farfetch box, with the brand's dust bag or box when the brand provides one.",
      },
      {
        title: "Check what the US price includes",
        text: "The United States is a DDP destination: the applicable duties are included in the price you pay, with nothing more to pay on delivery. Farfetch doesn't collect sales tax in every state, so your state may expect use tax on the purchase.",
      },
      {
        title: "Know the return window",
        text: "Returns are accepted within 30 days of delivery, unworn with all tags and the original packaging. Returns are free, by courier collection or drop-off depending on where you live. Final Sale items can't be returned unless they arrive damaged or faulty.",
      },
    ],
    pitfalls: [
      "Comparing prices without setting your delivery destination first.",
      "Buying a Final Sale item in a size you're unsure about.",
      "Throwing away the brand box or dust bag before deciding to keep the piece.",
    ],
    sources: [FAQ, RETURNS],
    related: ["prices", "returns"],
  },
  {
    id: "how",
    slug: "how-does-farfetch-work",
    question: "How does Farfetch work? Brands, boutiques and one checkout",
    summary: "Why one Farfetch order can come from several boutiques, who sets the price and what that changes for you.",
    updatedOn: D,
    intro:
      "Farfetch isn't a single warehouse. It connects you with luxury brands and partner boutiques around the world, and you pay them all in one checkout. That model explains most of what surprises new buyers.",
    verdict: "Think of Farfetch as one checkout for many stores: prices, stock and parcels follow the boutique that sells each piece.",
    steps: [
      {
        title: "Each piece has its own seller",
        text: "Every item is sold by a brand or a partner boutique. The price is set by that seller, so the same piece can show a different price depending on where it ships from and your delivery destination.",
      },
      {
        title: "One order, several parcels",
        text: "If you order from several brands or boutiques, your items arrive separately. Farfetch sends tracking details and an estimated delivery date for each one.",
      },
      {
        title: "Prices aren't held for you",
        text: "Adding a piece to your bag or wishlist doesn't reserve it at a price, and Farfetch doesn't hold items for later. Farfetch says it shows the best available price for your destination when you order.",
      },
      {
        title: "Returns follow the parcels",
        text: "If you return items from different sellers that came in separate boxes, you prepare each parcel separately, with its own return label, and book a collection for each return.",
      },
    ],
    pitfalls: [
      "Expecting several items from one order to arrive in one box.",
      "Leaving a piece in the bag and assuming the price will stay the same.",
    ],
    sources: [FAQ, RETURNS],
    related: ["prices", "several"],
  },
  {
    id: "prices",
    slug: "why-farfetch-prices-change",
    question: "Why does the same piece cost more or less on Farfetch?",
    summary: "Prices on Farfetch depend on the seller and your delivery destination. How to see the right price before you pay.",
    updatedOn: D,
    intro:
      "You may see a bag at one price today and another tomorrow, or a different price than a friend abroad. Farfetch explains why on its own pricing FAQ.",
    verdict: "Set your delivery destination first, then compare. The price that counts is the one at checkout.",
    steps: [
      {
        title: "Set your delivery destination",
        text: "Prices are set by each brand and partner boutique and can vary with the item's origin and your delivery destination. Farfetch recommends selecting your destination on the site to see the most accurate prices.",
      },
      {
        title: "Don't count on the bag to hold a price",
        text: "Putting an item in your bag or wishlist doesn't lock it at a specific price. Farfetch says it doesn't control price variations but offers the best available price for your destination when you order.",
      },
      {
        title: "Check the currency at checkout",
        text: "Your currency depends on your delivery destination and is shown at checkout, before you confirm. If your local currency isn't available, the order is charged in US dollars.",
      },
      {
        title: "Compare the total, duties included",
        text: "For US orders, duties are included in the price you pay (DDP). Compare that total with other stores, not the item price alone.",
      },
    ],
    pitfalls: [
      "Comparing a price seen with another destination selected.",
      "Waiting for a lower price on a piece that may sell out.",
    ],
    sources: [FAQ],
    related: ["how", "duties"],
  },
  {
    id: "duties",
    slug: "farfetch-duties-and-taxes-us",
    question: "Will you pay duties or sales tax on a Farfetch order in the US?",
    summary: "What DDP means for US orders on Farfetch, and the sales and use tax point most buyers miss.",
    updatedOn: D,
    intro:
      "Luxury pieces often ship from Europe, so buyers worry about a bill at the door. Farfetch explains how duties and US taxes work on its FAQ.",
    verdict: "US orders ship duties paid: nothing to pay the courier. Sales tax is a separate question that depends on your state.",
    steps: [
      {
        title: "Know that the US is a DDP destination",
        text: "Farfetch ships to the United States as a DDP destination (delivered duty paid). All applicable taxes are included in the price you pay at checkout, and there are no other charges on delivery.",
      },
      {
        title: "Check your state's sales and use tax",
        text: "Farfetch doesn't collect sales tax in every state. Your purchase may be subject to sales or use tax unless your state is exempt, and many states ask you to report untaxed online purchases on a yearly use tax return. Check with your state's tax office.",
      },
      {
        title: "Know what happens if you return",
        text: "For DDP destinations, import duties and taxes are refundable through Farfetch when you return an item.",
      },
    ],
    pitfalls: [
      "Assuming no sales tax at checkout means no tax is due at all.",
      "Refusing a delivery to avoid charges: for US orders there are none to pay on delivery.",
    ],
    sources: [FAQ],
    related: ["prices", "refund"],
  },
  {
    id: "delivery",
    slug: "farfetch-delivery-time-and-cost",
    question: "How long does Farfetch take to deliver, and what does shipping cost?",
    summary: "Dispatch time, delivery time and how Farfetch calculates the shipping cost, from its own FAQ.",
    updatedOn: D,
    intro: "Before ordering a piece for a date, it helps to know how long it takes and what the delivery costs. Here is what Farfetch says.",
    verdict: "Count about two business days to dispatch, then two to seven days of delivery. The exact shipping cost appears at checkout.",
    steps: [
      {
        title: "Count the dispatch time",
        text: "Once confirmed, your order is dispatched within 2 business days.",
      },
      {
        title: "Add the delivery time",
        text: "Delivery normally takes 2 to 7 days after dispatch, depending on your location and the delivery method you choose.",
      },
      {
        title: "See the shipping cost at checkout",
        text: "Each order is different: shipping depends on the size, weight and destination of the items. Farfetch offers a flat delivery cost above a certain order value, so items from several origins can ship for one delivery price. The cost is shown at checkout.",
      },
      {
        title: "Track each parcel",
        text: "Track your order in Orders & Returns in your account, or with your order number and email if you ordered as a guest. Items from different sellers arrive separately, each with its own tracking.",
      },
    ],
    pitfalls: [
      "Ordering the day before an event: count dispatch and delivery.",
      "Expecting one tracking number for an order from several boutiques.",
    ],
    sources: [FAQ],
    related: ["several", "guest"],
  },
  {
    id: "several",
    slug: "farfetch-order-several-boutiques",
    question: "Ordering from several boutiques on Farfetch: what changes?",
    summary: "Separate parcels, separate tracking and separate returns: how a multi-boutique Farfetch order works.",
    updatedOn: D,
    intro: "A Farfetch bag can hold pieces from different brands and boutiques. You pay once, but the rest happens seller by seller.",
    verdict: "One payment, several parcels. Keep each box and label apart if you return anything.",
    steps: [
      {
        title: "Expect separate parcels",
        text: "If you order from several brands and partner boutiques, your items arrive separately. Farfetch sends tracking and an estimated delivery date for each one.",
      },
      {
        title: "Pay one delivery price when it applies",
        text: "Above a certain order value, Farfetch offers a flat delivery cost, so items from several origins can ship for one delivery price.",
      },
      {
        title: "Return each parcel separately",
        text: "For items that arrived in separate boxes from different sellers, prepare each return parcel separately and stick the matching return label on each Farfetch box. Book a collection for each return from your account; one courier can take several parcels.",
      },
    ],
    pitfalls: ["Mixing items from two sellers in one return box.", "Putting the wrong return label on a parcel."],
    sources: [FAQ],
    related: ["how", "free-returns"],
  },
  {
    id: "returns",
    slug: "farfetch-return-policy",
    question: "Farfetch return policy: the rules to read before you buy",
    summary: "The 30-day window, the condition rules, what can't be returned and what isn't refunded.",
    updatedOn: D,
    intro: "Returns on Farfetch are free, but only if the piece comes back exactly as it arrived. Here are the rules from its returns page.",
    verdict: "Thirty days, unworn, every tag and box included. Final Sale and made-to-order pieces are the exceptions.",
    steps: [
      {
        title: "Return within 30 days",
        text: "Farfetch accepts returns within 30 days from the day your order was delivered. It advises booking the collection within 7 days of receiving the order so the return arrives in time.",
      },
      {
        title: "Send it back unworn, with everything",
        text: "Items must be unworn, undamaged and unused, with all original tags. Brand boxes and packaging must be in the return, protected inside the parcel: returns sent in unsuitable packaging may not be refunded. Farfetch doesn't offer exchanges.",
      },
      {
        title: "Know what can't be returned",
        text: "Final Sale items can't be returned unless they arrive damaged or faulty. Made-to-order items can't be returned.",
      },
      {
        title: "Know what is refunded",
        text: "Returns are free, but the refund doesn't include the original delivery cost. For DDP destinations like the US, duties and taxes are refunded through Farfetch. You return from the country or region where you ordered.",
      },
    ],
    pitfalls: [
      "Removing tags before you're sure.",
      "Returning a bag without its dust bag or box.",
      "Waiting until day 29 to book the collection.",
    ],
    sources: [RETURNS, FAQ],
    related: ["free-returns", "final-sale"],
  },
  {
    id: "free-returns",
    slug: "how-to-return-to-farfetch",
    question: "How to return an item to Farfetch, step by step",
    summary: "Book a free collection or a drop-off, pack the parcel and track your return.",
    updatedOn: D,
    intro: "Farfetch offers free returns by courier collection or drop-off, depending on where you live. Here is the process from its FAQ.",
    verdict: "Start the return in your account, pack it in the Farfetch box with the label outside, and ask for the label to be scanned.",
    steps: [
      {
        title: "Start the return",
        text: "Go to Orders & Returns in your account (or enter your order number and email if you ordered as a guest), find the order, select « Make a return », then choose the items and the reason.",
      },
      {
        title: "Choose collection or drop-off",
        text: "At least one option is offered depending on your location: a free courier collection, where you choose the address, number of parcels and time slot; or a free drop-off at a local service point.",
      },
      {
        title: "Pack the parcel",
        text: "Put each item in its original brand packaging inside the Farfetch box. Stick the return label on the outside of the Farfetch box, not on the brand box. If your parcel came with a return note (the commercial invoice), stick it on the outside too.",
      },
      {
        title: "Get the label scanned",
        text: "Ask the courier or the drop-off point to scan the label so the parcel can be tracked. The tracking number is under the barcode on the return label.",
      },
    ],
    pitfalls: ["Sticking the label on the brand's own box.", "Forgetting the return note for the commercial invoice."],
    sources: [FAQ, RETURNS],
    related: ["returns", "refund"],
  },
  {
    id: "refund",
    slug: "farfetch-refund-time",
    question: "How long does a Farfetch refund take?",
    summary: "Processing time, bank delay and the store credit option, from Farfetch's returns page.",
    updatedOn: D,
    intro: "Once your parcel is on its way back, the question is when the money comes back. Farfetch gives the timings on its returns page.",
    verdict: "Up to 6 calendar days to process once the return is received, then up to 14 days to show on your account.",
    steps: [
      {
        title: "Wait for the seller to receive it",
        text: "Once the brand or boutique receives your return, processing the refund can take up to 6 calendar days. You get an email when the return is accepted and the refund confirmed.",
      },
      {
        title: "Allow for your bank",
        text: "Refunds go to the original payment method and can take up to 14 days to appear, depending on your payment provider.",
      },
      {
        title: "Or choose account credit",
        text: "You can choose Farfetch account credit instead. It expires after 5 years, can't be transferred and applies automatically to your next purchase.",
      },
    ],
    pitfalls: ["Counting from the day you ship instead of the day it's received.", "Choosing credit if you don't plan to shop again."],
    sources: [RETURNS, FAQ],
    related: ["returns", "free-returns"],
  },
  {
    id: "final-sale",
    slug: "farfetch-final-sale",
    question: "Farfetch Final Sale: can you return it?",
    summary: "What Final Sale means on Farfetch, the one exception, and how to buy a Final Sale piece safely.",
    updatedOn: D,
    intro: "Final Sale pieces are often the most tempting. They are also the ones you can't send back.",
    verdict: "Buy Final Sale only when you're sure of the size and the piece: returns are accepted only if it arrives damaged or faulty.",
    steps: [
      {
        title: "Spot the Final Sale label",
        text: "Final Sale items can't be returned, unless the item arrives damaged or faulty when delivered.",
      },
      {
        title: "Check size and fit twice",
        text: "Open the Size Guide above the size menu and the Size & Fit tab on the product page for measurements, fit and cut. Designers size differently, so read each item's information.",
      },
      {
        title: "Report a fault straight away",
        text: "If a Final Sale item arrives damaged or faulty, contact customer service instead of starting a normal return.",
      },
    ],
    pitfalls: ["Buying a Final Sale piece to try a new brand's sizing.", "Treating Final Sale like a normal 30-day return."],
    sources: [RETURNS, FAQ],
    related: ["size", "returns"],
  },
  {
    id: "cancel",
    slug: "cancel-farfetch-order",
    question: "Can you cancel or change a Farfetch order?",
    summary: "When you can cancel items, why you can't add them, and what to do once the order is being prepared.",
    updatedOn: D,
    intro: "Changed your mind right after paying? Farfetch allows some changes, but only early.",
    verdict: "Cancel quickly, before the order is being prepared. After that, it's a free return once it arrives.",
    steps: [
      {
        title: "Cancel before preparation",
        text: "You can cancel some items before the order is being prepared, from Orders & Returns in your account, or with your email and order number if you ordered as a guest.",
      },
      {
        title: "Place a new order to add items",
        text: "Once an order is placed, you can't add new items to it: place a new order.",
      },
      {
        title: "Check whether the address can change",
        text: "In My account › Orders & Returns you can see if your delivery address can still be changed. It may not be possible once items have shipped.",
      },
      {
        title: "Too late? Return it",
        text: "If the order is already being prepared, it can't be cancelled, but returns are free once it arrives.",
      },
    ],
    pitfalls: ["Waiting a day to cancel.", "Trying to add a piece to an existing order."],
    sources: [FAQ],
    related: ["free-returns", "guest"],
  },
  {
    id: "payment",
    slug: "farfetch-payment-methods-us",
    question: "Which payment methods does Farfetch accept in the US?",
    summary: "Cards, PayPal, Apple Pay, instalments and crypto: what Farfetch accepts for US orders and when you are charged.",
    updatedOn: D,
    intro: "Farfetch lists the accepted payment methods on its FAQ, with some limited to certain countries. Here are the ones that apply to the US.",
    verdict: "Every major card, PayPal and Apple Pay work in the US, plus Afterpay, Klarna and Alipay.",
    steps: [
      {
        title: "Use a card or a wallet",
        text: "Farfetch accepts Visa, Mastercard, Maestro, American Express, Discover, Diners and JCB, plus PayPal and Apple Pay.",
      },
      {
        title: "Know the US-only options",
        text: "In the US you can also use Afterpay, Klarna and Alipay. Afterpay and Klarna let you pay in instalments, up to $1,500 in the US.",
      },
      {
        title: "Know when you're charged",
        text: "Debit card, crypto and PayPal payments are taken when the order is placed. Security checks run on every payment at that moment.",
      },
    ],
    pitfalls: ["Planning to split a purchase above $1,500 in instalments."],
    sources: [FAQ],
    related: ["instalments", "crypto"],
  },
  {
    id: "instalments",
    slug: "farfetch-afterpay-klarna",
    question: "Can you pay in instalments on Farfetch with Afterpay or Klarna?",
    summary: "Which instalment options work in the US, the $1,500 limit, and what to check before splitting a luxury purchase.",
    updatedOn: D,
    intro: "Paying a designer bag in several parts is possible on Farfetch in some countries. Here is what applies in the US.",
    verdict: "Afterpay and Klarna are available in the US, up to $1,500. Above that, pay another way.",
    steps: [
      {
        title: "Choose Afterpay or Klarna",
        text: "Farfetch accepts instalment payments through Klarna, Afterpay and Tamara in some countries. Afterpay and Klarna are both available in the United States.",
      },
      {
        title: "Mind the limit",
        text: "The maximum spend for instalments in the US is $1,500.",
      },
      {
        title: "Read the provider's terms",
        text: "The instalment plan is with Afterpay or Klarna, not Farfetch: read their terms, fees and schedule before you confirm.",
      },
    ],
    pitfalls: ["Choosing a piece above $1,500 and expecting to split it.", "Confirming a plan without reading the provider's fees."],
    sources: [FAQ],
    related: ["payment", "refund"],
  },
  {
    id: "crypto",
    slug: "farfetch-crypto-payment",
    question: "Paying with crypto on Farfetch: how returns and refunds work",
    summary: "Farfetch accepts cryptocurrency. The shorter return window and how refunds come back.",
    updatedOn: D,
    intro: "Farfetch accepts cryptocurrency at checkout. The payment is simple; the return rules are different from card orders.",
    verdict: "Crypto orders have a 30-day return window from the order date, and refunds come back in the same crypto.",
    steps: [
      {
        title: "Check the accepted coins",
        text: "Farfetch lists the accepted cryptocurrencies on its cryptocurrency payment page. Crypto payments are taken when the order is placed.",
      },
      {
        title: "Return within 30 days of the order",
        text: "To return a crypto order for a refund, follow the normal return process within 30 days of your order date.",
      },
      {
        title: "Claim the refund",
        text: "Once the brand or boutique accepts the return, the refund is processed by TripleA in the original cryptocurrency, at the current exchange rate. They email the address used at checkout; after you claim it, the crypto should come back the same business day, depending on the blockchain.",
      },
    ],
    pitfalls: ["Counting 30 days from delivery instead of from the order date.", "Forgetting that the refund uses the rate on the refund day."],
    sources: [FAQ, RETURNS],
    related: ["payment", "refund"],
  },
  {
    id: "authentic",
    slug: "is-farfetch-authentic",
    question: "Is everything on Farfetch authentic?",
    summary: "Farfetch's authenticity promise, how orders are packed, and what to keep until you're sure.",
    updatedOn: D,
    intro: "Authenticity is the first question with any luxury marketplace. Here is what Farfetch commits to.",
    verdict: "Farfetch guarantees the authenticity of its items, sourced from luxury brands and boutiques.",
    steps: [
      {
        title: "Read the promise",
        text: "Farfetch says its selection is carefully chosen from the best luxury brands and boutiques worldwide, and that it guarantees the authenticity of the items.",
      },
      {
        title: "Check the packaging",
        text: "Your order comes in a protective Farfetch box. Brand dust bags or boxes are included when the brand provides them.",
      },
      {
        title: "Keep everything until you decide",
        text: "Returns need all original tags and brand packaging. Keep the tags, boxes and dust bags until you're sure you're keeping the piece.",
      },
    ],
    pitfalls: ["Throwing away tags or boxes on day one."],
    sources: [FAQ],
    related: ["legit", "pre-owned"],
  },
  {
    id: "pre-owned",
    slug: "farfetch-pre-owned-condition",
    question: "Farfetch pre-owned: what each condition means",
    summary: "Unworn with tags, Unworn, Excellent, Good: the four condition grades Farfetch uses for pre-owned pieces.",
    updatedOn: D,
    intro: "Farfetch also sells pre-owned pieces. Their condition varies, and Farfetch grades it in four levels.",
    verdict: "Unworn with tags is as new. Good means visible wear: read the grade before the price.",
    steps: [
      {
        title: "Unworn with tags",
        text: "No signs of use, and the item comes with its original tags.",
      },
      {
        title: "Unworn",
        text: "No signs of use, but the item comes without its original tags.",
      },
      {
        title: "Excellent",
        text: "The item seems to have been used, with no or very few signs of wear. Almost perfect, without defects.",
      },
      {
        title: "Good",
        text: "The item has been used and shows some signs of wear: it may be slightly discolored (leather or trim), have a patina, or show scratches or scuffs.",
      },
    ],
    pitfalls: ["Paying an « as new » price for a Good piece.", "Skipping the photos of corners and handles."],
    sources: [FAQ],
    related: ["authentic", "returns"],
  },
  {
    id: "pre-order",
    slug: "farfetch-pre-order",
    question: "How do pre-orders work on Farfetch?",
    summary: "When you pay, when it ships, whether you can cancel and whether you can return a pre-order.",
    updatedOn: D,
    intro: "Pre-orders give early access to next season's pieces before they go on sale. Here are Farfetch's rules.",
    verdict: "You pay in full when you order, it ships on its own date, and normal returns apply.",
    steps: [
      {
        title: "Pay in full upfront",
        text: "Pre-order items are paid in full when you place the order.",
      },
      {
        title: "Wait for the ship date",
        text: "You get an email with an estimated delivery date once the item is available and ready to ship. Pre-orders ship separately from your other orders, based on their expected availability.",
      },
      {
        title: "Cancel early if you must",
        text: "Some partners accept cancellation before the order is being prepared. Once it's being prepared, it can't be cancelled, but free returns apply.",
      },
      {
        title: "Check limits and returns",
        text: "Some pre-orders have quantity limits. Pre-orders can be refunded as long as they follow the returns policy.",
      },
    ],
    pitfalls: ["Expecting a pre-order to ship with the rest of your order."],
    sources: [FAQ],
    related: ["cancel", "returns"],
  },
  {
    id: "access",
    slug: "farfetch-access-loyalty",
    question: "Farfetch Access: how the loyalty programme works",
    summary: "How you join Access and the kind of benefits Farfetch lists for its members.",
    updatedOn: D,
    intro: "Access is Farfetch's loyalty programme. You don't sign up separately: an account is enough.",
    verdict: "Create an account before your first order and you're in Access automatically.",
    steps: [
      {
        title: "Join with an account",
        text: "With a Farfetch account you're automatically enrolled in Access from your first order.",
      },
      {
        title: "Move up with each order",
        text: "Farfetch says each new order brings you closer to exclusive benefits, such as access to private sales, priority customer service, unlimited free delivery or advice from a personal stylist.",
      },
      {
        title: "Find your Access offers",
        text: "Promotional benefits for Access members are in your Access space in your account.",
      },
    ],
    pitfalls: ["Checking out as a guest when you plan to buy again."],
    sources: [FAQ],
    related: ["guest", "promotions"],
  },
  {
    id: "size",
    slug: "farfetch-size-guide",
    question: "How to find your size on Farfetch",
    summary: "Where to find the size guide, the Size & Fit tab and why designers size differently.",
    updatedOn: D,
    intro: "Sizes change from one designer to another. Farfetch gives item-by-item information: here is where to find it.",
    verdict: "Use the Size & Fit tab of each product, not a general chart.",
    steps: [
      {
        title: "Open the Size Guide",
        text: "The size conversion charts are in the Size Guide, above the size menu on the product page.",
      },
      {
        title: "Read the Size & Fit tab",
        text: "On the product page, the Size & Fit tab shows measurements, fit, cut and model information. Composition and care are under Product information.",
      },
      {
        title: "Remember designers vary",
        text: "International sizes differ slightly when converted, and some designers run larger or smaller than others. That's why Farfetch gives specific information for each item.",
      },
      {
        title: "Wrong size? Return it",
        text: "If it doesn't fit, you can return it with the free returns service and order again.",
      },
    ],
    pitfalls: ["Using your usual size for a new designer.", "Buying Final Sale when you're between sizes."],
    sources: [FAQ],
    related: ["sold-out", "final-sale"],
  },
  {
    id: "sold-out",
    slug: "farfetch-size-sold-out",
    question: "Your size is sold out on Farfetch: what can you do?",
    summary: "How to be notified when a size comes back, and why Farfetch doesn't hold items.",
    updatedOn: D,
    intro: "Popular pieces sell fast. Farfetch offers one simple tool when your size is gone.",
    verdict: "Ask to be notified from the size menu, and don't count on a reservation.",
    steps: [
      {
        title: "Ask for a notification",
        text: "In the size menu, select « Size unavailable? », then enter the size you want and your email address to be told when it's back in stock.",
      },
      {
        title: "Don't expect a hold",
        text: "Farfetch doesn't reserve items: its most wanted pieces are often limited, so it keeps them available to everyone.",
      },
      {
        title: "Check other sellers",
        text: "The same piece can be sold by several partners, and prices vary with the seller and your destination.",
      },
    ],
    pitfalls: ["Waiting on a wishlist for a piece to be held."],
    sources: [FAQ],
    related: ["size", "prices"],
  },
  {
    id: "guest",
    slug: "farfetch-order-without-account",
    question: "Can you order on Farfetch without an account?",
    summary: "Guest checkout, tracking and invoices without an account, and what an account adds.",
    updatedOn: D,
    intro: "You don't need an account to buy on Farfetch. Here is what works as a guest, and what you miss.",
    verdict: "An email is enough to order and track. An account adds the wishlist and Access.",
    steps: [
      {
        title: "Check out as a guest",
        text: "To place and track an order, you only need an email address. At checkout, continue as a guest, then enter your address, delivery and payment details.",
      },
      {
        title: "Track with your order number",
        text: "Guests track orders, find invoices and start returns by entering their email and order number on Farfetch's order page.",
      },
      {
        title: "Get the invoice online",
        text: "Paper invoices are no longer in the parcels. Download the digital invoice from Orders & Returns, or with your email and order number as a guest.",
      },
      {
        title: "Know what an account adds",
        text: "An account keeps your wishlist, sends updates on your purchases and enrols you in Access, the loyalty programme, from your first order.",
      },
    ],
    pitfalls: ["Losing the order confirmation email as a guest."],
    sources: [FAQ],
    related: ["access", "cancel"],
  },
  {
    id: "promotions",
    slug: "farfetch-promotions-rules",
    question: "How promotions work on Farfetch",
    summary: "Which items a promotion covers, why a size can be excluded, and whether you can combine offers.",
    updatedOn: D,
    intro: "Farfetch runs promotions, with rules that surprise many buyers. Here they are, from its FAQ.",
    verdict: "A promotion applies to eligible sellers and items only, and two offers usually don't stack.",
    steps: [
      {
        title: "Check the item is eligible",
        text: "Promotions apply only to certain brands and items. Items tagged as eligible or listed on a promotion page usually qualify. If a minimum spend is required, it must be reached in one transaction.",
      },
      {
        title: "Know why a size can be excluded",
        text: "If your size comes from a brand or boutique that isn't taking part in the promotion, the discount doesn't apply to it.",
      },
      {
        title: "Don't stack offers",
        text: "Some promotions can't be combined: if two are available, you choose one. Expired offers can't be reactivated, and offers can't be exchanged for cash.",
      },
      {
        title: "Hear about offers first",
        text: "Farfetch sends exclusive offers and early sale access to newsletter subscribers. Access members find their offers in their Access space.",
      },
    ],
    pitfalls: ["Assuming a promotion covers every size of an item.", "Splitting an order below a minimum spend."],
    sources: [FAQ],
    related: ["access", "prices"],
  },
];
