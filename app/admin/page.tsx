"use client"

import { useState, useEffect, useRef } from "react"
import { AdvancedArticleForm } from "@/components/admin/admin-article-form"
import type { Article } from "@/types/article"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  FileText, 
  Eye, 
  Users, 
  TrendingUp, 
  Plus, 
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { LoadingPage, Loading } from "@/components/ui/loading"

export default function AdminDashboardPage() {
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(true)
  const [resetKey, setResetKey] = useState(0)
  const [articles, setArticles] = useState<Article[]>([])
  const [activeUsers, setActiveUsers] = useState<number>(0)
  const [logs, setLogs] = useState<any[]>([])
  const [viewsToday, setViewsToday] = useState(0)
  const [totalPageviews, setTotalPageviews] = useState(0)
  const router = useRouter();
  const formRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetch("/api/articles")
      .then(res => res.json())
      .then(data => {
        setArticles(data || [])
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    fetch("/api/users/active")
      .then(res => res.json())
      .then(data => setActiveUsers(data.activeUsers || 0))
  }, [])

  useEffect(() => {
    fetch("/api/activity-logs/recent")
      .then(res => res.json())
      .then(data => setLogs(data || []));
  }, []);

  useEffect(() => {
    fetch("/api/views/today")
      .then(res => res.json())
      .then(data => setViewsToday(data.viewsToday || 0))
  }, [])

  useEffect(() => {
    fetch("/api/pageview/count?path=all")
      .then(res => res.json())
      .then(data => setTotalPageviews(data.count || 0))
  }, [])

  // Tổng bài viết
  const totalArticles = articles.length
  // Bài viết tuần này
  const articlesThisWeek = articles.filter(a => {
    if (!a.publishedAt) return false;
    const d = new Date(a.publishedAt);
    if (isNaN(d.getTime())) return false;
    const now = new Date();
    const diff = (now.getTime() - d.getTime()) / (1000 * 3600 * 24);
    return diff <= 7;
  }).length;
  // Bài viết tuần trước
  const articlesLastWeek = articles.filter(a => {
    if (!a.publishedAt) return false;
    const d = new Date(a.publishedAt);
    if (isNaN(d.getTime())) return false;
    const now = new Date();
    const diff = (now.getTime() - d.getTime()) / (1000 * 3600 * 24);
    return diff > 7 && diff <= 14;
  }).length;
  // Tốc độ tăng trưởng
  const growth = articlesLastWeek === 0 ? 100 : ((articlesThisWeek - articlesLastWeek) / articlesLastWeek) * 100

  // Add new article
  const handleSubmit = async (articleData: any) => {
    setLoading(true)
    try {
      const response = await fetch("/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(articleData),
      })
      
      if (response.ok) {
        setSuccess(true)
        toast({
          title: "Thêm bài viết thành công!",
          description: "Bài viết đã được thêm vào hệ thống.",
        })
        setTimeout(() => {
          setSuccess(false)
          setResetKey(prev => prev + 1)
        }, 1500)
      } else {
        toast({
          title: "Có lỗi xảy ra khi thêm bài viết!",
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

  // Save draft
  const handleSaveDraft = async (articleData: any) => {
    setLoading(true)
    try {
      const response = await fetch("/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...articleData, status: "draft" }),
      })
      
      if (response.ok) {
        setSuccess(true)
        toast({
          title: "Lưu nháp thành công!",
          description: "Bản nháp đã được lưu.",
        })
        setTimeout(() => {
          setSuccess(false)
          setResetKey(prev => prev + 1)
        }, 1500)
      } else {
        toast({
          title: "Có lỗi xảy ra khi lưu nháp!",
          description: "Vui lòng thử lại hoặc kiểm tra kết nối.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Có lỗi xảy ra khi lưu nháp!",
        description: "Vui lòng thử lại hoặc kiểm tra kết nối.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  // Preview article
  const handlePreview = (articleData: any) => {
    const previewWindow = window.open("/preview", "_blank")
    if (previewWindow) {
      previewWindow.postMessage(articleData, "*")
    }
  }

  // Cancel form (reset)
  const handleCancel = () => {
    setResetKey(prev => prev + 1)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-600 mt-1">Quản lý và theo dõi hoạt động website</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-green-100 text-green-700">
            <CheckCircle className="w-3 h-3 mr-1" />
            Hệ thống hoạt động tốt
          </Badge>
        </div>
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
            <p className="text-xs text-blue-600 mt-1">
              <span className="text-green-600">+12%</span> so với tháng trước
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Lượt xem hôm nay</CardTitle>
            <Eye className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">{viewsToday}</div>
            <p className="text-xs text-green-600 mt-1">
              <span className="text-green-600">+8%</span> so với hôm qua
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">Người dùng hoạt động</CardTitle>
            <Users className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">{activeUsers}</div>
            <p className="text-xs text-purple-600 mt-1">
              <span className="text-green-600">+15%</span> so với tuần trước
            </p>
          </CardContent>
        </Card>

        {/* Đã xóa card tốc độ tăng trưởng */}

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-yellow-700">Tổng lượt truy cập</CardTitle>
            <Eye className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-900">{totalPageviews.toLocaleString()}</div>
            <p className="text-xs text-yellow-600 mt-1">Tổng số lượt truy cập vào website</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Thao tác nhanh
            </CardTitle>
            <CardDescription>Thực hiện các thao tác thường dùng</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline" onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}>
              <FileText className="w-4 h-4 mr-2" />
              Thêm bài viết mới
            </Button>
            <Button className="w-full justify-start" variant="outline" onClick={() => router.push("/admin/articles?scheduled=1")}>
              <Calendar className="w-4 h-4 mr-2" />
              Lên lịch đăng bài
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Eye className="w-4 h-4 mr-2" />
              Xem báo cáo
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Hoạt động gần đây
            </CardTitle>
            <CardDescription>Những thay đổi mới nhất trong hệ thống</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {logs.length === 0 ? (
                <div className="text-slate-500 text-sm">Chưa có hoạt động nào gần đây.</div>
              ) : (
                logs.map((item, index) => (
                  <div key={item._id || index} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
                    <div className={`w-2 h-2 rounded-full ${
                      item.action?.toLowerCase().includes('xóa') ? 'bg-red-500' :
                      item.action?.toLowerCase().includes('cập nhật') ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900">
                        {item.action} {item.meta?.title ? `: "${item.meta.title}"` : ''}
                      </p>
                      <p className="text-xs text-slate-500">
                        {item.user ? `Bởi ${item.user} - ` : ''}
                        {item.createdAt ? new Date(item.createdAt).toLocaleString() : ''}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Article Form Section */}
      <Card ref={formRef}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Thêm bài viết mới
          </CardTitle>
          <CardDescription>
            Tạo bài viết mới với đầy đủ thông tin và tối ưu SEO
          </CardDescription>
        </CardHeader>
        <CardContent>
          {success && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-green-800 font-semibold">✅ Đã thêm bài viết thành công!</span>
              </div>
            </div>
          )}
          
          <AdvancedArticleForm
            onSubmit={handleSubmit}
            onSaveDraft={handleSaveDraft}
            onPreview={handlePreview}
            onCancel={handleCancel}
            resetKey={resetKey}
            successMessage=""
          />
          
          {loading && (
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center gap-2">
                <Loading size="sm" variant="spinner" />
                <span className="text-blue-800 font-semibold">Đang xử lý...</span>
              </div>
              <p className="text-blue-600 text-sm mt-1">Vui lòng chờ trong giây lát</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
