"use client"

import { motion } from "framer-motion"
import { Award, Clock, Users, Zap } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Uy tín và chất lượng",
    description:
      "Được tin tưởng bởi hàng trăm doanh nghiệp lớn nhỏ với chất lượng dịch vụ xuất sắc và uy tín được khẳng định qua thời gian.",
  },
  {
    icon: Clock,
    title: "Tiết kiệm thời gian",
    description:
      "Quy trình làm việc chuyên nghiệp và hiệu quả, giúp khách hàng tiết kiệm thời gian và tập trung vào hoạt động kinh doanh cốt lõi.",
  },
  {
    icon: Users,
    title: "Đội ngũ chuyên gia",
    description:
      "Đội ngũ tư vấn giàu kinh nghiệm với chuyên môn sâu, luôn cập nhật xu hướng mới và áp dụng giải pháp tối ưu.",
  },
  {
    icon: Zap,
    title: "Giải pháp sáng tạo",
    description:
      "Không ngừng đổi mới và sáng tạo trong cách tiếp cận, mang đến những giải pháp độc đáo và hiệu quả cho từng khách hàng.",
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm font-medium text-yellow-600 mb-4 uppercase tracking-wide">TẠI SAO CHỌN CHÚNG TÔI</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Lý do nên chọn EXPERTIS</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi mang đến những giá trị vượt trội và cam kết đồng hành cùng doanh nghiệp trong mọi giai đoạn phát
            triển.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
