"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Shield, Zap, CheckCircle } from "lucide-react"
import Image from "next/image"

export function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-6">📈 Kết quả đo lường được</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Lợi Ích Cụ Thể Cho{" "}
            <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Doanh Nghiệp
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những con số thực tế mà khách hàng đã đạt được sau khi sử dụng giải pháp của chúng tôi
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold text-amber-600 mb-2">+35%</div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">Tăng doanh thu</h3>
              <p className="text-amber-700">Trung bình sau 3 tháng triển khai</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold text-blue-600 mb-2">40%</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Tiết kiệm chi phí</h3>
              <p className="text-blue-700">Marketing và vận hành hiệu quả hơn</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold text-purple-600 mb-2">24/7</div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">Hỗ trợ liên tục</h3>
              <p className="text-purple-700">Đội ngũ chuyên gia luôn sẵn sàng</p>
            </CardContent>
          </Card>
        </div>

        {/* Before vs After */}
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-12 shadow-xl border border-amber-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Bạn sẽ nhận được gì?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Tăng trưởng doanh số bền vững</h4>
                    <p className="text-gray-600">
                      Hệ thống được thiết kế để mang lại kết quả lâu dài, không chỉ tăng trưởng ngắn hạn
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Hệ thống CRM chuyên nghiệp</h4>
                    <p className="text-gray-600">Quản lý khách hàng toàn diện với AI và automation tiên tiến</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Đội ngũ chuyên gia tận tâm</h4>
                    <p className="text-gray-600">Hỗ trợ 24/7 với đội ngũ có kinh nghiệm 10+ năm trong lĩnh vực</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Báo cáo chi tiết và insights</h4>
                    <p className="text-gray-600">Dashboard thông minh với phân tích sâu và khuyến nghị hành động</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Business Success Dashboard"
                  width={500}
                  height={400}
                  className="rounded-xl"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-amber-500 to-yellow-500 text-white rounded-xl p-3 shadow-lg">
                <div className="text-sm font-bold">ROI</div>
                <div className="text-2xl font-bold">300%</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-400 to-cyan-500 text-white rounded-xl p-3 shadow-lg">
                <div className="text-sm font-bold">Conversion</div>
                <div className="text-2xl font-bold">+85%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
