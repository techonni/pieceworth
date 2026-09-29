const { Eyebrow, PageTitle, EntryList, StoreGrid, StoreLink, Verdict, GuideStep, DashList, FactList, PickCard } = window.PW;
const D = window.PWData;
const muted = { color: 'var(--text-secondary)', margin: 0 };
const small = { fontSize: 'var(--text-small)', color: 'var(--text-secondary)', margin: 0 };
const gB = (s) => D.brands.find((b) => b.slug === s);

function Home({ go }) {
  return <>
    <section style={{ padding: '40px 0 64px' }}>
      <PageTitle size="hero">Buy luxury wisely.</PageTitle>
      <p style={{ ...muted, marginTop: 20, maxWidth: '28rem' }}>Where to shop, what to check before paying, and whether the piece is worth it. Short, honest guides.</p>
    </section>
    <section style={{ marginBottom: 64 }}>
      <Eyebrow>This week</Eyebrow>
      <div style={{ marginTop: 16 }}><EntryList onSelect={() => go('picks')} items={[{ title: 'Brand-new designer bags on sale this week', summary: 'Twelve unworn pieces with tags, reduced by at least 30%.' }]} /></div>
    </section>
    <section>
      <Eyebrow>Guides</Eyebrow>
      <div style={{ marginTop: 16 }}><EntryList onSelect={(_, i) => go('guide', D.guides[i])} items={D.guides.map((g) => ({ title: g.question, summary: g.summary }))} /></div>
    </section>
    <section style={{ marginTop: 64 }}>
      <Eyebrow>Stores</Eyebrow>
      <div style={{ marginTop: 16 }}><StoreGrid onSelect={(_, i) => go('store', D.brands[i])} stores={D.brands} /></div>
    </section>
  </>;
}

function Guides({ go }) {
  return <>
    <PageTitle style={{ paddingTop: 24 }}>Guides</PageTitle>
    <div style={{ marginTop: 32 }}><EntryList onSelect={(_, i) => go('guide', D.guides[i])} items={D.guides.map((g) => ({ title: g.question, summary: g.summary }))} /></div>
  </>;
}

function Guide({ go, arg }) {
  const g = arg || D.guides[0];
  const related = D.guides.filter((x) => x.slug !== g.slug).slice(0, 2);
  return <article style={{ paddingTop: 24 }}>
    <Eyebrow as="p">Guide · Updated 28 September 2026</Eyebrow>
    <PageTitle size="article" style={{ marginTop: 16 }}>{g.question}</PageTitle>
    <p style={{ ...muted, marginTop: 20 }}>{g.summary}</p>
    <div style={{ marginTop: 32 }}><Verdict>[Verdict text from content.ts — abbreviated in this kit.]</Verdict></div>
    <ol style={{ margin: '48px 0 0', padding: 0, display: 'grid', gap: 40 }}>
      {g.steps.map((t, i) => <GuideStep key={i} index={i + 1} title={t} paragraphs={['[Step text from content.ts — abbreviated in this kit.]']}>{i === 0 && <StoreLink label={'Visit ' + gB(g.brands[0]).name} />}</GuideStep>)}
    </ol>
    <section style={{ marginTop: 56 }}><Eyebrow>Common mistakes</Eyebrow><div style={{ marginTop: 16 }}><DashList items={['[Pitfall from content.ts]', '[Pitfall from content.ts]']} /></div></section>
    <section style={{ marginTop: 56 }}>
      <Eyebrow>Stores in this guide</Eyebrow>
      <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 0, borderTop: '1px solid var(--border-hairline)', borderBottom: '1px solid var(--border-hairline)' }}>
        {g.brands.map((s, i) => <li key={s} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, padding: '16px 0', borderTop: i ? '1px solid var(--border-hairline)' : 'none' }}>
          <a href="#" className="pw-fade" onClick={(e) => { e.preventDefault(); go('store', gB(s)); }}>{gB(s).name}</a><StoreLink label="Visit store" /></li>)}
      </ul>
    </section>
    <section style={{ marginTop: 56, ...small }}>
      <Eyebrow style={{ color: 'inherit' }}>Official sources</Eyebrow>
      <ul style={{ listStyle: 'none', margin: '12px 0 0', padding: 0 }}><li><a href="#" className="pw-underline pw-to-ink">{gB(g.brands[0]).name}: official help pages</a></li></ul>
    </section>
    <section style={{ marginTop: 56 }}>
      <Eyebrow>Read next</Eyebrow>
      <ul style={{ listStyle: 'none', margin: '12px 0 0', padding: 0, display: 'grid', gap: 8 }}>
        {related.map((r) => <li key={r.slug}><a href="#" className="pw-fade" onClick={(e) => { e.preventDefault(); go('guide', r); }} style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 20 }}>{r.question}</a></li>)}
      </ul>
    </section>
  </article>;
}

