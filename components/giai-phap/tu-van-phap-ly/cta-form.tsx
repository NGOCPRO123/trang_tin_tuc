"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Shield, Send } from "lucide-react"

export default function CTAForm() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#CCA776]/10">
      {/* Glassmorphism & Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#CCA776]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#CCA776]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#CCA776]/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div className="text-[#0f172a] space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#CCA776]/30 rounded-full px-6 py-2 border border-[#CCA776]/40 mb-6 shadow-md">
                  <Phone className="w-5 h-5 text-[#CCA776]" />
                  <span className="text-sm font-semibold text-[#CCA776] tracking-wide">Liên hệ ngay</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 leading-tight text-black drop-shadow-[0_2px_12px_rgba(204,167,118,0.10)]">
                  Đừng để Rủi ro Pháp lý trở thành <span className="text-[#CCA776] font-black">"Gót chân Achilles"</span> của Doanh nghiệp bạn
                </h2>
                <p className="text-xl text-black font-bold leading-relaxed bg-white/60 rounded-xl px-6 py-4 border border-[#CCA776]/20 shadow-md">
                  Một hệ thống pháp lý vững chắc là khoản đầu tư thông minh nhất. Liên hệ ngay để nhận một buổi tư vấn pháp lý chuyên sâu và rà soát các rủi ro tiềm ẩn cho doanh nghiệp của bạn!
                </p>
              </div>
              <div className="bg-[#CCA776]/20 backdrop-blur-md rounded-2xl p-6 border-2 border-[#CCA776]/30 shadow-lg flex flex-col items-center">
                <div className="text-3xl font-black text-[#CCA776] mb-2 tracking-wider animate-pulse">028.5555.8879</div>
                <div className="text-black font-bold">Hotline 24/7</div>
              </div>
            </div>
            {/* Right form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-[#fffbe6]/60 backdrop-blur-2xl rounded-3xl"></div>
              <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl p-10 border-2 border-[#CCA776]/30 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-extrabold text-black mb-2">Gửi yêu cầu tư vấn</h3>
                  <p className="text-black font-bold">
                    Điền thông tin để nhận tư vấn pháp lý chuyên sâu miễn phí
                  </p>
                </div>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-black font-bold text-sm">Họ và tên *</label>
                      <Input placeholder="Nhập họ tên của bạn" className="border-[#CCA776]/40 focus:border-[#CCA776] focus:ring-[#CCA776] rounded-xl h-12 bg-white/80" />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-black font-bold text-sm">Số điện thoại *</label>
                      <Input placeholder="Nhập số điện thoại" className="border-[#CCA776]/40 focus:border-[#CCA776] focus:ring-[#CCA776] rounded-xl h-12 bg-white/80" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-black font-bold text-sm">Email</label>
                    <Input placeholder="Nhập email của bạn" className="border-[#CCA776]/40 focus:border-[#CCA776] focus:ring-[#CCA776] rounded-xl h-12 bg-white/80" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-black font-bold text-sm">Vấn đề cần hỗ trợ *</label>
                    <Textarea placeholder="Mô tả chi tiết vấn đề pháp lý bạn đang gặp phải..." rows={4} className="border-[#CCA776]/40 focus:border-[#CCA776] focus:ring-[#CCA776] rounded-xl resize-none bg-white/80" />
                  </div>
                  <Button size="lg" className="w-full bg-[#CCA776] hover:bg-[#CCA776] text-slate-900 py-5 text-xl font-extrabold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group border-2 border-[#CCA776]/60 animate-pulse">
                    <Send className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform" />
                    NHẬN TƯ VẤN PHÁP LÝ CHUYÊN SÂU!
                  </Button>
                  <p className="text-center text-sm text-black font-bold mt-2">
                    <Shield className="w-5 h-5 inline mr-1 text-[#CCA776]" />
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
