"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Sparkles, TrendingUp, Users } from "lucide-react"

export function HeroSection() {
  // State cho form
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (value: string) => {
    setForm({ ...form, service: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // TODO: Gửi dữ liệu form tới API hoặc email
  }

  return (
    <section className="relative min-h-[200px] overflow-hidden">
      {/* Background with gradient overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
          backgroundImage:
            "url('/anh_trangchu.jpg')",
        }}
      />
      {/* Xóa lớp phủ màu xanh, chỉ giữ lại hình nền với blur */}

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-500" />

      <div className="container mx-auto relative z-10 px-4 py-2 lg:py-3">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="flex flex-col items-start justify-center text-left h-full space-y-3 max-w-5xl">
            {/* Logo HLCC nếu muốn thêm, có thể dùng <img src="/logo.png" ... /> */}
            {/* Tiêu đề lớn */}
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-2 tracking-wide font-sans">
              Doanh thu tăng, lợi nhuận không về. CEO luôn phải "chữa cháy".
            </h1>
            {/* Subheadline vàng/cam */}
            <h2 className="text-xl md:text-2xl lg:text-2xl font-bold text-yellow-400 mb-4 tracking-wide font-sans">
              HLCC – Giải mã gốc rễ, kiến tạo tăng trưởng bền vững.
            </h2>
            {/* Gạch ngang */}
            <div className="w-16 h-1 bg-white/40 rounded mb-4" />
            {/* Mô tả */}
            <p className="text-white text-base md:text-lg mb-6">
              HLCC - Tư vấn doanh nghiệp chuyên sâu, giải pháp tài chính toàn diện, tối ưu vận hành, tái cấu trúc tài chính, tăng trưởng bền vững.
            </p>
          </div>

          {/* Right: Form */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-[420px] md:w-[480px] lg:w-[520px] max-w-xl bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl">
              <CardContent className="p-6 md:p-8 relative">
                {/* Overlay tối nhẹ phía sau form */}
                <div className="absolute inset-0 bg-black/30 rounded-3xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Đăng Ký Tư Vấn Miễn Phí</h3>
                    <p className="text-gray-600">Nhận tư vấn từ chuyên gia trong 24h</p>
                  </div>

                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="text-xl font-semibold text-green-600 mb-2">Đăng ký thành công!</h4>
                      <p className="text-gray-600">Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.</p>
                    </div>
                  ) : (
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        <Input
                          type="text"
                          name="name"
                          placeholder="Họ và tên *"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="h-12 bg-gray-50 border-gray-200 focus:border-yellow-500 focus:ring-yellow-500"
                        />
                        <Input
                          type="tel"
                          name="phone"
                          placeholder="Số điện thoại *"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          className="h-12 bg-gray-50 border-gray-200 focus:border-yellow-500 focus:ring-yellow-500"
                        />
                        <Input
                          type="email"
                          name="email"
                          placeholder="Email *"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="h-12 bg-gray-50 border-gray-200 focus:border-yellow-500 focus:ring-yellow-500"
                        />
                        <Input
                          type="text"
                          name="company"
                          placeholder="Tên công ty"
                          value={form.company}
                          onChange={handleChange}
                          className="h-12 bg-gray-50 border-gray-200 focus:border-yellow-500 focus:ring-yellow-500"
                        />
                        <Select value={form.service} onValueChange={handleSelectChange}>
                          <SelectTrigger className="h-12 bg-gray-50 border-gray-200 focus:border-yellow-500 focus:ring-yellow-500">
                            <SelectValue placeholder="Chọn dịch vụ quan tâm *" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Tư vấn quản trị">Tư vấn quản trị</SelectItem>
                            <SelectItem value="Tối ưu vận hành">Tối ưu vận hành</SelectItem>
                            <SelectItem value="Tài chính doanh nghiệp">Tài chính doanh nghiệp</SelectItem>
                            <SelectItem value="Khác">Khác</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                      >
                        Bắt đầu Chẩn đoán Doanh nghiệp
                      </Button>

                      <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Thông tin của bạn được bảo mật tuyệt đối
                      </p>
                    </form>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
