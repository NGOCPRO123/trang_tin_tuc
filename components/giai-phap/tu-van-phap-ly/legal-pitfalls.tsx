"use client"

import { AlertTriangle, FileText, Lock, UserX, ShieldOff } from "lucide-react"

const pitfalls = [
  {
    icon: FileText,
    title: "Hợp đồng sơ sài",
    description:
      "Sử dụng các mẫu hợp đồng tải trên mạng, chứa đầy những điều khoản bất lợi và lỗ hổng chết người.",
    color: "from-[#CCA776] to-[#CCA776]",
  },
  {
    icon: ShieldOff,
    title: 'Bỏ quên "Tài sản Vô hình"',
    description:
      "Nhãn hiệu, tên miền, bí mật kinh doanh không được đăng ký bảo hộ, có nguy cơ bị đối thủ 'hớt tay trên'.",
    color: "from-[#CCA776] to-[#CCA776]",
  },
  {
    icon: UserX,
    title: "Tranh chấp âm ỉ",
    description:
      "Những bất đồng nhỏ với nhân viên, khách hàng hoặc đối tác không được giải quyết triệt để, có nguy cơ bùng phát thành các vụ kiện tụng tốn kém.",
    color: "from-[#CCA776] to-[#CCA776]",
  },
  {
    icon: Lock,
    title: 'Tuân thủ "cho có"',
    description:
      "Thực hiện các thủ tục pháp lý, lao động, thuế một cách đối phó mà không hiểu rõ bản chất, tiềm ẩn nguy cơ bị xử phạt nặng.",
    color: "from-[#CCA776] to-[#CCA776]",
  },
]

export default function LegalPitfalls() {
  return (
    <section className="py-24 bg-[#CCA776]/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#CCA776]/30 rounded-full px-6 py-2 border border-[#CCA776]/40 mb-6 shadow-md">
            <AlertTriangle className="w-5 h-5 text-[#CCA776]" />
            <span className="text-sm font-semibold text-[#CCA776] tracking-wide">Cạm bẫy pháp lý thường gặp</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4 drop-shadow-[0_2px_12px_rgba(204,167,118,0.10)]">
            Doanh nghiệp của bạn có đang vô tình bước vào những <span className="text-[#CCA776] font-black">"cạm bẫy"</span> này?
          </h2>
          <p className="text-lg text-black font-bold max-w-2xl mx-auto">
            Đừng nghĩ rằng chỉ những công ty lớn mới gặp vấn đề pháp lý. Mọi doanh nghiệp đều đối mặt với những rủi ro này hàng ngày:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {pitfalls.map((item, idx) => (
            <div
              key={idx}
              className={`group bg-white/80 rounded-3xl p-10 border-2 border-transparent hover:border-[#CCA776] shadow-xl hover:shadow-2xl transition-all duration-300 flex gap-8 items-start relative overflow-hidden hover:scale-[1.03] hover:-translate-y-1`}
              style={{boxShadow:'0 8px 32px 0 rgba(204,167,118,0.10), 0 1.5px 8px 0 rgba(15,23,42,0.08)'}}
            >
              <div className={`w-20 h-20 bg-[#CCA776] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white/60`}>
                <item.icon className="w-10 h-10 text-white drop-shadow-lg" />
              </div>
              <div>
                <h3 className="font-extrabold text-black mb-3 text-xl drop-shadow-sm">{item.title}</h3>
                <p className="text-black font-medium">{item.description}</p>
              </div>
              {/* Glow effect */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#CCA776]/30 rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 