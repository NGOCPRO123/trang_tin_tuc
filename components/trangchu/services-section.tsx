"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Palette, BarChart3, Shield, Headphones, Zap } from "lucide-react"
import { useRouter } from "next/navigation"

const services = [
  {
    id: 1,
    title: "Phát triển phần mềm",
    description: "Xây dựng ứng dụng web, mobile và hệ thống quản lý theo yêu cầu riêng của doanh nghiệp",
    icon: Code,
    features: ["Công nghệ hiện đại", "Bảo mật cao", "Tối ưu hiệu suất"],
    backgroundImage: "https://i.pinimg.com/736x/b1/a2/47/b1a247b31bc1c14ac0a78e4b71557027.jpg"
  },
  {
    id: 2,
    title: "Thiết kế UI/UX",
    description: "Tạo ra trải nghiệm người dùng tuyệt vời với thiết kế hiện đại và thân thiện",
    icon: Palette,
    features: ["Thiết kế responsive", "Tối ưu chuyển đổi", "Nghiên cứu người dùng"],
    backgroundImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    title: "Tư vấn chiến lược",
    description: "Đưa ra lời khuyên chuyên môn để tối ưu hóa quy trình và nâng cao hiệu quả kinh doanh",
    icon: BarChart3,
    features: ["Phân tích thị trường", "Lập kế hoạch", "Đo lường KPI"],
    backgroundImage: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    title: "Bảo mật & An toàn",
    description: "Đảm bảo hệ thống của bạn luôn được bảo vệ khỏi các mối đe dọa an ninh mạng",
    icon: Shield,
    features: ["Kiểm tra bảo mật", "Mã hóa dữ liệu", "Giám sát 24/7"],
    backgroundImage: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 5,
    title: "Hỗ trợ & Bảo trì",
    description: "Dịch vụ hỗ trợ kỹ thuật và bảo trì hệ thống chuyên nghiệp, đáng tin cậy",
    icon: Headphones,
    features: ["Hỗ trợ 24/7", "Cập nhật định kỳ", "Sao lưu dữ liệu"],
    backgroundImage: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 6,
    title: "Tối ưu hiệu suất",
    description: "Nâng cao tốc độ và hiệu suất hệ thống để mang lại trải nghiệm tốt nhất",
    icon: Zap,
    features: ["Tối ưu database", "CDN toàn cầu", "Giám sát hiệu suất"],
    backgroundImage: "https://i.pinimg.com/736x/2d/a9/c4/2da9c4f0d49127e870ba28f8db2c848c.jpg"
  },
]

export function ServicesSection() {
  const router = useRouter()

  const handleLearnMoreClick = () => {
    router.push('/lien-he#contact-form')
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 relative overflow-hidden">
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
          className="absolute top-32 left-32 w-96 h-96 bg-gradient-to-br from-amber-300 to-yellow-400 rounded-full blur-3xl"
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
          className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-br from-orange-300 to-amber-400 rounded-full blur-3xl"
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
          <span className="text-amber-600 font-semibold text-lg">DỊCH VỤ CỦA CHÚNG TÔI</span>
          <motion.h2 className="text-4xl md:text-6xl font-bold font-heading text-gray-800 mt-4 mb-8 relative">
            Giải pháp{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 relative">
              toàn diện
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </span>{" "}
            cho doanh nghiệp
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi cung cấp đầy đủ các dịch vụ từ phát triển, thiết kế đến tư vấn và hỗ trợ, giúp doanh nghiệp của
            bạn hoạt động hiệu quả và phát triển bền vững
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white group relative overflow-hidden">
                {/* Background image */}
                <div
                  className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-all duration-300"
                  style={{
                    backgroundImage: `url('${service.backgroundImage}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                />
                {/* Overlay tối giúp nổi bật nội dung */}
                <div className="absolute inset-0 z-10 bg-black/60 group-hover:bg-black/70 transition-all duration-300" />
                {/* Nội dung Card */}
                <div className="relative z-20">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-amber-100 group-hover:bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                      <service.icon className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white drop-shadow-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-white/90 mb-6 leading-relaxed drop-shadow">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-white/90 drop-shadow">
                            <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-amber-400 text-amber-200 hover:bg-amber-600 hover:text-white group bg-transparent font-bold drop-shadow"
                      onClick={handleLearnMoreClick}
                    >
                      Tìm hiểu thêm
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
