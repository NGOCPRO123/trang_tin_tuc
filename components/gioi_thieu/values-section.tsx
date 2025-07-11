"use client"

import { motion } from "framer-motion";
import { Target, Heart, Users, Zap, Award, Lightbulb, Compass, Shield } from "lucide-react";

const coreValues = [
  {
    icon: Heart,
    title: "Thấu hiểu",
    description: "Chúng tôi lắng nghe và thấu hiểu sâu sắc những thách thức của doanh nghiệp để đưa ra giải pháp phù hợp nhất.",
    color: "from-[#CCA776] to-[#CCA776]"
  },
  {
    icon: Shield,
    title: "Chính trực",
    description: "Mọi cam kết đều được thực hiện với sự minh bạch, trung thực và trách nhiệm cao nhất.",
    color: "from-[#CCA776] to-[#CCA776]"
  },
  {
    icon: Users,
    title: "Đồng hành",
    description: "Không chỉ là nhà tư vấn, chúng tôi là người đồng hành trong suốt hành trình phát triển của doanh nghiệp.",
    color: "from-[#CCA776] to-[#CCA776]"
  },
  {
    icon: Zap,
    title: "Hiệu quả",
    description: "Mọi giải pháp đều hướng đến kết quả thực tế, đo lường được và mang lại giá trị bền vững.",
    color: "from-[#CCA776] to-[#CCA776]"
  }
];

export default function ValuesSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#CCA776]/10 to-[#CCA776]/10">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Kim chỉ nam cho mọi hành động của HLCC
          </h2>
          <p className="text-xl text-black max-w-4xl mx-auto">
            Những nguyên tắc cốt lõi định hình nên văn hóa và phương pháp làm việc của chúng tôi
          </p>
        </motion.div>

        {/* Vision, Mission & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#CCA776]/10 to-[#CCA776]/10 p-8 rounded-2xl border-2 border-[#CCA776] shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-[#CCA776] to-[#CCA776] p-3 rounded-full mr-4">
                <Compass className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black">Tầm nhìn</h3>
            </div>
            <p className="text-black text-lg leading-relaxed">
              Kiến tạo một cộng đồng doanh nghiệp Việt Nam phát triển minh bạch, bài bản và đủ sức cạnh tranh trên trường quốc tế.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#CCA776]/10 to-[#CCA776]/10 p-8 rounded-2xl border-2 border-[#CCA776] shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-[#CCA776] to-[#CCA776] p-3 rounded-full mr-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black">Sứ mệnh</h3>
            </div>
            <p className="text-black text-lg leading-relaxed">
              Trở thành điểm tựa chiến lược, cung cấp giải pháp toàn diện và thực chiến để giải mã thách thức và mở khóa tiềm năng tăng trưởng bền vững cho doanh nghiệp.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#CCA776]/10 to-[#CCA776]/10 p-8 rounded-2xl border-2 border-[#CCA776] shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-[#CCA776] to-[#CCA776] p-3 rounded-full mr-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black">Giá trị cốt lõi</h3>
            </div>
            <p className="text-black text-lg leading-relaxed">
              Thấu hiểu - Chính trực - Đồng hành - Hiệu quả. Những giá trị này định hình nên văn hóa và phương pháp làm việc của HLCC.
            </p>
          </motion.div>
        </div>

        {/* Core Values Detail */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-black mb-12">
            Giá trị cốt lõi của HLCC
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100 group"
              >
                <div className={`bg-gradient-to-r from-[#CCA776] to-[#CCA776] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-black mb-3">{value.title}</h4>
                <p className="text-black text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-[#CCA776]/10 to-[#CCA776]/10 p-8 rounded-2xl border-2 border-[#CCA776]"
        >
          <div className="text-center">
            <h4 className="text-2xl font-bold text-black mb-4">
              Tại sao chọn HLCC?
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="flex items-center justify-center gap-3">
                <Award className="h-6 w-6 text-[#CCA776]" />
                <span className="font-medium text-black">15+ năm kinh nghiệm</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Users className="h-6 w-6 text-[#CCA776]" />
                <span className="font-medium text-black">500+ dự án thành công</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Lightbulb className="h-6 w-6 text-[#CCA776]" />
                <span className="font-medium text-black">Giải pháp sáng tạo</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 