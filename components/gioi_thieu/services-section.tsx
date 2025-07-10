"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Users, Zap, CheckCircle, ArrowRight, Lightbulb, Shield, TrendingUp, Award, Heart } from "lucide-react"

const approachMethods = [
  {
    icon: Search,
    title: "Thấu hiểu Toàn diện",
    description:
      "Chúng tôi không nhìn nhận một vấn đề độc lập, mà tiếp cận doanh nghiệp như một cơ thể sống để tìm ra nguyên nhân gốc rễ.",
    features: ["Phân tích tổng thể doanh nghiệp", "Xác định nguyên nhân gốc rễ", "Đánh giá tác động đa chiều"],
    color: "from-[#CCA776] to-[#CCA776]",
  },
  {
    icon: Users,
    title: "Đối tác Cam kết",
    description:
      "Mối quan hệ của chúng tôi không kết thúc sau một bản báo cáo. Chúng tôi đồng hành trong quá trình triển khai để đảm bảo kết quả thực tiễn.",
    features: ["Đồng hành trong suốt quá trình", "Hỗ trợ triển khai thực tế", "Cam kết kết quả dài hạn"],
    color: "from-[#CCA776] to-[#CCA776]",
  },
  {
    icon: Zap,
    title: "Giải pháp Thực chiến",
    description:
      "Mọi chiến lược đều được xây dựng dựa trên kinh nghiệm thực tế, có tính ứng dụng cao và được 'may đo' cho từng doanh nghiệp.",
    features: ["Giải pháp được kiểm chứng", "Tùy chỉnh theo đặc thù", "Tính khả thi cao"],
    color: "from-[#CCA776] to-[#CCA776]",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Thấu hiểu & Phân tích",
    description: "Lắng nghe và  phân tích doanh nghiệp",
    icon: Search,
  },
  {
    step: "02",
    title: "Đề xuất Giải pháp",
    description: "Xây dựng chiến lược và giải pháp phù hợp",
    icon: Lightbulb,
  },
  {
    step: "03",
    title: "Triển khai & Hỗ trợ",
    description: "Đồng hành trong quá trình thực hiện",
    icon: Users,
  },
  {
    step: "04",
    title: "Đánh giá & Tối ưu",
    description: "Đo lường kết quả và cải tiến liên tục",
    icon: TrendingUp,
  },
]

