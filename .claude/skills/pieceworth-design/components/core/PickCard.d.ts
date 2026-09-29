/**
 * Weekly-picks product tile: square white image well, tracked brand, muted name, price with struck-through was-price.
 * @startingPoint section="Website" subtitle="Product pick tile" viewport="700x420"
 */
export interface PickCardProps { brand: string; name: string; detail: string; price: string; was?: string; discount?: number; image?: string; href?: string; }
export function PickCard(props: PickCardProps): JSX.Element;
