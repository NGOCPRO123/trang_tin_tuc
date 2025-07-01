"use client"

import { useState } from "react"
import { AdvancedArticleForm } from "@/components/admin/admin-article-form"
import type { Article } from "@/types/article"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
import { LoginForm } from "@/components/admin/login-form"

export default function AdminDashboardPage() {
  const { isAuthenticated, isLoading } = useAuth();
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  if (isLoading) return <div>Đang kiểm tra đăng nhập...</div>;
  if (!isAuthenticated) return <LoginForm />;

  // Add new article
  const handleSubmit = async (articleData: any) => {
    setLoading(true)
    await fetch("/api/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(articleData),
    })
    setLoading(false)
    setSuccess(true)
    setTimeout(() => setSuccess(false), 2000)
  }

  // Save draft
  const handleSaveDraft = async (articleData: any) => {
    setLoading(true)
    await fetch("/api/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...articleData, status: "draft" }),
    })
    setLoading(false)
    setSuccess(true)
    setTimeout(() => setSuccess(false), 2000)
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
    window.location.reload()
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Thêm bài viết mới</h1>
      {success && <div className="mb-4 text-green-600 font-semibold">Đã thêm bài viết thành công!</div>}
      <AdvancedArticleForm
        onSubmit={handleSubmit}
        onSaveDraft={handleSaveDraft}
        onPreview={handlePreview}
        onCancel={handleCancel}
      />
      {loading && <div className="mt-4 text-blue-600">Đang lưu...</div>}
    </div>
  )
}
