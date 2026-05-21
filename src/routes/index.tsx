import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { GenerationPreview } from "@/components/landing/GenerationPreview";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Features } from "@/components/landing/Features";
import { CodeShowcase } from "@/components/landing/CodeShowcase";
import { Templates } from "@/components/landing/Templates";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "InterfaceLab — Generate Beautiful Interfaces With AI" },
      {
        name: "description",
        content:
          "Describe any UI in plain English and instantly generate modern responsive React + Tailwind designs ready for production.",
      },
      { property: "og:title", content: "InterfaceLab — Generate Beautiful Interfaces With AI" },
      {
        property: "og:description",
        content:
          "AI-native design platform that turns natural language prompts into production-ready React + Tailwind UIs.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;600;700&family=JetBrains+Mono:wght@400;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-brand-bg text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <GenerationPreview />
        <HowItWorks />
        <Features />
        <CodeShowcase />
        <Templates />
        <Testimonials />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
