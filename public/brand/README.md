# Marca Vetrium (outubro/2026)

- **Logo oficial** — "vetrium" em Inter Tight 500 com o "v" em Instrument Serif
  itálica violeta: `vetrium-logo-dark.svg` (fundo escuro), `vetrium-logo-light.svg`
  (fundo claro), `vetrium-logo-mono.svg` (uma cor, `currentColor`).
- **Logo resumida (ícone)** — o mesmo "v" com uma pílula violeta subindo atrás:
  `vetrium-icon-dark.svg`, `vetrium-icon-light.svg`, `vetrium-icon-tile.svg`
  (com fundo, para avatar/app) e `vetrium-icon-512.png`.
- Favicon e ícone do iPhone ficam em `src/app/icon.svg`, `icon.png` e
  `apple-icon.png` (convenção do Next). O `icon.svg` muda de cor com o tema do
  navegador.
- No site, use os componentes `Logo` e `LogoIcon` (`src/components/site/
  primitives.tsx`), que seguem o tema claro/escuro.

Cores: violeta #6C3BFF (claro) / #8F6BFF (escuro), texto #0B0D12 / #F2F3F6.
Os contornos foram gerados das fontes com fontTools — não precisam de webfont.

`vetrium-emblem*` é a marca antiga (cristal 3D), mantida só como histórico.
