export function Footer() {
  const cols = [
    { title: "Product", links: ["Features", "Templates", "Integrations", "Enterprise"] },
    { title: "Resources", links: ["Documentation", "API Reference", "Community", "Changelog"] },
    { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
    { title: "Legal", links: ["Privacy", "Terms", "Security"] },
  ];
  return (
    <footer className="border-t border-brand-border/50 py-20 px-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="space-y-4 max-w-xs">
          <div className="flex items-center gap-2">
            <div className="size-6 bg-brand-primary rounded flex items-center justify-center font-bold text-white text-xs">
              I
            </div>
            <span className="font-display font-bold text-foreground">InterfaceLab</span>
          </div>
          <p className="text-sm text-muted-foreground">
            The AI-native design system for developers and fast-moving startups.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {cols.map((c) => (
            <div key={c.title} className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-foreground">
                {c.title}
              </h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-brand-primary transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-brand-border/30 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
        <p>© 2026 InterfaceLab AI. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Twitter</a>
          <a href="#" className="hover:text-foreground">GitHub</a>
          <a href="#" className="hover:text-foreground">Discord</a>
        </div>
      </div>
    </footer>
  );
}
