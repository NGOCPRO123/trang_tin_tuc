"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User } from "lucide-react"
import Image from "next/image"

const insights = [
  {
    title: "Top 10 xu hướng AI sẽ định hình tương lai kinh doanh năm 2024",
    excerpt: "Khám phá những xu hướng AI mới nhất và cách chúng sẽ thay đổi cách thức kinh doanh...",
    image: "/placeholder.svg?height=200&width=300",
    date: "15 Tháng 12, 2023",
    author: "Nguyễn Văn A",
  },
  {
    title: "Chiến lược Digital Transformation cho doanh nghiệp vừa và nhỏ",
    excerpt: "Hướng dẫn chi tiết về cách triển khai chuyển đổi số hiệu quả với ngân sách hạn chế...",
    image: "/placeholder.svg?height=200&width=300",
    date: "10 Tháng 12, 2023",
    author: "Trần Thị B",
  },
  {
    title: "Xu hướng quản lý nhân sự trong thời đại công nghệ 4.0",
    excerpt: "Những thay đổi trong cách quản lý và phát triển nhân sự trong kỷ nguyên số...",
    image: "/placeholder.svg?height=200&width=300",
    date: "5 Tháng 12, 2023",
    author: "Lê Văn C",
  },
]

export function InsightsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm font-medium text-yellow-600 mb-4 uppercase tracking-wide">TIN TỨC VÀ INSIGHTS</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cập nhật những xu hướng mới nhất và chia sẻ kiến thức chuyên sâu từ đội ngũ chuyên gia của chúng tôi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={insight.image || "/placeholder.svg"}
                  alt={insight.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-yellow-600 transition-colors">
                  {insight.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{insight.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {insight.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {insight.author}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="group bg-transparent">
            Xem tất cả
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
