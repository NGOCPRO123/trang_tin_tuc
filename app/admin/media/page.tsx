"use client"

import { useEffect, useState, useRef } from "react"
import type { Article } from "@/types/article"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  Upload, 
  Copy, 
  Download, 
  Trash2, 
  Eye, 
  ImageIcon,
  Calendar,
  FileImage,
  CheckCircle,
  AlertCircle
} from "lucide-react"

export default function AdminMediaPage() {
  const [images, setImages] = useState<{ url: string; title: string; articleId: string; date?: string }[]>([])
  const [filteredImages, setFilteredImages] = useState<typeof images>([])
  const [copied, setCopied] = useState<string | null>(null)
  const [search, setSearch] = useState("")
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null)
  const [showDialog, setShowDialog] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((data: Article[]) => {
        const imgs: { url: string; title: string; articleId: string; date?: string }[] = []
        data.forEach((article) => {
          if (article.featuredImage) imgs.push({ url: article.featuredImage, title: article.title, articleId: article._id || article.id, date: article.publishedAt })
          if (article.image && article.image !== article.featuredImage) imgs.push({ url: article.image, title: article.title, articleId: article._id || article.id, date: article.publishedAt })
        })
        setImages(imgs)
        setFilteredImages(imgs)
      })
  }, [])

  // Tìm kiếm/lọc ảnh
  useEffect(() => {
    setFilteredImages(
      images.filter(img =>
        img.title.toLowerCase().includes(search.toLowerCase())
        // Có thể mở rộng thêm lọc theo ngày, tag ở đây
      )
    )
  }, [search, images])

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url)
    setCopied(url)
    setTimeout(() => setCopied(null), 1500)
  }

  // Xem chi tiết ảnh
  const handleView = (img: typeof images[0]) => {
    setSelectedImage(img)
    setShowDialog(true)
  }

  // Xóa ảnh (chỉ xóa khỏi danh sách media, không xóa file vật lý)
  const handleDelete = (url: string) => {
    if (confirm("Bạn có chắc muốn xóa ảnh này khỏi media?")) {
      setImages(prev => prev.filter(img => img.url !== url))
      setFilteredImages(prev => prev.filter(img => img.url !== url))
      setShowDialog(false)
    }
  }

  // Upload ảnh mới (giả lập, chỉ thêm vào danh sách, thực tế nên upload lên server)
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setImages(prev => [{ url, title: file.name, articleId: "", date: new Date().toISOString() }, ...prev])
    setFilteredImages(prev => [{ url, title: file.name, articleId: "", date: new Date().toISOString() }, ...prev])
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  // Calculate stats
  const totalImages = images.length
  const recentImages = images.filter(img => {
    if (!img.date) return false
    const date = new Date(img.date)
    const now = new Date()
    const diffDays = (now.getTime() - date.getTime()) / (1000 * 3600 * 24)
    return diffDays <= 7
  }).length
  const totalSize = "2.4 GB" // Mock data

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Quản lý Media</h1>
          <p className="text-slate-600 mt-1">Quản lý hình ảnh và tài nguyên media</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleUpload}
            className="hidden"
            id="media-upload"
          />
          <label htmlFor="media-upload">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <span>
                <Upload className="w-4 h-4 mr-2" />
                Upload ảnh mới
              </span>
            </Button>
          </label>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Tổng ảnh</CardTitle>
            <ImageIcon className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">{totalImages}</div>
            <p className="text-xs text-blue-600 mt-1">Tất cả hình ảnh</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Tuần này</CardTitle>
            <Calendar className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">{recentImages}</div>
            <p className="text-xs text-green-600 mt-1">Ảnh mới upload</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">Dung lượng</CardTitle>
            <FileImage className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">{totalSize}</div>
            <p className="text-xs text-purple-600 mt-1">Tổng dung lượng</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            Tìm kiếm Media
          </CardTitle>
          <CardDescription>
            Tìm kiếm hình ảnh theo tên bài viết hoặc ngày upload
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Tìm kiếm theo tên bài viết..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          {search && (
            <div className="mt-3 text-sm text-slate-600">
              Tìm thấy {filteredImages.length} hình ảnh cho "{search}"
            </div>
          )}
        </CardContent>
      </Card>

      {/* Images Grid */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5" />
            Thư viện hình ảnh
          </CardTitle>
          <CardDescription>
            {filteredImages.length} hình ảnh được tìm thấy
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filteredImages.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Không có hình ảnh nào</h3>
              <p className="text-slate-600">Bắt đầu upload hình ảnh đầu tiên</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredImages.map((img, idx) => (
                <div key={img.url + idx} className="group relative bg-slate-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200">
                  <div className="aspect-square relative">
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() => handleView(img)}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-slate-900 line-clamp-2 mb-2">
                      {img.title}
                    </h3>
                    
                    <div className="flex items-center gap-1 text-xs text-slate-500 mb-3">
                      <Calendar className="w-3 h-3" />
                      <span>{img.date ? new Date(img.date).toLocaleDateString() : "Không rõ"}</span>
                    </div>
                    
                    <div className="flex gap-1">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleCopy(img.url)}
                        className="flex-1 h-8 text-xs"
                      >
                        {copied === img.url ? (
                          <>
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Đã copy
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 mr-1" />
                            Copy
                          </>
                        )}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(img.url)}
                        className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Image Detail Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <ImageIcon className="w-5 h-5" />
              Chi tiết hình ảnh
            </DialogTitle>
            <DialogClose asChild>
              <Button variant="ghost" className="absolute right-2 top-2">Đóng</Button>
            </DialogClose>
          </DialogHeader>
          {selectedImage && (
            <div className="space-y-4">
              <div className="flex justify-center">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.title} 
                  className="max-h-96 rounded-lg border shadow-sm" 
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Thông tin</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-slate-600">Tên bài viết:</span>
                      <p className="font-medium">{selectedImage.title}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Ngày đăng:</span>
                      <p className="font-medium">
                        {selectedImage.date ? new Date(selectedImage.date).toLocaleString() : "Không rõ"}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Thao tác</h4>
                  <div className="space-y-2">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => handleCopy(selectedImage.url)}
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      {copied === selectedImage.url ? "Đã copy link" : "Copy link"}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => window.open(selectedImage.url, '_blank')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Tải về
                    </Button>
                    <Button 
                      variant="destructive" 
                      className="w-full justify-start"
                      onClick={() => handleDelete(selectedImage.url)}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Xóa ảnh
                    </Button>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Link ảnh</h4>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <code className="text-sm break-all">{selectedImage.url}</code>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
} 