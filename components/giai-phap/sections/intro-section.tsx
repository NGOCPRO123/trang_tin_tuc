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
    color: "from-[#CCA776] to-[#CCA776]",
    bgColor: "from-[#CCA776] to-[#CCA776]",
    borderColor: "border-[#CCA776]"
  },
  {
    icon: Clock,
    title: "Lãng phí Thời gian & Chi phí",
    description: "Bạn phải dành thời gian làm việc với nhiều đối tác, lặp lại cùng một câu chuyện. Chi phí cộng dồn từ nhiều nhà cung cấp thường cao hơn một giải pháp tổng thể.",
    color: "from-[#CCA776] to-[#CCA776]",
    bgColor: "from-[#CCA776] to-[#CCA776]",
    borderColor: "border-[#CCA776]"
  },
  {
    icon: AlertTriangle,
    title: "Trách nhiệm Không rõ ràng",
    description: "Khi có vấn đề xảy ra, các bên đổ lỗi cho nhau và không ai chịu trách nhiệm cuối cùng. Doanh nghiệp của bạn là người chịu thiệt hại.",
    color: "from-[#CCA776] to-[#CCA776]",
    bgColor: "from-[#CCA776] to-[#CCA776]",
    borderColor: "border-[#CCA776]"
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
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Bạn có đang bị mắc kẹt trong vòng luẩn quẩn của các dịch vụ rời rạc?
          </h2>
          <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
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
                  <CardTitle className="text-2xl font-bold text-black mb-3">
                    {problem.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black leading-relaxed">
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
          className="bg-gradient-to-r from-[#CCA776] to-[#CCA776] p-8 rounded-2xl border-2 border-[#CCA776] shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Hậu quả của việc sử dụng dịch vụ rời rạc
            </h3>
            <p className="text-lg text-black">
              Những vấn đề này không chỉ gây lãng phí thời gian và tiền bạc, mà còn cản trở sự phát triển bền vững của doanh nghiệp.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-[#CCA776] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-black mb-2">Chi phí cao</h4>
              <p className="text-sm text-black">Nhiều nhà cung cấp = Chi phí cộng dồn</p>
            </div>
            <div className="text-center">
              <div className="bg-[#CCA776] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-black mb-2">Thời gian lãng phí</h4>
              <p className="text-sm text-black">Lặp lại thông tin nhiều lần</p>
            </div>
            <div className="text-center">
              <div className="bg-[#CCA776] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-black mb-2">Thiếu đồng bộ</h4>
              <p className="text-sm text-black">Dữ liệu phân mảnh</p>
            </div>
            <div className="text-center">
              <div className="bg-[#CCA776] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <AlertTriangle className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-black mb-2">Rủi ro cao</h4>
              <p className="text-sm text-black">Trách nhiệm không rõ ràng</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
