"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    toast({
      title: "Gửi thành công!",
      description: "Chúng tôi sẽ phản hồi bạn trong thời gian sớm nhất.",
    })
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <MainLayout>
      <div className="py-16 bg-yellow-50">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Liên hệ với chúng tôi</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Có câu hỏi hoặc góp ý? Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-yellow-100 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl">Thông tin liên hệ</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-yellow-100 rounded-full">
                        <Mail className="h-6 w-6 text-yellow-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">contact@tintucvn.com</p>
                        <p className="text-muted-foreground">support@tintucvn.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-yellow-200 rounded-full">
                        <Phone className="h-6 w-6 text-yellow-800" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Điện thoại</h3>
                        <p className="text-muted-foreground">(84) 123-456-789</p>
                        <p className="text-muted-foreground">(84) 987-654-321</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-orange-100 rounded-full">
                        <MapPin className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Địa chỉ</h3>
                        <p className="text-muted-foreground">
                          123 Đường ABC, Quận XYZ
                          <br />
                          Hà Nội, Việt Nam
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-yellow-50 rounded-full">
                        <Clock className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Giờ làm việc</h3>
                        <p className="text-muted-foreground">
                          Thứ 2 - Thứ 6: 8:00 - 18:00
                          <br />
                          Thứ 7 - Chủ nhật: 9:00 - 17:00
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Gửi tin nhắn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Họ và tên *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Nhập họ và tên"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Nhập email"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject">Chủ đề *</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="Nhập chủ đề"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Nội dung *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Nhập nội dung tin nhắn"
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Send className="h-4 w-4 mr-2" />
                        Gửi tin nhắn
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  )
}
