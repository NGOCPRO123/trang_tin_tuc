"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

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
    <section className="relative py-24 bg-gradient-to-br from-yellow-100 via-amber-100 to-yellow-200 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-24 left-0 w-[350px] h-[350px] bg-yellow-200 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[200px] bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-100 rounded-full blur-2xl opacity-40" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <Badge className="bg-gradient-to-r from-yellow-500 to-amber-400 text-white px-5 py-2 mb-6 shadow-lg shadow-yellow-200/40 rounded-xl">🚀 Sẵn sàng bứt phá doanh thu</Badge>
            <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-yellow-900">
              Bạn đã sẵn sàng để <span className="text-yellow-500">Bứt phá Doanh thu</span> một cách Thông minh?
            </h2>
            <p className="text-2xl text-yellow-900 mb-8 leading-relaxed font-medium">
              Hãy ngừng việc lãng phí ngân sách. Liên hệ ngay để nhận một chiến lược kinh doanh sơ bộ được thiết kế riêng cho doanh nghiệp của bạn!
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                  <Phone className="w-4 h-4 text-amber-900" />
                </div>
                <span className="text-yellow-900">Tư vấn miễn phí 30 phút</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                  <Mail className="w-4 h-4 text-amber-900" />
                </div>
                <span className="text-yellow-900">Phản hồi trong vòng 2 giờ</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                  <Clock className="w-4 h-4 text-amber-900" />
                </div>
                <span className="text-yellow-900">Hỗ trợ 24/7</span>
              </div>
            </div>
            <div className="bg-yellow-400/20 rounded-2xl p-6 border border-yellow-400/30">
              <h3 className="text-xl font-bold text-yellow-600 mb-2">🎁 Ưu đãi đặc biệt tháng này</h3>
              <p className="text-yellow-900">
                Miễn phí setup và training cho 50 khách hàng đầu tiên. Tiết kiệm đến 10 triệu VNĐ!
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white/60 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-yellow-200/60"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nhận Tư Vấn Chiến Lược Ngay</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Họ và tên *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 text-lg border-2 border-yellow-200 focus:border-yellow-500 rounded-xl bg-white/80"
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
                  className="h-12 text-lg border-2 border-yellow-200 focus:border-yellow-500 rounded-xl bg-white/80"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 text-lg border-2 border-yellow-200 focus:border-yellow-500 rounded-xl bg-white/80"
                />
              </div>
              <div>
                <Textarea
                  name="note"
                  placeholder="Mô tả ngắn về doanh nghiệp và nhu cầu của bạn..."
                  value={formData.note}
                  onChange={handleChange}
                  rows={4}
                  className="text-lg border-2 border-yellow-200 focus:border-yellow-500 resize-none rounded-xl bg-white/80"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-400 hover:from-yellow-600 hover:to-amber-500 text-white py-4 text-xl font-bold shadow-2xl shadow-yellow-300/40 rounded-full transition-all duration-300 animate-bounce"
              >
                NHẬN TƯ VẤN CHIẾN LƯỢC NGAY
                <ArrowRight className="ml-3 w-6 h-6 animate-move-right" />
              </Button>
            </form>
            <p className="text-sm text-gray-500 text-center mt-4">* Thông tin của bạn được bảo mật tuyệt đối</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
