"use client"

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2014",
    title: "Thành lập",
    description: "Khởi đầu với tầm nhìn xây dựng cộng đồng affiliate thực chiến"
  },
  {
    year: "2016",
    title: "Mở rộng",
    description: "Phát triển mạng lưới đối tác và khách hàng trên toàn quốc"
  },
  {
    year: "2018",
    title: "Đổi mới",
    description: "Áp dụng công nghệ mới và cải tiến quy trình kinh doanh"
  },
  {
    year: "2020",
    title: "Tăng trưởng",
    description: "Đạt mốc 500+ khách hàng và 200+ dự án thành công"
  },
  {
    year: "2023",
    title: "Lãnh đạo",
    description: "Trở thành đơn vị tiên phong trong lĩnh vực affiliate marketing"
  }
];

export function TimelineSection() {
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
            Hành trình phát triển
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những cột mốc quan trọng trong quá trình xây dựng và phát triển
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-yellow-200 h-full"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg border border-yellow-200">
                    <div className="text-2xl font-bold text-yellow-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-yellow-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 