"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, TrendingUp } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-yellow-100/30" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-amber-200/30 to-yellow-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-yellow-200/20 to-amber-200/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-4 py-2 text-sm font-medium">
              🚀 Giải pháp tăng trưởng bền vững
            </Badge>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Tăng Doanh Thu{" "}
                <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Bền Vững
                </span>{" "}
                Cho Doanh Nghiệp Của Bạn
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Giải pháp toàn diện giúp tối ưu chi phí, tăng trưởng dài hạn và giữ chân khách hàng. Được tin tưởng bởi
                hơn 500+ doanh nghiệp tại Việt Nam.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Nhận tư vấn miễn phí
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-amber-300 text-amber-700 hover:bg-amber-50 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                <Play className="mr-2 w-5 h-5" />
                Xem demo
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-amber-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">500+</div>
                <div className="text-sm text-gray-600">Khách hàng tin tưởng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">35%</div>
                <div className="text-sm text-gray-600">Tăng doanh thu TB</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">24/7</div>
                <div className="text-sm text-gray-600">Hỗ trợ chuyên nghiệp</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Business Growth Dashboard"
                width={600}
                height={500}
                className="rounded-2xl"
              />

              {/* Floating Success Indicators */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-xl p-4 shadow-lg">
                <TrendingUp className="w-6 h-6 mb-2" />
                <div className="text-sm font-medium">Doanh thu</div>
                <div className="text-2xl font-bold">+35%</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl p-4 shadow-lg">
                <div className="text-sm font-medium">ROI</div>
                <div className="text-2xl font-bold">300%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
