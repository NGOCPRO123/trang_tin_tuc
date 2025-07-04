import { Shield, CheckCircle, Lock, UserCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function TrustSection() {
  const commitments = [
    {
      icon: CheckCircle,
      title: "Không cam kết lãi suất ảo",
      description: "Chúng tôi chỉ báo cáo kết quả thực tế, không hứa hẹn lợi nhuận không thực tế",
    },
    {
      icon: UserCheck,
      title: "Không thu phí tư vấn khởi đầu",
      description: "Tư vấn ban đầu hoàn toàn miễn phí, không ràng buộc",
    },
    {
      icon: Shield,
      title: "Không bán chéo, không ép mở tài khoản",
      description: "Tư vấn khách quan, không áp đặt sản phẩm không phù hợp",
    },
    {
      icon: Lock,
      title: "Bảo mật thông tin khách hàng 100%",
      description: "Cam kết bảo vệ thông tin cá nhân theo tiêu chuẩn quốc tế",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            🧷 Cam kết & Bảo mật – khẳng định uy tín
          </h2>
          <p className="text-xl text-gray-600">Những cam kết cụ thể để bạn an tâm hợp tác</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {commitments.map((commitment, index) => (
            <Card
              key={index}
              className="border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <commitment.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">{commitment.title}</h3>
                <p className="text-gray-600 leading-relaxed">{commitment.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🛡️ Uy tín là nền tảng của sự thành công</h3>
            <p className="text-lg text-gray-600">
              Chúng tôi xây dựng mối quan hệ lâu dài dựa trên sự tin tưởng và kết quả thực tế, không phải lời hứa suông.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
