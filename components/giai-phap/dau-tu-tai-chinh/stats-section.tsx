import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Calendar, Target } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      number: "700+",
      label: "nhà đầu tư cá nhân đã tham gia",
      sublabel: "Từ 2021 đến nay",
    },
    {
      icon: Target,
      number: "83%",
      label: "Tỷ lệ danh mục có lợi nhuận",
      sublabel: "sau 12 tháng",
    },
    {
      icon: TrendingUp,
      number: "8–20%",
      label: "Tăng trưởng trung bình hàng năm",
      sublabel: "tuỳ khẩu vị rủi ro",
    },
    {
      icon: Calendar,
      number: "100%",
      label: "có cố vấn theo dõi cá nhân",
      sublabel: "Hỗ trợ 24/7",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            📈 Số liệu và thành tựu minh bạch – không chém gió
          </h2>
          <p className="text-xl text-gray-600 mb-8">🔹 Thống kê thực tế</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.sublabel}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-blue-200">
            <p className="text-2xl font-semibold text-gray-800">
              🎯 "Không cam kết lợi nhuận ảo – chỉ báo cáo thực tế có dữ liệu."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
