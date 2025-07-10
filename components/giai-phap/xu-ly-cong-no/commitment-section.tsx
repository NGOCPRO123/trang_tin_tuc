import { Scale, Clock, CheckCircle } from "lucide-react"

export default function CommitmentSection() {
  const benefits = [
    {
      icon: Scale,
      title: "Chuyên nghiệp & Hợp pháp",
      description:
        "Chúng tôi hành động dựa trên cơ sở pháp luật, sử dụng các kỹ năng đàm phán và tâm lý chuyên nghiệp, giúp bạn thu hồi nợ một cách văn minh và bảo vệ uy tín thương hiệu.",
    },
    {
      icon: Clock,
      title: "Tối ưu Thời gian & Nguồn lực",
      description:
        "Bạn không cần phải tốn thời gian, nhân lực và cảm xúc vào việc đòi nợ. Hãy để chúng tôi làm việc đó, để bạn có thể tập trung vào hoạt động kinh doanh cốt lõi của mình.",
    },
    {
      icon: CheckCircle,
      title: "Cam kết trên Hiệu quả",
      description:
        "Mô hình hợp tác của chúng tôi rất linh hoạt. Phí dịch vụ thường được tính dựa trên một tỷ lệ phần trăm của số tiền thu hồi thành công. Bạn chỉ trả phí khi chúng tôi mang lại kết quả.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-black mb-4">Tại sao nên Ủy thác việc Xử lý Công nợ cho HLCC?</h2>
          <p className="text-xl text-black font-bold max-w-2xl mx-auto">
            Sự khác biệt của chúng tôi
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="bg-[#CCA776]/10 border border-[#CCA776]/30 rounded-xl p-8 hover:shadow-lg transition-all hover:scale-105 flex flex-col items-center text-center"
              >
                <div className="bg-[#CCA776]/30 p-4 rounded-full mb-4">
                  <Icon className="h-10 w-10 text-[#CCA776]" />
                </div>
                <h3 className="font-black text-black mb-3 text-lg">{benefit.title}</h3>
                <p className="text-black font-bold text-base leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
