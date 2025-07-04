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
      {/* Contact Us Title Section */}
      <section className="bg-white pt-12 pb-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-2">Contact Us</h1>
          <div className="text-lg font-medium tracking-wide mb-4 text-blue-900">CHUYÊN NGHIỆP - TRÁCH NHIỆM - THẤU HIỂU</div>
          <div className="mx-auto w-2/3 border-b border-gray-400 mb-4"></div>
        </div>
      </section>

      {/* Service Boxes Section */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Box 1: Tư vấn dịch vụ */}
          <div className="flex flex-col items-center p-8 bg-white rounded-xl border shadow-sm">
            <MessageCircle className="h-10 w-10 text-blue-500 mb-4" />
            <h3 className="font-bold text-lg mb-2">Tư vấn dịch vụ</h3>
            <p className="text-gray-600 text-center mb-4 text-sm">Nhận tư vấn nhanh chóng, tận tình từ đội ngũ chuyên gia của Experts.</p>
            <div className="text-sm text-gray-700 mb-1">☎ 028.6681 0247</div>
            <div className="text-sm text-gray-700 mb-1">☎ 0914 024 024</div>
            <div className="text-sm text-gray-700 mb-2">✉ contact@experts.vn</div>
            <Button variant="outline" size="sm">Gọi Ngay</Button>
          </div>
          {/* Box 2: Kênh Chat trực tuyến */}
          <div className="flex flex-col items-center p-8 bg-white rounded-xl border shadow-sm">
            <Send className="h-10 w-10 text-green-500 mb-4" />
            <h3 className="font-bold text-lg mb-2">Kênh Chat trực tuyến</h3>
            <p className="text-gray-600 text-center mb-4 text-sm">Trong trường hợp bạn cần hỗ trợ nhanh, online của experts sẵn sàng.</p>
            <Button variant="outline" size="sm">Kết Nối Ngay</Button>
          </div>
          {/* Box 3: Chăm sóc khách hàng */}
          <div className="flex flex-col items-center p-8 bg-white rounded-xl border shadow-sm">
            <Phone className="h-10 w-10 text-orange-500 mb-4" />
            <h3 className="font-bold text-lg mb-2">Chăm sóc khách hàng</h3>
            <p className="text-gray-600 text-center mb-4 text-sm">Mọi thắc mắc hoặc khiếu nại sẽ được giải đáp và xử lý nhanh chóng bởi đội CSKH của experts.</p>
            <div className="text-sm text-gray-700 mb-1">☎ 028.6681 0247</div>
            <div className="text-sm text-gray-700 mb-1">☎ 0914 024 024</div>
            <div className="text-sm text-gray-700 mb-2">✉ cskh@experts.vn</div>
            <Button variant="outline" size="sm">Liên Hệ Ngay</Button>
          </div>
        </div>
      </section>

      {/* Main Content: 2 columns */}
      <section className="bg-white py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Company Info + Map */}
          <div className="bg-white rounded-xl border shadow-sm p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg mb-2">Công ty TNHH Kiểm toán và Tư vấn EXPERTS</h3>
              <div className="text-gray-700 text-sm mb-2">Số 27, đường Nguyễn Đình Chiểu, phường 11, Quận Phú Nhuận, Tp.HCM, Việt Nam</div>
              <div className="mb-4">
                <span className="font-semibold">Giờ Làm Việc</span><br />
                Thứ 2 đến thứ 6: 8:00AM - 5:30PM<br />
                Thứ 7, chủ nhật: nghỉ
              </div>
            </div>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps?q=27+Nguyễn+Đình+Chiểu,+phường+11,+Phú+Nhuận,+TP.HCM&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vị trí công ty - 27 Nguyễn Đình Chiểu, phường 11, Phú Nhuận, TP.HCM"
              />
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className="bg-white rounded-xl border shadow-sm p-8 flex flex-col justify-center">
            <h3 className="font-bold text-lg mb-6 text-center">EXPERTS | Form liên hệ</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block">Họ và Tên *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Nhập họ và tên"
                  className="h-12 border-2 border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Nhập email"
                  className="h-12 border-2 border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <Label htmlFor="subject" className="text-gray-700 font-medium mb-2 block">Số điện thoại *</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Nhập số điện thoại"
                  className="h-12 border-2 border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block">Nội dung *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Nhập nội dung cần trao đổi/giải đáp..."
                  rows={5}
                  className="border-2 border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300 resize-none"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full h-12 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-lg shadow transition-all duration-300" 
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 mr-3 animate-spin" />
                ) : (
                  <Send className="h-5 w-5 mr-3" />
                )}
                Gửi
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="bg-blue-900 py-16 mt-16">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Tư vấn với chúng tôi</h2>
          <p className="mb-6 text-base md:text-lg font-light">Chuyên nghiệp, trách nhiệm, chia sẻ, thấu hiểu, và sự nhiệt huyết sẽ khiến bạn hài lòng!</p>
          <Button className="bg-white text-blue-900 font-semibold px-8 py-3 hover:bg-blue-100" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            Liên hệ
          </Button>
        </div>
      </section>
      <BackToTop />
    </MainLayout>
  )
}
