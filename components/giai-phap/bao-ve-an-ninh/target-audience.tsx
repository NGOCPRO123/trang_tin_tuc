import { Building2, Home, Banknote, Mic } from "lucide-react"

const audiences = [
  {
    icon: Building2,
    title: "Doanh nghiệp",
    description: "Bảo vệ tài sản – kiểm soát người ra vào",
  },
  {
    icon: Home,
    title: "Khu dân cư",
    description: "Tuần tra, trấn an dân cư",
  },
  {
    icon: Banknote,
    title: "Ngân hàng / Cửa hàng",
    description: "Trực an ninh nội bộ, phòng trộm",
  },
  {
    icon: Mic,
    title: "Sự kiện lớn",
    description: "Bố trí lực lượng theo khu vực – phản ứng nhanh",
  },
]

export default function TargetAudience() {
  return (
    <section className="py-20 bg-[#CCA776]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-black mb-4">Ai nên sử dụng dịch vụ này?</h2>
          <p className="text-xl text-black font-bold mb-8">Dành cho doanh nghiệp muốn an toàn tuyệt đối</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <audience.icon className="w-12 h-12 text-[#CCA776]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{audience.title}</h3>
              <p className="text-gray-600 text-center">{audience.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 font-medium bg-[#CCA776]/30 p-4 rounded-lg inline-block">
            👉 Nếu bạn cần sự ổn định, kỷ luật và có phương án xử lý rõ ràng – bạn cần chúng tôi.
          </p>
        </div>
      </div>
    </section>
  )
}
