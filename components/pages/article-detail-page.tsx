"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MainLayout } from "@/components/layout/main-layout"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowLeft, Play, Clock, Eye, Share2, Bookmark, ChevronUp, X, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Link from "next/link"
import useSWR from "swr"
import { formatRelativeTime } from "@/lib/utils"
import { useEffect, useState } from "react"
import { PartnersSection } from "@/components/pages/partners-section"
import { WeatherWidget } from "@/components/pages/weather-widget"

interface ArticleDetailPageProps {
  articleId: string
}

export function ArticleDetailPage({ articleId }: ArticleDetailPageProps) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data: article, error, isLoading } = useSWR(`/api/articles/${articleId}`, fetcher)
  const { data: allArticles = [] } = useSWR(`/api/articles`, fetcher)
  const [videoError, setVideoError] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)

  useEffect(() => {
    setIsClient(true)
    if (articleId) {
      // Gọi API để tăng lượt xem khi vào trang bài báo chi tiết
      fetch(`/api/articles/${articleId}`, { method: "PATCH" })
        .catch(error => console.error("Error incrementing view count:", error))
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [articleId])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (isLoading) {
    return (
      <MainLayout>
        <div className="container py-8">
          <p>Đang tải bài viết...</p>
        </div>
      </MainLayout>
    )
  }

  if (error || !article) {
    return (
      <MainLayout>
        <div className="container py-8">
          <p>Không tìm thấy bài viết.</p>
        </div>
      </MainLayout>
    )
  }

  const hasVideo = isClient && article.video && article.video.trim() !== "" && !videoError

  const handleVideoError = () => {
    setVideoError(true)
  }

  // Bài viết liên quan: cùng category, trừ bài hiện tại
  const related = allArticles
    .filter((a: any) => a.category === article.category && a._id !== articleId)
    .sort((a: any, b: any) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 6)

  // Bài viết nổi bật (most viewed)
  const trending = allArticles
    .filter((a: any) => a._id !== articleId)
    .sort((a: any, b: any) => (b.viewCount || 0) - (a.viewCount || 0))
    .slice(0, 5)

  // Bài viết mới nhất
  const latest = allArticles
    .filter((a: any) => a._id !== articleId)
    .sort((a: any, b: any) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 4)

  return (
    <MainLayout>
      <div className="container py-8 px-2 lg:px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Quay lại
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-16 gap-4 lg:gap-6">
            {/* Left Sidebar - Đối tác - Rộng hơn */}
            <aside className="lg:col-span-3 space-y-4">
              {/* Partners Banner */}
              <Card className="sticky top-4">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold text-center">🤝 Đối tác</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <PartnersSection />
                </CardContent>
              </Card>

              {/* Advertisement Banner */}
              <Card>
                <CardContent className="p-4">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 text-center">
                    <div className="text-base font-medium text-blue-600 mb-3">Quảng cáo</div>
                    <div className="text-sm text-muted-foreground">160x600</div>
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* Main Content - Thu hẹp lại một chút */}
            <main className="lg:col-span-10">
              <article className="max-w-none">
                <header className="mb-8">
                  <Badge variant="secondary" className="mb-4">
                    {article.category}
                  </Badge>
                  <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">{article.title}</h1>
                  <p className="text-lg text-muted-foreground mb-6">{article.summary}</p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{formatRelativeTime(article.publishedAt)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Eye className="h-4 w-4" />
                        <span>{article.viewCount || 0} lượt xem</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4 mr-1" />
                        Chia sẻ
                      </Button>
                      <Button variant="outline" size="sm">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </header>

                {/* Cải thiện phần hiển thị hình ảnh - rộng hơn và có thể click để xem full */}
                <div className="relative w-full mb-8 rounded-lg overflow-hidden group cursor-pointer" 
                     onClick={() => !hasVideo && setIsImageModalOpen(true)}>
                  {hasVideo ? (
                    <div className="relative w-full h-96 md:h-[500px] lg:h-[600px]">
                      <video
                        src={article.video}
                        className="w-full h-full object-cover"
                        controls
                        poster={article.image || "/placeholder.svg"}
                        onError={handleVideoError}
                      />
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                          <Play className="h-4 w-4 text-white fill-white" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-96 md:h-[500px] lg:h-[600px]">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Overlay với icon zoom khi hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3">
                          <ZoomIn className="h-6 w-6 text-gray-700" />
                        </div>
                      </div>
                      {/* Text hint */}
                      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                          Nhấn để xem full ảnh
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div id="content" className="prose prose-lg max-w-none">
                  <div className="whitespace-pre-wrap text-base leading-relaxed">{article.content}</div>
                </div>

                <Separator className="my-8" />

                {/* Social Share */}
                <div className="flex items-center justify-between py-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span>Chia sẻ bài viết:</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm">
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm">
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </article>
            </main>

            {/* Right Sidebar - Thời tiết - Rộng hơn */}
            <aside className="lg:col-span-3 space-y-4">
              {/* Professional Weather Widget */}
              <Card className="sticky top-4">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold">🌤️ Dự báo thời tiết</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <WeatherWidget />
                </CardContent>
              </Card>

              {/* Trending Articles */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold">🔥 Tin nổi bật</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {trending.slice(0, 4).map((trend: any, index: number) => (
                      <Link key={trend._id} href={`/bai-viet/${trend._id}`}>
                        <div className="flex gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                            {index + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium line-clamp-2 mb-1">{trend.title}</h4>
                            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                              <Eye className="h-3 w-3" />
                              <span>{trend.viewCount || 0}</span>
                              <Clock className="h-3 w-3" />
                              <span>{formatRelativeTime(trend.publishedAt)}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Advertisement Placeholder */}
              <Card>
                <CardContent className="p-4">
                  <div className="bg-muted/30 rounded-lg p-10 text-center">
                    <div className="text-base text-muted-foreground mb-3">Quảng cáo</div>
                    <div className="text-sm text-muted-foreground">300x250</div>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>

          {/* Related Articles Section */}
          {related.length > 0 && (
            <div id="related" className="mt-16">
              <h2 className="text-xl font-bold mb-6">Bài viết liên quan</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.slice(0, 6).map((rel: any) => (
                  <RelatedArticleCard key={rel._id} article={rel} />
                ))}
              </div>
            </div>
          )}

          {/* Scroll to Top Button */}
          {showScrollTop && (
            <Button
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 rounded-full w-12 h-12 shadow-lg z-50"
              size="icon"
            >
              <ChevronUp className="h-4 w-4" />
            </Button>
          )}

          {/* Image Modal */}
          <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
            <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-transparent border-none">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative max-w-full max-h-full">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={1200}
                    height={800}
                    className="max-w-full max-h-[90vh] object-contain rounded-lg"
                  />
                  <Button
                    onClick={() => setIsImageModalOpen(false)}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10"
                    size="icon"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </MainLayout>
  )
}

// Component riêng cho bài viết liên quan
function RelatedArticleCard({ article }: { article: any }) {
  const hasVideo = article.video && article.video.trim() !== ""

  return (
    <Link href={`/bai-viet/${article._id}`}>
      <Card className="h-full hover:shadow-md transition-shadow">
        <div className="relative h-48 w-full">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover rounded-t-lg"
          />
          {hasVideo && (
            <div className="absolute top-2 right-2">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-1">
                <Play className="h-3 w-3 text-gray-700 fill-gray-700" />
              </div>
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <Badge variant="outline" className="mb-2 text-xs">
            {article.category}
          </Badge>
          <h3 className="font-semibold text-sm line-clamp-2 mb-2">{article.title}</h3>
          <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{article.summary}</p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <User className="h-3 w-3" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3" />
              <span>{formatRelativeTime(article.publishedAt)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
