import React from 'react';
export function FactList({ facts = [] }) {
  return (
    <dl style={{ margin: 0, borderTop: '1px solid var(--border-hairline)', borderBottom: '1px solid var(--border-hairline)' }}>
      {facts.map((f, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '10rem 1fr', gap: 24, padding: '16px 0', borderTop: i ? '1px solid var(--border-hairline)' : 'none' }}>
          <dt style={{ fontSize: 'var(--text-small)', color: 'var(--text-secondary)' }}>{f.label}</dt>
          <dd style={{ margin: 0 }}>{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}
