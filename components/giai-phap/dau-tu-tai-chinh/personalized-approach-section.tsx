import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Briefcase, GraduationCap, Heart } from "lucide-react"

export function PersonalizedApproachSection() {
  const personas = [
    {
      icon: Users,
      title: "BẬN RỘN KHÔNG THỜI GIAN",
      subtitle: "Dành cho người bận việc gia đình/công việc",
      description: "Hệ thống tự động, chỉ cần 15 phút/tuần để kiểm tra",
      features: ["Auto-invest hàng tháng", "Báo cáo tự động", "Cảnh báo khi cần can thiệp"],
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
    },
    {
      icon: Briefcase,
      title: "DOANH NHÂN NĂNG ĐỘNG",
      subtitle: "Thu nhập cao, muốn tối ưu thuế",
      description: "Chiến lược phức tạp, tối ưu hóa thuế và dòng tiền",
      features: ["Tối ưu cơ cấu thuế", "Đầu tư bất động sản", "Quản lý dòng tiền doanh nghiệp"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
    {
      icon: GraduationCap,
      title: "TRẺ TUỔI MỚI BẮT ĐẦU",
      subtitle: "Vốn ít nhưng có thời gian",
      description: "Tận dụng sức mạnh của lãi kép trong dài hạn",
      features: ["Bắt đầu từ 5 triệu", "Học đầu tư từ cơ bản", "Xây dựng thói quen tốt"],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
    },
    {
      icon: Heart,
      title: "CHUẨN BỊ HƯU TRÍ",
      subtitle: "Bảo toàn và sinh lời ổn định",
      description: "An toàn là ưu tiên, lợi nhuận ổn định dài hạn",
      features: ["Ưu tiên bảo toàn vốn", "Thu nhập thụ động", "Kế hoạch di sản"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-gray-800 mb-8">
            KHÔNG CÓ
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
              GIẢI PHÁP CHUNG
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mỗi người một hoàn cảnh, một mục tiêu, một cách tiếp cận riêng biệt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {personas.map((persona, index) => (
            <Card
              key={index}
              className={`border-none shadow-xl bg-gradient-to-br ${persona.bgColor} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
            >
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${persona.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <persona.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-2">{persona.title}</h3>
                <p className="text-amber-600 font-semibold mb-4">{persona.subtitle}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{persona.description}</p>

                <ul className="space-y-2 mb-6">
                  {persona.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className={`w-2 h-2 bg-gradient-to-r ${persona.color} rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full bg-gradient-to-r ${persona.color} text-white hover:shadow-lg transition-all duration-300`}
                >
                  Tìm hiểu thêm
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-amber-200 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Bạn thuộc nhóm nào?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Hãy để chúng tôi thiết kế một chiến lược đầu tư phù hợp 100% với bạn.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 text-lg rounded-2xl shadow-xl"
            >
              Khám phá chiến lược của tôi
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
