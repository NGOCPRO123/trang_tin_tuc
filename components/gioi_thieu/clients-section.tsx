"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const stats = [
  { number: "+102", label: "Khách hàng tin tưởng" },
  { number: "+7", label: "Lĩnh vực hoạt động" },
  { number: "+14", label: "Giải pháp tối ưu" },
]

const clients = [
  { name: "FPT Software", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Vietcombank", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Vingroup", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Techcombank", logo: "/placeholder.svg?height=60&width=120" },
  { name: "BIDV", logo: "/placeholder.svg?height=60&width=120" },
]

export function ClientsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-yellow-600 via-yellow-500 to-orange-500">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm font-medium text-yellow-200 mb-4 uppercase tracking-wide">
            KHÁCH HÀNG CỦA CHÚNG TÔI
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Khách hàng của chúng tôi</h2>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto mb-12">
            Chúng tôi tự hào được đồng hành cùng nhiều doanh nghiệp hàng đầu, mang lại giá trị và thành công bền vững
            cho khách hàng.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-yellow-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity filter brightness-0 invert"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
