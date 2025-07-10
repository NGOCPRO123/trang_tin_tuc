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
    router.push('/giai-phap')
  }

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Decorative SVG circles */}
      <svg className="absolute left-0 top-0 z-0 opacity-20" width="300" height="300" fill="none">
        <circle cx="150" cy="150" r="120" fill="#CCA776" />
      </svg>
      <svg className="absolute right-0 bottom-0 z-0 opacity-10" width="400" height="400" fill="none">
        <circle cx="200" cy="200" r="180" fill="#CCA776" />
      </svg>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-black drop-shadow-lg">
            Liên Hệ <span className="text-black font-black">(Contact Us)</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-black font-medium max-w-4xl mx-auto">
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
            <h3 className="text-2xl font-black mb-8 text-black drop-shadow-lg">Thông Tin Liên Hệ</h3>

            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 bg-white border border-[#CCA776]/30 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Phone className="w-6 h-6 text-[#CCA776] group-hover:text-[#CCA776]/80" />
                </motion.div>
                <div>
                  <div className="font-semibold text-black">Hotline</div>
                  <a href="tel:02855558879" className="text-[#CCA776] hover:text-[#CCA776]/80 transition-colors font-bold">028.5555.8879</a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 bg-white border border-[#CCA776]/30 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Mail className="w-6 h-6 text-[#CCA776] group-hover:text-[#CCA776]/80" />
                </motion.div>
                <div>
                  <div className="font-semibold text-black">Email</div>
                  <a href="mailto:lienhe@hlcc.group" className="text-[#CCA776] hover:text-[#CCA776]/80 transition-colors font-bold">lienhe@hlcc.group</a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 bg-white border border-[#CCA776]/20 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <MessageCircle className="w-6 h-6 text-[#CCA776] group-hover:text-[#CCA776]/80" />
                </motion.div>
                <div>
                  <div className="font-semibold text-black">Tư vấn chuyên sâu</div>
                  <a href="/lien-he#contact-form" className="text-[#CCA776] hover:text-[#CCA776]/80 transition-colors font-bold">Vực Dậy Tài Chính – Bứt Phá Doanh Thu</a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 bg-white border border-[#CCA776]/20 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Calendar className="w-6 h-6 text-[#CCA776] group-hover:text-[#CCA776]/80" />
                </motion.div>
                <div>
                  <div className="font-semibold text-black">Địa chỉ</div>
                  <a href="https://maps.google.com/?q=Tòa nhà SABAY – 99 Cộng Hòa, Phường 4, Quận Tân Bình, TP.HCM" target="_blank" rel="noopener noreferrer" className="text-[#CCA776] hover:text-[#CCA776]/80 transition-colors font-bold">Tòa nhà SABAY – 99 Cộng Hòa, Phường 4, Quận Tân Bình, TP.HCM</a>
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
            <div className="bg-white border-2 border-[#CCA776]/50 rounded-2xl p-10 shadow-2xl">
              <h3 className="text-2xl font-black mb-6 text-black drop-shadow-lg">Bắt đầu tư vấn ngay</h3>
              <p className="text-lg text-black font-medium mb-8">
                Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn với các giải pháp chuyên sâu từ đội ngũ 22 Doanh Chủ
              </p>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-[#CCA776] hover:bg-[#CCA776]/80 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                  style={{
                    boxShadow: "0 0 30px rgba(204, 167, 118, 0.3)",
                  }}
                  onClick={handleConsultationClick}
                >
                  Tư vấn miễn phí
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-2 border-[#CCA776] text-[#CCA776] hover:bg-[#CCA776] hover:text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent font-semibold"
                  onClick={handlePortfolioClick}
                >
                  Xem giải pháp
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-[#CCA776]/20">
                <p className="text-sm text-black font-medium">
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
