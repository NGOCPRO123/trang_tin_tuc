"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Award, Users, Shield, Lightbulb } from "lucide-react"

const reasons = [
  {
    icon: CheckCircle,
    title: "Cam kết chất lượng",
    description: "Mọi sản phẩm đều được kiểm tra kỹ lưỡng và đảm bảo chất lượng cao nhất",
  },
  {
    icon: Clock,
    title: "Giao hàng đúng hẹn",
    description: "Luôn tuân thủ timeline và cam kết giao dự án đúng thời gian đã thỏa thuận",
  },
  {
    icon: Award,
    title: "Đội ngũ chuyên gia",
    description: "Đội ngũ có nhiều năm kinh nghiệm và được đào tạo bài bản, chuyên nghiệp",
  },
  {
    icon: Users,
    title: "Hỗ trợ tận tâm",
    description: "Đội ngũ hỗ trợ khách hàng 24/7, luôn sẵn sàng giải đáp mọi thắc mắc",
  },
  {
    icon: Shield,
    title: "Bảo mật tuyệt đối",
    description: "Cam kết bảo mật thông tin khách hàng và dữ liệu dự án một cách tuyệt đối",
  },
  {
    icon: Lightbulb,
    title: "Giải pháp sáng tạo",
    description: "Luôn đưa ra những ý tưởng mới mẻ và giải pháp sáng tạo cho từng dự án",
  },
]

const cardGradients = [
  "from-gray-300 to-gray-300",
  "from-gray-300 to-gray-300",
  "from-gray-300 to-gray-300",
  "from-gray-300 to-gray-300",
  "from-gray-300 to-gray-300",
  "from-gray-300 to-gray-300",
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-200 to-amber-300 rounded-full blur-3xl"
        />
      </div>
      <div className="container mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 font-semibold text-lg">TẠI SAO CHỌN CHÚNG TÔI</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2 mb-6">
            Những lý do khách hàng <span className="text-amber-600">tin tưởng</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi hiểu rằng sự tin tưởng phải được xây dựng qua từng dự án, từng sản phẩm. Đây là những cam kết mà
            chúng tôi luôn thực hiện
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-slate-600">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-amber-100 group-hover:bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    <reason.icon className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
                  <p className="text-gray-100 leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.div
            className="relative rounded-2xl p-8 text-white shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{
              boxShadow: "0 0 50px rgba(100, 116, 139, 0.3)",
            }}
          >
            {/* Background image + overlay */}
            <div className="absolute inset-0 z-0" style={{
              backgroundImage: "url('https://i.pinimg.com/736x/20/9c/4e/209c4e859fc5f57842e1470ec8b77c56.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }} />
            <div className="absolute inset-0 z-10 bg-black/60" />
            {/* Nội dung */}
            <div className="relative z-20">
              <h3 className="text-2xl font-bold mb-6">Được chứng nhận và công nhận</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-3xl font-bold mb-2">ISO 9001</div>
                  <div className="text-blue-100">Chứng nhận chất lượng</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">ISO 27001</div>
                  <div className="text-blue-100">Bảo mật thông tin</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">CMMI Level 3</div>
                  <div className="text-blue-100">Quy trình phát triển</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Top 10</div>
                  <div className="text-blue-100">Công ty IT hàng đầu</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
