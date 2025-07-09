"use client"

import { useState, useRef, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ImageIcon, 
  Search, 
  Upload, 
  Copy, 
  Check,
  FolderOpen,
  AlertCircle,
  Folder
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Loading } from "@/components/ui/loading"

interface ImagePickerProps {
  onImageSelect: (imageUrl: string) => void
  trigger?: React.ReactNode
}

interface ImageFile {
  name: string
  url: string
  size: number
  type: string
  path?: string
}

export function ImagePicker({ onImageSelect, trigger }: ImagePickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [images, setImages] = useState<ImageFile[]>([])
  const [filteredImages, setFilteredImages] = useState<ImageFile[]>([])
  const [search, setSearch] = useState("")
  const [selectedImage, setSelectedImage] = useState<ImageFile | null>(null)
  const [copied, setCopied] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedFolder, setSelectedFolder] = useState<string>("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Handle image selection
  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files || files.length === 0) return

    setIsLoading(true)
    setError(null)
    setImages([])
    setFilteredImages([])

    const imageFiles: ImageFile[] = []
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp']

    Array.from(files).forEach((file) => {
      const ext = file.name.toLowerCase().substring(file.name.lastIndexOf('.'))
      if (imageExtensions.includes(ext)) {
        const imageUrl = URL.createObjectURL(file)
        imageFiles.push({
          name: file.name,
          url: imageUrl,
          size: file.size,
          type: file.type,
          path: file.name
        })
      }
    })

    if (imageFiles.length === 0) {
      setError('Không tìm thấy ảnh hợp lệ trong các file đã chọn')
      setIsLoading(false)
      return
    }

    // Sort by name
    imageFiles.sort((a, b) => a.name.localeCompare(b.name))
    
    setImages(imageFiles)
    setFilteredImages(imageFiles)
    setSelectedFolder(`${imageFiles.length} ảnh đã chọn`)
    setIsLoading(false)
  }

  // Clear images when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setImages([])
      setFilteredImages([])
      setSelectedFolder("")
      setSelectedImage(null)
      setSearch("")
    }
  }, [isOpen])

  // Filter images based on search
  useEffect(() => {
    if (!search.trim()) {
      setFilteredImages(images)
    } else {
      const filtered = images.filter(img => 
        img.name.toLowerCase().includes(search.toLowerCase())
      )
      setFilteredImages(filtered)
    }
  }, [search, images])

  const handleImageClick = (image: ImageFile) => {
    setSelectedImage(image)
  }

  const handleConfirm = () => {
    if (selectedImage) {
      onImageSelect(selectedImage.url)
      setIsOpen(false)
      setSelectedImage(null)
    }
  }

  const copyImageUrl = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy URL:', error)
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <FolderOpen className="h-4 w-4" />
            Chọn từ thư mục
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5" />
            Chọn ảnh từ máy tính
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col h-full">
          {/* Image Selection */}
          <div className="mb-4">
            {!selectedFolder ? (
              <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                <ImageIcon className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600 mb-4">Chọn ảnh từ máy tính</p>
                <Button 
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-2"
                >
                  <Upload className="h-4 w-4" />
                  Chọn ảnh
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  onChange={handleImageSelect}
                  className="hidden"
                  accept="image/*"
                />
              </div>
            ) : (
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <ImageIcon className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium">{selectedFolder}</span>
                  <Badge variant="secondary">{images.length} ảnh</Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSelectedFolder("")
                    setImages([])
                    setFilteredImages([])
                    setSelectedImage(null)
                    setSearch("")
                  }}
                >
                  Chọn lại
                </Button>
              </div>
            )}
          </div>

          {/* Search Bar - Only show when folder is selected */}
          {selectedFolder && (
            <div className="flex items-center gap-2 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Tìm kiếm ảnh..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Badge variant="secondary">
                {filteredImages.length} ảnh
              </Badge>
            </div>
          )}

          {/* Image Grid - Only show when folder is selected */}
          {selectedFolder && (
            <div className="flex-1 overflow-y-auto">
              {isLoading && (
                <div className="flex items-center justify-center py-8">
                  <Loading size="md" variant="spinner" />
                  <span className="ml-2 text-gray-500">Đang tải ảnh...</span>
                </div>
              )}
              
              {error && !isLoading && (
                <div className="text-center py-8 text-red-500">
                  <AlertCircle className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>{error}</p>
                </div>
              )}
              
              {!isLoading && !error && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <AnimatePresence>
                    {filteredImages.map((image, index) => (
                      <motion.div
                        key={image.url}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Card 
                          className={`cursor-pointer transition-all hover:shadow-md ${
                            selectedImage?.url === image.url 
                              ? 'ring-2 ring-blue-500 bg-blue-50' 
                              : 'hover:bg-gray-50'
                          }`}
                          onClick={() => handleImageClick(image)}
                          onDoubleClick={() => {
                            onImageSelect(image.url)
                            setIsOpen(false)
                            setSelectedImage(null)
                          }}
                        >
                          <CardContent className="p-3">
                            <div className="aspect-square relative overflow-hidden rounded-md mb-2">
                              <img
                                src={image.url}
                                alt={image.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.currentTarget.src = "/placeholder.svg"
                                }}
                              />
                            </div>
                            <div className="space-y-1">
                              <p className="text-xs font-medium truncate" title={image.name}>
                                {image.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {formatFileSize(image.size)}
                              </p>
                              {image.path && (
                                <p className="text-xs text-gray-400 truncate" title={image.path}>
                                  {image.path}
                                </p>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}

              {!isLoading && !error && filteredImages.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <ImageIcon className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Không tìm thấy ảnh nào</p>
                </div>
              )}
            </div>
          )}

          {/* Selected Image Preview */}
          {selectedFolder && selectedImage && (
            <div className="border-t pt-4 mt-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-md overflow-hidden">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{selectedImage.name}</p>
                  <p className="text-xs text-gray-500">{formatFileSize(selectedImage.size)}</p>
                  {selectedImage.path && (
                    <p className="text-xs text-gray-400 truncate" title={selectedImage.path}>
                      {selectedImage.path}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyImageUrl(selectedImage.url)}
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                  <Button size="sm" onClick={handleConfirm}>
                    Chọn ảnh này
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
} 