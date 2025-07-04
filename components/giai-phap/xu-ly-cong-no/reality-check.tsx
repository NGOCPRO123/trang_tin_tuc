import { TrendingDown, Clock, DollarSign } from "lucide-react"

export default function RealityCheck() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-900 to-orange-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-8xl">💸</div>
        <div className="absolute bottom-10 right-10 text-8xl">⏰</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl">🩸</div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
              TRONG KHI BẠN CHỜ ĐỢI...
              <br />
              <span className="text-yellow-400">HỌ ĐANG LÀM GÌ?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <DollarSign className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">KINH DOANH BẰNG TIỀN CỦA BẠN</h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Họ đang dùng 200 triệu của bạn để đầu tư, kinh doanh, sinh lời. Mỗi tháng có thể thu về 20-30 triệu
                  lợi nhuận.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <Clock className="w-16 h-16 text-red-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">TRỐN TRÁNH CHUYÊN NGHIỆP</h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  "Tuần sau trả", "Đang kẹt tiền", "Khách chưa thanh toán"... Họ có cả một bộ từ điển để trì hoãn.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <TrendingDown className="w-16 h-16 text-orange-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">LÀM HƯ TÀI SẢN</h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Chuyển tài sản sang tên người thân, tạo ra các khoản nợ giả để tránh bị thi hành án.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border-4 border-yellow-400">
            <div className="text-center">
              <div className="text-6xl mb-6">⚡</div>
              <h3 className="text-3xl lg:text-4xl font-black mb-6">THỰC TẾ ĐÁNG SỢ</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-xl font-bold text-yellow-400 mb-3">Sau 6 tháng:</h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>• Họ đã kiếm được 100-150 triệu từ tiền của bạn</li>
                    <li>• Bạn vẫn đang "chờ đợi" và "tin tưởng"</li>
                    <li>• Cơ hội thu hồi giảm xuống 60%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-400 mb-3">Sau 1 năm:</h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>• Họ có thể đã "biến mất" hoặc phá sản giả</li>
                    <li>• Bạn mất cả gốc lẫn lãi</li>
                    <li>• Cơ hội thu hồi chỉ còn 20%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
