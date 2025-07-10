import { Calendar, DollarSign, Clock, CheckCircle } from "lucide-react"

export default function CaseStudySection() {
  return (
    <section className="py-20 bg-white/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-black mb-4">Câu chuyện thực tế</h2>
            <p className="text-xl text-black font-bold">Không lý thuyết, chỉ có kết quả</p>
          </div>

          <div className="bg-white/80 rounded-2xl p-8 lg:p-12 border border-[#CCA776]/30 shadow-lg">
            <div className="flex items-start space-x-4 mb-8">
              <div className="w-12 h-12 bg-[#CCA776]/30 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#CCA776] font-bold text-lg">📍</span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-black mb-2">Công ty thương mại điện tử</h3>
                <div className="flex items-center space-x-4 text-black font-bold">
                  <div className="flex items-center space-x-1">
                    <DollarSign className="w-4 h-4" />
                    <span>Nợ 120 triệu</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Từ tháng 5/2023</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#CCA776]/10 rounded-xl p-6 border-l-4 border-[#CCA776]">
                <h4 className="font-black text-black mb-2">Tình huống ban đầu:</h4>
                <p className="text-black font-bold">Khách trì hoãn, né điện thoại, khất nhiều lần nhưng không có kết quả.</p>
              </div>

              <div className="bg-[#CCA776]/10 rounded-xl p-6 border-l-4 border-[#CCA776]">
                <h4 className="font-black text-black mb-2">Hành động của chúng tôi:</h4>
                <p className="text-black font-bold">
                  Tiếp cận đúng người ký, phân tích hậu quả pháp lý một cách rõ ràng và chuyên nghiệp.
                </p>
              </div>

              <div className="bg-[#CCA776]/10 rounded-xl p-6 border-l-4 border-[#CCA776]">
                <h4 className="font-black text-black mb-2">Kết quả:</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-black font-bold">
                    <Clock className="w-5 h-5 text-[#CCA776]" />
                    <span className="text-gray-700">
                      <span className="font-semibold">5 ngày sau:</span> Bên kia chuyển 1 lần 50 triệu
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-black font-bold">
                    <CheckCircle className="w-5 h-5 text-[#CCA776]" />
                    <span className="text-gray-700">
                      <span className="font-semibold">Sau 30 ngày:</span> Toàn bộ khoản nợ được thu hồi
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
