import { DollarSign, Shield, FileCheck } from "lucide-react"

export default function PricingSection() {
  const features = [
    {
      icon: DollarSign,
      title: "Không thu phí trước",
      description: "Nếu không thu được tiền",
    },
    {
      icon: FileCheck,
      title: "Phí theo %",
      description: "Tùy mức độ khó – cam kết rõ trong hợp đồng",
    },
    {
      icon: Shield,
      title: "Không hứa bậy",
      description: "Chỉ làm thật, đánh giá thực tế",
    },
  ]

  return (
    <section className="py-20 bg-white/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-black mb-4">Chi phí dịch vụ</h2>
            <p className="text-xl text-black font-bold">Rõ ràng, minh bạch, không phí ẩn</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="bg-white/80 rounded-2xl p-8 border border-[#CCA776]/30 text-center">
                  <div className="w-16 h-16 bg-[#CCA776]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-[#CCA776]" />
                  </div>
                  <h3 className="text-xl font-black text-black mb-3">{feature.title}</h3>
                  <p className="text-black font-bold">{feature.description}</p>
                </div>
              )
            })}
          </div>

          <div className="bg-[#CCA776]/10 rounded-2xl p-8 border border-[#CCA776]/30 text-center">
            <h3 className="text-2xl font-black text-black mb-4">Nguyên tắc làm việc của chúng tôi</h3>
            <p className="text-lg text-black font-bold leading-relaxed">
              Chúng tôi không hứa sai, chỉ làm thật.
              <br />
              <span className="font-black text-[#CCA776]">
                Thành công của bạn chính là thành công của chúng tôi.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
