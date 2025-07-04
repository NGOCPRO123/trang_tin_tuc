import { Phone, FileText, Scale, CheckCircle } from "lucide-react"

export default function ProcessTimeline() {
  const steps = [
    {
      icon: Phone,
      day: "Ngày 1",
      title: "CUỘC GỌI ĐẦU TIÊN",
      description: "Không phải 'xin ơn' hay 'van lạy'. Chúng tôi gọi để THÔNG BÁO họ sẽ phải trả.",
      result: "70% trường hợp có phản hồi ngay",
    },
    {
      icon: FileText,
      day: "Ngày 2-3",
      title: "RÀ SOÁT PHÁP LÝ",
      description: "Kiểm tra tất cả giấy tờ, tìm điểm yếu của họ, chuẩn bị 'đạn dược' pháp lý.",
      result: "Xây dựng chiến lược cụ thể",
    },
    {
      icon: Scale,
      day: "Ngày 4-7",
      title: "ÁP LỰC PHÁP LÝ",
      description: "Gửi thông báo chính thức, liệt kê hậu quả nếu không thanh toán. Không đe dọa, chỉ nói sự thật.",
      result: "85% bắt đầu thương lượng",
    },
    {
      icon: CheckCircle,
      day: "Ngày 8-30",
      title: "THU HỒI THÀNH CÔNG",
      description: "Thương lượng phương án trả, giám sát quá trình, đảm bảo bạn nhận được tiền.",
      result: "94% thu hồi thành công",
    },
  ]

  return (
    <section className="py-20 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              ⚡ QUY TRÌNH TỐC HÀNH
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              30 NGÀY
              <br />
              <span className="text-green-600">TỪ NỢ THÀNH TIỀN</span>
            </h2>
            <p className="text-xl text-gray-600">
              Không lý thuyết, không hứa hão. Đây là quy trình thực tế chúng tôi áp dụng.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 to-green-600 hidden lg:block"></div>

            <div className="space-y-16">
              {steps.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div
                    key={index}
                    className={`flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col lg:space-x-8`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"} text-center lg:text-left mb-8 lg:mb-0`}
                    >
                      <div className="bg-white rounded-2xl p-8 shadow-xl border-4 border-green-200">
                        <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                          <div className="bg-green-100 rounded-full p-2">
                            <IconComponent className="w-6 h-6 text-green-600" />
                          </div>
                          <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                            {step.day}
                          </div>
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 mb-4">{step.title}</h3>
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">{step.description}</p>
                        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
                          <div className="text-green-800 font-semibold">✅ {step.result}</div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="relative z-10 hidden lg:block">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden lg:block"></div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 lg:p-12 border-4 border-green-200">
            <div className="text-center">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-3xl font-black text-gray-900 mb-6">TẠI SAO HIỆU QUẢ ĐẾN VẬY?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="bg-white/80 rounded-xl p-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">🧠 TÂM LÝ HỌC</h4>
                  <p className="text-gray-700">
                    Chúng tôi hiểu tâm lý người nợ. Biết cách tạo áp lực mà không vi phạm pháp luật.
                  </p>
                </div>
                <div className="bg-white/80 rounded-xl p-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">⚖️ PHÁP LÝ</h4>
                  <p className="text-gray-700">Mỗi bước đều có căn cứ pháp lý. Họ biết chúng tôi không nói suông.</p>
                </div>
                <div className="bg-white/80 rounded-xl p-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">⏰ THỜI GIAN</h4>
                  <p className="text-gray-700">Hành động nhanh trước khi họ kịp "xử lý" tài sản hoặc biến mất.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
