import * as React from 'react';
/**
 * Page shell: centered 672px column, serif wordmark + muted nav header, hairline affiliate footer.
 * @startingPoint section="Website" subtitle="Empty Pieceworth page shell" viewport="800x600"
 */
export interface SiteLayoutProps {
  siteName?: string;
  /** Called with 'home' | 'guides' | 'picks' | 'stores' | 'about'. Omit for plain links. */
  onNavigate?: (key: string) => void;
  children?: React.ReactNode;
}
export function SiteLayout(props: SiteLayoutProps): JSX.Element;
