const QUOTES = [
  {
    quote:
      "InterfaceLab cut our design-to-code loop from weeks to hours. The generated Tailwind is genuinely production-grade.",
    name: "Maya Okonkwo",
    role: "Engineering Lead, Vector",
  },
  {
    quote:
      "It's the first AI design tool that doesn't feel like a toy. Our entire admin panel was scaffolded in an afternoon.",
    name: "Daniel Reiss",
    role: "Founder, Northwind Labs",
  },
  {
    quote:
      "The component library alone is worth it. Stream-rendered previews are the most fun I've had shipping UI.",
    name: "Priya Shankar",
    role: "Staff Designer, Lumen",
  },
];

export function Testimonials() {
  return (
    <section id="showcase" className="max-w-7xl mx-auto px-6 py-32 border-t border-brand-border/50">
      <div className="text-center mb-16 space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-primary">Loved by builders</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground tracking-tight max-w-2xl mx-auto">
          Teams shipping interfaces 10× faster.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {QUOTES.map((q) => (
          <figure
            key={q.name}
            className="p-8 rounded-2xl border border-brand-border bg-brand-card/40 space-y-6"
          >
            <blockquote className="text-foreground/90 leading-relaxed">"{q.quote}"</blockquote>
            <figcaption>
              <div className="text-sm font-bold text-foreground">{q.name}</div>
              <div className="text-xs text-muted-foreground">{q.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
