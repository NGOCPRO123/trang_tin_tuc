"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import emailjs from 'emailjs-com'
import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { BackToTop } from "@/components/ui/back-to-top"
import { Mail, Phone, MapPin, Clock, Send, Facebook, Twitter, Instagram, Linkedin, MessageCircle, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  // Khởi tạo EmailJS
  useEffect(() => {
    emailjs.init("WMwcor4ZsMfqQgqwM") // Thay thế bằng public key của bạn
  }, [])

  // Xử lý scroll đến form khi có hash trong URL
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#contact-form') {
      const element = document.getElementById('contact-form')
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 500)
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Template parameters cho EmailJS
      const templateParams = {
        to_email: "phamleducngoc123@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      }

      // Gửi email sử dụng EmailJS
      await emailjs.send(
        'contraicung', // Thay thế bằng Service ID của bạn
        'template_947ay97', // Thay thế bằng Template ID của bạn
        templateParams
      )

      toast({
        title: "Gửi thành công!",
        description: "Tin nhắn của bạn đã được gửi. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.",
      })
      
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error('Error sending email:', error)
      toast({
        title: "Lỗi gửi tin nhắn",
        description: "Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <MainLayout>
      {/* Main Content */}
      <div className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <Card className="h-full border-0 shadow-xl bg-gradient-to-br from-yellow-50 to-orange-50">
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">Thông tin liên hệ</CardTitle>
                  <p className="text-gray-600 mt-2">Chúng tôi luôn sẵn sàng hỗ trợ bạn</p>
                </CardHeader>
                <CardContent className="space-y-8">
                  <motion.div 
                    className="flex items-start space-x-4 group cursor-pointer hover:bg-white/50 p-3 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-800">Email</h3>
                      <p className="text-gray-600 hover:text-yellow-600 transition-colors">lienhe@acta.vn
                      </p>
                      
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-4 group cursor-pointer hover:bg-white/50 p-3 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-800">Điện thoại</h3>
                      <p className="text-gray-600 hover:text-orange-600 transition-colors">028.5555.8879</p>
                      
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-4 group cursor-pointer hover:bg-white/50 p-3 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 bg-gradient-to-r from-red-400 to-red-500 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-800">Địa chỉ</h3>
                      <p className="text-gray-600">
                        213 Điện Biên Phủ, Phường Võ Thị Sáu, Quận 3, TP.HCM
                        <br />
                       
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-4 group cursor-pointer hover:bg-white/50 p-3 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-800">Giờ làm việc</h3>
                      <p className="text-gray-600">
                        Thứ 2 - Thứ 6: 8:00 - 18:00
                        <br />
                        Thứ 7 - Chủ nhật: 9:00 - 17:00
                      </p>
                    </div>
                  </motion.div>

                  {/* Social Media */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-semibold mb-4 text-gray-800 text-center">Theo dõi chúng tôi</h3>
                    <div className="flex justify-center space-x-4">
                      {[
                        { icon: Facebook, href: "#", color: "from-blue-400 to-blue-600" },
                        { icon: Twitter, href: "#", color: "from-sky-400 to-sky-600" },
                        { icon: Instagram, href: "#", color: "from-pink-400 to-purple-600" },
                        { icon: Linkedin, href: "#", color: "from-blue-500 to-blue-700" },
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          className={`p-3 bg-gradient-to-r ${social.color} rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <social.icon className="h-5 w-5 text-white" />
                        </motion.a>
                      ))}
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
              className="lg:col-span-2"
              id="contact-form"
            >
              <Card className="border-0 shadow-xl">
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">Gửi tin nhắn</CardTitle>
                  <p className="text-gray-600 mt-2">Điền thông tin bên dưới để liên hệ với chúng tôi</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block">Họ và tên *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Nhập họ và tên"
                          className="h-12 border-2 border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all duration-300"
                          required
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Nhập email"
                          className="h-12 border-2 border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all duration-300"
                          required
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <Label htmlFor="subject" className="text-gray-700 font-medium mb-2 block">Chủ đề *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Nhập chủ đề"
                        className="h-12 border-2 border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all duration-300"
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block">Nội dung *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Nhập nội dung tin nhắn..."
                        rows={6}
                        className="border-2 border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all duration-300 resize-none"
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <Button 
                        type="submit" 
                        className="w-full h-14 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" 
                        size="lg"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <Loader2 className="h-5 w-5 mr-3 animate-spin" />
                        ) : (
                          <Send className="h-5 w-5 mr-3" />
                        )}
                        Gửi tin nhắn
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20"
          >
            <Card className="border-0 shadow-xl overflow-hidden">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-800">Vị trí của chúng tôi</CardTitle>
                <p className="text-gray-600">Tìm đường đến văn phòng của chúng tôi</p>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-96 w-full">
                  <iframe
                    src="https://www.google.com/maps?q=213+Điện+Biên+Phủ,+Phường+Võ+Thị+Sáu,+Quận+3,+TP.HCM&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Vị trí công ty - 213 Điện Biên Phủ, Phường Võ Thị Sáu, Quận 3, TP.HCM"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Back to Top Button */}
      <BackToTop />
    </MainLayout>
  )
}
