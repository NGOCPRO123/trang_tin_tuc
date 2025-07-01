"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageIcon, Video, Upload, X, FileImage, FileVideo, Link } from "lucide-react"
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

    if (!file.type.startsWith("image/")) {
      alert("Vui lòng chọn file ảnh hợp lệ!")
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("File ảnh không được lớn hơn 5MB!")
      return
    }

    setIsUploading(true)

    try {
      // Upload thật sự lên server
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data?.url) {
        onImageChange(data.url); // Đường dẫn thực tế
        setPreviewImage(data.url);
      } else {
        alert("Upload thất bại!");
      }
      setIsUploading(false)
    } catch (error) {
      console.error("Upload failed:", error)
      setIsUploading(false)
    }
  }

  const handleVideoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith("video/")) {
      alert("Vui lòng chọn file video hợp lệ!")
      return
    }

    if (file.size > 50 * 1024 * 1024) {
      alert("File video không được lớn hơn 50MB!")
      return
    }

    setIsUploading(true)

    try {
      const reader = new FileReader()
      reader.onload = (e) => {
        setPreviewVideo(e.target?.result as string)
      }
      reader.readAsDataURL(file)

      // Simulate upload
      await new Promise((resolve) => setTimeout(resolve, 2000))
      const sampleVideoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      onVideoChange(sampleVideoUrl)

      setIsUploading(false)
    } catch (error) {
      console.error("Upload failed:", error)
      setIsUploading(false)
    }
  }

  const handleUrlInput = (type: "image" | "video", url: string) => {
    if (type === "image") {
      onImageChange(url)
    } else {
      onVideoChange(url)
    }
  }

  const clearMedia = (type: "image" | "video") => {
    if (type === "image") {
      onImageChange("")
      setPreviewImage(null)
    } else {
      onVideoChange("")
      setPreviewVideo(null)
    }
  }

  if (!isClient) {
    return (
      <Card className="border-dashed border-2 border-gray-300">
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
    <Card className="border-dashed border-2 border-gray-300 hover:border-gray-400 transition-colors">
      <CardContent className="p-6">
        <Tabs defaultValue="image" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
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
              <Label className="text-sm font-medium flex items-center gap-2">
                <FileImage className="h-4 w-4" />
                Upload ảnh đại diện
              </Label>

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                  className="flex items-center gap-2"
                >
                  <Upload className="h-4 w-4" />
                  {isUploading ? "Đang upload..." : "Chọn ảnh"}
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
                <Label className="text-sm font-medium flex items-center gap-2">
                  <Link className="h-4 w-4" />
                  Hoặc nhập URL ảnh
                </Label>
                <div className="flex gap-2">
                  <Input
                    value={imageUrl}
                    onChange={(e) => handleUrlInput("image", e.target.value)}
                    placeholder="https://example.com/image.jpg"
                  />
                  {imageUrl && (
                    <Button variant="outline" size="icon" onClick={() => clearMedia("image")}>
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              <p className="text-xs text-gray-500">Kích thước khuyến nghị: 1200x630px cho social media preview</p>

              {/* Preview */}
              <AnimatePresence>
                {(imageUrl || previewImage) && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="relative"
                  >
                    <div className="relative rounded-lg overflow-hidden border">
                      <img
                        src={previewImage || imageUrl}
                        alt="Preview"
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg?height=200&width=400"
                        }}
                      />
                      <div className="absolute top-2 right-2">
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => clearMedia("image")}
                          className="h-8 w-8"
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
              <Label className="text-sm font-medium flex items-center gap-2">
                <FileVideo className="h-4 w-4" />
                Upload video
              </Label>

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => videoInputRef.current?.click()}
                  disabled={isUploading}
                  className="flex items-center gap-2"
                >
                  <Upload className="h-4 w-4" />
                  {isUploading ? "Đang upload..." : "Chọn video"}
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
                <Label className="text-sm font-medium flex items-center gap-2">
                  <Link className="h-4 w-4" />
                  Hoặc nhập URL video
                </Label>
                <div className="flex gap-2">
                  <Input
                    value={videoUrl}
                    onChange={(e) => handleUrlInput("video", e.target.value)}
                    placeholder="https://example.com/video.mp4 hoặc YouTube URL"
                  />
                  {videoUrl && (
                    <Button variant="outline" size="icon" onClick={() => clearMedia("video")}>
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              <p className="text-xs text-gray-500">Hỗ trợ MP4, WebM. Kích thước tối đa: 50MB</p>

              {/* Preview */}
              <AnimatePresence>
                {(videoUrl || previewVideo) && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="relative"
                  >
                    <div className="relative rounded-lg overflow-hidden border">
                      <video
                        src={previewVideo || videoUrl}
                        controls
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          console.error("Video load error:", e)
                        }}
                      />
                      <div className="absolute top-2 right-2">
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => clearMedia("video")}
                          className="h-8 w-8"
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
