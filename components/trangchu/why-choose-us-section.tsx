"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Award, Users, Shield, Lightbulb, DollarSign, BarChart2 } from "lucide-react"

const reasons = [
  {
    icon: DollarSign,
    title: "Khó Khăn Tài Chính",
    bullets: [
      "Thiếu vốn lưu động",
      "Khó tiếp cận nguồn vốn",
      "Quản lý dòng tiền kém",
      "Rủi ro tài chính cao"
    ],
    color: "bg-red-100 text-red-500 border-l-4 border-red-200"
  },
  {
    icon: BarChart2,
    title: "Vận Hành & Doanh Số",
    bullets: [
      "Doanh thu không ổn định",
      "Quy trình vận hành lỏng lẻo",
      "Hiệu quả kinh doanh thấp",
      "Khó mở rộng thị trường"
    ],
    color: "bg-orange-100 text-orange-500 border-l-4 border-orange-200"
  },
  {
    icon: Shield,
    title: "Pháp Lý & Rủi Ro",
    bullets: [
      "Thiếu hiểu biết pháp luật",
      "Rủi ro tuân thủ cao",
      "Tranh chấp hợp đồng",
      "An ninh thông tin yếu"
    ],
    color: "bg-purple-100 text-purple-500 border-l-4 border-purple-200"
  }
]

const cardGradients = [
  "from-gray-300 to-gray-300",
  "from-gray-300 to-gray-300",
  "from-gray-300 to-gray-300",
  "from-gray-300 to-gray-300",
  "from-gray-300 to-gray-300",
  "from-gray-300 to-gray-300",
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-200 to-amber-300 rounded-full blur-3xl"
        />
      </div>
      <div className="container mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2 mb-6">
            Vấn Đề Của Bạn <span className="text-gray-600"> - </span> <span className="text-amber-600">Giải Pháp Của Chúng Tôi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Hiểu rõ những thách thức mà doanh nghiệp đang đối mặt, HLCC mang đến giải pháp toàn diện
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className={`h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg ${reason.color}`}>
                <CardContent className="p-8 text-left">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl ${reason.color}`.replace('border-l-4','') }>
                    <reason.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{reason.title}</h3>
                  <ul className="text-gray-700 text-base list-disc pl-5 space-y-1">
                    {reason.bullets.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-28 text-center"
        >
          <motion.div
            className="relative rounded-3xl p-14 text-white shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{
              boxShadow: "0 0 50px rgba(100, 116, 139, 0.3)",
            }}
          >
            {/* Background image + overlay */}
            <div className="absolute inset-0 z-0" style={{
              backgroundImage: "url('https://i.pinimg.com/736x/20/9c/4e/209c4e859fc5f57842e1470ec8b77c56.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }} />
            <div className="absolute inset-0 z-10 bg-black/60" />
            {/* Nội dung */}
            <div className="relative z-20">
              <h3 className="text-4xl font-bold mb-6">HLCC - Đối Tác Tin Cậy Cho Mọi Thách Thức</h3>
              <p className="text-lg md:text-xl text-blue-100 mx-auto text-center max-w-2xl px-2">
                Với kinh nghiệm hơn 10 năm và đội ngũ chuyên gia hàng đầu, chúng tôi sẵn sàng đồng hành cùng bạn vượt qua mọi khó khăn
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
