"use client"

import { Button } from "@/components/ui/button"
import { Link2Off } from "lucide-react"

export default function HeroConversation() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Hình ảnh ẩn dụ mạnh mẽ: mắt xích đứt gãy */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
        <Link2Off className="w-[220px] h-[220px] text-red-400 rotate-12" />
      </div>
      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-red-100 text-red-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            Dịch vụ Xử lý & Thu hồi Công nợ
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Doanh thu trên giấy tờ rất đẹp,<br className="hidden md:block" />
            nhưng <span className="text-red-600">tiền trong tài khoản thì không thấy đâu?</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium mb-8 max-w-2xl mx-auto">
            Đó là khi công nợ khó đòi đang ăn mòn lợi nhuận và bóp nghẹt dòng tiền của bạn. Việc đòi nợ sai cách có thể phá vỡ mối quan hệ với khách hàng và thậm chí đẩy bạn vào rủi ro pháp lý. <span className="font-semibold text-red-700">Tại HLCC, chúng tôi cung cấp dịch vụ xử lý công nợ chuyên nghiệp, giúp bạn thu hồi tiền một cách hiệu quả và giữ gìn uy tín doanh nghiệp.</span>
          </p>
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
          >
            Yêu cầu Đánh giá Nhanh Tình trạng Công nợ
          </Button>
        </div>
      </div>
    </section>
  )
}
