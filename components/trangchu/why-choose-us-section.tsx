"use client"

import { motion } from "framer-motion"
import { Target, BarChart2, Scale, Calculator, Handshake, Eye, type LucideIcon } from "lucide-react"

interface Solution {
  icon: LucideIcon
  title: string
  description: string
  bullets: string[]
}

const solutions: Solution[] = [
  {
    icon: Target,
    title: "Đầu Tư Tài Chính",
    description:
      "Tối ưu nguồn vốn, tái cấu trúc tài chính, gia tăng giá trị doanh nghiệp và thu hút nhà đầu tư chiến lược.",
    bullets: ["Tối ưu nguồn vốn", "Tái cấu trúc tài chính", "Gia tăng giá trị", "Thu hút nhà đầu tư"],
  },
  {
    icon: BarChart2,
    title: "Giải Pháp Tăng Doanh Số Bền Vững",
    description:
      "Phân tích thị trường, tối ưu vận hành, xây dựng chiến lược kinh doanh hiệu quả, thúc đẩy tăng trưởng.",
    bullets: ["Phân tích thị trường", "Tối ưu vận hành", "Chiến lược kinh doanh", "Tăng trưởng bền vững"],
  },
  {
    icon: Scale,
    title: "Tư Vấn Pháp Lý & Quản Trị Rủi Ro",
    description: "Đảm bảo tuân thủ pháp luật, bảo vệ doanh nghiệp, tư vấn hợp đồng và quản lý rủi ro.",
    bullets: ["Tuân thủ pháp luật", "Bảo vệ doanh nghiệp", "Quản lý rủi ro pháp lý", "Tư vấn hợp đồng"],
  },
  {
    icon: Calculator,
    title: "Nghiệp Vụ Kế Toán – Thuế",
    description: "Minh bạch tài chính, tối ưu lợi nhuận hợp pháp, đảm bảo tuân thủ quy định và báo cáo thuế chính xác.",
    bullets: [
      "Minh bạch tài chính",
      "Tối ưu lợi nhuận hợp pháp",
      "Tuân thủ quy định kế toán",
      "Báo cáo thuế chính xác",
    ],
  },
  {
    icon: Handshake,
    title: "Xử Lý Công Nợ",
    description:
      "Xây dựng quy trình thu hồi nợ hiệu quả, quản lý dòng tiền, hạn chế rủi ro công nợ xấu, tối ưu vốn lưu động.",
    bullets: [
      "Quy trình thu hồi nợ hiệu quả",
      "Hạn chế rủi ro công nợ xấu",
      "Quản lý dòng tiền",
      "Tối ưu hóa vốn lưu động",
    ],
  },
  {
    icon: Eye,
    title: "Bảo Vệ An Ninh",
    description: "Triển khai hệ thống giám sát, kiểm soát ra vào, bảo vệ tài sản và an ninh thông tin doanh nghiệp.",
    bullets: ["Hệ thống giám sát", "Kiểm soát ra vào", "Bảo vệ tài sản doanh nghiệp", "An ninh thông tin"],
  },
]

