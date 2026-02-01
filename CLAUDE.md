# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — Start dev server at localhost:4200
- `npm run build` — Production build (output in `dist/`)
- `npm test` — Run unit tests with Vitest via Angular CLI
- `npx ng generate component <name>` — Scaffold a new component

## Architecture

Angular 21 application using standalone components (no NgModules). Styled with Tailwind CSS v4.

- **Entry point:** `src/main.ts` bootstraps `App` component with config from `src/app/app.config.ts`
- **Routing:** Configured in `src/app/app.routes.ts`, provided via `provideRouter()` in app config
- **Root component:** `src/app/app.ts` — uses signals for state management
- **Formatting:** Prettier with single quotes, 100 char width, Angular HTML parser
