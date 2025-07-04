"use client"

import { motion } from "framer-motion"
import { Lightbulb, Cog, Users, TrendingUp, Shield, Zap } from "lucide-react"

const services = [
  {
    icon: Lightbulb,
    title: "Tư vấn chiến lược",
    description: "Phát triển chiến lược kinh doanh toàn diện, định hướng phát triển dài hạn cho doanh nghiệp.",
  },
  {
    icon: Cog,
    title: "Tối ưu quy trình",
    description: "Cải tiến và tối ưu hóa quy trình vận hành, nâng cao hiệu quả làm việc.",
  },
  {
    icon: Users,
    title: "Phát triển nhân sự",
    description: "Xây dựng đội ngũ nhân sự chất lượng cao, đào tạo và phát triển năng lực.",
  },
  {
    icon: TrendingUp,
    title: "Tăng trưởng doanh thu",
    description: "Chiến lược marketing và bán hàng hiệu quả, thúc đẩy tăng trưởng bền vững.",
  },
  {
    icon: Shield,
    title: "Quản lý rủi ro",
    description: "Đánh giá và quản lý rủi ro toàn diện, đảm bảo hoạt động kinh doanh ổn định.",
  },
  {
    icon: Zap,
    title: "Công nghệ hiện đại",
    description: "Ứng dụng công nghệ tiên tiến, số hóa quy trình và nâng cao năng suất.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-yellow-600 via-yellow-500 to-orange-500">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm font-medium text-yellow-200 mb-4 uppercase tracking-wide">
            CHÚNG TÔI LÀM GÌ CHO BẠN
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">NĂNG LỰC VÀ GIÁ TRỊ CỐT LÕI</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Chúng tôi cung cấp các dịch vụ tư vấn chuyên nghiệp, giúp doanh nghiệp phát triển bền vững và đạt được mục
            tiêu kinh doanh.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10"
            >
              <service.icon className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-blue-100 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
