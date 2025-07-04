"use client"

import { Button } from "@/components/ui/button"
import { Check, X, Zap } from "lucide-react"
import { useState } from "react"

const comparison = [
  {
    feature: "Thời gian phản ứng",
    others: "5-10 phút",
    us: "2.3 giây",
    highlight: true,
  },
  {
    feature: "Đào tạo chuyên sâu",
    others: "Cơ bản",
    us: "Tâm lý học + Y tế + Pháp luật",
    highlight: true,
  },
  {
    feature: "Giám sát chất lượng",
    others: "Thỉnh thoảng",
    us: "24/7 với AI",
    highlight: false,
  },
  {
    feature: "Báo cáo chi tiết",
    others: "Cuối tháng",
    us: "Real-time",
    highlight: false,
  },
  {
    feature: "Hỗ trợ khẩn cấp",
    others: "Giờ hành chính",
    us: "Mọi lúc",
    highlight: false,
  },
]

export default function PricingReveal() {
  const [showPricing, setShowPricing] = useState(false)

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              So sánh với <span className="text-red-400">dịch vụ thông thường</span>
            </h2>
            <p className="text-xl text-gray-300">Bạn sẽ hiểu tại sao chúng tôi đắt hơn... và xứng đáng</p>
          </div>

          {/* Comparison table */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden mb-12">
            <div className="grid grid-cols-3 bg-white/20 p-4 font-bold">
              <div>Tiêu chí</div>
              <div className="text-center text-red-400">Dịch vụ khác</div>
              <div className="text-center text-yellow-400">Chúng tôi</div>
            </div>

            {comparison.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 p-4 border-b border-white/10 ${item.highlight ? "bg-yellow-500/10" : ""}`}
              >
                <div className="font-medium">{item.feature}</div>
                <div className="text-center text-red-300 flex items-center justify-center">
                  <X className="w-4 h-4 mr-2" />
                  {item.others}
                </div>
                <div className="text-center text-green-300 flex items-center justify-center">
                  <Check className="w-4 h-4 mr-2" />
                  {item.us}
                </div>
              </div>
            ))}
          </div>

          {/* Pricing reveal */}
          <div className="text-center">
            {!showPricing ? (
              <div className="space-y-6">
                <p className="text-xl text-gray-300">Bạn có thể nghĩ: "Chắc rất đắt nhỉ?"</p>
                <Button
                  size="lg"
                  onClick={() => setShowPricing(true)}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-12 py-6 text-xl font-bold rounded-2xl"
                >
                  <Zap className="w-6 h-6 mr-2" />
                  Tiết lộ mức giá thực tế
                </Button>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-3xl p-8 border border-yellow-500/30">
                <h3 className="text-3xl font-black mb-4">Chỉ từ 15.000đ/giờ</h3>
                <p className="text-xl text-gray-300 mb-6">Ít hơn 1 ly cà phê, nhưng bảo vệ cả tài sản triệu đô</p>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="bg-white/10 rounded-2xl p-6">
                    <h4 className="font-bold text-yellow-400 mb-2">Gói Cơ Bản</h4>
                    <div className="text-2xl font-bold mb-2">15.000đ/giờ</div>
                    <p className="text-sm text-gray-300">1-2 nhân viên, ca cố định</p>
                  </div>
                  <div className="bg-white/20 rounded-2xl p-6 border-2 border-yellow-400">
                    <h4 className="font-bold text-yellow-400 mb-2">Gói Chuyên Nghiệp</h4>
                    <div className="text-2xl font-bold mb-2">12.000đ/giờ</div>
                    <p className="text-sm text-gray-300">4+ nhân viên, có trưởng nhóm</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6">
                    <h4 className="font-bold text-yellow-400 mb-2">Gói Sự Kiện</h4>
                    <div className="text-2xl font-bold mb-2">Theo thỏa thuận</div>
                    <p className="text-sm text-gray-300">Linh hoạt theo quy mô</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
