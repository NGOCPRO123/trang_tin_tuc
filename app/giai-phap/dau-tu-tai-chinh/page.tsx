import { HeroSection } from "@/components/giai-phap/dau-tu-tai-chinh/hero-section"
import { ProblemsSection } from "@/components/giai-phap/dau-tu-tai-chinh/problems-section"
import { StrategicTurningPointsSection } from "@/components/giai-phap/dau-tu-tai-chinh/solutions-section"
import { ProcessSection } from "@/components/giai-phap/dau-tu-tai-chinh/process-section"
import { StatsSection } from "@/components/giai-phap/dau-tu-tai-chinh/stats-section"
import { TeamSection } from "@/components/giai-phap/dau-tu-tai-chinh/team-section"
import { TestimonialsSection } from "@/components/giai-phap/dau-tu-tai-chinh/testimonials-section"
import { PackagesSection } from "@/components/giai-phap/dau-tu-tai-chinh/packages-section"
import { CTASection } from "@/components/giai-phap/dau-tu-tai-chinh/cta-section"
import { TrustSection } from "@/components/giai-phap/dau-tu-tai-chinh/trust-section"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/trangchu/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-amber-50">
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <StrategicTurningPointsSection />
        <ProcessSection />
        <StatsSection />
        <TeamSection />
        <TestimonialsSection />
        <PackagesSection />
        <CTASection />
        <TrustSection />
      </main>
      <Footer />
    </div>
  )
}
