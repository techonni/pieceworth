import React from 'react';
export function GuideStep({ index = 1, title, paragraphs = [], children }) {
  return (
    <li style={{ listStyle: 'none' }}>
      <h2 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 'var(--weight-serif)', fontSize: 'var(--text-step)', lineHeight: 'var(--leading-snug)' }}>
        <span style={{ marginRight: 12, color: 'var(--text-secondary)' }}>{String(index).padStart(2, '0')}</span>{title}
      </h2>
      <div className="pw-prose" style={{ marginTop: 8 }}>{paragraphs.map((p, i) => <p key={i}>{p}</p>)}</div>
      {children && <div style={{ marginTop: 12 }}>{children}</div>}
    </li>
  );
}
