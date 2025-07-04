"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, DollarSign, Calendar } from "lucide-react"

export function TransparentResultsSection() {
  const [selectedPeriod, setSelectedPeriod] = useState("2024")

  const results = {
    "2024": {
      totalReturn: "+18.7%",
      winRate: "76%",
      avgMonthly: "+1.4%",
      maxDrawdown: "-8.2%",
      details: [
        { month: "T1", return: "+2.1%", status: "win" },
        { month: "T2", return: "-1.3%", status: "loss" },
        { month: "T3", return: "+3.4%", status: "win" },
        { month: "T4", return: "+1.8%", status: "win" },
        { month: "T5", return: "-2.1%", status: "loss" },
        { month: "T6", return: "+2.7%", status: "win" },
        { month: "T7", return: "+1.9%", status: "win" },
        { month: "T8", return: "-0.8%", status: "loss" },
        { month: "T9", return: "+2.3%", status: "win" },
        { month: "T10", return: "+1.6%", status: "win" },
        { month: "T11", return: "+3.1%", status: "win" },
        { month: "T12", return: "+2.4%", status: "win" },
      ],
    },
    "2023": {
      totalReturn: "+22.3%",
      winRate: "83%",
      avgMonthly: "+1.7%",
      maxDrawdown: "-6.1%",
      details: [
        { month: "T1", return: "+1.8%", status: "win" },
        { month: "T2", return: "+2.4%", status: "win" },
        { month: "T3", return: "-1.1%", status: "loss" },
        { month: "T4", return: "+3.2%", status: "win" },
        { month: "T5", return: "+1.9%", status: "win" },
        { month: "T6", return: "+2.1%", status: "win" },
        { month: "T7", return: "-0.7%", status: "loss" },
        { month: "T8", return: "+2.8%", status: "win" },
        { month: "T9", return: "+1.4%", status: "win" },
        { month: "T10", return: "+2.6%", status: "win" },
        { month: "T11", return: "+1.7%", status: "win" },
        { month: "T12", return: "+3.3%", status: "win" },
      ],
    },
  }

  const currentData = results[selectedPeriod as keyof typeof results]

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black mb-8">
            <span className="text-green-400">KẾT QUẢ</span>
            <span className="text-white"> THỰC TẾ</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Không che giấu, không làm đẹp số liệu. Đây là kết quả thật của khách hàng thật.
          </p>

          {/* Period selector */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800 rounded-full p-2 border border-gray-700">
              {Object.keys(results).map((period) => (
                <Button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`rounded-full px-6 py-2 transition-all duration-300 ${
                    selectedPeriod === period
                      ? "bg-green-500 text-white shadow-lg"
                      : "bg-transparent text-gray-400 hover:text-white"
                  }`}
                >
                  {period}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Key metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-500/30 border">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-green-400 mb-2">{currentData.totalReturn}</div>
                <div className="text-sm text-gray-300">Tổng lợi nhuận</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 border-blue-500/30 border">
              <CardContent className="p-6 text-center">
                <DollarSign className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-400 mb-2">{currentData.winRate}</div>
                <div className="text-sm text-gray-300">Tỷ lệ thắng</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30 border">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-purple-400 mb-2">{currentData.avgMonthly}</div>
                <div className="text-sm text-gray-300">Trung bình/tháng</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-900/50 to-orange-900/50 border-red-500/30 border">
              <CardContent className="p-6 text-center">
                <TrendingDown className="w-8 h-8 text-red-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-red-400 mb-2">{currentData.maxDrawdown}</div>
                <div className="text-sm text-gray-300">Mức lỗ tối đa</div>
              </CardContent>
            </Card>
          </div>

          {/* Monthly breakdown */}
          <Card className="bg-gray-800/50 border-gray-700 border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Chi tiết theo tháng - {selectedPeriod}</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {currentData.details.map((month, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg text-center transition-all duration-300 hover:scale-105 ${
                      month.status === "win"
                        ? "bg-green-900/50 border border-green-500/30"
                        : "bg-red-900/50 border border-red-500/30"
                    }`}
                  >
                    <div className="text-sm text-gray-300 mb-2">{month.month}</div>
                    <div className={`text-lg font-bold ${month.status === "win" ? "text-green-400" : "text-red-400"}`}>
                      {month.return}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl p-8 border border-amber-500/30 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-amber-400 mb-4">Bạn có muốn kết quả tương tự?</h3>
              <p className="text-xl text-gray-300 mb-6">
                Đây không phải may mắn. Đây là kết quả của hệ thống và kỷ luật.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 text-lg rounded-2xl shadow-xl"
              >
                Tôi muốn bắt đầu ngay
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
