/** Hairline-divided list of serif titles with muted summary — guides, stores, "This week". */
export interface EntryItem { title: string; summary?: string; meta?: string; }
export interface EntryListProps { items: EntryItem[]; onSelect?: (item: EntryItem, index: number) => void; /** 22 (guides) or 24 (stores index) */ titleSize?: number; }
export function EntryList(props: EntryListProps): JSX.Element;
