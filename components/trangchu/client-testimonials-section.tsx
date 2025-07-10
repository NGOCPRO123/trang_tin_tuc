"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { HelpCircle, TrendingUp, Building2, Handshake, Sparkles, Rocket, ChevronDown, RotateCcw } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    id: 1,
    question: "HLCC khác biệt gì so với các đơn vị tư vấn khác?",
    answer:
      "HLCC là liên minh 22 Doanh Chủ với đội ngũ chuyên gia thực chiến trực tiếp tham gia giải quyết vấn đề. Chúng tôi điều phối nguồn lực chung và vận hành Hệ Sinh Thái TMĐT ACTA mang lại giá trị thực tiễn.",
    icon: HelpCircle,
    color: "from-[#CCA776] to-[#D4B885]",
  },
  {
    id: 2,
    question: "HLCC hỗ trợ tăng doanh số như thế nào?",
    answer:
      "Cung cấp giải pháp tăng doanh số bền vững qua phân tích thị trường, tối ưu vận hành và chiến lược kinh doanh. Quản lý Cộng Đồng Affiliate Thực Chiến với hàng nghìn thành viên giúp bứt phá doanh thu.",
    icon: TrendingUp,
    color: "from-[#B8956A] to-[#CCA776]",
  },
  {
    id: 3,
    question: "Giải pháp HLCC có phù hợp với SME không?",
    answer:
      "Hoàn toàn phù hợp. HLCC cung cấp giải pháp cho đa dạng doanh nghiệp từ startup đến tập đoàn lớn. Chúng tôi tùy chỉnh giải pháp phù hợp với từng đặc thù ngành nghề và quy mô.",
    icon: Building2,
    color: "from-[#CCA776] to-[#A68B5B]",
  },
  {
    id: 4,
    question: "Làm thế nào để hợp tác với HLCC?",
    answer:
      "Liên hệ trực tiếp qua hotline hoặc email. Đội ngũ chuyên gia HLCC sẽ tư vấn miễn phí và cùng bạn xây dựng lộ trình hợp tác phù hợp để vực dậy tài chính và bứt phá doanh thu.",
    icon: Handshake,
    color: "from-[#D4B885] to-[#CCA776]",
  },
]

