"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, MessageSquare, DollarSign, Clock } from "lucide-react"

export default function DecisionMoment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    amount: "",
    timeWaiting: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-9xl">⚡</div>
        <div className="absolute bottom-20 right-20 text-9xl">💰</div>
        <div className="absolute top-1/2 left-10 text-6xl">🔥</div>
        <div className="absolute top-1/3 right-10 text-6xl">⏰</div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-8 py-3 rounded-full text-lg font-bold mb-8 text-[#CCA776]">
              ⚡ QUYẾT ĐỊNH NGAY BÂY GIỜ
            </div>
            <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight text-[#CCA776]">
              ĐỪNG ĐỂ
              <br />
              <span className="text-[#CCA776] font-black">NGÀY MAI</span>
              <br />
              <span className="text-[#CCA776] font-black">MẤT THÊM TIỀN</span>
            </h2>
            <p className="text-2xl font-black text-[#CCA776]">Mỗi ngày trôi qua = Thêm tiền bay vào túi người khác</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Urgency */}
            <div className="space-y-8">
              <div className="bg-[#CCA776]/10 backdrop-blur-sm rounded-3xl p-8 border-4 border-[#CCA776]/30">
                <h3 className="text-3xl font-black text-[#CCA776] mb-6">TÍNH TOÁN THỰC TẾ</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between bg-[#CCA776]/20 rounded-xl p-4">
                    <span className="text-lg text-gray-900">Nợ 200 triệu x 6 tháng:</span>
                    <span className="text-2xl font-bold text-[#CCA776]">-60 triệu cơ hội</span>
                  </div>
                  <div className="flex items-center justify-between bg-[#CCA776]/20 rounded-xl p-4">
                    <span className="text-lg text-gray-900">Lãi suất cơ hội 1%/tháng:</span>
                    <span className="text-2xl font-bold text-[#CCA776]">-12 triệu/năm</span>
                  </div>
                  <div className="flex items-center justify-between bg-[#CCA776]/20 rounded-xl p-4">
                    <span className="text-lg text-gray-900">Chi phí cơ hội kinh doanh:</span>
                    <span className="text-2xl font-bold text-[#CCA776]">-50 triệu/năm</span>
                  </div>
                  <div className="border-t-2 border-[#CCA776]/30 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-gray-900">TỔNG THIỆT HẠI:</span>
                      <span className="text-3xl font-black text-[#CCA776]">-122 triệu/năm</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#CCA776]/10 backdrop-blur-sm rounded-2xl p-6 border border-[#CCA776]/30">
                <h4 className="text-xl font-bold text-[#CCA776] mb-4">🚨 HOTLINE KHẨN CẤP</h4>
                <div className="flex items-center space-x-4">
                  <Phone className="w-8 h-8 text-[#CCA776]" />
                  <div>
                    <div className="text-2xl font-black text-gray-900">0901.DEBT.NOW</div>
                    <div className="text-sm text-gray-800">Tư vấn miễn phí 24/7</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 lg:p-12 text-gray-900">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-black text-black mb-4">HÀNH ĐỘNG NGAY!</h3>
                <p className="text-lg text-black font-bold">
                  Điền form - Nhận tư vấn trong 15 phút
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">Họ tên *</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nhập họ tên"
                      className="border-2 border-gray-300 focus:border-[#CCA776]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-black mb-2">Số điện thoại *</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Nhập SĐT"
                      className="border-2 border-gray-300 focus:border-[#CCA776]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">Số tiền bị nợ *</label>
                    <Select onValueChange={(value) => setFormData({ ...formData, amount: value })}>
                      <SelectTrigger className="border-2 border-gray-300 focus:border-[#CCA776]">
                        <SelectValue placeholder="Chọn mức tiền" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50-100m">50-100 triệu</SelectItem>
                        <SelectItem value="100-500m">100-500 triệu</SelectItem>
                        <SelectItem value="500m-1b">500 triệu - 1 tỷ</SelectItem>
                        <SelectItem value="over-1b">Trên 1 tỷ</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-black mb-2">Đã chờ bao lâu? *</label>
                    <Select onValueChange={(value) => setFormData({ ...formData, timeWaiting: value })}>
                      <SelectTrigger className="border-2 border-gray-300 focus:border-[#CCA776]">
                        <SelectValue placeholder="Thời gian chờ" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-3m">1-3 tháng</SelectItem>
                        <SelectItem value="3-6m">3-6 tháng</SelectItem>
                        <SelectItem value="6-12m">6-12 tháng</SelectItem>
                        <SelectItem value="over-1y">Trên 1 năm</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-black mb-2">Mô tả tình huống *</label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Họ nợ bao nhiêu? Từ khi nào? Có hợp đồng không? Họ trả lời thế nào khi bạn đòi?"
                    className="h-32 border-2 border-gray-300 focus:border-[#CCA776]"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#CCA776] hover:bg-[#CCA776] text-white py-6 text-xl font-black rounded-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
                  >
                    <DollarSign className="w-6 h-6 mr-3" />
                    ĐÒNG TIỀN NGAY - MIỄN PHÍ TƯ VẤN
                  </Button>

                  <div className="flex items-center justify-center space-x-4 text-sm text-black font-bold">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>Phản hồi trong 15 phút</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="w-4 h-4" />
                      <span>Tư vấn miễn phí</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="bg-[#CCA776]/10 backdrop-blur-sm rounded-3xl p-8 border-4 border-[#CCA776]/30 mt-16 text-center">
            <p className="text-2xl font-black text-[#CCA776] mb-4">
              ⚠️ LƯU Ý: Chúng tôi chỉ nhận tối đa 10 case/tháng
            </p>
            <p className="text-lg text-black font-bold">
              Để đảm bảo chất lượng dịch vụ. Đăng ký ngay để không bỏ lỡ cơ hội.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
