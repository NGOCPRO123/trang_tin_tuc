"use client"

import { Brain, Network, Zap, Target } from "lucide-react"
import { useState } from "react"

const differences = [
  {
    icon: "✔️",
    title: "Giải pháp Toàn diện, không chỉ là Thiết bị",
    desc: "Chúng tôi không bán camera, chúng tôi bán sự AN TÂM. Giải pháp của chúng tôi là sự kết hợp giữa công nghệ hiện đại, thiết kế hệ thống thông minh và quy trình vận hành chuyên nghiệp."
  },
  {
    icon: "✔️",
    title: '"May đo" theo Nhu cầu Thực tế',
    desc: "Mỗi doanh nghiệp có một rủi ro riêng. Chúng tôi không áp dụng một mô hình cho tất cả. Mọi giải pháp đều được xây dựng dựa trên việc khảo sát và phân tích kỹ lưỡng đặc thù của doanh nghiệp bạn."
  },
  {
    icon: "✔️",
    title: "Tích hợp với các Giải pháp Quản trị khác",
    desc: "Sức mạnh của HLCC là khả năng kết nối an ninh vật lý với an ninh thông tin, quản trị rủi ro và các quy trình vận hành khác, tạo nên một hệ thống bảo vệ toàn diện mà không đối thủ nào có được."
  },
]

export default function UniqueApproach() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-black mb-4">Cách tiếp cận độc đáo</h2>
          <p className="text-xl text-black font-bold mb-8">Không chỉ là bảo vệ – là chủ động phòng ngừa</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {differences.map((item, idx) => (
            <div key={idx} className="bg-[#CCA776]/10 rounded-2xl p-8 shadow-md flex flex-col items-center text-center">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="font-black text-[#CCA776] mb-2">{item.title}</h3>
              <p className="text-black font-bold">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
