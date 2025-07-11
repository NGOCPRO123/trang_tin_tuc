"use client"

import { motion, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Users, Target, Lightbulb, Award, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const controls = useAnimation()

  const heroSlides = [
    {
      title: "Lắng nghe & phân tích sâu sắc doanh nghiệp",
      subtitle: "15+ năm đồng hành – 500+ dự án thành công – Cam kết kết quả thực tế",
      description:
        "Chúng tôi không chỉ cung cấp giải pháp, mà còn là người bạn đồng hành, giúp doanh nghiệp bạn phát triển bền vững, tối ưu vận hành và vươn xa trên thị trường.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Đồng hành chiến lược cùng doanh nghiệp Việt",
      subtitle: "Từ khát vọng thấu hiểu đến giải pháp thực tiễn",
      description:
        "HLCC ra đời từ chính sự thấu hiểu những thách thức mà các nhà lãnh đạo phải đối mặt: dòng tiền, nhân sự, rủi ro pháp lý...",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Giải pháp thực chiến - Kết quả bền vững",
      subtitle: "Không chỉ là nhà cung cấp dịch vụ, mà là điểm tựa vững chắc",
      description:
        "Chúng tôi đã chứng kiến những nhà lãnh đạo tài năng vượt qua mọi thách thức với sự đồng hành của HLCC.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    },
  ]

  const marqueeItems = [
    { icon: Users, text: "Đội ngũ chuyên gia giàu kinh nghiệm", color: "#CCA776" },
    { icon: Target, text: "15+ năm kinh nghiệm tư vấn", color: "#CCA776" },
    { icon: Award, text: "500+ dự án thành công", color: "#CCA776" },
    { icon: Lightbulb, text: "Giải pháp thực chiến", color: "#CCA776" },
    { icon: Heart, text: "Cam kết kết quả thực tế", color: "#CCA776" },
  ]

  const whyChooseItems = [
    "15+ năm kinh nghiệm trong lĩnh vực tư vấn",
    "500+ dự án thành công với các doanh nghiệp",
    "Đội ngũ chuyên gia đa lĩnh vực",
    "Cam kết kết quả thực tế và bền vững",
    "Sự kết hợp hoàn hảo giữa kinh nghiệm và đam mê",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroSlides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <div className="min-h-screen">
      {/* Horizontal Scrolling Hero */}
      <section className="relative h-screen overflow-hidden bg-[#F3E6D1]">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
            <div key={index} className="min-w-full h-full flex items-center justify-center">
              {/* Flex Layout: Ảnh bên trái, nội dung bên phải */}
              <div className="flex flex-row items-center justify-center w-full h-full gap-8 px-12">
                {/* Image Section */}
                <div className="flex-shrink-0 w-[480px] h-[520px] rounded-3xl overflow-hidden shadow-2xl bg-transparent relative">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={`HLCC Slide ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#CCA776] rounded-full opacity-80" />
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#CCA776] rounded-full opacity-60" />
                </div>
                {/* Content Section */}
                <div className="flex-1 max-w-2xl">
                  <motion.h1
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#CCA776]"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.h2
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                    className="text-xl md:text-2xl font-semibold mb-6 text-black/80"
                  >
                    {slide.subtitle}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                    className="text-lg leading-relaxed mb-8 text-black/70"
                  >
                    {slide.description}
                  </motion.p>
                  <Button size="lg" className="bg-[#CCA776] text-white hover:bg-[#B8965F] font-semibold px-8 py-3">
                    Khám phá ngay <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-[#CCA776] text-white p-3 rounded-full hover:bg-[#B8965F] transition-colors z-10"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-[#CCA776] text-white p-3 rounded-full hover:bg-[#B8965F] transition-colors z-10"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-[#CCA776] scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Marquee Section - Features */}
      <section className="py-8 overflow-hidden" style={{ backgroundColor: "#CCA776" }}>
        <div className="relative">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex whitespace-nowrap"
          >
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="flex items-center mx-8 text-white">
                  <IconComponent className="h-6 w-6 mr-3" />
                  <span className="text-lg font-semibold">{item.text}</span>
                  <div className="w-2 h-2 bg-white rounded-full mx-8" />
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose HLCC - Vertical Marquee */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Rotating Content */}
            <div className="relative">
              <div
                className="p-8 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                style={{ backgroundColor: "#CCA776" }}
              >
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Lightbulb className="mr-3 h-8 w-8" />
                  Tại sao chọn HLCC?
                </h3>
                <div className="space-y-4 h-64 overflow-hidden">
                  <motion.div
                    animate={{ y: [0, -40, -80, -120, -160, -200] }}
                    transition={{
                      y: {
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        duration: 10,
                        ease: "linear",
                      },
                    }}
                    className="space-y-4"
                  >
                    {[...whyChooseItems, ...whyChooseItems].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-white py-2">
                        <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
                        <span className="text-lg">{item}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Right - Story Content */}
            <div className="space-y-6">
              <div
                className="p-6 rounded-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                style={{ backgroundColor: "#CCA776" }}
              >
                <p className="text-lg text-white leading-relaxed">
                  Hành trình của một chủ doanh nghiệp thường là một hành trình đơn độc. Chúng tôi thấu hiểu điều đó, bởi
                  chính những nhà sáng lập <span className="font-bold">HLCC</span> cũng đã từng ở vị trí của bạn.
                </p>
              </div>

              <div
                className="p-6 rounded-xl transform rotate-1 hover:rotate-0 transition-transform duration-500"
                style={{ backgroundColor: "#CCA776" }}
              >
                <p className="text-lg text-white leading-relaxed">
                  Chúng tôi đã chứng kiến những nhà lãnh đạo tài năng phải vật lộn với gánh nặng không tên: dòng tiền,
                  nhân sự, rủi ro pháp lý...
                </p>
              </div>

              <div className="p-6 rounded-xl border-4 border-[#CCA776] bg-white transform hover:scale-105 transition-transform duration-500">
                <p className="text-lg font-semibold" style={{ color: "#CCA776" }}>
                  <span className="font-bold">HLCC</span> ra đời không phải để trở thành một nhà cung cấp dịch vụ. Chúng
                  tôi ra đời từ chính sự thấu hiểu đó, với một khát vọng trở thành người đồng hành chiến lược, một điểm
                  tựa vững chắc cho các doanh nghiệp Việt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Floating Elements */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h3 className="text-3xl font-bold mb-6" style={{ color: "#CCA776" }}>
              Sẵn sàng bắt đầu hành trình?
            </h3>
            <Button
              size="lg"
              className="text-white font-semibold px-12 py-4 text-lg rounded-full hover:scale-105 transition-transform"
              style={{ backgroundColor: "#CCA776" }}
            >
              Liên hệ ngay hôm nay <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </motion.div>
        </div>

        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full opacity-10"
            style={{ backgroundColor: "#CCA776" }}
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full opacity-10"
            style={{ backgroundColor: "#CCA776" }}
          />
        </div>
      </section>
    </div>
  )
}
