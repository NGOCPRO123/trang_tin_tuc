import { Header } from "@/components/layout/header";
import { Footer } from "@/components/trangchu/footer"
import { BlogSection } from "@/components/giai-phap/sections/blog-section";
import { ClientsSection } from "@/components/giai-phap/sections/clients-section";
import { HeroSection } from "@/components/giai-phap/sections/hero-section";
import { IntroSection } from "@/components/giai-phap/sections/intro-section";
import { ServicesSection } from "@/components/giai-phap/sections/services-section";

export default function GiaiPhapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-amber-50">
      <Header />
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <ClientsSection />
      <BlogSection />
      <Footer />
    </div>
  );
}
