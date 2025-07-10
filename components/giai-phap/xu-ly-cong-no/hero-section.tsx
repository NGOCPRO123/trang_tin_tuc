import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#CCA776]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-10">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-black mb-6 leading-tight">
              Doanh thu trên giấy tờ rất đẹp, nhưng <span className="font-black" style={{ color: '#CCA776' }}>tiền trong tài khoản thì không thấy đâu?</span>
            </h1>
            <p className="text-xl lg:text-2xl text-black font-bold mb-6 leading-relaxed">
              Đó là khi công nợ khó đòi đang ăn mòn lợi nhuận và bóp nghẹt dòng tiền của bạn. Việc đòi nợ sai cách có thể phá vỡ mối quan hệ với khách hàng và thậm chí đẩy bạn vào rủi ro pháp lý. <span className="font-black text-[#CCA776]">Tại HLCC, chúng tôi cung cấp dịch vụ xử lý công nợ chuyên nghiệp, giúp bạn thu hồi tiền một cách hiệu quả và giữ gìn uy tín doanh nghiệp.</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="text-white px-10 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: '#CCA776' }}
            >
              Yêu cầu Đánh giá Nhanh Tình trạng Công nợ
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <div className="flex justify-center mb-10">
            <Image
              src="/placeholder-pipe-broken.png"
              alt="Dòng tiền bị tắc nghẽn - hình ảnh ẩn dụ"
              width={420}
              height={220}
              className="mx-auto rounded-xl shadow-lg border border-[#CCA776]/30 bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
