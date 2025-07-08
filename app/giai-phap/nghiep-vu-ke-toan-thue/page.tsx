import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/giai-phap/nghiep-vu-ke-toan-thue/hero-section"
import { ProblemsSection } from "@/components/giai-phap/nghiep-vu-ke-toan-thue/problems-section"
import { ServicesSection } from "@/components/giai-phap/nghiep-vu-ke-toan-thue/services-section"
import { BenefitsSection } from "@/components/giai-phap/nghiep-vu-ke-toan-thue/benefits-section"
import { TeamSection } from "@/components/giai-phap/nghiep-vu-ke-toan-thue/team-section"
import { ResultsSection } from "@/components/giai-phap/nghiep-vu-ke-toan-thue/results-section"
import { TestimonialsSection } from "@/components/giai-phap/nghiep-vu-ke-toan-thue/testimonials-section"
import { CTASection } from "@/components/giai-phap/nghiep-vu-ke-toan-thue/cta-section"
import { Footer } from "@/components/trangchu/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-yellow-50">
      <Header />
      <HeroSection />
      <ProblemsSection />
      <ServicesSection />
      <BenefitsSection />
      <TeamSection />
      <ResultsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  )
}
