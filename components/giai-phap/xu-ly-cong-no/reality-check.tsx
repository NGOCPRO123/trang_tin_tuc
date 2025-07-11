import { TrendingDown, Clock, DollarSign } from "lucide-react"

export default function RealityCheck() {
  return (
    <section className="py-20 relative overflow-hidden text-white" style={{ backgroundImage: 'url(https://i.pinimg.com/1200x/6f/0d/08/6f0d0817ee02f16de3489aeee9566ddd.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Overlay tối để chữ rõ */}
      <div className="absolute inset-0 bg-black/70 z-0" />
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute top-10 left-10 text-8xl">💸</div>
        <div className="absolute bottom-10 right-10 text-8xl">⏰</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl">🩸</div>
      </div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
              TRONG KHI BẠN CHỜ ĐỢI...
              <br />
              <span className="text-[#CCA776] font-black">HỌ ĐANG LÀM GÌ?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <DollarSign className="w-16 h-16 text-[#CCA776] mx-auto mb-6" />
                <h3 className="text-2xl font-black mb-4">KINH DOANH BẰNG TIỀN CỦA BẠN</h3>
                <p className="text-white font-bold text-lg leading-relaxed">
                  Họ đang dùng 200 triệu của bạn để đầu tư, kinh doanh, sinh lời. Mỗi tháng có thể thu về 20-30 triệu
                  lợi nhuận.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <Clock className="w-16 h-16 text-[#CCA776] mx-auto mb-6" />
                <h3 className="text-2xl font-black mb-4">TRỐN TRÁNH CHUYÊN NGHIỆP</h3>
                <p className="text-white font-bold text-lg leading-relaxed">
                  "Tuần sau trả", "Đang kẹt tiền", "Khách chưa thanh toán"... Họ có cả một bộ từ điển để trì hoãn.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <TrendingDown className="w-16 h-16 text-[#CCA776] mx-auto mb-6" />
                <h3 className="text-2xl font-black mb-4">LÀM HƯ TÀI SẢN</h3>
                <p className="text-white font-bold text-lg leading-relaxed">
                  Chuyển tài sản sang tên người thân, tạo ra các khoản nợ giả để tránh bị thi hành án.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border-4 border-[#CCA776]">
            <div className="text-center">
              <div className="text-6xl mb-6">⚡</div>
              <h3 className="text-3xl font-black mb-6">THỰC TẾ ĐẮNG SỬ</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-xl font-black text-[#CCA776] mb-3">Sau 6 tháng:</h4>
                  <ul className="space-y-2 text-white font-bold">
                    <li>• Họ đã kiếm được 100-150 triệu từ tiền của bạn</li>
                    <li>• Bạn vẫn đang "chờ đợi" và "tin tưởng"</li>
                    <li>• Cơ hội thu hồi giảm xuống 60%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-black text-[#CCA776] mb-3">Sau 1 năm:</h4>
                  <ul className="space-y-2 text-white font-bold">
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
