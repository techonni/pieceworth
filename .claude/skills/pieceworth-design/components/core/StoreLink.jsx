import React from 'react';
export function StoreLink({ label, href = '#', affiliate = true, note }) {
  return (
    <p style={{ margin: 0, fontSize: 'var(--text-small)' }}>
      <a href={href} target="_blank" rel={affiliate ? 'sponsored noopener' : 'noopener'} className="pw-fade" style={{ display: 'inline-block', borderBottom: '1px solid var(--border-strong)', paddingBottom: 2, lineHeight: '20px' }}>{label} ↗</a>
      {affiliate && <span style={{ marginLeft: 8, color: 'var(--text-secondary)' }}>Affiliate link{note ? ' · ' + note : ''}</span>}
    </p>
  );
}
