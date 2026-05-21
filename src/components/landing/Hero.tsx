import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const ROTATING_PROMPTS = [
  "Create a modern fintech dashboard with dark mode...",
  "Generate a SaaS landing page for an AI startup...",
  "Build a football analytics admin panel...",
  "Design a luxury fashion e-commerce homepage...",
  "Make a responsive login page with glassmorphism...",
];

const SUGGESTIONS = [
  "SaaS Landing Page",
  "Crypto Dashboard",
  "Mobile Settings UI",
  "Analytics Admin",
];

export function Hero() {
  const [promptIdx, setPromptIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPromptIdx((i) => (i + 1) % ROTATING_PROMPTS.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />

      <div className="relative max-w-4xl mx-auto text-center space-y-8 animate-float-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold tracking-wide uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary" />
          </span>
          Next-Gen AI Engine Live
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-[1.05] tracking-tight">
          Generate Beautiful
          <br />
          <span className="gradient-text">Interfaces With AI</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Describe any UI in plain English and instantly generate modern responsive
          React + Tailwind designs ready for production.
        </p>

        {/* Prompt interface */}
        <div className="relative max-w-3xl mx-auto mt-12 p-2 bg-brand-card/80 border border-brand-border rounded-2xl shadow-2xl backdrop-blur">
          <div className="flex items-center gap-3 px-4 py-3">
            <Sparkles className="size-5 text-brand-primary shrink-0" />
            <div className="flex-1 relative h-7 overflow-hidden text-left">
              {ROTATING_PROMPTS.map((p, i) => (
                <div
                  key={p}
                  className="absolute inset-0 text-foreground text-lg transition-all duration-500"
                  style={{
                    opacity: i === promptIdx ? 1 : 0,
                    transform: `translateY(${(i - promptIdx) * 100}%)`,
                  }}
                >
                  {p}
                </div>
              ))}
            </div>
            <button className="p-3 bg-brand-primary rounded-xl hover:scale-105 transition-transform glow-primary inline-flex items-center gap-2 text-white font-bold text-sm">
              Generate
              <ArrowRight className="size-4" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2 px-4 pb-3">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                className="px-3 py-1 bg-brand-border/50 border border-brand-border rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-brand-border transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 pt-2">
          <button className="px-6 py-2.5 bg-brand-primary text-white rounded-full text-sm font-bold hover:scale-[1.02] transition-transform glow-primary">
            Start Generating
          </button>
          <button className="px-6 py-2.5 border border-brand-border bg-brand-card/50 rounded-full text-sm font-bold text-foreground hover:bg-brand-border/50 transition-colors">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}
