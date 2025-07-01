"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Calendar, User, Eye, Clock } from "lucide-react"
import type { Article } from "@/types/article"

interface ArticleListProps {
  articles: Article[]
  onEdit: (article: Article) => void
  onDelete: (id: string) => void
}

const statusConfig = {
  published: { label: "Đã xuất bản", color: "bg-green-500", textColor: "text-green-700" },
  draft: { label: "Bản nháp", color: "bg-gray-500", textColor: "text-gray-700" },
  pending: { label: "Chờ duyệt", color: "bg-yellow-500", textColor: "text-yellow-700" },
  private: { label: "Riêng tư", color: "bg-red-500", textColor: "text-red-700" },
}

export function ArticleList({ articles, onEdit, onDelete }: ArticleListProps) {
  const handleDelete = (id: string, title: string) => {
    if (confirm(`Bạn có chắc chắn muốn xóa bài viết "${title}"?`)) {
      onDelete(id)
    }
  }

  if (articles.length === 0) {
    return (
      <Card>
        <CardContent className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Edit className="h-12 w-12 mx-auto" />
          </div>
          <p className="text-gray-500 text-lg mb-2">Chưa có bài viết nào</p>
          <p className="text-gray-400">Hãy tạo bài viết đầu tiên của bạn!</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {articles.map((article, index) => {
        const status = statusConfig[article.status] || statusConfig.draft

        return (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-lg line-clamp-1 flex-1">{article.title}</CardTitle>
                      <Badge variant="secondary" className={`${status.color} text-white shrink-0`}>
                        {status.label}
                      </Badge>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground flex-wrap gap-2">
                      <Badge variant="outline">{article.category}</Badge>

                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{article.author}</span>
                      </div>

                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(article.publishedAt).toLocaleDateString("vi-VN")}</span>
                      </div>

                      {article.viewCount && (
                        <div className="flex items-center space-x-1">
                          <Eye className="h-3 w-3" />
                          <span>{article.viewCount.toLocaleString()} lượt xem</span>
                        </div>
                      )}

                      {article.scheduledDate && (
                        <div className="flex items-center space-x-1 text-blue-600">
                          <Clock className="h-3 w-3" />
                          <span>Lên lịch: {new Date(article.scheduledDate).toLocaleString("vi-VN")}</span>
                        </div>
                      )}
                    </div>

                    {(Array.isArray(article.tags) && article.tags.length > 0) && (
                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                        {article.tags.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{article.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex space-x-2 ml-4 shrink-0">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onEdit(article)}
                      className="hover:bg-blue-50 hover:border-blue-300"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(article.id, article.title)}
                      className="hover:bg-red-50 hover:border-red-300 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{article.summary}</p>

                {/* SEO Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t">
                  <div className="flex items-center gap-4">
                    <span>Slug: /{article.slug}</span>
                    {article.metaTitle && <span>Meta: {article.metaTitle.length}/60</span>}
                  </div>

                  <div className="flex items-center gap-2">
                    {article.noIndex && (
                      <Badge variant="outline" className="text-xs">
                        NoIndex
                      </Badge>
                    )}
                    {article.canonicalUrl && (
                      <Badge variant="outline" className="text-xs">
                        Canonical
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}
