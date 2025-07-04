"use client"

import { Button } from "@/components/ui/button"
import { Heart, FileText, Briefcase, Calculator, TrendingUp, Lightbulb, Gavel, ArrowRight } from "lucide-react"

const personalServices = [
  {
    icon: Heart,
    title: "Hôn nhân - Gia đình",
    description: "Tư vấn ly hôn, phân chia tài sản, quyền nuôi con",
    color: "from-rose-400 to-pink-500",
  },
  {
    icon: FileText,
    title: "Thừa kế",
    description: "Lập di chúc, phân chia tài sản thừa kế",
    color: "from-blue-400 to-indigo-500",
  },
  {
    icon: Gavel,
    title: "Hình sự",
    description: "Bào chữa, tư vấn các vụ án hình sự",
    color: "from-red-400 to-rose-500",
  },
  {
    icon: Briefcase,
    title: "Dân sự",
    description: "Tranh chấp hợp đồng, bồi thường thiệt hại",
    color: "from-emerald-400 to-teal-500",
  },
]

const businessServices = [
  {
    icon: FileText,
    title: "Hợp đồng",
    description: "Soạn thảo, rà soát hợp đồng kinh doanh",
    color: "from-purple-400 to-indigo-500",
  },
  {
    icon: Calculator,
    title: "Thuế",
    description: "Tư vấn thuế, giải quyết tranh chấp thuế",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: TrendingUp,
    title: "Đầu tư",
    description: "Tư vấn pháp lý đầu tư, M&A",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Lightbulb,
    title: "Sở hữu trí tuệ",
    description: "Đăng ký nhãn hiệu, bản quyền, bằng sáng chế",
    color: "from-yellow-400 to-amber-500",
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-amber-50 relative overflow-hidden">
      {/* Geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-amber-200/10 to-orange-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-yellow-200/10 to-amber-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 border border-amber-200 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
            <span className="text-sm font-medium text-amber-800">Dịch vụ chuyên nghiệp</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Giải pháp pháp lý
            <span className="block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Toàn diện
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          {/* Personal Services */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Dành cho Cá nhân</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mx-auto lg:mx-0"></div>
            </div>

            <div className="space-y-6">
              {personalServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-6">
                    <div className="relative">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <div
                        className={`absolute inset-0 w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300`}
                      ></div>
                    </div>

                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800 mb-2 text-lg">{service.title}</h4>
                      <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>

                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl bg-transparent"
                        >
                          Chi tiết
                        </Button>
                        <Button
                          size="sm"
                          className={`bg-gradient-to-r ${service.color} hover:shadow-lg text-white rounded-xl group/btn`}
                        >
                          Đặt lịch
                          <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Services */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Dành cho Doanh nghiệp</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto lg:mx-0"></div>
            </div>

            <div className="space-y-6">
              {businessServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-6">
                    <div className="relative">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <div
                        className={`absolute inset-0 w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300`}
                      ></div>
                    </div>

                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800 mb-2 text-lg">{service.title}</h4>
                      <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>

                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl bg-transparent"
                        >
                          Chi tiết
                        </Button>
                        <Button
                          size="sm"
                          className={`bg-gradient-to-r ${service.color} hover:shadow-lg text-white rounded-xl group/btn`}
                        >
                          Đặt lịch
                          <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
