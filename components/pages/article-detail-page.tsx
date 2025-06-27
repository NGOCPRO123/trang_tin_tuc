"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MainLayout } from "@/components/layout/main-layout"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import useSWR from "swr"
import { formatRelativeTime } from "@/lib/utils"
import { useEffect } from "react"

interface ArticleDetailPageProps {
  articleId: string
}

export function ArticleDetailPage({ articleId }: ArticleDetailPageProps) {
  const fetcher = (url: string) => fetch(url).then(res => res.json())
  const { data: article, error, isLoading } = useSWR(`/api/articles/${articleId}`, fetcher)
  const { data: allArticles = [] } = useSWR(`/api/articles`, fetcher)

  useEffect(() => {
    if (articleId) {
      fetch(`/api/articles/${articleId}`, { method: 'PATCH' })
    }
  }, [articleId])

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

  // Bài viết liên quan: cùng category, trừ bài hiện tại, lấy 4 bài mới nhất
  const related = allArticles
    .filter((a: any) => a.category === article.category && a._id !== articleId)
    .sort((a: any, b: any) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 4)

  return (
    <MainLayout>
      <div className="container py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Quay lại
            </Button>
          </Link>

          <article className="max-w-4xl mx-auto">
            <header className="mb-8">
              <Badge variant="secondary" className="mb-4">
                {article.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{article.summary}</p>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formatRelativeTime(article.publishedAt)}</span>
                </div>
              </div>
            </header>

            <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
              <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap text-base leading-relaxed">{article.content}</div>
            </div>
          </article>
        </motion.div>

        {/* Bài viết liên quan */}
        {related.length > 0 && (
          <div className="max-w-4xl mx-auto mt-12">
            <h2 className="text-xl font-bold mb-4">📰 Bài viết liên quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((rel: any) => (
                <Link key={rel._id} href={`/bai-viet/${rel._id}`}>
                  <div className="h-full">
                    <div className="bg-white rounded-lg shadow p-4 h-full flex flex-col justify-between hover:bg-yellow-50 transition">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="relative w-20 h-16 rounded overflow-hidden flex-shrink-0">
                          <Image src={rel.image || "/placeholder.svg"} alt={rel.title} fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-base line-clamp-2 mb-1">{rel.title}</h3>
                          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <span><User className="inline h-3 w-3 mr-1" />{rel.author}</span>
                            <span><Calendar className="inline h-3 w-3 mr-1" />{formatRelativeTime(rel.publishedAt)}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{rel.summary}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  )
}
