# AGENTS.md

AI agent reference for this repository. Works with GitHub Copilot, Claude Code, Cursor, Gemini CLI, Windsurf, and others.

## 1. Project Overview

Demo SPA for "AI Jam #1" workshop — a ThermoSync product landing page built with React and deployed to GitHub Pages.

**Stack:** React 19.2, TypeScript ~6, Vite 8, Tailwind CSS 4.2, React Compiler (Babel), ESLint 9  
**Type:** Single-Page Application (no routing, no state management library)  
**Base path:** `/aijam1/` (configured in `vite.config.ts`)

## 2. Commands

| Command | What it does | When to use |
|---|---|---|
| `npm run dev` | Vite dev server at `http://localhost:5173/aijam1/` | Local development |
| `npm run build` | `tsc -b` type-check + Vite production build → `dist/` | Before deploying |
| `npm run lint` | ESLint on all `*.ts` / `*.tsx` files | Before committing |
| `npm run preview` | Serve the built `dist/` locally | Verify production build |

## 3. Project Structure

```
index.html              # Entry HTML, loads Material Icons CDN
vite.config.ts          # Vite config (base path, React Compiler, Tailwind)
src/
  main.tsx              # React DOM root mount
  App.tsx               # Root component, composes all sections
  index.css             # @import "tailwindcss" — only line needed
  App.css               # Legacy empty file (unused)
  components/
    Navbar.tsx          # Fixed top nav with logo and CTA
    Hero.tsx            # Full-height hero with product image and temp display
    Features.tsx        # 3-column feature grid
    Pricing.tsx         # Comparison table (Lite / Pro / Ultra) + mobile cards
    Reviews.tsx         # 3 testimonials with avatars
    Footer.tsx          # Footer with links
docs/
  guides/               # Setup guides (Stitch MCP, agent-browser, GitHub Pages)
  projects/             # Project prompts for Stitch
  skills/               # Skill docs
  mcp.json              # MCP server definitions reference
.vscode/mcp.json        # Active MCP config (Stitch server)
.github/prompts/        # Reusable prompt files
```

## 4. Architecture

**Data flow:** `index.html` → `src/main.tsx` → `<App>` → section components (no router, no store)

**Key decisions:**
- No React Router — single page with anchor links (`#features`, `#models`, `#reviews`)
- No global state — `useState` only in `Pricing.tsx` for mobile tier selection
- React Compiler enabled via Babel preset — do not add manual `useMemo`/`useCallback`
- Tailwind 4 via Vite plugin — no `tailwind.config.js` file needed, config is in CSS
- Google Material Icons loaded from CDN in `index.html`; use `<span className="material-icons">icon_name</span>`

## 5. Conventions

**TypeScript:** `verbatimModuleSyntax` is on — use `import type` for type-only imports. `noUnusedLocals` and `noUnusedParameters` are errors.

**CSS:** Pure Tailwind utility classes. No custom CSS files (App.css is empty). Use inline `style` props only for dynamic values not expressible as utilities.

**Components:**

```tsx
// Named export, no default export in component files
export function MySection() {
  return (
    <section className="bg-black py-28 px-8 border-t border-white/10">
      {/* ... */}
    </section>
  )
}
```

**Theme:** Black background (`bg-black`), cyan accents (`text-cyan-400`, `border-cyan-400`), gray text hierarchy (`text-white` → `text-gray-300` → `text-gray-500`), uppercase tracking-widest labels.

## 6. Boundaries

✅ **Always do:**
- Run `npm run lint` and `npm run build` before committing
- Use named exports for components (`export function`)
- Keep components in `src/components/` as single-file modules

⚠️ **Ask first:**
- Adding new npm dependencies
- Changing `vite.config.ts` (base path affects GitHub Pages deployment)
- Adding a router or global state management
- Modifying `index.html` CDN links

🚫 **Never do:**
- Commit `.vscode/mcp.json` API keys to a public repo — rotate if exposed
- Add `useMemo` / `useCallback` manually (React Compiler handles this)
- Create a `tailwind.config.js` — Tailwind 4 uses CSS-based config
- Import from `react` for JSX — `react-jsx` transform handles it automatically
