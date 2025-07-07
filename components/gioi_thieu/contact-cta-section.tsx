"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Users, 
  Target, 
  Award, 
  Heart,
  Lightbulb,
  Shield,
  TrendingUp
} from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Đội ngũ chuyên gia giàu kinh nghiệm",
    description: "15+ năm kinh nghiệm trong lĩnh vực tư vấn doanh nghiệp"
  },
  {
    icon: Target,
    title: "Giải pháp thực chiến",
    description: "Dựa trên kinh nghiệm thực tế và được kiểm chứng qua hàng trăm dự án"
  },
  {
    icon: Award,
    title: "Cam kết kết quả",
    description: "Đảm bảo hiệu quả thực tế và giá trị bền vững cho doanh nghiệp"
  },
  {
    icon: Heart,
    title: "Đồng hành tận tâm",
    description: "Không chỉ tư vấn mà còn đồng hành trong suốt hành trình phát triển"
  }
]

export function ContactCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/20 to-orange-100/20"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-orange-200 rounded-full opacity-20"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-amber-200 rounded-full opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hãy cùng HLCC viết nên câu chuyện thành công tiếp theo
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Nếu bạn đang tìm kiếm một người đồng hành thực sự, một đội ngũ có thể thấu hiểu những trăn trở của bạn 
            và cung cấp những giải pháp xứng tầm, hãy kết nối với chúng tôi.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-100 group"
            >
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-yellow-500 to-orange-500 p-8 rounded-2xl text-white shadow-xl mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              HLCC trong số liệu
            </h3>
            <p className="text-yellow-100">
              Những con số nói lên sự tin cậy và hiệu quả của chúng tôi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-yellow-100 text-sm">Dự án thành công</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-yellow-100 text-sm">Doanh nghiệp tin tưởng</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-yellow-100 text-sm">Năm kinh nghiệm</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-yellow-100 text-sm">Khách hàng hài lòng</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-10 py-5 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Trò chuyện cùng Chuyên gia
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white px-10 py-5 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Khám phá các Dự án của chúng tôi
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Shield className="h-6 w-6 text-green-500" />
              <span className="font-semibold text-gray-900">Cam kết bảo mật tuyệt đối</span>
            </div>
            <p className="text-sm text-gray-600">
              Mọi thông tin bạn chia sẻ sẽ được bảo vệ nghiêm ngặt. HLCC cam kết không tiết lộ thông tin khách hàng 
              và tuân thủ các quy định về bảo mật dữ liệu.
            </p>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
            <Lightbulb className="h-4 w-4" />
            <span>Buổi tư vấn đầu tiên hoàn toàn miễn phí và không ràng buộc</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