const PICKS = [
  ['Bottega Veneta', 'Mini Jodie', 'Brand new with tags', '£1,250', '£2,100', 40],
  ['Loewe', 'Puzzle small', 'Brand new with tags', '£1,480', '£2,200', 33],
  ['Celine', 'Triomphe shoulder', 'Brand new with tags', '£990', '£1,500', 34],
  ['Prada', 'Re-Edition 2005', 'Brand new with tags', '£720', '£1,150', 37],
  ['Saint Laurent', 'Le 5 à 7', 'Brand new with tags', '£1,050', '£1,650', 36],
  ['Fendi', 'Baguette', 'Brand new with tags', '£1,390', '£2,050', 32],
];
function Picks() {
  return <>
    <Eyebrow as="p" style={{ paddingTop: 24 }}>Picks · 28 September 2026</Eyebrow>
    <PageTitle size="article" style={{ marginTop: 16 }}>Brand-new designer bags on sale this week</PageTitle>
    <p style={{ ...muted, marginTop: 20 }}>Twelve bags from the « Brand New » section of Hardly Ever Worn It: unworn pieces with tags, reduced by at least 30%. Prices are in pounds, as listed on 28 September 2026. Stock is one piece at a time, so some may already be gone.</p>
    <p style={{ ...small, marginTop: 12 }}>Product links are affiliate links. HEWI ships from the UK: outside the UK, import duties may be charged on delivery. <a href="#" className="pw-underline pw-to-ink">How duties work</a>.</p>
    <ul style={{ listStyle: 'none', margin: '48px 0 0', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', columnGap: 20, rowGap: 48 }}>
      {PICKS.map((p, i) => <li key={i}><PickCard brand={p[0]} name={p[1]} detail={p[2]} price={p[3]} was={p[4]} discount={p[5]} /></li>)}
    </ul>
    <section style={{ marginTop: 64, borderTop: '1px solid var(--border-hairline)', paddingTop: 32, ...small }}>
      <p style={{ margin: 0 }}>New to buying on HEWI? Read <a href="#" className="pw-underline pw-to-ink">how HEWI works</a> and <a href="#" className="pw-underline pw-to-ink">our first-purchase method</a> before you order.</p>
    </section>
  </>;
}

function Stores({ go }) {
  return <>
    <PageTitle style={{ paddingTop: 24 }}>Stores</PageTitle>
    <div style={{ marginTop: 32 }}><EntryList titleSize={24} onSelect={(_, i) => go('store', D.brands[i])} items={D.brands.map((b) => ({ title: b.name, meta: b.kind, summary: b.summary }))} /></div>
  </>;
}

function Store({ go, arg }) {
  const b = arg || D.brands[0];
  const bg = D.guides.filter((g) => g.brands.includes(b.slug));
  return <>
    <Eyebrow as="p" style={{ paddingTop: 24 }}>{b.kind}</Eyebrow>
    <PageTitle style={{ marginTop: 16 }}>{b.name}</PageTitle>
    <p style={{ ...muted, marginTop: 16 }}>{b.summary}</p>
    <div style={{ marginTop: 24 }}><StoreLink label={'Visit ' + b.name} /></div>
    <div style={{ marginTop: 48 }}><FactList facts={[{ label: 'Sells', value: '[Fact from content.ts]' }, { label: 'Ships from', value: '[Fact from content.ts]' }, { label: 'Returns', value: '[Fact from content.ts]' }]} /></div>
    <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 40 }}>
      <section><Eyebrow>Good for</Eyebrow><ul style={{ listStyle: 'none', margin: '12px 0 0', padding: 0 }}><li>[Item from content.ts]</li></ul></section>
      <section><Eyebrow>Watch out</Eyebrow><ul style={{ listStyle: 'none', margin: '12px 0 0', padding: 0 }}><li>[Item from content.ts]</li></ul></section>
    </div>
    {bg.length > 0 && <section style={{ marginTop: 56 }}><Eyebrow>Guides</Eyebrow>
      <ul style={{ listStyle: 'none', margin: '12px 0 0', padding: 0, display: 'grid', gap: 8 }}>{bg.map((g) => <li key={g.slug}><a href="#" className="pw-fade" onClick={(e) => { e.preventDefault(); go('guide', g); }} style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 20 }}>{g.question}</a></li>)}</ul></section>}
    <p style={{ ...small, marginTop: 56 }}>Checked on 28 September 2026 on the store's official pages: <a href="#" className="pw-underline pw-to-ink">Help centre</a>. Rules change: check them again before you buy.</p>
  </>;
}

function About() {
  return <>
    <PageTitle style={{ paddingTop: 24 }}>About</PageTitle>
    <div className="pw-prose" style={{ marginTop: 32 }}>
      <p>Pieceworth helps you buy designer pieces online without regrets: which stores to trust, how pre-owned works, what duties and returns really cost, and whether a piece is worth its price.</p>
      <p>Every guide is based on the stores' own official pages, linked at the bottom of each guide, with the date we checked them. Prices and rules change often, so always confirm them on the store before you buy.</p>
      <p>Pieceworth is independent. It isn't owned by or affiliated with any of the stores it covers, apart from the affiliate links described in our <a href="#" className="pw-underline">affiliate disclosure</a>.</p>
    </div>
  </>;
}
window.PWScreens = { Home, Guides, Guide, Picks, Stores, Store, About };
