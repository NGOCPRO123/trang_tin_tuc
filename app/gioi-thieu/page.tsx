import { Header } from "@/components/layout/header"
import { Footer } from "@/components/trangchu/footer"
import { HeroSection } from "@/components/gioi_thieu/hero-section"
import { AboutSection } from "@/components/gioi_thieu/about-section"
import { ServicesSection } from "@/components/gioi_thieu/services-section"
import { WhyChooseSection } from "@/components/gioi_thieu/why-choose-section"
import { BackToTop } from "@/components/ui/back-to-top"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
