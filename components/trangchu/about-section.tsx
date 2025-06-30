"use client"

import { motion } from "framer-motion"
import { Building2, Users, Target, TrendingUp } from "lucide-react"
import Image from "next/image"

const highlights = [
  {
    icon: Building2,
    title: "Thành lập 2014",
    description: "Hơn 10 năm kinh nghiệm trong ngành",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: Users,
    title: "500+ Khách hàng",
    description: "Phục vụ đa dạng các lĩnh vực",
    color: "from-yellow-400 to-amber-500",
  },
  {
    icon: Target,
    title: "98% Hài lòng",
    description: "Tỷ lệ khách hàng hài lòng cao",
    color: "from-orange-400 to-red-500",
  },
  {
    icon: TrendingUp,
    title: "200+ Dự án",
    description: "Hoàn thành thành công",
    color: "from-amber-500 to-yellow-600",
  },
]

export function AboutSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-orange-200 to-amber-300 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <motion.span
                className="text-amber-600 font-bold text-xl tracking-wide uppercase"
                whileHover={{ scale: 1.05 }}
              >
                VỀ CHÚNG TÔI
              </motion.span>
              <motion.h2
                className="text-4xl md:text-6xl font-bold font-heading text-gray-800 mt-4 mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Đối tác tin cậy cho{" "}
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  thành công
                </motion.span>{" "}
                của bạn
              </motion.h2>
              <motion.p
                className="text-xl text-gray-700 leading-relaxed mb-10 font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Chúng tôi không chỉ là nhà cung cấp dịch vụ, mà là{" "}
                <motion.span
                  className="font-bold text-amber-600"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  đối tác chiến lược
                </motion.span>{" "}
                đồng hành cùng doanh nghiệp của bạn trên con đường phát triển. Với đội ngũ chuyên gia giàu kinh nghiệm
                và công nghệ tiên tiến, chúng tôi cam kết mang đến những giải pháp tối ưu nhất.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-2 gap-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="text-center group cursor-pointer"
                >
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <motion.h3
                    className="font-bold text-gray-800 text-xl mb-3 group-hover:text-amber-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.title}
                  </motion.h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Image
                  src="https://i.pinimg.com/736x/a7/c7/8f/a7c78f151fee43cc0b8cfd94c12c9128.jpg"
                  alt="Đội ngũ chuyên nghiệp"
                  width={700}
                  height={600}
                  className="rounded-3xl shadow-2xl w-full hover:shadow-3xl transition-shadow duration-500"
                />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute -bottom-8 -left-8 bg-gradient-to-br from-amber-500 to-orange-600 text-white p-8 rounded-2xl shadow-2xl backdrop-blur-sm"
              >
                <motion.h4
                  className="font-bold text-2xl mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  10+ Năm
                </motion.h4>
                <p className="text-amber-100 font-medium">Kinh nghiệm</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: 10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="absolute -top-8 -right-8 bg-gradient-to-br from-yellow-400 to-amber-500 text-gray-900 p-8 rounded-2xl shadow-2xl backdrop-blur-sm"
              >
                <motion.h4
                  className="font-bold text-2xl mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                >
                  24/7
                </motion.h4>
                <p className="text-amber-800 font-medium">Hỗ trợ</p>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute top-1/4 -right-4 w-8 h-8 bg-amber-400 rounded-full blur-sm"
              />
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-1/4 -left-4 w-6 h-6 bg-orange-400 rounded-full blur-sm"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
