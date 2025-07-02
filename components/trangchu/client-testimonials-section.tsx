"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, Star, Users, Briefcase, Heart, DollarSign } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Trần Minh Hoàng",
    role: "Giám đốc công nghệ",
    company: "TechViet Solutions",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    quote:
      "Đội ngũ rất chuyên nghiệp và có kinh nghiệm. Họ đã giúp chúng tôi xây dựng hệ thống quản lý hiệu quả, tiết kiệm được 40% thời gian xử lý công việc.",
  },
  {
    id: 2,
    name: "Lê Thị Mai Anh",
    role: "Giám đốc Marketing",
    company: "Green Life Corp",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    quote:
      "Từ khi hợp tác, doanh số online của chúng tôi tăng 150%. Website mới không chỉ đẹp mà còn rất dễ sử dụng. Khách hàng rất hài lòng.",
  },
  {
    id: 3,
    name: "Phạm Đức Thành",
    role: "CEO",
    company: "Smart Logistics",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    quote:
      "Ứng dụng mobile họ phát triển đã cách mạng hóa cách chúng tôi quản lý vận chuyển. Hiệu quả vượt ngoài mong đợi, đội ngũ hỗ trợ rất tận tâm.",
  },
  {
    id: 4,
    name: "Nguyễn Thị Hương",
    role: "Giám đốc vận hành",
    company: "EduTech Vietnam",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    quote:
      "Nền tảng học trực tuyến họ xây dựng đã giúp chúng tôi mở rộng quy mô từ 1,000 lên 10,000 học viên chỉ trong 6 tháng. Rất ấn tượng!",
  },
  {
    id: 5,
    name: "Võ Minh Tuấn",
    role: "Founder",
    company: "FinTech Startup",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    quote:
      "Họ không chỉ phát triển sản phẩm mà còn tư vấn chiến lược rất hay. Startup của chúng tôi đã gọi vốn thành công 2 triệu USD nhờ sản phẩm này.",
  },
  {
    id: 6,
    name: "Đặng Thị Lan",
    role: "Giám đốc bán hàng",
    company: "Fashion House",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    quote:
      "Hệ thống CRM họ thiết kế đã giúp đội bán hàng của chúng tôi tăng hiệu suất 60%. Giao diện thân thiện, dễ sử dụng và báo cáo rất chi tiết.",
  },
]

export function ClientTestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Điểm Khác Biệt Của HLCC</h2>
          <p className="text-lg text-gray-500">Những lý do khiến hàng nghìn doanh nghiệp tin tưởng và lựa chọn HLCC</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col items-center text-center bg-blue-50 rounded-2xl shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-6 shadow-lg">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-gray-900">Đội Ngũ Chuyên Gia Thực Chiến</h3>
            <p className="text-gray-600">Hơn 50 chuyên gia với kinh nghiệm thực tế tại các tập đoàn lớn và doanh nghiệp thành công</p>
          </div>
          <div className="flex flex-col items-center text-center bg-green-50 rounded-2xl shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center mb-6 shadow-lg">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-gray-900">Giải Pháp Toàn Diện & Linh Hoạt</h3>
            <p className="text-gray-600">Từ tài chính đến vận hành, từ pháp lý đến marketing - một điểm đến cho mọi nhu cầu doanh nghiệp</p>
          </div>
          <div className="flex flex-col items-center text-center bg-purple-50 rounded-2xl shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-6 shadow-lg">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-gray-900">Đồng Hành Trực Tiếp & Sâu Sát</h3>
            <p className="text-gray-600">Không chỉ tư vấn mà còn thực hiện cùng bạn, đảm bảo mọi giải pháp được triển khai hiệu quả</p>
          </div>
          <div className="flex flex-col items-center text-center bg-orange-50 rounded-2xl shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center mb-6 shadow-lg">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-gray-900">Tối Ưu Chi Phí Qua Nguồn Lực Chung</h3>
            <p className="text-gray-600">Tiết kiệm đến 60% chi phí so với việc thuê từng chuyên gia riêng lẻ</p>
          </div>
        </div>
      </div>
    </section>
  )
}
