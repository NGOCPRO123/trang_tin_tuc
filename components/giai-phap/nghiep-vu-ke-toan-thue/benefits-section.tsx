import { Heart, Lightbulb, Rocket, Shield, Smile, Zap } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Smile,
      title: "Ngủ ngon hơn mỗi đêm",
      description: "Không còn thức trắng lo lắng về deadline thuế hay sai sót trong báo cáo",
    },
    {
      icon: Shield,
      title: "Miễn dịch với 'cú sốc' thuế",
      description: "Hệ thống cảnh báo sớm giúp bạn tránh xa mọi rủi ro pháp lý",
    },
    {
      icon: Lightbulb,
      title: "Hiểu rõ 'tính cách' doanh nghiệp",
      description: "Báo cáo như cuốn tiểu thuyết - dễ đọc, dễ hiểu, đầy insight",
    },
    {
      icon: Rocket,
      title: "Tư vấn như có CFO riêng",
      description: "Không chỉ ghi số mà còn đưa ra lời khuyên chiến lược tài chính",
    },
    {
      icon: Zap,
      title: "Tiết kiệm như 'phép màu'",
      description: "Chi phí chỉ bằng 1/3 so với tuyển kế toán fulltime, hiệu quả gấp đôi",
    },
    {
      icon: Heart,
      title: "Tối ưu thuế 'không đau'",
      description: "Giảm thuế hợp pháp mà không cần lo lắng về rủi ro",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Những "Phép Màu" Bạn Sẽ Trải Nghiệm</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Không chỉ là lợi ích - đây là những thay đổi tích cực bạn sẽ cảm nhận được ngay
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                  <benefit.icon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="text-green-500 mr-2">✨</span>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hành Trình Thay Đổi</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-red-500 font-bold">😰 TRƯỚC:</span>
                  <span className="text-gray-700">Căng thẳng, mệt mỏi, lo lắng</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 font-bold">😊 SAU:</span>
                  <span className="text-gray-700">Thư thái, tự tin, tập trung phát triển</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">3x</div>
              <div className="text-gray-700">Hiệu quả công việc tăng lên</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
