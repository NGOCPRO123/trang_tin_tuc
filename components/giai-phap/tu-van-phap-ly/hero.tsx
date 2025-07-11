"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#CCA776]">
      {/* Glassmorphism & Gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0f172a]/80 via-[#CCA776]/10 to-[#fffbe6]/60 backdrop-blur-2xl"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#CCA776]/30 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#CCA776]/20 rounded-full blur-2xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_4px_24px_rgba(204,167,118,0.25)]">
                Một chữ ký <span className="text-[#CCA776] font-black">sai</span> có thể khiến bạn mất trắng cả cơ nghiệp.<br />
                <span className="block mt-2 text-[#CCA776] font-black">Hệ thống pháp lý của bạn đã đủ an toàn?</span>
              </h1>
              <div className="w-32 h-1 bg-[#CCA776] rounded-full"></div>
            </div>
            <p className="text-xl text-white font-bold leading-relaxed max-w-xl shadow-lg bg-white/10 rounded-xl px-6 py-4 backdrop-blur-md border border-white/20">
              Rủi ro pháp lý là những <span className="font-bold text-white">"quả bom nổ chậm"</span> ẩn sau mỗi bản hợp đồng bạn ký, mỗi nhân viên bạn tuyển, mỗi sản phẩm bạn bán ra thị trường.<br />
              Tại <span className="font-black text-[#CCA776]">HLCC</span>, chúng tôi không chờ đến khi "bom nổ". Chúng tôi là những chuyên gia <span className="font-black text-[#CCA776]">"gỡ bom"</span>, giúp bạn kiến tạo một <span className="font-black text-[#CCA776]">"tấm khiên pháp lý"</span> vững chắc để yên tâm phát triển kinh doanh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group bg-[#CCA776] hover:bg-[#CCA776] text-slate-900 px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-[0_8px_32px_rgba(204,167,118,0.25)] transition-all duration-300 border-2 border-[#CCA776]/60"
              >
                Yêu cầu một buổi "Rà soát Rủi ro" Miễn phí
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          {/* Right content - Shield image */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full h-96 lg:h-[480px] flex items-center justify-center">
              {/* Glass shield metaphor */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 bg-[#CCA776]/80 rounded-full shadow-[0_8px_64px_0_rgba(204,167,118,0.25)] flex items-center justify-center border-8 border-white/40 backdrop-blur-2xl relative">
                  <div className="absolute inset-0 rounded-full border-4 border-[#CCA776]/60 animate-pulse"></div>
                  <ShieldCheck className="w-36 h-36 text-white drop-shadow-lg" style={{filter:'drop-shadow(0 0 32px #CCA776)'}} />
                </div>
              </div>
              {/* Business model protected by shield */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-32 h-20 bg-gradient-to-br from-white/90 to-[#CCA776]/30 rounded-2xl shadow-xl flex items-center justify-center font-bold text-slate-800 text-lg border-2 border-[#CCA776]/30 backdrop-blur-md">
                  Doanh nghiệp bạn
                </div>
                <div className="w-40 h-2 bg-[#CCA776] rounded-full mt-2 opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
