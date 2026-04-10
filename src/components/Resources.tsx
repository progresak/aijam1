const links = [
  {
    title: 'GitHub Pages setup',
    link: 'https://github.com/progresak/aijam1/blob/main/docs/guides/github-pages-fork.md',
  },
  {
    title: 'agent-browser setup',
    link: 'https://github.com/progresak/aijam1/blob/main/docs/guides/agent-browser.md',
  },
  {
    title: 'Google Stitch MCP',
    link: 'https://github.com/progresak/aijam1/blob/main/docs/guides/stitch.md',
  },
  {
    title: 'Update AGENTS.md prompt',
    link: 'https://github.com/progresak/aijam1/blob/main/docs/prompts/update-docs.md',
  },
  {
    title: 'MCP Protocol',
    link: 'https://modelcontextprotocol.io/',
  },
  {
    title: 'Context7',
    link: 'https://context7.com/',
  },
  {
    title: 'GitHub CLI',
    link: 'https://cli.github.com/',
  },
  {
    title: 'SWE-bench',
    link: 'https://www.swebench.com/',
  },
  {
    title: 'Claude Code docs',
    link: 'https://docs.anthropic.com/en/docs/claude-code',
  },
  {
    title: 'Cursor docs',
    link: 'https://docs.cursor.com/',
  },
]

const projects = [
  {
    title: 'Produktová stránka',
    link: 'https://github.com/progresak/aijam1/blob/main/docs/projects/ukazka-produktu.md',
  },
  {
    title: 'Prezentační web studia',
    link: 'https://github.com/progresak/aijam1/blob/main/docs/projects/presentacni-web.md',
  },
  {
    title: 'Itinerář výletu',
    link: 'https://github.com/progresak/aijam1/blob/main/docs/projects/itinerar-vyletu.md',
  },
]

export function Resources() {
  return (
    <section id="zdroje" className="bg-white py-20 px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-3">
          <span className="material-icons text-cyan-600">link</span>
          Zdroje a odkazy
        </h2>

        {/* Video */}
        <a
          href="https://www.youtube.com/watch?v=BEKc4P87XKo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-cyan-50 border border-cyan-200 rounded-xl p-5 mb-6 hover:shadow-sm transition-shadow group"
        >
          <span className="material-icons text-cyan-600 text-3xl">smart_display</span>
          <div>
            <p className="text-gray-900 font-semibold text-sm group-hover:text-cyan-600 transition-colors">
              Doporučené video — Agentic Engineering
            </p>
            <p className="text-gray-500 text-xs mt-0.5">
              Kondenzovaný přehled práce s AI agenty
            </p>
          </div>
        </a>

        {/* Links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
          {links.map((l) => (
            <a
              key={l.title}
              href={l.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-lg px-4 py-3 text-xs font-medium text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 transition-colors"
            >
              {l.title}
            </a>
          ))}
        </div>

        {/* Projects */}
        <p className="text-gray-400 text-xs uppercase tracking-wider mb-3 font-semibold">
          Ukázkové projekty (Stitch prompty)
        </p>
        <div className="grid grid-cols-3 gap-2">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-lg px-4 py-3 text-xs font-medium text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 transition-colors"
            >
              {p.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
