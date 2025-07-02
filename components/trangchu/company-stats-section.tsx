"use client"

import { motion } from "framer-motion"
import { Building2, Users, Award, Globe } from "lucide-react"

const stats = [
  {
    icon: Building2,
    number: "500+",
    label: "Dự án hoàn thành",
    description: "Thành công trong nhiều lĩnh vực",
  },
  {
    icon: Users,
    number: "50+",
    label: "Chuyên gia",
    description: "Đội ngũ giàu kinh nghiệm",
  },
  {
    icon: Award,
    number: "98%",
    label: "Khách hàng hài lòng",
    description: "Tỷ lệ hài lòng cao",
  },
  {
    icon: Globe,
    number: "15+",
    label: "Quốc gia",
    description: "Phục vụ khách hàng toàn cầu",
  },
]

export function CompanyStatsSection() {
  return (
    <section className="py-10 px-4 text-white relative overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }} />
      <div className="absolute inset-0 z-10 bg-black/60" />
      <div className="container mx-auto max-w-7xl relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Những con số <span className="text-amber-200">ấn tượng</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Hơn 10 năm hoạt động, chúng tôi tự hào về những thành tựu đã đạt được và sự tin tưởng mà khách hàng dành cho
            chúng tôi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-amber-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-amber-900" />
                </div>
                <motion.div
                  className="text-5xl md:text-6xl font-bold mb-4 text-amber-200"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-amber-100 text-sm">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
            <h3 className="text-2xl font-bold mb-4">Cam kết của chúng tôi</h3>
            <p className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed">
              "Chúng tôi không chỉ cung cấp dịch vụ, mà còn xây dựng mối quan hệ đối tác lâu dài. Thành công của khách
              hàng chính là thành công của chúng tôi."
            </p>
            <div className="mt-6">
              <div className="font-semibold">Nguyễn Văn A</div>
              <div className="text-amber-200">Giám đốc điều hành</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
