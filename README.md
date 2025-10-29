# nnajiabraham.com

A monospace, editor-inspired single page application built with [Vite](https://vite.dev/), [React](https://react.dev/), and TypeScript. The redesign keeps Abraham Nnaji’s original copy and colour palette while adopting a terminal-like layout inspired by [Ashley.dev](https://ashley.dev/). The site ships as a client-side SPA optimised for Netlify hosting.

## Features

- ⚡️ **Modern tooling** – Vite + React 19 with TypeScript, CSS Modules, and absolute imports via `@/`.
- 🎨 **Monospace aesthetic** – IBM Plex Mono and Space Mono fonts with neon-accent theming that mirrors the legacy portfolio.
- 🧭 **Accessible navigation** – Sticky desktop nav, mobile menu toggle, skip link, and semantic sections with anchor links.
- 🧪 **Confidence via tests** – Vitest + Testing Library cover navigation, preserved copy, and theming tokens.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to develop locally.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server. |
| `npm run build` | Type-check and build the production bundle to `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run start` | Alias of `npm run dev` for compatibility. |
| `npm run serve` | Alias of `npm run preview -- --host` for Netlify-style previews. |
| `npm run lint` | Run ESLint with accessibility, React, and Prettier alignment rules. |
| `npm run format` | Check formatting with Prettier. |
| `npm run format:write` | Auto-format source files with Prettier. |
| `npm run test` | Run the Vitest test suite in watch mode. |
| `npm run test:run` | Run the Vitest test suite once (CI friendly). |

## Testing

Vitest is configured with the JSDOM environment. To run the suite once in CI, use `npm run test:run`. Tests live in `src/__tests__` and focus on:

- Rendering of anchor sections and navigation targets.
- Preservation of the original “About” copy and PolicyMe link.
- Presence of global design tokens and accessible contact links.

## Deployment

The Netlify build command should remain `npm run build` with the publish directory set to `dist`. Use `npm run serve` or `npm run preview` for local smoke tests before deploying.

## Fonts & assets

Fonts are provided via [`@fontsource`](https://fontsource.org/) packages for IBM Plex Mono and Space Mono. Icons use [`lucide-react`](https://lucide.dev/). All assets are bundled at build time by Vite.
