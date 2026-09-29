// Guides en français (France et Belgique). Mêmes `id` que la version anglaise ; les faits propres aux
// États-Unis sont remplacés par ceux de l'Union européenne, tirés des mêmes pages officielles de Farfetch.
import type { Guide } from "./i18n";

const FAQ = { label: "Farfetch : FAQ", url: "https://www.farfetch.com/faqs/" };
const RETURNS = { label: "Farfetch : retours et remboursements", url: "https://www.farfetch.com/returns-and-refunds/" };
const D = "2026-09-29";

export const guidesFr: Guide[] = [
  {
    id: "legit",
    slug: "farfetch-est-il-fiable",
    question: "Farfetch est-il fiable ? Ce qu'il faut savoir avant de commander",
    summary: "Comment fonctionne Farfetch, sa garantie d'authenticité, les droits de douane en Europe et les règles de retour à lire avant de payer.",
    updatedOn: D,
    intro:
      "Farfetch est une plateforme en ligne où vous achetez auprès de marques de luxe et de boutiques partenaires du monde entier, en un seul paiement. Voici ce que disent ses propres pages sur l'authenticité, les prix, la livraison et les retours.",
    verdict:
      "Farfetch garantit l'authenticité de ce qu'il vend et livre l'Union européenne droits compris. Les points à prévoir : des prix qui changent selon la destination, des colis qui arrivent séparément et les articles « Final Sale ».",
    steps: [
      {
        title: "Comprenez à qui vous achetez",
        text: "Sur Farfetch, vous achetez auprès de marques et de boutiques partenaires. Chacune fixe ses prix : le même article peut donc coûter plus ou moins cher selon sa provenance et votre destination de livraison.",
      },
      {
        title: "Lisez la garantie d'authenticité",
        text: "Farfetch indique que sa sélection vient des meilleures marques et boutiques de luxe du monde et qu'il se porte garant de l'authenticité des articles. La commande arrive dans un colis protecteur Farfetch, avec la housse ou la boîte de la marque quand celle-ci la fournit.",
      },
      {
        title: "Vérifiez ce que le prix comprend",
        text: "Les pays de l'Union européenne (hors îles Canaries) sont des destinations DDP : les taxes applicables sont comprises dans le prix payé, sans rien à régler à la livraison.",
      },
      {
        title: "Retenez le délai de retour",
        text: "Les retours sont acceptés dans les 30 jours suivant la livraison, article non porté, avec toutes ses étiquettes et son emballage d'origine. Le retour est gratuit, par collecte ou en point de dépôt selon votre adresse. Les articles « Final Sale » ne sont pas repris, sauf s'ils arrivent abîmés ou défectueux.",
      },
    ],
    pitfalls: [
      "Comparer des prix sans avoir choisi sa destination de livraison.",
      "Acheter un article « Final Sale » dans une taille incertaine.",
      "Jeter la boîte ou la housse de la marque avant d'avoir décidé de garder la pièce.",
    ],
    sources: [FAQ, RETURNS],
    related: ["prices", "returns"],
  },
  {
    id: "how",
    slug: "comment-fonctionne-farfetch",
    question: "Comment fonctionne Farfetch ? Marques, boutiques et un seul paiement",
    summary: "Pourquoi une commande Farfetch peut venir de plusieurs boutiques, qui fixe le prix et ce que cela change pour vous.",
    updatedOn: D,
    intro:
      "Farfetch n'est pas un entrepôt unique. La plateforme vous relie à des marques de luxe et à des boutiques partenaires du monde entier, que vous payez en une seule fois. Ce modèle explique la plupart des surprises.",
    verdict: "Voyez Farfetch comme un seul paiement pour plusieurs boutiques : prix, stock et colis suivent le vendeur de chaque pièce.",
    steps: [
      {
        title: "Chaque pièce a son vendeur",
        text: "Chaque article est vendu par une marque ou une boutique partenaire, qui en fixe le prix. La même pièce peut donc afficher un prix différent selon sa provenance et votre destination.",
      },
      {
        title: "Une commande, plusieurs colis",
        text: "Si vous commandez auprès de plusieurs marques ou boutiques, vos articles arrivent séparément. Farfetch envoie un suivi et une date de livraison estimée pour chacun.",
      },
      {
        title: "Les prix ne sont pas bloqués",
        text: "Mettre une pièce dans le panier ou la wishlist ne la réserve pas à un prix donné, et Farfetch ne met pas d'articles de côté. Farfetch dit proposer le meilleur prix disponible pour votre destination au moment de la commande.",
      },
      {
        title: "Les retours suivent les colis",
        text: "Pour renvoyer des articles de vendeurs différents arrivés dans des boîtes séparées, préparez chaque colis à part, avec sa propre étiquette de retour, et réservez une collecte pour chaque retour.",
      },
    ],
    pitfalls: [
      "Attendre tous les articles d'une commande dans une seule boîte.",
      "Laisser une pièce dans le panier en pensant que le prix ne bougera pas.",
    ],
    sources: [FAQ, RETURNS],
    related: ["prices", "several"],
  },
  {
    id: "prices",
    slug: "pourquoi-les-prix-farfetch-changent",
    question: "Pourquoi la même pièce coûte-t-elle plus ou moins cher sur Farfetch ?",
    summary: "Les prix Farfetch dépendent du vendeur et de votre destination. Comment voir le bon prix avant de payer.",
    updatedOn: D,
    intro:
      "Un sac à un prix aujourd'hui, un autre demain, ou un prix différent pour une amie à l'étranger : Farfetch l'explique dans sa FAQ.",
    verdict: "Choisissez d'abord votre destination de livraison, puis comparez. Le prix qui compte est celui du paiement.",
    steps: [
      {
        title: "Choisissez votre destination",
        text: "Les prix sont fixés par chaque marque et boutique partenaire et varient selon la provenance de l'article et votre destination. Farfetch conseille de sélectionner votre destination sur le site pour voir les prix les plus justes.",
      },
      {
        title: "Le panier ne bloque pas le prix",
        text: "Placer un article dans le panier ou la wishlist ne le réserve pas à un prix précis. Farfetch dit ne pas contrôler ces variations mais proposer le meilleur prix disponible pour votre destination au moment de la commande.",
      },
      {
        title: "Vérifiez la devise au paiement",
        text: "La devise dépend de votre destination et s'affiche au paiement, avant de valider. Si votre devise locale n'est pas disponible, la commande est facturée en dollars américains.",
      },
      {
        title: "Comparez le total, taxes comprises",
        text: "Dans l'Union européenne, les taxes sont comprises dans le prix payé (DDP). Comparez ce total avec les autres boutiques, pas seulement le prix de l'article.",
      },
    ],
    pitfalls: [
      "Comparer un prix vu avec une autre destination sélectionnée.",
      "Attendre une baisse de prix sur une pièce qui peut disparaître.",
    ],
    sources: [FAQ],
    related: ["how", "duties"],
  },
  {
    id: "duties",
    slug: "farfetch-droits-de-douane-europe",
    question: "Paierez-vous des droits de douane sur une commande Farfetch en Europe ?",
    summary: "Ce que signifie DDP pour les commandes livrées en France, en Belgique et dans l'Union européenne.",
    updatedOn: D,
    intro:
      "Beaucoup de pièces partent de boutiques hors de votre pays, et on craint une facture à la porte. Farfetch explique les droits et taxes dans sa FAQ.",
    verdict: "Dans l'Union européenne, la commande est livrée droits acquittés : rien à payer au transporteur.",
    steps: [
      {
        title: "L'Union européenne est une destination DDP",
        text: "Farfetch livre les pays de l'Union européenne (hors îles Canaries), le Royaume-Uni et la Suisse en DDP (rendu droits acquittés). Toutes les taxes applicables sont comprises dans le prix payé, sans autres frais à la réception.",
      },
      {
        title: "Hors de ces pays, c'est différent",
        text: "Pour une destination DAP (hors de la liste DDP), le prix payé ne comprend pas les droits d'importation, qui restent à la charge de l'acheteur.",
      },
      {
        title: "Et en cas de retour",
        text: "Pour une destination DDP, les droits et taxes d'importation sont remboursables par Farfetch quand vous renvoyez un article.",
      },
    ],
    pitfalls: [
      "Refuser une livraison par peur des frais : dans l'Union européenne, il n'y a rien à payer à la réception.",
      "Commander vers une adresse hors de la liste DDP sans prévoir les droits.",
    ],
    sources: [FAQ],
    related: ["prices", "refund"],
  },
  {
    id: "delivery",
    slug: "farfetch-delai-et-frais-de-livraison",
    question: "Combien de temps met Farfetch pour livrer, et combien coûte la livraison ?",
    summary: "Délai d'expédition, délai de livraison et calcul des frais, d'après la FAQ de Farfetch.",
    updatedOn: D,
    intro: "Avant de commander une pièce pour une date précise, mieux vaut connaître les délais et le coût de la livraison.",
    verdict: "Comptez environ deux jours ouvrables avant l'envoi, puis deux à sept jours de livraison. Le coût exact s'affiche au paiement.",
    steps: [
      {
        title: "Comptez le délai d'expédition",
        text: "Une fois validée, la commande est expédiée sous 2 jours ouvrables.",
      },
      {
        title: "Ajoutez le délai de livraison",
        text: "La livraison prend normalement entre 2 et 7 jours après l'envoi, selon votre adresse et le mode de livraison choisi.",
      },
      {
        title: "Voyez le coût au paiement",
        text: "Chaque commande est différente : le coût dépend de la taille, du poids et de la destination des articles. Farfetch propose un coût fixe au-delà d'un certain montant, si bien que des articles de plusieurs provenances peuvent être livrés pour un seul prix. Le coût s'affiche au paiement.",
      },
      {
        title: "Suivez chaque colis",
        text: "Suivez votre commande dans « Commandes & retours » de votre compte, ou avec votre numéro de commande et votre e-mail si vous avez commandé en invité. Les articles de vendeurs différents arrivent séparément, chacun avec son suivi.",
      },
    ],
    pitfalls: [
      "Commander la veille d'un événement : comptez l'expédition et la livraison.",
      "Attendre un seul numéro de suivi pour une commande de plusieurs boutiques.",
    ],
    sources: [FAQ],
    related: ["several", "guest"],
  },
  {
    id: "several",
    slug: "farfetch-commande-plusieurs-boutiques",
    question: "Commander auprès de plusieurs boutiques sur Farfetch : ce qui change",
    summary: "Colis séparés, suivis séparés et retours séparés : comment fonctionne une commande multi-boutiques.",
    updatedOn: D,
    intro: "Un panier Farfetch peut contenir des pièces de marques et de boutiques différentes. Vous payez une fois, mais la suite se passe vendeur par vendeur.",
    verdict: "Un paiement, plusieurs colis. Gardez chaque boîte et chaque étiquette à part si vous renvoyez quelque chose.",
    steps: [
      {
        title: "Attendez plusieurs colis",
        text: "Si vous commandez auprès de plusieurs marques et boutiques partenaires, vos articles arrivent séparément. Farfetch envoie un suivi et une date estimée pour chacun.",
      },
      {
        title: "Un seul prix de livraison quand il s'applique",
        text: "Au-delà d'un certain montant, Farfetch propose un coût de livraison fixe : des articles de plusieurs provenances peuvent alors être livrés pour un seul prix.",
      },
      {
        title: "Renvoyez chaque colis séparément",
        text: "Pour des articles arrivés dans des boîtes séparées, préparez chaque colis retour à part et collez l'étiquette correspondante sur chaque boîte Farfetch. Réservez une collecte pour chaque retour depuis votre compte ; un même coursier peut prendre plusieurs colis.",
      },
    ],
    pitfalls: ["Mélanger les articles de deux vendeurs dans un même colis retour.", "Coller la mauvaise étiquette sur un colis."],
    sources: [FAQ],
    related: ["how", "free-returns"],
  },
  {
    id: "returns",
    slug: "politique-de-retour-farfetch",
    question: "Politique de retour Farfetch : les règles à lire avant d'acheter",
    summary: "Le délai de 30 jours, l'état exigé, ce qui ne se renvoie pas et ce qui n'est pas remboursé.",
    updatedOn: D,
    intro: "Les retours sont gratuits sur Farfetch, à condition que la pièce revienne exactement comme elle est arrivée. Voici les règles de sa page retours.",
    verdict: "Trente jours, non porté, avec toutes les étiquettes et la boîte. Exceptions : le « Final Sale » et les articles faits sur commande.",
    steps: [
      {
        title: "Renvoyez sous 30 jours",
        text: "Farfetch accepte les retours dans les 30 jours suivant la livraison. Il conseille de réserver la collecte dans les 7 jours suivant la réception pour que le retour arrive à temps.",
      },
      {
        title: "Renvoyez-le non porté, complet",
        text: "L'article doit être non porté, non abîmé, non utilisé, avec toutes ses étiquettes d'origine. Les boîtes et emballages de marque doivent être dans le colis, protégés : un retour mal emballé peut ne pas être remboursé. Farfetch ne fait pas d'échanges.",
      },
      {
        title: "Ce qui ne se renvoie pas",
        text: "Les articles « Final Sale » ne sont pas repris, sauf s'ils arrivent abîmés ou défectueux. Les articles faits sur commande ne sont pas repris.",
      },
      {
        title: "Ce qui est remboursé",
        text: "Le retour est gratuit, mais le remboursement ne comprend pas les frais de livraison initiaux. Pour une destination DDP comme l'Union européenne, les droits et taxes sont remboursés par Farfetch. Le retour part du pays ou de la région de la commande.",
      },
    ],
    pitfalls: [
      "Retirer les étiquettes avant d'être sûr·e.",
      "Renvoyer un sac sans sa housse ou sa boîte.",
      "Attendre le 29e jour pour réserver la collecte.",
    ],
    sources: [RETURNS, FAQ],
    related: ["free-returns", "final-sale"],
  },
  {
    id: "free-returns",
    slug: "comment-faire-un-retour-farfetch",
    question: "Comment faire un retour Farfetch, étape par étape",
    summary: "Réserver une collecte gratuite ou un dépôt, préparer le colis et suivre le retour.",
    updatedOn: D,
    intro: "Farfetch propose des retours gratuits par collecte ou en point de dépôt, selon votre adresse. Voici la marche à suivre.",
    verdict: "Lancez le retour dans votre compte, emballez dans la boîte Farfetch avec l'étiquette à l'extérieur, et faites scanner l'étiquette.",
    steps: [
      {
        title: "Lancez le retour",
        text: "Allez dans « Commandes & retours » de votre compte (ou saisissez numéro de commande et e-mail si vous avez commandé en invité), trouvez la commande, choisissez « Effectuer un retour », puis les articles et le motif.",
      },
      {
        title: "Choisissez collecte ou dépôt",
        text: "Au moins une option est proposée selon votre adresse : une collecte gratuite par coursier (adresse, nombre de colis, créneau) ou un dépôt gratuit en point de service.",
      },
      {
        title: "Préparez le colis",
        text: "Placez chaque article dans son emballage de marque d'origine, dans la boîte Farfetch. Collez l'étiquette de retour à l'extérieur de la boîte Farfetch, pas sur la boîte de la marque. Si votre colis contenait un bon de retour (la facture commerciale), collez-le aussi à l'extérieur.",
      },
      {
        title: "Faites scanner l'étiquette",
        text: "Demandez au coursier ou au point de dépôt de scanner l'étiquette pour que le colis soit suivi. Le numéro de suivi est sous le code-barres de l'étiquette de retour.",
      },
    ],
    pitfalls: ["Coller l'étiquette sur la boîte de la marque.", "Oublier le bon de retour (facture commerciale)."],
    sources: [FAQ, RETURNS],
    related: ["returns", "refund"],
  },
  {
    id: "refund",
    slug: "delai-de-remboursement-farfetch",
    question: "Combien de temps prend un remboursement Farfetch ?",
    summary: "Délai de traitement, délai bancaire et option crédit, d'après la page retours de Farfetch.",
    updatedOn: D,
    intro: "Une fois le colis reparti, reste à savoir quand l'argent revient. Farfetch donne les délais sur sa page retours.",
    verdict: "Jusqu'à 6 jours calendaires de traitement après réception, puis jusqu'à 14 jours pour apparaître sur votre compte.",
    steps: [
      {
        title: "Attendez la réception par le vendeur",
        text: "Une fois votre retour reçu par la marque ou la boutique, le traitement du remboursement peut prendre jusqu'à 6 jours calendaires. Un e-mail confirme le remboursement quand le retour est accepté.",
      },
      {
        title: "Comptez le délai de votre banque",
        text: "Le remboursement se fait sur le moyen de paiement d'origine et peut prendre jusqu'à 14 jours pour apparaître, selon votre prestataire.",
      },
      {
        title: "Ou choisissez un crédit",
        text: "Vous pouvez choisir un crédit sur votre compte Farfetch. Il expire au bout de 5 ans, n'est pas transférable et s'applique automatiquement à votre prochain achat.",
      },
    ],
    pitfalls: ["Compter depuis l'envoi au lieu de la réception.", "Choisir le crédit sans projet d'achat."],
    sources: [RETURNS, FAQ],
    related: ["returns", "free-returns"],
  },
  {
    id: "final-sale",
    slug: "farfetch-final-sale",
    question: "« Final Sale » sur Farfetch : peut-on le renvoyer ?",
    summary: "Ce que signifie « Final Sale » sur Farfetch, la seule exception et comment acheter sans risque.",
    updatedOn: D,
    intro: "Les pièces « Final Sale » sont souvent les plus tentantes. Ce sont aussi celles qu'on ne peut pas renvoyer.",
    verdict: "Achetez en « Final Sale » seulement si vous êtes sûr·e de la taille : le retour n'est accepté que si l'article arrive abîmé ou défectueux.",
    steps: [
      {
        title: "Repérez la mention",
        text: "Les articles « Final Sale » ne peuvent pas être retournés, sauf s'ils arrivent abîmés ou défectueux à la livraison.",
      },
      {
        title: "Vérifiez deux fois la taille",
        text: "Ouvrez le guide des tailles au-dessus du menu des tailles et l'onglet « Taille & coupe » de la fiche produit : mesures, ajustement, coupe. Chaque créateur taille différemment.",
      },
      {
        title: "Signalez un défaut tout de suite",
        text: "Si un article « Final Sale » arrive abîmé ou défectueux, contactez le service client plutôt que de lancer un retour classique.",
      },
    ],
    pitfalls: ["Tester la taille d'une nouvelle marque avec un article « Final Sale ».", "Traiter le « Final Sale » comme un retour normal de 30 jours."],
    sources: [RETURNS, FAQ],
    related: ["size", "returns"],
  },
  {
    id: "cancel",
    slug: "annuler-une-commande-farfetch",
    question: "Peut-on annuler ou modifier une commande Farfetch ?",
    summary: "Quand on peut annuler des articles, pourquoi on ne peut pas en ajouter, et que faire une fois la préparation lancée.",
    updatedOn: D,
    intro: "Un doute juste après avoir payé ? Farfetch accepte quelques changements, mais seulement très tôt.",
    verdict: "Annulez vite, avant la préparation. Ensuite, c'est un retour gratuit à la livraison.",
    steps: [
      {
        title: "Annulez avant la préparation",
        text: "Vous pouvez annuler certains articles avant que la commande soit en préparation, depuis « Commandes & retours » de votre compte, ou avec e-mail et numéro de commande en invité.",
      },
      {
        title: "Pour ajouter, passez une nouvelle commande",
        text: "Une fois la commande passée, on ne peut plus y ajouter d'articles : il faut passer une nouvelle commande.",
      },
      {
        title: "Vérifiez si l'adresse peut changer",
        text: "Dans « Mon compte › Commandes & retours », vous voyez si l'adresse de livraison est encore modifiable. Elle peut ne plus l'être une fois les articles expédiés.",
      },
      {
        title: "Trop tard ? Renvoyez-le",
        text: "Si la commande est déjà en préparation, elle ne peut plus être annulée, mais le retour est gratuit à la livraison.",
      },
    ],
    pitfalls: ["Attendre le lendemain pour annuler.", "Vouloir ajouter une pièce à une commande existante."],
    sources: [FAQ],
    related: ["free-returns", "guest"],
  },
  {
    id: "payment",
    slug: "moyens-de-paiement-farfetch",
    question: "Quels moyens de paiement Farfetch accepte-t-il en France et en Belgique ?",
    summary: "Cartes, PayPal, Apple Pay, paiement en plusieurs fois et crypto : ce que Farfetch accepte et quand vous êtes débité·e.",
    updatedOn: D,
    intro: "Farfetch liste les moyens de paiement acceptés dans sa FAQ, certains limités à quelques pays. Voici ceux qui valent pour la France et la Belgique.",
    verdict: "Les grandes cartes, PayPal et Apple Pay fonctionnent, ainsi que Klarna pour payer en plusieurs fois.",
    steps: [
      {
        title: "Payez par carte ou portefeuille",
        text: "Farfetch accepte Visa, Mastercard, Maestro, American Express, Discover, Diners et JCB, ainsi que PayPal et Apple Pay.",
      },
      {
        title: "Klarna en France et en Belgique",
        text: "Klarna est disponible en France et en Belgique pour payer en plusieurs fois : jusqu'à 1 500 € en France et 5 000 € en Belgique.",
      },
      {
        title: "Sachez quand vous êtes débité·e",
        text: "Les paiements par carte de débit, crypto et PayPal sont prélevés au moment de la commande. Des contrôles de sécurité ont lieu sur chaque paiement.",
      },
    ],
    pitfalls: ["Prévoir de payer en plusieurs fois au-delà du plafond de votre pays."],
    sources: [FAQ],
    related: ["instalments", "crypto"],
  },
  {
    id: "instalments",
    slug: "farfetch-paiement-en-plusieurs-fois-klarna",
    question: "Payer en plusieurs fois sur Farfetch avec Klarna : comment ça marche ?",
    summary: "Klarna en France et en Belgique, les plafonds, et ce qu'il faut vérifier avant d'étaler un achat de luxe.",
    updatedOn: D,
    intro: "Payer un sac de créateur en plusieurs fois est possible sur Farfetch dans certains pays. Voici ce qui s'applique chez vous.",
    verdict: "Klarna est disponible en France (jusqu'à 1 500 €) et en Belgique (jusqu'à 5 000 €).",
    steps: [
      {
        title: "Choisissez Klarna",
        text: "Farfetch accepte le paiement en plusieurs fois via Klarna, Afterpay et Tamara dans certains pays. En France et en Belgique, c'est Klarna.",
      },
      {
        title: "Respectez le plafond",
        text: "Le montant maximum est de 1 500 € en France et de 5 000 € en Belgique.",
      },
      {
        title: "Lisez les conditions du prestataire",
        text: "Le plan de paiement est conclu avec Klarna, pas avec Farfetch : lisez ses conditions, ses frais et son échéancier avant de valider.",
      },
    ],
    pitfalls: ["Choisir une pièce au-dessus du plafond en comptant l'étaler.", "Valider un plan sans lire les frais du prestataire."],
    sources: [FAQ],
    related: ["payment", "refund"],
  },
  {
    id: "crypto",
    slug: "farfetch-paiement-crypto",
    question: "Payer en crypto sur Farfetch : retours et remboursements",
    summary: "Farfetch accepte les cryptomonnaies. Le délai de retour plus court et la façon dont le remboursement revient.",
    updatedOn: D,
    intro: "Farfetch accepte les cryptomonnaies au paiement. Le paiement est simple ; les règles de retour diffèrent de celles d'une carte.",
    verdict: "Une commande en crypto se renvoie dans les 30 jours suivant la date de commande, et le remboursement revient dans la même crypto.",
    steps: [
      {
        title: "Vérifiez les cryptos acceptées",
        text: "Farfetch liste les cryptomonnaies acceptées sur sa page dédiée. Le paiement est prélevé au moment de la commande.",
      },
      {
        title: "Renvoyez dans les 30 jours de la commande",
        text: "Pour être remboursé·e, suivez la procédure de retour habituelle dans les 30 jours suivant la date de votre commande.",
      },
      {
        title: "Réclamez le remboursement",
        text: "Une fois le retour accepté par la marque ou la boutique, le remboursement est traité par TripleA dans la cryptomonnaie d'origine, au taux en vigueur. Un e-mail arrive à l'adresse utilisée au paiement ; une fois réclamée, la crypto devrait revenir le jour ouvrable même, selon l'encombrement de la blockchain.",
      },
    ],
    pitfalls: ["Compter les 30 jours depuis la livraison au lieu de la commande.", "Oublier que le remboursement se fait au taux du jour."],
    sources: [FAQ, RETURNS],
    related: ["payment", "refund"],
  },
  {
    id: "authentic",
    slug: "farfetch-articles-authentiques",
    question: "Tout est-il authentique sur Farfetch ?",
    summary: "La garantie d'authenticité de Farfetch, l'emballage des commandes et ce qu'il faut garder.",
    updatedOn: D,
    intro: "L'authenticité est la première question face à une plateforme de luxe. Voici l'engagement de Farfetch.",
    verdict: "Farfetch se porte garant de l'authenticité de ses articles, issus de marques et de boutiques de luxe.",
    steps: [
      {
        title: "Lisez l'engagement",
        text: "Farfetch indique que sa sélection est triée sur le volet parmi les meilleures marques et boutiques de luxe du monde, et qu'il se porte garant de l'authenticité des articles.",
      },
      {
        title: "Regardez l'emballage",
        text: "La commande arrive dans un colis protecteur Farfetch. Les housses ou boîtes de marque sont incluses quand la marque les fournit.",
      },
      {
        title: "Gardez tout avant de décider",
        text: "Un retour exige toutes les étiquettes et emballages d'origine. Gardez étiquettes, boîtes et housses jusqu'à être sûr·e de garder la pièce.",
      },
    ],
    pitfalls: ["Jeter étiquettes ou boîtes le premier jour."],
    sources: [FAQ],
    related: ["legit", "pre-owned"],
  },
  {
    id: "pre-owned",
    slug: "farfetch-seconde-main-etat",
    question: "Seconde main sur Farfetch : ce que veut dire chaque état",
    summary: "Non porté avec étiquettes, Non porté, Excellent, Bon : les quatre niveaux d'état de la seconde main Farfetch.",
    updatedOn: D,
    intro: "Farfetch vend aussi des pièces de seconde main (« pre-owned »). Leur état varie, et Farfetch le classe en quatre niveaux.",
    verdict: "« Non porté avec étiquettes », c'est comme neuf. « Bon » signifie une usure visible : lisez l'état avant le prix.",
    steps: [
      {
        title: "Non porté avec étiquettes",
        text: "Aucun signe d'utilisation, et l'article est livré avec ses étiquettes d'origine.",
      },
      {
        title: "Non porté",
        text: "Aucun signe d'utilisation, mais l'article est livré sans ses étiquettes d'origine.",
      },
      {
        title: "Excellent",
        text: "L'article semble avoir été utilisé, sans ou avec très peu de signes d'usure. Presque parfait, sans défaut.",
      },
      {
        title: "Bon",
        text: "L'article a été utilisé et présente quelques signes d'usure : il peut être légèrement décoloré (cuir ou garniture), patiné, ou présenter des griffures.",
      },
    ],
    pitfalls: ["Payer un prix « comme neuf » pour une pièce en état « Bon ».", "Ne pas regarder les photos des coins et des anses."],
    sources: [FAQ],
    related: ["authentic", "returns"],
  },
  {
    id: "pre-order",
    slug: "precommande-farfetch",
    question: "Comment fonctionnent les précommandes sur Farfetch ?",
    summary: "Quand on paie, quand ça part, si on peut annuler et si on peut renvoyer une précommande.",
    updatedOn: D,
    intro: "Les précommandes donnent un accès en avant-première aux pièces de la saison suivante. Voici les règles de Farfetch.",
    verdict: "Vous payez tout à la commande, l'article part à sa propre date, et les retours habituels s'appliquent.",
    steps: [
      {
        title: "Payez tout à la commande",
        text: "Les articles précommandés sont payés en totalité au moment de la commande.",
      },
      {
        title: "Attendez la date d'envoi",
        text: "Un e-mail vous donne une date de livraison estimée dès que l'article est prêt. Les précommandes partent séparément de vos autres commandes, selon leur date de disponibilité.",
      },
      {
        title: "Annulez tôt si besoin",
        text: "Certains partenaires acceptent l'annulation avant la préparation. Une fois la préparation lancée, ce n'est plus possible, mais le retour reste gratuit.",
      },
      {
        title: "Limites et retours",
        text: "Certaines précommandes sont limitées en quantité. Elles sont remboursables si elles respectent la politique de retour.",
      },
    ],
    pitfalls: ["Attendre une précommande dans le même colis que le reste."],
    sources: [FAQ],
    related: ["cancel", "returns"],
  },
  {
    id: "access",
    slug: "farfetch-access-fidelite",
    question: "Farfetch Access : comment fonctionne le programme de fidélité",
    summary: "Comment entrer dans Access et le type d'avantages que Farfetch annonce.",
    updatedOn: D,
    intro: "Access est le programme de fidélité de Farfetch. Pas d'inscription à part : un compte suffit.",
    verdict: "Créez un compte avant votre première commande et vous êtes automatiquement dans Access.",
    steps: [
      {
        title: "Entrez avec un compte",
        text: "Avec un compte Farfetch, vous êtes inscrit·e automatiquement à Access dès votre première commande.",
      },
      {
        title: "Montez à chaque commande",
        text: "Farfetch indique que chaque commande vous rapproche d'avantages exclusifs : accès à des ventes privées, statut prioritaire au service client, livraison gratuite illimitée ou conseils d'un·e styliste personnel·le.",
      },
      {
        title: "Retrouvez vos offres Access",
        text: "Les avantages promotionnels des membres sont dans votre espace Access, dans votre compte.",
      },
    ],
    pitfalls: ["Commander en invité alors que vous comptez racheter."],
    sources: [FAQ],
    related: ["guest", "promotions"],
  },
  {
    id: "size",
    slug: "guide-des-tailles-farfetch",
    question: "Comment trouver sa taille sur Farfetch",
    summary: "Où trouver le guide des tailles, l'onglet « Taille & coupe » et pourquoi les créateurs taillent différemment.",
    updatedOn: D,
    intro: "Les tailles changent d'un créateur à l'autre. Farfetch donne des informations article par article : voici où les trouver.",
    verdict: "Fiez-vous à l'onglet « Taille & coupe » de chaque produit, pas à un tableau général.",
    steps: [
      {
        title: "Ouvrez le guide des tailles",
        text: "Les tableaux de conversion sont dans le « Guide des tailles », au-dessus du menu des tailles sur la fiche produit.",
      },
      {
        title: "Lisez l'onglet « Taille & coupe »",
        text: "Sur la fiche produit, l'onglet « Taille & coupe » donne les mesures, l'ajustement, la coupe et les mensurations du mannequin. Composition et entretien sont sous « Informations produit ».",
      },
      {
        title: "Les créateurs varient",
        text: "Les tailles internationales diffèrent un peu une fois converties, et certains créateurs taillent plus grand ou plus petit. C'est pourquoi Farfetch donne des informations propres à chaque article.",
      },
      {
        title: "Pas la bonne taille ? Renvoyez",
        text: "Si l'article ne va pas, renvoyez-le avec le retour gratuit et recommandez.",
      },
    ],
    pitfalls: ["Prendre sa taille habituelle chez un nouveau créateur.", "Acheter en « Final Sale » entre deux tailles."],
    sources: [FAQ],
    related: ["sold-out", "final-sale"],
  },
  {
    id: "sold-out",
    slug: "taille-epuisee-farfetch",
    question: "Votre taille est épuisée sur Farfetch : que faire ?",
    summary: "Être prévenu·e du retour d'une taille, et pourquoi Farfetch ne met pas d'articles de côté.",
    updatedOn: D,
    intro: "Les pièces recherchées partent vite. Farfetch propose un outil simple quand votre taille n'est plus là.",
    verdict: "Demandez une alerte depuis le menu des tailles, et ne comptez pas sur une réservation.",
    steps: [
      {
        title: "Demandez une alerte",
        text: "Dans le menu des tailles, choisissez « Votre taille est indisponible ? », puis saisissez la taille voulue et votre e-mail pour être prévenu·e de son retour.",
      },
      {
        title: "Pas de réservation",
        text: "Farfetch ne réserve pas d'articles : ses pièces les plus prisées sont souvent limitées et restent accessibles à tous.",
      },
      {
        title: "Regardez les autres vendeurs",
        text: "La même pièce peut être proposée par plusieurs partenaires, et le prix varie selon le vendeur et votre destination.",
      },
    ],
    pitfalls: ["Attendre qu'une pièce de la wishlist soit mise de côté."],
    sources: [FAQ],
    related: ["size", "prices"],
  },
  {
    id: "guest",
    slug: "commander-farfetch-sans-compte",
    question: "Peut-on commander sur Farfetch sans compte ?",
    summary: "Commande en invité, suivi et factures sans compte, et ce qu'un compte ajoute.",
    updatedOn: D,
    intro: "Pas besoin de compte pour acheter sur Farfetch. Voici ce qui marche en invité, et ce que vous manquez.",
    verdict: "Un e-mail suffit pour commander et suivre. Un compte ajoute la wishlist et Access.",
    steps: [
      {
        title: "Commandez en invité",
        text: "Pour passer et suivre une commande, une adresse e-mail suffit. Au paiement, continuez en tant qu'invité·e, puis saisissez adresse, livraison et paiement.",
      },
      {
        title: "Suivez avec votre numéro de commande",
        text: "En invité, on suit sa commande, on récupère sa facture et on lance un retour en saisissant son e-mail et son numéro de commande sur la page commande de Farfetch.",
      },
      {
        title: "Récupérez la facture en ligne",
        text: "Il n'y a plus de facture papier dans les colis. Téléchargez la facture numérique dans « Commandes & retours », ou avec e-mail et numéro de commande en invité.",
      },
      {
        title: "Ce qu'un compte ajoute",
        text: "Un compte garde votre wishlist, vous tient au courant de vos achats et vous inscrit à Access, le programme de fidélité, dès la première commande.",
      },
    ],
    pitfalls: ["Perdre l'e-mail de confirmation quand on commande en invité."],
    sources: [FAQ],
    related: ["access", "cancel"],
  },
  {
    id: "promotions",
    slug: "promotions-farfetch-regles",
    question: "Comment fonctionnent les promotions sur Farfetch",
    summary: "Quels articles une promotion couvre, pourquoi une taille peut être exclue, et si l'on peut cumuler.",
    updatedOn: D,
    intro: "Farfetch fait des promotions, avec des règles qui surprennent souvent. Les voici, d'après sa FAQ.",
    verdict: "Une promotion ne vaut que pour les vendeurs et articles éligibles, et deux offres ne se cumulent généralement pas.",
    steps: [
      {
        title: "Vérifiez que l'article est éligible",
        text: "Les promotions ne valent que pour certaines marques et certains articles. Les articles signalés ou présents sur une page promotions sont généralement éligibles. Un minimum d'achat éventuel doit être atteint en une seule transaction.",
      },
      {
        title: "Pourquoi une taille peut être exclue",
        text: "Si votre taille vient d'une marque ou d'une boutique qui ne participe pas à la promotion, la remise ne s'y applique pas.",
      },
      {
        title: "Ne cumulez pas",
        text: "Certaines promotions ne se combinent pas : si deux offres sont disponibles, vous en choisissez une. Une offre expirée ne peut pas être réactivée, ni échangée contre de l'argent.",
      },
      {
        title: "Soyez prévenu·e en premier",
        text: "Farfetch envoie ses offres exclusives et l'accès anticipé aux soldes aux abonné·es de sa newsletter. Les membres Access trouvent leurs offres dans leur espace Access.",
      },
    ],
    pitfalls: ["Croire qu'une promotion couvre toutes les tailles d'un article.", "Scinder une commande sous le minimum d'achat."],
    sources: [FAQ],
    related: ["access", "prices"],
  },
];
