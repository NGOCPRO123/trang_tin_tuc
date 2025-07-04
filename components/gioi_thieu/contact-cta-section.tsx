"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function ContactCTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-yellow-600 via-yellow-500 to-orange-500">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Tư vấn với chúng tôi</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và tư vấn những giải pháp tối ưu cho doanh nghiệp của bạn. Liên hệ ngay để
            được hỗ trợ!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-yellow-600 px-8 py-4 text-lg rounded-full font-semibold group"
              >
                <Phone className="mr-2 w-5 h-5" />
                Gọi ngay
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-4 text-lg rounded-full backdrop-blur-sm bg-transparent"
              >
                <Mail className="mr-2 w-5 h-5" />
                Gửi email
              </Button>
            </motion.div>
          </div>

          <p className="text-yellow-200 text-sm">
            Hoặc gửi email cho chúng tôi tại: <span className="font-semibold">contact@expertis.vn</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
