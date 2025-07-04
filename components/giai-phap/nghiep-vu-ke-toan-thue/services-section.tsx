import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Compass, Rocket, Shield, Telescope, Wand2, Zap } from "lucide-react"

export function ServicesSection() {
  const coreServices = [
    {
      icon: Compass,
      title: "Định vị tài chính thông minh",
      description: "Như GPS cho doanh nghiệp - luôn biết mình đang ở đâu trên bản đồ kinh doanh",
    },
    {
      icon: Telescope,
      title: "Dự báo xu hướng tài chính",
      description: "Nhìn xa hơn con số hiện tại, dự đoán những thay đổi sắp tới",
    },
    {
      icon: Shield,
      title: "Khiên chống 'bom tấn' thuế",
      description: "Bảo vệ bạn khỏi những 'cú sốc' bất ngờ từ chính sách thuế mới",
    },
    {
      icon: Wand2,
      title: "Biến hóa báo cáo 'khô khan'",
      description: "Từ những con số nhàm chán thành insight kinh doanh sống động",
    },
  ]

  const premiumServices = [
    {
      icon: Rocket,
      title: "Tăng tốc quy trình số hóa",
      description: "Từ thủ công sang tự động - tiết kiệm 80% thời gian xử lý",
    },
    {
      icon: Zap,
      title: "SOS cấp cứu tài chính",
      description: "Hỗ trợ khẩn cấp khi gặp 'sự cố' với cơ quan thuế",
    },
    {
      icon: Telescope,
      title: "Phẫu thuật sổ sách cũ",
      description: "Chữa trị những 'vết thương' từ hệ thống kế toán cũ",
    },
    {
      icon: Compass,
      title: "Tối ưu thuế như nghệ thuật",
      description: "Biến việc tiết kiệm thuế thành một môn nghệ thuật tinh tế",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-yellow-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Bộ "Siêu Năng Lực" Tài Chính</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Không phải dịch vụ thông thường - đây là những "siêu năng lực" giúp doanh nghiệp bay cao
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Core Services */}
          <Card className="bg-white shadow-lg border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
              <CardTitle className="text-2xl flex items-center">
                <span className="mr-3">🎯</span>
                Gói "Thông Minh Cơ Bản"
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {coreServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <service.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Premium Services */}
          <Card className="bg-white shadow-lg border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
              <CardTitle className="text-2xl flex items-center">
                <span className="mr-3">🚀</span>
                Gói "Siêu Tốc Độ"
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {premiumServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-amber-100 p-2 rounded-lg flex-shrink-0">
                      <service.icon className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 space-y-4">
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4">
            Khám phá bảng giá "bất ngờ"
          </Button>
          <div className="text-sm text-gray-600">
            Hoặc{" "}
            <button className="text-amber-600 hover:text-amber-700 font-medium underline">
              so sánh gói nào phù hợp với bạn
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
