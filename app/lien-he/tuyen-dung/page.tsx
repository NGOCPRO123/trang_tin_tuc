import { Header } from "@/components/layout/header"
import HeroSection from "@/components/tuyen_dung/hero-section"
import ValuesSection from "@/components/tuyen_dung/values-section"
import JobPositionsSection from "@/components/tuyen_dung/job-positions-section"
import RecruitmentProcessSection from "@/components/tuyen_dung/recruitment-process-section"
import CTASection from "@/components/tuyen_dung/cta-section"
import { Footer } from "@/components/trangchu/footer"


export default function RecruitmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ValuesSection />
      <JobPositionsSection />
      <RecruitmentProcessSection />
      <CTASection />
      <Footer />
    </div>
  )
}
