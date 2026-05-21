export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-brand-border/50 glass-panel">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2">
            <div className="size-8 bg-brand-primary rounded-lg flex items-center justify-center font-bold text-white">
              I
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-foreground">
              InterfaceLab
            </span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#templates" className="hover:text-foreground transition-colors">Templates</a>
            <a href="#showcase" className="hover:text-foreground transition-colors">Showcase</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#docs" className="hover:text-brand-secondary transition-colors text-brand-secondary">Docs</a>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Sign In
          </button>
          <button className="px-5 py-2 bg-white text-brand-bg rounded-full text-sm font-bold hover:bg-slate-200 transition-colors shadow-lg shadow-white/5">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
