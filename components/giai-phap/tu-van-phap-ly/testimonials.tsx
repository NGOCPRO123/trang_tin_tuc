"use client"

import { Quote, Star, CheckCircle } from "lucide-react"

const testimonials = [
  {
    client: "Anh Minh - Doanh nhân",
    content:
      "Luật sư hỗ trợ tôi giải quyết tranh chấp hợp đồng trong 10 ngày, tránh kiện tụng tốn kém. Rất chuyên nghiệp!",
    case: "Tranh chấp hợp đồng kinh doanh",
    rating: 5,
    result: "Tiết kiệm 500 triệu đồng",
    color: "from-[#CCA776] to-[#CCA776]",
  },
  {
    client: "Chị Lan - Giáo viên",
    content: "Đội ngũ luật sư rất tận tâm, hỗ trợ tôi trong vụ thừa kế phức tạp. Kết quả vượt mong đợi.",
    case: "Thừa kế tài sản gia đình",
    rating: 5,
    result: "Giải quyết trong 3 tuần",
    color: "from-[#CCA776] to-[#CCA776]",
  },
  {
    client: "Anh Tuấn - Kỹ sư",
    content: "Cảm ơn công ty luật đã giúp tôi bảo vệ quyền lợi trong vụ ly hôn phức tạp. Rất hài lòng!",
    case: "Ly hôn và phân chia tài sản",
    rating: 5,
    result: "Bảo vệ 80% tài sản",
    color: "from-[#CCA776] to-[#CCA776]",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#CCA776]/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#CCA776]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#CCA776]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 border border-[#CCA776]/40 mb-6">
            <CheckCircle className="w-4 h-4 text-[#CCA776]" />
            <span className="text-sm font-medium text-[#CCA776]">Khách hàng tin tưởng</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">
            Câu chuyện <span className="text-[#CCA776] font-black">Thành công</span>
          </h2>

          <p className="text-xl text-black font-bold max-w-2xl mx-auto">
            Những kết quả thực tế từ khách hàng đã tin tưởng chúng tôi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Decorative background */}
              <div
                className={`absolute top-0 right-0 w-24 h-24 bg-[#CCA776] opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                {/* Quote icon */}
                <div className="flex justify-between items-start mb-6">
                  <Quote className={`w-10 h-10 text-slate-300`} />

                  {/* Rating stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#CCA776]" fill="currentColor" />
                    ))}
                  </div>
                </div>

                {/* Testimonial content */}
                <blockquote className="text-black mb-6 leading-relaxed text-lg font-bold">"{testimonial.content}"</blockquote>

                {/* Result badge */}
                <div
                  className={`inline-flex items-center gap-2 bg-[#CCA776] rounded-full px-4 py-2 mb-6`}
                >
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-medium">{testimonial.result}</span>
                </div>

                {/* Client info */}
                <div className="border-t border-slate-200 pt-6">
                  <div className="font-extrabold text-black mb-1">{testimonial.client}</div>
                  <div className="text-sm text-black font-bold">{testimonial.case}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-black font-bold mb-4">Bạn cũng muốn có câu chuyện thành công như vậy?</p>
          <div className="inline-flex items-center gap-2 bg-[#CCA776] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-shadow cursor-pointer">
            <span>Bắt đầu ngay hôm nay</span>
            <CheckCircle className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  )
}
