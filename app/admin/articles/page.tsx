"use client"

import { useEffect, useState } from "react"
import { AdminArticleList } from "@/components/admin/admin-article-list"
import type { Article } from "@/types/article"
import { AdvancedArticleForm } from "@/components/admin/admin-article-form"
import { ArticleStats } from "@/components/admin/article-stats"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
  Clock,
  Lightbulb,
  BookOpen,
  Newspaper,
  X
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function AdminArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [editingArticle, setEditingArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const router = useRouter()
  const [search, setSearch] = useState("")
  const [selectedType, setSelectedType] = useState<string>("all")
  const [selectedStatus, setSelectedStatus] = useState<string>("all")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [dateRange, setDateRange] = useState<string>("all")
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

  const handleCreate = async (data: any) => {
    setLoading(true)
    try {
      const res = await fetch("/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      
      if (res.ok) {
        const newArticle = await res.json()
        setArticles((prev) => [newArticle, ...prev])
        setEditingArticle(null)
        toast({
          title: "Thêm bài viết thành công!",
          description: "Bài viết đã được thêm vào hệ thống.",
        })
      } else {
        toast({
          title: "Thêm bài viết thất bại!",
          description: "Vui lòng thử lại hoặc kiểm tra kết nối.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Có lỗi xảy ra khi thêm bài viết!",
        description: "Vui lòng thử lại hoặc kiểm tra kết nối.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleCancel = () => setEditingArticle(null)

  // Lọc bài viết theo các tiêu chí
  const filteredArticles = articles.filter(article => {
    const q = search.toLowerCase()
    const matchesSearch = (
      (article.title || "").toLowerCase().includes(q) ||
      (article.slug || "").toLowerCase().includes(q) ||
      (article.author || "").toLowerCase().includes(q) ||
      (article.keywords && article.keywords.join(",").toLowerCase().includes(q)) ||
      (article.content || "").toLowerCase().includes(q)
    )
    
    const matchesType = selectedType === "all" || article.type === selectedType
    const matchesStatus = selectedStatus === "all" || article.status === selectedStatus
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory
    
    let matchesDate = true
    if (dateRange !== "all" && article.publishedAt) {
      const articleDate = new Date(article.publishedAt)
      const now = new Date()
      const diffDays = (now.getTime() - articleDate.getTime()) / (1000 * 3600 * 24)
      
      switch (dateRange) {
        case "today":
          matchesDate = diffDays <= 1
          break
        case "week":
          matchesDate = diffDays <= 7
          break
        case "month":
          matchesDate = diffDays <= 30
          break
        case "year":
          matchesDate = diffDays <= 365
          break
      }
    }
    
    return matchesSearch && matchesType && matchesStatus && matchesCategory && matchesDate
  })

  // Tính toán thống kê tổng quan
  const totalArticles = articles.length

  // Lấy danh sách categories và tags duy nhất
  const categories = Array.from(new Set(articles.map(a => a.category).filter(Boolean)))
  const tags = Array.from(new Set(articles.flatMap(a => a.tags || []).filter(Boolean)))

  const clearFilters = () => {
    setSearch("")
    setSelectedType("all")
    setSelectedStatus("all")
    setSelectedCategory("all")
    setDateRange("all")
  }

  const hasActiveFilters = search || selectedType !== "all" || selectedStatus !== "all" || selectedCategory !== "all" || dateRange !== "all"

  // Thống kê theo loại
  const giaiPhapArticles = articles.filter(a => a.type === 'giai-phap').length
  const kienThucArticles = articles.filter(a => a.type === 'kien-thuc').length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Quản lý bài viết</h1>
          <p className="text-slate-600 mt-1">Quản lý và chỉnh sửa tất cả bài viết, giải pháp và kiến thức</p>
        </div>
        <Button 
          onClick={() => setEditingArticle({} as Article)}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Thêm bài viết mới
        </Button>
      </div>

      {/* Stats Cards */}
      <ArticleStats articles={articles} />

      {/* Advanced Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            Tìm kiếm và lọc chi tiết
          </CardTitle>
          <CardDescription>
            Tìm kiếm và lọc bài viết theo nhiều tiêu chí khác nhau
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Tìm kiếm theo tiêu đề, tác giả, từ khóa hoặc nội dung..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filter Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Type Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Loại bài viết</label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn loại" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="giai-phap">Giải pháp</SelectItem>
                  <SelectItem value="kien-thuc">Kiến thức</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Status Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Trạng thái</label>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn trạng thái" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="published">Đã xuất bản</SelectItem>
                  <SelectItem value="draft">Bản nháp</SelectItem>
                  <SelectItem value="pending">Chờ duyệt</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Danh mục</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn danh mục" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Date Range Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Thời gian</label>
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn thời gian" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="today">Hôm nay</SelectItem>
                  <SelectItem value="week">Tuần này</SelectItem>
                  <SelectItem value="month">Tháng này</SelectItem>
                  <SelectItem value="year">Năm nay</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="flex items-center gap-2 pt-2 border-t">
              <span className="text-sm text-slate-600">Bộ lọc đang hoạt động:</span>
              {search && (
                <Badge variant="secondary" className="text-xs">
                  Tìm kiếm: "{search}"
                </Badge>
              )}
              {selectedType !== "all" && (
                <Badge variant="secondary" className="text-xs">
                  Loại: {selectedType === "giai-phap" ? "Giải pháp" : "Kiến thức"}
                </Badge>
              )}
              {selectedStatus !== "all" && (
                <Badge variant="secondary" className="text-xs">
                  Trạng thái: {selectedStatus === "published" ? "Đã xuất bản" : selectedStatus === "draft" ? "Bản nháp" : "Chờ duyệt"}
                </Badge>
              )}
              {selectedCategory !== "all" && (
                <Badge variant="secondary" className="text-xs">
                  Danh mục: {selectedCategory}
                </Badge>
              )}
              {dateRange !== "all" && (
                <Badge variant="secondary" className="text-xs">
                  Thời gian: {dateRange === "today" ? "Hôm nay" : dateRange === "week" ? "Tuần này" : dateRange === "month" ? "Tháng này" : "Năm nay"}
                </Badge>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="h-6 px-2 text-xs text-slate-500 hover:text-slate-700"
              >
                <X className="w-3 h-3 mr-1" />
                Xóa tất cả
              </Button>
            </div>
          )}

          {/* Results Summary */}
          <div className="flex items-center justify-between pt-2 border-t">
            <div className="text-sm text-slate-600">
              Hiển thị {filteredArticles.length} trong tổng số {totalArticles} bài viết
            </div>
            {hasActiveFilters && (
              <Button
                variant="outline"
                size="sm"
                onClick={clearFilters}
                className="text-xs"
              >
                <X className="w-3 h-3 mr-1" />
                Xóa bộ lọc
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Edit Form */}
      {editingArticle && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Edit className="w-5 h-5" />
              {editingArticle._id ? "Chỉnh sửa bài viết" : "Thêm bài viết mới"}
            </CardTitle>
            <CardDescription>
              {editingArticle._id 
                ? `Cập nhật thông tin bài viết "${editingArticle.title}"`
                : "Tạo bài viết mới cho website"
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AdvancedArticleForm
              article={editingArticle}
              onSubmit={editingArticle._id ? handleUpdate : handleCreate}
              onSaveDraft={editingArticle._id ? handleUpdate : handleCreate}
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