"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Trần Minh Hoàng",
    role: "Giám đốc công nghệ",
    company: "TechViet Solutions",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    quote:
      "Đội ngũ rất chuyên nghiệp và có kinh nghiệm. Họ đã giúp chúng tôi xây dựng hệ thống quản lý hiệu quả, tiết kiệm được 40% thời gian xử lý công việc.",
  },
  {
    id: 2,
    name: "Lê Thị Mai Anh",
    role: "Giám đốc Marketing",
    company: "Green Life Corp",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    quote:
      "Từ khi hợp tác, doanh số online của chúng tôi tăng 150%. Website mới không chỉ đẹp mà còn rất dễ sử dụng. Khách hàng rất hài lòng.",
  },
  {
    id: 3,
    name: "Phạm Đức Thành",
    role: "CEO",
    company: "Smart Logistics",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    quote:
      "Ứng dụng mobile họ phát triển đã cách mạng hóa cách chúng tôi quản lý vận chuyển. Hiệu quả vượt ngoài mong đợi, đội ngũ hỗ trợ rất tận tâm.",
  },
  {
    id: 4,
    name: "Nguyễn Thị Hương",
    role: "Giám đốc vận hành",
    company: "EduTech Vietnam",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    quote:
      "Nền tảng học trực tuyến họ xây dựng đã giúp chúng tôi mở rộng quy mô từ 1,000 lên 10,000 học viên chỉ trong 6 tháng. Rất ấn tượng!",
  },
  {
    id: 5,
    name: "Võ Minh Tuấn",
    role: "Founder",
    company: "FinTech Startup",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    quote:
      "Họ không chỉ phát triển sản phẩm mà còn tư vấn chiến lược rất hay. Startup của chúng tôi đã gọi vốn thành công 2 triệu USD nhờ sản phẩm này.",
  },
  {
    id: 6,
    name: "Đặng Thị Lan",
    role: "Giám đốc bán hàng",
    company: "Fashion House",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    quote:
      "Hệ thống CRM họ thiết kế đã giúp đội bán hàng của chúng tôi tăng hiệu suất 60%. Giao diện thân thiện, dễ sử dụng và báo cáo rất chi tiết.",
  },
]

export function ClientTestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 font-semibold text-lg">KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2 mb-6">
            Những phản hồi <span className="text-amber-600">chân thực</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sự hài lòng của khách hàng là thước đo thành công của chúng tôi. Hãy nghe những chia sẻ chân thực từ các đối
            tác đã tin tưởng và hợp tác
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-slate-600">

                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <Quote className="w-8 h-8 text-amber-600 mb-4" />
                  </motion.div>
                  <p className="text-gray-100 leading-relaxed mb-6 text-lg italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-14 h-14">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-amber-100 text-amber-600 font-semibold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-white text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-300">{testimonial.role}</p>
                      <p className="text-sm text-amber-400 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div
            className="bg-slate-500 text-white rounded-2xl p-8 relative overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Tham gia cùng 500+ khách hàng hài lòng</h3>
              <p className="text-lg opacity-90 mb-6">
                Hãy để chúng tôi giúp bạn đạt được những mục tiêu kinh doanh như họ đã làm
              </p>
              <div className="flex justify-center gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">4.9/5</div>
                  <div className="text-amber-100">Đánh giá trung bình</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">95%</div>
                  <div className="text-amber-100">Khách hàng quay lại</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">24h</div>
                  <div className="text-amber-100">Thời gian phản hồi</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
