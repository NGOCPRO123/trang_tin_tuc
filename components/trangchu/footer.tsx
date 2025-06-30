"use client"

import { motion } from "framer-motion"
import { Facebook, Linkedin, Mail, Phone, MapPin, Youtube, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const quickLinks = [
  { name: "Trang chủ", href: "/" },
  { name: "Tin tức", href: "/tin-tuc" },
  { name: "Giới thiệu", href: "/gioi-thieu" },
  { name: "Liên hệ", href: "/lien-he" },
]

const services = [
  { name: "Về chúng tôi", href: "/#about" },
  { name: "Dịch vụ của chúng tôi", href: "/#services" },
  { name: "Tại sao chọn chúng tôi", href: "/#why-choose-us" },
  { name: "Khách hàng nói gì về chúng tôi", href: "/#testimonials" },
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
         <div className="flex items-center gap-3 mb-6 -mt-5">

              <Image
                src="/logo.png"
                alt="ACTA Logo"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
              />
          
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Đối tác tin cậy cho sự phát triển bền vững của doanh nghiệp. Chúng tôi cam kết mang đến những giải pháp
              công nghệ tối ưu nhất với hơn 10 năm kinh nghiệm.
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-amber-400" />
                <a 
                  href="https://maps.google.com/?q=213+Điện+Biên+Phủ,+Phường+Võ+Thị+Sáu,+Quận+3,+Tp.+HCM" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  213 Điện Biên Phủ, Phường Võ Thị Sáu, Quận 3, Tp. HCM
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400" />
                <a 
                  href="tel:+84123456789" 
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  +84 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400" />
                <a 
                  href="mailto:contact@company.com" 
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  contact@company.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Liên kết nhanh</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Dịch vụ</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Kết nối với chúng tôi</h4>
            <p className="text-gray-300 mb-6">Theo dõi chúng tôi để cập nhật những xu hướng công nghệ mới nhất</p>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h5 className="font-semibold mb-2">Nhận tin tức mới nhất</h5>
              <p className="text-sm text-gray-400 mb-3">Đăng ký để nhận thông tin về các xu hướng công nghệ</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="flex-1 px-3 py-2 bg-gray-700 rounded text-sm focus:outline-none focus:ring-amber-500"
                />
                <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 rounded text-sm transition-colors">
                  Đăng ký
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          
          <div className="mt-4 text-center text-sm text-gray-500">
            <p>© 2025 Công ty TMĐT ACTA. Tất cả quyền được bảo lưu.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
