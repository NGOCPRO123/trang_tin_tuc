"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ImageIcon, Upload, CheckCircle, AlertCircle, Info } from "lucide-react"

interface SEOImageProps {
  mainKeyword: string
  onImageAdd: (image: {
    url: string
    alt: string
    caption: string
    title: string
    filename: string
  }) => void
}

export function SEOImageOptimizer({ mainKeyword, onImageAdd }: SEOImageProps) {
  const [imageUrl, setImageUrl] = useState("")
  const [altText, setAltText] = useState("")
  const [caption, setCaption] = useState("")
  const [filename, setFilename] = useState("")
  const [imageCount, setImageCount] = useState(1)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const generateSEOFilename = (keyword: string, count: number) => {
    const baseFilename = keyword
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[đĐ]/g, "d")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")

    return count === 1 ? baseFilename : `${baseFilename}-${count}`
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith("image/")) {
      alert("Vui lòng chọn file ảnh hợp lệ!")
      return
    }

    // Generate SEO-friendly filename
    const seoFilename = generateSEOFilename(mainKeyword, imageCount)
    const extension = file.name.split(".").pop()
    const newFilename = `${seoFilename}.${extension}`

    // Create preview URL
    const reader = new FileReader()
    reader.onload = (e) => {
      setImageUrl(e.target?.result as string)
      setFilename(newFilename)
      setAltText(`${mainKeyword} - Hình ảnh ${imageCount}`)
      setCaption(`Hình ảnh minh họa cho ${mainKeyword}`)
    }
    reader.readAsDataURL(file)
  }

  const handleAddImage = () => {
    if (!imageUrl || !altText || !caption) {
      alert("Vui lòng điền đầy đủ thông tin ảnh!")
      return
    }

    onImageAdd({
      url: imageUrl,
      alt: altText,
      caption: caption,
      title: altText,
      filename: filename,
    })

    // Reset form
    setImageUrl("")
    setAltText("")
    setCaption("")
    setFilename("")
    setImageCount((prev) => prev + 1)
  }

  const checkImageSEO = () => {
    const issues: string[] = []
    const suggestions: string[] = []

    if (!altText.toLowerCase().includes(mainKeyword.toLowerCase())) {
      issues.push("Alt text chưa chứa từ khóa chính")
    }

    if (!caption.toLowerCase().includes(mainKeyword.toLowerCase())) {
      suggestions.push("Nên thêm từ khóa chính vào caption")
    }

    if (!filename.toLowerCase().includes(mainKeyword.toLowerCase())) {
      issues.push("Tên file chưa chứa từ khóa chính")
    }

    return { issues, suggestions }
  }

  const seoCheck = checkImageSEO()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ImageIcon className="h-5 w-5" />
          Tối ưu hình ảnh SEO
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Upload Section */}
        <div>
          <Label className="text-sm font-medium mb-2 block">Upload hình ảnh</Label>
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2"
            >
              <Upload className="h-4 w-4" />
              Chọn ảnh
            </Button>
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          </div>
          <p className="text-xs text-gray-500 mt-1">Kích thước khuyến nghị: &gt; 800px chiều ngang</p>
        </div>

        {/* URL Input */}
        <div>
          <Label htmlFor="imageUrl">Hoặc nhập URL ảnh</Label>
          <Input
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {/* SEO Fields */}
        {imageUrl && (
          <>
            <div>
              <Label htmlFor="filename">Tên file SEO</Label>
              <Input
                id="filename"
                value={filename}
                onChange={(e) => setFilename(e.target.value)}
                placeholder={generateSEOFilename(mainKeyword, imageCount)}
              />
              <p className="text-xs text-gray-500 mt-1">Gợi ý: {generateSEOFilename(mainKeyword, imageCount)}.jpg</p>
            </div>

            <div>
              <Label htmlFor="altText">Alt Text *</Label>
              <Input
                id="altText"
                value={altText}
                onChange={(e) => setAltText(e.target.value)}
                placeholder={`${mainKeyword} - mô tả ảnh`}
              />
              <p className="text-xs text-gray-500 mt-1">Mô tả ảnh cho SEO và accessibility</p>
            </div>

            <div>
              <Label htmlFor="caption">Caption</Label>
              <Input
                id="caption"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder={`Hình ảnh minh họa cho ${mainKeyword}`}
              />
              <p className="text-xs text-gray-500 mt-1">Chú thích hiển thị dưới ảnh</p>
            </div>

            {/* Image Preview */}
            <div className="border rounded-lg overflow-hidden">
              <img src={imageUrl || "/placeholder.svg"} alt="Preview" className="w-full h-48 object-cover" />
              <div className="p-3 bg-gray-50">
                <p className="text-sm font-medium">{caption}</p>
                <p className="text-xs text-gray-500 mt-1">Alt: {altText}</p>
                <p className="text-xs text-gray-500">File: {filename}</p>
              </div>
            </div>

            {/* SEO Check */}
            <div className="space-y-2">
              {seoCheck.issues.length > 0 && (
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    <div className="space-y-1">
                      {seoCheck.issues.map((issue, index) => (
                        <div key={index} className="text-sm">
                          • {issue}
                        </div>
                      ))}
                    </div>
                  </AlertDescription>
                </Alert>
              )}

              {seoCheck.suggestions.length > 0 && (
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    <div className="space-y-1">
                      {seoCheck.suggestions.map((suggestion, index) => (
                        <div key={index} className="text-sm">
                          • {suggestion}
                        </div>
                      ))}
                    </div>
                  </AlertDescription>
                </Alert>
              )}

              {seoCheck.issues.length === 0 && seoCheck.suggestions.length === 0 && (
                <div className="flex items-center gap-2 text-green-600 text-sm">
                  <CheckCircle className="h-4 w-4" />
                  <span>Ảnh đã được tối ưu SEO</span>
                </div>
              )}
            </div>

            <Button onClick={handleAddImage} className="w-full">
              <CheckCircle className="h-4 w-4 mr-2" />
              Thêm ảnh vào bài viết
            </Button>
          </>
        )}

        {/* SEO Guidelines */}
        <div className="bg-blue-50 p-3 rounded-lg">
          <h4 className="text-sm font-medium text-blue-900 mb-2">Hướng dẫn tối ưu ảnh SEO:</h4>
          <ul className="text-xs text-blue-800 space-y-1">
            <li>• Kích thước ngang &gt; 800px</li>
            <li>• Tên file chứa từ khóa chính</li>
            <li>• Alt text mô tả chính xác nội dung ảnh</li>
            <li>• Caption thu hút và có từ khóa</li>
            <li>• Không copy trực tiếp từ website khác</li>
            <li>• Căn giữa ảnh, custom size 800px</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
