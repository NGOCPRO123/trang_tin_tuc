"use client"

import { motion } from "framer-motion"
import { MainLayout } from "@/components/layout/main-layout"
import { ArticleCard } from "@/components/articles/article-card"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FolderOpen } from "lucide-react"
import useSWR from "swr"

// Danh mục giải pháp
const giaiPhapCategories = [
  "Tư vấn Tài chính & Huy động vốn",
  "Nghiệp vụ Kế toán – Thuế",
  "Chiến lược Tăng doanh số bền vững",
  "Tư vấn Pháp lý & Quản trị rủi ro",
  "Tối ưu Vận hành & An ninh Doanh nghiệp"
]

// Danh mục kiến thức
const kienThucCategories = [
  "Quản trị Doanh nghiệp",
  "Phát triển Doanh nghiệp",
  "Tài chính - Kế toán - Thuế",
  "Pháp lý & Rủi ro",
  "Tài nguyên tải về"
]

// Mapping từ URL slug sang tên danh mục
const categoryMapping: Record<string, string> = {
  // Giải pháp
  "thoi-su": "Tư vấn Tài chính & Huy động vốn",
  "cong-nghe": "Nghiệp vụ Kế toán – Thuế",
  "giai-tri": "Chiến lược Tăng doanh số bền vững",
  "kinh-te": "Tư vấn Pháp lý & Quản trị rủi ro",
  "xa-hoi": "Tối ưu Vận hành & An ninh Doanh nghiệp",
  // Kiến thức
  "quan-tri-doanh-nghiep": "Quản trị Doanh nghiệp",
  "phat-trien-doanh-nghiep": "Phát triển Doanh nghiệp",
  "tai-chinh-ke-toan-thue": "Tài chính - Kế toán - Thuế",
  "phap-ly-rui-ro": "Pháp lý & Rủi ro",
  "tai-nguyen-tai-ve": "Tài nguyên tải về"
}

interface CategoryPageProps {
  category?: string
}

const fetcher = (url: string) => fetch(url).then(res => res.json())

export function CategoryPage({ category }: CategoryPageProps) {
  const { data: articles = [], isLoading } = useSWR("/api/articles", fetcher)

  if (isLoading) {
    return (
      <MainLayout>
        <div className="py-16 bg-yellow-50">
          <div className="container">
            <div className="text-center">
              <p>Đang tải dữ liệu...</p>
            </div>
          </div>
        </div>
      </MainLayout>
    )
  }

  // Nếu có category cụ thể, lọc bài viết theo danh mục đó
  if (category) {
    const categoryName = categoryMapping[category]
    if (!categoryName) {
      return (
        <MainLayout>
          <div className="py-16 bg-yellow-50">
            <div className="container">
              <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">Danh mục không tồn tại</h1>
                <p className="text-muted-foreground">Danh mục bạn tìm kiếm không có trong hệ thống.</p>
              </div>
            </div>
          </div>
        </MainLayout>
      )
    }

    // Xác định type dựa trên category
    const isKienThuc = kienThucCategories.includes(categoryName)
    const articleType = isKienThuc ? "kien-thuc" : "giai-phap"
    
    const categoryArticles = articles.filter((article: any) => 
      article.category === categoryName && article.type === articleType
    )

    return (
      <MainLayout>
        <div className="py-16 bg-yellow-50">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              {/* Page Header */}
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{categoryName}</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Tất cả bài viết thuộc danh mục {categoryName}
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-yellow-100 mx-auto mt-4 rounded-full"></div>
              </div>

              {categoryArticles.length === 0 ? (
                <Card className="text-center py-16 bg-yellow-50 shadow-sm">
                  <CardContent>
                    <FolderOpen className="h-20 w-20 mx-auto mb-6 text-muted-foreground" />
                    <h3 className="text-2xl font-semibold mb-4">Chưa có bài viết nào</h3>
                    <p className="text-muted-foreground text-lg">
                      Danh mục {categoryName} chưa có bài viết nào.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="bg-yellow-100 rounded-lg p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <h2 className="text-2xl font-bold">{categoryName}</h2>
                      <Badge variant="secondary" className="text-sm">
                        {categoryArticles.length} bài viết
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryArticles.map((article: any, index: number) => (
                      <ArticleCard key={article._id || article.id} article={article} index={index} />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </MainLayout>
    )
  }

  // Nếu không có category cụ thể, hiển thị tất cả danh mục
  const allCategories = [...giaiPhapCategories, ...kienThucCategories]
  const articlesByCategory = allCategories.reduce(
    (acc: Record<string, typeof articles>, category: string) => {
      const isKienThuc = kienThucCategories.includes(category)
      const articleType = isKienThuc ? "kien-thuc" : "giai-phap"
      acc[category] = articles.filter((article: any) => 
        article.category === category && article.type === articleType
      )
      return acc
    },
    {} as Record<string, typeof articles>,
  )

  return (
    <MainLayout>
      <div className="py-16 bg-yellow-50">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Danh mục tin tức</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Khám phá tin tức theo từng chủ đề quan tâm của bạn
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-yellow-100 mx-auto mt-4 rounded-full"></div>
            </div>

            {articles.length === 0 ? (
              <Card className="text-center py-16 bg-yellow-50 shadow-sm">
                <CardContent>
                  <FolderOpen className="h-20 w-20 mx-auto mb-6 text-muted-foreground" />
                  <h3 className="text-2xl font-semibold mb-4">Chưa có bài viết nào</h3>
                  <p className="text-muted-foreground text-lg">
                    Các danh mục sẽ hiển thị khi có bài viết được thêm vào.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-12">
                {allCategories.map((category: string) => {
                  const categoryArticles = articlesByCategory[category]
                  if (categoryArticles.length === 0) return null

                  return (
                    <motion.section
                      key={category}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="bg-yellow-100 rounded-lg p-8 shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                          <h2 className="text-2xl font-bold">{category}</h2>
                          <Badge variant="secondary" className="text-sm">
                            {categoryArticles.length} bài viết
                          </Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categoryArticles.map((article: any, index: number) => (
                          <ArticleCard key={article._id || article.id} article={article} index={index} />
                        ))}
                      </div>
                    </motion.section>
                  )
                })}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </MainLayout>
  )
}
