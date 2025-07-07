import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-[520px] flex items-stretch overflow-hidden">
      {/* Nền vàng chéo */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" viewBox="0 0 1600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
          <polygon points="0,0 1100,0 800,600 0,600" fill="#fde68a" />
          <polygon points="1100,0 1600,0 1600,600 800,600" fill="#fffbe8" />
        </svg>
        {/* Hiệu ứng hình học */}
        <div className="absolute top-20 left-32 w-32 h-32 bg-amber-200/40 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 right-40 w-40 h-40 bg-yellow-300/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between py-16 lg:py-24 gap-8">
        {/* Bên trái: Nội dung */}
        <div className="flex-1 max-w-xl flex flex-col justify-center items-start px-2 lg:px-0">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-yellow-800 leading-tight drop-shadow-lg mb-6">
            Doanh nghiệp của bạn đang cần thêm <span className="text-amber-500">vốn</span>,<br />
            hay cần thêm <span className="text-yellow-600">quyền kiểm soát</span>?
          </h1>
          <p className="text-xl text-yellow-900/90 font-medium mb-8">
            Đây là câu hỏi chiến lược mà mọi chủ doanh nghiệp đều phải đối mặt. Việc huy động vốn sai cách có thể khiến bạn mất đi quyền kiểm soát công ty mình đã gầy dựng.<br />
            <span className="font-semibold text-amber-700">Tại HLCC</span>, chúng tôi cung cấp các giải pháp đầu tư tài chính không chỉ giúp bạn có nguồn vốn dồi dào, mà còn giúp bạn củng cố và tối ưu hóa cấu trúc sở hữu.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-yellow-900 font-bold px-10 py-5 text-xl shadow-2xl border-2 border-yellow-200 rounded-full transition-transform duration-200 hover:scale-105"
          >
            Yêu cầu một buổi "Khám" sức khỏe Tài chính & Sở hữu
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
        {/* Bên phải: Hình ảnh lớn với viền bo góc bất đối xứng */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="relative w-[420px] h-[320px] lg:w-[520px] lg:h-[380px]">
            <div className="absolute -top-6 -left-6 w-full h-full bg-amber-100 rounded-[60px_120px_80px_40px/80px_40px_120px_60px] z-0 shadow-2xl" />
            <Image
              src="/placeholder.svg" // Thay bằng hình ảnh ẩn dụ phù hợp (bàn cờ hoặc bắt tay)
              alt="Chiến lược tài chính và quyền lực doanh nghiệp"
              fill
              className="object-cover rounded-[60px_120px_80px_40px/80px_40px_120px_60px] border-4 border-yellow-200 relative z-10 shadow-xl"
              priority
            />
            <div className="absolute bottom-4 right-4 bg-yellow-50/90 px-4 py-2 rounded-full text-yellow-700 font-semibold text-sm shadow border border-yellow-200 z-20">
              Kiến trúc sư trưởng cho cấu trúc tài chính & sở hữu
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