export function CreativeServicesSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-32 h-32 border-4 border-[#CCA776]/20 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-40 right-20 w-24 h-24 bg-[#CCA776]/10 transform rotate-45"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-40 left-1/4 w-16 h-16 border-2 border-[#CCA776]/30 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Creative Header with Diagonal Layout */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20 relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#CCA776]/10 rounded-3xl transform rotate-2"></div>
              <div className="relative bg-[#CCA776] p-8 rounded-3xl text-white transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl md:text-6xl font-black mb-6 leading-tight text-black"
                >
                  Cách chúng tôi
                  <span className="block italic text-black/80">tạo ra sự</span>
                  <span className="block text-black">KHÁC BIỆT</span>
                </motion.h2>
              </div>
            </div>
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white p-6 rounded-2xl shadow-2xl border-l-8 border-[#CCA776] transform rotate-1 hover:rotate-0 transition-transform duration-500"
              >
                <p className="text-xl text-black leading-relaxed">
                  HLCC không chỉ cung cấp dịch vụ tư vấn thông thường. Chúng tôi áp dụng phương pháp tiếp cận độc đáo
                  kết hợp giữa kinh nghiệm thực tế và tư duy chiến lược để mang đến kết quả vượt trội.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Zigzag Approach Methods */}
        <div className="space-y-16 mb-20">
          {approachMethods.map((method, idx) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={`lg:col-span-7 ${idx % 2 === 1 ? "lg:col-start-6" : ""}`}>
                <div className="relative">
                  <div
                    className={`absolute inset-0 bg-[#CCA776] rounded-3xl transform ${
                      idx % 2 === 0 ? "rotate-2" : "-rotate-2"
                    } scale-105`}
                  ></div>
                  <Card className="relative border-0 shadow-2xl bg-white rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-500">
                    <CardHeader className="pb-4 relative">
                      <div className="flex items-start gap-6">
                        <div className="bg-[#CCA776] p-4 rounded-2xl group-hover:rotate-12 transition-transform duration-300">
                          <method.icon className="h-10 w-10 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-3xl font-black text-black mb-4 group-hover:text-[#CCA776] transition-colors duration-300">
                            {method.title}
                          </CardTitle>
                          <p className="text-lg text-black leading-relaxed">{method.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 gap-4">
                        {method.features.map((feature, featureIdx) => (
                          <motion.div
                            key={featureIdx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * featureIdx }}
                            className="flex items-center gap-4 p-3 bg-[#CCA776]/5 rounded-xl hover:bg-[#CCA776]/10 transition-colors duration-300"
                          >
                            <CheckCircle className="h-6 w-6 text-[#CCA776] flex-shrink-0" />
                            <span className="text-black font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <div className="w-full h-80 bg-[#CCA776] rounded-3xl flex items-center justify-center text-white text-8xl font-black transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center">
                    <method.icon className="h-12 w-12 text-[#CCA776]" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Creative Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <motion.h3
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-black text-black mb-6 relative inline-block"
            >
              Quy trình làm việc
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-[#CCA776] rounded-full transform -rotate-1"></div>
            </motion.h3>
            <p className="text-xl text-black max-w-2xl mx-auto">của HLCC</p>
          </div>

          <div className="relative">
            {/* Curved connecting line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" viewBox="0 0 1200 400">
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M 100 200 Q 400 100 600 200 T 1100 200"
                stroke="#CCA776"
                strokeWidth="4"
                fill="none"
                strokeDasharray="10,5"
              />
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 50, rotate: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="bg-[#CCA776] p-8 rounded-3xl text-white shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all duration-500 relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-8 h-8 bg-white rounded-full"></div>
                    </div>

                    <div className="relative z-10">
                      <div className="bg-white text-[#CCA776] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 font-black text-2xl group-hover:rotate-180 transition-transform duration-500">
                        {step.step}
                      </div>
                      <div className="bg-white/20 p-4 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold mb-4 text-center text-black">{step.title}</h4>
                      <p className="text-white/90 text-center leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Creative Why Choose Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 relative"
        >
          <div className="absolute inset-0 bg-[#CCA776] rounded-[3rem] transform rotate-1"></div>
          <div className="relative bg-white p-12 rounded-[3rem] shadow-2xl border-4 border-[#CCA776] transform -rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-black text-black mb-6 relative inline-block">
                Tại sao doanh nghiệp chọn
                <span className="block text-black text-5xl">HLCC?</span>
              </h3>
              <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
                Chúng tôi không chỉ là nhà tư vấn, mà là người đồng hành tin cậy trong hành trình phát triển của doanh
                nghiệp.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Award, title: "Kinh nghiệm thực tế", desc: "15+ năm trong lĩnh vực tư vấn" },
                { icon: Shield, title: "Cam kết kết quả", desc: "Đảm bảo hiệu quả thực tế" },
                { icon: Heart, title: "Tận tâm phục vụ", desc: "Đặt lợi ích khách hàng lên đầu" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-[#CCA776] rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                  <div className="relative bg-white p-6 rounded-2xl shadow-lg border-2 border-[#CCA776] group-hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#CCA776] p-3 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                        <item.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-black text-black text-lg">{item.title}</h4>
                        <p className="text-black">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Creative CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
                alt="Business background"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative p-16 z-10 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h3 className="text-4xl font-black text-black mb-6 leading-tight">
                  Sẵn sàng bắt đầu
                  <span className="block text-black text-5xl">hành trình cùng HLCC?</span>
                </h3>
                <p className="text-2xl text-white font-semibold max-w-3xl mx-auto">
                  Hãy để chúng tôi hiểu rõ thách thức của bạn và đề xuất giải pháp phù hợp nhất.
                </p>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.05, rotate: 2 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-[#CCA776] hover:bg-[#CCA776]/80 text-white px-12 py-6 text-xl rounded-2xl font-black shadow-2xl border-4 border-white hover:border-[#CCA776] transition-all duration-300"
                  >
                    Tư vấn miễn phí
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, rotate: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-4 border-white text-white hover:bg-white hover:text-black px-12 py-6 text-xl rounded-2xl font-black shadow-2xl transition-all duration-300 bg-transparent"
                  >
                    Xem case study
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
