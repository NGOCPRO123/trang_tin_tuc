"use client"

import { Button } from "@/components/ui/button"
import { Shield, Eye, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-50 to-orange-100">
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 mb-4">
              Tài sản lớn nhất của bạn không phải là những gì bạn thấy,<br />
              <span className="text-[#FFD600]">mà là những gì bạn không thấy đang bị đe dọa.</span>
            </h1>
            <div className="mt-6 text-xl text-gray-700 font-medium">
              Một sự cố an ninh, dù là mất mát tài sản vật lý hay rò rỉ dữ liệu kinh doanh, đều có thể gây ra những thiệt hại không thể lường trước.<br />
              Việc chỉ lắp vài chiếc camera không thể tạo ra một hệ thống an ninh thực sự.<br />
              <span className="font-bold text-[#FFD600]">Tại HLCC, chúng tôi cung cấp giải pháp bảo vệ an ninh toàn diện, giúp bạn xây dựng một môi trường kinh doanh an toàn tuyệt đối từ trong ra ngoài.</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                size="lg"
                className="bg-[#FFD600] hover:bg-yellow-400 text-black px-8 py-6 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all"
              >
                Yêu cầu một buổi "Khảo sát An ninh" Miễn phí
              </Button>
            </div>
          </div>
          {/* Right side - Visual */}
          <div className="relative flex justify-center items-center">
            <div className="relative bg-gradient-to-br from-yellow-200 to-amber-300 rounded-3xl p-8 shadow-2xl">
              <div className="relative w-[480px] h-[480px] rounded-3xl overflow-hidden border-4 border-yellow-300 shadow-2xl">
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
                <div className="text-base font-bold text-yellow-600">Bảo vệ toàn diện 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
