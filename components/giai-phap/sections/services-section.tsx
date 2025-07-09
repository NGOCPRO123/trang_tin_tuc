"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  DollarSign, 
  Calculator, 
  Shield, 
  TrendingUp, 
  Settings, 
  Users,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Target,
  Zap,
  Award
} from "lucide-react"

const solutions = [
  {
    icon: DollarSign,
    title: "Giải pháp Tài chính & Huy động vốn",
    description: "Tái cấu trúc, quản trị dòng tiền, xây dựng kế hoạch tài chính và kết nối các nguồn vốn chiến lược.",
    features: [
      "Tái cấu trúc tài chính doanh nghiệp",
      "Quản trị dòng tiền hiệu quả",
      "Xây dựng kế hoạch tài chính",
      "Kết nối nguồn vốn chiến lược"
    ],
    color: "from-green-400 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
    borderColor: "border-green-200",
    link: "/giai-phap/dau-tu-tai-chinh"
  },
  {
    icon: Calculator,
    title: "Giải pháp Kế toán – Thuế",
    description: "Cung cấp dịch vụ doanh nghiệp chuyên sâu về kế toán, tối ưu thuế, đảm bảo tuân thủ và minh bạch.",
    features: [
      "Dịch vụ kế toán chuyên sâu",
      "Tối ưu thuế doanh nghiệp",
      "Đảm bảo tuân thủ pháp luật",
      "Báo cáo tài chính minh bạch"
    ],
    color: "from-blue-400 to-indigo-500",
    bgColor: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-200",
    link: "/giai-phap/nghiep-vu-ke-toan-thue"
  },
  {
    icon: Shield,
    title: "Giải pháp Pháp lý & Quản trị rủi ro",
    description: "Xây dựng 'tấm khiên pháp lý' vững chắc, từ hợp đồng, sở hữu trí tuệ đến giải quyết tranh chấp.",
    features: [
      "Xây dựng hệ thống pháp lý",
      "Bảo vệ sở hữu trí tuệ",
      "Quản trị rủi ro pháp lý",
      "Giải quyết tranh chấp"
    ],
    color: "from-purple-400 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
    borderColor: "border-purple-200",
    link: "/giai-phap/tu-van-phap-ly"
  },
  {
    icon: TrendingUp,
    title: "Giải pháp Tăng trưởng Doanh số",
    description: "Xây dựng chiến lược kinh doanh, tối ưu kênh phân phối và các hoạt động marketing thực chiến.",
    features: [
      "Chiến lược kinh doanh tổng thể",
      "Tối ưu kênh phân phối",
      "Marketing thực chiến",
      "Tăng trưởng doanh số bền vững"
    ],
    color: "from-yellow-400 to-orange-500",
    bgColor: "from-yellow-50 to-orange-50",
    borderColor: "border-yellow-200",
    link: "/giai-phap/giai-phap-tang-doanh-so"
  },
  {
    icon: Settings,
    title: "Giải pháp Tối ưu Vận hành",
    description: "Tinh gọn bộ máy, xây dựng quy trình (SOP) và hệ thống quản trị để doanh nghiệp tự vận hành hiệu quả.",
    features: [
      "Tinh gọn bộ máy tổ chức",
      "Xây dựng quy trình SOP",
      "Hệ thống quản trị hiệu quả",
      "Tự động hóa vận hành"
    ],
    color: "from-gray-400 to-slate-500",
    bgColor: "from-gray-50 to-slate-50",
    borderColor: "border-gray-200",
    link: "/giai-phap/xu-ly-cong-no"
  },
  {
    icon: Users,
    title: "Giải pháp Nhân sự & Văn hóa",
    description: "Tư vấn xây dựng thang bảng lương, chính sách phúc lợi và văn hóa doanh nghiệp để thu hút, giữ chân nhân tài.",
    features: [
      "Xây dựng thang bảng lương",
      "Chính sách phúc lợi hấp dẫn",
      "Văn hóa doanh nghiệp",
      "Thu hút và giữ chân nhân tài"
    ],
    color: "from-pink-400 to-rose-500",
    bgColor: "from-pink-50 to-rose-50",
    borderColor: "border-pink-200",
    link: "/giai-phap/bao-ve-an-ninh"
  }
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Các Mảnh ghép Giải pháp của HLCC
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Chúng tôi không chỉ cung cấp dịch vụ đơn lẻ, mà mang đến giải pháp doanh nghiệp toàn diện, 
            kết nối mọi mắt xích để tạo ra sự phát triển bền vững.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, idx) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${solution.bgColor} ${solution.borderColor} border-2 h-full group`}>
                <CardHeader className="pb-4">
                  <div className={`bg-gradient-to-r ${solution.color} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-3">
                    {solution.title}
                  </CardTitle>
                  <p className="text-gray-700 leading-relaxed">
                    {solution.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className={`w-full bg-gradient-to-r ${solution.color} hover:opacity-90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105`}
                    onClick={() => window.open(solution.link, '_self')}
                  >
                    Khám phá chi tiết
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Why Choose HLCC Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border-2 border-yellow-200 shadow-lg mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Tại sao chọn giải pháp doanh nghiệp của HLCC?
            </h3>
            <p className="text-lg text-gray-700">
              Chúng tôi không chỉ giải quyết vấn đề, mà còn xây dựng nền tảng vững chắc cho sự phát triển bền vững.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
              <Target className="h-8 w-8 text-yellow-600" />
              <div>
                <h4 className="font-semibold text-gray-900">Giải pháp toàn diện</h4>
                <p className="text-sm text-gray-600">Kết nối mọi mắt xích</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
              <Zap className="h-8 w-8 text-yellow-600" />
              <div>
                <h4 className="font-semibold text-gray-900">Thực chiến</h4>
                <p className="text-sm text-gray-600">Dựa trên kinh nghiệm thực tế</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
              <Award className="h-8 w-8 text-yellow-600" />
              <div>
                <h4 className="font-semibold text-gray-900">Cam kết kết quả</h4>
                <p className="text-sm text-gray-600">Đo lường được và bền vững</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
              <Lightbulb className="h-8 w-8 text-yellow-600" />
              <div>
                <h4 className="font-semibold text-gray-900">Sáng tạo</h4>
                <p className="text-sm text-gray-600">Giải pháp độc đáo</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
