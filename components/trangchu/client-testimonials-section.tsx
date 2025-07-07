"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, Star, Users, Briefcase, Heart, DollarSign, HelpCircle, TrendingUp, Building2, Handshake } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "HLCC khác biệt gì so với các đơn vị tư vấn khác?",
    answer: "HLCC là liên minh 22 Doanh Chủ với đội ngũ chuyên gia thực chiến trực tiếp tham gia giải quyết vấn đề. Chúng tôi điều phối nguồn lực chung và vận hành Hệ Sinh Thái TMĐT ACTA mang lại giá trị thực tiễn.",
    icon: HelpCircle
  },
  {
    id: 2,
    question: "HLCC hỗ trợ tăng doanh số như thế nào?",
    answer: "Cung cấp giải pháp tăng doanh số bền vững qua phân tích thị trường, tối ưu vận hành và chiến lược kinh doanh. Quản lý Cộng Đồng Affiliate Thực Chiến với hàng nghìn thành viên giúp bứt phá doanh thu.",
    icon: TrendingUp
  },
  {
    id: 3,
    question: "Giải pháp HLCC có phù hợp với SME không?",
    answer: "Hoàn toàn phù hợp. HLCC cung cấp giải pháp cho đa dạng doanh nghiệp từ startup đến tập đoàn lớn. Chúng tôi tùy chỉnh giải pháp phù hợp với từng đặc thù ngành nghề và quy mô.",
    icon: Building2
  },
  {
    id: 4,
    question: "Làm thế nào để hợp tác với HLCC?",
    answer: "Liên hệ trực tiếp qua hotline hoặc email. Đội ngũ chuyên gia HLCC sẽ tư vấn miễn phí và cùng bạn xây dựng lộ trình hợp tác phù hợp để vực dậy tài chính và bứt phá doanh thu.",
    icon: Handshake
  }
]

export function ClientTestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Câu Hỏi Thường Gặp</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Những thắc mắc phổ biến về giải pháp và cách thức hoạt động của HLCC
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm border-l-4 border-blue-500">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <faq.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-4 text-gray-900 leading-tight">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed text-base">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
