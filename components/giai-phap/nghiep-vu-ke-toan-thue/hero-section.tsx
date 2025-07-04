import { Button } from "@/components/ui/button"
import { Zap, Target, Lightbulb } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 py-20 lg:py-32">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
                <Lightbulb className="mr-2 h-4 w-4" />
                Kế toán thông minh cho thời đại số
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Biến Số Liệu Thành <span className="text-amber-600">Câu Chuyện</span> Kinh Doanh
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Không chỉ là con số trên giấy - chúng tôi giúp bạn đọc hiểu "ngôn ngữ" của doanh nghiệp qua từng báo cáo
                tài chính
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg">
                Khám phá câu chuyện của bạn
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-amber-600 text-amber-700 hover:bg-amber-50 px-8 py-4 text-lg bg-transparent"
              >
                Xem demo 3 phút
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-600">Chính xác như GPS</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-gray-600">Nhanh như tia chớp</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl bg-white p-8 shadow-2xl">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Dashboard thông minh"
                className="rounded-lg w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">3.2s</div>
                <div className="text-sm">Thời gian xử lý trung bình</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
