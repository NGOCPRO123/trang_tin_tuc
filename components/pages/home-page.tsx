"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MainLayout } from "@/components/layout/main-layout"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { CategoriesSection } from "@/components/sections/categories-section"
import { FeaturedArticleCard } from "@/components/articles/featured-article-card"
import { NewsArticleCard } from "@/components/articles/news-article-card"
import { useArticles } from "@/contexts/article-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Newspaper, ChevronDown, Plus } from "lucide-react"
import useSWR from "swr"
import { removeVietnameseTones } from "@/lib/utils"

const fetcher = (url: string) => fetch(url).then(res => res.json())

export function HomePage() {
  const { data: articles = [], isLoading } = useSWR("/api/articles", fetcher)
  const [allVisibleCount, setAllVisibleCount] = useState(9)
  const [search, setSearch] = useState("")

  // Hàm lọc bài viết theo nhiều trường, không phân biệt hoa thường, có dấu/không dấu
  const filterArticles = (list: any[]) => {
    if (!search.trim()) return list
    const q = removeVietnameseTones(search.toLowerCase())
    return list.filter(article => {
      const fields = [article.title, article.category, article.author, article.summary, article.content]
        .map(x => removeVietnameseTones((x || "").toLowerCase()))
      return fields.some(f => f.includes(q))
    })
  }

  const filteredArticles = filterArticles(articles)

  const loadMoreAll = () => setAllVisibleCount((prev) => Math.min(prev + 9, articles.length))

  // Tin nổi bật: 5 bài có viewCount cao nhất
  const featuredArticles = [...filteredArticles]
    .sort((a, b) => (b.viewCount || 0) - (a.viewCount || 0))
    .slice(0, 5)
  // Tin mới nhất: 5 bài mới nhất theo ngày đăng
  const latestArticles = [...filteredArticles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 5)

  const visibleAllArticles = filteredArticles.slice(0, allVisibleCount)
  const hasMoreAll = allVisibleCount < filteredArticles.length

  if (isLoading) return <div className="text-center py-16">Đang tải dữ liệu...</div>
  return (
    <MainLayout>
      {/* Hero Section */}
      <HeroSection onSearch={setSearch} />

      {/* Features Section */}
      <FeaturesSection />

      {/* News Section */}
      <section id="news-section" className="py-16 bg-yellow-50">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {articles.length === 0 ? (
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">📰 Tin tức mới nhất</h2>
                <Card className="text-center py-16 bg-yellow-50 border-dashed border-2">
                  <CardContent>
                    <Newspaper className="h-20 w-20 mx-auto mb-6 text-gray-400" />
                    <h3 className="text-2xl font-semibold mb-4 text-gray-600">Chưa có bài viết nào</h3>
                    <p className="text-gray-500 text-lg mb-6 max-w-md mx-auto">
                      Hãy vào trang quản trị để thêm những bài viết đầu tiên và tạo nên trang tin tức chuyên nghiệp!
                    </p>
                    <Button asChild size="lg">
                      <a href="/admin">
                        <Plus className="h-5 w-5 mr-2" />
                        Thêm bài viết đầu tiên
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <>
                {/* Featured News Section */}
                {featuredArticles.length > 0 && (
                  <div className="mb-16" id="featured-section">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">🔥 Tin nổi bật</h2>
                      <p className="text-gray-600">Những tin tức được quan tâm nhất hiện tại</p>
                      <div className="w-20 h-1 bg-gradient-to-r from-yellow-300 to-yellow-100 mx-auto mt-3 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Spotlight lớn cho bài đầu */}
                      <div className="lg:col-span-2">
                        <FeaturedArticleCard article={featuredArticles[0]} spotlight />
                      </div>
                      {/* 4 bài mini card */}
                      <div className="flex flex-col gap-6">
                        {featuredArticles.slice(1, 5).map((article: any, index: number) => (
                          <FeaturedArticleCard key={`${article.id || article._id}-featured-mini-${index}`} article={article} mini />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Latest News Section */}
                {latestArticles.length > 0 && (
                  <div>
                    <div className="text-center mb-8">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">📰 Tin tức mới nhất</h2>
                      <p className="text-gray-600">Cập nhật mỗi ngày — chọn lọc những nội dung đáng chú ý nhất</p>
                      <div className="w-20 h-1 bg-gradient-to-r from-yellow-300 to-yellow-100 mx-auto mt-3 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                      {latestArticles.map((article: any, index: number) => (
                        <NewsArticleCard key={`${article.id || article._id}-latest-${index}`} article={article} index={index} />
                      ))}
                    </div>
                  </div>
                )}

                {/* All Other Articles Section */}
                {articles.length > 0 && (
                  <div id="all-articles-section">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">📚 Tất cả các bài viết</h2>
                      <p className="text-gray-600">Danh sách toàn bộ bài viết trên hệ thống</p>
                      <div className="w-20 h-1 bg-gradient-to-r from-yellow-300 to-yellow-100 mx-auto mt-3 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                      {visibleAllArticles.map((article: any, index: number) => (
                        <NewsArticleCard key={`${article.id || article._id}-all-${index}`} article={article} index={index} />
                      ))}
                    </div>
                    {hasMoreAll && (
                      <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Button
                          onClick={loadMoreAll}
                          size="lg"
                          className="px-8 py-3 text-base font-semibold bg-yellow-400 hover:bg-yellow-500 text-yellow-900"
                        >
                          Xem thêm bài viết
                          <ChevronDown className="ml-2 h-5 w-5 text-yellow-700" />
                        </Button>
                        <p className="text-sm text-gray-500 mt-3">
                          Hiển thị {Math.min(allVisibleCount, articles.length)} / {articles.length} bài viết
                        </p>
                      </motion.div>
                    )}
                  </div>
                )}
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <CategoriesSection />
    </MainLayout>
  )
}
