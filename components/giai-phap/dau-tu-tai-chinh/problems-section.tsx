import { AlertTriangle, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ProblemsSection() {
  const problems = [
    "Không có chiến lược dài hạn",
    "Giao dịch theo cảm xúc, lời đồn",
    "Thiếu kiến thức tài chính",
    "Dễ bị lừa đảo bởi cam kết ảo",
    "Không phân bổ rủi ro hợp lý",
    "Đặt hết vào 1 kênh đầu tư",
    "Không kiểm soát được thời gian",
    "Đầu tư nhưng không theo dõi thường xuyên",
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">📉 Tại sao nhiều người đầu tư thất bại?</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tấn công vấn đề trực tiếp – để người đọc cảm thấy "mình cũng vậy"
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => (
            <Card key={index} className="border-red-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">{problem}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-100 to-amber-100 rounded-2xl p-8 max-w-4xl mx-auto border border-yellow-200">
            <p className="text-2xl font-semibold text-gray-800 mb-4">
              👉 Chúng tôi giúp bạn đầu tư theo cách người chuyên nghiệp làm
            </p>
            <p className="text-xl text-gray-600">
              <span className="font-bold text-yellow-700">Chậm, chắc và thông minh.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
