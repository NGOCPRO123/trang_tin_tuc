"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  Award, 
  Target, 
  Lightbulb, 
  Linkedin, 
  Mail,
  Phone,
  Star,
  CheckCircle,
  Calendar,
  TrendingUp,
  Shield
} from "lucide-react"
import Image from "next/image"

const expertTeam = [
  {
    name: "Nguyễn Văn A",
    position: "Nhà sáng lập & Giám đốc Điều hành",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    experience: "15+ năm kinh nghiệm",
    expertise: "Chiến lược doanh nghiệp, Tài chính doanh nghiệp, Quản trị rủi ro",
    achievements: "Đã tư vấn cho 200+ doanh nghiệp vừa và nhỏ, Thành viên Hội đồng tư vấn kinh tế",
    philosophy: "Tôi tin rằng mỗi doanh nghiệp đều có tiềm năng vô hạn. Nhiệm vụ của chúng tôi là khơi dậy và phát triển tiềm năng đó.",
    linkedin: "https://linkedin.com/in/nguyen-van-a",
    email: "nguyen.van.a@hlcc.vn",
    phone: "0912.880.330"
  },
  {
    name: "Trần Thị B",
    position: "Trưởng bộ phận Tài chính",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80",
    experience: "12+ năm kinh nghiệm",
    expertise: "Tài chính doanh nghiệp, Kế toán thuế, Phân tích tài chính",
    achievements: "Chuyên gia tư vấn tài chính cho 150+ dự án, CPA, CFA",
    philosophy: "Tài chính là huyết mạch của doanh nghiệp. Tôi cam kết mang đến những giải pháp tài chính tối ưu nhất.",
    linkedin: "https://linkedin.com/in/tran-thi-b",
    email: "tran.thi.b@hlcc.vn",
    phone: "0912.880.331"
  },
  {
    name: "Lê Văn C",
    position: "Trưởng bộ phận Pháp lý",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    experience: "10+ năm kinh nghiệm",
    expertise: "Pháp lý doanh nghiệp, Hợp đồng thương mại, Tuân thủ pháp luật",
    achievements: "Luật sư tư vấn cho 100+ doanh nghiệp, Thành viên Đoàn luật sư TP.HCM",
    philosophy: "Pháp lý là nền tảng vững chắc cho sự phát triển bền vững. Tôi đảm bảo doanh nghiệp luôn tuân thủ và an toàn.",
    linkedin: "https://linkedin.com/in/le-van-c",
    email: "le.van.c@hlcc.vn",
    phone: "0912.880.332"
  }
]

export function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Gặp gỡ Đội ngũ Chuyên gia HLCC
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          HLCC uy tín nhờ đội ngũ chuyên gia tận tâm, mang đến giải pháp toàn diện cho khách hàng
          </p>
        </motion.div>

        {/* Expert Team Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {expertTeam.map((expert, idx) => (
            <motion.div
              key={expert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-white to-yellow-50 overflow-hidden group">
                <CardContent className="p-0">
                  {/* Header with image */}
                  <div className="relative h-64 bg-gradient-to-br from-yellow-400 to-orange-500">
                    <Image
                      src={expert.avatar}
                      alt={expert.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">{expert.name}</h3>
                      <p className="text-yellow-200 font-medium">{expert.position}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="h-5 w-5 text-yellow-500" />
                      <span className="text-sm font-semibold text-gray-600">{expert.experience}</span>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Target className="h-4 w-4 mr-2 text-yellow-500" />
                          Chuyên môn:
                        </h4>
                        <p className="text-sm text-gray-600">{expert.expertise}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Award className="h-4 w-4 mr-2 text-yellow-500" />
                          Thành tựu:
                        </h4>
                        <p className="text-sm text-gray-600">{expert.achievements}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Lightbulb className="h-4 w-4 mr-2 text-yellow-500" />
                          Triết lý:
                        </h4>
                        <p className="text-sm text-gray-600 italic">"{expert.philosophy}"</p>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2 mb-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="h-4 w-4 text-yellow-500" />
                        <span>{expert.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="h-4 w-4 text-yellow-500" />
                        <span>{expert.phone}</span>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-yellow-200 text-yellow-600 hover:bg-yellow-50"
                        onClick={() => window.open(expert.linkedin, '_blank')}
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
                        onClick={() => window.open(`mailto:${expert.email}`, '_blank')}
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Liên hệ
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
            <p className="text-gray-600">Chuyên gia</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-400 to-indigo-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
            <p className="text-gray-600">Dự án thành công</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">200+</h3>
            <p className="text-gray-600">Doanh nghiệp tin tưởng</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">10+</h3>
            <p className="text-gray-600">Năm kinh nghiệm</p>
          </div>
        </motion.div>

        {/* Team Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border-2 border-yellow-200 shadow-lg mb-12"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Triết lý của đội ngũ HLCC
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              "Chúng tôi không chỉ cung cấp dịch vụ, mà còn là người đồng hành tin cậy trong hành trình phát triển của doanh nghiệp. 
              Mỗi thành viên trong đội ngũ đều cam kết mang đến giá trị thực tế và kết quả bền vững cho khách hàng."
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Xem tất cả đội ngũ của chúng tôi
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
