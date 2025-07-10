import { Award } from "lucide-react"

export function ResultsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-black mb-4">Minh chứng từ Thực tế</h2>
          <p className="text-xl text-black font-bold max-w-3xl mx-auto">
            Một case study nổi bật về hiệu quả thực sự khi tái cấu trúc hệ thống kế toán - thuế cùng HLCC.
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-[#CCA776]/10 border border-[#CCA776]/30 rounded-2xl p-8 shadow-lg flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-full bg-[#CCA776]/30 mb-4 md:mb-0">
            <Award className="h-12 w-12 text-[#CCA776]" />
          </div>
          <div>
            <h3 className="text-xl font-black mb-2 text-[#CCA776]">Giúp Công ty Thương mại ABC tiết kiệm hơn <span className="text-2xl text-[#CCA776] font-extrabold">800 triệu đồng/năm</span></h3>
            <blockquote className="italic text-black border-l-4 border-[#CCA776] pl-4 mb-4 font-bold">
              "Trước khi làm việc với HLCC, chúng tôi luôn lo lắng và không tận dụng được hết các chính sách ưu đãi về thuế. Sau khi được tư vấn và xây dựng lại quy trình, chúng tôi không chỉ tuân thủ đúng luật mà còn tiết kiệm được một khoản chi phí đáng kể để tái đầu tư."
              <br />
              <span className="block mt-2 font-black text-black">- CEO Công ty ABC</span>
            </blockquote>
            <a
              href="#"
              className="inline-block mt-2 text-[#CCA776] hover:text-[#CCA776] font-black underline text-base"
            >
              Xem chi tiết các dự án Kế toán - Thuế của chúng tôi →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
