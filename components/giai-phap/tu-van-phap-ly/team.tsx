"use client"

import Image from "next/image"
import { Quote, Award, Star } from "lucide-react"

const lawyers = [
  {
    name: "Luật sư Nguyễn Văn A",
    specialty: "Luật sư dân sự – 12 năm kinh nghiệm",
    quote: "Pháp luật là vũ khí bảo vệ khách hàng của tôi.",
    image: "/placeholder.svg?height=400&width=400",
    achievements: ["Thạc sĩ Luật", "100+ vụ thành công", "Chuyên gia dân sự"],
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "Luật sư Trần Thị B",
    specialty: "Luật sư hình sự – 10 năm kinh nghiệm",
    quote: "Công lý không chỉ là mục tiêu, mà là sứ mệnh của tôi.",
    image: "/placeholder.svg?height=400&width=400",
    achievements: ["Tiến sĩ Luật", "80+ vụ bào chữa", "Chuyên gia hình sự"],
    color: "from-rose-400 to-pink-500",
  },
]

export default function Team() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-orange-300/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-indigo-300/20 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full px-6 py-2 border border-amber-200 mb-6">
            <Award className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-800">Đội ngũ chuyên gia</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Luật sư
            <span className="block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Tiêu biểu
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Đội ngũ luật sư giàu kinh nghiệm, tận tâm và chuyên nghiệp
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {lawyers.map((lawyer, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border border-slate-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Decorative elements */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${lawyer.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                {/* Profile section */}
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative mb-6">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${lawyer.color} rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
                    ></div>
                    <Image
                      src={lawyer.image || "/placeholder.svg"}
                      alt={lawyer.name}
                      width={200}
                      height={200}
                      className="relative rounded-3xl object-cover border-4 border-white shadow-xl"
                    />

                    {/* Floating badge */}
                    <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-3 shadow-lg border border-slate-200">
                      <Star className={`w-6 h-6 text-amber-500`} fill="currentColor" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{lawyer.name}</h3>
                  <p
                    className={`text-lg font-medium bg-gradient-to-r ${lawyer.color} bg-clip-text text-transparent mb-4`}
                  >
                    {lawyer.specialty}
                  </p>

                  {/* Achievements */}
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {lawyer.achievements.map((achievement, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full border border-slate-200"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quote section */}
                <div className="relative">
                  <div className="absolute -top-2 -left-2">
                    <Quote className={`w-8 h-8 text-slate-300`} />
                  </div>

                  <blockquote className="text-lg text-slate-700 italic leading-relaxed pl-6 border-l-4 border-gradient-to-b from-amber-400 to-orange-500">
                    {lawyer.quote}
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
