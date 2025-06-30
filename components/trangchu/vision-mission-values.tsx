"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Target, Heart, Lightbulb, Users, Leaf } from "lucide-react"

const visionMissionValues = [
  {
    title: "Tầm nhìn",
    description: "Trở thành tổ chức gắn kết cộng đồng qua giá trị nhân văn, tạo nên một xã hội hạnh phúc và bền vững",
    icon: Eye,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Sứ mệnh",
    description: "Tạo môi trường giúp mọi người sống khỏe mạnh, kết nối và tử tế, lan tỏa những giá trị tích cực",
    icon: Target,
    color: "from-green-500 to-green-600",
  },
  {
    title: "Giá trị cốt lõi",
    description: "Nhân văn | Minh bạch | Đồng hành | Phát triển bền vững - Những nguyên tắc định hướng mọi hoạt động",
    icon: Heart,
    color: "from-orange-500 to-orange-600",
  },
]

const coreValues = [
  { name: "Nhân văn", icon: Heart },
  { name: "Minh bạch", icon: Lightbulb },
  { name: "Đồng hành", icon: Users },
  { name: "Bền vững", icon: Leaf },
]

export function VisionMissionValues() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Tầm nhìn - Sứ mệnh - Giá trị</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những định hướng cốt lõi dẫn dắt chúng tôi trong hành trình xây dựng cộng đồng
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {visionMissionValues.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-center">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Giá trị cốt lõi của chúng tôi</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                <value.icon className="w-5 h-5 text-orange-500" />
                <span className="font-semibold text-gray-700">{value.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
