"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Shield, Zap, CheckCircle, UserCheck, Award, Cpu } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function BenefitsSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-yellow-50 via-amber-50 to-yellow-100 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-24 right-0 w-[350px] h-[350px] bg-yellow-200 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[200px] bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-100 rounded-full blur-2xl opacity-40" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-yellow-400 to-amber-300 text-yellow-900 px-4 py-2 mb-6 shadow-md rounded-xl">🌟 Sự khác biệt của chúng tôi</Badge>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Sự khác biệt của <span className="bg-gradient-to-r from-yellow-600 to-amber-500 bg-clip-text text-transparent">HLCC</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Chúng tôi không chỉ là một agency. Chúng tôi là đối tác đồng hành, cam kết hiệu quả và ứng dụng công nghệ tiên tiến.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {[{
            icon: Award,
            title: "Giải pháp Tối ưu – Cam kết trên Kết quả",
            desc: "Chúng tôi tập trung vào ROI. Một số mô hình hợp tác được xây dựng dựa trên hiệu quả thực tế bạn nhận được, đảm bảo lợi ích song phương.",
            color: "from-yellow-500 to-amber-400"
          }, {
            icon: Cpu,
            title: "Ứng dụng Công nghệ Tiên tiến",
            desc: "Chúng tôi mang đến các giải pháp công nghệ về CRM, Marketing Automation và phân tích dữ liệu để gia tăng hiệu suất kinh doanh.",
            color: "from-yellow-400 to-amber-300"
          }, {
            icon: UserCheck,
            title: "Đội ngũ Chuyên gia Đồng hành Xuyên suốt",
            desc: "Chúng tôi là một phần của đội ngũ của bạn, đồng hành hỗ trợ từ A-Z để đảm bảo chiến lược được triển khai thành công.",
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
