import { Award } from "lucide-react"

export function ResultsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Minh chứng từ Thực tế</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Một case study nổi bật về hiệu quả thực sự khi tái cấu trúc hệ thống kế toán - thuế cùng HLCC.
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100 rounded-2xl p-8 shadow-lg flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-full bg-amber-100 mb-4 md:mb-0">
            <Award className="h-12 w-12 text-amber-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-amber-700">Giúp Công ty Thương mại ABC tiết kiệm hơn <span className="text-2xl text-amber-600 font-extrabold">800 triệu đồng/năm</span></h3>
            <blockquote className="italic text-gray-700 border-l-4 border-amber-500 pl-4 mb-4">
              "Trước khi làm việc với HLCC, chúng tôi luôn lo lắng và không tận dụng được hết các chính sách ưu đãi về thuế. Sau khi được tư vấn và xây dựng lại quy trình, chúng tôi không chỉ tuân thủ đúng luật mà còn tiết kiệm được một khoản chi phí đáng kể để tái đầu tư."
              <br />
              <span className="block mt-2 font-semibold text-gray-900">- CEO Công ty ABC</span>
            </blockquote>
            <a
              href="#"
              className="inline-block mt-2 text-amber-700 hover:text-amber-900 font-semibold underline text-base"
            >
              Xem chi tiết các dự án Kế toán - Thuế của chúng tôi →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
