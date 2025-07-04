import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TeamSection() {
  const experts = [
    {
      name: "Minh 'Thám Tử Số'",
      title: "Chuyên gia Giải Mã Tài Chính",
      experience: "12 năm 'phá án' kế toán",
      specialization: "Doanh nghiệp sản xuất & startup công nghệ",
      quote: "Mỗi con số đều kể một câu chuyện - tôi chỉ việc lắng nghe và dịch thuật",
      superpower: "Phát hiện sai sót trong 30 giây",
      certifications: ["CPA Master", "Thuế Ninja", "Excel Wizard"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Hùng 'Pháp Sư Thuế'",
      title: "Chuyên gia Tối Ưu Thuế",
      experience: "15 năm 'chiến đấu' với thuế",
      specialization: "Thương mại điện tử & dịch vụ số",
      quote: "Thuế không phải kẻ thù - chỉ cần biết cách 'làm bạn' với nó",
      superpower: "Tiết kiệm thuế mà không vi phạm pháp luật",
      certifications: ["Thuế Master", "Luật Guru", "Tối ưu Pro"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Hoa 'Bác Sĩ Sổ Sách'",
      title: "Chuyên gia Chữa Trị Tài Chính",
      experience: "10 năm 'cứu chữa' doanh nghiệp",
      specialization: "SME & hộ kinh doanh gia đình",
      quote: "Không có sổ sách nào tôi không thể 'hồi sinh' - đó là lời hứa",
      superpower: "Phục hồi dữ liệu từ tình trạng 'hỗn loạn'",
      certifications: ["Kiểm toán Pro", "Phục hồi Expert", "Tư vấn Master"],
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-yellow-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Đội "Siêu Anh Hùng" Tài Chính</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Không phải nhân viên thông thường - đây là những "siêu anh hùng" với năng lực đặc biệt
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg border-0 hover:shadow-xl transition-all hover:scale-105 overflow-hidden"
            >
              <div className="relative">
                <img src={expert.image || "/placeholder.svg"} alt={expert.name} className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                    {expert.experience}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs">
                  ⚡ {expert.superpower}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{expert.name}</h3>
                    <p className="text-amber-600 font-medium">{expert.title}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {expert.certifications.map((cert, certIndex) => (
                      <Badge
                        key={certIndex}
                        variant="outline"
                        className="text-xs bg-gradient-to-r from-blue-50 to-indigo-50"
                      >
                        {cert}
                      </Badge>
                    ))}
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Chuyên trị:</strong> {expert.specialization}
                    </p>
                  </div>

                  <blockquote className="border-l-4 border-amber-500 pl-4 italic text-gray-700 text-sm bg-amber-50 p-3 rounded-r-lg">
                    💬 "{expert.quote}"
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-md">
            <span className="text-gray-700 font-medium">
              Tổng cộng <span className="text-amber-600 font-bold">37 năm kinh nghiệm</span> +{" "}
              <span className="text-blue-600 font-bold">∞ đam mê</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
