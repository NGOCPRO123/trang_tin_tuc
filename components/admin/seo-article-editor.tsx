"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  FileText,
  Search,
  Target,
  Link,
  CheckCircle,
  AlertCircle,
  Info,
  TrendingUp,
  Eye,
  Hash,
  Type,
  AlignLeft,
  Heading1,
  Heading2,
  Heading3,
} from "lucide-react"

interface SEOAnalysis {
  score: number
  issues: string[]
  suggestions: string[]
  keywordDensity: number
  readabilityScore: number
}

interface ArticleData {
  title: string
  slug: string
  sapo: string
  content: string
  mainKeyword: string
  secondaryKeywords: string[]
  metaTitle: string
  metaDescription: string
  permalink: string
  images: Array<{
    url: string
    alt: string
    caption: string
    title: string
    filename: string
  }>
  internalLinks: string[]
  headings: Array<{
    level: number
    text: string
    hasKeyword: boolean
  }>
}

export function SEOArticleEditor() {
  const [articleData, setArticleData] = useState<ArticleData>({
    title: "",
    slug: "",
    sapo: "",
    content: "",
    mainKeyword: "",
    secondaryKeywords: [],
    metaTitle: "",
    metaDescription: "",
    permalink: "",
    images: [],
    internalLinks: [],
    headings: [],
  })

  const [seoAnalysis, setSeoAnalysis] = useState<SEOAnalysis>({
    score: 0,
    issues: [],
    suggestions: [],
    keywordDensity: 0,
    readabilityScore: 0,
  })

  const [currentKeyword, setCurrentKeyword] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)

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

  // Calculate keyword density
  const calculateKeywordDensity = useCallback((content: string, keyword: string) => {
    if (!content || !keyword) return 0
    const words = content.toLowerCase().split(/\s+/)
    const keywordCount = words.filter((word) => word.includes(keyword.toLowerCase())).length
    return (keywordCount / words.length) * 100
  }, [])

  // Extract headings from content
  const extractHeadings = useCallback((content: string, mainKeyword: string) => {
    const headingRegex = /^(#{1,3})\s+(.+)$/gm
    const headings: Array<{ level: number; text: string; hasKeyword: boolean }> = []
    let match

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length
      const text = match[2].trim()
      const hasKeyword = text.toLowerCase().includes(mainKeyword.toLowerCase())
      headings.push({ level, text, hasKeyword })
    }

    return headings
  }, [])

  // SEO Analysis
  const analyzeSEO = useCallback(() => {
    setIsAnalyzing(true)
    const issues: string[] = []
    const suggestions: string[] = []
    let score = 100

    // Title analysis
    if (!articleData.title) {
      issues.push("Thiếu tiêu đề bài viết")
      score -= 20
    } else {
      if (articleData.title.length < 50 || articleData.title.length > 60) {
        issues.push(`Tiêu đề nên có độ dài 50-60 ký tự (hiện tại: ${articleData.title.length})`)
        score -= 10
      }
      if (!articleData.title.toLowerCase().includes(articleData.mainKeyword.toLowerCase())) {
        issues.push("Tiêu đề chưa chứa từ khóa chính")
        score -= 15
      }
    }

    // SAPO analysis
    if (!articleData.sapo) {
      issues.push("Thiếu phần mô tả SAPO")
      score -= 15
    } else {
      if (articleData.sapo.length > 160) {
        issues.push(`SAPO quá dài (${articleData.sapo.length}/160 ký tự)`)
        score -= 10
      }
      if (!articleData.sapo.toLowerCase().includes(articleData.mainKeyword.toLowerCase())) {
        issues.push("SAPO chưa chứa từ khóa chính")
        score -= 10
      }
    }

    // Meta title analysis
    if (!articleData.metaTitle) {
      issues.push("Thiếu Meta Title")
      score -= 10
    } else if (articleData.metaTitle.length < 50 || articleData.metaTitle.length > 55) {
      issues.push(`Meta Title nên có độ dài 50-55 ký tự (hiện tại: ${articleData.metaTitle.length})`)
      score -= 5
    }

    // Meta description analysis
    if (!articleData.metaDescription) {
      issues.push("Thiếu Meta Description")
      score -= 10
    } else if (articleData.metaDescription.length < 145 || articleData.metaDescription.length > 160) {
      issues.push(`Meta Description nên có độ dài 145-160 ký tự (hiện tại: ${articleData.metaDescription.length})`)
      score -= 5
    }

    // Keyword density analysis
    const density = calculateKeywordDensity(articleData.content, articleData.mainKeyword)
    if (density < 3 || density > 5) {
      issues.push(`Mật độ từ khóa chính không tối ưu (${density.toFixed(1)}% - nên từ 3-5%)`)
      score -= 10
    }

    // Headings analysis
    const headings = extractHeadings(articleData.content, articleData.mainKeyword)
    const hasH1 = headings.some((h) => h.level === 1)
    const hasH2 = headings.some((h) => h.level === 2)
    const hasH3 = headings.some((h) => h.level === 3)
    const hasKeywordInHeadings = headings.some((h) => (h.level === 2 || h.level === 3) && h.hasKeyword)

    if (!hasH1) {
      issues.push("Thiếu thẻ H1")
      score -= 10
    }
    if (!hasH2) {
      issues.push("Thiếu thẻ H2")
      score -= 5
    }
    if (!hasH3) {
      issues.push("Thiếu thẻ H3 (bắt buộc)")
      score -= 10
    }
    if (!hasKeywordInHeadings) {
      issues.push("Từ khóa chính chưa xuất hiện trong H2 hoặc H3")
      score -= 10
    }

    // Content length analysis
    const paragraphs = articleData.content.split("\n\n")
    const longParagraphs = paragraphs.filter((p) => p.split("\n").length > 5)
    if (longParagraphs.length > 0) {
      issues.push(`Có ${longParagraphs.length} đoạn văn quá dài (>5 dòng)`)
      score -= 5
    }

    // Suggestions
    if (score > 80) {
      suggestions.push("Bài viết đã tối ưu SEO tốt!")
    } else if (score > 60) {
      suggestions.push("Cần cải thiện một số yếu tố SEO")
    } else {
      suggestions.push("Bài viết cần tối ưu SEO nhiều hơn")
    }

    setSeoAnalysis({
      score: Math.max(0, score),
      issues,
      suggestions,
      keywordDensity: density,
      readabilityScore: 75, // Mock readability score
    })

    setIsAnalyzing(false)
  }, [articleData, calculateKeywordDensity, extractHeadings])

  // Auto-analyze when content changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (articleData.mainKeyword && articleData.content) {
        analyzeSEO()
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [articleData, analyzeSEO])

  // Handle title change and auto-generate slug
  const handleTitleChange = (title: string) => {
    const slug = generateSlug(title)
    setArticleData((prev) => ({
      ...prev,
      title,
      slug,
      metaTitle: title.slice(0, 55),
      permalink: `/${slug}`,
    }))
  }

  // Handle SAPO change and auto-generate meta description
  const handleSapoChange = (sapo: string) => {
    setArticleData((prev) => ({
      ...prev,
      sapo,
      metaDescription: sapo.slice(0, 160),
    }))
  }

  // Add secondary keyword
  const addSecondaryKeyword = () => {
    if (currentKeyword.trim() && !articleData.secondaryKeywords.includes(currentKeyword.trim())) {
      setArticleData((prev) => ({
        ...prev,
        secondaryKeywords: [...prev.secondaryKeywords, currentKeyword.trim()],
      }))
      setCurrentKeyword("")
    }
  }

  // Remove secondary keyword
  const removeSecondaryKeyword = (keyword: string) => {
    setArticleData((prev) => ({
      ...prev,
      secondaryKeywords: prev.secondaryKeywords.filter((k) => k !== keyword),
    }))
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getCharacterCountColor = (current: number, min: number, max: number) => {
    if (current < min || current > max) return "text-red-500"
    if (current >= min && current <= max) return "text-green-500"
    return "text-yellow-500"
  }

  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header with SEO Score */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Editor Bài Viết Chuẩn SEO</h1>
            <p className="text-gray-600 mt-1">Tối ưu hóa nội dung theo chuẩn SEO Việt Nam</p>
          </div>

          <Card className="w-64">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Điểm SEO</span>
                <span className={`text-2xl font-bold ${getScoreColor(seoAnalysis.score)}`}>
                  {seoAnalysis.score}/100
                </span>
              </div>
              <Progress value={seoAnalysis.score} className="h-2" />
              {isAnalyzing && <p className="text-xs text-gray-500 mt-1">Đang phân tích...</p>}
            </CardContent>
          </Card>
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
                {/* Main Keyword */}
                <div>
                  <Label htmlFor="mainKeyword" className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    Từ khóa chính *
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Từ khóa chính sẽ được phân tích mật độ 3-5% trong bài viết</p>
                      </TooltipContent>
                    </Tooltip>
                  </Label>
                  <Input
                    id="mainKeyword"
                    value={articleData.mainKeyword}
                    onChange={(e) => setArticleData((prev) => ({ ...prev, mainKeyword: e.target.value }))}
                    placeholder="Ví dụ: thể thao, công nghệ, du lịch..."
                  />
                  {articleData.mainKeyword && (
                    <p className="text-xs text-gray-500 mt-1">
                      Mật độ từ khóa: <span className="font-medium">{seoAnalysis.keywordDensity.toFixed(1)}%</span>
                      {seoAnalysis.keywordDensity >= 3 && seoAnalysis.keywordDensity <= 5 ? (
                        <CheckCircle className="inline h-3 w-3 text-green-500 ml-1" />
                      ) : (
                        <AlertCircle className="inline h-3 w-3 text-red-500 ml-1" />
                      )}
                    </p>
                  )}
                </div>

                {/* Secondary Keywords */}
                <div>
                  <Label className="flex items-center gap-2">
                    <Hash className="h-4 w-4" />
                    Từ khóa phụ
                  </Label>
                  <div className="flex gap-2 mb-2">
                    <Input
                      value={currentKeyword}
                      onChange={(e) => setCurrentKeyword(e.target.value)}
                      placeholder="Nhập từ khóa phụ..."
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addSecondaryKeyword())}
                    />
                    <Button type="button" variant="outline" onClick={addSecondaryKeyword}>
                      Thêm
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {articleData.secondaryKeywords.map((keyword) => (
                      <Badge
                        key={keyword}
                        variant="secondary"
                        className="cursor-pointer italic"
                        onClick={() => removeSecondaryKeyword(keyword)}
                      >
                        {keyword} ×
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="title" className="flex items-center gap-2">
                      <Type className="h-4 w-4" />
                      Tên bài viết *
                    </Label>
                    <span className={`text-sm ${getCharacterCountColor(articleData.title.length, 50, 60)}`}>
                      {articleData.title.length}/50-60
                    </span>
                  </div>
                  <Input
                    id="title"
                    value={articleData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="Tên bài viết chứa từ khóa chính (50-60 ký tự)"
                  />
                  {articleData.title &&
                    !articleData.title.toLowerCase().includes(articleData.mainKeyword.toLowerCase()) && (
                      <Alert className="mt-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>Tiêu đề chưa chứa từ khóa chính</AlertDescription>
                      </Alert>
                    )}
                </div>

                {/* Slug */}
                <div>
                  <Label htmlFor="slug" className="flex items-center gap-2">
                    <Link className="h-4 w-4" />
                    Đường dẫn (Slug)
                  </Label>
                  <Input
                    id="slug"
                    value={articleData.slug}
                    onChange={(e) => setArticleData((prev) => ({ ...prev, slug: e.target.value }))}
                    placeholder="duong-dan-bai-viet"
                  />
                </div>

                {/* SAPO */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="sapo" className="flex items-center gap-2">
                      <AlignLeft className="h-4 w-4" />
                      Phần mô tả (SAPO) *
                    </Label>
                    <span className={`text-sm ${getCharacterCountColor(articleData.sapo.length, 0, 160)}`}>
                      {articleData.sapo.length}/160
                    </span>
                  </div>
                  <Textarea
                    id="sapo"
                    value={articleData.sapo}
                    onChange={(e) => handleSapoChange(e.target.value)}
                    rows={3}
                    placeholder="Giới thiệu khái quát bài viết, chứa từ khóa chính (< 160 ký tự)"
                  />
                  {articleData.sapo &&
                    !articleData.sapo.toLowerCase().includes(articleData.mainKeyword.toLowerCase()) && (
                      <Alert className="mt-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>SAPO chưa chứa từ khóa chính</AlertDescription>
                      </Alert>
                    )}
                </div>

                {/* Content */}
                <div>
                  <Label htmlFor="content" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Nội dung bài viết *
                  </Label>
                  <Textarea
                    id="content"
                    value={articleData.content}
                    onChange={(e) => setArticleData((prev) => ({ ...prev, content: e.target.value }))}
                    rows={20}
                    placeholder="# Tiêu đề H1&#10;&#10;## Tiêu đề H2 (chứa từ khóa chính)&#10;&#10;Nội dung đoạn văn không quá 5 dòng. Câu văn khoảng 20 ký tự.&#10;&#10;### Tiêu đề H3 (bắt buộc)&#10;&#10;Nội dung tiếp theo..."
                    className="font-mono text-sm"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Hỗ trợ Markdown (H1: #, H2: ##, H3: ###)</span>
                    <span>{articleData.content.length} ký tự</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* SEO Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Snippet Editor (Cài đặt SEO)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Meta Title */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Label htmlFor="metaTitle">Meta Title</Label>
                      <span className={`text-sm ${getCharacterCountColor(articleData.metaTitle.length, 50, 55)}`}>
                        {articleData.metaTitle.length}/50-55
                      </span>
                    </div>
                    <Input
                      id="metaTitle"
                      value={articleData.metaTitle}
                      onChange={(e) => setArticleData((prev) => ({ ...prev, metaTitle: e.target.value }))}
                      placeholder="Tiêu đề hiển thị trên Google (50-55 ký tự)"
                    />
                  </div>

                  {/* Permalink */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Label htmlFor="permalink">Permalink</Label>
                      <span className={`text-sm ${getCharacterCountColor(articleData.permalink.length, 65, 70)}`}>
                        {articleData.permalink.length}/65-70
                      </span>
                    </div>
                    <Input
                      id="permalink"
                      value={articleData.permalink}
                      onChange={(e) => setArticleData((prev) => ({ ...prev, permalink: e.target.value }))}
                      placeholder="/duong-dan-bai-viet (65-70 ký tự)"
                    />
                  </div>

                  {/* Meta Description */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Label htmlFor="metaDescription">Meta Description</Label>
                      <span
                        className={`text-sm ${getCharacterCountColor(articleData.metaDescription.length, 145, 160)}`}
                      >
                        {articleData.metaDescription.length}/145-160
                      </span>
                    </div>
                    <Textarea
                      id="metaDescription"
                      value={articleData.metaDescription}
                      onChange={(e) => setArticleData((prev) => ({ ...prev, metaDescription: e.target.value }))}
                      rows={3}
                      placeholder="Mô tả hiển thị trên Google, chứa từ khóa chính (145-160 ký tự)"
                    />
                  </div>
                </div>

                {/* SEO Preview */}
                <div className="mt-6">
                  <Label className="text-sm font-medium mb-2 block">Xem trước trên Google</Label>
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div className="text-blue-600 text-lg font-medium line-clamp-1">
                      {articleData.metaTitle || articleData.title || "Tiêu đề bài viết"}
                    </div>
                    <div className="text-green-700 text-sm mt-1">domain.com{articleData.permalink || "/duong-dan"}</div>
                    <div className="text-gray-600 text-sm mt-2 line-clamp-2">
                      {articleData.metaDescription || articleData.sapo || "Mô tả bài viết sẽ hiển thị ở đây..."}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* SEO Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Phân tích SEO
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Điểm tổng thể</span>
                    <span className={`font-bold ${getScoreColor(seoAnalysis.score)}`}>{seoAnalysis.score}/100</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Mật độ từ khóa</span>
                      <span
                        className={
                          seoAnalysis.keywordDensity >= 3 && seoAnalysis.keywordDensity <= 5
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {seoAnalysis.keywordDensity.toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Độ dễ đọc</span>
                      <span className="text-green-600">{seoAnalysis.readabilityScore}/100</span>
                    </div>
                  </div>

                  {seoAnalysis.issues.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-red-600 mb-2">Vấn đề cần khắc phục:</h4>
                      <ul className="space-y-1">
                        {seoAnalysis.issues.map((issue, index) => (
                          <li key={index} className="text-xs text-red-600 flex items-start gap-1">
                            <AlertCircle className="h-3 w-3 mt-0.5 shrink-0" />
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {seoAnalysis.suggestions.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-blue-600 mb-2">Gợi ý cải thiện:</h4>
                      <ul className="space-y-1">
                        {seoAnalysis.suggestions.map((suggestion, index) => (
                          <li key={index} className="text-xs text-blue-600 flex items-start gap-1">
                            <Info className="h-3 w-3 mt-0.5 shrink-0" />
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Content Structure */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlignLeft className="h-5 w-5" />
                  Cấu trúc nội dung
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {extractHeadings(articleData.content, articleData.mainKeyword).map((heading, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      {heading.level === 1 && <Heading1 className="h-4 w-4 text-blue-600" />}
                      {heading.level === 2 && <Heading2 className="h-4 w-4 text-green-600" />}
                      {heading.level === 3 && <Heading3 className="h-4 w-4 text-purple-600" />}
                      <span className={heading.hasKeyword ? "font-medium text-green-600" : "text-gray-600"}>
                        {heading.text}
                      </span>
                      {heading.hasKeyword && <CheckCircle className="h-3 w-3 text-green-500" />}
                    </div>
                  ))}
                  {extractHeadings(articleData.content, articleData.mainKeyword).length === 0 && (
                    <p className="text-sm text-gray-500">Chưa có heading nào được phát hiện</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  Checklist SEO
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Tiêu đề 50-60 ký tự</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>SAPO &lt; 160 ký tự</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Từ khóa chính 3-5%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Có H1, H2, H3</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Đoạn văn ≤ 5 dòng</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Ảnh có alt text</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-6 border-t">
          <Button variant="outline">Hủy bỏ</Button>
          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              Xem trước
            </Button>
            <Button>
              <CheckCircle className="h-4 w-4 mr-2" />
              Xuất bản
            </Button>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
