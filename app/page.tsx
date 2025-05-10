"use client";

import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import WellBeingSection from "@/components/home/WellBeingSection";
import CoreValuesSection from "@/components/home/CoreValuesSection";
import BlogSection from "@/components/home/BlogSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <StatsSection />
      <PortfolioSection />
      <WellBeingSection />
      <CoreValuesSection />
      <BlogSection />
    </main>
  );
}