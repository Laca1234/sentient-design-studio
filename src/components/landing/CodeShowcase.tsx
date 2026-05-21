export function CodeShowcase() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-brand-card border border-brand-border rounded-3xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 p-12 space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
            Export to production
            <br />
            in one click.
          </h2>
          <p className="text-muted-foreground">
            No more manual coding. Push generated designs straight to Vercel, GitHub,
            or download the clean React + Tailwind source.
          </p>
          <ul className="space-y-3">
            {[
              "Zero-dependency React components",
              "Responsive by design",
              "Full dark mode support",
              "Type-safe with TypeScript",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm text-foreground/80">
                <div className="size-1.5 bg-brand-secondary rounded-full" />
                {t}
              </li>
            ))}
          </ul>
          <button className="mt-4 px-6 py-3 bg-brand-border hover:bg-white hover:text-brand-bg transition-all font-bold rounded-xl text-sm">
            View Code Example
          </button>
        </div>
        <div className="md:w-1/2 bg-[#0d0d0f] p-6 flex flex-col border-l border-brand-border">
          <div className="flex items-center gap-2 mb-4">
            <div className="size-2.5 bg-zinc-700 rounded-full" />
            <div className="size-2.5 bg-zinc-700 rounded-full" />
            <div className="size-2.5 bg-zinc-700 rounded-full" />
            <span className="ml-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              FintechCard.tsx
            </span>
          </div>
          <pre className="font-mono text-[13px] leading-relaxed text-muted-foreground overflow-x-auto">
            <code>
              <span className="text-purple-400">export function</span>{" "}
              <span className="text-blue-400">FintechCard</span>() {"{"}
              {"\n  "}
              <span className="text-purple-400">return</span> (
              {"\n    "}&lt;<span className="text-emerald-400">div</span>{" "}
              <span className="text-foreground">className</span>=
              <span className="text-orange-400">"p-6 bg-brand-card rounded-2xl"</span>&gt;
              {"\n      "}&lt;<span className="text-emerald-400">h3</span>{" "}
              <span className="text-foreground">className</span>=
              <span className="text-orange-400">"text-white font-bold"</span>&gt;
              {"\n        "}Balance
              {"\n      "}&lt;/<span className="text-emerald-400">h3</span>&gt;
              {"\n      "}&lt;<span className="text-emerald-400">p</span>{" "}
              <span className="text-foreground">className</span>=
              <span className="text-orange-400">"text-4xl text-brand-secondary"</span>&gt;
              {"\n        "}$12,450.00
              {"\n      "}&lt;/<span className="text-emerald-400">p</span>&gt;
              {"\n      "}&lt;<span className="text-emerald-400">Chart</span>{" "}
              <span className="text-foreground">data</span>={"{"}
              <span className="text-foreground">balanceHistory</span>
              {"}"} /&gt;
              {"\n    "}&lt;/<span className="text-emerald-400">div</span>&gt;
              {"\n  "})
              {"\n"}
              {"}"}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
