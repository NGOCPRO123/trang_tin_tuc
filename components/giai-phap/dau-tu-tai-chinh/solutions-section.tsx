import { CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function SolutionsSection() {
  const solutions = [
    "Đầu tư có tư duy chiến lược – không theo trend",
    "Tư vấn cá nhân hóa – theo khẩu vị rủi ro & kỳ vọng lợi nhuận",
    "Danh mục đa dạng: chứng khoán, trái phiếu, tài sản số hợp pháp",
    "Cập nhật thị trường, báo cáo hiệu quả định kỳ",
    "Có đội ngũ phân tích & cố vấn đầu tư riêng",
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            📊 Chúng tôi mang đến điều gì khác biệt?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Phương pháp đầu tư chuyên nghiệp, minh bạch và có kiểm soát
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-medium text-lg leading-relaxed">{solution}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-green-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 Cam kết của chúng tôi</h3>
            <p className="text-lg text-gray-600">
              Không chỉ tư vấn mà còn đồng hành cùng bạn trong suốt hành trình đầu tư, với sự minh bạch và trách nhiệm
              cao nhất.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