export function UnconventionalWhyChooseUsSection() {
  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#CCA776]/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-tl from-[#CCA776]/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#CCA776]/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-black text-black mb-8 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Giải Pháp Quản Trị Doanh Nghiệp
            <br />
            <span className="relative inline-block text-[#CCA776]">
              Cốt Lõi Từ HLCC
              <motion.div
                className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-[#CCA776] via-[#CCA776]/80 to-[#CCA776]/40 rounded-full"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto font-medium leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            HLCC với đội ngũ chuyên gia 10+ năm kinh nghiệm, không chỉ tư vấn mà trực tiếp tham gia giải quyết vấn đề,
            mang lại giá trị thực tiễn cao nhất.
          </motion.p>
        </motion.div>

        {/* Masonry Zigzag Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {solutions.map((solution, index) => {
            const isEven = index % 2 === 0
            const Icon = solution.icon

            return (
              <motion.div
                key={solution.title}
                className={`relative ${isEven ? "lg:mt-0" : "lg:mt-16"}`}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 },
                }}
              >
                {/* Floating Icon */}
                <motion.div
                  className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-[#CCA776] to-[#CCA776]/80 rounded-2xl shadow-lg flex items-center justify-center z-10"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15 + 0.3,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Content Box */}
                <motion.div
                  className="bg-[#CCA776] rounded-3xl p-8 pt-12 shadow-xl relative overflow-hidden group"
                  style={{
                    boxShadow: "0 20px 40px -12px rgba(204, 167, 118, 0.25), 0 8px 16px -8px rgba(204, 167, 118, 0.3)",
                  }}
                  whileHover={{
                    boxShadow: "0 25px 50px -12px rgba(204, 167, 118, 0.4), 0 12px 24px -8px rgba(204, 167, 118, 0.35)",
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-4 right-4 w-32 h-32 border border-white rounded-full" />
                    <div className="absolute bottom-4 left-4 w-24 h-24 border border-white rounded-full" />
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative z-10">
                    <motion.h3
                      className="text-2xl font-bold text-black mb-4 leading-tight"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      {solution.title}
                    </motion.h3>

                    <motion.p
                      className="text-black/90 mb-6 font-medium leading-relaxed"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      {solution.description}
                    </motion.p>

                    <div className="space-y-3">
                      {solution.bullets.map((bullet, bulletIndex) => (
                        <motion.div
                          key={bullet}
                          className="flex items-start text-black/90 font-medium"
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.15 + 0.6 + bulletIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: bulletIndex * 0.2,
                            }}
                          />
                          <span className="leading-relaxed">{bullet}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <motion.div
                    className="absolute top-6 right-6 w-3 h-3 bg-white/30 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.5,
                    }}
                  />
                  <motion.div
                    className="absolute bottom-6 right-8 w-2 h-2 bg-white/20 rounded-full"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.3 + 1,
                    }}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Mission Statement */}
        <motion.div
          className="mt-32 relative"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Decorative floating elements */}
          <motion.div
            className="absolute -top-12 -left-12 w-24 h-24 border-2 border-[#CCA776]/30 rounded-full"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-12 -right-12 w-32 h-32 border-2 border-[#CCA776]/20 rounded-full"
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />

          <motion.div
            className="bg-gradient-to-br from-[#CCA776] via-[#CCA776] to-[#CCA776]/90 rounded-[3rem] p-12 md:p-16 lg:p-20 shadow-2xl text-center relative overflow-hidden"
            style={{
              boxShadow: "0 25px 50px -12px rgba(204, 167, 118, 0.4), 0 12px 24px -8px rgba(204, 167, 118, 0.3)",
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 30px 60px -12px rgba(204, 167, 118, 0.5), 0 15px 30px -8px rgba(204, 167, 118, 0.4)",
              transition: { duration: 0.4, type: "spring", stiffness: 200 },
            }}
          >
            {/* Animated background particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-white/20 rounded-full"
                style={{
                  top: `${15 + (i % 4) * 20}%`,
                  left: `${10 + (i % 3) * 30}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            ))}

            <div className="relative z-10">
              <motion.h3
                className="text-3xl md:text-5xl lg:text-6xl font-black text-black mb-8 leading-tight"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Sứ Mệnh Cốt Lõi
                <br />
                <span className="text-black/80">Kiến Tạo Tương Lai Bền Vững</span>
                <br />
                <span className="text-black">Cùng HLCC</span>
              </motion.h3>

              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-black font-bold max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <strong>HLCC</strong> với sứ mệnh <strong>Vực Dậy Tài Chính – Bứt Phá Doanh Thu</strong>. Đối tác chiến
                lược mang đến giải pháp chuyên sâu giúp tối ưu tài chính và nâng cao năng lực cạnh tranh.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
