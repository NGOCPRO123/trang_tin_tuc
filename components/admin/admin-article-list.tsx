"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Edit, 
  Trash2, 
  Eye, 
  Calendar, 
  User, 
  Tag, 
  ExternalLink,
  CheckCircle,
  Clock,
  AlertCircle,
  Lightbulb,
  BookOpen,
  FileText
} from "lucide-react"
import type { Article } from "@/types/article"
import { formatDate } from "@/lib/utils"

interface AdminArticleListProps {
  articles: Article[]
  onEdit: (article: Article) => void
  onDelete: (id: string) => void
}

export function AdminArticleList({ articles, onEdit, onDelete }: AdminArticleListProps) {
  const getTypeIcon = (type?: string) => {
    switch (type) {
      case 'giai-phap':
        return <Lightbulb className="w-4 h-4 text-purple-600" />
      case 'kien-thuc':
        return <BookOpen className="w-4 h-4 text-orange-600" />
      default:
        return <FileText className="w-4 h-4 text-blue-600" />
    }
  }

  const getTypeLabel = (type?: string) => {
    switch (type) {
      case 'giai-phap':
        return 'Giải pháp'
      case 'kien-thuc':
        return 'Kiến thức'
      default:
        return 'Bài viết'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'published':
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case 'draft':
        return <Clock className="w-4 h-4 text-blue-400" />
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-blue-400" />
      default:
        return <Clock className="w-4 h-4 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-700 border-green-200'
      case 'draft':
        return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'pending':
        return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'private':
        return 'bg-slate-100 text-slate-700 border-slate-200'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Edit className="w-8 h-8 text-slate-400" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Không có bài viết nào</h3>
        <p className="text-slate-600">Bắt đầu tạo bài viết đầu tiên của bạn</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {articles.map((article, index) => (
        <motion.div
          key={article._id || article.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <Card className="hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0">
                      {article.featuredImage ? (
                        <img 
                          src={article.featuredImage} 
                          alt={article.altText || article.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                      ) : (
                        <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center">
                          <Edit className="w-6 h-6 text-slate-400" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg line-clamp-2 mb-2 hover:text-blue-600 transition-colors">
                        {article.title}
                      </CardTitle>
                      <p className="text-sm text-slate-600 line-clamp-2 mb-3">
                        {article.summary}
                      </p>
                      
                      {/* Meta information */}
                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(article.publishedAt)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{article.viewCount || 0} lượt xem</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tags and categories */}
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-xs flex items-center gap-1">
                      {getTypeIcon(article.type)}
                      {getTypeLabel(article.type)}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    {article.tags?.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {article.tags && article.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{article.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-col items-end gap-2">
                  {/* Status badge */}
                  <Badge className={`text-xs border ${getStatusColor(article.status)}`}>
                    <div className="flex items-center gap-1">
                      {getStatusIcon(article.status)}
                      {article.status === 'published' ? 'Đã xuất bản' :
                       article.status === 'draft' ? 'Bản nháp' :
                       article.status === 'pending' ? 'Chờ duyệt' : 'Riêng tư'}
                    </div>
                  </Badge>
                  
                  {/* Action buttons */}
                  <div className="flex gap-1">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => onEdit(article)}
                      className="h-8 w-8 p-0"
                    >
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => onDelete(article._id || article.id)}
                      className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
