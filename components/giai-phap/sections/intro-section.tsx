"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  AlertTriangle, 
  Clock, 
  DollarSign, 
  Users, 
  FileText, 
  Target,
  XCircle,
  ArrowRight
} from "lucide-react"

const problems = [
  {
    icon: XCircle,
    title: "Thiếu Đồng bộ",
    description: "Công ty kế toán không hiểu chiến lược kinh doanh. Đơn vị pháp lý không nắm rõ cấu trúc tài chính. Dữ liệu phân mảnh, quyết định thiếu nhất quán.",
    color: "from-red-400 to-pink-500",
    bgColor: "from-red-50 to-pink-50",
    borderColor: "border-red-200"
  },
  {
    icon: Clock,
    title: "Lãng phí Thời gian & Chi phí",
    description: "Bạn phải dành thời gian làm việc với nhiều đối tác, lặp lại cùng một câu chuyện. Chi phí cộng dồn từ nhiều nhà cung cấp thường cao hơn một giải pháp tổng thể.",
    color: "from-orange-400 to-red-500",
    bgColor: "from-orange-50 to-red-50",
    borderColor: "border-orange-200"
  },
  {
    icon: AlertTriangle,
    title: "Trách nhiệm Không rõ ràng",
    description: "Khi có vấn đề xảy ra, các bên đổ lỗi cho nhau và không ai chịu trách nhiệm cuối cùng. Doanh nghiệp của bạn là người chịu thiệt hại.",
    color: "from-yellow-400 to-orange-500",
    bgColor: "from-yellow-50 to-orange-50",
    borderColor: "border-yellow-200"
  }
]

export function IntroSection() {
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
            Bạn có đang bị mắc kẹt trong vòng luẩn quẩn của các dịch vụ rời rạc?
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Nhiều doanh nghiệp đang phải đối mặt với những thách thức không thể giải quyết bằng cách "vá" từng lỗ hổng một cách riêng lẻ.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, idx) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${problem.bgColor} ${problem.borderColor} border-2`}>
                <CardHeader className="pb-4">
                  <div className={`bg-gradient-to-r ${problem.color} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4`}>
                    <problem.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                    {problem.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Impact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl border-2 border-red-200 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Hậu quả của việc sử dụng dịch vụ rời rạc
            </h3>
            <p className="text-lg text-gray-700">
              Những vấn đề này không chỉ gây lãng phí thời gian và tiền bạc, mà còn cản trở sự phát triển bền vững của doanh nghiệp.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <DollarSign className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Chi phí cao</h4>
              <p className="text-sm text-gray-600">Nhiều nhà cung cấp = Chi phí cộng dồn</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Thời gian lãng phí</h4>
              <p className="text-sm text-gray-600">Lặp lại thông tin nhiều lần</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Thiếu đồng bộ</h4>
              <p className="text-sm text-gray-600">Dữ liệu phân mảnh</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Rủi ro cao</h4>
              <p className="text-sm text-gray-600">Trách nhiệm không rõ ràng</p>
            </div>
          </div>
        </motion.div>

        {/* Solution Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-8 rounded-2xl text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Giải pháp: Một điểm đến duy nhất
            </h3>
            <p className="text-lg mb-6 text-yellow-100">
              HLCC cung cấp giải pháp doanh nghiệp toàn diện, kết nối mọi mắt xích từ tài chính, pháp lý đến vận hành.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-yellow-600 font-bold px-8 py-4 rounded-xl hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105">
                Khám phá giải pháp của chúng tôi
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
