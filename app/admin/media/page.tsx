"use client"

import { useEffect, useState, useRef } from "react"
import type { Article } from "@/types/article"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

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

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-8 text-blue-700 text-center">Quản lý Media</h1>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <Input
          placeholder="Tìm kiếm theo tên bài viết..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="max-w-xs"
        />
        <div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleUpload}
            className="hidden"
            id="media-upload"
          />
          <label htmlFor="media-upload">
            <Button asChild>
              <span>Upload ảnh mới</span>
            </Button>
          </label>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredImages.map((img, idx) => (
          <div key={img.url + idx} className="bg-blue-50 rounded-lg p-3 flex flex-col items-center shadow hover:shadow-lg transition">
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-32 object-cover rounded mb-2 border cursor-pointer"
              onClick={() => handleView(img)}
            />
            <div className="text-sm font-medium text-center line-clamp-2 mb-2">{img.title}</div>
            <div className="flex gap-2">
              <button
                className="px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => handleCopy(img.url)}
              >
                {copied === img.url ? "Đã copy" : "Copy link"}
              </button>
              <a
                href={img.url}
                download
                className="px-2 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700"
              >
                Tải về
              </a>
              <button
                className="px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700"
                onClick={() => handleDelete(img.url)}
              >
                Xóa
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Xem chi tiết ảnh */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Chi tiết ảnh</DialogTitle>
            <DialogClose asChild>
              <Button variant="ghost" className="absolute right-2 top-2">Đóng</Button>
            </DialogClose>
          </DialogHeader>
          {selectedImage && (
            <div className="flex flex-col items-center gap-4">
              <img src={selectedImage.url} alt={selectedImage.title} className="max-h-80 rounded border" />
              <div className="w-full">
                <div className="font-semibold">Tên bài viết:</div>
                <div className="mb-2">{selectedImage.title}</div>
                <div className="font-semibold">Ngày đăng:</div>
                <div className="mb-2">{selectedImage.date ? new Date(selectedImage.date).toLocaleString() : "Không rõ"}</div>
                <div className="font-semibold">Link ảnh:</div>
                <div className="mb-2 break-all">{selectedImage.url}</div>
                <Button variant="destructive" onClick={() => handleDelete(selectedImage.url)} className="w-full mt-2">Xóa ảnh này</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
} 