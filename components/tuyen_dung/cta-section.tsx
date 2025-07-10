"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail } from "lucide-react"

export default function CTASection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted")
  }

  return (
    <section className="py-24 bg-gradient-to-br from-[#CCA776] via-[#CCA776] to-[#CCA776] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-black mb-4">Sẵn sàng ứng tuyển?</h2>
          <p className="text-xl text-black font-bold mb-8">Gửi CV hoặc liên hệ để được tư vấn về vị trí phù hợp</p>

          <div className="bg-white rounded-2xl p-10 max-w-2xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Gửi hồ sơ của bạn</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Họ và tên" className="h-12 text-lg" required />
                <Input type="email" placeholder="Email" className="h-12 text-lg" required />
              </div>
              <Input placeholder="Số điện thoại" className="h-12 text-lg" required />
              <div>
                <label htmlFor="service" className="block text-left font-medium mb-1 text-gray-700 text-lg">Dịch vụ quan tâm</label>
                <select id="service" name="service" className="h-12 text-lg w-full border rounded px-3" required>
                  <option value="">-- Chọn dịch vụ --</option>
                  <option value="bao-ve-an-ninh">Giải pháp bảo vệ an ninh</option>
                  <option value="dau-tu-tai-chinh">Giải pháp đầu tư tài chính</option>
                  <option value="giai-phap-tang-doanh-so">Giải pháp tăng doanh số</option>
                  <option value="nghiep-vu-ke-toan-thue">Giải pháp nghiệp vụ kế toán thuế</option>
                  <option value="tu-van-phap-ly">Giải pháp tư vấn pháp lý</option>
                  <option value="xu-ly-cong-no">Giải pháp xử lý công nợ</option>
                </select>
              </div>
              <Textarea
                placeholder="Giới thiệu ngắn về bản thân và vị trí mong muốn"
                className="text-lg"
                rows={4}
                required
              />
              <Button
                type="submit"
                className="w-full bg-[#CCA776] hover:bg-[#CCA776]/80 text-white py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Gửi hồ sơ cho chúng tôi
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
