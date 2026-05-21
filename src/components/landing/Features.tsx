import { Zap, Atom, Palette, Code2, Layers, Rocket } from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    title: "Instant Components",
    desc: "Generate atomic components, complex layouts, or full pages in seconds using natural language.",
    color: "text-brand-primary",
    bg: "bg-brand-primary/10",
  },
  {
    icon: Atom,
    title: "React & Tailwind",
    desc: "Clean, production-ready code using best practices and modern development standards.",
    color: "text-brand-secondary",
    bg: "bg-brand-secondary/10",
  },
  {
    icon: Palette,
    title: "Visual Editor",
    desc: "Fine-tune your generated designs with a Figma-like visual editor right in your browser.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: Code2,
    title: "Production-Ready Code",
    desc: "Export clean TSX with optimized Tailwind classes — no spaghetti, no surprises.",
    color: "text-brand-primary",
    bg: "bg-brand-primary/10",
  },
  {
    icon: Layers,
    title: "Component Library",
    desc: "Hundreds of editable navbars, dashboards, pricing tables, and more — composable on demand.",
    color: "text-brand-secondary",
    bg: "bg-brand-secondary/10",
  },
  {
    icon: Rocket,
    title: "One-Click Deploy",
    desc: "Ship to Vercel, Netlify, or GitHub the moment your design is ready.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

export function Features() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-32 border-t border-brand-border/50">
      <div className="text-center mb-16 space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-primary">Features</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground tracking-tight">
          Everything you need to ship UI fast.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="group p-8 rounded-2xl bg-brand-card/50 border border-brand-border hover:border-brand-primary/40 transition-colors"
          >
            <div className={`size-12 rounded-xl ${f.bg} flex items-center justify-center ${f.color} mb-5`}>
              <f.icon className="size-5" />
            </div>
            <h3 className="text-lg font-display font-bold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
