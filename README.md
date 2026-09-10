# terpinedream portfolio

Editorial static portfolio built with [Astro](https://astro.build).

**Live:** https://terpinedream.github.io/portfolio/

## Local development

```bash
npm install
npm run dev
```

Site serves under `/portfolio/` (matches GitHub Pages project path).

```bash
npm run build
npm run preview
```

## Content

| File | What to edit |
|------|----------------|
| [`src/content/site.ts`](src/content/site.ts) | Brand, about, ethos |
| [`src/content/projects.ts`](src/content/projects.ts) | Featured projects |
| [`src/content/toolkit.ts`](src/content/toolkit.ts) | Toolkit wheel entries |
| [`src/content/research.ts`](src/content/research.ts) | Research section + PDF links |
| [`public/projects/`](public/projects/) | Project images |
| [`public/research/`](public/research/) | Research PDF |

## Deploy

Remote: `git@github.com:terpinedream/portfolio.git`

1. Push to `main`
2. Repo **Settings → Pages → Source: GitHub Actions**
3. Workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and deploys on push

## Shortcuts

- `/` or `Cmd/Ctrl+K` — jump palette
