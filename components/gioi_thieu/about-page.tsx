import { Header } from "@/components/layout/header";
import { Footer } from "@/components/trangchu/footer";
import { AboutHeroSection } from "@/components/gioi_thieu/about-hero-section";
import { AboutStorySection } from "@/components/gioi_thieu/about-story-section";
import MissionVisionSection from "@/components/gioi_thieu/mission-vision-section";
import ValuesSection from "@/components/gioi_thieu/values-section";
import { TimelineSection } from "@/components/gioi_thieu/timeline-section";
import { AboutCTASection } from "@/components/gioi_thieu/about-cta-section";
import { BackToTop } from "@/components/ui/back-to-top";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">
        <AboutHeroSection />
        <AboutStorySection />
        <MissionVisionSection />
        <ValuesSection />
        <TimelineSection />
        <AboutCTASection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
} 