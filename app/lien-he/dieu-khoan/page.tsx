import { Header } from "@/components/layout/header"
import Section1 from "@/components/dieu_khoan/section1"
import Section2 from "@/components/dieu_khoan/section2"
import Section3 from "@/components/dieu_khoan/section3"
import Section4 from "@/components/dieu_khoan/section4"
import Section5 from "@/components/dieu_khoan/section5"
import Section6 from "@/components/dieu_khoan/section6"
import Section7 from "@/components/dieu_khoan/section7"
import { Footer } from "@/components/trangchu/footer"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white">
      <Header />
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </div>
      <Footer />
    </div>
  )
}
