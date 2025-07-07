"use client"

import { motion } from "framer-motion"
import { Award, Users, Shield, Zap, Target, Clock, Star, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const advantages = [
  {
    icon: Users,
    title: "Đội Ngũ Chuyên Gia Thực Chiến",
    description: "Đội ngũ chuyên gia từ 10+ năm kinh nghiệm trong các lĩnh vực cốt lõi, không chỉ tư vấn mà còn trực tiếp tham gia giải quyết vấn đề cùng doanh nghiệp.",
  },
  {
    icon: Award,
    title: "Hỗ Trợ Hàng Trăm Doanh Nghiệp",
    description: "Hỗ trợ hàng trăm doanh nghiệp từ startup đến các công ty lớn, mang lại giải pháp tối ưu và bền vững.",
  },
  {
    icon: Shield,
    title: "Bảo Mật Tuyệt Đối",
    description: "Cam kết bảo mật tuyệt đối, tuân thủ các tiêu chuẩn tài chính và pháp lý quốc tế.",
  },
  {
    icon: Zap,
    title: "Giải Pháp Linh Hoạt",
    description: "Giải pháp linh hoạt, phù hợp với từng giai đoạn phát triển của doanh nghiệp.",
  },
  {
    icon: Target,
    title: "Đồng Hành Lâu Dài",
    description: "Đồng hành lâu dài, có giải pháp cụ thể cho mục tiêu phát triển bền vững.",
  },
  {
    icon: Clock,
    title: "Hiệu Quả Nhanh Chóng",
    description: "Cam kết mang lại kết quả nhanh chóng và bứt phá doanh thu một cách bền vững.",
  },
]

export function WhyChooseSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-yellow-50"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full text-sm font-semibold shadow-lg mb-8"
          >
            <Star className="w-4 h-4" />
            <span>TẠI SAO CHỌN HLCC?</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8"
          >
            Cam Kết Vượt Trội
            <br />
            <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Cho Doanh Nghiệp Bạn
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Việc lựa chọn HLCC là một quyết định chiến lược, bởi chúng tôi mang đến những cam kết và lợi thế cạnh tranh vượt trội
          </motion.p>
        </motion.div>

        {/* Advantages - Timeline Style */}
        <div className="space-y-12 mb-20">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex items-center gap-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Icon Section */}
              <div className="flex-shrink-0 relative">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                  <advantage.icon className="w-12 h-12 text-black" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                  {index + 1}
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 space-y-4">
                <h3 className="text-3xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>

              {/* Decorative Line */}
              <div className="hidden lg:block flex-1">
                <div className="h-1 bg-gradient-to-r from-yellow-500/50 to-transparent rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section - Split Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Bạn đã sẵn sàng để doanh nghiệp mình bứt phá?
              </h3>
              <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                Hãy để HLCC trở thành đối tác chiến lược, giúp bạn vực dậy tài chính và bứt phá doanh thu bền vững.
              </p>
              <Button
                size="lg"
                className="bg-black hover:bg-gray-900 text-yellow-400 px-8 py-4 text-lg rounded-xl font-semibold group shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Đăng Ký Tư Vấn Miễn Phí Ngay
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
