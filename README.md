# Gabinet Psychologiczny — Lorem Ipsum

Minimalistyczna, elegancka strona gabinetu psychologicznego.
Stack: Vite + React + TypeScript + Tailwind. Routing: **HashRouter** —
działa na **GitHub Pages** bez dodatkowej konfiguracji 404.

## Struktura mediów

Wszystkie obrazy w `public/assets/` — możesz podmieniać pliki bez ruszania kodu:

```
public/assets/
├── logo/
├── hero/psycholog.jpg
├── gabinet/gabinet-1.jpg
├── gabinet/gabinet-2.jpg
└── placeholders/o-mnie.jpg
```

Treść strony (cennik, obszary, edukacja, kontakt) jest w `src/data/site.ts`.

## Lokalnie

```bash
npm install
npm run dev
```

## Deploy na GitHub Pages

```bash
VITE_BASE="/<nazwa-repo>/" npm run build
npx gh-pages -d dist
```

W repo: **Settings → Pages → Source: gh-pages branch**.
