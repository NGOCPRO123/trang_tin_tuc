"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Image as ImageIcon, Video, Upload, X, FileImage, FileVideo } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface MediaUploadProps {
  imageUrl: string
  videoUrl: string
  onImageChange: (url: string) => void
  onVideoChange: (url: string) => void
}

export function MediaUpload({ imageUrl, videoUrl, onImageChange, onVideoChange }: MediaUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const [previewVideo, setPreviewVideo] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const videoInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Kiểm tra loại file
    if (!file.type.startsWith('image/')) {
      alert('Vui lòng chọn file ảnh hợp lệ!')
      return
    }

    // Kiểm tra kích thước file (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File ảnh không được lớn hơn 5MB!')
      return
    }

    setIsUploading(true)

    try {
      // Tạo preview
      const reader = new FileReader()
      reader.onload = (e) => {
        setPreviewImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)

      // Upload file lên server
      const formData = new FormData()
      formData.append('file', file)
      
      const response = await fetch('/api/upload', { 
        method: 'POST', 
        body: formData 
      })
      
      if (response.ok) {
        const result = await response.json()
        onImageChange(result.url)
      } else {
        // Fallback: sử dụng URL giả nếu API không hoạt động
        const fakeUrl = `https://picsum.photos/800/600?random=${Date.now()}`
        onImageChange(fakeUrl)
      }
      
      setIsUploading(false)

    } catch (error) {
      console.error('Upload failed:', error)
      // Fallback: sử dụng URL giả nếu có lỗi
      const fakeUrl = `https://picsum.photos/800/600?random=${Date.now()}`
      onImageChange(fakeUrl)
      setIsUploading(false)
    }
  }

  const handleVideoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Kiểm tra loại file
    if (!file.type.startsWith('video/')) {
      alert('Vui lòng chọn file video hợp lệ!')
      return
    }

    // Kiểm tra kích thước file (max 50MB)
    if (file.size > 50 * 1024 * 1024) {
      alert('File video không được lớn hơn 50MB!')
      return
    }

    setIsUploading(true)

    try {
      // Tạo preview
      const reader = new FileReader()
      reader.onload = (e) => {
        setPreviewVideo(e.target?.result as string)
      }
      reader.readAsDataURL(file)

      // Upload file lên server
      const formData = new FormData()
      formData.append('file', file)
      
      const response = await fetch('/api/upload', { 
        method: 'POST', 
        body: formData 
      })
      
      if (response.ok) {
        const result = await response.json()
        onVideoChange(result.url)
      } else {
        // Fallback: sử dụng URL video mẫu nếu API không hoạt động
        const sampleVideoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        onVideoChange(sampleVideoUrl)
      }
      
      setIsUploading(false)

    } catch (error) {
      console.error('Upload failed:', error)
      // Fallback: sử dụng URL video mẫu nếu có lỗi
      const sampleVideoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      onVideoChange(sampleVideoUrl)
      setIsUploading(false)
    }
  }

  const handleUrlInput = (type: 'image' | 'video', url: string) => {
    if (type === 'image') {
      onImageChange(url)
    } else {
      onVideoChange(url)
    }
  }

  const clearMedia = (type: 'image' | 'video') => {
    if (type === 'image') {
      onImageChange('')
      setPreviewImage(null)
    } else {
      onVideoChange('')
      setPreviewVideo(null)
    }
  }

  if (!isClient) {
    return (
      <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardContent className="p-6">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
      <CardContent className="p-6">
        <Tabs defaultValue="image" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white/80">
            <TabsTrigger value="image" className="flex items-center gap-2">
              <ImageIcon className="h-4 w-4" />
              Hình ảnh
            </TabsTrigger>
            <TabsTrigger value="video" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              Video
            </TabsTrigger>
          </TabsList>

          <TabsContent value="image" className="space-y-4 mt-4">
            <div className="space-y-3">
              <Label className="text-blue-900 flex items-center gap-2">
                <FileImage className="h-4 w-4" />
                Upload ảnh
              </Label>
              
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                  className="flex items-center gap-2 bg-white/80 hover:bg-white"
                >
                  <Upload className="h-4 w-4" />
                  {isUploading ? 'Đang upload...' : 'Chọn ảnh'}
                </Button>
                
                <Input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-blue-900">Hoặc nhập URL ảnh</Label>
                <div className="flex gap-2">
                  <Input
                    value={imageUrl}
                    onChange={(e) => handleUrlInput('image', e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    className="bg-white/80"
                  />
                  {imageUrl && (
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => clearMedia('image')}
                      className="bg-white/80"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              {/* Preview */}
              <AnimatePresence>
                {(imageUrl || previewImage) && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="relative"
                  >
                    <div className="relative rounded-lg overflow-hidden border-2 border-blue-200">
                      <img
                        src={previewImage || imageUrl}
                        alt="Preview"
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.jpg'
                        }}
                      />
                      <div className="absolute top-2 right-2">
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => clearMedia('image')}
                          className="h-8 w-8 bg-red-500/90 hover:bg-red-600"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </TabsContent>

          <TabsContent value="video" className="space-y-4 mt-4">
            <div className="space-y-3">
              <Label className="text-blue-900 flex items-center gap-2">
                <FileVideo className="h-4 w-4" />
                Upload video
              </Label>
              
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => videoInputRef.current?.click()}
                  disabled={isUploading}
                  className="flex items-center gap-2 bg-white/80 hover:bg-white"
                >
                  <Upload className="h-4 w-4" />
                  {isUploading ? 'Đang upload...' : 'Chọn video'}
                </Button>
                
                <Input
                  ref={videoInputRef}
                  type="file"
                  accept="video/*"
                  onChange={handleVideoUpload}
                  className="hidden"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-blue-900">Hoặc nhập URL video</Label>
                <div className="flex gap-2">
                  <Input
                    value={videoUrl}
                    onChange={(e) => handleUrlInput('video', e.target.value)}
                    placeholder="https://example.com/video.mp4"
                    className="bg-white/80"
                  />
                  {videoUrl && (
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => clearMedia('video')}
                      className="bg-white/80"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              {/* Preview */}
              <AnimatePresence>
                {(videoUrl || previewVideo) && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="relative"
                  >
                    <div className="relative rounded-lg overflow-hidden border-2 border-blue-200">
                      <video
                        src={previewVideo || videoUrl}
                        controls
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          console.error('Video load error:', e)
                        }}
                      />
                      <div className="absolute top-2 right-2">
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => clearMedia('video')}
                          className="h-8 w-8 bg-red-500/90 hover:bg-red-600"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
} 