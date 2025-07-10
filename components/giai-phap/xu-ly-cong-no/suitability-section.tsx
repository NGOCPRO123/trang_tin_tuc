import { X, CheckCircle } from "lucide-react"

export default function SuitabilitySection() {
  const notSuitable = [
    "Bạn ngại đối đầu",
    "Không có chứng từ rõ ràng",
    "Nợ mang tính tình cảm",
    "Giao dịch không chính thức",
  ]

  const suitable = [
    "Bạn là doanh nghiệp",
    "Có hóa đơn, hợp đồng đầy đủ",
    "Tin rằng mình đúng",
    "Muốn giải quyết dứt điểm",
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-black mb-4">Ai phù hợp với dịch vụ này?</h2>
            <p className="text-xl text-black font-bold">Hãy tự đánh giá trước khi quyết định</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Not Suitable */}
            <div className="bg-white/80 rounded-2xl p-8 border border-[#CCA776]/30">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[#CCA776]/30 rounded-full flex items-center justify-center">
                  <X className="w-6 h-6 text-[#CCA776]" />
                </div>
                <h3 className="text-2xl font-bold text-[#CCA776]">Không phù hợp nếu</h3>
              </div>

              <div className="space-y-4">
                {notSuitable.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-[#CCA776] mt-0.5 flex-shrink-0" />
                    <span className="text-black font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suitable */}
            <div className="bg-white/80 rounded-2xl p-8 border border-[#CCA776]/30">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[#CCA776]/30 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-[#CCA776]" />
                </div>
                <h3 className="text-2xl font-bold text-[#CCA776]">Phù hợp nếu</h3>
              </div>

              <div className="space-y-4">
                {suitable.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#CCA776] mt-0.5 flex-shrink-0" />
                    <span className="text-black font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
