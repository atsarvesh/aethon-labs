# Aethon Labs

Aethon Labs public website: a focused project that showcases our software development services, case studies, team capabilities, and proposal information. Built with Vite, React, and TypeScript.

## Features

- Clean, component-based React + TypeScript structure
- Fast dev server powered by Vite
- Prebuilt sections: Hero, Services, Case Studies, Pricing, Proposal Banner, Logo ticker
- Small, focused codebase maintained for quick customization.

## Tech stack

- Vite
- React
- TypeScript
- CSS (plain)

## Getting started

Prerequisites:
- Node.js (v16+ recommended)

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project structure

- `index.html` — app root
- `index.tsx` / `App.tsx` — React entry
- `components/` — page components (Hero, Header, Footer, etc.)
- `ui/` — small presentational UI pieces

## Scripts (npm)

- `dev` — start Vite dev server
- `build` — build production bundle
- `preview` — preview production build locally

## Deployment

1. Run `npm run build` to produce the `dist/` folder.
2. Deploy `dist/` to your host (connect the repo on Vercel/Netlify or push the folder to your static host).

If deploying to a subpath, ensure the `base` option in `vite.config.ts` is set appropriately.