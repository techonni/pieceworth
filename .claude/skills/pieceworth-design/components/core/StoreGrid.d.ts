/** Two-column store index on the homepage: name left, kind right, hairline under each. */
export interface StoreGridProps { stores: { name: string; kind: string }[]; onSelect?: (store: { name: string; kind: string }, index: number) => void; }
export function StoreGrid(props: StoreGridProps): JSX.Element;
