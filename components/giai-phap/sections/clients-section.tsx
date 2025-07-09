"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp, 
  Users, 
  Award, 
  ArrowRight,
  CheckCircle,
  Target,
  Zap,
  Shield,
  Lightbulb,
  Star
} from "lucide-react"
import Image from "next/image"

const results = [
  {
    icon: TrendingUp,
    title: "Giảm 30%",
    description: "chi phí vận hành",
    color: "from-green-400 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50"
  },
  {
    icon: Zap,
    title: "Tăng 60%",
    description: "hiệu suất quản lý",
    color: "from-yellow-400 to-orange-500",
    bgColor: "from-yellow-50 to-orange-50"
  },
  {
    icon: Users,
    title: "Tăng 45%",
    description: "tỷ lệ giữ chân khách hàng",
    color: "from-blue-400 to-indigo-500",
    bgColor: "from-blue-50 to-indigo-50"
  }
]

const highlights = [
  "Tái cấu trúc quy trình vận hành",
  "Tích hợp hệ thống công nghệ",
  "Tư vấn chiến lược vận hành",
  "Xây dựng hệ thống quản trị",
  "Đào tạo đội ngũ nhân sự",
  "Tối ưu hóa chuỗi cung ứng"
]

export function ClientsSection() {
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
            Case Study điển hình: Kiến tạo Hệ sinh thái TMĐT ACTA
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Từ một mớ hỗn độn của các hệ thống rời rạc, HLCC đã đồng hành cùng ACTA, cung cấp một giải pháp doanh nghiệp toàn diện 
            từ tái cấu trúc quy trình, tích hợp hệ thống công nghệ đến tư vấn chiến lược vận hành.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Thách thức ban đầu
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                ACTA đối mặt với những thách thức phức tạp: hệ thống vận hành rời rạc, quy trình không đồng bộ, 
                chi phí vận hành cao và hiệu suất quản lý thấp. Doanh nghiệp cần một giải pháp toàn diện để 
                chuyển đổi từ một tập hợp các dịch vụ riêng lẻ thành một hệ sinh thái TMĐT thống nhất.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Giải pháp của HLCC
              </h3>
              <div className="space-y-3">
                {highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-3xl blur-xl"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-yellow-200 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                  alt="Case Study ACTA - Giải pháp doanh nghiệp toàn diện"
                  fill
                  className="object-cover"
                />
                {/* Overlay with text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">ACTA E-commerce</h3>
                    <p className="text-yellow-200">Hệ sinh thái TMĐT thống nhất</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Kết quả ấn tượng
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result, idx) => (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${result.bgColor} border-2 border-gray-200`}>
                  <CardContent className="p-8 text-center">
                    <div className={`bg-gradient-to-r ${result.color} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                      <result.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-3xl font-bold text-gray-900 mb-2">
                      {result.title}
                    </h4>
                    <p className="text-gray-700 font-medium">
                      {result.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-yellow-500 to-orange-500 p-8 rounded-2xl text-white shadow-xl mb-12"
        >
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-200 fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-xl italic mb-6">
              "HLCC không chỉ cung cấp dịch vụ, mà còn là đối tác chiến lược thực sự. 
              Họ đã giúp chúng tôi xây dựng một hệ sinh thái TMĐT hoàn chỉnh và hiệu quả."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-yellow-600 font-bold text-lg">A</span>
              </div>
              <div>
                <p className="font-semibold">Giám đốc Điều hành ACTA</p>
                <p className="text-yellow-100 text-sm">Doanh nghiệp TMĐT hàng đầu</p>
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
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('/du-an-tieu-bieu', '_self')}
            >
              Xem chi tiết câu chuyện thành công của ACTA
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
