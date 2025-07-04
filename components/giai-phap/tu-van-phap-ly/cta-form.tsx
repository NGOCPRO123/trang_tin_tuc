"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Clock, Shield, Send } from "lucide-react"

export default function CTAForm() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-amber-900 to-orange-900"></div>

      {/* Geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-400/10 to-red-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-white space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20 mb-6">
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span className="text-sm font-medium text-amber-200">Liên hệ ngay</span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Nhận tư vấn
                  <span className="block bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
                    Miễn phí
                  </span>
                  trong 4 giờ
                </h2>

                <p className="text-xl text-slate-300 leading-relaxed">
                  Đội ngũ luật sư chuyên nghiệp sẽ liên hệ và tư vấn chi tiết cho bạn
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Phản hồi nhanh chóng</div>
                    <div className="text-slate-300 text-sm">Cam kết liên hệ trong 4h làm việc</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Bảo mật tuyệt đối</div>
                    <div className="text-slate-300 text-sm">Thông tin được bảo vệ nghiêm ngặt</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Tư vấn miễn phí</div>
                    <div className="text-slate-300 text-sm">Không tính phí tư vấn ban đầu</div>
                  </div>
                </div>
              </div>

              {/* Contact info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-300 mb-2">0123.456.789</div>
                  <div className="text-slate-300">Hotline 24/7</div>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl"></div>

              <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Gửi yêu cầu tư vấn</h3>
                  <p className="text-slate-600">Điền thông tin để nhận tư vấn miễn phí</p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-slate-700 font-medium text-sm">Họ và tên *</label>
                      <Input
                        placeholder="Nhập họ tên của bạn"
                        className="border-slate-300 focus:border-amber-500 focus:ring-amber-500 rounded-xl h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-slate-700 font-medium text-sm">Số điện thoại *</label>
                      <Input
                        placeholder="Nhập số điện thoại"
                        className="border-slate-300 focus:border-amber-500 focus:ring-amber-500 rounded-xl h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-slate-700 font-medium text-sm">Email</label>
                    <Input
                      placeholder="Nhập email của bạn"
                      className="border-slate-300 focus:border-amber-500 focus:ring-amber-500 rounded-xl h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-slate-700 font-medium text-sm">Vấn đề cần hỗ trợ *</label>
                    <Textarea
                      placeholder="Mô tả chi tiết vấn đề pháp lý bạn đang gặp phải..."
                      rows={4}
                      className="border-slate-300 focus:border-amber-500 focus:ring-amber-500 rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Nhận hỗ trợ ngay
                  </Button>

                  <p className="text-center text-sm text-slate-500">
                    <Shield className="w-4 h-4 inline mr-1" />
                    Thông tin của bạn sẽ được bảo mật tuyệt đối
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
