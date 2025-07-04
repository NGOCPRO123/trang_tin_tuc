import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Chị Hằng",
      title: "Chủ spa",
      content:
        "Tôi không có thời gian theo dõi thị trường, nhưng vẫn kiểm soát được dòng tiền đầu tư rõ ràng từng tuần.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Anh Phong",
      title: "Giám đốc bán hàng",
      content: "Thích nhất là không bị ép mua sản phẩm. Họ cho tôi hiểu trước khi bắt đầu.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Chị Mai",
      title: "Kế toán trưởng",
      content: "Báo cáo định kỳ rất chi tiết, tôi biết chính xác tiền của mình đang ở đâu và sinh lời như thế nào.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">🗣️ Phản hồi từ nhà đầu tư thực tế</h2>
          <p className="text-xl text-gray-600">Những chia sẻ chân thực từ khách hàng của chúng tôi</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-purple-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</blockquote>

                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full mr-4 border-2 border-purple-200"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-purple-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
