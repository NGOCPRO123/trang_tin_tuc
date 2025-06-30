"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MediaUpload } from "@/components/admin/media-upload"
import type { Article } from "@/types/article"
import { FileText, User as UserIcon, BookOpen, Tag } from "lucide-react"

interface ArticleFormProps {
  article?: Article
  onSubmit: (article: Omit<Article, "id" | "publishedAt">) => void
  onCancel: () => void
}

const categories = ["Thời sự", "Thể thao", "Giải trí", "Công nghệ", "Kinh tế", "Xã hội", "Thông báo"]

export function ArticleForm({ article, onSubmit, onCancel }: ArticleFormProps) {
  const [formData, setFormData] = useState({
    title: article?.title || "",
    summary: article?.summary || "",
    content: article?.content || "",
    category: article?.category || "",
    image: article?.image || "",
    video: article?.video || "",
    author: article?.author || "Admin",
    viewCount: article?.viewCount || 0,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.title || !formData.summary || !formData.content || !formData.category) {
      alert("Vui lòng điền đầy đủ thông tin bắt buộc!")
      return
    }
    onSubmit(formData)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="shadow-lg bg-blue-50/40 border-0 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2 text-blue-900">
            <FileText className="h-6 w-6 text-blue-500" />
            {article ? "Chỉnh sửa bài viết" : "Thêm bài viết mới"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="title" className="text-blue-900 flex items-center gap-1">
                <BookOpen className="h-4 w-4 text-blue-400" /> Tiêu đề *
              </Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Nhập tiêu đề bài viết..."
                required
                className="bg-white/80 border-blue-200 focus:ring-2 focus:ring-blue-400 rounded-xl mt-1"
              />
              <p className="text-xs text-muted-foreground mt-1">Tiêu đề sẽ hiển thị trên trang chủ và trang chi tiết.</p>
            </div>

            <div>
              <Label htmlFor="category" className="text-blue-900 flex items-center gap-1">
                <Tag className="h-4 w-4 text-blue-400" /> Danh mục *
              </Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
              >
                <SelectTrigger className="bg-white/80 border-blue-200 focus:ring-2 focus:ring-blue-400 rounded-xl mt-1">
                  <SelectValue placeholder="Chọn danh mục" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category} className="flex items-center gap-2">
                      <Tag className="h-4 w-4 text-blue-400" /> {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground mt-1">Chọn chủ đề phù hợp cho bài viết.</p>
            </div>

            <div>
              <Label htmlFor="author" className="text-blue-900 flex items-center gap-1">
                <UserIcon className="h-4 w-4 text-blue-400" /> Tác giả
              </Label>
              <Input
                id="author"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                placeholder="Tên tác giả..."
                className="bg-white/80 border-blue-200 focus:ring-2 focus:ring-blue-400 rounded-xl mt-1"
              />
              <p className="text-xs text-muted-foreground mt-1">Tên tác giả sẽ hiển thị ở bài viết.</p>
            </div>

            <div>
              <Label className="text-blue-900 flex items-center gap-1 mb-3">
                <BookOpen className="h-4 w-4 text-blue-400" /> Hình ảnh & Video
              </Label>
              <MediaUpload
                imageUrl={formData.image}
                videoUrl={formData.video}
                onImageChange={(url) => setFormData({ ...formData, image: url })}
                onVideoChange={(url) => setFormData({ ...formData, video: url })}
              />
              <p className="text-xs text-muted-foreground mt-2">
                Upload ảnh hoặc video để hiển thị trên trang chủ. Video sẽ được ưu tiên hiển thị nếu có.
              </p>
            </div>

            <div>
              <Label htmlFor="summary" className="text-blue-900 flex items-center gap-1">
                <BookOpen className="h-4 w-4 text-blue-400" /> Tóm tắt *
              </Label>
              <Textarea
                id="summary"
                value={formData.summary}
                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                rows={3}
                required
                placeholder="Nhập tóm tắt ngắn gọn cho bài viết..."
                className="bg-white/80 border-blue-200 focus:ring-2 focus:ring-blue-400 rounded-xl mt-1"
              />
              <p className="text-xs text-muted-foreground mt-1">Tóm tắt sẽ hiển thị ở trang chủ.</p>
            </div>

            <div>
              <Label htmlFor="content" className="text-blue-900 flex items-center gap-1">
                <BookOpen className="h-4 w-4 text-blue-400" /> Nội dung *
              </Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={10}
                required
                placeholder="Nhập nội dung chi tiết bài viết..."
                className="bg-white/80 border-blue-200 focus:ring-2 focus:ring-blue-400 rounded-xl mt-1"
              />
              <p className="text-xs text-muted-foreground mt-1">Nội dung đầy đủ của bài viết.</p>
            </div>

            <div className="flex space-x-2 mt-6">
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-2 shadow">
                {article ? "Lưu thay đổi" : "Thêm mới"}
              </Button>
              <Button type="button" variant="outline" onClick={onCancel} className="rounded-xl px-6 py-2">
                Hủy
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
