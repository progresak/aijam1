export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="flex items-center gap-2">
        <span className="material-icons text-cyan-600">smart_toy</span>
        <span className="text-gray-900 font-bold tracking-widest text-sm uppercase">
          AI Jam #1
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-xs text-gray-500 uppercase tracking-widest">
        <a href="#checklist" className="hover:text-gray-900 transition-colors">Checkpointy</a>
        <a href="#zdroje" className="hover:text-gray-900 transition-colors">Zdroje</a>
      </div>
      <a
        href="https://github.com/progresak/aijam1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs uppercase tracking-widest border border-cyan-600 text-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-600 hover:text-white transition-all"
      >
        GitHub Repo
      </a>
    </nav>
  )
}
