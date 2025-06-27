"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useArticles } from "@/contexts/article-context"
import { Newspaper, Trophy, Cpu, Music, DollarSign, Users, Megaphone } from "lucide-react"

const categoryIcons = {
  "Thời sự": Newspaper,
  "Thể thao": Trophy,
  "Công nghệ": Cpu,
  "Giải trí": Music,
  "Kinh tế": DollarSign,
  "Xã hội": Users,
  "Thông báo": Megaphone,
}

const categoryColors = {
  "Thời sự": "bg-gradient-to-r from-red-400 to-red-600",
  "Thể thao": "bg-gradient-to-r from-green-400 to-green-600", 
  "Công nghệ": "bg-gradient-to-r from-blue-400 to-blue-600",
  "Giải trí": "bg-gradient-to-r from-purple-400 to-purple-600",
  "Kinh tế": "bg-gradient-to-r from-yellow-400 to-yellow-600",
  "Xã hội": "bg-gradient-to-r from-teal-400 to-teal-600",
  "Thông báo": "bg-gradient-to-r from-orange-400 to-orange-600",
}

export function CategoriesSection() {
  const { articles } = useArticles()

  // Count articles by category
  const categoryCounts = articles.reduce(
    (acc, article) => {
      acc[article.category] = (acc[article.category] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  // Show all categories, not just those with articles
  const categories = Object.keys(categoryIcons)

  if (categories.length === 0) return null

  return (
    <section id="categories-section" className="py-16 bg-yellow-50">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">📂 Danh mục nổi bật</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Khám phá tin tức theo từng lĩnh vực quan tâm của bạn</p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {categories.map((category, index) => {
              const Icon = categoryIcons[category as keyof typeof categoryIcons]
              const bgClass = categoryColors[category as keyof typeof categoryColors]
              const count = categoryCounts[category] || 0

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="cursor-pointer group"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-0 h-32">
                    <div className={`h-full ${bgClass} relative`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="relative h-full flex items-center p-6">
                        <div className="flex-shrink-0 mr-6">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 text-white">
                          <h3 className="text-xl font-bold mb-2">{category}</h3>
                          <div className="flex items-center justify-between">
                            <span className="text-white/90 text-sm">{count} bài viết</span>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-white/70">Xem tất cả</span>
                              <svg className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
