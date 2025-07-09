import HeroSection from "@/components/giai-phap/bao-ve-an-ninh/hero-section"
import SecurityHolesSection from "@/components/giai-phap/bao-ve-an-ninh/problem-solution"
import MultiLayerSecuritySection from "@/components/giai-phap/bao-ve-an-ninh/services-section"
import UniqueApproach from "@/components/giai-phap/bao-ve-an-ninh/unique-approach"
import ContactSection from "@/components/giai-phap/bao-ve-an-ninh/contact-section"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/trangchu/footer"
import { PerformanceOptimizer } from "@/components/giai-phap/bao-ve-an-ninh/performance-optimizer"

export default function BaoVeAnNinhPage() {
  return (
    <PerformanceOptimizer>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 overflow-x-hidden">
        <Header />
        <HeroSection />
        <SecurityHolesSection />
        <MultiLayerSecuritySection />
        <UniqueApproach />
        <ContactSection />
        <Footer />
      </div>
    </PerformanceOptimizer>
  )
}
