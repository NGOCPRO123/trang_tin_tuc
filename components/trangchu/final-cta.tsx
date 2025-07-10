"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Heart } from "lucide-react"
import { useRouter } from "next/navigation"

export function FinalCTA() {
  const router = useRouter()

  const handleExploreProgramsClick = () => {
    router.push('/gioi-thieu')
  }

  const handleBecomePartnerClick = () => {
    router.push('/lien-he#contact-form')
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#CCA776] via-[#CCA776]/90 to-[#CCA776]/80 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/2 w-20 h-20 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Doanh nghiệp của bạn đã sẵn sàng cho một cuộc "Chẩn đoán"?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white font-medium max-w-3xl mx-auto">
            Vấn đề sẽ không tự biến mất. Hãy để các chuyên gia tư vấn doanh nghiệp của HLCC cùng bạn tìm ra nguyên nhân gốc rễ và xây dựng một lộ trình phát triển vững chắc với giải pháp tài chính toàn diện.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-white text-[#CCA776] hover:bg-gray-100 px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
              onClick={handleExploreProgramsClick}
            >
              <Users className="mr-2 w-5 h-5" />
              Khám phá các chương trình
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              className="bg-white text-[#CCA776] hover:bg-gray-100 px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
              onClick={handleBecomePartnerClick}
            >
              Bắt đầu Giải mã Doanh nghiệp của bạn
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
