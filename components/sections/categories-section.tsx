"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Newspaper, Trophy, Cpu, Music, DollarSign, Users, Megaphone } from "lucide-react"
import Link from "next/link"
import useSWR from "swr"

const categoryIcons = {
  "Tư vấn Tài chính & Huy động vốn": Newspaper,
  "Nghiệp vụ Kế toán – Thuế": Cpu,
  "Tư vấn Pháp lý & Quản trị rủi ro": DollarSign,
  "Chiến lược Tăng doanh số bền vững": Music,
  "Tối ưu Vận hành & An ninh Doanh nghiệp": Users,
}

const categoryColors = {
  "Tư vấn Tài chính & Huy động vốn": "bg-gradient-to-r from-red-400 to-red-600",
  "Nghiệp vụ Kế toán – Thuế": "bg-gradient-to-r from-blue-400 to-blue-600",
  "Tư vấn Pháp lý & Quản trị rủi ro": "bg-gradient-to-r from-yellow-400 to-yellow-600",
  "Chiến lược Tăng doanh số bền vững": "bg-gradient-to-r from-purple-400 to-purple-600",
  "Tối ưu Vận hành & An ninh Doanh nghiệp": "bg-gradient-to-r from-teal-400 to-teal-600",
}

// Mapping từ tên danh mục tiếng Việt sang URL slug
const categorySlugs = {
  "Tư vấn Tài chính & Huy động vốn": "thoi-su",
  "Nghiệp vụ Kế toán – Thuế": "cong-nghe",
  "Tư vấn Pháp lý & Quản trị rủi ro": "kinh-te",
  "Chiến lược Tăng doanh số bền vững": "giai-tri",
  "Tối ưu Vận hành & An ninh Doanh nghiệp": "xa-hoi",
}

const fetcher = (url: string) => fetch(url).then(res => res.json())

