"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, DollarSign } from "lucide-react"

export default function HeroConversation() {
  const [currentMessage, setCurrentMessage] = useState(0)

  const conversation = [
    {
      speaker: "Bạn",
      message: "Tôi đang bị nợ 200 triệu từ tháng 3...",
      emotion: "😰",
    },
    {
      speaker: "Chúng tôi",
      message: "Và bạn vẫn đang chờ họ 'có tiền' để trả?",
      emotion: "🤨",
    },
    {
      speaker: "Bạn",
      message: "Tôi không muốn làm to chuyện...",
      emotion: "😔",
    },
    {
      speaker: "Chúng tôi",
      message: "Trong khi họ đang dùng tiền của bạn để kinh doanh?",
      emotion: "😠",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % conversation.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl">💸</div>
        <div className="absolute top-40 right-20 text-4xl">⏰</div>
        <div className="absolute bottom-20 left-1/4 text-5xl">😤</div>
        <div className="absolute bottom-40 right-1/3 text-3xl">💰</div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 text-red-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              🚨 THỰC TẾ ĐÁNG SỢ
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              TIỀN CỦA BẠN
              <br />
              <span className="text-red-600">ĐANG CHẢY MÁU</span>
              <br />
              MỖI NGÀY
            </h1>
            <p className="text-2xl text-gray-700 font-medium">
              Mỗi ngày trôi qua = Thêm 1 ngày họ dùng tiền của bạn MIỄN PHÍ
            </p>
          </div>

          {/* Conversation Simulation */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl mb-16 border-4 border-yellow-200">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Cuộc hội thoại quen thuộc:</h2>
              <div className="text-sm text-gray-600">Bạn có thấy mình trong đây không?</div>
            </div>

            <div className="space-y-6 max-w-2xl mx-auto">
              {conversation.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.speaker === "Bạn" ? "justify-start" : "justify-end"} ${
                    index <= currentMessage ? "opacity-100" : "opacity-30"
                  } transition-opacity duration-500`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-6 py-4 rounded-2xl ${
                      msg.speaker === "Bạn" ? "bg-gray-200 text-gray-800" : "bg-red-500 text-white"
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-lg">{msg.emotion}</span>
                      <span className="font-semibold text-sm">{msg.speaker}</span>
                    </div>
                    <div className="text-sm lg:text-base">{msg.message}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shocking Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-red-50 border-4 border-red-200 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🩸</div>
              <div className="text-3xl font-black text-red-600 mb-2">₫2.7 tỷ</div>
              <div className="text-gray-700">Tổng tiền chúng tôi đã thu hồi trong năm 2024</div>
            </div>
            <div className="bg-orange-50 border-4 border-orange-200 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <div className="text-3xl font-black text-orange-600 mb-2">3.2 ngày</div>
              <div className="text-gray-700">Thời gian trung bình để có phản hồi từ con nợ</div>
            </div>
            <div className="bg-green-50 border-4 border-green-200 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <div className="text-3xl font-black text-green-600 mb-2">94%</div>
              <div className="text-gray-700">Khách hàng thu được tiền trong vòng 30 ngày</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-black text-white rounded-3xl p-8 lg:p-12 mb-8">
              <h3 className="text-3xl lg:text-4xl font-black mb-6">ĐỪNG CHỜ THÊM 1 NGÀY NÀO NỮA</h3>
              <p className="text-xl mb-8 text-gray-300">Mỗi ngày bạn chờ đợi = Mỗi ngày họ cười thầm</p>
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
              >
                <DollarSign className="w-6 h-6 mr-3" />
                ĐÒNG TIỀN NGAY HÔM NAY
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
