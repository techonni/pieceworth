import React from 'react';
export function Verdict({ children }) {
  return <p style={{ margin: 0, borderLeft: '1px solid var(--border-strong)', paddingLeft: 20, fontFamily: 'var(--font-serif)', fontWeight: 'var(--weight-serif)', fontSize: 'var(--text-verdict)', lineHeight: 'var(--leading-snug)' }}>{children}</p>;
}
