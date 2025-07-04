"use client"

import { Shield, Users, Clock, DollarSign } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Bảo mật tuyệt đối",
    description: "Thông tin khách hàng được bảo vệ nghiêm ngặt theo tiêu chuẩn quốc tế",
    color: "from-emerald-400 to-teal-500",
    bgColor: "from-emerald-50 to-teal-50",
  },
  {
    icon: Users,
    title: "Đội ngũ chuyên môn cao",
    description: "Luật sư giàu kinh nghiệm, chuyên sâu từng lĩnh vực pháp lý",
    color: "from-blue-400 to-indigo-500",
    bgColor: "from-blue-50 to-indigo-50",
  },
  {
    icon: Clock,
    title: "Phản hồi trong 4h",
    description: "Cam kết hỗ trợ nhanh chóng, kịp thời trong giờ làm việc",
    color: "from-purple-400 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
  },
  {
    icon: DollarSign,
    title: "Chi phí minh bạch",
    description: "Báo giá rõ ràng, không có chi phí phát sinh bất ngờ",
    color: "from-amber-400 to-orange-500",
    bgColor: "from-amber-50 to-orange-50",
  },
]

export default function Values() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-orange-300/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-yellow-200/20 to-amber-300/20 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header với design độc đáo */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full px-6 py-2 border border-amber-200 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
            <span className="text-sm font-medium text-amber-800">Tại sao chọn chúng tôi</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Cam kết & Giá trị
            <span className="block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Cốt lõi
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto"></div>
        </div>

        {/* Values grid với layout bất đối xứng */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl bg-gradient-to-br ${value.bgColor} border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                index % 2 === 0 ? "lg:mt-8" : ""
              }`}
            >
              {/* Floating icon */}
              <div className="relative mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <div
                  className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300`}
                ></div>
              </div>

              <h3 className="font-bold text-slate-800 mb-3 text-lg">{value.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
