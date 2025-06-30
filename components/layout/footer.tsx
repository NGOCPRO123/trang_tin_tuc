"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Twitter, Youtube, ArrowRight } from "lucide-react"

export function Footer() {
  // Danh sách đầy đủ các danh mục với slug tương ứng
  const categories = [
    { name: "Thời sự", slug: "thoi-su" },
    { name: "Thể thao", slug: "the-thao" },
    { name: "Công nghệ", slug: "cong-nghe" },
    { name: "Giải trí", slug: "giai-tri" },
    { name: "Kinh tế", slug: "kinh-te" },
    { name: "Xã hội", slug: "xa-hoi" },
    { name: "Thông báo", slug: "thong-bao" },
  ]

  const contactInfo = [
    { icon: Mail, text: "lienhe@acta.vn", href: "mailto:lienhe@acta.vn" },
    { icon: Phone, text: "028.5555.8879", href: "tel:028.5555.8879" },
    { icon: MapPin, text: "213 Điện Biên Phủ, Phường Võ Thị Sáu, Quận 3, TP.HCM", href: "#" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:bg-blue-600", label: "Facebook" },
    { icon: Twitter, href: "#", color: "hover:bg-sky-500", label: "Twitter" },
    { icon: Youtube, href: "#", color: "hover:bg-red-600", label: "Youtube" },
  ]

  return (
    <motion.footer
      className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.02%3E%3Ccircle cx=30 cy=30 r=1/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              className="flex items-center space-x-3 mb-6"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="p-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-xl shadow-lg">
                <Image
                  src="/logo.png"
                  alt="Tin Tức ACTA Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </div>
            </motion.div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Nguồn tin tức đáng tin cậy, cập nhật thông tin nhanh chóng và chính xác nhất tại Việt Nam.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`p-3 rounded-full ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-xl bg-gray-800/50 backdrop-blur-sm`}
                  aria-label={social.label}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Categories Section */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6 text-gray-100">Danh mục tin tức</h3>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category, index) => (
                <motion.a
                  key={category.slug}
                  href={`/danh-muc/${category.slug}`}
                  className="group flex items-center space-x-2 py-2 transition-all duration-300 hover:translate-x-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-yellow-400 transition-colors duration-300" />
                  <span className="text-gray-300 group-hover:text-yellow-400 transition-colors duration-300 text-sm font-medium">
                    {category.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-gray-100">Liên hệ</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 py-2 transition-all duration-300 group hover:translate-x-1"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <contact.icon className="h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">
                    {contact.text}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <motion.div
          className="border-t border-gray-700/50 mt-12 pt-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">© 2025 Công ty TMĐT ACTA. Tất cả quyền được bảo lưu.</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-xs">
                Phát triển bởi <span className="text-blue-400 font-medium">Đội ngũ Tin Tức ACTA</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
