import React from 'react';
export function Eyebrow({ as = 'h2', children, style }) {
  const T = as;
  return <T style={{ ...{ fontSize: 'var(--text-caption)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-eyebrow)', color: 'var(--text-secondary)', margin: 0, fontWeight: 400 }, ...style }}>{children}</T>;
}
