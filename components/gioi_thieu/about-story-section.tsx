"use client"

import { motion } from "framer-motion";
import { Award, Users, Target, Star } from "lucide-react";
import Image from "next/image";

const achievements = [
  {
    number: "10+",
    label: "Năm kinh nghiệm",
    icon: Award
  },
  {
    number: "500+",
    label: "Khách hàng tin tưởng",
    icon: Users
  },
  {
    number: "200+",
    label: "Dự án thành công",
    icon: Target
  },
  {
    number: "98%",
    label: "Tỷ lệ hài lòng",
    icon: Star
  }
];

export function AboutStorySection() {
  return (
    <section className="py-20 px-4 bg-yellow-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Câu chuyện của chúng tôi
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Được thành lập vào năm 2014, Liên minh Cộng đồng Affiliate Thực chiến (ACTA) 
              đã trải qua một hành trình phát triển đầy thách thức và thành công. 
              Chúng tôi bắt đầu với một tầm nhìn đơn giản: tạo ra một cộng đồng nơi các 
              doanh nghiệp có thể kết nối, chia sẻ kinh nghiệm và cùng nhau phát triển.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ngày nay, chúng tôi tự hào là một trong những đơn vị hàng đầu trong lĩnh vực 
              affiliate marketing tại Việt Nam, với mạng lưới đối tác rộng khắp và 
              hàng trăm dự án thành công.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <achievement.icon className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{achievement.number}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="Đội ngũ ACTA"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-yellow-600">10+</div>
              <div className="text-sm text-gray-600">Năm kinh nghiệm</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 