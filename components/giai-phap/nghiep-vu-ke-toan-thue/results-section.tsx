import { Award, Coffee, Heart, Zap } from "lucide-react"

export function ResultsSection() {
  const stats = [
    {
      icon: Heart,
      number: "600+",
      label: "Doanh nghiệp 'yêu' chúng tôi",
      description: "Từ startup 2 người đến tập đoàn nghìn nhân viên",
    },
    {
      icon: Zap,
      number: "99.8%",
      label: "Tỷ lệ 'không lỗi' trong năm 2024",
      description: "Chính xác như đồng hồ Thụy Sĩ",
    },
    {
      icon: Coffee,
      number: "73%",
      label: "Giảm stress cho chủ doanh nghiệp",
      description: "Ngủ ngon hơn, cà phê ít hơn",
    },
    {
      icon: Award,
      number: "200+",
      label: "Lần 'vượt qua' thanh tra thuế",
      description: "Không ai bị phạt nghiêm trọng - đó là kỷ lục",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Những Con Số "Biết Nói"</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Không phải thống kê khô khan - đây là những câu chuyện thành công thực tế
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl p-8 mb-4 group-hover:shadow-lg transition-all group-hover:scale-105">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <stat.icon className="h-8 w-8 text-amber-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Lời Hứa "Vàng"</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-semibold text-gray-800">Chính xác 100%</div>
                <div className="text-sm text-gray-600">Hoặc hoàn tiền</div>
              </div>
              <div>
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-semibold text-gray-800">Phản hồi trong 2h</div>
                <div className="text-sm text-gray-600">Kể cả cuối tuần</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🔒</div>
                <div className="font-semibold text-gray-800">Bí mật tuyệt đối</div>
                <div className="text-sm text-gray-600">Như két sắt ngân hàng</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
