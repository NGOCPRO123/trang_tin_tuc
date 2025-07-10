import { Card, CardContent } from "@/components/ui/card"
import { Quote, Lightbulb, Shield, Target, TrendingUp } from "lucide-react"

export function InvestmentPhilosophySection() {
  const principles = [
    {
      icon: Shield,
      title: "BẢO TOÀN VỐN TRƯỚC TIÊN",
      quote: "Quy tắc số 1: Không mất tiền. Quy tắc số 2: Không quên quy tắc số 1.",
      description: "Warren Buffett không nói đùa. Chúng tôi cũng vậy.",
      color: "from-[#CCA776] to-[#CCA776]/80",
    },
    {
      icon: Target,
      title: "TẬP TRUNG VÀO DÀI HẠN",
      quote: "Thời gian trên thị trường quan trọng hơn timing thị trường.",
      description: "Kiên nhẫn là vũ khí mạnh nhất của nhà đầu tư thông minh.",
      color: "from-[#CCA776] to-[#CCA776]/80",
    },
    {
      icon: TrendingUp,
      title: "LỢI NHUẬN NHẤT QUÁN",
      quote: "Tôi thà lãi 15%/năm trong 10 năm hơn là lãi 100% trong 1 năm rồi lỗ 50% năm sau.",
      description: "Sự nhất quán tạo nên sự giàu có thực sự.",
      color: "from-[#CCA776] to-[#CCA776]/80",
    },
    {
      icon: Lightbulb,
      title: "HỌC HỎI KHÔNG NGỪNG",
      quote: "Đầu tư thành công là 20% kiến thức và 80% tâm lý.",
      description: "Chúng tôi không chỉ dạy bạn đầu tư, mà còn dạy bạn kiểm soát cảm xúc.",
      color: "from-[#CCA776] to-[#CCA776]/80",
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-white to-[#CCA776]/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Quote className="w-16 h-16 text-[#CCA776] mx-auto mb-6" />
          <h2 className="text-4xl lg:text-6xl font-black text-black mb-8">
            TRIẾT LÝ
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#CCA776] to-[#CCA776]/80">
              ĐẦU TƯ
            </span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Những nguyên tắc cốt lõi mà chúng tôi tin tưởng và thực hành mỗi ngày.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {principles.map((principle, index) => (
            <Card
              key={index}
              className="border-none shadow-xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${principle.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <principle.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-[#CCA776] mb-4">{principle.title}</h3>

                <blockquote className="text-lg text-black italic mb-4 border-l-4 border-[#CCA776] pl-4">
                  "{principle.quote}"
                </blockquote>

                <p className="text-black leading-relaxed">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#CCA776]/10 to-[#CCA776]/5 rounded-3xl p-8 border border-[#CCA776] max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-black mb-4">Đây không chỉ là lý thuyết</h3>
            <p className="text-lg text-black mb-6">
              Mỗi nguyên tắc đều được thử thách qua thời gian và được chứng minh bằng kết quả thực tế.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-black">
              <div>✓ Áp dụng từ 2021</div>
              <div>✓ Qua 2 chu kỳ thị trường</div>
              <div>✓ 847 khách hàng tin tưởng</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
