import { HeroSection } from "./sections/hero-section";
import { IntroSection } from "./sections/intro-section";
import { ServicesSection } from "./sections/services-section";
import { ClientsSection } from "./sections/clients-section";
import { BlogSection } from "./sections/blog-section";

export function SolutionPage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <ClientsSection />
      <BlogSection />
    </>
  );
} 