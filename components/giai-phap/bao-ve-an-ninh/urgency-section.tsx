"use client"

import { Button } from "@/components/ui/button"
import { Clock, AlertTriangle, Phone } from "lucide-react"
import { useState, useEffect } from "react"

export default function UrgencySection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency header */}
          <div className="bg-red-500 text-white rounded-2xl p-6 mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <AlertTriangle className="w-8 h-8" />
              <h2 className="text-3xl font-black">CẢNH BÁO KHẨN CẤP</h2>
            </div>
            <p className="text-xl">Tháng 12 là mùa cao điểm tội phạm - số vụ trộm tăng 340%</p>
          </div>

          {/* Countdown */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ưu đãi triển khai khẩn cấp kết thúc sau:</h3>

            <div className="flex justify-center space-x-8 mb-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-2xl p-4 w-20 h-20 flex items-center justify-center">
                  <span className="text-2xl font-black">{timeLeft.hours.toString().padStart(2, "0")}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">Giờ</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-2xl p-4 w-20 h-20 flex items-center justify-center">
                  <span className="text-2xl font-black">{timeLeft.minutes.toString().padStart(2, "0")}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">Phút</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-2xl p-4 w-20 h-20 flex items-center justify-center">
                  <span className="text-2xl font-black">{timeLeft.seconds.toString().padStart(2, "0")}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">Giây</p>
              </div>
            </div>

            <div className="bg-yellow-100 rounded-2xl p-6 mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">🎁 Ưu đãi đặc biệt:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span>Triển khai trong 2 giờ</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span>Miễn phí tháng đầu tiên</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span>Tặng thiết bị giám sát</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span>Hỗ trợ 24/7 miễn phí</span>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-xl font-bold rounded-2xl animate-pulse"
            >
              <Phone className="w-6 h-6 mr-2" />
              GỌI NGAY: 0999.888.777
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
