"use client"

import { useEffect, useState } from "react"
import { AdminArticleList } from "@/components/admin/admin-article-list"
import type { Article } from "@/types/article"
import { AdvancedArticleForm } from "@/components/admin/admin-article-form"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  Plus, 
  FileText, 
  Eye, 
  Edit, 
  Trash2, 
  Filter,
  Calendar,
  TrendingUp,
  CheckCircle,
  Clock
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function AdminArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [editingArticle, setEditingArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const router = useRouter()
  const [search, setSearch] = useState("")
  const { toast } = useToast()

  useEffect(() => {
    // Lấy danh sách bài viết từ API
    fetch("/api/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data || []))
  }, [])

  const handleEdit = (article: Article) => {
    setEditingArticle(article)
  }

  const handleDelete = async (id: string) => {
    if (confirm("Bạn có chắc muốn xóa bài viết này?")) {
      const res = await fetch(`/api/articles/${id}`, { method: "DELETE" })
      if (res.ok) {
        setArticles((prev) => prev.filter((a) => a._id !== id && a.id !== id))
        if (editingArticle && (editingArticle._id === id || editingArticle.id === id)) setEditingArticle(null)
        toast({
          title: "Đã xóa bài viết!",
          description: "Bài viết đã được xóa khỏi hệ thống.",
        })
      } else {
        toast({
          title: "Xóa bài viết thất bại!",
          description: "Vui lòng thử lại hoặc kiểm tra kết nối.",
          variant: "destructive",
        })
      }
    }
  }

  const handleUpdate = async (data: any) => {
    setLoading(true)
    try {
      const id = data._id || data.id
      const res = await fetch(`/api/articles/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      
      if (res.ok) {
        setArticles((prev) => prev.map((a) => (a._id === id || a.id === id ? { ...a, ...data } : a)))
        setEditingArticle(null)
        setSuccess(true)
        toast({
          title: "Cập nhật bài viết thành công!",
          description: "Bài viết đã được cập nhật.",
        })
        setTimeout(() => setSuccess(false), 2000)
      } else {
        toast({
          title: "Cập nhật bài viết thất bại!",
          description: "Vui lòng thử lại hoặc kiểm tra kết nối.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Có lỗi xảy ra khi cập nhật bài viết!",
        description: "Vui lòng thử lại hoặc kiểm tra kết nối.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleCancel = () => setEditingArticle(null)

  const filteredArticles = articles.filter(article => {
    const q = search.toLowerCase()
    return (
      (article.title || "").toLowerCase().includes(q) ||
      (article.slug || "").toLowerCase().includes(q) ||
      (article.author || "").toLowerCase().includes(q) ||
      (article.keywords && article.keywords.join(",").toLowerCase().includes(q)) ||
      (article.content || "").toLowerCase().includes(q)
    )
  })

  // Calculate stats
  const totalArticles = articles.length
  const publishedArticles = articles.filter(a => a.status === 'published').length
  const draftArticles = articles.filter(a => a.status === 'draft').length
  const recentArticles = articles.filter(a => {
    const date = new Date(a.publishedAt || '')
    const now = new Date()
    const diffDays = (now.getTime() - date.getTime()) / (1000 * 3600 * 24)
    return diffDays <= 7
  }).length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Quản lý bài viết</h1>
          <p className="text-slate-600 mt-1">Quản lý và chỉnh sửa tất cả bài viết trên website</p>
        </div>
        <Button 
          onClick={() => router.push("/admin")}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Thêm bài viết mới
        </Button>
      </div>

      {/* Stats Cards */}
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
            <p className="text-xs text-green-600 mt-1">Bài viết công khai</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-yellow-700">Bản nháp</CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-900">{draftArticles}</div>
            <p className="text-xs text-yellow-600 mt-1">Chưa xuất bản</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">Tuần này</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">{recentArticles}</div>
            <p className="text-xs text-purple-600 mt-1">Bài viết mới</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            Tìm kiếm và lọc
          </CardTitle>
          <CardDescription>
            Tìm kiếm bài viết theo tiêu đề, tác giả, từ khóa hoặc nội dung
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Tìm kiếm bài viết..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Lọc
            </Button>
          </div>
          {search && (
            <div className="mt-3 text-sm text-slate-600">
              Tìm thấy {filteredArticles.length} bài viết cho "{search}"
            </div>
          )}
        </CardContent>
      </Card>

      {/* Edit Form */}
      {editingArticle && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Edit className="w-5 h-5" />
              Chỉnh sửa bài viết
            </CardTitle>
            <CardDescription>
              Cập nhật thông tin bài viết "{editingArticle.title}"
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AdvancedArticleForm
              article={editingArticle}
              onSubmit={handleUpdate}
              onSaveDraft={handleUpdate}
              onPreview={() => {}}
              onCancel={handleCancel}
            />
            {loading && (
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-blue-800 font-semibold">Đang lưu...</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Articles List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Danh sách bài viết
          </CardTitle>
          <CardDescription>
            {filteredArticles.length} bài viết được tìm thấy
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AdminArticleList articles={filteredArticles} onEdit={handleEdit} onDelete={handleDelete} />
        </CardContent>
      </Card>
    </div>
  )
} 