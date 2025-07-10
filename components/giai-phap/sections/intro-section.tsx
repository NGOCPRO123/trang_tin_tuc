"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Clock, DollarSign, Users, XCircle } from "lucide-react"

const problems = [
  {
    icon: XCircle,
    title: "Thiếu Đồng bộ",
    description:
      "Công ty kế toán không hiểu chiến lược kinh doanh. Đơn vị pháp lý không nắm rõ cấu trúc tài chính. Dữ liệu phân mảnh, quyết định thiếu nhất quán.",
  },
  {
    icon: Clock,
    title: "Lãng phí Thời gian & Chi phí",
    description:
      "Bạn phải dành thời gian làm việc với nhiều đối tác, lặp lại cùng một câu chuyện. Chi phí cộng dồn từ nhiều nhà cung cấp thường cao hơn một giải pháp tổng thể.",
  },
  {
    icon: AlertTriangle,
    title: "Trách nhiệm Không rõ ràng",
    description:
      "Khi có vấn đề xảy ra, các bên đổ lỗi cho nhau và không ai chịu trách nhiệm cuối cùng. Doanh nghiệp của bạn là người chịu thiệt hại.",
  },
]

export function IntroSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#CCA776] opacity-10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#CCA776] opacity-5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#CCA776] opacity-15 transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header with Diagonal Layout */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20 relative"
        >
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
              <div className="bg-[#CCA776] p-6 rounded-2xl shadow-xl">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  Bạn có đang bị mắc kẹt trong vòng luẩn quẩn của các dịch vụ rời rạc?
                </h2>
                <p className="text-xl text-white leading-relaxed">
                  Nhiều doanh nghiệp đang phải đối mặt với những thách thức không thể giải quyết bằng cách "vá" từng lỗ hổng một cách riêng lẻ.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Problems in Zigzag Layout */}
        <div className="space-y-16 mb-20">
          {problems.map((problem, idx) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 50, rotate: idx % 2 === 0 ? -5 : 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
              viewport={{ once: true }}
              className={`grid grid-cols-12 gap-8 items-center ${idx % 2 === 0 ? "" : "lg:flex-row-reverse"}`}
            >
              {/* Icon Section */}
              <div className={`col-span-12 lg:col-span-3 ${idx % 2 === 0 ? "lg:col-start-2" : "lg:col-start-8"}`}>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="w-20 h-20 bg-[#CCA776] rounded-full flex items-center justify-center shadow-lg mx-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#CCA776] to-[#B8956A] opacity-80 rounded-full"></div>
                    <problem.icon className="h-10 w-10 text-white relative z-10" />
                  </div>
                  {/* Decorative Ring */}
                  <div className="absolute inset-0 w-20 h-20 border-2 border-[#CCA776] rounded-full mx-auto animate-pulse opacity-30"></div>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className={`col-span-12 lg:col-span-7 ${idx % 2 === 0 ? "lg:col-start-6" : "lg:col-start-1"}`}>
                <div className="bg-[#CCA776] p-4 rounded-2xl relative overflow-hidden shadow-md">
                  {/* Geometric Decoration */}
                  <div className="absolute top-0 right-0 w-10 h-10 bg-white opacity-10 transform rotate-45 translate-x-4 -translate-y-4 rounded-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 bg-white opacity-5 rounded-full -translate-x-4 translate-y-4"></div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2 border-l-4 border-white pl-3 rounded-2xl">{problem.title}</h3>
                    <p className="text-white text-base leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Summary - Hexagonal Design */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-[#CCA776] p-6 rounded-2xl relative overflow-hidden shadow-xl">
            {/* Hexagonal Clip Path Effect */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#CCA776] to-[#B8956A]"
              style={{
                clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Hậu quả của việc sử dụng dịch vụ rời rạc</h3>
              <p className="text-base text-white mb-8 max-w-2xl mx-auto">
                Những vấn đề này không chỉ gây lãng phí thời gian và tiền bạc, mà còn cản trở sự phát triển bền vững của doanh nghiệp.
              </p>

              {/* Impact Icons in Diamond Formation */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {[
                  { icon: DollarSign, title: "Chi phí cao", desc: "Nhiều nhà cung cấp = Chi phí cộng dồn" },
                  { icon: Clock, title: "Thời gian lãng phí", desc: "Lặp lại thông tin nhiều lần" },
                  { icon: Users, title: "Thiếu đồng bộ", desc: "Dữ liệu phân mảnh" },
                  { icon: AlertTriangle, title: "Rủi ro cao", desc: "Trách nhiệm không rõ ràng" },
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-7 w-7 text-[#CCA776]" />
                    </div>
                    <h4 className="font-bold text-white mb-1 text-base">{item.title}</h4>
                    <p className="text-white text-xs opacity-90">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
