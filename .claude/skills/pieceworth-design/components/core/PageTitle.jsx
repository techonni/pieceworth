import React from 'react';
const SIZES = {
  hero: { fontSize: 'var(--text-hero)', lineHeight: 'var(--leading-hero)' },
  article: { fontSize: 'var(--text-h1)', lineHeight: 'var(--leading-h1)' },
  page: { fontSize: 'var(--text-h1-page)', lineHeight: 'var(--leading-tight)' },
};
export function PageTitle({ size = 'page', children, style }) {
  return <h1 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 'var(--weight-serif)', ...SIZES[size], ...style }}>{children}</h1>;
}
