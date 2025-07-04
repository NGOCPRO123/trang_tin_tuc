"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, Clock } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    amount: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <section id="lien-he" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Bạn có đang bị nợ tiền mà không dám lên tiếng?
            </h2>
            <p className="text-xl text-gray-600 mb-4">Hãy để chúng tôi thay bạn lên tiếng — đúng luật, đúng cách.</p>
          </div>

          <div className="bg-white/80 rounded-2xl p-8 lg:p-12 border border-yellow-200 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Họ và tên *
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
                    Số điện thoại *
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
                <label htmlFor="amount" className="block text-sm font-semibold text-gray-700 mb-2">
                  Số tiền đang bị nợ *
                </label>
                <Select onValueChange={(value) => setFormData({ ...formData, amount: value })}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Chọn mức tiền" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-50m">Dưới 50 triệu</SelectItem>
                    <SelectItem value="50-200m">50 - 200 triệu</SelectItem>
                    <SelectItem value="over-200m">Trên 200 triệu</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mô tả ngắn tình huống *
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
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Gửi tình huống – Nhận phản hồi trong 4h làm việc
                </Button>

                <div className="flex items-center justify-center space-x-2 mt-4 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>Phản hồi nhanh trong giờ hành chính</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
