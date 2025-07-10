"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  DollarSign,
  Briefcase,
  ShieldCheck,
  Handshake,
  BookOpen,
  Building2,
  Star,
  Circle,
  Triangle,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"

const services = [
  {
    id: 1,
    title: "Giải mã Dòng tiền & Tài chính",
    description:
      "Tái cấu trúc, quản trị dòng tiền và giải pháp tài chính giúp huy động vốn thành công, đảm bảo sức khỏe tài chính vững chắc",
    icon: DollarSign,
    features: ["Tái cấu trúc tài chính", "Quản trị dòng tiền", "Giải pháp huy động vốn"],
    number: "01",
  },
  {
    id: 2,
    title: "Giải mã Hệ thống & Vận hành",
    description:
      "Tinh gọn quy trình, xây dựng hệ thống quản trị bài bản để doanh nghiệp tự vận hành hiệu quả mà không cần CEO 'chữa cháy'.",
    icon: Briefcase,
    features: ["Tinh gọn quy trình", "Xây dựng hệ thống quản trị", "Tối ưu vận hành doanh nghiệp"],
    number: "02",
  },
  {
    id: 3,
    title: "Giải mã Rủi ro Pháp lý & Thuế",
    description:
      "Xây dựng tấm khiên pháp lý vững chắc, đảm bảo tuân thủ, tối ưu hóa các nghĩa vụ về thuế và giảm thiểu rủi ro pháp lý cho doanh nghiệp.",
    icon: ShieldCheck,
    features: ["Tư vấn pháp lý doanh nghiệp", "Tối ưu thuế", "Đảm bảo tuân thủ luật"],
    number: "03",
  },
  {
    id: 4,
    title: "Đồng Hành Trực Tiếp",
    description:
      "HLCC không chỉ tư vấn mà trực tiếp tham gia giải quyết vấn đề, đảm bảo hiệu quả cao nhất cho doanh nghiệp.",
    icon: Handshake,
    features: ["Trực tiếp tham gia", "Giải quyết vấn đề", "Đảm bảo hiệu quả cao"],
    number: "04",
  },
  {
    id: 5,
    title: "12 Quy Tắc Sống",
    description:
      "Tìm hiểu thêm về tầm nhìn, giá trị cốt lõi và 12 Quy tắc sống, những yếu tố định hình nên văn hóa và bản sắc HLCC.",
    icon: BookOpen,
    features: ["Tầm nhìn rõ ràng", "Giá trị cốt lõi", "12 Quy tắc sống"],
    number: "05",
  },
  {
    id: 6,
    title: "Đối Tác Tin Cậy",
    description:
      "Chúng tôi cam kết đồng hành lâu dài, không chỉ hỗ trợ ngắn hạn mà còn có giải pháp cụ thể cho mục tiêu phát triển bền vững.",
    icon: Building2,
    features: ["Đồng hành lâu dài", "Giải pháp bền vững", "Đối tác tin cậy"],
    number: "06",
  },
]

export function CreativeServicesSection() {
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const [activeCard, setActiveCard] = useState<number | null>(null)

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])

  return (
    <section ref={containerRef} className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div style={{ y: y1 }} className="absolute top-20 left-10 opacity-10">
        <Circle className="w-32 h-32 text-[#CCA776]" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute top-40 right-20 opacity-10">
        <Triangle className="w-24 h-24 text-[#CCA776]" />
      </motion.div>
      <motion.div style={{ y: y1 }} className="absolute bottom-40 left-1/4 opacity-10">
        <Star className="w-28 h-28 text-[#CCA776]" />
      </motion.div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-16 border-4 border-[#CCA776] rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-[#CCA776] rounded-full"></div>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-black mb-6 leading-tight">
            BỘ CÔNG CỤ <span className="text-[#CCA776]">CHUYÊN GIA</span>
          </h2>

          <div className="w-24 h-1 bg-[#CCA776] mx-auto mb-8"></div>

          <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed font-semibold">
            Mỗi doanh nghiệp là một <span className="font-bold text-[#CCA776]">"vụ án"</span> riêng biệt. HLCC cung cấp
            các giải pháp tư vấn doanh nghiệp toàn diện, đặc biệt nhấn mạnh{" "}
            <span className="font-bold text-[#CCA776]">giải pháp tài chính</span>.
          </p>
        </motion.div>

        {/* Creative zigzag layout */}
        <div className="space-y-16">
          {services.map((service, index) => {
            const isEven = index % 2 === 0
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                onMouseEnter={() => setActiveCard(service.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Number and decorative element */}
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="flex-shrink-0 relative">
                  <div className="w-32 h-32 bg-[#CCA776] rounded-full flex items-center justify-center relative overflow-hidden">
                    <motion.div
                      animate={activeCard === service.id ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute inset-0 bg-white/20 rounded-full"
                    />
                    <span className="text-4xl font-black text-white relative z-10">{service.number}</span>
                  </div>

                  {/* Floating icon */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                    className="absolute -top-2 -right-2 w-12 h-12 bg-white border-4 border-[#CCA776] rounded-full flex items-center justify-center shadow-lg"
                  >
                    <service.icon className="w-6 h-6 text-[#CCA776]" />
                  </motion.div>
                </motion.div>

                {/* Content card */}
                <motion.div whileHover={{ y: -5 }} className="flex-1 max-w-2xl">
                  <Card className="bg-[#CCA776] border-0 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                    {/* Animated background pattern */}
                    <motion.div
                      animate={activeCard === service.id ? { x: [0, 100, 0] } : {}}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />

                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <h3 className="text-2xl md:text-3xl font-black text-black leading-tight flex-1">
                          {service.title}
                        </h3>
                        <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                          <ArrowRight className="w-6 h-6 text-white/80 ml-4 flex-shrink-0" />
                        </motion.div>
                      </div>

                      <p className="text-black text-lg mb-8 leading-relaxed font-semibold">{service.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center"
                          >
                            <div className="w-3 h-3 bg-white rounded-full mx-auto mb-2"></div>
                            <span className="text-black text-sm font-semibold">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Connecting line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className={`hidden lg:block absolute ${
                    isEven ? "left-32" : "right-32"
                  } top-1/2 w-16 h-0.5 bg-[#CCA776]/30 origin-left`}
                />
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-24"
        >
          <div className="bg-[#CCA776] rounded-3xl p-12 relative overflow-hidden">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute top-4 right-4 w-16 h-16 border-2 border-white/20 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full"
            />

            <h3 className="text-3xl md:text-4xl font-black text-black mb-6">Sẵn sàng giải mã thành công?</h3>
            <p className="text-black text-lg mb-8 max-w-2xl mx-auto font-semibold">
              Hãy để HLCC đồng hành cùng bạn trên hành trình phát triển doanh nghiệp bền vững
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => router.push("/giai-phap")}
                className="bg-white text-[#CCA776] hover:bg-gray-100 font-bold px-8 py-4 rounded-full text-lg shadow-lg"
              >
                Khám phá tất cả giải pháp
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
