import { Card, CardContent } from "@/components/ui/card"
import { Star, Building2, TrendingUp, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function TestimonialsSection() {
  const caseStudies = [
    {
      title: "VỤ ÁN: GIẢI CỨU DÒNG TIỀN",
      company: "Công ty ABC",
      industry: "Sản xuất",
      problem: "Dòng tiền âm, nợ ngắn hạn cao",
      solution: "Tái cấu trúc nợ, tối ưu vận hành",
      result: "Dòng tiền dương trở lại sau 6 tháng",
      improvement: "+45% hiệu quả vận hành",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "VỤ ÁN: TÁI CẤU TRÚC TÀI CHÍNH",
      company: "Công ty XYZ",
      industry: "Thương mại",
      problem: "Hệ thống kế toán lỗi thời, rủi ro pháp lý",
      solution: "Xây dựng hệ thống quản trị tài chính",
      result: "Tuân thủ 100%, giảm 30% chi phí",
      improvement: "+60% lợi nhuận sau 1 năm",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const testimonials = [
    {
      name: "Ông Nguyễn Văn A",
      title: "CEO - Công ty ABC",
      content: "HLCC không chỉ tư vấn mà còn đồng hành cùng chúng tôi trong suốt quá trình tái cấu trúc. Kết quả vượt mong đợi.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Bà Trần Thị B",
      title: "Giám đốc Tài chính - Công ty XYZ",
      content: "Hệ thống quản trị tài chính mới giúp chúng tôi kiểm soát tốt hơn và đưa ra quyết định chính xác hơn.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="py-20 bg-[#CCA776]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            🏆 Hồ sơ Vụ án: Những Câu chuyện Thành công
          </h2>
          <p className="text-xl text-black">
            Bằng chứng thực tế về khả năng giải quyết vấn đề doanh nghiệp của HLCC
          </p>
        </div>

        {/* Case Studies */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {caseStudies.map((caseStudy, index) => (
            <Card
              key={index}
              className="border-2 border-[#CCA776] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Building2 className="w-6 h-6 text-[#CCA776] mr-2" />
                  <h3 className="text-xl font-bold text-[#CCA776]">{caseStudy.title}</h3>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-black">Công ty:</span>
                    <span className="font-semibold text-black">{caseStudy.company}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Ngành:</span>
                    <span className="font-semibold text-black">{caseStudy.industry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Vấn đề:</span>
                    <span className="font-semibold text-black">{caseStudy.problem}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Giải pháp:</span>
                    <span className="font-semibold text-black">{caseStudy.solution}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Kết quả:</span>
                    <span className="font-semibold text-black">{caseStudy.result}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Cải thiện:</span>
                    <span className="font-semibold text-black">{caseStudy.improvement}</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full border-[#CCA776] text-[#CCA776] hover:bg-[#CCA776] hover:text-white font-bold">
                  Xem chi tiết vụ án
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-black mb-4">
            💬 Những Đối tác đã Tin tưởng và Cùng HLCC Giải mã
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-[#CCA776] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#CCA776] fill-current" />
                  ))}
                </div>

                <blockquote className="text-black mb-6 leading-relaxed font-medium">"{testimonial.content}"</blockquote>

                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full mr-4 border-2 border-[#CCA776]"
                  />
                  <div>
                    <h4 className="font-bold text-[#CCA776]">{testimonial.name}</h4>
                    <p className="text-black text-sm font-semibold">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Logo Section */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold text-[#CCA776] mb-8">
            Đối tác tin tưởng HLCC
          </h3>
          <div className="flex justify-center items-center space-x-8">
            <div className="w-24 h-12 bg-[#CCA776] rounded flex items-center justify-center text-white font-bold">
              Logo 1
            </div>
            <div className="w-24 h-12 bg-[#CCA776] rounded flex items-center justify-center text-white font-bold">
              Logo 2
            </div>
            <div className="w-24 h-12 bg-[#CCA776] rounded flex items-center justify-center text-white font-bold">
              Logo 3
            </div>
            <div className="w-24 h-12 bg-[#CCA776] rounded flex items-center justify-center text-white font-bold">
              Logo 4
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
