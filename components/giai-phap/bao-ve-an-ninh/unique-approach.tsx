"use client"

import { Brain, Network, Zap, Target } from "lucide-react"
import { useState } from "react"

const approaches = [
  {
    icon: Brain,
    title: "Tư duy như thám tử",
    description: "Không chỉ canh gác, mà phân tích từng chi tiết bất thường",
    details: "Đào tạo tâm lý học hành vi, nhận diện nguy cơ từ cử chỉ, ánh mắt",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Network,
    title: "Kết nối như mạng nhện",
    description: "Mỗi nhân viên là một node, thông tin lan truyền tức thì",
    details: "Hệ thống liên lạc mã hóa, GPS tracking, báo cáo real-time",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Phản ứng như tia chớp",
    description: "Từ phát hiện đến hành động chỉ trong 2.3 giây",
    details: "Quy trình chuẩn hóa, training muscle memory, decision tree tự động",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Target,
    title: "Chính xác như sniper",
    description: "Mỗi hành động đều có mục đích, không lãng phí động tác",
    details: "Phân tích risk assessment, ưu tiên mục tiêu, tối ưu hóa resource",
    color: "from-green-500 to-emerald-500",
  },
]

export default function UniqueApproach() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/20 to-orange-400/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">
            Phương pháp{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              ĐỘC QUYỀN
            </span>
          </h2>
          <p className="text-xl text-gray-300">4 nguyên tắc tạo nên sự khác biệt tuyệt đối</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Interactive list */}
          <div className="space-y-4">
            {approaches.map((approach, index) => {
              const Icon = approach.icon
              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeIndex === index ? "bg-white/10 backdrop-blur-sm border border-white/20" : "hover:bg-white/5"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${approach.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{approach.title}</h3>
                      <p className="text-gray-300">{approach.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right side - Detail view */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            {approaches[activeIndex] &&
              (() => {
                const Active = approaches[activeIndex]
                const Icon = Active.icon
                return (
                  <>
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${Active.color} mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{Active.title}</h3>
                    <p className="text-lg text-gray-300 mb-6">{Active.description}</p>

                    <div className="bg-black/20 rounded-xl p-4 border-l-4 border-yellow-400">
                      <h4 className="font-semibold text-yellow-400 mb-2">Chi tiết kỹ thuật:</h4>
                      <p className="text-gray-300">{Active.details}</p>
                    </div>
                  </>
                )
              })()}
          </div>
        </div>
      </div>
    </section>
  )
}
