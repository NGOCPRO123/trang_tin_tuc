import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      company: "Xưởng Gỗ Minh Phát",
      industry: "Sản xuất thủ công",
      customerName: "Anh Minh - Chủ xưởng",
      rating: 5,
      feedback:
        "Trước đây tôi sợ nhất là cuối tháng - giờ thì tôi chờ đợi báo cáo như chờ đợi tin vui. Họ biến những con số khô khan thành câu chuyện thú vị về xưởng gỗ của tôi.",
      results: "Phát hiện được 15 triệu tiết kiệm thuế hợp pháp",
      avatar: "/placeholder.svg?height=80&width=80",
      mood: "😊",
    },
    {
      company: "App FoodieGo",
      industry: "Startup công nghệ",
      customerName: "Chị Lan - Co-founder",
      rating: 5,
      feedback:
        "Như có thêm một co-founder am hiểu tài chính. Họ không chỉ làm kế toán mà còn tư vấn chiến lược tài chính giúp startup tôi tăng trưởng bền vững.",
      results: "Tăng 40% hiệu quả quản lý cash flow",
      avatar: "/placeholder.svg?height=80&width=80",
      mood: "🚀",
    },
    {
      company: "Chuỗi Café Xanh",
      industry: "F&B",
      customerName: "Anh Đức - Giám đốc",
      rating: 5,
      feedback:
        "Từ 1 quán café thành chuỗi 5 cửa hàng, họ đồng hành từng bước. Báo cáo tài chính giờ đây như bản đồ chỉ đường cho việc mở rộng kinh doanh.",
      results: "Mở rộng từ 1 lên 5 cửa hàng trong 2 năm",
      avatar: "/placeholder.svg?height=80&width=80",
      mood: "☕",
    },
  ]

  return (
    <section className="py-20 bg-[#CCA776]/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-black mb-4">Những Câu Chuyện "Có Thật"</h2>
          <p className="text-xl text-black font-bold max-w-3xl mx-auto">
            Không phải review dàn dựng - đây là những chia sẻ chân thành từ trái tim
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#CCA776]/30 flex items-center justify-center text-2xl">
                        {testimonial.mood}
                      </div>
                      <div>
                        <div className="font-black text-black text-sm">{testimonial.company}</div>
                        <div className="text-xs text-black font-bold">{testimonial.industry}</div>
                      </div>
                    </div>
                    <Quote className="h-6 w-6 text-[#CCA776] flex-shrink-0" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#CCA776] text-[#CCA776]" />
                    ))}
                    <span className="text-xs text-black font-bold ml-2">Hài lòng 100%</span>
                  </div>

                  {/* Feedback */}
                  <blockquote className="text-black text-sm font-bold leading-relaxed italic bg-gray-50 p-3 rounded-lg">
                    "{testimonial.feedback}"
                  </blockquote>

                  {/* Customer info */}
                  <div className="text-sm text-black font-bold">
                    <strong>{testimonial.customerName}</strong>
                  </div>

                  {/* Results */}
                  <div className="bg-[#CCA776]/10 border border-[#CCA776]/30 rounded-lg p-3">
                    <div className="text-xs text-[#CCA776] font-medium">THÀNH QUẢ THỰC TẾ:</div>
                    <div className="text-sm text-[#CCA776] font-semibold">{testimonial.results}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-md">
            <Star className="h-5 w-5 text-[#CCA776] mr-2" />
            <span className="text-black font-bold">
              Điểm hài lòng <span className="text-[#CCA776] font-black">4.9/5</span> từ 600+ "người bạn" doanh nghiệp
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
