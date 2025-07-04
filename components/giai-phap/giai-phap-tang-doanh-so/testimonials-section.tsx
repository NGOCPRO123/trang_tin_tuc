"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Nguyễn Văn Minh",
      position: "CEO",
      company: "TechViet Solutions",
      content: "Sau 6 tháng sử dụng, doanh thu của chúng tôi tăng 45%. Đội ngũ hỗ trợ rất chuyên nghiệp và tận tâm.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Trần Thị Lan",
      position: "Giám đốc Marketing",
      company: "Fashion House VN",
      content: "Hệ thống CRM giúp chúng tôi quản lý khách hàng hiệu quả hơn 300%. Chi phí marketing giảm đáng kể.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Lê Hoàng Nam",
      position: "Founder",
      company: "StartupXYZ",
      content:
        "Từ startup 10 người đến doanh nghiệp 100+ nhân viên. Giải pháp này đã đồng hành cùng chúng tôi phát triển.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  const companies = [
    { name: "TechViet", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Fashion House", logo: "/placeholder.svg?height=40&width=120" },
    { name: "StartupXYZ", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Digital Corp", logo: "/placeholder.svg?height=40&width=120" },
    { name: "E-commerce Plus", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Marketing Pro", logo: "/placeholder.svg?height=40&width=120" },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-amber-50 to-yellow-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-6">⭐ Khách hàng tin tưởng</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Khách Hàng Nói Gì Về{" "}
            <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Chúng Tôi
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hơn 500+ doanh nghiệp đã tin tưởng và đạt được kết quả vượt mong đợi
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-amber-400 mb-4" />

                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>

                <div className="flex items-center">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-amber-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Logos */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-center text-lg font-semibold text-gray-600 mb-8">
            Được tin tưởng bởi các doanh nghiệp hàng đầu
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  width={120}
                  height={40}
                  className="opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
