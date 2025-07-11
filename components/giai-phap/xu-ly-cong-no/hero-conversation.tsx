"use client"

import { Button } from "@/components/ui/button"
import { Link2Off } from "lucide-react"

export default function HeroConversation() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-[#CCA776]/10">
      {/* Hình ảnh ẩn dụ mạnh mẽ: mắt xích đứt gãy */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
        <Link2Off className="w-[220px] h-[220px] text-[#CCA776] rotate-12" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-[#CCA776]/30 text-[#CCA776] px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Dịch vụ Xử lý & Thu hồi Công nợ
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-6 leading-tight text-left">
              Doanh thu trên giấy tờ rất đẹp, nhưng <span className="font-black text-[#CCA776]">tiền trong tài khoản thì không thấy đâu?</span>
            </h1>
            <p className="text-xl md:text-2xl text-black font-bold mb-8 text-left">
              Đó là khi công nợ khó đòi đang ăn mòn lợi nhuận và bóp nghẹt dòng tiền của bạn. Việc đòi nợ sai cách có thể phá vỡ mối quan hệ với khách hàng và thậm chí đẩy bạn vào rủi ro pháp lý.<br />
              <span className="font-black text-[#CCA776]">Tại HLCC, chúng tôi cung cấp dịch vụ xử lý công nợ chuyên nghiệp, giúp bạn thu hồi tiền một cách hiệu quả và giữ gìn uy tín doanh nghiệp.</span>
            </p>
            <Button
              size="lg"
              className="bg-[#CCA776] hover:bg-[#CCA776] text-white px-10 py-5 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
            >
              Yêu cầu Đánh giá Nhanh Tình trạng Công nợ
            </Button>
          </div>
          <div className="relative h-full flex items-center justify-center">
            <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-[#CCA776]/30 flex items-center justify-center w-full h-full">
              <img
                src="/homepage.jpg"
                alt="Xử lý công nợ"
                className="rounded-2xl shadow-lg object-cover w-full h-auto max-w-full"
              />
              {/* Floating Success Indicators */}
              <div className="absolute -top-6 -right-6 bg-[#CCA776] text-white rounded-xl p-5 shadow-xl border-2 border-[#CCA776]/30">
                <div className="text-base font-medium">Tỷ lệ thu hồi</div>
                <div className="text-2xl font-bold">90%+</div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#CCA776] text-white rounded-xl p-5 shadow-xl border-2 border-[#CCA776]/30">
                <div className="text-base font-medium">Khách hàng hài lòng</div>
                <div className="text-2xl font-bold">500+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
