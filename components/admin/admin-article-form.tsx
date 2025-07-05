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
import { RichTextEditor } from "./rich-text-editor"
import { TableOfContents } from "./table-of-contents"
import { TocInserter } from "./toc-inserter"
import { generateSlug } from "@/lib/utils"

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
  type: string
}

interface AdvancedArticleFormProps {
  article?: Partial<ArticleFormData>
  onSubmit: (data: ArticleFormData) => void
  onSaveDraft: (data: ArticleFormData) => void
  onPreview: (data: ArticleFormData) => void
  onCancel: () => void
  resetKey?: number
  successMessage?: string
}

const categories = [
  "Tư vấn Tài chính & Huy động vốn",
  "Nghiệp vụ Kế toán – Thuế",
  "Chiến lược Tăng doanh số bền vững",
  "Tư vấn Pháp lý & Quản trị rủi ro",
  "Tối ưu Vận hành & An ninh Doanh nghiệp"
]

const statusOptions = [
  { value: "draft", label: "Lưu nháp", color: "bg-gray-500" },
  { value: "pending", label: "Đang chờ duyệt", color: "bg-blue-400" },
  { value: "published", label: "Xuất bản", color: "bg-green-500" },
  { value: "private", label: "Riêng tư", color: "bg-red-500" },
]

const typeOptions = [
  { value: "giai-phap", label: "Giải pháp" },
  { value: "kien-thuc", label: "Kiến thức" },
]

const categoryOptionsByType: Record<string, string[]> = {
  "giai-phap": [
    "Tư vấn Tài chính & Huy động vốn",
    "Nghiệp vụ Kế toán – Thuế",
    "Chiến lược Tăng doanh số bền vững",
    "Tư vấn Pháp lý & Quản trị rủi ro",
    "Tối ưu Vận hành & An ninh Doanh nghiệp"
  ],
  "kien-thuc": [
    "Quản trị doanh nghiệp",
    "Giải pháp doanh nghiệp",
    "Phát triển bền vững"
  ]
};

