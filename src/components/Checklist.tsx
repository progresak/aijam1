interface Item {
  text: string
  detail?: string
  link?: { url: string; label: string }
}

const understand: Item[] = [
  {
    text: 'AI agent není chatbot — je to kolega, který umí i konat',
    detail:
      'Agent = model (mozek) + nástroje (ruce) + kontext (paměť). Umí číst soubory, spouštět příkazy, přistupovat k API.',
  },
  {
    text: '4 pilíře agenta: Context, Tools, Model, Prompt',
    detail:
      'Čím lepší kontext a nástroje dáte, tím chytřeji agent pracuje. Model je mozek, prompt je onboarding.',
  },
  {
    text: 'Context window je omezený (200k–1M tokenů)',
    detail:
      'Agent je stateless — nepamatuje si nic z minulých konverzací. Šetřete tokeny, dávejte relevantní kontext.',
  },
  {
    text: 'AI se výrazně zlepšuje — SWE-bench: 31 % → 60 % → 78 %',
    detail: 'Leden 2025 → únor 2026 → duben 2026. Kvalita stále roste.',
    link: { url: 'https://www.swebench.com/', label: 'swebench.com' },
  },
]

const workflow: Item[] = [
  {
    text: '1. Scout — nejdřív prozkoumejte',
    detail:
      'Nechte agenta prozkoumat projekt. Ať si přečte kód, pochopí architekturu a zorientuje se. Agent bez kontextu je jako nový kolega první den.',
  },
  {
    text: '2. Plan — pak naplánujte',
    detail:
      'Zapněte plan mode — agent navrhne řešení a čeká na schválení. Na plánování použijte nejchytřejší model (Opus 4.6, GPT-5.4, Gemini 3.1 Pro).',
  },
  {
    text: '3. Build — teprve pak stavte',
    detail:
      'Na implementaci stačí levnější model (Sonnet, Composer 2…). Agent staví krok po kroku, vy kontrolujete a směrujete.',
  },
]

const tips: Item[] = [
  {
    text: 'Vytvořte AGENTS.md — mapu pro agenta',
    detail: 'Standardizovaný soubor pro orientaci AI agentů v projektu. Použijte prompt z docs/prompts/update-docs.md.',
    link: { url: 'https://agents.md/', label: 'agents.md standard' },
  },
  {
    text: 'Nechte agenta prozkoumat projekt na začátku',
    detail: 'Prozkoumá strukturu, soubory a závislosti. Ušetříte čas i tokeny.',
  },
  {
    text: 'Nechte agenta vizualizovat architekturu',
    detail: '„Nakresli architekturu jako mermaid diagram." — okamžitý přehled.',
  },
  {
    text: 'Na plánování použijte nejchytřejší model',
    detail: 'Opus 4.6, GPT-5.4, Gemini 3.1 Pro — plán se platí jednou. Na build stačí levnější.',
  },
  {
    text: 'Udělejte si z agenta mentora',
    detail: 'Ptejte se, nechte si vysvětlit. Např. v Claude Code zapněte Output style → Learning.',
  },
  {
    text: 'Spusťte dev server na pozadí',
    detail: 'Agent vidí chyby real-time a opravuje je bez copy&paste.',
  },
  {
    text: 'MCP: Google Stitch — ukázka MCP serveru',
    detail: 'MCP rozšíří agenta o externí nástroje. Stitch napojí agenta na design platformu — skvělé pro demo jak MCP funguje.',
    link: { url: 'https://stitch.withgoogle.com/', label: 'Stitch' },
  },
  {
    text: 'MCP: Context7 — aktuální docs knihoven',
    detail: 'Přístup k aktuálním verzím React, Tailwind, Vite… Žádné deprecated funkce.',
    link: { url: 'https://context7.com/', label: 'context7.com' },
  },
  {
    text: 'Dejte agentovi oči — agent-browser',
    detail: 'Agent otevře web v prohlížeči a zkontroluje výsledek vizuálně.',
    link: { url: 'https://github.com/vercel-labs/agent-browser', label: 'agent-browser' },
  },
  {
    text: 'Uložte opakované prompty jako příkazy',
    detail: 'Custom commands/skills — vznikající standard pro sdílení schopností mezi agenty.',
    link: { url: 'https://agentskills.io/home', label: 'Agent Skills standard' },
  },
  {
    text: 'Naučte agenta pracovat s Gitem',
    detail: 'Commity, PR, issues — agent to zvládne přímo z terminálu.',
    link: { url: 'https://cli.github.com/', label: 'GitHub CLI' },
  },
  {
    text: 'Dávejte přesný kontext — ani více, ani méně',
    detail: 'Jasné zadání s kontextem projektu je polovina úspěchu.',
  },
  {
    text: 'Prověřujte výsledky — code review i u AI',
    detail: 'Čtěte kód, testujte, ptejte se „proč". Budujte si důvěru.',
  },
  {
    text: 'Iterujte — AI přepíše kód kolikrát chcete',
    detail: '„Zkus to jinak" — agent nemá ego. Iterace je zadarmo.',
  },
]

function Card({ item }: { item: Item }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-sm transition-shadow">
      <div className="flex items-start gap-2.5">
        <span className="material-icons text-cyan-600 text-base mt-0.5 shrink-0">
          check_circle_outline
        </span>
        <div className="min-w-0">
          <p className="text-gray-900 font-semibold text-sm leading-snug">
            {item.text}
          </p>
          {item.detail && (
            <p className="text-gray-500 text-xs leading-relaxed mt-1">
              {item.detail}
            </p>
          )}
          {item.link && (
            <a
              href={item.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 text-xs hover:underline mt-1 inline-block"
            >
              {item.link.label} &rarr;
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export function Checklist() {
  return (
    <section id="checklist" className="bg-gray-50 py-20 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Key recommendation */}
        <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-5 mb-10 flex items-start gap-3">
          <span className="material-icons text-cyan-600 text-2xl mt-0.5">star</span>
          <div>
            <p className="text-gray-900 font-bold text-base">
              Zvolte si svého primárního agenta a poznejte ho do hloubky
            </p>
            <p className="text-gray-600 text-sm mt-1">
              Principy práce s AI agenty jsou univerzální — ale každý agent (Cursor, Claude Code, Codex…) má
              své specifické schopnosti a limity. Custom commandy, skilly, hooky, MCP — to všichni umí,
              ale každý agent si to nastavuje trochu jinak. Proto je dobré znát svého agenta do hloubky, abyste byli efektivní v nastavování.
            </p>
          </div>
        </div>

        {/* Row 1: Understand + Workflow side by side */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center">
                <span className="material-icons text-lg">psychology</span>
              </div>
              <h2 className="text-lg font-black text-gray-900">Pochopte AI agenta</h2>
            </div>
            <div className="flex flex-col gap-2">
              {understand.map((item) => <Card key={item.text} item={item} />)}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-violet-100 text-violet-700 flex items-center justify-center">
                <span className="material-icons text-lg">route</span>
              </div>
              <h2 className="text-lg font-black text-gray-900">Jak zadat práci</h2>
            </div>
            <div className="flex flex-col gap-2">
              {workflow.map((item) => <Card key={item.text} item={item} />)}
            </div>
          </div>
        </div>

        {/* Row 2: Tips in 2 columns */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
            <span className="material-icons text-lg">lightbulb</span>
          </div>
          <h2 className="text-lg font-black text-gray-900">Praktické tipy</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-2">
          {tips.map((item) => <Card key={item.text} item={item} />)}
        </div>
      </div>
    </section>
  )
}
