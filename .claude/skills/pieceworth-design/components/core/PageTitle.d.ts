import * as React from 'react';
/** Serif page heading. hero = homepage 52px, article = guide/picks 44px, page = index/about 40px. */
export interface PageTitleProps { size?: 'hero' | 'article' | 'page'; children?: React.ReactNode; style?: React.CSSProperties; }
export function PageTitle(props: PageTitleProps): JSX.Element;
