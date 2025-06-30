"use client"

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Nguyễn Văn A",
    role: "Giám đốc điều hành",
    avatar: "/placeholder-user.jpg",
    description: "Người sáng lập ACTA, định hướng chiến lược và phát triển bền vững cho tổ chức."
  },
  {
    name: "Trần Thị B",
    role: "Trưởng phòng Marketing",
    avatar: "/placeholder-user.jpg",
    description: "Đầu tàu sáng tạo, xây dựng văn hóa chia sẻ tri thức và đổi mới không ngừng."
  },
  {
    name: "Lê Văn C",
    role: "Quản lý Dự án",
    avatar: "/placeholder-user.jpg",
    description: "Kết nối các thành viên, lan tỏa giá trị tích cực đến cộng đồng."
  },
  {
    name: "Phạm Thị D",
    role: "Chuyên viên Công nghệ",
    avatar: "/placeholder-user.jpg",
    description: "Tiên phong ứng dụng công nghệ mới, tối ưu hiệu quả hoạt động."
  }
];

export default function ValuesSection() {
  return (
    <section className="py-20 px-4 bg-yellow-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Đội ngũ & Văn hóa ACTA
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những con người tạo nên bản sắc và sức mạnh của ACTA
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition-shadow p-8 flex flex-col items-center text-center"
            >
              <Image
                src={member.avatar}
                alt={member.name}
                width={96}
                height={96}
                className="rounded-full mb-4 object-cover border-4 border-yellow-200"
              />
              <div className="text-xl font-bold text-gray-800 mb-1">{member.name}</div>
              <div className="text-yellow-600 font-semibold mb-2">{member.role}</div>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 