# Pieceworth · Passagem para a próxima sessão

Data: 29/09/2026 (1.ª sessão). Responde ao Techonni em **português**; o site é em **inglês**.

## Estado

- **Online:** https://pieceworth.com (Cloudflare Pages, domínio comprado na Cloudflare).
- **8 guias:** Italist e HEWI são de confiança?, novo com desconto ou segunda mão, alfândega Itália/Reino Unido, Bottega Veneta mais barato, Italist ou loja oficial, primeira compra em segunda mão, verificar uma mala antes de comprar.
- **4 lojas** com link de afiliação Impact: Italist, HEWI, The Apartment Cosenza, Coach (loja europeia). Todos os links têm SubId1 = nome da página.
- **Seleção semanal:** `/picks/new-designer-bags-on-sale/`, 12 malas novas da HEWI (catálogo Impact de 29/09).
- **Pinterest:** 9 pins minimalistas em `public/pins/`, ficheiro `docs/pinterest-agendar-1.csv` (30/09 a 04/10). Logótipo e capa em `public/brand/`.
- Impact: site verificado. Cloudflare Web Analytics ativo.

## SEO (2.ª sessão)

- Base.astro: og:image (capa), Twitter cards, JSON-LD Organization/WebSite em todas as páginas. Sitemap, robots, canonical já estavam bem.
- Guia 9 publicado: « Is The Apartment Cosenza legit? » (envios €25 EUA, DDU, devolução 14 dias, €40 de retorno; factos das páginas oficiais, 29/09). Site tem agora 9 guias.
- Sitemap submetido no Search Console (29/09).
- Nota: o site da loja bloqueia bots (403); as políticas leem-se com curl e User-Agent de browser.
- Próximo guia: Italist (10 %), p. ex. duty-free/tamanhos, ou pre-owned HEWI.

## Pendentes do lado do Techonni

- [ ] Google Search Console: verificar o domínio e submeter https://pieceworth.com/sitemap.xml.

- [ ] Conta Pinterest Business do Pieceworth: perfil (logótipo, bio, site), 2 boards « Luxury shopping guides » e « Designer bags for less ».
- [x] Tag `p:domain_verify` do Pinterest no site (29/09). Falta o Techonni clicar em « Verify » no Pinterest.
- [ ] Carregar `pieceworth-pinterest-pins.csv` (Transferências) em Settings → Bulk create Pins.
- [ ] Todas as semanas: exportar de novo o catálogo HEWI « Brand New » para atualizar a seleção.
- [ ] Se existir: exportar o catálogo da Italist (10 %) para uma segunda seleção.

## Próximos passos (Claude)

1. Atualizar a seleção semanal com cada catálogo novo e criar novos pins.
2. Mais guias centrados na Italist (10 %) e em compradores novos da HEWI (6 %), só com factos verificados.
3. Mais tarde: versões FR/PT (e então guias Coach, que só paga vendas europeias).
