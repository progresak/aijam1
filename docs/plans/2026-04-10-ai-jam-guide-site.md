# AI Jam Guide Site — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the ThermoSync product promo site into an informational guide for ReactGirls AI Jam #1 participants — covering AI fundamentals, agent pillars, and practical tips organized by workflow phases.

**Architecture:** Keep the same single-page SPA structure. Replace all 6 product components with new guide-oriented sections. Maintain dark theme + cyan accents. All content in Czech. Data hardcoded as arrays in components (same pattern as current site).

**Tech Stack:** React 19 + TypeScript + Tailwind CSS v4 + Vite (unchanged)

---

## New Site Structure

```
App → Navbar → Hero → AIIntro → Pillars → Workflow → Tips → Resources → Footer
```

**Navigation anchors:** `#uvod`, `#ai-intro`, `#pilire`, `#workflow`, `#tipy`, `#zdroje`

---

### Task 1: Update index.html + App.tsx shell

**Files:**
- Modify: `index.html`
- Modify: `src/App.tsx`

**Steps:**

1. Change `<title>` from "ThermoSync" to "ReactGirls AI Jam #1 — Průvodce"
2. Update `App.tsx` imports to new component names:
   ```tsx
   import { Navbar } from './components/Navbar'
   import { Hero } from './components/Hero'
   import { AIIntro } from './components/AIIntro'
   import { Pillars } from './components/Pillars'
   import { Workflow } from './components/Workflow'
   import { Tips } from './components/Tips'
   import { Resources } from './components/Resources'
   import { Footer } from './components/Footer'
   ```
3. Render new component order in App

---

### Task 2: Rewrite Navbar

**Files:**
- Modify: `src/components/Navbar.tsx`

**Content:**
- Logo: Material icon `smart_toy` + "ReactGirls AI Jam"
- Nav links: Úvod, AI & Agenti, Pilíře, Workflow, Tipy, Zdroje
- CTA button: "GitHub Repo" linking to the repo

---

### Task 3: Rewrite Hero

**Files:**
- Modify: `src/components/Hero.tsx`

**Content:**
- Subtitle: "ReactGirls AI Jam #1"
- Title: "Průvodce prací s AI agenty" (gradient text)
- Description: Short intro about what they'll learn
- Visual: Workflow badge/steps: Scout/Research → Plan → Build/Implement (three horizontal steps with icons and arrows)
- CTA: "Začni číst" scrolling to #ai-intro

---

### Task 4: Create AIIntro component (replaces Features)

**Files:**
- Delete: `src/components/Features.tsx`
- Create: `src/components/AIIntro.tsx`

**Content — 3-column grid (same layout as old Features):**

Card 1: **Modely = Mozek**
- Icon: `psychology`
- "LLM modely dodávají inteligenci. Některé umí i přemýšlet (reasoning, thinking)."

Card 2: **Agenti = Mozek + Ruce**
- Icon: `smart_toy`
- "Agent používá model, drží si context, má svou paměť a nástroje pro vykonávání práce."

Card 3: **AI v praxi — SWE-bench**
- Icon: `trending_up`
- SWE-bench stats:
  - leden 2025: 31%
  - únor 2026: 60%
  - duben 2026: 78% (Anthropic Mythos)
- Link: https://www.swebench.com/

Section subtitle: "Modely nebudou hloupější — kvalita stále roste. Velký rozdíl dělají také AI agenti a nástroje, které modely obklopují."

---

### Task 5: Create Pillars component (replaces Pricing)

**Files:**
- Delete: `src/components/Pricing.tsx`
- Create: `src/components/Pillars.tsx`

**Content — 4 pillars in a 2x2 or 4-column grid:**

Each pillar is a card with icon, title, description, and key points.

1. **Context** (icon: `menu_book`)
   - "Čím relevantnější kontext, tím lepší rozhodování a autonomie"
   - Body: System prompt, long-term memory, dokumentace, logy, errors, runtime errors

2. **Tools** (icon: `build`)
   - "Nástroje dávají agentovi ruce"
   - Body: Shell/terminál, spouštění kódu, filesystem, MCP servery, CLI, API calls, 3rd party

3. **Model** (icon: `psychology`)
   - "Mozek — jak chytré to je"
   - Body: Opus 4.6, Gemini 3.1 Pro, GPT-5.6, Claude 4.6, Qwen 3.6 Plus...

4. **Prompt** (icon: `edit_note`)
   - "System message a instrukce formující chování agenta"
   - Body: Intention, personality, output formats

Center label: "Agent = Cursor, Codex, Claude Code, Antigravity, OpenCode..."

---

### Task 6: Create Workflow component (replaces Reviews)

**Files:**
- Delete: `src/components/Reviews.tsx`
- Create: `src/components/Workflow.tsx`

