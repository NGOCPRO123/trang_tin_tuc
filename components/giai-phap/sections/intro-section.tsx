"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function IntroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Card className="bg-gradient-to-br from-blue-900 to-blue-800 text-white h-full shadow-2xl border-0 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
              <CardContent className="p-8 relative z-10">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">DỊCH VỤ VÀ GIẢI PHÁP</h3>
                <p className="text-blue-100 leading-relaxed">
                  Chúng tôi cung cấp các dịch vụ tư vấn chuyên nghiệp, giúp doanh nghiệp phát triển bền vững và đạt được
                  mục tiêu kinh doanh.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Content */}
          <div className="lg:col-span-2 space-y-8">
            {[
              {
                number: "01",
                title: "Đội ngũ chuyên gia",
                description:
                  "Đội ngũ chuyên gia giàu kinh nghiệm với nhiều năm hoạt động trong lĩnh vực tư vấn doanh nghiệp, luôn cập nhật những xu hướng và phương pháp mới nhất.",
              },
              {
                number: "02",
                title: "Quy trình chuẩn mực",
                description:
                  "Áp dụng quy trình làm việc chuyên nghiệp, minh bạch và hiệu quả, đảm bảo chất lượng dịch vụ và sự hài lòng của khách hàng.",
              },
              {
                number: "03",
                title: "Cam kết chất lượng",
                description:
                  "Cam kết mang đến những giải pháp tối ưu, phù hợp với từng doanh nghiệp, hỗ trợ khách hàng đạt được mục tiêu phát triển bền vững.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-100"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-blue-900 font-bold text-xl">{item.number}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
