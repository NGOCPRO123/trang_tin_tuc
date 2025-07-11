"use client";

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-[520px] flex items-stretch overflow-hidden">
      {/* Nền vàng chéo */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" viewBox="0 0 1600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
          <polygon points="0,0 1100,0 800,600 0,600" fill="#CCA776" />
          <polygon points="1100,0 1600,0 1600,600 800,600" fill="#CCA776/80" />
        </svg>
        {/* Hiệu ứng hình học */}
        <div className="absolute top-20 left-32 w-32 h-32 bg-[#CCA776]/40 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 right-40 w-40 h-40 bg-[#CCA776]/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between py-16 lg:py-24 gap-8">
        {/* Bên trái: Nội dung */}
        <div className="flex-1 max-w-xl flex flex-col justify-center items-start px-2 lg:px-0">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-6xl font-extrabold text-black leading-tight drop-shadow-lg mb-6"
          >
            Doanh nghiệp của bạn đang cần thêm vốn,<br />
            hay cần thêm quyền kiểm soát?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-black font-medium mb-8"
          >
            Đây là câu hỏi chiến lược mà mọi chủ doanh nghiệp đều phải đối mặt. Việc huy động vốn sai cách có thể khiến bạn mất đi quyền kiểm soát công ty mình đã gầy dựng.<br />
            <span className="font-bold text-[#CCA776]">Tại HLCC</span>, chúng tôi cung cấp các giải pháp đầu tư tài chính không chỉ giúp bạn có nguồn vốn dồi dào, mà còn giúp bạn củng cố và tối ưu hóa cấu trúc sở hữu.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#CCA776] to-[#CCA776]/80 hover:from-[#CCA776]/80 hover:to-[#CCA776] text-white font-bold px-10 py-5 text-xl shadow-2xl border-2 border-[#CCA776] rounded-full transition-transform duration-200 hover:scale-105"
            >
              Yêu cầu một buổi "Khám" sức khỏe Tài chính & Sở hữu
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </motion.div>
        </div>
        {/* Bên phải: Hình ảnh lớn với viền bo góc bất đối xứng */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex-1 flex justify-center items-center relative"
        >
          <div className="relative w-[420px] h-[320px] lg:w-[520px] lg:h-[380px]">
            <div className="absolute -top-6 -left-6 w-full h-full bg-[#CCA776]/20 rounded-[60px_120px_80px_40px/80px_40px_120px_60px] z-0 shadow-2xl" />
            <Image
              src="/placeholder.svg" // Thay bằng hình ảnh ẩn dụ phù hợp (bàn cờ hoặc bắt tay)
              alt="Chiến lược tài chính và quyền lực doanh nghiệp"
              fill
              className="object-cover rounded-[60px_120px_80px_40px/80px_40px_120px_60px] border-4 border-[#CCA776] relative z-10 shadow-xl"
              priority
            />
            <div className="absolute bottom-4 right-4 bg-[#CCA776] px-4 py-2 rounded-full text-white font-bold text-sm shadow border border-[#CCA776] z-20">
              Kiến trúc sư trưởng cho cấu trúc tài chính & sở hữu
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
