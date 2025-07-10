"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const stats = [
  {
    number: "+4,360",
    label: "Khách hàng Hài Lòng",
    color: "text-[#CCA776]",
  },
  {
    number: "+321",
    label: "Dự Án Hoàn Thành",
    color: "text-[#CCA776]",
  },
  {
    number: "+637",
    label: "Doanh Nghiệp EOI",
    color: "text-[#CCA776]",
  },
]

const partners = [
  {
    name: "FastCoding Vietnam",
    logo: "/placeholder.svg?height=40&width=120&text=FASTCODING",
  },
  {
    name: "Starfish",
    logo: "/placeholder.svg?height=40&width=120&text=Starfish",
  },
  {
    name: "Chicken",
    logo: "/placeholder.svg?height=40&width=120&text=CHICKEN",
  },
  {
    name: "NCCT",
    logo: "/placeholder.svg?height=40&width=120&text=NCCT",
  },
  {
    name: "IDP",
    logo: "/placeholder.svg?height=40&width=120&text=IDP",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 px-4 bg-[#CCA776]/10">
      <div className="container mx-auto max-w-7xl">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`text-4xl md:text-5xl font-bold mb-2 text-[#CCA776] font-black drop-shadow`}>{stat.number}</div>
              <div className="text-black font-medium text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-[#CCA776]/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="max-h-10 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
