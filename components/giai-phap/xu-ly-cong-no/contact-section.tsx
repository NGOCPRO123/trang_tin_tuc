"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, DollarSign } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    amount: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <section id="lien-he" className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-red-700 mb-6">
              Đừng để Công nợ Khó đòi "Ăn mòn" Lợi nhuận của bạn
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Mỗi ngày trôi qua, khả năng thu hồi một khoản nợ quá hạn lại càng giảm đi. Hãy hành động ngay hôm nay. Để lại thông tin để nhận một buổi đánh giá sơ bộ về các khoản nợ của bạn và tư vấn hướng xử lý từ các chuyên gia của HLCC.
            </p>
          </div>
          <div className="bg-white/90 rounded-2xl p-8 lg:p-12 border border-red-200 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Họ và Tên
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                    placeholder="Nhập họ và tên"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Số điện thoại
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full"
                    placeholder="Nhập số điện thoại"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full"
                  placeholder="Email nhận tư vấn (không bắt buộc)"
                />
              </div>
              <div>
                <label htmlFor="amount" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tổng giá trị công nợ (ước tính)
                </label>
                <Input
                  id="amount"
                  type="text"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className="w-full"
                  placeholder="Ví dụ: 200 triệu, 1 tỷ..."
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mô tả ngắn
                </label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full h-32"
                  placeholder="Mô tả ngắn gọn tình huống nợ của bạn..."
                  required
                />
              </div>
              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  YÊU CẦU TƯ VẤN THU HỒI CÔNG NỢ
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