**Content — 3 phases, each as a vertical card with tips:**

#### Phase 1: Scout / Research
- Icon: `search`
- Tips:
  - **Pochopení codebase** — Použij `/init` nebo `AGENTS.md` pro rychlou orientaci
  - **Převedení do diagramů** — Nech agenta vygenerovat mermaid/ASCII diagramy
  - **Context window** — Omezené 200k–1M tokenů, modely jsou stateless
  - **AGENTS.md** — Nejdůležitější soubor pro orientaci agenta v kódu

#### Phase 2: Plan
- Icon: `architecture`
- Tips:
  - **Plan mode** — Nech agenta naplánovat, než začne psát kód
  - **Underspecification** — Buď kreativní, nech agenta navrhnout řešení
  - **Agent jako mentor** — "Nevím co nevím" — nech si vysvětlit, co neznáš
  - **Explanatory output** — Požádej o vysvětlení, ne jen kód

#### Phase 3: Build / Implement
- Icon: `rocket_launch`
- Tips:
  - **Dev server v background** — Agent má real-time přístup k errorům
  - **Zpětná vazba přes browser** — agent-browser pro vizuální kontrolu
  - **MCP nástroje** — Stitch a další pro rozšíření schopností
  - **Context7** — Přístup k právným verzím knihoven
  - **Skilly a commandy** — Opakované prompty jako znovupoužitelné příkazy
  - **GH CLI** — GitHub operace přímo z agenta

---

### Task 7: Create Tips component (numbered tips with links)

**Files:**
- Create: `src/components/Tips.tsx`

**Content — numbered list of 10 practical tips, each as a compact card:**

| # | Tip | Popis | Link |
|---|-----|-------|------|
| 01 | Opakované prompty jako skilly | Znovupoužitelné příkazy místo copy-paste | [Claude Code docs](https://docs.anthropic.com/en/docs/claude-code/slash-commands) |
| 02 | MCP nástroje — Stitch | Rozšíř agenta o externí nástroje | [docs/guides/stitch.md](docs/guides/stitch.md) |
| 03 | GH CLI tool | GitHub operace bez opuštění terminálu | [cli.github.com](https://cli.github.com/) |
| 04 | Codebase → diagramy | Nech agenta vizualizovat architekturu | — |
| 05 | Pochopení codebase (/init) | AGENTS.md + /init pro rychlý onboarding | [docs/prompts/update-docs.md](docs/prompts/update-docs.md) |
| 06 | Plan mode | Plánuj před implementací, specifikuj zadání | — |
| 07 | Agent jako mentor | Ptej se na to co nevíš, nech si vysvětlit | — |
| 08 | Context7 | Přístup k aktuálním verzím knihoven | [context7.com](https://context7.com/) |
| 09 | Browser feedback | Vizuální kontrola přes agent-browser | [docs/guides/agent-browser.md](docs/guides/agent-browser.md) |
| 10 | Dev server v bashes | Real-time přístup k errorům a console | — |

---

### Task 8: Create Resources component

**Files:**
- Create: `src/components/Resources.tsx`

**Content — links to existing docs and external resources:**

Section 1: **Návody v tomto repu**
- GitHub Pages setup → `docs/guides/github-pages-fork.md`
- agent-browser setup → `docs/guides/agent-browser.md`
- Google Stitch MCP → `docs/guides/stitch.md`
- Update AGENTS.md prompt → `docs/prompts/update-docs.md`

Section 2: **Užitečné odkazy**
- Claude Code docs: https://docs.anthropic.com/en/docs/claude-code
- SWE-bench: https://www.swebench.com/
- Context7: https://context7.com/
- GitHub CLI: https://cli.github.com/
- Stitch: https://stitch.withgoogle.com/

---

### Task 9: Rewrite Footer

**Files:**
- Modify: `src/components/Footer.tsx`

**Content:**
- "ReactGirls AI Jam #1" branding with `smart_toy` icon
- "Průvodce pro práci s AI agenty"
- Link: ReactGirls website
- Copyright: © 2026 ReactGirls

---

### Task 10: Verify build + visual check

**Steps:**

1. Run `npm run build` from `aijam1/` — must pass with zero errors
2. Run `npm run dev` and visually verify all sections render
3. Check responsive layout (mobile nav links can be hidden)
4. Verify all anchor links work (#ai-intro, #pilire, etc.)

---

## Execution Notes

- No test framework configured — verify via build + visual
- All styling via Tailwind utility classes (same pattern as existing)
- Keep dark theme (bg-black, text-white, cyan-400 accents)
- Content in Czech
- Material Icons for all icons (already loaded via CDN)
- Links to docs should use relative GitHub paths where applicable
