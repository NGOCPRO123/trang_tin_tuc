"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Brain, Users, DollarSign } from "lucide-react"

export function SolutionsSection() {
  const solutions = [
    {
      icon: BarChart3,
      title: "Tối ưu quy trình bán hàng",
      description: "Tự động hóa và tối ưu hóa toàn bộ quy trình từ lead đến chốt đơn",
      color: "from-amber-500 to-yellow-500",
    },
    {
      icon: Brain,
      title: "Ứng dụng công nghệ phân tích dữ liệu",
      description: "AI và Machine Learning giúp dự đoán xu hướng và tối ưu chiến lược",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Giữ chân khách hàng hiệu quả",
      description: "Hệ thống CRM thông minh với automation marketing cá nhân hóa",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: DollarSign,
      title: "Tối ưu chi phí marketing",
      description: "Phân tích ROI chi tiết và tối ưu ngân sách quảng cáo thông minh",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-yellow-50 to-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-6">💡 Giải pháp toàn diện</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Giải Pháp Chúng Tôi{" "}
            <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Cung Cấp
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hệ sinh thái công nghệ hoàn chỉnh giúp doanh nghiệp tăng trưởng bền vững và hiệu quả
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <solution.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>

                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-3xl p-8 lg:p-12">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Tích hợp hoàn hảo với hệ thống hiện tại
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Không cần thay đổi toàn bộ quy trình. Chúng tôi tích hợp mượt mà với các công cụ bạn đang sử dụng.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
