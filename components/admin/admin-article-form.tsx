"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  FileText,
  User,
  ImageIcon,
  Search,
  Eye,
  Save,
  Clock,
  Tag,
  Globe,
  AlertCircle,
  CheckCircle,
  Info,
  Settings,
  Link,
} from "lucide-react"
import { MediaUpload } from "./media-upload"

interface ArticleFormData {
  title: string
  slug: string
  content: string
  summary: string
  category: string
  tags: string[]
  author: string
  status: "draft" | "pending" | "published" | "private"
  scheduledDate?: string
  featuredImage: string
  altText: string
  metaTitle: string
  metaDescription: string
  canonicalUrl: string
  noIndex: boolean
  noFollow: boolean
  ogTitle: string
  ogDescription: string
  ogImage: string
}

interface AdvancedArticleFormProps {
  article?: Partial<ArticleFormData>
  onSubmit: (data: ArticleFormData) => void
  onSaveDraft: (data: ArticleFormData) => void
  onPreview: (data: ArticleFormData) => void
  onCancel: () => void
}

const categories = ["Thời sự", "Thể thao", "Giải trí", "Công nghệ", "Kinh tế", "Xã hội", "Thông báo", "Du lịch"]

const statusOptions = [
  { value: "draft", label: "Lưu nháp", color: "bg-gray-500" },
  { value: "pending", label: "Đang chờ duyệt", color: "bg-yellow-500" },
  { value: "published", label: "Xuất bản", color: "bg-green-500" },
  { value: "private", label: "Riêng tư", color: "bg-red-500" },
]

