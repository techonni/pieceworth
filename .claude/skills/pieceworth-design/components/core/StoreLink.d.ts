/** Outbound store link: ink underline + ↗, followed by a muted "Affiliate link" disclosure. */
export interface StoreLinkProps { label: string; href?: string; affiliate?: boolean; note?: string; }
export function StoreLink(props: StoreLinkProps): JSX.Element;
