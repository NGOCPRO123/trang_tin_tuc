"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MainLayout } from "@/components/layout/main-layout"
import { ArticleList } from "@/components/admin/article-list"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, ArrowLeft, FileText, TrendingUp, Calendar, LogOut } from "lucide-react"
import useSWR, { mutate } from "swr"
import type { Article } from "@/types/article"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/contexts/auth-context"
import { AdvancedArticleForm } from "@/components/admin/admin-article-form"
import { Loading } from "@/components/ui/loading"

export function AdminPage() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data: articles = [], isLoading } = useSWR("/api/articles", fetcher)
  const [editingArticle, setEditingArticle] = useState<Article | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [search, setSearch] = useState("")
  const { logout } = useAuth()

  const handleSubmit = async (articleData: any) => {
    if (editingArticle) {
      await fetch(`/api/articles/${editingArticle._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...articleData, publishedAt: editingArticle.publishedAt })
      })
      mutate("/api/articles")
    } else {
      await fetch("/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...articleData, publishedAt: new Date().toISOString() }),
      })
      mutate("/api/articles")
    }
    setShowForm(false)
    setEditingArticle(null)
  }

  const handleEdit = (article: Article) => {
    setEditingArticle(article)
    setShowForm(true)
  }

  const handleCancel = () => {
    setShowForm(false)
    setEditingArticle(null)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  // Lọc bài viết theo từ khóa tìm kiếm
  const filteredArticles = articles.filter((article: Article) => {
    const keyword = search.toLowerCase()
    return (
      article.title.toLowerCase().includes(keyword) ||
      article.summary.toLowerCase().includes(keyword) ||
      article.author.toLowerCase().includes(keyword)
    )
  })

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            {/* Header Section */}
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <div className="flex justify-between items-start mb-4">
                <div></div>
                <Button
                  onClick={logout}
                  variant="outline"
                  className="border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 rounded-xl"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Đăng xuất
                </Button>
              </div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                  Quản trị bài viết
                </h1>
                <p className="text-lg font-bold text-black mt-2 max-w-2xl mx-auto">
                  Quản lý và tạo nội dung chất lượng cao cho website của bạn
                </p>
              </div>
            </motion.div>

            {showForm ? (
              <motion.div variants={itemVariants} className="space-y-6">
                <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl">
                          {editingArticle ? "Chỉnh sửa bài viết" : "Tạo bài viết mới"}
                        </CardTitle>
                        <CardDescription className="text-base mt-1">
                          {editingArticle ? "Cập nhật thông tin bài viết" : "Thêm nội dung mới vào website"}
                        </CardDescription>
                      </div>
                      <Button variant="ghost" onClick={handleCancel} className="hover:bg-gray-100 rounded-xl">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Quay lại
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <AdvancedArticleForm
                      article={editingArticle || undefined}
                      onSubmit={handleSubmit}
                      onCancel={handleCancel}
                      onSaveDraft={() => {}}
                      onPreview={() => {}}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <div className="space-y-8">
                {/* Stats Cards */}
                <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-black text-blue-600 mb-1">Tổng bài viết</p>
                          <p className="text-3xl font-black text-blue-900">{articles.length}</p>
                        </div>
                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                          <FileText className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-teal-50 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-black text-emerald-600 mb-1">Đã xuất bản</p>
                          <p className="text-3xl font-black text-emerald-900">{articles.length}</p>
                        </div>
                        <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                          <TrendingUp className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-black text-purple-600 mb-1">Tháng này</p>
                          <p className="text-3xl font-black text-purple-900">
                            {
                              articles.filter((article: Article) => {
                                const publishedDate = new Date(article.publishedAt)
                                const currentDate = new Date()
                                return (
                                  publishedDate.getMonth() === currentDate.getMonth() &&
                                  publishedDate.getFullYear() === currentDate.getFullYear()
                                )
                              }).length
                            }
                          </p>
                        </div>
                        <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                          <Calendar className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Action Section */}
                <motion.div variants={itemVariants} className="flex justify-center">
                  <Button
                    onClick={() => setShowForm(true)}
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl px-8 py-3"
                  >
                    <Plus className="h-5 w-5 mr-2" />
                    Tạo bài viết mới
                  </Button>
                </motion.div>

                {/* Articles List */}
                <motion.div variants={itemVariants}>
                  <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-2xl flex items-center gap-2">
                            <FileText className="h-6 w-6 text-blue-600" />
                            Danh sách bài viết
                          </CardTitle>
                          <CardDescription className="text-base mt-1">Quản lý tất cả bài viết đã tạo</CardDescription>
                        </div>
                        <Badge variant="secondary" className="text-sm px-3 py-1 rounded-full">
                          {filteredArticles.length} bài viết
                        </Badge>
                      </div>
                      <div className="mt-4">
                        <Input
                          placeholder="Tìm kiếm theo tiêu đề, tóm tắt hoặc tác giả..."
                          value={search}
                          onChange={e => setSearch(e.target.value)}
                          className="max-w-md"
                        />
                      </div>
                    </CardHeader>
                    <CardContent>
                      {isLoading ? (
                        <div className="flex items-center justify-center py-12">
                          <Loading size="lg" variant="spinner" />
                        </div>
                      ) : filteredArticles.length === 0 ? (
                        <div className="text-center py-12">
                          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                          <h3 className="text-lg font-black text-gray-900 mb-2">Không tìm thấy bài viết nào</h3>
                          <p className="text-black font-bold mb-6">Hãy thử từ khóa khác hoặc tạo bài viết mới</p>
                          <Button
                            onClick={() => setShowForm(true)}
                            className="bg-blue-600 hover:bg-blue-700 rounded-xl"
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Tạo bài viết
                          </Button>
                        </div>
                      ) : (
                        <ArticleList articles={filteredArticles} onEdit={handleEdit} onDelete={() => {}} />
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </MainLayout>
  )
}
