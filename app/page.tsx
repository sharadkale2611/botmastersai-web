import GoToTopButton from "@/components/common/GoToTopButton";
import AboutSection from "@/components/home/AboutSection";
import AISolutionsSection from "@/components/home/AISolutionsSection";
import CTASection from "@/components/home/CTASection";
import DomainsSection from "@/components/home/DomainsSection";
import FAQSection from "@/components/home/FAQSection";
import HeroSection from "@/components/home/HeroSection";
import InternshipSection from "@/components/home/InternshipSection";
import RoadmapSection from "@/components/home/RoadmapSection";
import ServicesSection from "@/components/home/ServicesSection";
import TechnologiesSection from "@/components/home/TechnologiesSection";
import WhoWeHelpSection from "@/components/home/WhoWeHelpSection";
import InternshipsSection from "@/components/internships/InternshipsSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <TechnologiesSection />
      <AboutSection />
      <WhoWeHelpSection />
      <ServicesSection />
      <InternshipsSection />
      <InternshipSection />
      <AISolutionsSection />
      <DomainsSection />
      {/* <RoadmapSection /> */}
      <FAQSection />
      <CTASection />
      <GoToTopButton />
    </main>
  );
}
