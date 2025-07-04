"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"

export function CtaSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    note: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-24 bg-gradient-to-br from-amber-900 to-yellow-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 to-yellow-800/90" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-amber-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-400/10 to-yellow-400/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <Badge className="bg-red-500 text-white px-4 py-2 mb-6">🔥 Ưu đãi có thời hạn</Badge>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Đừng Để Doanh Số <span className="text-yellow-300">Trì Trệ</span> Thêm Nữa
            </h2>

            <p className="text-xl text-amber-100 mb-8 leading-relaxed">
              Liên hệ với chúng tôi ngay hôm nay để nhận tư vấn miễn phí và bắt đầu hành trình tăng trưởng bền vững.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-amber-900" />
                </div>
                <span className="text-amber-100">Tư vấn miễn phí 30 phút</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-amber-900" />
                </div>
                <span className="text-amber-100">Phản hồi trong vòng 2 giờ</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-amber-900" />
                </div>
                <span className="text-amber-100">Hỗ trợ 24/7</span>
              </div>
            </div>

            <div className="bg-yellow-400/20 rounded-2xl p-6 border border-yellow-400/30">
              <h3 className="text-xl font-bold text-yellow-300 mb-2">🎁 Ưu đãi đặc biệt tháng này</h3>
              <p className="text-amber-100">
                Miễn phí setup và training cho 50 khách hàng đầu tiên. Tiết kiệm đến 10 triệu VNĐ!
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nhận Tư Vấn Miễn Phí Ngay</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Họ và tên *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 text-lg border-2 border-gray-200 focus:border-amber-500"
                />
              </div>

              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Số điện thoại *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-12 text-lg border-2 border-gray-200 focus:border-amber-500"
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 text-lg border-2 border-gray-200 focus:border-amber-500"
                />
              </div>

              <div>
                <Textarea
                  name="note"
                  placeholder="Mô tả ngắn về doanh nghiệp và nhu cầu của bạn..."
                  value={formData.note}
                  onChange={handleChange}
                  rows={4}
                  className="text-lg border-2 border-gray-200 focus:border-amber-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Tôi muốn tăng doanh thu ngay
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>

            <p className="text-sm text-gray-500 text-center mt-4">* Thông tin của bạn được bảo mật tuyệt đối</p>
          </div>
        </div>
      </div>
    </section>
  )
}
