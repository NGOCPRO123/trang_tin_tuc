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
    <section className="py-24 px-4 bg-gradient-to-br from-white via-white to-blue-50 relative overflow-hidden">
      {/* Decorative SVG circles */}
      <svg className="absolute left-0 top-0 z-0 opacity-20" width="300" height="300" fill="none">
        <circle cx="150" cy="150" r="120" fill="#FDE68A" />
      </svg>
      <svg className="absolute right-0 bottom-0 z-0 opacity-10" width="400" height="400" fill="none">
        <circle cx="200" cy="200" r="180" fill="#60A5FA" />
      </svg>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-amber-600">
            Liên Hệ <span className="text-amber-600">(Contact Us)</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto text-gray-700">
            Bạn có câu hỏi hoặc cần tư vấn chuyên sâu về các giải pháp Vực Dậy Tài Chính – Bứt Phá Doanh Thu? Đừng ngần ngại liên hệ với đội ngũ HLCC ngay hôm nay!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Contact options */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-8 text-amber-700">Thông Tin Liên Hệ</h3>

            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 bg-white border border-amber-200 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Phone className="w-6 h-6 text-amber-500 group-hover:text-amber-600" />
                </motion.div>
                <div>
                  <div className="font-semibold text-gray-800">Hotline</div>
                  <div className="text-amber-600">028.5555.8879</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 bg-white border border-amber-200 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Mail className="w-6 h-6 text-amber-500 group-hover:text-amber-600" />
                </motion.div>
                <div>
                  <div className="font-semibold text-gray-800">Email</div>
                  <div className="text-amber-600">lienhe@hlcc.group</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 bg-white border border-amber-100 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <MessageCircle className="w-6 h-6 text-amber-400 group-hover:text-amber-500" />
                </motion.div>
                <div>
                  <div className="font-semibold text-gray-800">Tư vấn chuyên sâu</div>
                  <div className="text-amber-600">Vực Dậy Tài Chính – Bứt Phá Doanh Thu</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 bg-white border border-amber-100 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Calendar className="w-6 h-6 text-amber-400 group-hover:text-amber-500" />
                </motion.div>
                <div>
                  <div className="font-semibold text-gray-800">Địa chỉ</div>
                  <div className="text-amber-600">Tòa nhà SABAY – 99 Cộng Hòa, Phường 4, Quận Tân Bình, TP.HCM</div>
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
            className="text-center md:text-left"
          >
            <div className="bg-white border-2 border-amber-300 rounded-2xl p-10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-amber-700">Bắt đầu tư vấn ngay</h3>
              <p className="text-lg opacity-90 mb-8 text-gray-700">
                Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn với các giải pháp chuyên sâu từ đội ngũ 22 Doanh Chủ
              </p>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-amber-400 hover:bg-amber-500 text-amber-900 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                  style={{
                    boxShadow: "0 0 30px rgba(252, 211, 77, 0.3)",
                  }}
                  onClick={handleConsultationClick}
                >
                  Tư vấn miễn phí
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-2 border-amber-400 text-amber-700 hover:bg-amber-50 hover:text-amber-900 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent font-semibold"
                  onClick={handlePortfolioClick}
                >
                  Xem giải pháp
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-amber-100">
                <p className="text-sm opacity-75 text-gray-600">
                  ✓ Tư vấn miễn phí &nbsp;&nbsp; ✓ Đội ngũ 22 Doanh Chủ &nbsp;&nbsp; ✓ Giải pháp thực tiễn
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
