"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-yellow-600 via-yellow-500 to-orange-500 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="text-sm font-medium text-yellow-100 mb-4 uppercase tracking-wide">
              GIẢI PHÁP CỦ EXPERTIS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Giải pháp
              <br />
              <span className="text-yellow-400">Đổi mới</span> và <span className="text-yellow-400">Toàn diện</span>
            </h1>
            <p className="text-xl text-yellow-50 mb-8 leading-relaxed max-w-lg">
              Chúng tôi mang đến những giải pháp tối ưu để giúp doanh nghiệp của bạn phát triển và đạt được những mục
              tiêu kinh doanh một cách hiệu quả nhất.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-yellow-600 px-8 py-4 text-lg rounded-full font-semibold group"
              >
                Khám phá ngay
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                alt="Professional business consultation"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
