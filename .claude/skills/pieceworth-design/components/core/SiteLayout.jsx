import React from 'react';
const NAV = [
  { key: 'guides', label: 'Guides' },
  { key: 'picks', label: 'Picks' },
  { key: 'stores', label: 'Stores' },
  { key: 'about', label: 'About' },
];
export function SiteLayout({ siteName = 'Pieceworth', onNavigate, children }) {
  const go = (k) => (e) => { if (onNavigate) { e.preventDefault(); onNavigate(k); } };
  return (
    <div style={{ minHeight: '100vh', background: 'var(--surface-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <header style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: 'var(--header-pad-y) 0' }}>
          <a href="#" onClick={go('home')} style={{ fontFamily: 'var(--font-serif)', fontWeight: 'var(--weight-serif)', fontSize: 'var(--text-wordmark)', lineHeight: '32px', letterSpacing: 'var(--tracking-wordmark)' }}>{siteName}</a>
          <nav style={{ display: 'flex', gap: 20, fontSize: 'var(--text-small)', color: 'var(--text-secondary)' }}>
            {NAV.map((n) => <a key={n.key} href="#" onClick={go(n.key)} className="pw-to-ink">{n.label}</a>)}
          </nav>
        </header>
        <main style={{ paddingBottom: 96 }}>{children}</main>
        <footer style={{ borderTop: '1px solid var(--border-hairline)', padding: '40px 0', fontSize: 'var(--text-caption)', lineHeight: '24px', color: 'var(--text-secondary)' }}>
          <p style={{ margin: 0 }}>{siteName} is an independent site. Some links are affiliate links: if you buy through them, we may earn a commission at no extra cost to you. <a href="#" className="pw-underline">Affiliate disclosure</a>.</p>
          <p style={{ margin: '12px 0 0' }}>Always check prices, delivery and return rules on the store's own site before you buy.</p>
        </footer>
      </div>
    </div>
  );
}
