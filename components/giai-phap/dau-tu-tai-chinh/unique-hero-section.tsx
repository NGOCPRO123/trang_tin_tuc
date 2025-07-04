"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"

export function UniqueHeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-yellow-200/30 to-amber-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-red-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            {/* Unique badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-amber-200">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium text-gray-700">Không phải mọi người đều hiểu tiền</span>
            </div>

            {/* Creative headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="block text-gray-800">TIỀN</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500">
                  LÀM VIỆC
                </span>
                <span className="block text-gray-800">CHO BẠN</span>
              </h1>

              <div className="max-w-2xl">
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  Thay vì bạn chạy theo tiền, hãy để tiền chạy theo bạn.
                  <span className="font-semibold text-amber-600"> Đây không phải lời khuyên đầu tư thông thường.</span>
                </p>
              </div>
            </div>

            {/* Unique CTA section */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Khám phá cách thức
                <ArrowRight
                  className={`ml-2 w-5 h-5 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
                />
              </Button>

              <Button variant="ghost" size="lg" className="text-gray-700 hover:text-amber-600 px-8 py-4 text-lg group">
                <Play className="w-5 h-5 mr-2 group-hover:text-amber-500" />
                Xem câu chuyện (3 phút)
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-8 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">847</div>
                <div className="text-sm text-gray-500">người đã thay đổi</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">₫2.3B</div>
                <div className="text-sm text-gray-500">được quản lý</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">4.2 năm</div>
                <div className="text-sm text-gray-500">kinh nghiệm thực tế</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              {/* Creative visual element */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Portfolio Performance</span>
                    <span className="text-sm font-bold text-green-600">+24.7%</span>
                  </div>

                  {/* Mock chart */}
                  <div className="h-32 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl flex items-end justify-center space-x-1 p-4">
                    {[40, 65, 45, 80, 55, 90, 70, 95].map((height, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-t from-green-500 to-emerald-400 rounded-sm flex-1 transition-all duration-1000 delay-100"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-gray-800">12.4%</div>
                      <div className="text-xs text-gray-500">Cổ phiếu</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-800">8.7%</div>
                      <div className="text-xs text-gray-500">Trái phiếu</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-800">15.2%</div>
                      <div className="text-xs text-gray-500">Crypto</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Live
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
