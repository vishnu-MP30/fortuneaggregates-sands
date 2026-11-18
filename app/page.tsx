import {
  TopBar,
  Header,
  Hero,
  AboutOverview,
  StagePanels,
  Audience,
  Materials,
  ProjectGallery,
  AggregateGrabStats,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)]">
      {/* Top Contact Strip */}
      <TopBar />

      {/* Main Header / Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* Section 00: Full-Bleed Cinematic Hero */}
        <Hero />

        {/* Section 01: Brand Foundation & Company Overview */}
        <AboutOverview />

        {/* Section 02: Part A — StagePanels (3 Full-Screen Sticky Stacked Panels) */}
        <StagePanels />

        {/* Section 02: Part B — Audience (Paper Section with 5 Customer Cards) */}
        <Audience />

        {/* Section 02: Part C — Materials (Interactive Selector, Detail Panel & Job Table) */}
        <Materials />

        {/* Section 03: Project & Material Gallery — 5-Image Staggered Architectural Showcase */}
        <ProjectGallery />

        {/* Section 04: Interactive Clamshell Dispatch & Direct Quarry Order Section */}
        <AggregateGrabStats />

        {/* Section 05: Continuous Solid Brand Footer with Massive Expanded Brand Name Reveal */}
        <Footer />
      </main>
    </div>
  );
}
