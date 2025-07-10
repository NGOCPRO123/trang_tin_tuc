"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Palette, BarChart3, Shield, Headphones, Zap, DollarSign, TrendingUp, ShieldCheck, FileText, CreditCard, Lock, Users, Handshake, BookOpen, Building2, Briefcase, Target } from "lucide-react"
import { useRouter } from "next/navigation"

const services = [
  {
    id: 1,
    title: "Giải mã Dòng tiền & Tài chính",
    description: "Tái cấu trúc, quản trị dòng tiền và giải pháp tài chính giúp huy động vốn thành công, đảm bảo sức khỏe tài chính vững chắc",
    icon: DollarSign,
    features: [
      "Tái cấu trúc tài chính",
      "Quản trị dòng tiền",
      "Giải pháp huy động vốn"
    ],
    backgroundImage: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    title: "Giải mã Hệ thống & Vận hành",
    description: "Tinh gọn quy trình, xây dựng hệ thống quản trị bài bản để doanh nghiệp tự vận hành hiệu quả mà không cần CEO 'chữa cháy'.",
    icon: Briefcase,
    features: [
      "Tinh gọn quy trình",
      "Xây dựng hệ thống quản trị",
      "Tối ưu vận hành doanh nghiệp"
    ],
    backgroundImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    title: "Giải mã Rủi ro Pháp lý & Thuế",
    description: "Xây dựng tấm khiên pháp lý vững chắc, đảm bảo tuân thủ, tối ưu hóa các nghĩa vụ về thuế và giảm thiểu rủi ro pháp lý cho doanh nghiệp.",
    icon: ShieldCheck,
    features: [
      "Tư vấn pháp lý doanh nghiệp",
      "Tối ưu thuế",
      "Đảm bảo tuân thủ luật"
    ],
    backgroundImage: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    title: "Đồng Hành Trực Tiếp",
    description: "HLCC không chỉ tư vấn mà trực tiếp tham gia giải quyết vấn đề, đảm bảo hiệu quả cao nhất cho doanh nghiệp.",
    icon: Handshake,
    features: [
      "Trực tiếp tham gia",
      "Giải quyết vấn đề",
      "Đảm bảo hiệu quả cao"
    ],
    backgroundImage: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 5,
    title: "12 Quy Tắc Sống",
    description: "Tìm hiểu thêm về tầm nhìn, giá trị cốt lõi và 12 Quy tắc sống, những yếu tố định hình nên văn hóa và bản sắc HLCC.",
    icon: BookOpen,
    features: [
      "Tầm nhìn rõ ràng",
      "Giá trị cốt lõi",
      "12 Quy tắc sống"
    ],
    backgroundImage: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 6,
    title: "Đối Tác Tin Cậy",
    description: "Chúng tôi cam kết đồng hành lâu dài, không chỉ hỗ trợ ngắn hạn mà còn có giải pháp cụ thể cho mục tiêu phát triển bền vững.",
    icon: Building2,
    features: [
      "Đồng hành lâu dài",
      "Giải pháp bền vững",
      "Đối tác tin cậy"
    ],
    backgroundImage: "https://i.pinimg.com/736x/2d/a9/c4/2da9c4f0d49127e870ba28f8db2c848c.jpg"
  },
]

export function ServicesSection() {
  const router = useRouter()

  const handleLearnMoreClick = () => {
    router.push('/lien-he#contact-form')
  }

  return (
    <section className="py-24 px-4 relative overflow-hidden" style={{ backgroundColor: '#fff' }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-32 left-32 w-96 h-96 bg-gradient-to-br from-[#CCA776] to-[#CCA776] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [180, 90, 0],
          }}
          transition={{
            duration: 35,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-br from-[#CCA776] to-[#CCA776] rounded-full blur-3xl"
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
         
          <motion.h2 className="text-4xl md:text-6xl font-black text-black mt-4 mb-8 relative">
            Bộ công cụ của Chuyên gia Giải mã
          </motion.h2>
          <p className="text-xl text-black max-w-3xl mx-auto font-bold">
            Mỗi doanh nghiệp là một "vụ án" riêng biệt. HLCC cung cấp các giải pháp tư vấn doanh nghiệp toàn diện, đặc biệt nhấn mạnh giải pháp tài chính, giúp bạn xây dựng nền tảng vững chắc cho tăng trưởng bền vững.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            // Mảng màu pastel đậm, tránh màu vàng/cam nhạt
            const pastelColors = [
              "bg-[#CCA776]", // màu vàng nâu nhạt (Light Brownish Yellow)
              "bg-[#CCA776]", // màu vàng nâu nhạt (Light Brownish Yellow)
              "bg-[#CCA776]", // màu vàng nâu nhạt (Light Brownish Yellow)
              "bg-[#CCA776]", // màu vàng nâu nhạt (Light Brownish Yellow)
              "bg-[#CCA776]", // màu vàng nâu nhạt (Light Brownish Yellow)
              "bg-[#CCA776]", // màu vàng nâu nhạt (Light Brownish Yellow)
            ];
            const pastelBg = pastelColors[index % pastelColors.length];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className={`h-full hover:shadow-2xl transition-all duration-300 border-0 shadow-xl group relative overflow-hidden ${pastelBg}`}>
                  {/* Background image */}
                  <div
                    className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-all duration-300"
                    style={{
                      backgroundImage: `url('${service.backgroundImage}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  />
                  {/* Overlay sáng hơn giúp nổi bật nội dung */}
                  <div className="absolute inset-0 z-10 bg-white/40 group-hover:bg-white/50 transition-all duration-300" />
                  {/* Nội dung Card */}
                  <div className="relative z-20">
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-[#CCA776] group-hover:bg-[#CCA776]/80 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                        <service.icon className="w-8 h-8 text-white group-hover:text-white transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-xl font-black text-black drop-shadow-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-black mb-6 leading-relaxed drop-shadow font-bold">{service.description}</p>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-black drop-shadow font-bold">
                              <div className="w-2 h-2 bg-[#CCA776] rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
        {/* Button xem tất cả giải pháp */}
        <div className="flex justify-center mt-12">
          <Button
            onClick={() => router.push('/giai-phap')}
            className="px-8 py-4 bg-gradient-to-r from-[#CCA776] to-[#CCA776] text-white font-bold rounded-full shadow-lg hover:from-[#CCA776]/80 hover:to-[#CCA776] transition-all text-lg"
          >
            Xem tất cả các giải pháp tư vấn doanh nghiệp của HLCC →
          </Button>
        </div>
      </div>
    </section>
  )
}
