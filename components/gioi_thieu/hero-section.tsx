"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Users, Target, Lightbulb, Award } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative py-36 min-h-[500px] md:min-h-[650px] lg:min-h-[800px] overflow-hidden bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80')"}}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full mb-28">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wide font-sans text-center max-w-7xl mx-auto drop-shadow-lg text-white"
        >
          HLCC – Đối tác chiến lược của doanh nghiệp Việt Vững vàng vượt thử thách, bứt phá tăng trưởng
        </motion.h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mt-2 mb-4 text-center max-w-7xl mx-auto tracking-wide font-sans drop-shadow">
          15+ năm đồng hành – 500+ dự án thành công – Cam kết kết quả thực tế
        </h2>
        <p className="text-lg md:text-xl text-white text-center max-w-7xl mx-auto drop-shadow">
          Chúng tôi không chỉ cung cấp giải pháp, mà còn là người bạn đồng hành, giúp doanh nghiệp bạn phát triển bền vững, tối ưu vận hành và vươn xa trên thị trường.
        </p>
      </div>

      {/* Content Below - Information and Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
      >
        {/* Left Content - Information */}
        <div className="space-y-8">
          {/* Description Text */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-white leading-relaxed">
              Hành trình của một chủ doanh nghiệp thường là một hành trình đơn độc. Chúng tôi thấu hiểu điều đó, bởi chính những nhà sáng lập <span className="font-bold text-yellow-400">HLCC</span> cũng đã từng ở vị trí của bạn.
            </p>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              Chúng tôi đã chứng kiến những nhà lãnh đạo tài năng phải vật lộn với gánh nặng không tên: dòng tiền, nhân sự, rủi ro pháp lý...
            </p>
            <p className="text-lg md:text-xl font-semibold text-white bg-black/40 p-6 rounded-lg border-l-4 border-yellow-400">
              <span className="text-yellow-400">HLCC</span> ra đời không phải để trở thành một nhà cung cấp dịch vụ. Chúng tôi ra đời từ chính sự thấu hiểu đó, với một khát vọng trở thành người đồng hành chiến lược, một điểm tựa vững chắc cho các doanh nghiệp Việt.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 text-white bg-black/40 p-4 rounded-lg shadow-sm">
              <Users className="w-5 h-5 text-yellow-400 flex-shrink-0" />
              <span className="text-sm font-medium">Đội ngũ chuyên gia giàu kinh nghiệm</span>
            </div>
            <div className="flex items-center gap-3 text-white bg-black/40 p-4 rounded-lg shadow-sm">
              <Target className="w-5 h-5 text-yellow-400 flex-shrink-0" />
              <span className="text-sm font-medium">Giải pháp thực chiến</span>
            </div>
            <div className="flex items-center gap-3 text-white bg-black/40 p-4 rounded-lg shadow-sm">
              <Award className="w-5 h-5 text-yellow-400 flex-shrink-0" />
              <span className="text-sm font-medium">Cam kết kết quả</span>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-black/40 p-6 rounded-xl border-2 border-yellow-400 shadow-lg">
            <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center">
              <Lightbulb className="mr-3 h-6 w-6 text-yellow-400" />
              Tại sao chọn HLCC?
            </h3>
            <div className="space-y-3 text-white">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                <span>15+ năm kinh nghiệm trong lĩnh vực tư vấn</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                <span>500+ dự án thành công với các doanh nghiệp</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                <span>Đội ngũ chuyên gia đa lĩnh vực</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                <span>Cam kết kết quả thực tế và bền vững</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 text-lg rounded-xl font-semibold group shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Khám phá câu chuyện của chúng tôi
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Right Image - Adjusted Size */}
        <div className="relative lg:sticky lg:top-8">
          <div className="relative w-full h-[600px] lg:h-[700px]">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-3xl blur-xl"></div>
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-yellow-200 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Đội ngũ chuyên gia HLCC - Đồng hành cùng doanh nghiệp"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Đội ngũ chuyên gia HLCC</h3>
                  <p className="text-yellow-200">Sự kết hợp hoàn hảo giữa kinh nghiệm và đam mê</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
