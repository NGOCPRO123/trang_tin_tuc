import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/gioi_thieu/hero-section"
import { AboutSection } from "@/components/gioi_thieu/about-section"
import { ServicesSection } from "@/components/gioi_thieu/services-section"
import { WhyChooseSection } from "@/components/gioi_thieu/why-choose-section"
import { ClientsSection } from "@/components/gioi_thieu/clients-section"
import { InsightsSection } from "@/components/gioi_thieu/insights-section"
import { ContactCTASection } from "@/components/gioi_thieu/contact-cta-section"
import { BackToTop } from "@/components/ui/back-to-top"
import { StatsSection } from "@/components/gioi_thieu/stats-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <ClientsSection />
        <StatsSection />
        <InsightsSection />
        <ContactCTASection />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