export function AdvancedArticleForm({ article, onSubmit, onSaveDraft, onPreview, onCancel }: AdvancedArticleFormProps) {
  const [formData, setFormData] = useState<ArticleFormData>({
    title: "",
    slug: "",
    content: "",
    summary: "",
    category: "",
    tags: [],
    author: "Admin",
    status: "draft",
    featuredImage: "",
    altText: "",
    metaTitle: "",
    metaDescription: "",
    canonicalUrl: "",
    noIndex: false,
    noFollow: false,
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    ...article,
  })

  const [currentTag, setCurrentTag] = useState("")
  const [isAutoSaving, setIsAutoSaving] = useState(false)
  const [lastSaved, setLastSaved] = useState<Date | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Auto-generate slug from title
  const generateSlug = useCallback((title: string) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[đĐ]/g, "d")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim()
  }, [])

  // Auto-generate meta fields
  useEffect(() => {
    if (formData.title && !formData.metaTitle) {
      setFormData((prev) => ({
        ...prev,
        metaTitle: prev.title.slice(0, 60),
        ogTitle: prev.title,
      }))
    }
    if (formData.summary && !formData.metaDescription) {
      setFormData((prev) => ({
        ...prev,
        metaDescription: prev.summary.slice(0, 160),
        ogDescription: prev.summary,
      }))
    }
  }, [formData.title, formData.summary])

  // Auto-save functionality
  useEffect(() => {
    const autoSave = setTimeout(() => {
      if (formData.title || formData.content) {
        setIsAutoSaving(true)
        // Simulate auto-save
        setTimeout(() => {
          setIsAutoSaving(false)
          setLastSaved(new Date())
        }, 1000)
      }
    }, 10000) // Auto-save every 10 seconds

    return () => clearTimeout(autoSave)
  }, [formData])

  const handleTitleChange = (title: string) => {
    const slug = generateSlug(title)
    setFormData((prev) => ({ ...prev, title, slug }))
  }

  const handleAddTag = () => {
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()],
      }))
      setCurrentTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.title.trim()) newErrors.title = "Tiêu đề là bắt buộc"
    if (formData.title.length > 60) newErrors.title = "Tiêu đề không nên vượt quá 60 ký tự"
    if (!formData.content.trim()) newErrors.content = "Nội dung là bắt buộc"
    if (!formData.summary.trim()) newErrors.summary = "Tóm tắt là bắt buộc"
    if (!formData.category) newErrors.category = "Danh mục là bắt buộc"
    if (formData.metaDescription.length > 160)
      newErrors.metaDescription = "Meta description không nên vượt quá 160 ký tự"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (action: "publish" | "draft" | "preview") => {
    if (action !== "draft" && !validateForm()) return

    const submitData = {
      ...formData,
      ogImage: formData.ogImage || formData.featuredImage,
      image: formData.featuredImage,
    }

    switch (action) {
      case "publish":
        onSubmit({ ...submitData, status: "published" })
        break
      case "draft":
        onSaveDraft(submitData)
        break
      case "preview":
        onPreview(submitData)
        break
    }
  }

  const getCharacterCountColor = (current: number, max: number) => {
    const percentage = (current / max) * 100
    if (percentage > 90) return "text-red-500"
    if (percentage > 75) return "text-yellow-500"
    return "text-green-500"
  }

  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{article ? "Chỉnh sửa bài viết" : "Thêm bài viết mới"}</h1>
            {lastSaved && (
              <p className="text-sm text-gray-500 mt-1">
                Lưu tự động lần cuối: {lastSaved.toLocaleTimeString("vi-VN")}
                {isAutoSaving && <span className="ml-2 text-blue-500">Đang lưu...</span>}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Thông tin cơ bản
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Title */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="title" className="flex items-center gap-2">
                      Tiêu đề *
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Tiêu đề tối ưu SEO nên từ 50-60 ký tự</p>
                        </TooltipContent>
                      </Tooltip>
                    </Label>
                    <span className={`text-sm ${getCharacterCountColor(formData.title.length, 60)}`}>
                      {formData.title.length}/60
                    </span>
                  </div>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="Ví dụ: Bí quyết tối ưu doanh thu trong quý 3"
                    className={errors.title ? "border-red-500" : ""}
                  />
                  {errors.title && (
                    <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.title}
                    </p>
                  )}
                </div>

                {/* Slug */}
                <div>
                  <Label htmlFor="slug" className="flex items-center gap-2">
                    <Link className="h-4 w-4" />
                    Đường dẫn (Slug)
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>URL thân thiện SEO, tự động tạo từ tiêu đề</p>
                      </TooltipContent>
                    </Tooltip>
                  </Label>
                  <div className="space-y-2">
                    <Input
                      id="slug"
                      value={formData.slug}
                      onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
                      placeholder="bai-viet-moi"
                    />
                    <p className="text-xs text-gray-500">
                      URL:{" "}
                      <span className="font-mono">
                        https://domain.com/{formData.category.toLowerCase()}/{formData.slug}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Category & Tags */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Danh mục *</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
                    >
                      <SelectTrigger className={errors.category ? "border-red-500" : ""}>
                        <SelectValue placeholder="Chọn danh mục" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.category && <p className="text-sm text-red-500 mt-1">{errors.category}</p>}
                  </div>

                  <div>
                    <Label className="flex items-center gap-2">
                      <Tag className="h-4 w-4" />
                      Tags (từ khóa)
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        value={currentTag}
                        onChange={(e) => setCurrentTag(e.target.value)}
                        placeholder="Nhập tag..."
                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTag())}
                      />
                      <Button type="button" variant="outline" onClick={handleAddTag}>
                        Thêm
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {formData.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="cursor-pointer"
                          onClick={() => handleRemoveTag(tag)}
                        >
                          {tag} ×
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <Label htmlFor="summary">Tóm tắt *</Label>
                  <Textarea
                    id="summary"
                    value={formData.summary}
                    onChange={(e) => setFormData((prev) => ({ ...prev, summary: e.target.value }))}
                    rows={3}
                    placeholder="Tóm tắt ngắn gọn về nội dung bài viết..."
                    className={errors.summary ? "border-red-500" : ""}
                  />
                  {errors.summary && <p className="text-sm text-red-500 mt-1">{errors.summary}</p>}
                </div>

                {/* Content */}
                <div>
                  <Label htmlFor="content">Nội dung *</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
                    rows={15}
                    placeholder="Viết nội dung bài viết tại đây..."
                    className={`font-mono ${errors.content ? "border-red-500" : ""}`}
                  />
                  {errors.content && <p className="text-sm text-red-500 mt-1">{errors.content}</p>}
                  <p className="text-xs text-gray-500 mt-1">
                    Hỗ trợ Markdown. Sử dụng **bold**, *italic*, # heading, etc.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* SEO Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Cấu hình SEO
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="basic" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="basic">Cơ bản</TabsTrigger>
                    <TabsTrigger value="social">Social Media</TabsTrigger>
                    <TabsTrigger value="advanced">Nâng cao</TabsTrigger>
                  </TabsList>

                  <TabsContent value="basic" className="space-y-4 mt-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label htmlFor="metaTitle">Meta Title</Label>
                        <span className={`text-sm ${getCharacterCountColor(formData.metaTitle.length, 60)}`}>
                          {formData.metaTitle.length}/60
                        </span>
                      </div>
                      <Input
                        id="metaTitle"
                        value={formData.metaTitle}
                        onChange={(e) => setFormData((prev) => ({ ...prev, metaTitle: e.target.value }))}
                        placeholder="Tiêu đề hiển thị trên Google"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label htmlFor="metaDescription">Meta Description</Label>
                        <span className={`text-sm ${getCharacterCountColor(formData.metaDescription.length, 160)}`}>
                          {formData.metaDescription.length}/160
                        </span>
                      </div>
                      <Textarea
                        id="metaDescription"
                        value={formData.metaDescription}
                        onChange={(e) => setFormData((prev) => ({ ...prev, metaDescription: e.target.value }))}
                        rows={3}
                        placeholder="Mô tả hiển thị trên kết quả tìm kiếm"
                        className={errors.metaDescription ? "border-red-500" : ""}
                      />
                      {errors.metaDescription && <p className="text-sm text-red-500 mt-1">{errors.metaDescription}</p>}
                    </div>

                    <div>
                      <Label htmlFor="canonicalUrl">Canonical URL</Label>
                      <Input
                        id="canonicalUrl"
                        value={formData.canonicalUrl}
                        onChange={(e) => setFormData((prev) => ({ ...prev, canonicalUrl: e.target.value }))}
                        placeholder="https://domain.com/bai-viet-chinh"
                      />
                      <p className="text-xs text-gray-500 mt-1">Để tránh duplicate content</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="social" className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="ogTitle">Facebook/Twitter Title</Label>
                      <Input
                        id="ogTitle"
                        value={formData.ogTitle}
                        onChange={(e) => setFormData((prev) => ({ ...prev, ogTitle: e.target.value }))}
                        placeholder="Tiêu đề khi chia sẻ trên mạng xã hội"
                      />
                    </div>

                    <div>
                      <Label htmlFor="ogDescription">Facebook/Twitter Description</Label>
                      <Textarea
                        id="ogDescription"
                        value={formData.ogDescription}
                        onChange={(e) => setFormData((prev) => ({ ...prev, ogDescription: e.target.value }))}
                        rows={3}
                        placeholder="Mô tả khi chia sẻ trên mạng xã hội"
                      />
                    </div>

                    <div>
                      <Label htmlFor="ogImage">Social Media Image URL</Label>
                      <Input
                        id="ogImage"
                        value={formData.ogImage}
                        onChange={(e) => setFormData((prev) => ({ ...prev, ogImage: e.target.value }))}
                        placeholder="https://domain.com/social-image.jpg"
                      />
                      <p className="text-xs text-gray-500 mt-1">Kích thước khuyến nghị: 1200x630px</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="advanced" className="space-y-4 mt-4">
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="noIndex"
                        checked={formData.noIndex}
                        onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, noIndex: checked }))}
                      />
                      <Label htmlFor="noIndex">Chặn Google index bài viết này</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        id="noFollow"
                        checked={formData.noFollow}
                        onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, noFollow: checked }))}
                      />
                      <Label htmlFor="noFollow">NoFollow links trong bài viết</Label>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publish Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Cài đặt xuất bản
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="author" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Tác giả
                  </Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) => setFormData((prev) => ({ ...prev, author: e.target.value }))}
                  />
                </div>

                <div>
                  <Label htmlFor="status">Trạng thái</Label>
                  <Select
                    value={formData.status}
                    onValueChange={(value: any) => setFormData((prev) => ({ ...prev, status: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {statusOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${option.color}`} />
                            {option.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="scheduledDate" className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Lên lịch đăng
                  </Label>
                  <Input
                    id="scheduledDate"
                    type="datetime-local"
                    value={formData.scheduledDate}
                    onChange={(e) => setFormData((prev) => ({ ...prev, scheduledDate: e.target.value }))}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Featured Image */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5" />
                  Ảnh đại diện
                </CardTitle>
              </CardHeader>
              <CardContent>
                <MediaUpload
                  imageUrl={formData.featuredImage}
                  videoUrl=""
                  onImageChange={(url) => setFormData((prev) => ({ ...prev, featuredImage: url }))}
                  onVideoChange={() => {}}
                />

                {formData.featuredImage && (
                  <div className="mt-4">
                    <Label htmlFor="altText">Alt Text</Label>
                    <Input
                      id="altText"
                      value={formData.altText}
                      onChange={(e) => setFormData((prev) => ({ ...prev, altText: e.target.value }))}
                      placeholder="Mô tả ảnh cho SEO và accessibility"
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* SEO Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Xem trước SEO
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg p-4 bg-gray-50">
                  <div className="text-blue-600 text-lg font-medium line-clamp-1">
                    {formData.metaTitle || formData.title || "Tiêu đề bài viết"}
                  </div>
                  <div className="text-green-700 text-sm mt-1">
                    domain.com › {formData.category.toLowerCase()} › {formData.slug}
                  </div>
                  <div className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {formData.metaDescription || formData.summary || "Mô tả bài viết sẽ hiển thị ở đây..."}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-6 border-t">
          <Button variant="outline" onClick={onCancel}>
            Hủy bỏ
          </Button>

          <div className="flex items-center space-x-3">
            <Button variant="outline" onClick={() => handleSubmit("draft")}>
              <Save className="h-4 w-4 mr-2" />
              Lưu nháp
            </Button>
            <Button variant="outline" onClick={() => handleSubmit("preview")}>
              <Eye className="h-4 w-4 mr-2" />
              Xem trước
            </Button>
            <Button onClick={() => handleSubmit("publish")} className="bg-blue-600 hover:bg-blue-700">
              <CheckCircle className="h-4 w-4 mr-2" />
              Xuất bản
            </Button>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
