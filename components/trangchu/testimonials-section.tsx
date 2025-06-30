"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Nguyễn Thị Mai",
    role: "Tình nguyện viên",
    avatar: "/placeholder.svg?height=60&width=60",
    quote:
      "Tôi đã tham gia 2 sự kiện của tổ chức và cảm nhận được sự tử tế lan tỏa mỗi ngày. Đây thực sự là nơi tôi tìm thấy ý nghĩa cuộc sống.",
  },
  {
    id: 2,
    name: "Trần Văn Hùng",
    role: "Đối tác doanh nghiệp",
    avatar: "/placeholder.svg?height=60&width=60",
    quote:
      "Hợp tác với tổ chức này đã giúp công ty chúng tôi hiểu rõ hơn về trách nhiệm xã hội. Những dự án chung rất ý nghĩa và hiệu quả.",
  },
  {
    id: 3,
    name: "Lê Thị Hương",
    role: "Người thụ hưởng",
    avatar: "/placeholder.svg?height=60&width=60",
    quote:
      "Cảm ơn các bạn đã mang đến cho tôi và gia đình những khoảnh khắc ấm áp. Sự quan tâm của các bạn thật sự chân thành và đáng quý.",
  },
  {
    id: 4,
    name: "Phạm Minh Tuấn",
    role: "Thành viên cộng đồng",
    avatar: "/placeholder.svg?height=60&width=60",
    quote:
      "Từ khi tham gia cộng đồng, tôi đã học được nhiều kỹ năng mới và kết nối với những người bạn tuyệt vời. Môi trường ở đây thật sự tích cực.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Cảm nhận từ cộng đồng</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những chia sẻ chân thành từ các thành viên, đối tác và người thụ hưởng trong cộng đồng
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-orange-500 mb-4" />
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-orange-100 text-orange-600 font-semibold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
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
