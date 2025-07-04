import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, DollarSign } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Tiền của bạn đang nằm trong túi <span className="text-yellow-600">người khác</span> bao lâu rồi?
            </h1>

            <p className="text-xl lg:text-2xl text-gray-700 mb-4 leading-relaxed">
              Đừng để dòng tiền tắc nghẽn chỉ vì bạn ngại đòi nợ.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Chúng tôi là đơn vị xử lý công nợ{" "}
              <span className="font-semibold text-yellow-700">âm thầm – hợp pháp – hiệu quả.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              Tôi cần hỗ trợ thu nợ ngay
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-yellow-400 text-yellow-700 hover:bg-yellow-50 px-8 py-4 text-lg rounded-xl bg-transparent"
            >
              <Clock className="w-5 h-5 mr-2" />
              Tư vấn miễn phí
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200">
              <div className="text-3xl font-bold text-yellow-600 mb-2">95%</div>
              <div className="text-gray-700">Tỷ lệ thu hồi thành công</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200">
              <div className="text-3xl font-bold text-yellow-600 mb-2">7 ngày</div>
              <div className="text-gray-700">Thời gian trung bình</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200">
              <div className="text-3xl font-bold text-yellow-600 mb-2">500+</div>
              <div className="text-gray-700">Khách hàng tin tưởng</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
