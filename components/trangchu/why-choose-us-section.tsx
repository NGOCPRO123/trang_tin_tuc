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
    color: "bg-[#CCA776]/20 text-[#CCA776] border-l-4 border-[#CCA776]"
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
    color: "bg-[#CCA776]/20 text-[#CCA776] border-l-4 border-[#CCA776]"
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
    color: "bg-[#CCA776]/20 text-[#CCA776] border-l-4 border-[#CCA776]"
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
    color: "bg-[#CCA776]/20 text-[#CCA776] border-l-4 border-[#CCA776]"
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
    color: "bg-[#CCA776]/20 text-[#CCA776] border-l-4 border-[#CCA776]"
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
    color: "bg-[#CCA776]/20 text-[#CCA776] border-l-4 border-[#CCA776]"
  }
]

const pastelColors = [
  "bg-[#CCA776]", // màu vàng nâu nhạt (Light Brownish Yellow)
  "bg-[#CCA776]", // màu vàng nâu nhạt (Light Brownish Yellow)
  "bg-[#CCA776]", // màu vàng nâu nhạt (Light Brownish Yellow)
  "bg-[#CCA776]", // màu vàng nâu nhạt (Light Brownish Yellow)
  "bg-[#CCA776]", // màu vàng nâu nhạt (Light Brownish Yellow)
  "bg-[#CCA776]", // màu vàng nâu nhạt (Light Brownish Yellow)
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-[#CCA776] to-[#CCA776] rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-[#CCA776] to-[#CCA776] rounded-full blur-3xl"
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
          
          <h2 className="text-3xl md:text-5xl font-bold text-black mt-2 mb-6">
            Giải Pháp Quản Trị Doanh Nghiệp <span className="text-[#CCA776] font-bold">Cốt Lõi Từ HLCC</span>
          </h2>
          <p className="text-xl text-black max-w-4xl mx-auto font-medium">
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
              <Card className={`h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg ${pastelColors[index % pastelColors.length]}`}>
                <CardContent className="p-8 text-left">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl text-black bg-white/70`}>
                    <solution.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3 text-center">{solution.title}</h3>
                  <p className="text-black text-sm mb-4 text-center font-medium">{solution.description}</p>
                  <ul className="text-black text-sm list-disc pl-5 space-y-1 font-medium">
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
            className="relative rounded-3xl p-14 text-black shadow-2xl overflow-hidden"
            style={{ backgroundColor: '#CCA776', boxShadow: "0 0 50px rgba(100, 116, 139, 0.3)" }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Nội dung */}
            <div className="relative z-20">
              <h3 className="text-4xl font-black mb-6 text-black">Sứ Mệnh Cốt Lõi: Kiến Tạo Tương Lai Bền Vững Cùng HLCC</h3>
              <p className="text-lg md:text-xl text-black mx-auto text-center max-w-2xl px-2 leading-relaxed font-black">
                <strong>HLCC</strong> với sứ mệnh <strong>Vực Dậy Tài Chính – Bứt Phá Doanh Thu</strong>. Đối tác chiến lược mang đến giải pháp chuyên sâu giúp tối ưu tài chính và nâng cao năng lực cạnh tranh.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
