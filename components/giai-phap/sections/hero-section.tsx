"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Puzzle, Target, Zap, Lightbulb, Shield } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#CCA776]/10 via-[#CCA776]/10 to-[#CCA776]/10">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#CCA776]/20 to-[#CCA776]/20"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#CCA776] rounded-full opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#CCA776] rounded-full opacity-20"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#CCA776] rounded-full opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#CCA776] to-[#CCA776] text-white rounded-full px-6 py-3 text-sm font-semibold shadow-lg"
            >
              <span className="bg-white/20 rounded-full p-2 shadow-lg flex items-center justify-center"><Puzzle className="w-4 h-4 text-white" /></span>
              <span>Giải pháp doanh nghiệp toàn diện</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black mb-6">
                Doanh nghiệp của bạn không cần thêm "dịch vụ". Bạn cần một <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCA776] to-[#CCA776] font-black drop-shadow">GIẢI PHÁP</span> toàn diện.
              </h1>
            </motion.div>

            {/* Sub-headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              <p className="text-lg md:text-xl text-black leading-relaxed">
                Một doanh nghiệp khỏe mạnh là một hệ thống vận hành đồng nhất. Việc chỉ "vá" các lỗi đơn lẻ sẽ không bao giờ tạo ra sự tăng trưởng bền vững.
              </p>
              <p className="text-lg md:text-xl text-black leading-relaxed">
                Tại <span className="font-black text-[#CCA776] drop-shadow">HLCC</span>, chúng tôi cung cấp các <span className="font-semibold text-[#CCA776] drop-shadow">giải pháp doanh nghiệp</span> được thiết kế để giải quyết vấn đề từ gốc rễ, kết nối mọi mắt xích từ tài chính, pháp lý đến vận hành.
              </p>
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div className="flex items-center gap-3 text-black bg-white p-4 rounded-lg shadow-sm">
                <span className="bg-[#CCA776] rounded-full p-2 shadow-lg flex items-center justify-center"><Target className="w-5 h-5 text-white" /></span>
                <span className="text-sm font-medium">Giải pháp toàn diện</span>
              </div>
              <div className="flex items-center gap-3 text-black bg-white p-4 rounded-lg shadow-sm">
                <span className="bg-[#CCA776] rounded-full p-2 shadow-lg flex items-center justify-center"><Zap className="w-5 h-5 text-white" /></span>
                <span className="text-sm font-medium">Từ gốc rễ</span>
              </div>
              <div className="flex items-center gap-3 text-black bg-white p-4 rounded-lg shadow-sm">
                <span className="bg-[#CCA776] rounded-full p-2 shadow-lg flex items-center justify-center"><Shield className="w-5 h-5 text-white" /></span>
                <span className="text-sm font-medium">Bền vững</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#CCA776] to-[#CCA776] hover:from-[#CCA776]/80 hover:to-[#CCA776] text-white px-8 py-4 text-lg rounded-xl font-semibold group shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Khám phá giải pháp của chúng tôi
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#CCA776]/20 to-[#CCA776]/20 rounded-3xl blur-xl"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-[#CCA776] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                  alt="Giải pháp doanh nghiệp toàn diện - HLCC"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay with text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Giải pháp doanh nghiệp HLCC</h3>
                    <p className="text-[#CCA776] font-semibold drop-shadow">Kết nối mọi mắt xích từ tài chính, pháp lý đến vận hành</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
