import AboutSection from "@/components/home/AboutSection";
import AISolutionsSection from "@/components/home/AISolutionsSection";
import DomainsSection from "@/components/home/DomainsSection";
import HeroSection from "@/components/home/HeroSection";
import InternshipSection from "@/components/home/InternshipSection";
import RoadmapSection from "@/components/home/RoadmapSection";
import ServicesSection from "@/components/home/ServicesSection";
import TechnologiesSection from "@/components/home/TechnologiesSection";
import WhoWeHelpSection from "@/components/home/WhoWeHelpSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TechnologiesSection />
      <AboutSection />
      <WhoWeHelpSection />
      <ServicesSection />
      <InternshipSection />
      <AISolutionsSection />
      <DomainsSection />
      <RoadmapSection />
    </main>
  );
}
