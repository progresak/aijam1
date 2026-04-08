# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` — Starts Vite dev server with HMR
- **Build:** `npm run build` — Type-checks with `tsc -b` then builds with Vite
- **Lint:** `npm run lint` — Runs ESLint (flat config, ESLint 9+)
- **Preview:** `npm run preview` — Serves the production build locally

No test framework is currently configured.

## Tech Stack

- React 19 with React Compiler (via `babel-plugin-react-compiler` + `@rolldown/plugin-babel`)
- TypeScript 6 (strict: `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`)
- Vite 8 with `@vitejs/plugin-react` (Oxc parser)
- ESLint 9 flat config with `typescript-eslint`, `react-hooks`, and `react-refresh` plugins
- No CSS framework — plain CSS with custom properties and `prefers-color-scheme` for dark/light mode

## Architecture

Single-page app, no routing or state management library. Entry point is `src/main.tsx` → renders `<App />` in StrictMode.

- `src/main.tsx` — React DOM bootstrap
- `src/App.tsx` — Main (currently only) component
- `src/index.css` — Global styles, CSS custom properties, responsive breakpoints
- `src/App.css` — Component-scoped styles with CSS nesting
- `src/assets/` — Static images (hero.png, react.svg, vite.svg)
- `public/` — Favicon and SVG icon sprite (`icons.svg` referenced via `<use href>`)

## TypeScript

Uses project references: `tsconfig.json` delegates to `tsconfig.app.json` (source) and `tsconfig.node.json` (build tooling). Module resolution is set to `bundler` mode with `verbatimModuleSyntax` enabled — use `import type` for type-only imports.
