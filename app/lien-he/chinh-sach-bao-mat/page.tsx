import ModernHeader from "@/components/chinh_sach_bao_mat/modern-header"
import SidebarNavigation from "@/components/chinh_sach_bao_mat/sidebar-navigation"
import ContentSections from "@/components/chinh_sach_bao_mat/content-sections"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/trangchu/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/3 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        <Header />
        <ModernHeader />
        <div className="flex max-w-7xl mx-auto px-4 gap-8">
          <SidebarNavigation />
          <ContentSections />
        </div>
        <Footer />
      </div>
    </div>
  )
}
