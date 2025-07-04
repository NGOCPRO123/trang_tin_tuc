"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Leaf, BookOpen, Heart, Lightbulb, Globe } from "lucide-react"
import Image from "next/image"

const programs = [
  {
    id: 1,
    title: "Cộng đồng Xanh",
    description: "Chương trình bảo vệ môi trường và phát triển bền vững cho cộng đồng địa phương",
    icon: Leaf,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Kết nối Yêu thương",
    description: "Hoạt động tình nguyện hỗ trợ người già, trẻ em và những hoàn cảnh khó khăn",
    icon: Heart,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Học tập Suốt đời",
    description: "Các khóa học kỹ năng sống, phát triển bản thân và chia sẻ kiến thức",
    icon: BookOpen,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Khởi nghiệp Xã hội",
    description: "Hỗ trợ các ý tưởng kinh doanh có tác động tích cực đến cộng đồng",
    icon: Lightbulb,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Sức khỏe Cộng đồng",
    description: "Chương trình chăm sóc sức khỏe toàn diện cho mọi lứa tuổi",
    icon: Users,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "Văn hóa Địa phương",
    description: "Bảo tồn và phát huy các giá trị văn hóa truyền thống Việt Nam",
    icon: Globe,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function ProgramsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Các chương trình tiêu biểu</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá những dự án ý nghĩa mà chúng tôi đang triển khai để xây dựng cộng đồng tốt đẹp hơn
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full">
                    <program.icon className="w-6 h-6 text-orange-500" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </CardDescription>
                  <Button
                    variant="outline"
                    className="w-full border-orange-500 text-orange-600 hover:bg-orange-50 group bg-transparent"
                  >
                    Xem chi tiết
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
