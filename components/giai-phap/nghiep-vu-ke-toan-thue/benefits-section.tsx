import { ShieldCheck, Lightbulb, Cpu } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Chính xác & Tuân thủ Tuyệt đối",
      description:
        "Với chúng tôi, kế toán không chỉ là những con số. Đó là sự chính xác, là kỷ luật và là sự tuân thủ nghiêm ngặt các quy định của pháp luật. Sự an toàn của bạn là ưu tiên số một của chúng tôi.",
    },
    {
      icon: Lightbulb,
      title: "Tư duy Tối ưu, không chỉ là Báo cáo",
      description:
        "Chúng tôi luôn chủ động tìm kiếm các cơ hội để giúp bạn tiết kiệm chi phí và tối ưu hóa nghĩa vụ thuế một cách hợp pháp. Chúng tôi làm việc vì lợi nhuận của bạn.",
    },
    {
      icon: Cpu,
      title: "Công nghệ & Quy trình Hiện đại",
      description:
        "Chúng tôi ứng dụng các phần mềm kế toán và quy trình làm việc tiên tiến nhất để đảm bảo dữ liệu được xử lý nhanh chóng, chính xác và bảo mật, giúp bạn có được báo cáo tức thì mọi lúc, mọi nơi.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-black mb-4">Sự khác biệt của chúng tôi</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#CCA776]/10 border border-[#CCA776]/30 rounded-xl p-8 hover:shadow-lg transition-all hover:scale-105 flex flex-col items-center text-center"
            >
              <div className="bg-[#CCA776]/30 p-4 rounded-full mb-4">
                <benefit.icon className="h-10 w-10 text-[#CCA776]" />
              </div>
              <h3 className="font-extrabold text-black mb-3 text-lg">{benefit.title}</h3>
              <p className="text-black text-base font-bold leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
