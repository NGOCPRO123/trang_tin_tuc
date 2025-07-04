"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "Hướng dẫn thành lập doanh nghiệp năm 2024",
    excerpt: "Các bước cần thiết và thủ tục pháp lý để thành lập doanh nghiệp hiệu quả",
    image: "/placeholder.svg?height=200&width=300&text=Business+Setup",
    author: "Chuyên gia EXPERTIS",
    date: "15/12/2024",
    category: "Thành lập DN",
    readTime: "5 phút đọc",
  },
  {
    title: "Xu hướng đầu tư và M&A trong năm 2024",
    excerpt: "Phân tích thị trường và những cơ hội đầu tư tiềm năng",
    image: "/placeholder.svg?height=200&width=300&text=Investment+Trends",
    author: "Chuyên gia EXPERTIS",
    date: "12/12/2024",
    category: "Đầu tư",
    readTime: "7 phút đọc",
  },
  {
    title: "Tối ưu hóa quy trình vận hành doanh nghiệp",
    excerpt: "Những phương pháp hiệu quả để cải thiện năng suất và giảm chi phí",
    image: "/placeholder.svg?height=200&width=300&text=Process+Optimization",
    author: "Chuyên gia EXPERTIS",
    date: "10/12/2024",
    category: "Vận hành",
    readTime: "6 phút đọc",
  },
  {
    title: "Chiến lược mở rộng thị trường quốc tế",
    excerpt: "Hướng dẫn chi tiết về việc mở rộng kinh doanh ra thị trường nước ngoài",
    image: "/placeholder.svg?height=200&width=300&text=Global+Expansion",
    author: "Chuyên gia EXPERTIS",
    date: "08/12/2024",
    category: "Mở rộng",
    readTime: "8 phút đọc",
  },
  {
    title: "Quản lý rủi ro trong kinh doanh",
    excerpt: "Các phương pháp nhận diện và quản lý rủi ro hiệu quả",
    image: "/placeholder.svg?height=200&width=300&text=Risk+Management",
    author: "Chuyên gia EXPERTIS",
    date: "05/12/2024",
    category: "Rủi ro",
    readTime: "4 phút đọc",
  },
]

export function BlogSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-yellow-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-yellow-200/50 backdrop-blur-sm rounded-full border border-yellow-300/50 mb-6">
            <span className="text-yellow-700 font-semibold">📚 Blog & Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nội Dung Hữu Ích</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cập nhật những kiến thức và xu hướng mới nhất trong lĩnh vực kinh doanh và đầu tư
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 rounded-2xl overflow-hidden bg-white group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-yellow-400 text-blue-900 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/70 text-white text-xs rounded-full">{post.readTime}</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-900 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-blue-900 font-medium text-sm group-hover:text-yellow-600 transition-colors">
                    <span>Đọc thêm</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
            Xem tất cả bài viết
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
