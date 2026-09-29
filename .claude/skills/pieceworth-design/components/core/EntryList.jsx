import React from 'react';
export function EntryList({ items = [], onSelect, titleSize = 22 }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, borderTop: '1px solid var(--border-hairline)', borderBottom: '1px solid var(--border-hairline)' }}>
      {items.map((it, i) => (
        <li key={i} style={{ borderTop: i ? '1px solid var(--border-hairline)' : 'none' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); onSelect && onSelect(it, i); }} className="pw-fade" style={{ display: 'block', padding: '20px 0' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 'var(--weight-serif)', fontSize: titleSize, lineHeight: titleSize === 22 ? 'var(--leading-snug)' : undefined }}>{it.title}</span>
            {it.meta && <span style={{ marginLeft: 12, fontSize: 'var(--text-caption)', color: 'var(--text-secondary)' }}>{it.meta}</span>}
            {it.summary && <span style={{ display: 'block', marginTop: 4, fontSize: 'var(--text-small)', color: 'var(--text-secondary)' }}>{it.summary}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
