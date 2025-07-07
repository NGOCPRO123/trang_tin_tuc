import { Header } from "@/components/layout/header"
import Hero from "@/components/giai-phap/tu-van-phap-ly/hero"
import LegalPitfalls from "@/components/giai-phap/tu-van-phap-ly/legal-pitfalls"
import Values from "@/components/giai-phap/tu-van-phap-ly/values"
import Services from "@/components/giai-phap/tu-van-phap-ly/services"
import Team from "@/components/giai-phap/tu-van-phap-ly/team"
import Testimonials from "@/components/giai-phap/tu-van-phap-ly/testimonials"
import CTAForm from "@/components/giai-phap/tu-van-phap-ly/cta-form"
import { Footer } from "@/components/layout/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-orange-50">
      <Header />
      <Hero />
      <LegalPitfalls />
      <Values />
      <Services />
      <Team />
      <Testimonials />
      <CTAForm />
      <Footer />
    </div>
  )
}
