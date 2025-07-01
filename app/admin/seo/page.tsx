"use client"

import { useEffect, useState, useRef } from "react"
import type { Article } from "@/types/article"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"

function calcSeoScore(article: Article) {
  let score = 0
  let suggestions: string[] = []
  // Tiêu đề
  if (article.metaTitle && article.metaTitle.length <= 60) score += 15
  else suggestions.push("Meta title quá dài hoặc thiếu")
  // Mô tả
  if (article.metaDescription && article.metaDescription.length <= 160) score += 15
  else suggestions.push("Meta description quá dài hoặc thiếu")
  // Slug
  if (article.slug && article.slug.length <= 80) score += 10
  else suggestions.push("Slug quá dài hoặc thiếu")
  // Canonical
  if (article.canonicalUrl) score += 10
  else suggestions.push("Thiếu canonical URL")
  // Robots
  if (article.noIndex || article.noFollow) suggestions.push("Bài viết đang bị noindex/nofollow")
  else score += 10
  // OG tags
  if (article.ogTitle && article.ogDescription && article.ogImage) score += 10
  else suggestions.push("Thiếu Open Graph tag")
  // Ảnh đại diện
  if (article.featuredImage) score += 10
  else suggestions.push("Thiếu ảnh đại diện")
  // Từ khóa chính
  if (article.keywords && article.keywords.length > 0) score += 10
  else suggestions.push("Thiếu từ khóa chính")
  // Nội dung
  if (article.content && article.content.length > 300) score += 10
  else suggestions.push("Nội dung quá ngắn")
  return { score, suggestions }
}

export default function AdminSeoPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [editing, setEditing] = useState<Article | null>(null)
  const [form, setForm] = useState<Partial<Article>>({})
  const [saving, setSaving] = useState(false)
  const [success, setSuccess] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    fetch("/api/articles")
      .then(res => res.json())
      .then((data: Article[]) => setArticles(data))
  }, [])

  const openEdit = (article: Article) => {
    setEditing(article)
    setForm({ ...article, keywords: Array.isArray(article.keywords) ? article.keywords.join(", ") : (article.keywords || "") })
  }

  const closeEdit = () => {
    setEditing(null)
    setForm({})
  }

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target
    setForm(f => ({
      ...f,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const handleSave = async () => {
    if (!editing) return
    setSaving(true)
    const id = editing._id || editing.id
    const payload = {
      ...editing,
      ...form,
      keywords: typeof form.keywords === "string" ? form.keywords.split(",").map((k: string) => k.trim()).filter(Boolean) : [],
    }
    const res = await fetch(`/api/articles/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
    setSaving(false)
    if (res.ok) {
      setArticles(prev => prev.map(a => (a._id === id || a.id === id ? { ...a, ...payload } : a)))
      setSuccess(true)
      setTimeout(() => setSuccess(false), 1500)
      closeEdit()
    } else {
      alert("Lưu thất bại!")
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-8 text-blue-700 text-center">Quản lý SEO bài viết</h1>
      {success && <div className="mb-4 text-green-600 font-semibold text-center">Lưu thành công!</div>}
      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm">
          <thead className="bg-blue-50">
            <tr>
              <th className="p-2 border">Tiêu đề</th>
              <th className="p-2 border">Meta title</th>
              <th className="p-2 border">Meta desc</th>
              <th className="p-2 border">Slug</th>
              <th className="p-2 border">Canonical</th>
              <th className="p-2 border">Robots</th>
              <th className="p-2 border">OG tags</th>
              <th className="p-2 border">Từ khóa</th>
              <th className="p-2 border">Ảnh</th>
              <th className="p-2 border">Điểm SEO</th>
              <th className="p-2 border">Cảnh báo</th>
              <th className="p-2 border">Chỉnh sửa</th>
            </tr>
          </thead>
          <tbody>
            {articles.map(article => {
              const { score, suggestions } = calcSeoScore(article)
              return (
                <tr key={article._id || article.id} className="hover:bg-blue-50">
                  <td className="p-2 border font-medium max-w-xs truncate">{article.title}</td>
                  <td className={`p-2 border ${!article.metaTitle || article.metaTitle.length > 60 ? 'bg-red-100' : ''}`}>{article.metaTitle || <span className="text-red-500">Thiếu</span>}</td>
                  <td className={`p-2 border ${!article.metaDescription || article.metaDescription.length > 160 ? 'bg-red-100' : ''}`}>{article.metaDescription || <span className="text-red-500">Thiếu</span>}</td>
                  <td className={`p-2 border ${!article.slug || article.slug.length > 80 ? 'bg-red-100' : ''}`}>{article.slug || <span className="text-red-500">Thiếu</span>}</td>
                  <td className={`p-2 border ${!article.canonicalUrl ? 'bg-red-100' : ''}`}>{article.canonicalUrl || <span className="text-red-500">Thiếu</span>}</td>
                  <td className="p-2 border">{article.noIndex || article.noFollow ? <Badge variant="destructive">noindex/nofollow</Badge> : <Badge variant="outline">index/follow</Badge>}</td>
                  <td className={`p-2 border ${!(article.ogTitle && article.ogDescription && article.ogImage) ? 'bg-red-100' : ''}`}>{article.ogTitle && article.ogDescription && article.ogImage ? 'Đủ' : <span className="text-red-500">Thiếu</span>}</td>
                  <td className={`p-2 border ${!article.keywords || article.keywords.length === 0 ? 'bg-red-100' : ''}`}>{article.keywords && article.keywords.length > 0 ? article.keywords.join(", ") : <span className="text-red-500">Thiếu</span>}</td>
                  <td className={`p-2 border ${!article.featuredImage ? 'bg-red-100' : ''}`}>{article.featuredImage ? <img src={article.featuredImage} alt="thumb" className="w-10 h-10 object-cover rounded" /> : <span className="text-red-500">Thiếu</span>}</td>
                  <td className="p-2 border font-bold text-blue-700">{score}/100</td>
                  <td className="p-2 border">
                    {suggestions.length > 0 ? (
                      <ul className="list-disc pl-4 text-xs text-red-600">
                        {suggestions.map(s => <li key={s}>{s}</li>)}
                      </ul>
                    ) : <span className="text-green-600">Tốt</span>}
                  </td>
                  <td className="p-2 border">
                    <Button size="sm" variant="outline" onClick={() => router.push(`/admin/articles?edit=${article._id || article.id}`)}>Đi tới chỉnh sửa</Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
} 