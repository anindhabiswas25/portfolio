# Portfolio — Anindha Biswas

A personal portfolio for a blockchain engineer & AI enthusiast, built with the
Next.js App Router. Dashed-frame editorial layout, a live GitHub contribution
graph, an interactive tech stack, a cursor-following cat, and dedicated Books
and Movies pages.

## Tech

- **Next.js 16** (App Router, React 19)
- **Tailwind CSS v4**
- **Framer Motion** for the animated navbar indicator
- **TypeScript**

## Features

- Responsive editorial layout with dashed section dividers
- Live GitHub contribution graph (revalidated hourly, no token required)
- Real X/Twitter highlights in an infinite drag-scroll marquee
- Interactive tech stack with Web Audio hover tones
- Avatar toggle and theme switch with sound
- `oneko` cursor-following cat
- `/books` — 3D book covers that open on hover
- `/movies` — posters fetched live via an IMDb suggestion API route

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deployment

Deploys on [Vercel](https://vercel.com) with zero configuration. The home page
uses Incremental Static Regeneration (1h) to keep the GitHub graph fresh.