export function UniqueFaqSection() {
  const [isSpread, setIsSpread] = useState(false)
  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const handleCardClick = (id: number) => {
    if (selectedCard === id) {
      setSelectedCard(null)
    } else {
      setSelectedCard(id)
    }
  }

  const resetDeck = () => {
    setIsSpread(false)
    setSelectedCard(null)
    setHoveredCard(null)
  }

  return (
    <section className="relative min-h-screen py-20 px-4 bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Geometric Shapes */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 4, repeat: Number.POSITIVE_INFINITY },
          }}
          className="absolute top-20 left-20 w-32 h-32 border-2 border-[#CCA776]/10 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
            y: [0, -20, 0],
          }}
          transition={{
            rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            y: { duration: 3, repeat: Number.POSITIVE_INFINITY },
          }}
          className="absolute top-40 right-32 w-16 h-16 bg-[#CCA776]/5 transform rotate-45"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-32 left-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-[#CCA776]/10 to-transparent"
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-black">Câu Hỏi Thường Gặp</h2>
          <p className="text-xl text-black font-semibold mb-8">Những thắc mắc phổ biến về giải pháp và cách thức hoạt động của HLCC</p>

          {/* Control Buttons */}
          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSpread(!isSpread)}
              className="bg-gradient-to-r from-[#CCA776] to-[#B8956A] text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isSpread ? "Thu gọn" : "Tỏa bài"}{" "}
              <ChevronDown className={`w-5 h-5 inline ml-2 transition-transform ${isSpread ? "rotate-180" : ""}`} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetDeck}
              className="bg-white border-2 border-[#CCA776] text-[#CCA776] px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <RotateCcw className="w-5 h-5 inline mr-2" /> Reset
            </motion.button>
          </div>
        </motion.div>

        {/* Card Deck */}
        <div className="flex justify-center items-center min-h-[600px]">
          <div className="relative w-96 h-96">
            {faqs.map((faq, index) => {
              const isSelected = selectedCard === faq.id
              const isHovered = hoveredCard === faq.id

              // Calculate positions for spread effect
              const spreadAngle = isSpread ? (index - 1.5) * 25 : 0
              const spreadDistance = isSpread ? 120 : 0
              const stackOffset = isSpread ? 0 : index * 8

              const x = isSpread ? Math.sin((spreadAngle * Math.PI) / 180) * spreadDistance : 0
              const y = isSpread ? -Math.cos((spreadAngle * Math.PI) / 180) * spreadDistance * 0.3 : -stackOffset

              return (
                <motion.div
                  key={faq.id}
                  className="absolute top-1/2 left-1/2 origin-bottom"
                  style={{
                    zIndex: isSelected ? 50 : isHovered ? 40 : 10 + index,
                  }}
                  initial={false}
                  animate={{
                    x: x - 192, // -192 = -w-96/2
                    y: y - 192, // -192 = -h-96/2
                    rotate: isSelected ? 0 : spreadAngle,
                    scale: isSelected ? 1.1 : isHovered ? 1.05 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  onHoverStart={() => setHoveredCard(faq.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  onClick={() => handleCardClick(faq.id)}
                >
                  <Card
                    className={`
                      w-96 h-96 cursor-pointer border-0 shadow-2xl
                      bg-gradient-to-br ${faq.color}
                      transform transition-all duration-300
                      ${isSelected ? "shadow-[#CCA776]/50 ring-4 ring-[#CCA776]/30" : ""}
                      ${isHovered ? "shadow-[#CCA776]/30" : ""}
                    `}
                  >
                    <CardContent className="p-8 h-full flex flex-col justify-center relative overflow-hidden">
                      {/* Card Number */}
                      <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-black text-2xl text-white">
                        {faq.id}
                      </div>

                      {/* Decorative Corner */}
                      <div className="absolute top-6 right-6 w-8 h-8">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        >
                          <Sparkles className="w-8 h-8 text-white/60" />
                        </motion.div>
                      </div>

                      {/* Icon */}
                      <motion.div
                        className="flex justify-center mb-6"
                        animate={{
                          scale: isSelected ? [1, 1.2, 1] : 1,
                          rotate: isSelected ? [0, 360] : 0,
                        }}
                        transition={{
                          scale: { duration: 0.6 },
                          rotate: { duration: 0.8 },
                        }}
                      >
                        <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <faq.icon className="w-10 h-10 text-white" />
                        </div>
                      </motion.div>

                      {/* Question */}
                      <h3 className="font-black text-2xl mb-4 text-black text-center leading-tight">{faq.question}</h3>

                      {/* Answer - Only show when selected */}
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-black text-center leading-relaxed text-base font-semibold">{faq.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Click Indicator */}
                      {!isSelected && (
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
                        >
                          <div className="text-white/60 text-sm font-semibold">Click để xem</div>
                        </motion.div>
                      )}

                      {/* Card Border Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-lg border-2 border-white/20"
                        animate={{
                          borderColor: isSelected
                            ? ["rgba(255,255,255,0.2)", "rgba(255,255,255,0.6)", "rgba(255,255,255,0.2)"]
                            : "rgba(255,255,255,0.2)",
                        }}
                        transition={{ duration: 1.5, repeat: isSelected ? Number.POSITIVE_INFINITY : 0 }}
                      />

                      {/* Suit Symbol */}
                      <div className="absolute bottom-6 right-6 w-6 h-6 bg-white/20 rounded transform rotate-45" />
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-black mb-8 text-lg font-semibold">
            {!isSpread ? "Nhấn 'Tỏa bài' để xem tất cả câu hỏi" : "Click vào từng lá bài để xem câu trả lời chi tiết"}
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(204, 167, 118, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#CCA776] to-[#B8956A] text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:shadow-[#CCA776]/30 transition-all duration-300"
          >
            <div className="flex items-center space-x-3">
              <span>Bắt đầu với HLCC ngay hôm nay</span>
              <Rocket className="w-6 h-6" />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
