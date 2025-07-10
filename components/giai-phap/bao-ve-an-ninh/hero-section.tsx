"use client"

import { Button } from "@/components/ui/button"
import { Shield, Eye, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#CCA776]/10">
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 leading-tight">
              Bảo vệ an ninh doanh nghiệp
              <br />
              <span className="text-[#CCA776] font-black">Chuyên nghiệp & Hiệu quả</span>
            </h1>
            <p className="text-xl md:text-2xl text-black font-bold mb-8">
              Giải pháp toàn diện giúp doanh nghiệp bạn phòng ngừa, phát hiện và xử lý các rủi ro an ninh – từ nội bộ đến bên ngoài.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                size="lg"
                className="bg-[#CCA776] hover:bg-[#CCA776] text-white px-8 py-6 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all"
              >
                Yêu cầu một buổi "Khảo sát An ninh" Miễn phí
              </Button>
            </div>
          </div>
          {/* Right side - Visual */}
          <div className="relative flex justify-center items-center">
            <div className="relative bg-[#CCA776]/20 rounded-3xl p-8 shadow-2xl">
              <div className="relative w-[480px] h-[480px] rounded-3xl overflow-hidden border-4 border-[#CCA776]/30 shadow-2xl">
                <Image
                  src="/uploads/dey24xap6oo8mj3xxf54uv2jk.png"
                  alt="Bảo vệ an ninh doanh nghiệp"
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl p-4 shadow-lg mt-4">
                <div className="text-base font-bold text-[#CCA776]">Bảo vệ toàn diện 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
