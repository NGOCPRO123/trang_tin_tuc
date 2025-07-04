"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, CheckCircle, AlertTriangle } from "lucide-react"

export function RealityCheckSection() {
  const [selectedTab, setSelectedTab] = useState("myths")

  const myths = [
    "Đầu tư = Đánh bạc có kỹ thuật",
    "Cần nhiều tiền mới bắt đầu được",
    "Phải theo dõi thị trường 24/7",
    "Lãi càng cao càng tốt",
    "Tin theo 'guru' trên mạng",
    "All-in vào 1 cổ phiếu hot",
  ]

  const truths = [
    "Đầu tư = Mua tài sản sinh lời",
    "Bắt đầu từ 10 triệu là đủ",
    "Hệ thống tự động làm việc",
    "Lãi ổn định quan trọng hơn",
    "Dữ liệu và logic quyết định",
    "Đa dạng hóa để giảm rủi ro",
  ]

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-500/20 to-orange-500/20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <AlertTriangle className="w-16 h-16 text-amber-400 mx-auto mb-6" />
          <h2 className="text-4xl lg:text-6xl font-black mb-8">
            <span className="text-red-400">THỰC TẾ</span>
            <span className="text-white"> PHŨ PHÀNG</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            95% người Việt đầu tư theo cảm tính. Đây là lý do tại sao họ mất tiền.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tab selector */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800 rounded-full p-2 border border-gray-700">
              <Button
                onClick={() => setSelectedTab("myths")}
                className={`rounded-full px-8 py-3 transition-all duration-300 ${
                  selectedTab === "myths"
                    ? "bg-red-500 text-white shadow-lg"
                    : "bg-transparent text-gray-400 hover:text-white"
                }`}
              >
                Sai lầm phổ biến
              </Button>
              <Button
                onClick={() => setSelectedTab("truths")}
                className={`rounded-full px-8 py-3 transition-all duration-300 ${
                  selectedTab === "truths"
                    ? "bg-green-500 text-white shadow-lg"
                    : "bg-transparent text-gray-400 hover:text-white"
                }`}
              >
                Sự thật đầu tư
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(selectedTab === "myths" ? myths : truths).map((item, index) => (
              <Card
                key={index}
                className={`border-none shadow-2xl transition-all duration-500 hover:scale-105 ${
                  selectedTab === "myths"
                    ? "bg-gradient-to-br from-red-900/50 to-pink-900/50 border-red-500/30"
                    : "bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-500/30"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    {selectedTab === "myths" ? (
                      <X className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                    ) : (
                      <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    )}
                    <p className="text-white font-medium leading-relaxed">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl p-8 border border-amber-500/30 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-amber-400 mb-4">Bạn muốn tiếp tục TIN THEO ĐÔNG?</h3>
              <p className="text-xl text-gray-300 mb-6">Hay sẵn sàng học cách những người giàu có thực sự đầu tư?</p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 text-lg rounded-2xl shadow-xl"
              >
                Tôi muốn học cách đúng
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