export function AdvancedArticleForm({ article, onSubmit, onSaveDraft, onPreview, onCancel, resetKey, successMessage }: AdvancedArticleFormProps) {
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
    type: "giai-phap",
    ...article,
  })

  const [currentTag, setCurrentTag] = useState("")
  const [isAutoSaving, setIsAutoSaving] = useState(false)
  const [lastSaved, setLastSaved] = useState<Date | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showTableOfContents, setShowTableOfContents] = useState(true)

  // Auto-generate slug from title using utility function

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

  // Reset form when resetKey changes
  useEffect(() => {
    if (resetKey && !article) {
      setFormData({
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
        type: "giai-phap",
      })
      setCurrentTag("")
      setErrors({})
      setLastSaved(null)
    }
  }, [resetKey, article])

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

  // Thêm hàm loại bỏ tag HTML
  function stripHtml(html: string) {
    return html.replace(/<[^>]*>?/gm, '').trim();
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.title.trim()) newErrors.title = "Tiêu đề là bắt buộc"
    if (formData.title.length > 60) newErrors.title = "Tiêu đề không nên vượt quá 60 ký tự"
    if (!stripHtml(formData.content)) newErrors.content = "Nội dung là bắt buộc"
    if (!formData.summary.trim()) newErrors.summary = "Tóm tắt là bắt buộc"
    if (!formData.category) newErrors.category = "Danh mục là bắt buộc"
    if (formData.metaDescription.length > 160)
      newErrors.metaDescription = "Meta description không nên vượt quá 160 ký tự"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (action: "publish" | "draft" | "preview") => {
    if (action !== "draft" && !validateForm()) return

    // Chuyển scheduledDate local time sang ISO (UTC+7) nếu có
    let scheduledDateISO = formData.scheduledDate
      ? new Date(formData.scheduledDate + ':00+07:00').toISOString()
      : "";

    const submitData = {
      ...formData,
      scheduledDate: scheduledDateISO || undefined,
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
    if (percentage > 75) return "text-blue-400"
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
            <Card className="bg-white border border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <FileText className="h-5 w-5 text-blue-500" />
                  Thông tin cơ bản
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Title */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="title" className="flex items-center gap-2 text-slate-700 font-semibold">
                      Tiêu đề *
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-4 w-4 text-blue-400" />
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
                    className={`bg-white border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-slate-900 ${errors.title ? "border-red-500" : "border-slate-200"}`}
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
                      placeholder="cuoc-song-sau-dai-dich"
                      className={`bg-white border-2 border-slate-200 text-slate-900`}
                    />
                    <p className="text-xs text-gray-500">
                      URL:{" "}
                      <span className="font-mono">
                        https://domain.com/{formData.slug}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Type (Loại bài viết) */}
                <div>
                  <Label htmlFor="type">Loại bài viết *</Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, type: value, category: "" }))}
                  >
                    <SelectTrigger className="bg-white border-2 border-slate-200 text-slate-900">
                      <SelectValue placeholder="Chọn loại bài viết" />
                    </SelectTrigger>
                    <SelectContent>
                      {typeOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Category & Tags */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Danh mục *</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
                      disabled={!formData.type}
                    >
                      <SelectTrigger className={`bg-white border-2 border-slate-200 text-slate-900 ${errors.category ? "border-red-500" : "border-slate-200"}` + (!formData.type ? " opacity-60 cursor-not-allowed" : "") }>
                        <SelectValue placeholder={formData.type ? "Chọn danh mục" : "Chọn loại bài viết trước"} />
                      </SelectTrigger>
                      <SelectContent>
                        {(categoryOptionsByType[formData.type] || []).map((category) => (
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
                        className={`bg-white border-2 border-slate-200 text-slate-900`}
                      />
                      <Button type="button" variant="outline" className="rounded-lg bg-slate-50 border-2 border-slate-200 hover:border-blue-400 text-slate-900" onClick={handleAddTag}>
                        Thêm
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {formData.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-slate-100 text-slate-900 border border-slate-200 cursor-pointer"
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
                    className={`bg-white border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-slate-900 ${errors.summary ? "border-red-500" : "border-slate-200"}`}
                  />
                  {errors.summary && <p className="text-sm text-red-500 mt-1">{errors.summary}</p>}
                </div>

                {/* Content */}
                <div>
                  <Label htmlFor="content">Nội dung *</Label>
                  <RichTextEditor
                    value={formData.content}
                    onChange={val => setFormData(prev => ({ ...prev, content: val }))}
                    placeholder="Viết nội dung bài viết tại đây..."
                  />
                  {errors.content && <p className="text-sm text-red-500 mt-1">{errors.content}</p>}
                  <p className="text-xs text-gray-500 mt-1">
                    Hỗ trợ Markdown. Sử dụng **bold**, *italic*, # heading, etc.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* SEO Settings */}
            <Card className="bg-white border border-slate-200">
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
                        className={`bg-white border-2 border-slate-200 text-slate-900`}
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
                        className={`bg-white border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-slate-900 ${errors.metaDescription ? "border-red-500" : "border-slate-200"}`}
                      />
                      {errors.metaDescription && <p className="text-sm text-red-500 mt-1">{errors.metaDescription}</p>}
                    </div>

                    <div>
                      <Label htmlFor="canonicalUrl">Canonical URL</Label>
                      <Input
                        id="canonicalUrl"
                        value={formData.canonicalUrl}
                        onChange={(e) => setFormData((prev) => ({ ...prev, canonicalUrl: e.target.value }))}
                        placeholder="https://domain.com/cuoc-song-sau-dai-dich"
                        className={`bg-white border-2 border-slate-200 text-slate-900`}
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
                        className={`bg-white border-2 border-slate-200 text-slate-900`}
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
                        className={`bg-white border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-slate-900 ${errors.ogDescription ? "border-red-500" : "border-slate-200"}`}
                      />
                    </div>

                    <div>
                      <Label htmlFor="ogImage">Social Media Image URL</Label>
                      <Input
                        id="ogImage"
                        value={formData.ogImage}
                        onChange={(e) => setFormData((prev) => ({ ...prev, ogImage: e.target.value }))}
                        placeholder="https://domain.com/social-image.jpg"
                        className={`bg-white border-2 border-slate-200 text-slate-900`}
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
            <Card className="bg-white border border-slate-200">
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
                    className={`bg-white border-2 border-slate-200 text-slate-900`}
                  />
                </div>

                <div>
                  <Label htmlFor="status">Trạng thái</Label>
                  <Select
                    value={formData.status}
                    onValueChange={(value: any) => setFormData((prev) => ({ ...prev, status: value }))}
                  >
                    <SelectTrigger className={`bg-white border-2 border-slate-200 text-slate-900`}>
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
                    value={formData.scheduledDate || ""}
                    onChange={(e) => {
                      // Lưu local time, không chuyển sang UTC
                      setFormData((prev) => ({ ...prev, scheduledDate: e.target.value }));
                    }}
                    className={`bg-white border-2 border-slate-200 text-slate-900`}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Featured Image */}
            <Card className="bg-white border border-slate-200">
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
                      className={`bg-white border-2 border-slate-200 text-slate-900`}
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* SEO Preview */}
            <Card className="bg-white border border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Xem trước SEO
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4">
                  <div className="flex flex-col gap-1">
                    {/* Tiêu đề */}
                    <div
                      className="text-[#1a0dab] text-xl font-medium leading-tight hover:underline cursor-pointer transition-all line-clamp-2"
                      title={formData.metaTitle || formData.title || "Tiêu đề bài viết"}
                      style={{ wordBreak: 'break-word', marginBottom: 2 }}
                    >
                      {formData.metaTitle || formData.title || "Tiêu đề bài viết"}
                    </div>
                    {/* Đường dẫn */}
                    <div className="flex items-center text-[#006621] text-sm gap-1 mb-1">
                      <span className="truncate max-w-[180px] md:max-w-[240px]" title="domain.com">
                        domain.com
                      </span>
                      <span className="mx-1">›</span>
                      <span className="truncate max-w-[120px] md:max-w-[180px]" title={formData.slug}>
                        {formData.slug || ''}
                      </span>
                    </div>
                    {/* Mô tả */}
                    <div
                      className="text-[#545454] text-base leading-snug line-clamp-3 mt-1"
                      title={formData.metaDescription || formData.summary || "Mô tả bài viết sẽ hiển thị ở đây..."}
                      style={{ wordBreak: 'break-word' }}
                    >
                      {formData.metaDescription || formData.summary || "Mô tả bài viết sẽ hiển thị ở đây..."}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Table of Contents */}
            <TableOfContents 
              content={formData.content}
              onToggle={setShowTableOfContents}
              className="sticky top-6"
            />

            {/* TOC Inserter */}
            <TocInserter
              content={formData.content}
              onInsert={(tocHtml) => setFormData(prev => ({ ...prev, content: tocHtml }))}
              className="sticky top-6"
            />

            {/* Thông báo thành công dưới SEO Preview */}
            {successMessage && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-800 font-semibold">{successMessage}</span>
                </div>
                <p className="text-green-600 text-sm mt-1">Form sẽ được reset để tạo bài viết mới...</p>
              </div>
            )}
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
