import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Free",
    price: "$0",
    desc: "For exploring the platform.",
    features: ["30 generations / month", "Basic templates", "Community support", "Watermarked exports"],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    price: "$24",
    desc: "For builders and small teams.",
    features: [
      "Unlimited generations",
      "Advanced AI models",
      "Visual editor",
      "ZIP & GitHub export",
      "Premium templates",
    ],
    cta: "Start Pro Trial",
    featured: true,
  },
  {
    name: "Team",
    price: "$79",
    desc: "For collaborating squads.",
    features: ["Everything in Pro", "Team workspaces", "Live collaboration", "Version history", "Priority support"],
    cta: "Contact Sales",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-6 py-32 border-t border-brand-border/50">
      <div className="text-center mb-16 space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-secondary">Pricing</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground tracking-tight">
          Simple plans. Serious power.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PLANS.map((p) => (
          <div
            key={p.name}
            className={`relative p-8 rounded-2xl border ${
              p.featured
                ? "border-brand-primary/50 bg-brand-card glow-primary"
                : "border-brand-border bg-brand-card/40"
            }`}
          >
            {p.featured && (
              <div className="absolute -top-3 left-8 px-3 py-1 bg-brand-primary text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
                Most Popular
              </div>
            )}
            <h3 className="text-lg font-display font-bold text-foreground">{p.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-5xl font-display font-bold text-foreground">{p.price}</span>
              <span className="text-sm text-muted-foreground">/mo</span>
            </div>
            <button
              className={`mt-6 w-full py-3 rounded-xl text-sm font-bold transition-colors ${
                p.featured
                  ? "bg-brand-primary text-white hover:scale-[1.02]"
                  : "bg-brand-border/50 text-foreground hover:bg-brand-border"
              }`}
            >
              {p.cta}
            </button>
            <ul className="mt-8 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-foreground/80">
                  <Check className="size-4 text-brand-secondary mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
