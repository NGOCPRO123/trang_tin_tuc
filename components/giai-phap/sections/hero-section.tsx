"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden min-h-[600px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-yellow-200/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 backdrop-blur-sm rounded-full border border-yellow-300/30">
              <span className="text-yellow-300 font-semibold text-sm">✨ Chúng tôi là chuyên gia</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">Dịch vụ</span>
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
              Chúng tôi cung cấp dịch vụ tư vấn toàn diện với đội ngũ chuyên gia giàu kinh nghiệm, cam kết mang đến
              những giải pháp tối ưu và hiệu quả nhất cho doanh nghiệp của bạn.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                Liên hệ ngay
              </Button>
              <Button
                variant="outline"
                className="border-yellow-300/50 text-yellow-100 hover:bg-yellow-400/10 px-8 py-4 text-lg rounded-xl bg-transparent"
              >
                Tìm hiểu thêm
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-transparent rounded-3xl"></div>
              <Image
                src="/placeholder.svg?height=500&width=500&text=Professional+Services"
                alt="Professional Services"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
