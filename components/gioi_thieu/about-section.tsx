"use client"

import { motion } from "framer-motion"
import { CheckCircle, Users, Target } from "lucide-react"

const features = [
  {
    number: "01",
    title: "Kinh nghiệm dày dặn",
    description:
      "Với hơn 10 năm kinh nghiệm trong lĩnh vực tư vấn và phát triển doanh nghiệp, chúng tôi hiểu rõ những thách thức mà các doanh nghiệp đang gặp phải.",
  },
  {
    number: "02",
    title: "Đội ngũ chuyên môn",
    description:
      "Đội ngũ chuyên gia giàu kinh nghiệm với chuyên môn sâu trong từng lĩnh vực, luôn sẵn sàng đồng hành cùng khách hàng.",
  },
  {
    number: "03",
    title: "Tận tâm phục vụ",
    description:
      "Chúng tôi luôn đặt khách hàng làm trung tâm, cam kết mang lại những giải pháp tối ưu và dịch vụ chất lượng cao nhất.",
  },
]

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-medium text-yellow-600 mb-4 uppercase tracking-wide">
              VỀ CHÚNG TÔI - EXPERTIS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">GIỚI THIỆU</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              EXPERTIS là công ty tư vấn hàng đầu chuyên cung cấp các giải pháp toàn diện cho doanh nghiệp. Chúng tôi
              cam kết mang đến những dịch vụ chất lượng cao, giúp khách hàng đạt được mục tiêu kinh doanh và phát triển
              bền vững.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                Chất lượng cao
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 text-yellow-600 mr-2" />
                Đội ngũ chuyên nghiệp
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 text-orange-500 mr-2" />
                Hiệu quả tối ưu
              </div>
            </div>
          </motion.div>

          {/* Right Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <span className="text-yellow-600 font-bold text-lg">{feature.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
