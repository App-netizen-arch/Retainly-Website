<p align="center">
  <img src="logo-192.png" alt="Retainly logo" width="360">
</p>

# Retainly — Marketing Website

The marketing website for **Retainly**, an offline-first study planner built for Pakistani
Matric students. One app for planning, revision, and exam prep — no internet required.

Live copy target: `https://retainly.app`

## Tech Stack

- **React 18** + **TypeScript** — component architecture and type safety
- **Vite** — dev server and production build
- **Tailwind CSS** — utility-first styling with a custom design system (`tailwind.config.js`)
- **React Router** — client-side routing (`/`, `/terms`, `/privacy`)
- **lucide-react** — icon set
- **Vitest** + **Testing Library** — unit and integration tests

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` by default.

## Available Scripts

| Command                | Description                                      |
| ----------------------- | ------------------------------------------------ |
| `npm run dev`           | Start the local development server               |
| `npm run build`         | Type-check-free production build via Vite        |
| `npm run preview`       | Preview the production build locally             |
| `npm run typecheck`     | Run TypeScript in `--noEmit` mode                 |
| `npm run lint`          | Run ESLint across the project                     |
| `npm run test`          | Run the test suite once                           |
| `npm run test:watch`    | Run tests in watch mode                           |
| `npm run test:coverage` | Run tests and produce a coverage report           |

Before opening a pull request, run in this order:

```bash
npm run typecheck
npm run lint
npm run build
npm run test
```

## Project Structure

```
src/
  components/
    layout/       Navbar, Footer, LegalLayout
    sections/     Landing page sections (Hero, Features, FAQ, etc.)
    ui/           Reusable primitives (Button, Card, Accordion, ThemeToggle, ...)
  pages/          Route-level pages (Home, Terms, Privacy)
  data/           Static content (copy, testimonials, roadmap, brand config)
  hooks/          Custom hooks (theme, count-up, in-view, reduced-motion)
  lib/            Analytics helper and SEO metadata
public/
  images/         Favicons, logo (SVG + generated PNG sizes)
  og-image.png    Social share preview image
test/             Vitest + Testing Library test suites, mirroring src/
```

## Routing

The site is a single-page marketing site with two dedicated legal routes:

- `/` — the landing page
- `/terms` — Terms of Service
- `/privacy` — Privacy Policy

Because this is a client-side-routed SPA, static hosts need a rewrite rule so that direct
navigation to `/terms` or `/privacy` doesn't 404. This repo ships with:

- `vercel.json` — Vercel rewrite configuration
- `public/_redirects` — Netlify redirect configuration

If you deploy elsewhere, add an equivalent "serve `index.html` for any unmatched route" rule.

## Branding & Assets

- `public/images/logo.svg` is the source of truth for the Retainly mark. All favicon and
  touch-icon PNGs are generated from it — regenerate them from the SVG rather than editing the
  PNGs directly if the logo changes.
- `public/og-image.png` is the social share preview referenced by the Open Graph and Twitter
  card meta tags in `index.html` and `src/lib/seo.ts`. Update both together if the tagline or
  brand colors change.

## Legal Pages

`src/pages/Terms.tsx` and `src/pages/Privacy.tsx` contain professionally drafted, product-specific
Terms of Service and Privacy Policy content. Each ends with a note that they are drafts based on
the app's current (offline-first, account-free) design, and should be reviewed by legal counsel
before publishing — and revisited if accounts, payments, or cloud sync are introduced.

## Testing

Tests live under `test/`, mirroring the `src/` structure. Components that use `react-router-dom`
(`Navbar`, `Footer`, `App`) are rendered with the `renderWithRouter` helper in
`test/test-utils.tsx`, which wraps them in a `MemoryRouter` so router hooks resolve correctly in
the test environment.

## License

Proprietary — all rights reserved, unless a `LICENSE` file is added specifying otherwise.
