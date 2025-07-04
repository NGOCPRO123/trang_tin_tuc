"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { number: "+4,360", label: "Khách hàng tin tưởng", icon: "👥" },
  { number: "+321", label: "Dự án hoàn thành", icon: "🎯" },
  { number: "+637", label: "Giải pháp tối ưu", icon: "💡" },
]

const partners = [
  { name: "Partner 1", logo: "/placeholder.svg?height=60&width=120&text=Logo1" },
  { name: "Partner 2", logo: "/placeholder.svg?height=60&width=120&text=Logo2" },
  { name: "Partner 3", logo: "/placeholder.svg?height=60&width=120&text=Logo3" },
  { name: "Partner 4", logo: "/placeholder.svg?height=60&width=120&text=Logo4" },
  { name: "Partner 5", logo: "/placeholder.svg?height=60&width=120&text=Logo5" },
]

export function ClientsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-yellow-400/20 backdrop-blur-sm rounded-full border border-yellow-300/30 mb-6">
            <span className="text-yellow-300 font-semibold">🌟 Thành tựu của chúng tôi</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Khách hàng của chúng tôi</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Chúng tôi tự hào được đồng hành cùng hàng nghìn doanh nghiệp trên con đường phát triển, mang đến những giải
            pháp tối ưu và hiệu quả nhất.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-4">{stat.icon}</div>
                    <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                    <div className="text-blue-100 font-medium text-lg">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-yellow-300">Đối tác tin cậy</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex justify-center"
              >
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
