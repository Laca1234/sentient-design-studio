import dashboardPreview from "@/assets/dashboard-preview.jpg";

export function GenerationPreview() {
  return (
    <section className="px-6">
      <div className="max-w-6xl mx-auto relative">
        <div className="absolute -top-24 -left-24 size-96 bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 size-96 bg-brand-secondary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative glass-panel rounded-2xl overflow-hidden shadow-2xl">
          <div className="h-12 bg-white/5 border-b border-white/10 flex items-center px-6 justify-between">
            <div className="flex gap-2">
              <div className="size-3 rounded-full bg-red-500/50" />
              <div className="size-3 rounded-full bg-yellow-500/50" />
              <div className="size-3 rounded-full bg-green-500/50" />
            </div>
            <div className="text-xs font-medium text-muted-foreground font-mono tracking-widest">
              DASHBOARD_PREVIEW_V1.TSX
            </div>
            <div className="flex items-center gap-4">
              <div className="text-[10px] px-2 py-0.5 rounded border border-brand-primary/30 text-brand-primary">
                GENERATING...
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 min-h-[600px]">
            {/* Sidebar */}
            <div className="col-span-3 md:col-span-2 border-r border-white/5 p-6 space-y-8">
              <div className="size-8 bg-white/10 rounded-lg shimmer" />
              <div className="space-y-4">
                <div className="h-4 w-24 bg-white/5 rounded-full shimmer" />
                <div className="h-4 w-20 bg-white/5 rounded-full shimmer" />
                <div className="h-4 w-28 bg-white/5 rounded-full shimmer" />
                <div className="h-4 w-16 bg-white/5 rounded-full shimmer" />
              </div>
            </div>

            {/* Main */}
            <div className="col-span-9 md:col-span-10 p-8 space-y-8">
              <div className="flex justify-between items-center">
                <div className="h-10 w-48 bg-white/5 rounded-lg shimmer" />
                <div className="h-10 w-24 bg-brand-primary/20 rounded-lg shimmer" />
              </div>
              <div className="grid grid-cols-3 gap-6">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="h-32 rounded-xl bg-white/5 border border-white/5 p-4"
                  >
                    <div className="h-4 w-20 bg-white/10 rounded-full mb-4 shimmer" />
                    <div className="h-8 w-24 bg-white/20 rounded-lg shimmer" />
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/5 relative overflow-hidden aspect-[16/6]">
                <img
                  src={dashboardPreview}
                  alt="AI-generated dashboard preview with neon analytics charts"
                  className="w-full h-full object-cover opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
