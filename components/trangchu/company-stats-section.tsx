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
    <section className="py-10 px-4 text-white relative overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }} />
      <div className="absolute inset-0 z-10 bg-black/60" />
      <div className="container mx-auto max-w-7xl relative z-20">
        
        {/* Giải Pháp Toàn Diện Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold text-amber-300 mb-4 max-w-6xl mx-auto text-center">
                Những Đối tác đã Tin tưởng và Cùng HLCC Giải mã
              </h2>
              <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
                HLCC tự hào đồng hành cùng nhiều doanh nghiệp lớn nhỏ, mang lại giải pháp tài chính và tư vấn doanh nghiệp tối ưu, giúp tăng trưởng bền vững.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white/10 rounded-xl p-6">
                  <h4 className="text-2xl font-bold text-amber-300 mb-4">Liên Minh Cộng Đồng Affiliate Thực Chiến</h4>
                  <p className="text-lg opacity-90 leading-relaxed">
                    HLCC là đơn vị điều phối và sáng lập Hệ Sinh Thái TMĐT ACTA. Đây là một hệ sinh thái độc đáo kết hợp tinh hoa của Chợ Truyền Thống, ứng dụng AI và sức mạnh của Affiliate Marketing.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-xl p-6">
                  <h4 className="text-2xl font-bold text-amber-300 mb-4">Hàng Nghìn Thành Viên Năng Lực</h4>
                  <p className="text-lg opacity-90 leading-relaxed">
                    Với hàng nghìn thành viên có năng lực và nhiệt huyết, Cộng Đồng Affiliate Thực Chiến là một phần quan trọng trong giải pháp "tăng doanh số bền vững" của HLCC.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/10 rounded-xl p-6">
                  <h4 className="text-2xl font-bold text-amber-300 mb-4">Tin Tức & Kiến Thức</h4>
                  <p className="text-lg opacity-90 leading-relaxed">
                    Cập nhật những thông tin mới nhất, phân tích chuyên sâu và các giải pháp thực tiễn từ đội ngũ chuyên gia của HLCC.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-xl p-6">
                  <h4 className="text-2xl font-bold text-amber-300 mb-4">Tài Nguyên Độc Quyền</h4>
                  <p className="text-lg opacity-90 leading-relaxed">
                    Truy cập thư viện tài nguyên độc quyền của HLCC – nơi tổng hợp các cẩm nang, hướng dẫn chi tiết, biểu mẫu và kiến thức nền tảng.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <h4 className="text-2xl font-bold text-amber-300 mb-4">Khách Hàng Đa Dạng</h4>
                <p className="text-lg opacity-90 leading-relaxed">
                  Từ startup đến tập đoàn lớn, HLCC tự hào là đối tác tin cậy của đa dạng các doanh nghiệp.
                </p>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <h4 className="text-2xl font-bold text-amber-300 mb-4">Cơ Hội Tuyển Dụng</h4>
                <p className="text-lg opacity-90 leading-relaxed">
                  Gia nhập đội ngũ chuyên gia HLCC để phát triển sự nghiệp và tạo ra giá trị thực tiễn.
                </p>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <h4 className="text-2xl font-bold text-amber-300 mb-4">Khung Pháp Lý Vững Chắc</h4>
                <p className="text-lg opacity-90 leading-relaxed">
                  Minh bạch và tuân thủ tuyệt đối các tiêu chuẩn pháp lý, đảm bảo quyền lợi rõ ràng.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Những con số ấn tượng Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-amber-300">
            Hồ sơ Vụ án: Những Câu chuyện Thành công
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            "VỤ ÁN: GIẢI CỨU DÒNG TIỀN - Giúp Công ty ABC tái cấu trúc nợ thành công, dòng tiền dương trở lại sau 6 tháng."
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
            <h3 className="text-2xl font-bold mb-4">Sứ mệnh của chúng tôi</h3>
            <p className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed">
              "Vực Dậy Tài Chính – Bứt Phá Doanh Thu. Chúng tôi không chỉ tư vấn mà trực tiếp tham gia giải quyết vấn đề, đảm bảo hiệu quả cao nhất cho doanh nghiệp."
            </p>
            <div className="mt-6">
              <div className="font-semibold">HLCC Team</div>
              <div className="text-amber-200">Liên minh 22 Doanh Chủ</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
