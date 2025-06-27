"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Facebook, Twitter, Youtube, Newspaper } from "lucide-react"

export function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Thông tin liên hệ */}
          <div>
            <h3 className="text-xl font-bold mb-6">Liên hệ</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>contact@tintucvn.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>(84) 123-456-789</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>Hà Nội, Việt Nam</span>
              </div>
            </div>
          </div>

          {/* Danh mục */}
          <div>
            <h3 className="text-xl font-bold mb-6">Danh mục tin tức</h3>
            <ul className="space-y-3">
              <li>
                <a href="/danh-muc" className="hover:text-blue-400 transition-colors">
                  Thời sự
                </a>
              </li>
              <li>
                <a href="/danh-muc" className="hover:text-blue-400 transition-colors">
                  Thể thao
                </a>
              </li>
              <li>
                <a href="/danh-muc" className="hover:text-blue-400 transition-colors">
                  Giải trí
                </a>
              </li>
              <li>
                <a href="/danh-muc" className="hover:text-blue-400 transition-colors">
                  Công nghệ
                </a>
              </li>
            </ul>
          </div>

          {/* Mạng xã hội */}
          <div>
            <h3 className="text-xl font-bold mb-6">Theo dõi chúng tôi</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-blue-400 rounded-full hover:bg-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-red-600 rounded-full hover:bg-red-700 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">Cập nhật tin tức mới nhất từ Tin Tức VN</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Newspaper className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold">Tin Tức VN</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-1">© 2025 Tin Tức VN. Tất cả quyền được bảo lưu.</p>
              <p className="text-gray-500 text-sm">Phát triển bởi Đội ngũ Tin Tức VN</p>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
