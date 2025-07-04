import HeroSection from "@/components/giai-phap/bao-ve-an-ninh/hero-section"
import TrustIndicators from "@/components/giai-phap/bao-ve-an-ninh/trust-indicators"
import ProblemSolution from "@/components/giai-phap/bao-ve-an-ninh/problem-solution"
import UniqueApproach from "@/components/giai-phap/bao-ve-an-ninh/unique-approach"
import RealStories from "@/components/giai-phap/bao-ve-an-ninh/real-stories"
import PricingReveal from "@/components/giai-phap/bao-ve-an-ninh/pricing-reveal"
import UrgencySection from "@/components/giai-phap/bao-ve-an-ninh/urgency-section"
import FinalCTA from "@/components/giai-phap/bao-ve-an-ninh/final-cta"
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 overflow-x-hidden">
      <Header />
      <HeroSection />
      <TrustIndicators />
      <ProblemSolution />
      <UniqueApproach />
      <RealStories />
      <PricingReveal />
      <UrgencySection />
      <FinalCTA />
      <Footer />
    </div>
  )
}
