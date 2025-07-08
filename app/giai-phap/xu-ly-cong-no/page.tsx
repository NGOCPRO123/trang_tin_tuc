import { Header } from "@/components/layout/header"
import HeroConversation from "@/components/giai-phap/xu-ly-cong-no/hero-conversation"
import DiagnosisSection from "@/components/giai-phap/xu-ly-cong-no/diagnosis-section"
import RealityCheck from "@/components/giai-phap/xu-ly-cong-no/reality-check"
import ProcessTimeline from "@/components/giai-phap/xu-ly-cong-no/process-timeline"
import TruthSection from "@/components/giai-phap/xu-ly-cong-no/truth-section"
import DecisionMoment from "@/components/giai-phap/xu-ly-cong-no/decision-moment"
import { Footer } from "@/components/trangchu/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      <Header />
      <main>
        <HeroConversation />
        <DiagnosisSection />
        <RealityCheck />
        <ProcessTimeline />
        <TruthSection />
        <DecisionMoment />
      </main>
      <Footer />
    </div>
  )
}
