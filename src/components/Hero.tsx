export function Hero() {
  return (
    <section className="bg-white pt-28 pb-16 px-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          <span className="material-icons text-sm">celebration</span>
          ReactGirls AI Jam #1
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight mb-6">
          Průvodce prací
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
            s AI agenty
          </span>
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          Všechno co potřebujete vědět, než začnete stavět.
          <br />
          Projděte si checkpointy a jděte na to.
        </p>
      </div>
    </section>
  )
}