export function CategoriesSection({ type }: { type?: "giai-phap" | "kien-thuc" }) {
  const { data: articles = [], isLoading } = useSWR("/api/articles", fetcher)

  // Danh mục cho từng loại
  const categoryIconsByType = {
    "giai-phap": {
      "Tư vấn Tài chính & Huy động vốn": Newspaper,
      "Nghiệp vụ Kế toán – Thuế": Cpu,
      "Tư vấn Pháp lý & Quản trị rủi ro": DollarSign,
      "Chiến lược Tăng doanh số bền vững": Music,
      "Tối ưu Vận hành & An ninh Doanh nghiệp": Users,
    },
    "kien-thuc": {
      "Quản trị Doanh nghiệp": Newspaper,
      "Phát triển Doanh nghiệp": Trophy,
      "Tài chính - Kế toán - Thuế": DollarSign,
      "Pháp lý & Rủi ro": Megaphone,
      "Tài nguyên tải về": Cpu,
    }
  };
  const categoryColorsByType = {
    "giai-phap": {
      "Tư vấn Tài chính & Huy động vốn": "bg-gradient-to-r from-red-400 to-red-600",
      "Nghiệp vụ Kế toán – Thuế": "bg-gradient-to-r from-blue-400 to-blue-600",
      "Tư vấn Pháp lý & Quản trị rủi ro": "bg-gradient-to-r from-yellow-400 to-yellow-600",
      "Chiến lược Tăng doanh số bền vững": "bg-gradient-to-r from-purple-400 to-purple-600",
      "Tối ưu Vận hành & An ninh Doanh nghiệp": "bg-gradient-to-r from-teal-400 to-teal-600",
    },
    "kien-thuc": {
      "Quản trị Doanh nghiệp": "bg-gradient-to-r from-blue-400 to-blue-600",
      "Phát triển Doanh nghiệp": "bg-gradient-to-r from-green-400 to-green-600",
      "Tài chính - Kế toán - Thuế": "bg-gradient-to-r from-yellow-400 to-yellow-600",
      "Pháp lý & Rủi ro": "bg-gradient-to-r from-purple-400 to-purple-600",
      "Tài nguyên tải về": "bg-gradient-to-r from-pink-400 to-pink-600",
    }
  };
  const categorySlugsByType = {
    "giai-phap": {
      "Tư vấn Tài chính & Huy động vốn": "thoi-su",
      "Nghiệp vụ Kế toán – Thuế": "cong-nghe",
      "Tư vấn Pháp lý & Quản trị rủi ro": "kinh-te",
      "Chiến lược Tăng doanh số bền vững": "giai-tri",
      "Tối ưu Vận hành & An ninh Doanh nghiệp": "xa-hoi",
    },
    "kien-thuc": {
      "Quản trị Doanh nghiệp": "quan-tri-doanh-nghiep",
      "Phát triển Doanh nghiệp": "phat-trien-doanh-nghiep",
      "Tài chính - Kế toán - Thuế": "tai-chinh-ke-toan-thue",
      "Pháp lý & Rủi ro": "phap-ly-rui-ro",
      "Tài nguyên tải về": "tai-nguyen-tai-ve",
    }
  };

  // Lọc articles đúng type nếu có
  const filteredArticles = type ? articles.filter((a: any) => a.type === type) : articles;

  // Đếm số bài theo category
  const categoryCounts = filteredArticles.reduce(
    (acc: Record<string, number>, article: any) => {
      acc[article.category] = (acc[article.category] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  // Lấy đúng danh mục cho từng loại
  const categoryIcons = type ? categoryIconsByType[type] : categoryIconsByType["giai-phap"];
  const categoryColors = type ? categoryColorsByType[type] : categoryColorsByType["giai-phap"];
  const categorySlugs = type ? categorySlugsByType[type] : categorySlugsByType["giai-phap"];
  const categories = Object.keys(categoryIcons);

  if (categories.length === 0) return null

  // Giao diện riêng cho mục Kiến thức
  if (type === "kien-thuc") {
    return (
      <section id="categories-section" className="py-16 bg-yellow-50">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-yellow-700 flex items-center justify-center gap-2">
                <span>📚</span> Kho Kiến Thức Nổi Bật
              </h2>
              <p className="text-lg text-yellow-800 max-w-2xl mx-auto font-medium">
                Tổng hợp các chủ đề kiến thức hữu ích cho doanh nghiệp và cá nhân phát triển bền vững.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => {
                const Icon = categoryIcons[category as keyof typeof categoryIcons] as React.ElementType
                const bgClass = categoryColors[category as keyof typeof categoryColors]
                const count = categoryCounts[category] || 0
                const slug = categorySlugs[category as keyof typeof categorySlugs]
                return (
                  <Link key={category} href={`/danh-muc/${slug}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(34,197,94,0.15)" }}
                      className="cursor-pointer group"
                    >
                      <Card className="overflow-hidden border-0 h-40 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 bg-yellow-50 group-hover:bg-yellow-100">
                        <div className="h-full flex flex-col items-center justify-center p-6">
                          <div className="mb-4">
                            <div className="w-20 h-20 bg-white/70 rounded-full flex items-center justify-center shadow-lg">
                              <Icon className="h-10 w-10 text-yellow-600" />
                            </div>
                          </div>
                          <h3 className="text-lg font-bold text-yellow-900 mb-1 text-center">{category}</h3>
                          <span className="text-yellow-700 text-sm font-medium">{count} bài viết</span>
                        </div>
                      </Card>
                    </motion.div>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="categories-section" className="py-16 bg-yellow-50">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{(type as string) === "kien-thuc" ? "📚 Danh mục Kiến thức" : "💡 Giải pháp nổi bật"}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {(type as string) === "kien-thuc"
                ? "Khám phá các chủ đề kiến thức hữu ích cho doanh nghiệp và cá nhân."
                : "Khám phá các giải pháp tối ưu dành cho doanh nghiệp của bạn"}
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {categories.map((category, index) => {
              const Icon = categoryIcons[category as keyof typeof categoryIcons] as React.ElementType
              const bgClass = categoryColors[category as keyof typeof categoryColors]
              const count = categoryCounts[category] || 0
              const slug = categorySlugs[category as keyof typeof categorySlugs]

              return (
                <Link key={category} href={`/danh-muc/${slug}`}>
                  <motion.div
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
                </Link>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
