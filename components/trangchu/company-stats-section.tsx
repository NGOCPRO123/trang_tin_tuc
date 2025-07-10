"use client"

import { motion } from "framer-motion"
import { Building2, Users, Award, Globe } from "lucide-react"

const stats = [
  {
    icon: Building2,
    number: "22",
    label: "Doanh Chủ",
    description: "Liên minh thành lập HLCC",
  },
  {
    icon: Users,
    number: "10+",
    label: "Năm kinh nghiệm",
    description: "Đội ngũ chuyên gia thực chiến",
  },
  {
    icon: Award,
    number: "100%",
    label: "Trực tiếp tham gia",
    description: "Không chỉ tư vấn mà thực hiện",
  },
  {
    icon: Globe,
    number: "500+",
    label: "Doanh nghiệp",
    description: "Đã được hỗ trợ thành công",
  },
]

export function CompanyStatsSection() {
  return (
    <section className="py-10 px-4 bg-white text-black relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-20">
        
        {/* Giải Pháp Toàn Diện Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="mx-auto max-w-7xl w-full rounded-3xl p-12 shadow-2xl bg-white/90 backdrop-blur-lg border border-[#CCA776]/30">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-black text-black mb-4 drop-shadow-lg tracking-tight">
                Những Đối tác đã Tin tưởng và Cùng HLCC Giải mã
              </h2>
              <p className="text-xl md:text-2xl text-black font-medium max-w-4xl mx-auto">
                HLCC tự hào đồng hành cùng nhiều doanh nghiệp lớn nhỏ, mang lại giải pháp tài chính và tư vấn doanh nghiệp tối ưu, giúp tăng trưởng bền vững.
              </p>
            </div>
            {/* Timeline zigzag layout */}
            <div className="relative flex flex-col items-center">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#CCA776]/40 rounded-full -translate-x-1/2 z-0 hidden md:block" />
              <div className="space-y-16 w-full">
                {/* Card 1 */}
                <div className="relative flex md:justify-start justify-center items-center w-full">
                  <div className="md:w-1/2 w-full md:pr-16 z-10">
                    <div className="w-full rounded-2xl bg-[#CCA776] p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                      <h4 className="text-xl font-bold text-black mb-2">Liên Minh Cộng Đồng Affiliate Thực Chiến</h4>
                      <p className="text-base text-black font-bold leading-relaxed">
                        HLCC là đơn vị điều phối và sáng lập Hệ Sinh Thái TMĐT ACTA. Đây là một hệ sinh thái độc đáo kết hợp tinh hoa của Chợ Truyền Thống, ứng dụng AI và sức mạnh của Affiliate Marketing.
                      </p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-[#CCA776] rounded-full border-4 border-white z-20 shadow-lg" />
                </div>
                {/* Card 2 */}
                <div className="relative flex md:justify-end justify-center items-center w-full">
                  <div className="md:w-1/2 w-full md:pl-16 z-10">
                    <div className="w-full rounded-2xl bg-[#CCA776] p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                      <h4 className="text-xl font-bold text-black mb-2">Tin Tức & Kiến Thức</h4>
                      <p className="text-base text-black font-bold leading-relaxed">
                        Cập nhật những thông tin mới nhất, phân tích chuyên sâu và các giải pháp thực tiễn từ đội ngũ chuyên gia của HLCC.
                      </p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-[#CCA776] rounded-full border-4 border-white z-20 shadow-lg" />
                </div>
                {/* Card 3 */}
                <div className="relative flex md:justify-start justify-center items-center w-full">
                  <div className="md:w-1/2 w-full md:pr-16 z-10">
                    <div className="w-full rounded-2xl bg-[#CCA776] p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                      <h4 className="text-xl font-bold text-black mb-2">Hàng Nghìn Thành Viên Năng Lực</h4>
                      <p className="text-base text-black font-bold leading-relaxed">
                        Với hàng nghìn thành viên có năng lực và nhiệt huyết, Cộng Đồng Affiliate Thực Chiến là một phần quan trọng trong giải pháp "tăng doanh số bền vững" của HLCC.
                      </p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-[#CCA776] rounded-full border-4 border-white z-20 shadow-lg" />
                </div>
                {/* Card 4 */}
                <div className="relative flex md:justify-end justify-center items-center w-full">
                  <div className="md:w-1/2 w-full md:pl-16 z-10">
                    <div className="w-full rounded-2xl bg-[#CCA776] p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                      <h4 className="text-xl font-bold text-black mb-2">Tài Nguyên Độc Quyền</h4>
                      <p className="text-base text-black font-bold leading-relaxed">
                        Truy cập thư viện tài nguyên độc quyền của HLCC – nơi tổng hợp các cẩm nang, hướng dẫn chi tiết, biểu mẫu và kiến thức nền tảng.
                      </p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-[#CCA776] rounded-full border-4 border-white z-20 shadow-lg" />
                </div>
                {/* Card 5 */}
                <div className="relative flex md:justify-start justify-center items-center w-full">
                  <div className="md:w-1/2 w-full md:pr-16 z-10">
                    <div className="w-full rounded-2xl bg-[#CCA776] p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                      <h4 className="text-xl font-bold text-black mb-2">Khách Hàng Đa Dạng</h4>
                      <p className="text-base text-black font-bold leading-relaxed">
                        Từ startup đến tập đoàn lớn, HLCC tự hào là đối tác tin cậy của đa dạng các doanh nghiệp.
                      </p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-[#CCA776] rounded-full border-4 border-white z-20 shadow-lg" />
                </div>
                {/* Card 6 */}
                <div className="relative flex md:justify-end justify-center items-center w-full">
                  <div className="md:w-1/2 w-full md:pl-16 z-10">
                    <div className="w-full rounded-2xl bg-[#CCA776] p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                      <h4 className="text-xl font-bold text-black mb-2">Cơ Hội Tuyển Dụng</h4>
                      <p className="text-base text-black font-bold leading-relaxed">
                        Gia nhập đội ngũ chuyên gia HLCC để phát triển sự nghiệp và tạo ra giá trị thực tiễn.
                      </p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-[#CCA776] rounded-full border-4 border-white z-20 shadow-lg" />
                </div>
                {/* Card 7 */}
                <div className="relative flex md:justify-start justify-center items-center w-full">
                  <div className="md:w-1/2 w-full md:pr-16 z-10">
                    <div className="w-full rounded-2xl bg-[#CCA776] p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                      <h4 className="text-xl font-bold text-black mb-2">Khung Pháp Lý Vững Chắc</h4>
                      <p className="text-base text-black font-bold leading-relaxed">
                        Minh bạch và tuân thủ tuyệt đối các tiêu chuẩn pháp lý, đảm bảo quyền lợi rõ ràng.
                      </p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-[#CCA776] rounded-full border-4 border-white z-20 shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Những con số ấn tượng Section */}
        <div className="mx-auto max-w-7xl w-full rounded-3xl p-10 shadow-2xl bg-white/95 backdrop-blur-lg border border-[#CCA776]/30 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-black drop-shadow-lg">
              Hồ sơ Vụ án: Những Câu chuyện Thành công
            </h2>
            <p className="text-xl text-black font-bold max-w-3xl mx-auto">
              "VỤ ÁN: GIẢI CỨU DÒNG TIỀN - Giúp Công ty ABC tái cấu trúc nợ thành công, dòng tiền dương trở lại sau 6 tháng."
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
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
                <div className="w-full rounded-2xl bg-[#CCA776] p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-[#CCA776]" />
                  </div>
                  <motion.div
                    className="text-5xl md:text-6xl font-black mb-4 text-black drop-shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1, type: 'spring', stiffness: 200 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 text-black">{stat.label}</h3>
                  <p className="text-black text-sm font-bold">{stat.description}</p>
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
            <div className="bg-white rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-black mb-4 text-[#CCA776]">Sứ mệnh của chúng tôi</h3>
              <p className="text-lg text-black font-bold max-w-2xl mx-auto leading-relaxed">
                "Vực Dậy Tài Chính – Bứt Phá Doanh Thu. Chúng tôi không chỉ tư vấn mà trực tiếp tham gia giải quyết vấn đề, đảm bảo hiệu quả cao nhất cho doanh nghiệp."
              </p>
              <div className="mt-6">
                <div className="font-semibold text-black">HLCC Team</div>
                <div className="text-[#CCA776] font-bold">Liên minh 22 Doanh Chủ</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
