"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Award, Users, Shield, Lightbulb, DollarSign, BarChart2, Building2, Target, Scale, Calculator, Handshake, Eye } from "lucide-react"

const solutions = [
  {
    icon: Target,
    title: "Đầu Tư Tài Chính",
    description: "Tối ưu nguồn vốn, tái cấu trúc tài chính, gia tăng giá trị doanh nghiệp và thu hút nhà đầu tư chiến lược.",
    bullets: [
      "Tối ưu nguồn vốn",
      "Tái cấu trúc tài chính",
      "Gia tăng giá trị",
      "Thu hút nhà đầu tư"
    ],
    color: "bg-green-100 text-green-500 border-l-4 border-green-200"
  },
  {
    icon: BarChart2,
    title: "Giải Pháp Tăng Doanh Số Bền Vững",
    description: "Phân tích thị trường, tối ưu vận hành, xây dựng chiến lược kinh doanh hiệu quả, thúc đẩy tăng trưởng.",
    bullets: [
      "Phân tích thị trường",
      "Tối ưu vận hành",
      "Chiến lược kinh doanh",
      "Tăng trưởng bền vững"
    ],
    color: "bg-orange-100 text-orange-500 border-l-4 border-orange-200"
  },
  {
    icon: Scale,
    title: "Tư Vấn Pháp Lý & Quản Trị Rủi Ro",
    description: "Đảm bảo tuân thủ pháp luật, bảo vệ doanh nghiệp, tư vấn hợp đồng và quản lý rủi ro.",
    bullets: [
      "Tuân thủ pháp luật",
      "Bảo vệ doanh nghiệp",
      "Quản lý rủi ro pháp lý",
      "Tư vấn hợp đồng"
    ],
    color: "bg-purple-100 text-purple-500 border-l-4 border-purple-200"
  },
  {
    icon: Calculator,
    title: "Nghiệp Vụ Kế Toán – Thuế",
    description: "Minh bạch tài chính, tối ưu lợi nhuận hợp pháp, đảm bảo tuân thủ quy định và báo cáo thuế chính xác.",
    bullets: [
      "Minh bạch tài chính",
      "Tối ưu lợi nhuận hợp pháp",
      "Tuân thủ quy định kế toán",
      "Báo cáo thuế chính xác"
    ],
    color: "bg-red-100 text-red-500 border-l-4 border-red-200"
  },
  {
    icon: Handshake,
    title: "Xử Lý Công Nợ",
    description: "Xây dựng quy trình thu hồi nợ hiệu quả, quản lý dòng tiền, hạn chế rủi ro công nợ xấu, tối ưu vốn lưu động.",
    bullets: [
      "Quy trình thu hồi nợ hiệu quả",
      "Hạn chế rủi ro công nợ xấu",
      "Quản lý dòng tiền",
      "Tối ưu hóa vốn lưu động"
    ],
    color: "bg-amber-100 text-amber-500 border-l-4 border-amber-200"
  },
  {
    icon: Eye,
    title: "Bảo Vệ An Ninh",
    description: "Triển khai hệ thống giám sát, kiểm soát ra vào, bảo vệ tài sản và an ninh thông tin doanh nghiệp.",
    bullets: [
      "Hệ thống giám sát",
      "Kiểm soát ra vào",
      "Bảo vệ tài sản doanh nghiệp",
      "An ninh thông tin"
    ],
    color: "bg-indigo-100 text-indigo-500 border-l-4 border-indigo-200"
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
            Giải Pháp Quản Trị Doanh Nghiệp <span className="text-amber-600">Cốt Lõi Từ HLCC</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            HLCC với đội ngũ chuyên gia 10+ năm kinh nghiệm, không chỉ tư vấn mà trực tiếp tham gia giải quyết vấn đề, mang lại giá trị thực tiễn cao nhất.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className={`h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg ${solution.color}`}>
                <CardContent className="p-8 text-left">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl ${solution.color}`.replace('border-l-4','') }>
                    <solution.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{solution.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 text-center">{solution.description}</p>
                  <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1">
                    {solution.bullets.map((item, idx) => (
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
              <h3 className="text-4xl font-bold mb-6">Sứ Mệnh Cốt Lõi: Kiến Tạo Tương Lai Bền Vững Cùng HLCC</h3>
              <p className="text-lg md:text-xl text-blue-100 mx-auto text-center max-w-2xl px-2 leading-relaxed">
                <strong>HLCC</strong> với sứ mệnh <strong>Vực Dậy Tài Chính – Bứt Phá Doanh Thu</strong>. Đối tác chiến lược mang đến giải pháp chuyên sâu giúp tối ưu tài chính và nâng cao năng lực cạnh tranh.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
