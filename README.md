# LedgerLens

LedgerLens is a **frontend-only** finance dashboard built with React and Vite. It showcases company insights, quarterly charts (mock NVDA-style fundamentals), a discounted cash flow (DCF) calculator, and a news feed — **all powered by local mock data**, with no backend server.

## Features

- **Authentication (demo)** — Sign-in and sign-up store a session in `localStorage`; credentials are not validated against a server.
- **Insights** — Sector tabs and company cards with links to detail views (`NVDA`, `AAPL`, `JPM`, `GS`, `PFE`, `JNJ`).
- **Company detail** — Header metrics plus **`GraphContainer`** charts driven by `src/data.json`.
- **DCF calculator** — Client-side valuation math only.
- **News** — Static articles with external links (opens in a new tab).
- **Landing** — Public `/` marketing page with feature grid and CTAs (`/login`, `/signup`).
- **Dashboard** — Watchlists, earnings, transcripts, portfolios, profile, help, and in-dashboard terms — all mock-driven UI.
- **Public terms** — `/terms` (no login); mirrored under **`/dashboard/terms`** inside the shell.

## Tech stack

- [React](https://react.dev/) 19 · [Vite](https://vite.dev/) 7 · [React Router](https://reactrouter.com/) 7  
- [Tailwind CSS](https://tailwindcss.com/) v4 · [ApexCharts](https://apexcharts.com/) (via `react-apexcharts`)

## Getting started

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal (typically `http://localhost:5173`).

### Scripts

| Command       | Description              |
| ------------- | ------------------------ |
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Production build      |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint             |

## Mock data

| Area        | Location |
| ----------- | -------- |
| Companies & sectors | `src/mock/fixtures.js` |
| Watchlists, earnings, transcripts, portfolios | `src/mock/fixtures.js` |
| Fundamentals / charts (quarterly) | `src/data.json` |
| News articles | `src/mock/fixtures.js` (`MOCK_NEWS`) |

All dashboard modules import mock records directly — there is **no HTTP client** and no backend URL.

## Deployment

The repo includes `vercel.json` with a SPA fallback rewrite so client-side routes work on static hosts.

```bash
npm run build
```

Serve the `dist/` folder from any static host.

## Author

**Prayush Adhikari** — [@adhikareeprayush](https://github.com/adhikareeprayush)