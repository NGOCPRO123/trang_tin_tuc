"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  FileText, 
  Lightbulb, 
  BookOpen, 
  TrendingUp, 
  Eye, 
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react"
import type { Article } from "@/types/article"

interface ArticleStatsProps {
  articles: Article[]
}

export function ArticleStats({ articles }: ArticleStatsProps) {
  // Tính toán thống kê tổng quan
  const totalArticles = articles.length
  const publishedArticles = articles.filter(a => a.status === 'published').length
  const draftArticles = articles.filter(a => a.status === 'draft').length
  const pendingArticles = articles.filter(a => a.status === 'pending').length

  // Tính toán theo loại bài viết
  const giaiPhapArticles = articles.filter(a => a.type === 'giai-phap').length
  const kienThucArticles = articles.filter(a => a.type === 'kien-thuc').length

  // Tính toán bài viết mới (tuần này)
  const recentArticles = articles.filter(a => {
    const date = new Date(a.publishedAt || '')
    const now = new Date()
    const diffDays = (now.getTime() - date.getTime()) / (1000 * 3600 * 24)
    return diffDays <= 7
  }).length

  // Tính toán tổng lượt xem
  const totalViews = articles.reduce((sum, article) => sum + (article.viewCount || 0), 0)

  // Tính toán trung bình lượt xem
  const averageViews = totalArticles > 0 ? Math.round(totalViews / totalArticles) : 0

  // Tính toán bài viết có lượt xem cao nhất
  const topViewedArticle = articles.reduce((max, article) => 
    (article.viewCount || 0) > (max.viewCount || 0) ? article : max
  , articles[0] || {})

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-700 border-green-200'
      case 'draft':
        return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getTypeColor = (type?: string) => {
    switch (type) {
      case 'giai-phap':
        return 'bg-purple-100 text-purple-700 border-purple-200'
      case 'kien-thuc':
        return 'bg-orange-100 text-orange-700 border-orange-200'
      default:
        return 'bg-blue-100 text-blue-700 border-blue-200'
    }
  }

  return (
    <div className="space-y-6">
      {/* Tổng quan */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Tổng bài viết</CardTitle>
            <FileText className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">{totalArticles}</div>
            <p className="text-xs text-blue-600 mt-1">Tất cả bài viết</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Đã xuất bản</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">{publishedArticles}</div>
            <p className="text-xs text-green-600 mt-1">
              {totalArticles > 0 ? Math.round((publishedArticles / totalArticles) * 100) : 0}% tổng số
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">Giải pháp</CardTitle>
            <Lightbulb className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">{giaiPhapArticles}</div>
            <p className="text-xs text-purple-600 mt-1">Bài viết giải pháp</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-orange-700">Kiến thức</CardTitle>
            <BookOpen className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-900">{kienThucArticles}</div>
            <p className="text-xs text-orange-600 mt-1">Bài viết kiến thức</p>
          </CardContent>
        </Card>
      </div>

      {/* Thống kê hoạt động */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tuần này</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{recentArticles}</div>
            <p className="text-xs text-slate-600">Bài viết mới</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng lượt xem</CardTitle>
            <Eye className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalViews.toLocaleString()}</div>
            <p className="text-xs text-slate-600">Tất cả bài viết</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Trung bình lượt xem</CardTitle>
            <Eye className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageViews}</div>
            <p className="text-xs text-slate-600">Mỗi bài viết</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chờ duyệt</CardTitle>
            <AlertCircle className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingArticles}</div>
            <p className="text-xs text-slate-600">Cần xem xét</p>
          </CardContent>
        </Card>
      </div>

      {/* Bài viết nổi bật */}
      {topViewedArticle && topViewedArticle.title && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Bài viết có lượt xem cao nhất
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 line-clamp-1">{topViewedArticle.title}</h4>
                <p className="text-sm text-slate-600 mt-1">
                  {topViewedArticle.viewCount?.toLocaleString()} lượt xem
                </p>
              </div>
              <Badge className={getTypeColor(topViewedArticle.type)}>
                {topViewedArticle.type === 'giai-phap' ? 'Giải pháp' : 
                 topViewedArticle.type === 'kien-thuc' ? 'Kiến thức' : 'Bài viết'}
              </Badge>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
} 