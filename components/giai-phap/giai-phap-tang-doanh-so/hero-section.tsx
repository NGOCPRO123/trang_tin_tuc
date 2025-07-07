"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, TrendingUp } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative py-24 lg:py-40 overflow-hidden bg-gradient-to-br from-yellow-50 via-amber-100 to-yellow-200">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-yellow-200 rounded-full blur-3xl opacity-60 animate-pulse" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-amber-300 rounded-full blur-2xl opacity-40 animate-blob" />
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[300px] bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-100 rounded-full blur-3xl opacity-50 -translate-x-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <Badge className="bg-gradient-to-r from-yellow-500 to-amber-400 text-white px-5 py-2 text-base font-semibold shadow-lg shadow-yellow-200/40 rounded-xl">
              🚀 Giải pháp Tăng Doanh số Bền vững
            </Badge>
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-gray-900">
                Bạn đang <span className="bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-400 bg-clip-text text-transparent animate-gradient-x">"đốt tiền"</span> vào marketing, nhưng doanh số vẫn ì ạch?
              </h1>
              <p className="text-2xl text-gray-700 leading-relaxed max-w-2xl">
                Đó là dấu hiệu cho thấy cỗ máy kinh doanh của bạn đang có vấn đề từ bên trong. Tại HLCC, chúng tôi không chỉ giúp bạn chạy quảng cáo. Chúng tôi "giải mã" toàn bộ quy trình vận hành để tạo ra sự tăng trưởng thực sự, đồng thời giới thiệu một <b className="text-yellow-700">"vũ khí bí mật": Cộng Đồng Affiliate Thực Chiến</b>.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-400 hover:from-yellow-600 hover:to-amber-500 text-white px-10 py-5 text-xl font-bold shadow-2xl shadow-yellow-300/40 rounded-full transition-all duration-300 animate-bounce"
              >
                Yêu cầu một buổi "Khám" sức khỏe Kinh doanh
                <ArrowRight className="ml-3 w-6 h-6 animate-move-right" />
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-yellow-200/60">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Cỗ máy tăng trưởng doanh nghiệp"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg"
              />
              {/* Floating Success Indicators */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: -30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-yellow-500 to-amber-500 text-white rounded-xl p-5 shadow-xl border-2 border-yellow-200"
              >
                <TrendingUp className="w-7 h-7 mb-2 animate-pulse" />
                <div className="text-base font-medium">Doanh thu</div>
                <div className="text-2xl font-bold">+35%</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-yellow-400 to-amber-400 text-white rounded-xl p-5 shadow-xl border-2 border-yellow-200"
              >
                <div className="text-base font-medium">ROI</div>
                <div className="text-2xl font-bold">300%</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
