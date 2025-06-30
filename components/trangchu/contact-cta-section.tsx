"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, MessageCircle, Calendar } from "lucide-react"
import { useRouter } from "next/navigation"

export function ContactCTASection() {
  const router = useRouter()

  const handleConsultationClick = () => {
    router.push('/lien-he#contact-form')
  }

  const handlePortfolioClick = () => {
    router.push('/tin-tuc')
  }

  return (
    <section className="py-24 px-4 text-white relative overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }} />
      <div className="absolute inset-0 z-10 bg-black/60" />

      <div className="container mx-auto max-w-6xl relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Sẵn sàng bắt đầu dự án <span className="text-amber-200">tiếp theo</span>?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto">
            Hãy để chúng tôi giúp bạn biến ý tưởng thành hiện thực. Liên hệ ngay để được tư vấn miễn phí và báo giá chi
            tiết
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Contact options */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-8">Nhiều cách để liên hệ</h3>

            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Phone className="w-6 h-6 text-amber-200 group-hover:text-amber-100" />
                </motion.div>
                <div>
                  <div className="font-semibold">Gọi điện trực tiếp</div>
                  <div className="text-blue-100">+84 123 456 789</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Mail className="w-6 h-6 text-amber-200 group-hover:text-amber-100" />
                </motion.div>
                <div>
                  <div className="font-semibold">Gửi email</div>
                  <div className="text-blue-100">contact@company.com</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <MessageCircle className="w-6 h-6 text-amber-200 group-hover:text-amber-100" />
                </motion.div>
                <div>
                  <div className="font-semibold">Chat trực tuyến</div>
                  <div className="text-blue-100">Hỗ trợ 24/7</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Calendar className="w-6 h-6 text-amber-200 group-hover:text-amber-100" />
                </motion.div>
                <div>
                  <div className="font-semibold">Đặt lịch tư vấn</div>
                  <div className="text-blue-100">Miễn phí 30 phút</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - CTA buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Bắt đầu ngay hôm nay</h3>
              <p className="text-lg opacity-90 mb-8">
                Chúng tôi cam kết phản hồi trong vòng 24 giờ và cung cấp báo giá chi tiết trong 48 giờ
              </p>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-amber-300 hover:bg-amber-400 text-amber-900 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                  style={{
                    boxShadow: "0 0 30px rgba(252, 211, 77, 0.5)",
                  }}
                  onClick={handleConsultationClick}
                >
                  Nhận tư vấn miễn phí
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-2 border-white text-white hover:bg-white hover:text-amber-700 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent font-semibold"
                  onClick={handlePortfolioClick}
                >
                  Xem portfolio
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-sm opacity-75">
                  ✓ Tư vấn miễn phí &nbsp;&nbsp; ✓ Báo giá trong 48h &nbsp;&nbsp; ✓ Bảo hành 12 tháng
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
