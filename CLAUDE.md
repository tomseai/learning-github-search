# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — Start Angular dev server at localhost:4200
- `npm run build` — Production build (output in `dist/`)
- `npm test` — Run unit tests with Vitest via Angular CLI
- `npx ng generate component <name>` — Scaffold a new component
- `cd server && node index.js` — Start Express auth server at localhost:3000

## Architecture

Angular 21 application using standalone components (no NgModules). Styled with Tailwind CSS v4.

- **Entry point:** `src/main.ts` bootstraps `App` component with config from `src/app/app.config.ts`
- **Routing:** Configured in `src/app/app.routes.ts`, provided via `provideRouter()` in app config
- **Root component:** `src/app/app.ts` — navbar + router-outlet, dark mode toggle
- **Home page:** `src/app/home/home.ts` — GitHub user search (default route `/`)
- **Auth:** `src/app/auth/` — OAuth service, route guard, callback component
- **Dashboard:** `src/app/dashboard/dashboard.ts` — protected route showing user's repos
- **Navbar:** `src/app/navbar/navbar.ts` — login/logout, avatar, dark mode toggle
- **GitHub service:** `src/app/github.service.ts` — API calls (public + authenticated)
- **HTTP interceptor:** `src/app/app.config.ts` — attaches Bearer token to GitHub API requests
- **Auth server:** `server/index.js` — minimal Express server handling OAuth token exchange
- **Secrets:** `server/.env` (gitignored) — `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`
- **Formatting:** Prettier with single quotes, 100 char width, Angular HTML parser
