"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MainLayout } from "@/components/layout/main-layout"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowLeft, Play, Clock, Eye, Share2, Bookmark, ChevronUp, X, ZoomIn, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import Link from "next/link"
import useSWR from "swr"
import { formatRelativeTime } from "@/lib/utils"
import { useEffect, useState } from "react"
import { WeatherWidget } from "@/components/pages/weather-widget"
import { usePathname } from "next/navigation"
import { KnowledgeCategoriesSidebar } from "@/components/pages/knowledge-categories-sidebar"
import { RecentPostsSidebar } from "@/components/pages/recent-posts-sidebar"

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
  const pathname = typeof window !== "undefined" ? window.location.pathname : ""
  const origin = typeof window !== "undefined" ? window.location.origin : ""
  const shareUrl = origin + pathname

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
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">Không tìm thấy bài viết</h1>
            <p className="text-gray-600 max-w-md mx-auto">
              Bài viết bạn đang tìm kiếm có thể đã bị di chuyển, xóa hoặc không tồn tại.
            </p>
            <Button asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Về trang chủ
              </Link>
            </Button>
          </div>
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

          <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 lg:gap-6">
            {/* Left Sidebar - bỏ trống hoặc có thể bỏ luôn */}
            {/* Main Content rộng hơn */}
            <main className="lg:col-span-7">
              <article className="max-w-none">
                <header className="mb-8">
                  <Badge variant="secondary" className="mb-4">
                    {article.category}
                  </Badge>
                  <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">{article.title}</h1>
                  {article.tags && article.tags.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {article.tags.map((tag: string) => (
                        <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                  )}
                  {article.status && (
                    <div className="mb-2">
                      <Badge variant="secondary" className="text-xs">Trạng thái: {article.status}</Badge>
                    </div>
                  )}
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
                      {/* Đã xóa nút Chia sẻ và Bookmark theo yêu cầu */}
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
                        poster={article.image || article.featuredImage || "/placeholder.svg"}
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
                        src={article.image || article.featuredImage || "/placeholder.svg"}
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

                <div id="content" className="article-content">
                  <div dangerouslySetInnerHTML={{ __html: article.content }} />
                </div>

                <Separator className="my-8" />

                {/* Social Share */}
                <div className="flex items-center justify-between py-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span>Chia sẻ bài viết:</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" asChild className="bg-[#1877f2] hover:bg-[#145db2] text-white flex items-center gap-1">
                      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer">
                        <Facebook className="w-4 h-4" /> Facebook
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="bg-[#0084ff] hover:bg-[#005ecb] text-white flex items-center gap-1">
                      <a href={`https://zalo.me/share?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer">
                        <span className="font-bold">Z</span> Zalo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white flex items-center gap-1">
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <Instagram className="w-4 h-4" /> Instagram
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            </main>

            {/* Right Sidebar - Danh mục Kiến thức, Recent Posts, WeatherWidget */}
            <aside className="lg:col-span-3 space-y-4 sticky top-8 self-start h-fit">
              <Card>
                <CardContent className="p-4">
                  <div className="mb-3 text-base font-semibold text-yellow-700 flex items-center gap-2"><span>📚</span> Danh mục Kiến thức</div>
                  <KnowledgeCategoriesSidebar />
                </CardContent>
              </Card>
              {/* Recent Posts */}
              <Card>
                <CardContent className="p-4">
                  <div className="mb-3 text-base font-semibold flex items-center gap-2">Recent Posts</div>
                  <RecentPostsSidebar />
                </CardContent>
              </Card>
              {/* Weather Card đồng bộ */}
              <Card>
                <CardContent className="p-4">
                  <WeatherWidget />
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
              <VisuallyHidden>
                <DialogTitle>Ảnh bài viết</DialogTitle>
              </VisuallyHidden>
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative max-w-full max-h-full">
                  <Image
                    src={article.image || article.featuredImage || "/placeholder.svg"}
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
                      <Link href={`/${article.slug || article._id}`}>
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
