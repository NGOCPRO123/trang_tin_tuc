import { AlertTriangle, X, Search, Briefcase, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ProblemsSection() {
  const problems = [
    "Chỉ chữa 'triệu chứng' thay vì 'căn bệnh'",
    "Tư vấn đơn lẻ, không toàn diện",
    "Thiếu hiểu biết về vấn đề gốc rễ",
    "Giải pháp tạm bợ, không bền vững",
    "Không có lộ trình rõ ràng",
    "Thiếu đồng hành trong triển khai",
    "Không đo lường hiệu quả thực tế",
    "Tư vấn chung chung, không cá nhân hóa",
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
            <h2 className="text-3xl lg:text-4xl font-bold text-black">
              Tại sao các giải pháp thông thường thất bại?
            </h2>
          </div>
          <p className="text-xl text-black max-w-4xl mx-auto">
            Một doanh nghiệp không thất bại vì một lý do duy nhất. Nó sụp đổ bởi một chuỗi các vấn đề liên kết: 
            một giải pháp tài chính tạm bợ, một quy trình kế toán lỗi thời, một chiến lược kinh doanh không còn phù hợp. 
            Việc chỉ chữa "triệu chứng" sẽ không bao giờ giải quyết được "căn bệnh".
          </p>
          <p className="text-lg text-[#CCA776] font-bold mt-4">
            Tại HLCC, chúng tôi tiếp cận doanh nghiệp của bạn như một "hiện trường" cần được điều tra để tìm ra "hung thủ" thật sự.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => (
            <Card key={index} className="border-red-200 hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-black font-medium">{problem}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-[#CCA776]/20 to-[#CCA776]/10 rounded-2xl p-8 max-w-4xl mx-auto border border-[#CCA776]">
            <div className="flex items-center justify-center mb-4">
              <Search className="w-8 h-8 text-[#CCA776] mr-3" />
              <h3 className="text-2xl font-bold text-black">
                Phương pháp "Điều tra & Giải mã" của HLCC
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="flex items-center space-x-3">
                <Briefcase className="w-6 h-6 text-[#CCA776]" />
                <span className="text-black font-bold">Chẩn đoán 360°</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-[#CCA776]" />
                <span className="text-black font-bold">Giải pháp toàn diện</span>
              </div>
              <div className="flex items-center space-x-3">
                <Search className="w-6 h-6 text-[#CCA776]" />
                <span className="text-black font-bold">Đồng hành triển khai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
