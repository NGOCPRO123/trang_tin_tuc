import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

export function PackagesSection() {
  const packages = [
    {
      name: "Gói Tư Vấn Cơ Bản",
      price: "Miễn phí",
      description: "Tư vấn 1 lần – miễn phí",
      features: ["Phân tích khẩu vị & mục tiêu", "Gợi ý danh mục khởi đầu", "Không cần đăng ký dịch vụ"],
      popular: false,
      buttonText: "Đăng ký ngay",
      buttonVariant: "outline" as const,
    },
    {
      name: "Gói Chiến Lược",
      price: "2.5 triệu/tháng",
      description: "Gói Chiến Lược",
      features: [
        "Tư vấn khẩu vị & mục tiêu",
        "Setup danh mục & hỗ trợ mở tài khoản",
        "Có hợp đồng rõ ràng",
        "Hỗ trợ email & chat",
      ],
      popular: true,
      buttonText: "Chọn gói này",
      buttonVariant: "default" as const,
    },
    {
      name: "Gói Cố Vấn Định Kỳ",
      price: "5 triệu/tháng",
      description: "Dành cho nhà đầu tư từ 200 triệu",
      features: [
        "Theo dõi đầu tư hàng tuần",
        "Cập nhật điều chỉnh, hỗ trợ 24/7",
        "Cố vấn cá nhân riêng",
        "Báo cáo chi tiết hàng tháng",
        "Tư vấn chiến lược dài hạn",
      ],
      popular: false,
      buttonText: "Liên hệ tư vấn",
      buttonVariant: "outline" as const,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">🧾 Gói tư vấn đầu tư / Đăng ký dùng thử</h2>
          <p className="text-xl text-black">Chọn gói phù hợp với nhu cầu và ngân sách của bạn</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                pkg.popular ? "border-[#CCA776] shadow-lg" : "border-gray-200"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[#CCA776] text-white px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    Phổ biến nhất
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-black mb-2">{pkg.name}</CardTitle>
                <div className="text-3xl font-bold text-[#CCA776] mb-2">{pkg.price}</div>
                <p className="text-black">{pkg.description}</p>
              </CardHeader>

              <CardContent className="pt-4">
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-[#CCA776] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-black">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-3 ${
                    pkg.buttonVariant === "default"
                      ? "bg-[#CCA776] hover:bg-[#CCA776]/80 text-white"
                      : "border-2 border-[#CCA776] text-[#CCA776] hover:bg-[#CCA776] hover:text-white"
                  }`}
                  variant={pkg.buttonVariant}
                >
                  {pkg.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-[#CCA776] hover:bg-[#CCA776]/80 text-white px-8 py-4"
          >
            <span className="inline-block w-4 h-4 rounded-full bg-white mr-2 align-middle"></span>
            Chọn gói phù hợp
          </Button>
        </div>
      </div>
    </section>
  )
}
