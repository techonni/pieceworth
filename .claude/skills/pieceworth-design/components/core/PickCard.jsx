import React from 'react';
export function PickCard({ brand, name, detail, price, was, discount, image, href = '#' }) {
  const [h, setH] = React.useState(false);
  return (
    <a href={href} target="_blank" rel="sponsored noopener" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ display: 'block' }}>
      <div style={{ aspectRatio: '1 / 1', overflow: 'hidden', background: 'var(--surface-image)' }}>
        {image ? <img src={image} alt={brand + ' ' + name} style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: h ? 'var(--hover-fade-image)' : 1, transition: 'opacity .15s' }} />
          : <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', fontFamily: 'ui-monospace, monospace', fontSize: 11, color: 'var(--text-secondary)', background: 'repeating-linear-gradient(135deg, #fff 0 8px, #f4f3f0 8px 9px)' }}>catalog image</div>}
      </div>
      <p style={{ margin: '12px 0 0', fontSize: 'var(--text-caption)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-brand-label)' }}>{brand}</p>
      <p style={{ margin: '4px 0 0', fontSize: 'var(--text-small)', lineHeight: '20px', color: 'var(--text-secondary)' }}>{name} · {detail}</p>
      <p style={{ margin: '8px 0 0', fontSize: 'var(--text-price)' }}>
        {price}
        {was && <span style={{ marginLeft: 8, fontSize: 'var(--text-caption)', color: 'var(--text-secondary)', textDecoration: 'line-through' }}>{was}</span>}
        {discount != null && <span style={{ marginLeft: 4, fontSize: 'var(--text-caption)', color: 'var(--text-secondary)' }}>−{discount}%</span>}
      </p>
    </a>
  );
}
