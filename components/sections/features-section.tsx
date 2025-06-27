"use client"

import { motion } from "framer-motion"
import { Calendar, Megaphone, Lightbulb } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Tin tức mỗi ngày",
    description: "Cập nhật liên tục 24/7",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    icon: Megaphone,
    title: "Chính xác - Nhanh chóng",
    description: "Thông tin đáng tin cậy",
    color: "bg-yellow-200 text-yellow-800",
  },
  {
    icon: Lightbulb,
    title: "Miễn phí hoàn toàn",
    description: "Không phí ẩn, không quảng cáo",
    color: "bg-orange-100 text-orange-600",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-12 bg-yellow-50">
      <div className="container">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <div className={`p-4 rounded-full ${feature.color}`}>
                  <feature.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-yellow-700 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
