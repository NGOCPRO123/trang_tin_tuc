"use client"

import { useState } from "react"

const indicators = [
  { number: "847", label: "Đêm không ngủ", sublabel: "để bạn ngủ ngon" },
  { number: "0", label: "Khiếu nại", sublabel: "trong 18 tháng qua" },
  { number: "156", label: "Tình huống", sublabel: "được xử lý hoàn hảo" },
  { number: "2.1s", label: "Phản ứng", sublabel: "nhanh nhất thị trường" },
]

export default function TrustIndicators() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-100/50 to-transparent transform skew-y-1"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Những con số không nói dối</h2>
          <p className="text-xl text-gray-600">Khi uy tín được đo bằng kết quả thực tế</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {indicators.map((item, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transition-all duration-300 ${
                hoveredIndex === index ? "scale-110" : hoveredIndex !== null ? "scale-95 opacity-70" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-600 to-orange-600 mb-2">
                  {item.number}
                </div>
                <div className="text-lg font-bold text-gray-900 mb-1">{item.label}</div>
                <div className="text-sm text-gray-600">{item.sublabel}</div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
