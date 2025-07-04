import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react"

const problems = [
  {
    problem: "Bảo vệ ngủ gật lúc 3h sáng",
    solution: "Hệ thống giám sát sinh trắc học 24/7",
    impact: "100% tỉnh táo mọi lúc",
  },
  {
    problem: "Phát hiện muộn = mất trắng",
    solution: "AI phân tích hành vi bất thường",
    impact: "Cảnh báo trước 30 giây",
  },
  {
    problem: "Một người không thể ở khắp nơi",
    solution: "Mạng lưới phối hợp đồng bộ",
    impact: "Phủ sóng 360° không kẽ hở",
  },
]

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Tại sao 90% dịch vụ bảo vệ <span className="text-red-600">THẤT BẠI</span>?
            </h2>
            <p className="text-xl text-gray-600">Và tại sao chúng tôi khác biệt hoàn toàn</p>
          </div>

          <div className="space-y-12">
            {problems.map((item, index) => (
              <div key={index} className="relative">
                {/* Connecting line */}
                {index < problems.length - 1 && (
                  <div className="absolute left-1/2 bottom-0 w-0.5 h-12 bg-gradient-to-b from-yellow-400 to-transparent transform translate-y-full"></div>
                )}

                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  {/* Problem */}
                  <div className="bg-red-100 rounded-2xl p-6 border-l-4 border-red-500">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-red-800 mb-2">VẤN ĐỀ THƯỜNG GẶP</h3>
                        <p className="text-red-700">{item.problem}</p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="bg-yellow-400 rounded-full p-3">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="bg-green-100 rounded-2xl p-6 border-l-4 border-green-500">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-green-800 mb-2">GIẢI PHÁP CỦA CHÚNG TÔI</h3>
                        <p className="text-green-700 mb-2">{item.solution}</p>
                        <div className="text-sm font-medium text-green-600 bg-green-200 px-3 py-1 rounded-full inline-block">
                          {item.impact}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
