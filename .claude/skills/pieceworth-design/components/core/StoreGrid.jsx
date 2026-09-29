import React from 'react';
export function StoreGrid({ stores = [], onSelect }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', columnGap: 32 }}>
      {stores.map((s, i) => (
        <li key={i} style={{ borderBottom: '1px solid var(--border-hairline)' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); onSelect && onSelect(s, i); }} className="pw-fade" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16, padding: '16px 0' }}>
            <span>{s.name}</span>
            <span style={{ textAlign: 'right', fontSize: 'var(--text-caption)', color: 'var(--text-secondary)' }}>{s.kind}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
