"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, BarChart3, PieChart, LineChart } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Nguyễn Văn Minh",
      position: "CEO",
      company: "TechViet Solutions",
      content: "Sau 6 tháng sử dụng, doanh thu của chúng tôi tăng 45%. Đội ngũ hỗ trợ rất chuyên nghiệp và tận tâm.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Trần Thị Lan",
      position: "Giám đốc Marketing",
      company: "Fashion House VN",
      content: "Hệ thống CRM giúp chúng tôi quản lý khách hàng hiệu quả hơn 300%. Chi phí marketing giảm đáng kể.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Lê Hoàng Nam",
      position: "Founder",
      company: "StartupXYZ",
      content:
        "Từ startup 10 người đến doanh nghiệp 100+ nhân viên. Giải pháp này đã đồng hành cùng chúng tôi phát triển.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  const companies = [
    { name: "TechViet", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Fashion House", logo: "/placeholder.svg?height=40&width=120" },
    { name: "StartupXYZ", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Digital Corp", logo: "/placeholder.svg?height=40&width=120" },
    { name: "E-commerce Plus", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Marketing Pro", logo: "/placeholder.svg?height=40&width=120" },
  ]

  return (
    <section className="relative py-24 bg-gradient-to-b from-yellow-50 via-amber-50 to-yellow-100 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-24 left-0 w-[350px] h-[350px] bg-yellow-200 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[200px] bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-100 rounded-full blur-2xl opacity-40" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-yellow-400 to-amber-300 text-yellow-900 px-4 py-2 mb-6 shadow-md rounded-xl">📊 Đo lường & Phân tích hiệu quả</Badge>
          <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Chúng tôi không nói suông. <span className="bg-gradient-to-r from-yellow-600 to-amber-500 bg-clip-text text-transparent">Chúng tôi nói bằng con số.</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Mọi chiến lược đều được đo lường minh bạch. Hệ thống báo cáo trực quan, phân tích & dự báo giúp bạn luôn đi trước đối thủ một bước.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {[{
            icon: BarChart3,
            title: "Dashboard trực quan",
            desc: "Theo dõi hiệu quả từng chiến dịch theo thời gian thực, dễ dàng kiểm soát và tối ưu.",
            color: "from-yellow-500 to-amber-400"
          }, {
            icon: PieChart,
            title: "Phân tích & Dự báo",
            desc: "Ứng dụng công nghệ để phân tích dữ liệu và dự báo xu hướng thị trường, giúp bạn luôn đi trước đối thủ.",
            color: "from-yellow-400 to-amber-300"
          }, {
            icon: LineChart,
            title: "Số liệu minh bạch",
            desc: "Mọi chỉ số đều được báo cáo rõ ràng, minh bạch, giúp bạn ra quyết định chính xác.",
            color: "from-amber-400 to-yellow-500"
          }].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.7 }}
              className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl border-2 border-yellow-200/60 p-10 text-center group hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-lg text-gray-700 font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
