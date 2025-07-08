"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Settings, ChevronDown, Phone } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Top Info Header */}
      <div className="w-full border-b bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-start justify-center pt-4 pb-0 gap-0 md:gap-0">
          {/* Left: Logo + HLCC */}
          <div className="flex items-start gap-2 min-w-[120px] justify-center md:justify-start w-full md:w-auto m-0 p-0 self-start">
            <Image src="/logo.png" alt="HLCC Logo" width={100} height={100} className="h-[100px] w-[100px] object-contain max-h-[100px] max-w-[100px] m-0 p-0 align-top -mt-5" />
          </div>
          {/* Center: Title + Subtitle */}
          <div className="flex flex-col items-center justify-center text-center flex-1 px-5 transform translate-x-20">
            <span className="text-2xl md:text-3xl font-bold text-black leading-tight text-center font-sans">DỊCH VỤ QUẢN TRỊ DOANH NGHIỆP</span>
            <span className="text-lg md:text-2xl font-extrabold text-yellow-700 mt-4 text-center drop-shadow-lg bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-800 bg-clip-text text-transparent font-sans" style={{textShadow: '1px 2px 8px rgba(0,0,0,0.12)'}}>VỰC DẬY TÀI CHÍNH - BỨT PHÁ DOANH THU</span>
          </div>
          {/* Right: Hotline */}
          <div className="flex items-center justify-center md:justify-end min-w-[200px] w-full md:w-auto">
            <a
              href="tel:02855558879"
              className="bg-yellow-400 text-white font-bold rounded-xl px-6 py-3 text-lg md:text-xl shadow flex items-center gap-2 hover:bg-yellow-500 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600"
              style={{ textDecoration: 'none' }}
            >
              <Phone className="w-6 h-6 mr-1" />
              Nhận tư vấn
            </a>
          </div>
        </div>
      </div>
      <motion.header
        className="sticky top-0 z-50 w-full border-b bg-gray-50/95 backdrop-blur supports-[backdrop-filter]:bg-gray-50/60"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container flex h-16 items-center justify-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {/* Logo có thể thêm lại ở đây nếu muốn */}
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 mx-auto">
            <Link href="/" className="text-lg font-bold hover:text-yellow-600 transition-colors">
              TRANG CHỦ
            </Link>
            <Link href="/gioi-thieu" className="text-lg font-bold hover:text-yellow-600 transition-colors">
              GIỚI THIỆU
            </Link>
            
            {/* GIẢI PHÁP - Hover Dropdown */}
            <div className="relative group">
              <div className="flex items-center cursor-pointer">
                <Link href="/giai-phap" className="text-lg font-bold hover:text-yellow-600 transition-colors px-2">
                  GIẢI PHÁP
                </Link>
                <ChevronDown className="w-5 h-5 ml-1 transition-transform group-hover:rotate-180" />
              </div>
              <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/giai-phap/dau-tu-tai-chinh" className="block px-4 py-3 text-base font-bold hover:text-yellow-600 hover:bg-gray-50 transition-colors">
                    Đầu tư tài chính
                  </Link>
                  <Link href="/giai-phap/giai-phap-tang-doanh-so" className="block px-4 py-3 text-base font-bold hover:text-yellow-600 hover:bg-gray-50 transition-colors">
                    Giải pháp tăng doanh số bền vững
                  </Link>
                  <Link href="/giai-phap/tu-van-phap-ly" className="block px-4 py-3 text-base font-bold hover:text-yellow-600 hover:bg-gray-50 transition-colors">
                    Tư vấn pháp lý
                  </Link>
                  <Link href="/giai-phap/nghiep-vu-ke-toan-thue" className="block px-4 py-3 text-base font-bold hover:text-yellow-600 hover:bg-gray-50 transition-colors">
                    Nghiệp vụ kế toán – Thuế
                  </Link>
                  <Link href="/giai-phap/xu-ly-cong-no" className="block px-4 py-3 text-base font-bold hover:text-yellow-600 hover:bg-gray-50 transition-colors">
                    Xử lý công nợ
                  </Link>
                  <Link href="/giai-phap/bao-ve-an-ninh" className="block px-4 py-3 text-base font-bold hover:text-yellow-600 hover:bg-gray-50 transition-colors">
                    Bảo vệ an ninh
                  </Link>
                </div>
              </div>
            </div>

            {/* KIẾN THỨC - Hover Dropdown */}
            <div className="relative group">
              <div className="flex items-center cursor-pointer">
                <Link href="/kien-thuc" className="text-lg font-bold hover:text-yellow-600 transition-colors px-2">
                  KIẾN THỨC
                </Link>
                <ChevronDown className="w-5 h-5 ml-1 transition-transform group-hover:rotate-180" />
              </div>
              <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/danh-muc/quan-tri-doanh-nghiep" className="block px-4 py-3 text-base font-bold hover:text-yellow-600 hover:bg-gray-50 transition-colors">
                    Quản trị doanh nghiệp
                  </Link>
                  <Link href="/danh-muc/giai-phap-doanh-nghiep" className="block px-4 py-3 text-base font-bold hover:text-yellow-600 hover:bg-gray-50 transition-colors">
                    Giải pháp doanh nghiệp
                  </Link>
                  <Link href="/danh-muc/phat-trien-ben-vung" className="block px-4 py-3 text-base font-bold hover:text-yellow-600 hover:bg-gray-50 transition-colors">
                    Phát triển bền vững
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/dich-vu" className="text-lg font-bold hover:text-yellow-600 transition-colors">
              DỰ ÁN TIÊU BIỂU
            </Link>

            {/* LIÊN HỆ - Hover Dropdown */}
            <div className="relative group">
              <div className="flex items-center cursor-pointer">
                <Link href="/lien-he" className="text-lg font-bold hover:text-yellow-600 transition-colors px-2">
                  LIÊN HỆ
                </Link>
                <ChevronDown className="w-5 h-5 ml-1 transition-transform group-hover:rotate-180" />
              </div>
              <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/lien-he/tuyen-dung" className="block px-4 py-3 text-base font-bold hover:text-yellow-600 hover:bg-gray-50 transition-colors">
                    Tuyển dụng
                  </Link>
                  <Link href="/lien-he/chinh-sach-bao-mat" className="block px-4 py-3 text-base font-bold hover:text-yellow-600 hover:bg-gray-50 transition-colors">
                    Chính sách Bảo mật
                  </Link>
                  <Link href="/lien-he/dieu-khoan" className="block px-4 py-3 text-base font-bold hover:text-yellow-600 hover:bg-gray-50 transition-colors">
                    Điều khoản
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          {/* Nút bên phải */}
          <div className="hidden md:flex items-center">
            {/* Đã xóa nút Đăng nhập */}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className="text-sm font-medium hover:text-yellow-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Trang chủ
                </Link>
                <Link
                  href="/dich-vu"
                  className="text-sm font-medium hover:text-yellow-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Dịch vụ
                </Link>
                <span className="text-sm font-medium hover:text-yellow-600 transition-colors cursor-pointer select-none">Giải Pháp</span>
                <div className="ml-4 flex flex-col space-y-2 mt-2">
                  <Link href="/giai-phap/dau-tu-tai-chinh" className="text-sm text-slate-600 hover:text-yellow-600" onClick={() => setIsOpen(false)}>Đầu tư tài chính</Link>
                  <Link href="/giai-phap/giai-phap-tang-doanh-so" className="text-sm text-slate-600 hover:text-yellow-600" onClick={() => setIsOpen(false)}>Giải pháp tăng doanh số bền vững</Link>
                  <Link href="/giai-phap/tu-van-phap-ly" className="text-sm text-slate-600 hover:text-yellow-600" onClick={() => setIsOpen(false)}>Tư vấn pháp lý</Link>
                  <Link href="/giai-phap/nghiep-vu-ke-toan-thue" className="text-sm text-slate-600 hover:text-yellow-600" onClick={() => setIsOpen(false)}>Nghiệp vụ kế toán – Thuế</Link>
                  <Link href="/giai-phap/xu-ly-cong-no" className="text-sm text-slate-600 hover:text-yellow-600" onClick={() => setIsOpen(false)}>Xử lý công nợ</Link>
                  <Link href="/giai-phap/bao-ve-an-ninh" className="text-sm text-slate-600 hover:text-yellow-600" onClick={() => setIsOpen(false)}>Bảo vệ an ninh</Link>
                </div>
                <span className="text-sm font-medium hover:text-yellow-600 transition-colors cursor-pointer select-none">Kiến thức</span>
                <div className="ml-4 flex flex-col space-y-2 mt-2">
                  <Link href="/danh-muc/quan-tri-doanh-nghiep" className="text-sm text-slate-600 hover:text-yellow-600" onClick={() => setIsOpen(false)}>Quản trị doanh nghiệp</Link>
                  <Link href="/danh-muc/giai-phap-doanh-nghiep" className="text-sm text-slate-600 hover:text-yellow-600" onClick={() => setIsOpen(false)}>Giải pháp doanh nghiệp</Link>
                  <Link href="/danh-muc/phat-trien-ben-vung" className="text-sm text-slate-600 hover:text-yellow-600" onClick={() => setIsOpen(false)}>Phát triển bền vững</Link>
                </div>
                <Link
                  href="/gioi-thieu"
                  className="text-sm font-medium hover:text-yellow-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Giới thiệu
                </Link>
                <span className="text-sm font-medium hover:text-yellow-600 transition-colors cursor-pointer select-none">Liên hệ</span>
                <div className="ml-4 flex flex-col space-y-2 mt-2">
                  <Link href="/lien-he/tuyen-dung" className="text-sm text-slate-600 hover:text-yellow-600" onClick={() => setIsOpen(false)}>Tuyển dụng</Link>
                  <Link href="/lien-he/chinh-sach-bao-mat" className="text-sm text-slate-600 hover:text-yellow-600" onClick={() => setIsOpen(false)}>Chính sách Bảo mật</Link>
                  <Link href="/lien-he/dieu-khoan" className="text-sm text-slate-600 hover:text-yellow-600" onClick={() => setIsOpen(false)}>Điều khoản</Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </motion.header>
    </>
  )
}
