import React from 'react';
export function DashList({ items = [] }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 8 }}>
      {items.map((t, i) => <li key={i}><span style={{ marginRight: 12, color: 'var(--text-secondary)' }}>—</span>{t}</li>)}
    </ul>
  );
}
