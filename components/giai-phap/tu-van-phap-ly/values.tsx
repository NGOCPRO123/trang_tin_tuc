"use client"

import { ShieldCheck, Users, BadgeDollarSign } from "lucide-react"

const values = [
  {
    icon: ShieldCheck,
    title: "Bảo vệ Doanh nghiệp Toàn diện",
    description:
      "Chúng tôi không chỉ nhìn vào một điều khoản luật. Chúng tôi đặt vấn đề pháp lý trong bối cảnh chung của doanh nghiệp - tài chính, vận hành, chiến lược - để đưa ra lời tư vấn thực tiễn và có lợi nhất.",
    color: "from-[#CCA776] to-[#CCA776]",
    bgColor: "from-[#fffbe6] to-[#CCA776]/10",
  },
  {
    icon: Users,
    title: "Đội ngũ Luật sư & Chuyên gia dày dặn Kinh nghiệm",
    description:
      "Đội ngũ của chúng tôi là sự kết hợp giữa các luật sư tranh tụng sắc bén và các chuyên gia tư vấn am hiểu sâu sắc về môi trường kinh doanh tại Việt Nam.",
    color: "from-[#CCA776] to-[#CCA776]",
    bgColor: "from-[#f1f5f9] to-[#CCA776]/40",
  },
  {
    icon: BadgeDollarSign,
    title: "Cam kết Hiệu quả - Minh bạch Chi phí",
    description:
      "Chúng tôi luôn nỗ lực tìm kiếm giải pháp hiệu quả nhất cho khách hàng. Mô hình hợp tác linh hoạt, chi phí gắn liền với kết quả bạn nhận được.",
    color: "from-[#CCA776] to-[#CCA776]",
    bgColor: "from-[#fffbe6] to-[#CCA776]/10",
  },
]

export default function Values() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#CCA776]/10">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#CCA776]/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#CCA776]/20 rounded-full blur-xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#CCA776]/30 rounded-full px-6 py-2 border border-[#CCA776]/40 mb-6 shadow-md">
            <div className="w-2 h-2 bg-[#CCA776] rounded-full"></div>
            <span className="text-sm font-semibold text-[#CCA776] tracking-wide">Tại sao nên chọn HLCC?</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4 drop-shadow-[0_2px_12px_rgba(204,167,118,0.10)]">
            Sự khác biệt của chúng tôi
          </h2>
          <div className="w-24 h-1 bg-[#CCA776] rounded-full mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group relative p-10 rounded-3xl bg-gradient-to-br ${value.bgColor} border-2 border-transparent hover:border-[#CCA776] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 flex flex-col items-center text-center overflow-hidden`}
              style={{boxShadow:'0 8px 32px 0 rgba(204,167,118,0.10), 0 1.5px 8px 0 rgba(15,23,42,0.08)'}}
            >
              <div className="relative mb-8 flex justify-center">
                <div
                  className={`w-20 h-20 bg-[#CCA776] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white/60`}
                >
                  <value.icon className="w-10 h-10 text-white drop-shadow-lg" />
                </div>
                <div
                  className={`absolute inset-0 w-20 h-20 bg-[#CCA776] rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300`}
                ></div>
              </div>
              <h3 className="font-extrabold text-black mb-4 text-xl drop-shadow-sm">{value.title}</h3>
              <p className="text-black font-medium">{value.description}</p>
              {/* Glow effect */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#CCA776]/30 rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
