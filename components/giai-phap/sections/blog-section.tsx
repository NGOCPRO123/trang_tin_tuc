"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Search, 
  Lightbulb, 
  Users, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Target,
  Zap,
  Award,
  Clock
} from "lucide-react"

const processSteps = [
  {
    step: "01",
    icon: Search,
    title: "Chẩn đoán Toàn diện",
    description: "Lắng nghe và phân tích sâu sắc để tìm ra vấn đề gốc rễ, không chỉ là triệu chứng bề mặt.",
    details: [
      "Phân tích tình hình doanh nghiệp",
      "Xác định vấn đề gốc rễ",
      "Đánh giá tác động đa chiều",
      "Lập báo cáo chẩn đoán chi tiết"
    ],
    color: "from-blue-400 to-indigo-500",
    bgColor: "from-blue-50 to-indigo-50"
  },
  {
    step: "02",
    icon: Lightbulb,
    title: "Xây dựng Lộ trình Giải pháp",
    description: "Thiết kế một lộ trình tích hợp nhiều dịch vụ doanh nghiệp, được 'may đo' riêng cho bạn.",
    details: [
      "Thiết kế giải pháp tích hợp",
      "Lộ trình thực hiện chi tiết",
      "Phân bổ nguồn lực tối ưu",
      "Dự kiến kết quả và thời gian"
    ],
    color: "from-green-400 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50"
  },
  {
    step: "03",
    icon: Users,
    title: "Đồng hành Triển khai",
    description: "Sát cánh cùng bạn trong quá trình thực thi để đảm bảo các giải pháp được áp dụng thành công.",
    details: [
      "Hỗ trợ triển khai thực tế",
      "Đào tạo và chuyển giao",
      "Giám sát tiến độ liên tục",
      "Điều chỉnh khi cần thiết"
    ],
    color: "from-yellow-400 to-orange-500",
    bgColor: "from-yellow-50 to-orange-50"
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Đo lường & Tối ưu",
    description: "Liên tục theo dõi, đánh giá và tinh chỉnh để mang lại kết quả kinh doanh thực tế.",
    details: [
      "Đo lường KPI định kỳ",
      "Đánh giá hiệu quả giải pháp",
      "Tối ưu hóa liên tục",
      "Báo cáo kết quả chi tiết"
    ],
    color: "from-purple-400 to-pink-500",
    bgColor: "from-purple-50 to-pink-50"
  }
]

export function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kiến thức từ Thư viện của Chuyên gia
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Cập nhật các bài viết chuyên sâu về tư vấn doanh nghiệp, giải pháp tài chính, quản trị và phát triển bền vững từ đội ngũ chuyên gia HLCC.
          </p>
        </motion.div>
        {/* Blog highlight section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[{
            title: "Tái cấu trúc tài chính: Chìa khóa tăng trưởng bền vững",
            excerpt: "Khám phá các bước tái cấu trúc tài chính giúp doanh nghiệp vượt qua khủng hoảng và phát triển ổn định.",
            link: "/kien-thuc/tai-cau-truc-tai-chinh"
          }, {
            title: "Tối ưu vận hành doanh nghiệp trong thời đại số",
            excerpt: "Những chiến lược quản trị và vận hành giúp doanh nghiệp nâng cao hiệu suất, giảm chi phí.",
            link: "/kien-thuc/toi-uu-van-hanh"
          }, {
            title: "Giải pháp tài chính toàn diện cho doanh nghiệp vừa và nhỏ",
            excerpt: "Các giải pháp tài chính phù hợp giúp doanh nghiệp SME phát triển bền vững và chủ động nguồn vốn.",
            link: "/kien-thuc/giai-phap-tai-chinh-sme"
          }].map((blog, idx) => (
            <Card key={idx} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-gray-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                  {blog.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 leading-relaxed">{blog.excerpt}</p>
                <a href={blog.link} className="text-orange-600 font-semibold hover:underline">Đọc tiếp →</a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${step.bgColor} border-2 border-gray-200`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`bg-gradient-to-r ${step.color} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg`}>
                      {step.step}
                    </div>
                    <div className={`bg-gradient-to-r ${step.color} p-3 rounded-full`}>
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </CardTitle>
                  <p className="text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {step.details.map((detail, detailIdx) => (
                      <div key={detailIdx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border-2 border-yellow-200 shadow-lg mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Lợi ích của quy trình HLCC
            </h3>
            <p className="text-lg text-gray-700">
              Quy trình chuyên nghiệp giúp đảm bảo mọi giải pháp doanh nghiệp đều được thực hiện hiệu quả và mang lại kết quả thực tế.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-yellow-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Chính xác</h4>
              <p className="text-sm text-gray-600">Giải quyết đúng vấn đề gốc rễ</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Hiệu quả</h4>
              <p className="text-sm text-gray-600">Tiết kiệm thời gian và chi phí</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Chất lượng</h4>
              <p className="text-sm text-gray-600">Đảm bảo kết quả bền vững</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Đúng tiến độ</h4>
              <p className="text-sm text-gray-600">Cam kết thời gian thực hiện</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-8 rounded-2xl text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Sẵn sàng trải nghiệm quy trình chuyên nghiệp?
            </h3>
            <p className="text-lg mb-6 text-yellow-100">
              Hãy để chúng tôi chứng minh sự khác biệt thông qua một buổi tư vấn miễn phí.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-yellow-600 font-bold px-8 py-4 rounded-xl hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105">
                Đặt lịch tư vấn miễn phí
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
              <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-yellow-600 transition-all duration-300 transform hover:scale-105">
                Xem case study
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
