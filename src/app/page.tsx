import { HeroSection } from "@/components/home/HeroSection";
import { BentoAbout } from "@/components/home/BentoAbout";
import { TechStackGrid } from "@/components/home/TechStackGrid";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ExperienceTimeline } from "@/components/home/ExperienceTimeline";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <BentoAbout />
      <TechStackGrid />
      <FeaturedProjects />
      <ExperienceTimeline />
    </div>
  );
}
