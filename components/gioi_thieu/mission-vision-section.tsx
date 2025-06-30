"use client"

import { motion } from "framer-motion";
import { Lightbulb, Users, Globe, Heart } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section className="py-20 px-4 bg-yellow-50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Định hướng phát triển & Cam kết cộng đồng
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ACTA không chỉ hướng tới vị thế dẫn đầu trong lĩnh vực affiliate marketing, mà còn cam kết tạo ra giá trị bền vững cho cộng đồng và xã hội.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow"
          >
            <div className="flex items-center mb-4">
              <Lightbulb className="w-10 h-10 text-yellow-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Đổi mới & Công nghệ</h3>
            </div>
            <p className="text-gray-700 text-lg">
              Tiên phong ứng dụng công nghệ mới, xây dựng hệ sinh thái affiliate tự động hóa, kết nối doanh nghiệp, nhà sáng tạo và cộng đồng.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow"
          >
            <div className="flex items-center mb-4">
              <Heart className="w-10 h-10 text-orange-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Cam kết cộng đồng</h3>
            </div>
            <p className="text-gray-700 text-lg">
              Đặt lợi ích cộng đồng lên hàng đầu, phát triển các dự án xã hội, hỗ trợ giáo dục, bảo vệ môi trường và thúc đẩy phát triển bền vững.
            </p>
          </motion.div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow"
          >
            <div className="flex items-center mb-4">
              <Globe className="w-10 h-10 text-blue-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Phát triển bền vững</h3>
            </div>
            <p className="text-gray-700 text-lg">
              Hướng tới phát triển lâu dài, cân bằng giữa lợi ích kinh doanh và trách nhiệm xã hội, đóng góp tích cực cho nền kinh tế số Việt Nam.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow"
          >
            <div className="flex items-center mb-4">
              <Users className="w-10 h-10 text-pink-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Kết nối & Lan tỏa</h3>
            </div>
            <p className="text-gray-700 text-lg">
              Xây dựng mạng lưới liên kết rộng khắp, lan tỏa giá trị tích cực, tạo động lực phát triển cho từng cá nhân và tổ chức tham gia.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 