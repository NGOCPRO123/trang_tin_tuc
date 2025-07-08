import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/giai-phap/giai-phap-tang-doanh-so/hero-section"
import { SolutionsSection } from "@/components/giai-phap/giai-phap-tang-doanh-so/solutions-section"
import { BenefitsSection } from "@/components/giai-phap/giai-phap-tang-doanh-so/benefits-section"
import { TestimonialsSection } from "@/components/giai-phap/giai-phap-tang-doanh-so/testimonials-section"
import { CtaSection } from "@/components/giai-phap/giai-phap-tang-doanh-so/cta-section"
import { Footer } from "@/components/trangchu/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-yellow-50">
      <Header />
      <HeroSection />
      <SolutionsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  )
}
