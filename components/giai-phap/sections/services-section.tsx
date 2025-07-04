"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const services = [
  {
    title: "Đầu tư & Thành lập",
    description: "Hỗ trợ toàn diện trong việc thành lập và phát triển doanh nghiệp từ những bước đầu tiên.",
    image: "/placeholder.svg?height=200&width=200&text=Investment",
    icon: "🏢",
    color: "from-blue-500 to-blue-600",
    items: [
      "Tư vấn thành lập doanh nghiệp",
      "Hỗ trợ thủ tục pháp lý",
      "Tư vấn cơ cấu tổ chức",
      "Lập kế hoạch kinh doanh",
      "Tìm kiếm nguồn vốn đầu tư",
      "Đánh giá rủi ro và cơ hội",
    ],
  },
  {
    title: "Tối ưu hoạt động",
    description: "Cải thiện hiệu quả hoạt động và tối ưu hóa quy trình kinh doanh của doanh nghiệp.",
    image: "/placeholder.svg?height=200&width=200&text=Optimization",
    icon: "⚡",
    color: "from-yellow-500 to-orange-500",
    items: [
      "Phân tích quy trình hiện tại",
      "Tối ưu hóa vận hành",
      "Cải thiện năng suất",
      "Quản lý chất lượng",
      "Đào tạo nhân sự",
      "Ứng dụng công nghệ",
    ],
  },
  {
    title: "Mở rộng quy mô",
    description: "Hỗ trợ doanh nghiệp mở rộng thị trường và phát triển bền vững.",
    image: "/placeholder.svg?height=200&width=200&text=Growth",
    icon: "📈",
    color: "from-green-500 to-emerald-600",
    items: [
      "Chiến lược mở rộng thị trường",
      "Phát triển sản phẩm mới",
      "Xây dựng đối tác chiến lược",
      "Tối ưu chuỗi cung ứng",
      "Marketing và bán hàng",
      "Quản lý tài chính mở rộng",
    ],
  },
  {
    title: "M&A - Đóng cửa",
    description: "Tư vấn chuyên nghiệp về sáp nhập, mua bán và tái cấu trúc doanh nghiệp.",
    image: "/placeholder.svg?height=200&width=200&text=M&A",
    icon: "🤝",
    color: "from-purple-500 to-indigo-600",
    items: [
      "Đánh giá giá trị doanh nghiệp",
      "Tư vấn M&A",
      "Due diligence",
      "Tái cấu trúc doanh nghiệp",
      "Thủ tục pháp lý",
      "Hỗ trợ hậu M&A",
    ],
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Dịch vụ của chúng tôi</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá các giải pháp toàn diện được thiết kế để thúc đẩy sự phát triển của doanh nghiệp bạn
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-yellow-100 to-yellow-200">
                    <span className="text-3xl">{service.icon}</span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">{service.description}</p>

                  <div className="relative">
                    <div className="w-64 h-64 mx-auto lg:mx-0 relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-full opacity-20`}
                      ></div>
                      <div className="absolute inset-4 bg-white rounded-full shadow-2xl flex items-center justify-center">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          width={120}
                          height={120}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-br from-white to-yellow-50">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mr-4`}
                      >
                        <span className="text-white font-bold">✓</span>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900">Dịch vụ chi tiết</h4>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {service.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                          className="flex items-center space-x-4 p-3 rounded-xl hover:bg-yellow-100/50 transition-colors"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
