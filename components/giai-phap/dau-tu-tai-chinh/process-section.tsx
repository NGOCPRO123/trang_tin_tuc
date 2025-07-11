import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Search, Route, Users, BarChart3 } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Chẩn đoán 360°",
      description: "Lắng nghe và phân tích toàn diện để tìm ra vấn đề gốc rễ. Chúng tôi không chỉ nhìn bề nổi mà đi sâu vào từng khía cạnh của doanh nghiệp.",
      icon: Search,
      color: "from-[#CCA776] to-[#CCA776]/80"
    },
    {
      number: "02",
      title: "Xây dựng Lộ trình",
      description: "Thiết kế một lộ trình giải pháp được 'may đo' riêng cho doanh nghiệp của bạn. Không có giải pháp chung chung, chỉ có giải pháp phù hợp.",
      icon: Route,
      color: "from-[#CCA776] to-[#CCA776]/80"
    },
    {
      number: "03",
      title: "Đồng hành Triển khai",
      description: "'Xắn tay áo' cùng bạn thực thi để đảm bảo hiệu quả. Chúng tôi không chỉ tư vấn mà còn đồng hành trong mọi bước triển khai.",
      icon: Users,
      color: "from-[#CCA776] to-[#CCA776]/80"
    },
    {
      number: "04",
      title: "Đo lường & Tối ưu",
      description: "Theo dõi, đánh giá và tinh chỉnh để mang lại kết quả cao nhất. Quá trình không dừng lại ở triển khai mà tiếp tục tối ưu liên tục.",
      icon: BarChart3,
      color: "from-[#CCA776] to-[#CCA776]/80"
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-[#CCA776]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            🔍 Quy trình "Điều tra & Giải mã" của HLCC
          </h2>
          <p className="text-xl text-black mb-8">
            Phương pháp tiếp cận chuyên nghiệp và khác biệt để giải quyết vấn đề doanh nghiệp
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="relative">
                <Card className="mb-8 border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className={`bg-gradient-to-r ${step.color} text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold flex-shrink-0`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <span className="bg-[#CCA776]/10 text-[#CCA776] px-3 py-1 rounded-full text-sm font-bold mr-3">
                            Bước {step.number}
                          </span>
                          <h3 className="text-xl font-bold text-[#CCA776]">{step.title}</h3>
                        </div>
                        <p className="text-black leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {index < steps.length - 1 && (
                  <div className="flex justify-center mb-4">
                    <div className="w-0.5 h-8 bg-[#CCA776]"></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-[#CCA776] hover:bg-[#CCA776]/80 text-white px-8 py-4"
          >
            🔍 Bắt đầu Chẩn đoán Doanh nghiệp
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <div className="text-center mt-8">
          <p className="text-black">
            <span className="font-bold text-[#CCA776]">HLCC</span> - Chuyên gia tư vấn doanh nghiệp hàng đầu
          </p>
        </div>
      </div>
    </section>
  )
}
