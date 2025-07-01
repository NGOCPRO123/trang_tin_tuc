"use client"

import { useEffect, useState } from "react"
import { AdminArticleList } from "@/components/admin/admin-article-list"
import type { Article } from "@/types/article"
import { AdvancedArticleForm } from "@/components/admin/admin-article-form"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"

export default function AdminArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [editingArticle, setEditingArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const router = useRouter()
  const [search, setSearch] = useState("")

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
      } else {
        alert("Xóa bài viết thất bại!")
      }
    }
  }

  const handleUpdate = async (data: any) => {
    setLoading(true)
    const id = data._id || data.id
    const res = await fetch(`/api/articles/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    setLoading(false)
    if (res.ok) {
      setArticles((prev) => prev.map((a) => (a._id === id || a.id === id ? { ...a, ...data } : a)))
      setEditingArticle(null)
      setSuccess(true)
      setTimeout(() => setSuccess(false), 2000)
    } else {
      alert("Cập nhật bài viết thất bại!")
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

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold">Quản lý bài viết</h1>
        <Input
          placeholder="Tìm kiếm bài viết theo tiêu đề, slug, tác giả, từ khóa, nội dung..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="max-w-xs"
        />
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => router.push("/admin")}
        >
          Thêm bài viết
        </button>
      </div>
      {success && <div className="mb-4 text-green-600 font-semibold">Đã cập nhật bài viết thành công!</div>}
      {editingArticle && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Chỉnh sửa bài viết</h2>
          <AdvancedArticleForm
            article={editingArticle}
            onSubmit={handleUpdate}
            onSaveDraft={handleUpdate}
            onPreview={() => {}}
            onCancel={handleCancel}
          />
          {loading && <div className="mt-2 text-blue-600">Đang lưu...</div>}
        </div>
      )}
      <AdminArticleList articles={filteredArticles} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  )
} 