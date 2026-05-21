import { useState } from "react";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "What kind of UIs can the AI generate?",
    a: "Landing pages, admin dashboards, login flows, mobile interfaces, analytics, onboarding flows, e-commerce layouts and more. Anything you can describe in a prompt.",
  },
  {
    q: "Is the generated code production-ready?",
    a: "Yes. Output is clean, typed React + Tailwind with no junk dependencies. You can drop it straight into a Next.js or Vite project.",
  },
  {
    q: "Can I edit designs after generation?",
    a: "Absolutely. The visual editor lets you resize components, edit copy, tweak colors and typography, and test responsiveness — all without touching code.",
  },
  {
    q: "Do you offer team collaboration?",
    a: "On the Team plan: shared workspaces, version history, comments, and live collaboration on canvases.",
  },
  {
    q: "How does export work?",
    a: "Export to a ZIP, push directly to GitHub, or deploy to Vercel or Netlify in one click.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="docs" className="max-w-3xl mx-auto px-6 py-32 border-t border-brand-border/50">
      <div className="text-center mb-12 space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-primary">FAQ</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground tracking-tight">
          Questions, answered.
        </h2>
      </div>
      <div className="space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className="rounded-2xl border border-brand-border bg-brand-card/40 overflow-hidden"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display font-bold text-foreground">{f.q}</span>
                <Plus
                  className={`size-5 text-muted-foreground transition-transform ${
                    isOpen ? "rotate-45 text-brand-primary" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
