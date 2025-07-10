import { Header } from "@/components/layout/header";
import { Footer } from "@/components/trangchu/footer";
import { HeroSection } from "@/components/trangchu/hero-section"
import { ServicesSection } from "@/components/trangchu/services-section"
import { WhyChooseUsSection } from "@/components/trangchu/why-choose-us-section"
import { ClientTestimonialsSection } from "@/components/trangchu/client-testimonials-section"
import { CompanyStatsSection } from "@/components/trangchu/company-stats-section"
import { ContactCTASection } from "@/components/trangchu/contact-cta-section"
import { BackToTop } from "@/components/ui/back-to-top"

export default function TrangChu1Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen" style={{ backgroundColor: '#0B493A' }}>
        <HeroSection />
        <WhyChooseUsSection />
        <ServicesSection />
        <ClientTestimonialsSection />
        <CompanyStatsSection />
        <ContactCTASection />
      </main>
      <div className="mt-20">
        <Footer />
      </div>
      <BackToTop />
    </>
  );
}
