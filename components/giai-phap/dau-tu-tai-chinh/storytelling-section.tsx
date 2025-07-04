import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function StorytellingSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Quote className="w-12 h-12 text-amber-500 mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-8">
              Câu chuyện của những người
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                THỰC SỰ GIÀU CÓ
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-xl bg-gradient-to-br from-red-50 to-pink-50">
              <CardContent className="p-8">
                <div className="text-6xl mb-4">😰</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Anh Minh - 34 tuổi, IT Manager</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "Tôi từng nghĩ mình thông minh khi trade coin. 6 tháng đầu lãi 40 triệu, tháng thứ 7 mất sạch 200
                  triệu. Vợ con suýt bỏ đi."
                </p>
                <div className="text-sm text-red-600 font-semibold">Kết quả: -160 triệu trong 7 tháng</div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8">
                <div className="text-6xl mb-4">😌</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Chị Hoa - 41 tuổi, Dược sĩ</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "Tôi không hiểu gì về chứng khoán. Nhưng sau 2 năm theo hệ thống, tiền gửi ngân hàng 500 triệu giờ
                  thành 720 triệu."
                </p>
                <div className="text-sm text-green-600 font-semibold">Kết quả: +220 triệu trong 24 tháng</div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-amber-200 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Sự khác biệt không phải ở TÀI NĂNG</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Mà ở <span className="font-bold text-amber-600">HỆ THỐNG</span> và
                <span className="font-bold text-amber-600"> KỶ LUẬT</span>. Chúng tôi không dạy bạn làm giàu nhanh.
                Chúng tôi dạy bạn làm giàu <span className="font-bold">CHẮC CHẮN</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
