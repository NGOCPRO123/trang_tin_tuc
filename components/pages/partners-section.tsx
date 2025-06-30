"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

const partners = [
  {
    id: 1,
    name: "VietinBank",
    logo: "/placeholder.svg?height=80&width=160&text=VietinBank",
    url: "#",
    description: "Ngân hàng Công thương Việt Nam",
    services: ["Tài khoản thanh toán", "Thẻ tín dụng", "Vay vốn doanh nghiệp"],
    established: "1988",
  },
  {
    id: 2,
    name: "Vietcombank",
    logo: "/placeholder.svg?height=80&width=160&text=Vietcombank",
    url: "#",
    description: "Ngân hàng Ngoại thương Việt Nam",
    services: ["Chuyển tiền quốc tế", "Tài khoản tiết kiệm", "Dịch vụ ngân hàng số"],
    established: "1963",
  },
  {
    id: 3,
    name: "BIDV",
    logo: "/placeholder.svg?height=80&width=160&text=BIDV",
    url: "#",
    description: "Ngân hàng Đầu tư và Phát triển Việt Nam",
    services: ["Vay mua nhà", "Bảo hiểm", "Dịch vụ đầu tư"],
    established: "1957",
  },
  {
    id: 4,
    name: "Techcombank",
    logo: "/placeholder.svg?height=80&width=160&text=Techcombank",
    url: "#",
    description: "Ngân hàng Kỹ thương Việt Nam",
    services: ["Mobile Banking", "Thẻ không tiếp xúc", "Fintech Solutions"],
    established: "1993",
  },
  {
    id: 5,
    name: "MB Bank",
    logo: "/placeholder.svg?height=80&width=160&text=MB+Bank",
    url: "#",
    description: "Ngân hàng Quân đội",
    services: ["Tài khoản cá nhân", "Vay tiêu dùng", "Dịch vụ SME"],
    established: "1994",
  },
  {
    id: 6,
    name: "ACB",
    logo: "/placeholder.svg?height=80&width=160&text=ACB",
    url: "#",
    description: "Ngân hàng Á Châu",
    services: ["Digital Banking", "Thẻ tín dụng cao cấp", "Wealth Management"],
    established: "1993",
  },
]

export function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length)
    }, 4000) // Chuyển đổi mỗi 4 giây để có thời gian đọc thông tin

    return () => clearInterval(interval)
  }, [])

  const currentPartner = partners[currentIndex]

  return (
    <div className="space-y-6">
      {/* Featured Partner với hiệu ứng nhấp nháy nâng cao */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        <a href={currentPartner.url} target="_blank" rel="noopener noreferrer" className="block">
          <div className="bg-gradient-to-br from-blue-50 via-white to-orange-50 rounded-xl p-6 border-2 border-orange-200 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            {/* Hiệu ứng nhấp nháy chính */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/40 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 1.5,
                ease: "easeInOut",
              }}
            />

            {/* Hiệu ứng viền nhấp nháy */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-orange-400"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-4">
                <motion.div
                  className="inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-3"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  🌟 ĐỐI TÁC CHIẾN LƯỢC 🌟
                </motion.div>
              </div>

              {/* Logo */}
              <div className="relative h-20 w-full mb-4">
                <Image
                  src={currentPartner.logo || "/placeholder.svg"}
                  alt={currentPartner.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Thông tin chi tiết */}
              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold text-gray-800">{currentPartner.name}</h3>
                <p className="text-gray-600 font-medium">{currentPartner.description}</p>
                <div className="text-sm text-gray-500">Thành lập: {currentPartner.established}</div>

                {/* Dịch vụ chính */}
                <div className="mt-4">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Dịch vụ chính:</div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {currentPartner.services.map((service, index) => (
                      <motion.span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {service}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </motion.div>

      {/* Navigation indicators */}
      <div className="flex justify-center space-x-2">
        {partners.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-orange-500" : "bg-gray-300 hover:bg-gray-400"
            }`}
            animate={{
              scale: index === currentIndex ? [1, 1.3, 1] : 1,
              backgroundColor: index === currentIndex ? ["#f97316", "#ea580c", "#f97316"] : undefined,
            }}
            transition={{
              duration: index === currentIndex ? 1 : 0.2,
              repeat: index === currentIndex ? Number.POSITIVE_INFINITY : 0,
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-1">
        <motion.div
          className="bg-gradient-to-r from-orange-400 to-orange-600 h-1 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          key={currentIndex}
        />
      </div>
    </div>
  )
}
