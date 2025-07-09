"use client"

import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Target, Filter, Users } from "lucide-react"
import { motion } from "framer-motion"

export function ProblemsSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-yellow-50 via-amber-50 to-yellow-100 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-24 -left-24 w-[350px] h-[350px] bg-yellow-200 rounded-full blur-3xl opacity-50 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[200px] bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-100 rounded-full blur-2xl opacity-40" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-yellow-400 to-amber-300 text-yellow-900 px-4 py-2 mb-6 shadow-md rounded-xl">❓ Tại sao các giải pháp thông thường thất bại?</Badge>
          <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Tại sao doanh nghiệp bạn vẫn "mắc kẹt" dù đã thử nhiều cách?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Một doanh nghiệp không thất bại vì một lý do duy nhất. Nó sụp đổ bởi một chuỗi các vấn đề liên kết: một giải pháp tài chính tạm bợ, một quy trình kế toán lỗi thời, một chiến lược kinh doanh không còn phù hợp. Việc chỉ chữa "triệu chứng" sẽ không bao giờ giải quyết được "căn bệnh".<br/>
            <span className="text-yellow-600">Tại HLCC, chúng tôi tiếp cận doanh nghiệp của bạn như một "hiện trường" cần được điều tra để tìm ra "hung thủ" thật sự.</span>
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {[{
            icon: Target,
            title: "Giải pháp tài chính tạm bợ",
            desc: "Chỉ tập trung vào vay vốn hoặc cắt giảm chi phí mà không giải quyết tận gốc dòng tiền và cấu trúc tài chính."
          }, {
            icon: Filter,
            title: "Quy trình kế toán, vận hành lỗi thời",
            desc: "Hệ thống quản trị thiếu minh bạch, quy trình rườm rà khiến doanh nghiệp không thể tối ưu vận hành."
          }, {
            icon: Users,
            title: "Chiến lược kinh doanh không còn phù hợp",
            desc: "Thiếu tư duy đổi mới, không cập nhật xu hướng khiến doanh nghiệp dậm chân tại chỗ, tăng trưởng không bền vững."
          }].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.7 }}
              className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl border-2 border-yellow-200/60 p-10 text-center group hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <item.icon className="w-14 h-14 mx-auto mb-6 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-lg text-gray-700 font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 