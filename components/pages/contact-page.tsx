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
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Linkedin, 
  MessageCircle, 
  Loader2,
  CheckCircle,
  Users,
  Shield,
  Calendar,
  Star,
  Award,
  Zap
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Loading } from "@/components/ui/loading"

export function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  // Khởi tạo EmailJS
  useEffect(() => {
    emailjs.init("WMwcor4ZsMfqQgqwM")
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
      const templateParams = {
        to_email: "phamleducngoc123@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        company: formData.company,
        service: formData.service,
        subject: "Yêu cầu tư vấn miễn phí từ " + formData.name,
        message: formData.message,
        reply_to: formData.email,
      }

      await emailjs.send(
        'contraicung',
        'template_947ay97',
        templateParams
      )

      toast({
        title: "Gửi thành công!",
        description: "Yêu cầu tư vấn miễn phí của bạn đã được gửi. HLCC sẽ phản hồi trong vòng 24 giờ làm việc.",
      })
      
      setFormData({ name: "", phone: "", email: "", company: "", service: "", message: "" })
    } catch (error) {
      console.error('Error sending email:', error)
      toast({
        title: "Lỗi gửi tin nhắn",
        description: "Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau hoặc liên hệ trực tiếp qua hotline.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <MainLayout>
      {/* Section 1: Tiêu đề chính và Lời kêu gọi */}
      <section className="bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 pt-20 pb-16 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/20 to-orange-100/20"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-orange-200 rounded-full opacity-20"></div>
        
        <div className="container mx-auto text-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Kết nối với <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">Chuyên gia</span> của HLCC
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Dù bạn đang đối mặt với một thách thức cụ thể hay cần một góc nhìn chiến lược, 
                hãy bắt đầu bằng một buổi <span className="font-bold text-yellow-600 bg-yellow-100 px-2 py-1 rounded">tư vấn miễn phí</span> với chúng tôi. 
                Đội ngũ HLCC luôn sẵn sàng lắng nghe và cùng bạn tìm ra hướng đi.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  Chuyên nghiệp
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 text-yellow-500 mr-2" />
                  Uy tín
                </div>
                <div className="flex items-center">
                  <Zap className="h-4 w-4 text-yellow-500 mr-2" />
                  Hiệu quả
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Form Liên hệ & Các Kênh Kết nối khác */}
      <section className="bg-white py-20" id="contact-form">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Cột Trái: Form Liên hệ */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-yellow-50">
                <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-t-lg">
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <MessageCircle className="mr-3 h-7 w-7" />
                    Gửi yêu cầu Tư vấn Miễn phí
                  </CardTitle>
                  <p className="text-yellow-100 text-sm mt-2">HLCC cam kết phản hồi trong 24 giờ</p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-700 font-semibold text-sm">Họ và Tên *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Nhập họ và tên"
                          className="h-14 border-2 border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all duration-300 rounded-lg"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-700 font-semibold text-sm">Số điện thoại *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Nhập số điện thoại"
                          className="h-14 border-2 border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all duration-300 rounded-lg"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-gray-700 font-semibold text-sm">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Nhập email"
                          className="h-14 border-2 border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all duration-300 rounded-lg"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-gray-700 font-semibold text-sm">Tên Công ty</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Nhập tên công ty"
                          className="h-14 border-2 border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all duration-300 rounded-lg"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service" className="text-gray-700 font-semibold text-sm">Dịch vụ quan tâm</Label>
                      <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                        <SelectTrigger className="h-14 border-2 border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all duration-300 rounded-lg">
                          <SelectValue placeholder="Chọn dịch vụ bạn quan tâm" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tư-vấn-doanh-nghiệp">Tư vấn doanh nghiệp</SelectItem>
                          <SelectItem value="tư-vấn-tài-chính">Tư vấn tài chính</SelectItem>
                          <SelectItem value="tư-vấn-pháp-lý">Tư vấn pháp lý</SelectItem>
                          <SelectItem value="tư-vấn-marketing">Tư vấn marketing</SelectItem>
                          <SelectItem value="tư-vấn-nhân-sự">Tư vấn nhân sự</SelectItem>
                          <SelectItem value="dịch-vụ-khác">Dịch vụ khác</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-gray-700 font-semibold text-sm">Nội dung tin nhắn *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Vui lòng mô tả ngắn gọn về vấn đề của bạn..."
                        rows={5}
                        className="border-2 border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all duration-300 resize-none rounded-lg"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-16 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold text-lg shadow-lg transition-all duration-300 rounded-lg transform hover:scale-105" 
                      size="lg"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Loading size="sm" variant="spinner" className="text-white mr-3" />
                      ) : (
                        <Send className="h-6 w-6 mr-3" />
                      )}
                      GỬI YÊU CẦU NGAY
                    </Button>

                    <p className="text-xs text-gray-500 text-center mt-4">
                      Bằng việc gửi thông tin, bạn đồng ý với Chính sách Bảo mật của chúng tôi. 
                      HLCC cam kết sẽ phản hồi trong vòng 24 giờ làm việc.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Cột Phải: Thông tin Liên hệ Trực tiếp */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <Phone className="mr-4 h-8 w-8 text-yellow-500" />
                  Hoặc kết nối trực tiếp với chúng tôi:
                </h3>
              </div>

              {/* Hotline */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full shadow-lg">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-2">Hotline Tư vấn 24/7</h4>
                      <a 
                        href="tel:0912880330" 
                        className="text-2xl font-bold text-yellow-600 hover:text-orange-700 transition-colors"
                      >
                        0912.880.330
                      </a>
                      <p className="text-gray-600 mt-2">Dành cho các yêu cầu cần hỗ trợ khẩn cấp</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full shadow-lg">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-2">Email Hỗ trợ</h4>
                      <a 
                        href="mailto:lienhe@acta.vn" 
                        className="text-xl font-semibold text-yellow-600 hover:text-orange-700 transition-colors"
                      >
                        lienhe@acta.vn
                      </a>
                      <p className="text-gray-600 mt-2">Chúng tôi sẽ phản hồi trong thời gian sớm nhất</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* LinkedIn */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full shadow-lg">
                      <Linkedin className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-2">Kết nối trên LinkedIn</h4>
                      <a 
                        href="https://linkedin.com/company/hlcc" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-semibold text-yellow-600 hover:text-orange-700 transition-colors"
                      >
                        HLCC Company
                      </a>
                      <p className="text-gray-600 mt-2">Theo dõi để cập nhật các phân tích chuyên sâu</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Thông tin bổ sung */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border-2 border-yellow-200 shadow-lg">
                <h4 className="font-bold text-xl text-gray-900 mb-6 flex items-center">
                  <Award className="mr-3 h-6 w-6 text-yellow-600" />
                  Tại sao chọn HLCC?
                </h4>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <Users className="h-5 w-5 mr-3 text-yellow-600" />
                    <span className="font-medium">Đội ngũ chuyên gia giàu kinh nghiệm</span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <Shield className="h-5 w-5 mr-3 text-yellow-600" />
                    <span className="font-medium">Cam kết bảo mật thông tin tuyệt đối</span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <Calendar className="h-5 w-5 mr-3 text-yellow-600" />
                    <span className="font-medium">Tư vấn miễn phí không ràng buộc</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Câu hỏi Thường gặp (FAQ) */}
      <section className="bg-gradient-to-br from-gray-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Một số câu hỏi thường gặp trước khi bắt đầu
            </h2>
            
            <div className="max-w-5xl mx-auto">
              <Accordion type="single" collapsible className="space-y-6">
                <AccordionItem value="item-1" className="bg-white rounded-xl border-0 shadow-lg">
                  <AccordionTrigger className="px-8 py-6 text-left font-bold text-gray-900 hover:text-yellow-600 text-lg">
                    Buổi tư vấn miễn phí sẽ diễn ra như thế nào?
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 text-gray-700 text-base leading-relaxed">
                    Đây là một buổi trao đổi 30-45 phút online hoặc qua điện thoại. Chuyên gia của chúng tôi sẽ lắng nghe vấn đề của bạn, đặt câu hỏi để làm rõ và đưa ra những nhận định sơ bộ cũng như hướng giải quyết tiềm năng. Buổi tư vấn này hoàn toàn không có bất kỳ ràng buộc nào.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white rounded-xl border-0 shadow-lg">
                  <AccordionTrigger className="px-8 py-6 text-left font-bold text-gray-900 hover:text-yellow-600 text-lg">
                    Chi phí cho các dịch vụ của HLCC được tính như thế nào?
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 text-gray-700 text-base leading-relaxed">
                    Chi phí sẽ phụ thuộc vào phạm vi và độ phức tạp của vấn đề. Sau buổi tư vấn đầu tiên, nếu hai bên cảm thấy phù hợp, chúng tôi sẽ gửi một bản đề xuất dịch vụ chi tiết kèm theo báo giá minh bạch.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-white rounded-xl border-0 shadow-lg">
                  <AccordionTrigger className="px-8 py-6 text-left font-bold text-gray-900 hover:text-yellow-600 text-lg">
                    HLCC có cam kết bảo mật thông tin của khách hàng không?
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 text-gray-700 text-base leading-relaxed">
                    Tuyệt đối. Bảo mật thông tin là nguyên tắc hàng đầu của chúng tôi. Mọi thông tin bạn chia sẻ sẽ được bảo vệ nghiêm ngặt theo Chính sách Bảo mật và các thỏa thuận không tiết lộ thông tin (NDA) nếu cần.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Địa chỉ Văn phòng & Bản đồ */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Gặp gỡ chúng tôi tại Văn phòng
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Thông tin địa chỉ */}
              <div className="space-y-8">
                <Card className="border-0 shadow-2xl bg-gradient-to-br from-yellow-50 to-orange-50 border-l-4 border-yellow-400">
                  <CardContent className="p-8">
                    <div className="space-y-8">
                      <div className="flex items-start space-x-6">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full shadow-lg">
                          <MapPin className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-xl text-gray-900 mb-3">Địa chỉ văn phòng</h4>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            Tòa nhà SABAY – 99 Cộng Hòa, Phường 4, Quận Tân Bình, TP.HCM
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-6">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full shadow-lg">
                          <Clock className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-xl text-gray-900 mb-3">Giờ làm việc</h4>
                          <p className="text-gray-700 text-lg">
                            Thứ 2 đến thứ 6: 8:30AM - 17:30PM<br />
                            Thứ 7, chủ nhật: Nghỉ
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Thông tin bổ sung */}
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border-2 border-yellow-200 shadow-lg">
                  <h4 className="font-bold text-xl text-gray-900 mb-6">Lưu ý khi đến văn phòng:</h4>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-center p-3 bg-yellow-200 rounded-lg shadow-sm border-l-4 border-yellow-400">
                      <CheckCircle className="h-5 w-5 mr-3 text-yellow-600" />
                      <span className="font-medium">Vui lòng đặt lịch hẹn trước qua hotline hoặc email</span>
                    </li>
                    <li className="flex items-center p-3 bg-yellow-200 rounded-lg shadow-sm border-l-4 border-yellow-400">
                      <CheckCircle className="h-5 w-5 mr-3 text-yellow-600" />
                      <span className="font-medium">Có bãi đỗ xe miễn phí cho khách hàng</span>
                    </li>
                    <li className="flex items-center p-3 bg-yellow-200 rounded-lg shadow-sm border-l-4 border-yellow-400">
                      <CheckCircle className="h-5 w-5 mr-3 text-yellow-600" />
                      <span className="font-medium">Thang máy và cơ sở vật chất hiện đại</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bản đồ */}
              <div className="bg-white rounded-2xl border-0 shadow-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=99+Cộng+Hòa,+Phường+4,+Quận+Tân+Bình,+TP.HCM&output=embed"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vị trí văn phòng HLCC - Tòa nhà SABAY, 99 Cộng Hòa, Phường 4, Quận Tân Bình, TP.HCM"
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-500 py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-orange-300 rounded-full opacity-20"></div>
        
        <div className="container mx-auto text-center text-white px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sẵn sàng bắt đầu hành trình cùng HLCC?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-yellow-100 max-w-3xl mx-auto">
              Đội ngũ chuyên gia của chúng tôi đang chờ đợi để hỗ trợ bạn. 
              Hãy liên hệ ngay để nhận tư vấn miễn phí!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                className="bg-white text-yellow-600 font-bold px-10 py-5 hover:bg-yellow-50 text-xl rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300" 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({behavior: 'smooth'})}
              >
                Gửi yêu cầu tư vấn
              </Button>
              <Button 
                className="bg-white text-yellow-600 font-bold px-10 py-5 border-2 border-yellow-400 hover:bg-yellow-50 hover:text-orange-600 text-xl rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open('tel:0912880330', '_self')}
              >
                Gọi hotline ngay
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Section 3: Liên kết đến các trang con (Tuyển dụng, Chính sách Bảo mật, Điều khoản) */}
      <section className="container mx-auto py-8">
        <div className="border-t pt-8 mt-8 flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center text-center">
          <a
            href="/lien-he/tuyen-dung"
            className="text-lg text-amber-700 hover:underline font-medium"
          >
            Tuyển dụng
          </a>
          <span className="hidden md:inline-block text-gray-400">|</span>
          <a
            href="/lien-he/chinh-sach-bao-mat-dieu-khoan"
            className="text-lg text-amber-700 hover:underline font-medium"
          >
            Chính sách Bảo mật, Điều khoản
          </a>
        </div>
      </section>
      
      <BackToTop />
    </MainLayout>
  )
}
