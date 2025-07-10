"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"
import {
  DollarSign,
  Calculator,
  Shield,
  TrendingUp,
  Settings,
  Users,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Target,
  Zap,
  Award,
} from "lucide-react"

const solutions = [
  {
    icon: DollarSign,
    title: "Giải pháp Tài chính & Huy động vốn",
    description: "Tái cấu trúc, quản trị dòng tiền, xây dựng kế hoạch tài chính và kết nối các nguồn vốn chiến lược.",
    features: [
      "Tái cấu trúc tài chính doanh nghiệp",
      "Quản trị dòng tiền hiệu quả",
      "Xây dựng kế hoạch tài chính",
      "Kết nối nguồn vốn chiến lược",
    ],
    link: "/giai-phap/dau-tu-tai-chinh",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    icon: Calculator,
    title: "Giải pháp Kế toán – Thuế",
    description: "Cung cấp dịch vụ doanh nghiệp chuyên sâu về kế toán, tối ưu thuế, đảm bảo tuân thủ và minh bạch.",
    features: [
      "Dịch vụ kế toán chuyên sâu",
      "Tối ưu thuế doanh nghiệp",
      "Đảm bảo tuân thủ pháp luật",
      "Báo cáo tài chính minh bạch",
    ],
    link: "/giai-phap/nghiep-vu-ke-toan-thue",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    icon: Shield,
    title: "Giải pháp Pháp lý & Quản trị rủi ro",
    description: "Xây dựng 'tấm khiên pháp lý' vững chắc, từ hợp đồng, sở hữu trí tuệ đến giải quyết tranh chấp.",
    features: [
      "Xây dựng hệ thống pháp lý",
      "Bảo vệ sở hữu trí tuệ",
      "Quản trị rủi ro pháp lý",
      "Giải quyết tranh chấp",
    ],
    link: "/giai-phap/tu-van-phap-ly",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    icon: TrendingUp,
    title: "Giải pháp Tăng trưởng Doanh số",
    description: "Xây dựng chiến lược kinh doanh, tối ưu kênh phân phối và các hoạt động marketing thực chiến.",
    features: [
      "Chiến lược kinh doanh tổng thể",
      "Tối ưu kênh phân phối",
      "Marketing thực chiến",
      "Tăng trưởng doanh số bền vững",
    ],
    link: "/giai-phap/giai-phap-tang-doanh-so",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    icon: Settings,
    title: "Giải pháp Tối ưu Vận hành",
    description: "Tinh gọn bộ máy, xây dựng quy trình (SOP) và hệ thống quản trị để doanh nghiệp tự vận hành hiệu quả.",
    features: [
      "Tinh gọn bộ máy tổ chức",
      "Xây dựng quy trình SOP",
      "Hệ thống quản trị hiệu quả",
      "Tự động hóa vận hành",
    ],
    link: "/giai-phap/xu-ly-cong-no",
    gradient: "from-red-400 to-rose-500",
  },
  {
    icon: Users,
    title: "Giải pháp Nhân sự & Văn hóa",
    description:
      "Tư vấn xây dựng thang bảng lương, chính sách phúc lợi và văn hóa doanh nghiệp để thu hút, giữ chân nhân tài.",
    features: [
      "Xây dựng thang bảng lương",
      "Chính sách phúc lợi hấp dẫn",
      "Văn hóa doanh nghiệp",
      "Thu hút và giữ chân nhân tài",
    ],
    link: "/giai-phap/bao-ve-an-ninh",
    gradient: "from-cyan-400 to-blue-500",
  },
]

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentCard, setCurrentCard] = useState(0)
  const [thrownCards, setThrownCards] = useState<number[]>([])
  const [restoringCards, setRestoringCards] = useState<number[]>([])
  const [showContent, setShowContent] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down")
  const prevScrollY = useRef(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Track scroll direction
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const currentScrollY = latest
      const direction = currentScrollY > prevScrollY.current ? "down" : "up"
      setScrollDirection(direction)
      prevScrollY.current = currentScrollY
    })

    return unsubscribe
  }, [scrollYProgress])

  // Calculate which card should be active based on scroll
  const cardProgress = useTransform(scrollYProgress, [0, 1], [0, solutions.length])

  useEffect(() => {
    const unsubscribe = cardProgress.onChange((latest) => {
      const newCardIndex = Math.floor(latest)

      if (scrollDirection === "down") {
        // Scrolling down - throw cards
        if (newCardIndex > currentCard && newCardIndex < solutions.length) {
          setThrownCards((prev) => [...prev, currentCard])
          setRestoringCards((prev) => prev.filter((id) => id !== currentCard))
          setCurrentCard(newCardIndex)
        } else if (newCardIndex >= solutions.length) {
          setShowContent(true)
        }
      } else if (scrollDirection === "up") {
        // Scrolling up - restore cards
        if (newCardIndex < currentCard && newCardIndex >= 0) {
          const cardToRestore = currentCard - 1
          if (thrownCards.includes(cardToRestore)) {
            setRestoringCards((prev) => [...prev, cardToRestore])
            setThrownCards((prev) => prev.filter((id) => id !== cardToRestore))
            setCurrentCard(newCardIndex)
          }
        }

        // Hide content when scrolling back up
        if (newCardIndex < solutions.length) {
          setShowContent(false)
        }
      }
    })

    return unsubscribe
  }, [cardProgress, currentCard, scrollDirection, thrownCards])

  // Clean up restoring cards after animation
  useEffect(() => {
    if (restoringCards.length > 0) {
      const timer = setTimeout(() => {
        setRestoringCards([])
      }, 600) // Match animation duration
      return () => clearTimeout(timer)
    }
  }, [restoringCards])

  return (
    <div ref={containerRef} className="bg-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center py-20 px-4"
      >
        <div className="relative inline-block mb-8">
          <motion.div
            className="absolute -inset-8 bg-gradient-to-r from-[#CCA776]/20 to-[#CCA776]/30 rounded-3xl"
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />
          <h2 className="relative text-5xl md:text-7xl font-bold text-black px-8 py-6">
            Các Mảnh ghép Giải pháp của HLCC
          </h2>
        </div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-[#CCA776] p-8 rounded-full shadow-2xl">
            <p className="text-xl text-white leading-relaxed font-medium">
              Chúng tôi không chỉ cung cấp dịch vụ đơn lẻ, mà mang đến giải pháp doanh nghiệp toàn diện, kết nối mọi mắt
              xích để tạo ra sự phát triển bền vững.
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-16 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <p className="text-gray-600 mb-4 font-medium">Cuộn xuống để khám phá • Cuộn lên để khôi phục</p>
          <div className="w-6 h-10 border-2 border-[#CCA776] rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-[#CCA776] rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Stacked Cards Section */}
      <div className="min-h-[120vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-2xl mx-auto px-4">
            <AnimatePresence mode="popLayout">
              {solutions.map((solution, index) => {
                const isThrown = thrownCards.includes(index)
                const isRestoring = restoringCards.includes(index)
                const isCurrent = index === currentCard
                const isUpcoming = index > currentCard

                // Don't render thrown cards unless they're restoring
                if (isThrown && !isRestoring) return null

                return (
                  <motion.div
                    key={`${solution.title}-${index}`}
                    className="absolute inset-0"
                    initial={
                      isRestoring
                        ? { scale: 0.8, rotate: 25, z: 0, x: "150%" }
                        : index === 0
                          ? { scale: 1, rotate: 0, z: 0 }
                          : { scale: 0.95 - index * 0.05, rotate: index * 2, z: -index * 10 }
                    }
                    animate={
                      isRestoring
                        ? {
                            scale: 0.95 - (index - currentCard + 1) * 0.05,
                            rotate: (index - currentCard + 1) * 2,
                            z: -(index - currentCard + 1) * 10,
                            x: 0,
                          }
                        : isCurrent
                          ? { scale: 1, rotate: 0, z: 0, x: 0 }
                          : isUpcoming
                            ? {
                                scale: 0.95 - (index - currentCard) * 0.05,
                                rotate: (index - currentCard) * 2,
                                z: -(index - currentCard) * 10,
                                x: 0,
                              }
                            : { scale: 1, rotate: 25, z: 0, x: "150%" }
                    }
                    exit={{
                      x: "150%",
                      rotate: 25,
                      scale: 0.8,
                      transition: { duration: 0.6, ease: "easeInOut" },
                    }}
                    transition={{
                      duration: isRestoring ? 0.8 : 0.6,
                      ease: isRestoring ? "easeOut" : "easeInOut",
                      type: isRestoring ? "spring" : "tween",
                      stiffness: isRestoring ? 100 : undefined,
                      damping: isRestoring ? 20 : undefined,
                    }}
                    style={{ zIndex: solutions.length - index + (isRestoring ? 100 : 0) }}
                  >
                    <Card className="bg-[#CCA776] border-0 shadow-2xl h-[600px] overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-10`} />

                      {/* Restoration Effect */}
                      {isRestoring && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          initial={{ x: "-100%" }}
                          animate={{ x: "100%" }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          style={{ zIndex: 1000 }}
                        />
                      )}

                      <CardHeader className="pb-6 relative z-10">
                        <div className="flex items-center gap-6 mb-6">
                          <motion.div
                            className="bg-white p-4 rounded-2xl shadow-lg"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                            animate={isRestoring ? { scale: [1.2, 1], rotate: [360, 0] } : {}}
                          >
                            <solution.icon className="h-12 w-12" stroke="#CCA776" color="#CCA776" />
                          </motion.div>
                          <div className="flex-1">
                            <CardTitle className="text-2xl font-bold text-white mb-2">{solution.title}</CardTitle>
                            <motion.div
                              className="w-20 h-1 bg-white rounded-full"
                              animate={isRestoring ? { width: [0, 80] } : {}}
                              transition={{ duration: 0.6, delay: 0.2 }}
                            />
                          </div>
                        </div>
                        <p className="text-white/90 text-lg leading-relaxed">{solution.description}</p>
                      </CardHeader>

                      <CardContent className="relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                          {solution.features.map((feature, featureIdx) => (
                            <motion.div
                              key={featureIdx}
                              className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm"
                              initial={{ opacity: 0, x: -20 }}
                              animate={isCurrent || isRestoring ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{
                                delay: isRestoring ? featureIdx * 0.1 + 0.4 : featureIdx * 0.1 + 0.3,
                              }}
                            >
                              <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                              <span className="text-white text-sm font-medium">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={isCurrent || isRestoring ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ delay: isRestoring ? 0.8 : 0.6 }}
                        >
                          <Button
                            className="w-full bg-white text-[#CCA776] hover:bg-white/90 font-bold text-lg py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
                            onClick={() => window.open(solution.link, "_self")}
                          >
                            Khám phá chi tiết
                            <ArrowRight className="ml-3 h-6 w-6" />
                          </Button>
                        </motion.div>
                      </CardContent>

                      {/* Card number indicator */}
                      <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                        <motion.span
                          className="text-white font-bold text-lg"
                          animate={isRestoring ? { scale: [1.5, 1], rotate: [360, 0] } : {}}
                          transition={{ duration: 0.6 }}
                        >
                          {index + 1}
                        </motion.span>
                      </div>

                      {/* Restoration particles effect */}
                      {isRestoring && (
                        <div className="absolute inset-0 pointer-events-none">
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 bg-white rounded-full"
                              initial={{
                                x: Math.random() * 100 + "%",
                                y: Math.random() * 100 + "%",
                                scale: 0,
                                opacity: 0,
                              }}
                              animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0],
                                y: "-50px",
                              }}
                              transition={{
                                duration: 1,
                                delay: i * 0.1,
                                ease: "easeOut",
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </Card>
                  </motion.div>
                )
              })}
            </AnimatePresence>

            {/* Progress indicator */}
            <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2">
              {solutions.map((_, index) => (
                <motion.div
                  key={index}
                  className="w-3 h-3 rounded-full"
                  animate={{
                    backgroundColor: thrownCards.includes(index)
                      ? "#10B981"
                      : restoringCards.includes(index)
                        ? "#F59E0B"
                        : index === currentCard
                          ? "#CCA776"
                          : "#E5E7EB",
                    scale: restoringCards.includes(index) ? [1, 1.5, 1] : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>

            {/* Scroll direction indicator */}
            <motion.div
              className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-center"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <p className="text-sm text-gray-500 font-medium">
                {scrollDirection === "down" ? "↓ Cuộn xuống để ném card" : "↑ Cuộn lên để khôi phục"}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Below Cards */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              className="inline-block relative mb-8"
              animate={{ rotate: [0, 1, -1, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <div className="absolute -inset-6 bg-[#CCA776]/20 rounded-2xl transform rotate-2" />
              <h3 className="relative text-4xl font-bold text-black px-8 py-4">
                Tại sao chọn giải pháp doanh nghiệp của HLCC?
              </h3>
            </motion.div>
            <div className="bg-[#CCA776] p-8 rounded-full max-w-4xl mx-auto shadow-xl">
              <p className="text-xl text-white font-medium">
                Chúng tôi không chỉ giải quyết vấn đề, mà còn xây dựng nền tảng vững chắc cho sự phát triển bền vững.
              </p>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Giải pháp toàn diện",
                desc: "Kết nối mọi mắt xích",
                color: "from-blue-500 to-purple-600",
                iconColor: "text-[#CCA776]",
              },
              {
                icon: Zap,
                title: "Thực chiến",
                desc: "Dựa trên kinh nghiệm thực tế",
                color: "from-yellow-500 to-orange-600",
                iconColor: "text-[#CCA776]",
              },
              {
                icon: Award,
                title: "Cam kết kết quả",
                desc: "Đo lường được và bền vững",
                color: "from-green-500 to-teal-600",
                iconColor: "text-[#CCA776]",
              },
              { icon: Lightbulb, title: "Sáng tạo", desc: "Giải pháp độc đáo", color: "from-pink-500 to-rose-600", iconColor: "text-[#CCA776]" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <div className="bg-[#CCA776] p-8 rounded-2xl shadow-xl border-4 border-white hover:shadow-2xl transition-all duration-300">
                  <div
                    className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  >
                    <item.icon className={`h-8 w-8 ${item.iconColor}`} stroke="currentColor" fill="#fff" color="currentColor" />
                  </div>
                  <h4 className="font-bold text-white text-lg mb-2">{item.title}</h4>
                  <p className="text-white/90 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
