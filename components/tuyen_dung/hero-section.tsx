"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const scrollToJobs = () => {
    document.getElementById("job-positions")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative bg-gradient-to-br from-[#CCA776]/10 via-[#CCA776]/10 to-[#CCA776]/10 py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-[#CCA776]/20 text-[#CCA776] rounded-full text-sm font-medium">
                🚀 Tuyển dụng 2024 - Cơ hội nghề nghiệp tại HLCC
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-black mb-6 leading-tight">
                Gia nhập đội ngũ <span className="text-[#CCA776] font-black">HLCC</span>
              </h1>
              <p className="text-xl md:text-2xl text-black font-bold mb-8">
                Cơ hội phát triển sự nghiệp cùng chuyên gia hàng đầu trong lĩnh vực tư vấn doanh nghiệp, tài chính, pháp lý.
              </p>
              <p className="text-lg text-gray-600">
                Nếu bạn đam mê việc tạo ra tác động thực sự và không ngừng học hỏi, hãy cùng chúng tôi viết nên những
                câu chuyện thành công tiếp theo.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#CCA776] hover:bg-[#CCA776]/80 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={scrollToJobs}
              >
                Xem các Vị trí đang tuyển dụng
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#CCA776] text-[#CCA776] hover:bg-[#CCA776]/10 px-8 py-4 text-lg bg-transparent"
              >
                Tìm hiểu về HLCC
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#CCA776] to-[#CCA776] rounded-3xl blur-2xl opacity-30"></div>
            <Image
              src="/placeholder.svg?height=600&width=700"
              alt="Đội ngũ HLCC đang làm việc"
              width={700}
              height={600}
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
