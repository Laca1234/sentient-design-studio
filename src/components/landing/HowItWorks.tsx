const STEPS = [
  {
    n: "01",
    title: "Describe your UI",
    desc: "Type a prompt or upload a wireframe. Our model understands context, breakpoints, and design intent.",
  },
  {
    n: "02",
    title: "Watch it generate",
    desc: "Components stream in live — layout, styling, and interactions assembling in real time on the canvas.",
  },
  {
    n: "03",
    title: "Edit, export, ship",
    desc: "Fine-tune visually, copy the JSX, or deploy directly to Vercel. Production-ready in minutes.",
  },
];

export function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32 border-t border-brand-border/50">
      <div className="text-center mb-16 space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-primary">How it works</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground tracking-tight">
          From prompt to production in three steps.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STEPS.map((s) => (
          <div
            key={s.n}
            className="relative p-8 rounded-2xl border border-brand-border bg-brand-card/40"
          >
            <div className="font-mono text-5xl font-bold gradient-text mb-4">{s.n}</div>
            <h3 className="text-xl font-display font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
