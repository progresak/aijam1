export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="material-icons text-cyan-600">smart_toy</span>
            <span className="text-gray-900 font-bold tracking-widest text-sm uppercase">
              ReactGirls AI Jam
            </span>
          </div>
          <p className="text-gray-400 text-xs max-w-xs leading-relaxed">
            Průvodce pro práci s AI kódovacími agenty. Vytvořeno pro ReactGirls
            AI Jam #1.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
            Odkazy
          </p>
          <a
            href="https://reactgirls.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-xs hover:text-gray-900 transition-colors"
          >
            ReactGirls
          </a>
          <a
            href="https://github.com/progresak/aijam1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-xs hover:text-gray-900 transition-colors"
          >
            GitHub repozitář
          </a>
          <a
            href="#zdroje"
            className="text-gray-500 text-xs hover:text-gray-900 transition-colors"
          >
            Zdroje a odkazy
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12 pt-6 border-t border-gray-100 flex justify-between items-center">
        <p className="text-gray-400 text-xs">&copy; 2026 ReactGirls</p>
      </div>
    </footer>
  )
}
