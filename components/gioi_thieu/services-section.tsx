"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Search, 
  Users, 
  Zap, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Lightbulb,
  Shield,
  TrendingUp,
  Clock,
  Award,
  Heart
} from "lucide-react"

const approachMethods = [
  {
    icon: Search,
    title: "Thấu hiểu Toàn diện",
    description: "Chúng tôi không nhìn nhận một vấn đề độc lập, mà tiếp cận doanh nghiệp như một cơ thể sống để tìm ra nguyên nhân gốc rễ.",
    features: [
      "Phân tích tổng thể doanh nghiệp",
      "Xác định nguyên nhân gốc rễ",
      "Đánh giá tác động đa chiều"
    ],
    color: "from-blue-400 to-indigo-500"
  },
  {
    icon: Users,
    title: "Đối tác Cam kết",
    description: "Mối quan hệ của chúng tôi không kết thúc sau một bản báo cáo. Chúng tôi đồng hành trong quá trình triển khai để đảm bảo kết quả thực tiễn.",
    features: [
      "Đồng hành trong suốt quá trình",
      "Hỗ trợ triển khai thực tế",
      "Cam kết kết quả dài hạn"
    ],
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Giải pháp Thực chiến",
    description: "Mọi chiến lược đều được xây dựng dựa trên kinh nghiệm thực tế, có tính ứng dụng cao và được 'may đo' cho từng doanh nghiệp.",
    features: [
      "Giải pháp được kiểm chứng",
      "Tùy chỉnh theo đặc thù",
      "Tính khả thi cao"
    ],
    color: "from-yellow-400 to-orange-500"
  }
]

const processSteps = [
  {
    step: "01",
    title: "Thấu hiểu & Phân tích",
    description: "Lắng nghe và phân tích sâu sắc tình hình doanh nghiệp",
    icon: Search
  },
  {
    step: "02",
    title: "Đề xuất Giải pháp",
    description: "Xây dựng chiến lược và giải pháp phù hợp",
    icon: Lightbulb
  },
  {
    step: "03",
    title: "Triển khai & Hỗ trợ",
    description: "Đồng hành trong quá trình thực hiện",
    icon: Users
  },
  {
    step: "04",
    title: "Đánh giá & Tối ưu",
    description: "Đo lường kết quả và cải tiến liên tục",
    icon: TrendingUp
  }
]

export function ServicesSection() {
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
            Cách chúng tôi tạo ra sự khác biệt
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            HLCC không chỉ cung cấp dịch vụ tư vấn thông thường. Chúng tôi áp dụng phương pháp tiếp cận độc đáo 
            kết hợp giữa kinh nghiệm thực tế và tư duy chiến lược để mang đến kết quả vượt trội.
          </p>
        </motion.div>

        {/* Approach Methods */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {approachMethods.map((method, idx) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full bg-gradient-to-br from-white to-gray-50 group">
                <CardHeader className="pb-4">
                  <div className={`bg-gradient-to-r ${method.color} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                    {method.title}
                  </CardTitle>
                  <p className="text-gray-700 leading-relaxed">
                    {method.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {method.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Quy trình làm việc của HLCC
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl border-2 border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {/* Connector line */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose HLCC */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border-2 border-yellow-200 shadow-lg mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Tại sao doanh nghiệp chọn HLCC?
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Chúng tôi không chỉ là nhà tư vấn, mà là người đồng hành tin cậy trong hành trình phát triển của doanh nghiệp.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
              <Award className="h-8 w-8 text-yellow-600" />
              <div>
                <h4 className="font-semibold text-gray-900">Kinh nghiệm thực tế</h4>
                <p className="text-sm text-gray-600">15+ năm trong lĩnh vực tư vấn</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
              <Shield className="h-8 w-8 text-yellow-600" />
              <div>
                <h4 className="font-semibold text-gray-900">Cam kết kết quả</h4>
                <p className="text-sm text-gray-600">Đảm bảo hiệu quả thực tế</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
              <Heart className="h-8 w-8 text-yellow-600" />
              <div>
                <h4 className="font-semibold text-gray-900">Tận tâm phục vụ</h4>
                <p className="text-sm text-gray-600">Đặt lợi ích khách hàng lên đầu</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-8 rounded-2xl text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Sẵn sàng bắt đầu hành trình cùng HLCC?
            </h3>
            <p className="text-lg mb-6 text-yellow-100">
              Hãy để chúng tôi hiểu rõ thách thức của bạn và đề xuất giải pháp phù hợp nhất.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-yellow-600 hover:bg-yellow-50 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Tư vấn miễn phí ngay
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-yellow-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Xem các dự án tiêu biểu
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
