const TEMPLATES = [
  { name: "Fintech Dashboard", category: "Finance", count: "24 components", gradient: "from-indigo-500/30 to-blue-500/30" },
  { name: "AI Startup Landing", category: "SaaS", count: "12 components", gradient: "from-purple-500/30 to-pink-500/30" },
  { name: "Sports Analytics", category: "Admin", count: "18 components", gradient: "from-cyan-500/30 to-teal-500/30" },
  { name: "Luxury E-commerce", category: "Retail", count: "16 components", gradient: "from-amber-500/20 to-rose-500/20" },
  { name: "Crypto Wallet", category: "Web3", count: "9 components", gradient: "from-emerald-500/30 to-cyan-500/30" },
  { name: "Healthcare Portal", category: "Health", count: "21 components", gradient: "from-sky-500/30 to-indigo-500/30" },
];

export function Templates() {
  return (
    <section id="templates" className="max-w-7xl mx-auto px-6 py-32 border-t border-brand-border/50">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-secondary">Templates</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground tracking-tight">
            Start from a foundation.
          </h2>
        </div>
        <a href="#" className="text-sm font-mono text-brand-primary hover:underline">
          Browse Library (140+) →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEMPLATES.map((t) => (
          <div
            key={t.name}
            className="group relative rounded-2xl overflow-hidden border border-brand-border bg-brand-card aspect-[4/3] cursor-pointer hover:border-brand-primary/50 transition-colors"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${t.gradient}`} />
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute inset-x-6 top-6 space-y-3">
              <div className="h-3 w-20 bg-white/20 rounded" />
              <div className="grid grid-cols-3 gap-2">
                <div className="h-10 bg-white/10 rounded-lg" />
                <div className="h-10 bg-white/10 rounded-lg" />
                <div className="h-10 bg-white/10 rounded-lg" />
              </div>
              <div className="h-16 bg-white/10 rounded-lg" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-brand-bg via-brand-bg/80 to-transparent">
              <p className="text-base font-bold text-foreground">{t.name}</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-1">
                {t.category} · {t.count}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
