"use client"

import { Button } from "@/components/ui/button"
import { Shield, Eye, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-amber-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-200/40 rounded-full blur-lg animate-bounce"></div>
      </div>

      {/* Diagonal cut design */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/80 to-amber-100/60 transform -skew-y-3 origin-top-left"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Live status indicator */}
            <div className="flex items-center space-x-3 bg-green-100 px-4 py-2 rounded-full w-fit">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-800">
                ĐANG TRỰC 24/7 • {currentTime.toLocaleTimeString("vi-VN")}
              </span>
            </div>

            <div>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="text-gray-900">Khi nguy hiểm</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
                  không báo trước
                </span>
              </h1>
              <div className="mt-6 text-xl text-gray-700 font-medium">
                Chúng tôi đã sẵn sàng từ <span className="text-yellow-600 font-bold">3 giây trước</span>
              </div>
            </div>

            {/* Unique value props */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm p-4 rounded-2xl">
                <Eye className="w-8 h-8 text-yellow-600" />
                <div>
                  <div className="font-bold text-gray-900">Không chỉ nhìn, mà THẤY</div>
                  <div className="text-sm text-gray-600">Phân tích tình huống trong 0.5 giây</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm p-4 rounded-2xl">
                <Shield className="w-8 h-8 text-yellow-600" />
                <div>
                  <div className="font-bold text-gray-900">Không chỉ bảo vệ, mà NGĂN CHẶN</div>
                  <div className="text-sm text-gray-600">Xử lý từ gốc, không để xảy ra</div>
                </div>
              </div>
            </div>

            {/* CTA with urgency */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white px-8 py-6 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all"
              >
                Triển khai trong 2 giờ
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-yellow-600 text-yellow-700 hover:bg-yellow-50 px-8 py-6 text-lg font-bold rounded-2xl bg-transparent"
              >
                Xem case study thực tế
              </Button>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-yellow-200 to-amber-300 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="/placeholder.svg?height=500&width=400"
                alt="Bảo vệ chuyên nghiệp"
                className="w-full h-auto rounded-2xl"
              />

              {/* Floating stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-yellow-600">0</div>
                <div className="text-xs text-gray-600">Sự cố trong 2024</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-green-600">2.3s</div>
                <div className="text-xs text-gray-600">Thời gian phản ứng</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
