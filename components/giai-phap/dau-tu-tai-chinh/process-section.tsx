import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Tư vấn khẩu vị rủi ro & mục tiêu lợi nhuận",
      description: "Phân tích tình hình tài chính và xác định mục tiêu đầu tư phù hợp",
    },
    {
      number: "02",
      title: "Xây dựng chiến lược phân bổ tài sản cá nhân hóa",
      description: "Thiết kế danh mục đầu tư tối ưu dựa trên profile rủi ro của bạn",
    },
    {
      number: "03",
      title: "Chọn kênh phù hợp (cổ phiếu – trái phiếu – tài sản số)",
      description: "Lựa chọn các công cụ đầu tư phù hợp với chiến lược đã định",
    },
    {
      number: "04",
      title: "Cập nhật hiệu quả định kỳ & điều chỉnh danh mục",
      description: "Theo dõi và báo cáo hiệu quả đầu tư thường xuyên",
    },
    {
      number: "05",
      title: "Tối ưu lãi – kiểm soát lỗ – không để mất kiểm soát",
      description: "Quản lý rủi ro chặt chẽ và tối ưu hóa lợi nhuận liên tục",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">🧠 Mô hình đầu tư có kiểm soát</h2>
          <p className="text-xl text-gray-600 mb-8">QUY TRÌNH 5 BƯỚC ĐẦU TƯ THÔNG MINH</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="mb-8 border-yellow-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="flex justify-center mb-4">
                  <ArrowRight className="w-6 h-6 text-yellow-500" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-yellow-400 text-yellow-700 hover:bg-yellow-50 px-8 py-4 bg-transparent"
          >
            🧾 Xem ví dụ danh mục thực tế
          </Button>
        </div>
      </div>
    </section>
  )
}
