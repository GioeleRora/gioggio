import { HeroSection } from "@/components/home/HeroSection";
import { BentoAbout } from "@/components/home/BentoAbout";
import { TechStackGrid } from "@/components/home/TechStackGrid";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ExperienceTimeline } from "@/components/home/ExperienceTimeline";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Below-Hero Sections with tech mesh pattern & ambient lighting */}
      <div className="relative overflow-hidden tech-section-pattern">
        {/* Ambient lighting glows across sections */}
        <div className="absolute top-[8%] -left-32 w-[550px] h-[450px] bg-cyan-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-[28%] -right-32 w-[600px] h-[500px] bg-emerald-500/[0.035] rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-[52%] -left-24 w-[550px] h-[450px] bg-purple-500/[0.04] rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-[78%] -right-24 w-[500px] h-[400px] bg-cyan-500/[0.035] rounded-full blur-[140px] pointer-events-none" />

        {/* Subtle top transition gradient */}
        <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#08090d] to-transparent pointer-events-none" />

        <div className="relative z-10">
          <BentoAbout />
          <TechStackGrid />
          <FeaturedProjects />
          <ExperienceTimeline />
        </div>
      </div>
    </div>
  );
}
