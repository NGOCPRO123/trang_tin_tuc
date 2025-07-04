"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award, Users } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-orange-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-yellow-200/30 to-amber-300/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-orange-200/20 to-red-300/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left content - Asymmetric layout */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full px-6 py-2 border border-amber-200">
              <Award className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-800">Đáng tin cậy #1 tại Việt Nam</span>
            </div>

            {/* Main heading với typography độc đáo */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-slate-800">Bảo vệ</span>
                <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Quyền lợi
                </span>
                <span className="block text-slate-700 text-4xl lg:text-5xl">của bạn</span>
              </h1>

              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
            </div>

            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
              Đồng hành cùng bạn trong mọi tình huống pháp lý với
              <span className="font-semibold text-amber-700"> sự chuyên nghiệp</span> và
              <span className="font-semibold text-amber-700"> tận tâm</span> tuyệt đối.
            </p>

            {/* CTA buttons với design độc đáo */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Tư vấn miễn phí ngay
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-amber-300 text-amber-700 hover:bg-amber-50 px-8 py-6 text-lg font-semibold rounded-2xl bg-transparent"
              >
                Xem dịch vụ
              </Button>
            </div>

            {/* Stats với layout bất đối xứng */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">15+</div>
                <div className="text-sm text-slate-600 font-medium">Năm kinh nghiệm</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">1000+</div>
                <div className="text-sm text-slate-600 font-medium">Khách hàng tin tưởng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">98%</div>
                <div className="text-sm text-slate-600 font-medium">Tỷ lệ thành công</div>
              </div>
            </div>
          </div>

          {/* Right content - Floating cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Floating card 1 */}
              <div className="absolute top-0 right-0 w-64 bg-white rounded-3xl p-6 shadow-2xl border border-amber-100 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">Bảo mật 100%</div>
                    <div className="text-sm text-slate-600">Thông tin khách hàng</div>
                  </div>
                </div>
                <div className="text-sm text-slate-600">
                  Cam kết bảo vệ tuyệt đối mọi thông tin cá nhân và pháp lý của khách hàng.
                </div>
              </div>

              {/* Floating card 2 */}
              <div className="absolute bottom-0 left-0 w-64 bg-white rounded-3xl p-6 shadow-2xl border border-orange-100 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">Đội ngũ chuyên gia</div>
                    <div className="text-sm text-slate-600">Luật sư giàu kinh nghiệm</div>
                  </div>
                </div>
                <div className="text-sm text-slate-600">
                  Đội ngũ luật sư chuyên môn cao, nhiều năm kinh nghiệm trong các lĩnh vực pháp lý.
                </div>
              </div>

              {/* Center floating element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-white text-4xl font-bold">⚖️</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
