"use client"

import { motion } from "framer-motion"
import { Facebook, Linkedin, Mail, Phone, MapPin, Youtube, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const quickLinks = [
  { name: "Trang chủ", href: "/" },
  { name: "Giới thiệu", href: "/gioi-thieu" },
  { name: "Dự án tiêu biểu", href: "/dich-vu" },
  { name: "Giải pháp", href: "/giai-phap" },
  { name: "Kiến thức", href: "/kien-thuc" },
  { name: "Liên hệ", href: "/lien-he" },
]

const giaiPhapLinks = [
  { name: "Đầu tư tài chính", href: "/giai-phap/dau-tu-tai-chinh" },
  { name: "Giải pháp tăng doanh số bền vững", href: "/giai-phap/giai-phap-tang-doanh-so" },
  { name: "Tư vấn pháp lý", href: "/giai-phap/tu-van-phap-ly" },
  { name: "Nghiệp vụ kế toán – Thuế", href: "/giai-phap/nghiep-vu-ke-toan-thue" },
  { name: "Xử lý công nợ", href: "/giai-phap/xu-ly-cong-no" },
  { name: "Bảo vệ an ninh", href: "/giai-phap/bao-ve-an-ninh" },
]

const kienThucLinks = [
  { name: "Quản trị doanh nghiệp", href: "/danh-muc/quan-tri-doanh-nghiep" },
  { name: "Giải pháp doanh nghiệp", href: "/danh-muc/giai-phap-doanh-nghiep" },
  { name: "Phát triển bền vững", href: "/danh-muc/phat-trien-ben-vung" },
]

const lienHeLinks = [
  { name: "Tuyển dụng", href: "/lien-he/tuyen-dung" },
  { name: "Chính sách Bảo mật", href: "/lien-he/chinh-sach-bao-mat" },
  { name: "Điều khoản", href: "/lien-he/dieu-khoan" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
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
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#CCA776]" style={{ minWidth: '1rem', minHeight: '1rem' }} />
                <a 
                  href="https://maps.google.com/?q=213+Điện+Biên+Phủ,+Phường+Võ+Thị+Sáu,+Quận+3,+Tp.+HCM" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#CCA776]/80 transition-colors duration-200"
                >
                  Tòa nhà Sabay, 99 Cộng Hòa, Phường 4, Quận Tân Bình, TPHCM
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#CCA776]" style={{ minWidth: '1rem', minHeight: '1rem' }} />
                <a 
                  href="tel:+84123456789" 
                  className="hover:text-[#CCA776]/80 transition-colors duration-200"
                >
               028.5555.8879
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#CCA776]" style={{ minWidth: '1rem', minHeight: '1rem' }} />
                <a 
                  href="mailto:contact@company.com" 
                  className="hover:text-[#CCA776]/80 transition-colors duration-200"
                >
                  lienhe@hlcc.group
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
                    className="text-gray-300 hover:text-[#CCA776]/80 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Giải pháp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Giải pháp</h4>
            <ul className="space-y-3">
              {giaiPhapLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#CCA776]/80 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Kiến thức */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Kiến thức</h4>
            <ul className="space-y-3">
              {kienThucLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#CCA776]/80 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Liên hệ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Liên hệ</h4>
            <ul className="space-y-3">
              {lienHeLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#CCA776]/80 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Kết nối với chúng tôi</h4>
            <div className="flex gap-4 mb-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#CCA776]/80 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-center text-sm text-gray-500 w-full">
              <p>© 2025 Công ty TMĐT ACTA. Tất cả quyền được bảo lưu.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
