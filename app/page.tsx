"use client";

import {
  AchievementsSection,
  CareerSection,
  Footer,
  GallerySection,
  GoalsSection,
  Hero,
  Navbar,
  QuotesSection,
  StatsSection,
  TimelineSection
} from "@/components/sections";
import { ThemeProvider } from "@/components/theme-provider";

export default function HomePage() {
  return (
    <ThemeProvider>
      <main className="min-h-screen scroll-smooth">
        <Navbar />
        <Hero />
        <StatsSection />
        <GoalsSection />
        <AchievementsSection />
        <CareerSection />
        <GallerySection />
        <QuotesSection />
        <TimelineSection />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
