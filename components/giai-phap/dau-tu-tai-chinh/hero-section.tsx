import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Shield, Target } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Đầu tư không cần{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-600">
                  liều
                </span>{" "}
                – chỉ cần hiểu đúng và đi đúng hướng
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Hệ sinh thái đầu tư tài chính đa dạng: chứng khoán, trái phiếu, tài sản số – quản lý rủi ro theo chiến
                lược cá nhân hoá.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg"
              >
                🟢 Bắt đầu tư vấn đầu tư miễn phí
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-yellow-400 text-yellow-700 hover:bg-yellow-50 px-8 py-4 text-lg bg-transparent"
              >
                Khám phá giải pháp phù hợp
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-green-500" />
                <span className="text-sm text-gray-600">Tăng trưởng bền vững</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-blue-500" />
                <span className="text-sm text-gray-600">Kiểm soát rủi ro</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-purple-500" />
                <span className="text-sm text-gray-600">Cá nhân hóa</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-yellow-200">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Dashboard phân tích đầu tư"
                width={500}
                height={400}
                className="rounded-lg"
              />
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                +15.2% YTD
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
