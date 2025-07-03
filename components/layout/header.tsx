"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Settings, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";

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


            <span className="text-2xl md:text-3xl font-bold text-black leading-tight text-center">DỊCH VỤ QUẢN TRỊ DOANH NGHIỆP</span>
            <span className="text-lg md:text-2xl font-extrabold font-be-vietnam-pro text-yellow-700 mt-4 text-center drop-shadow-lg bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-800 bg-clip-text text-transparent" style={{textShadow: '1px 2px 8px rgba(0,0,0,0.12)'}}>VỰC DẬY TÀI CHÍNH - BỨT PHÁ DOANH THU</span>
          </div>
          {/* Right: Hotline */}
          <div className="flex items-center justify-center md:justify-end min-w-[200px] w-full md:w-auto">
            <span className="bg-yellow-400 text-white font-bold rounded-xl px-6 py-3 text-lg md:text-xl shadow">Hotline: 028 5555 8879</span>
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
            
            <div className="relative flex items-center group">
              <Link href="/giai-phap" className="text-lg font-bold hover:text-yellow-600 transition-colors px-2">
                GIẢI PHÁP
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="ml-1 p-1 rounded hover:bg-gray-100 transition-colors flex items-center" aria-label="Xem danh mục giải pháp">
                    <ChevronDown className="w-5 h-5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem asChild>
                    <Link href="/danh-muc/thoi-su" className="font-bold text-base md:text-lg hover:text-yellow-600">Tư vấn Tài chính & Huy động vốn</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/danh-muc/cong-nghe" className="font-bold text-base md:text-lg hover:text-yellow-600">Nghiệp vụ Kế toán – Thuế</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/danh-muc/kinh-te" className="font-bold text-base md:text-lg hover:text-yellow-600">Tư vấn Pháp lý & Quản trị rủi ro</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/danh-muc/giai-tri" className="font-bold text-base md:text-lg hover:text-yellow-600">Chiến lược Tăng doanh số bền vững</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/danh-muc/xa-hoi" className="font-bold text-base md:text-lg hover:text-yellow-600">Tối ưu Vận hành & An ninh Doanh nghiệp</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/giai-phap" className="font-bold text-base md:text-blue-600 hover:underline flex items-center">
                      <span className="text-blue-600">Xem tất cả giải pháp</span>
                      <span className="ml-2">&rarr;</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="relative flex items-center group">
              <Link href="/kien-thuc" className="text-lg font-bold hover:text-yellow-600 transition-colors px-2">
                KIẾN THỨC
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="ml-1 p-1 rounded hover:bg-gray-100 transition-colors flex items-center" aria-label="Xem danh mục kiến thức">
                    <ChevronDown className="w-5 h-5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem asChild>
                    <Link href="/danh-muc/quan-tri-doanh-nghiep" className="font-bold text-base md:text-lg hover:text-yellow-600">Quản trị Doanh nghiệp</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/danh-muc/phat-trien-doanh-nghiep" className="font-bold text-base md:text-lg hover:text-yellow-600">Phát triển Doanh nghiệp</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/danh-muc/tai-chinh-ke-toan-thue" className="font-bold text-base md:text-lg hover:text-yellow-600">Tài chính - Kế toán - Thuế</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/danh-muc/phap-ly-rui-ro" className="font-bold text-base md:text-lg hover:text-yellow-600">Pháp lý & Rủi ro</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/danh-muc/tai-nguyen-tai-ve" className="font-bold text-base md:text-lg hover:text-yellow-600">Tài nguyên tải về</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/kien-thuc" className="font-bold text-base md:text-blue-600 hover:underline flex items-center">
                      <span className="text-blue-600">Xem tất cả bài viết</span>
                      <span className="ml-2">&rarr;</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Link href="/dich-vu" className="text-lg font-bold hover:text-yellow-600 transition-colors">
              DỰ ÁN TIÊU BIỂU
            </Link>
            <Link href="/lien-he" className="text-lg font-bold hover:text-yellow-600 transition-colors">
              LIÊN HỆ
            </Link>
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
                  <Link href="/danh-muc/thoi-su" className="text-sm text-slate-600 hover:text-yellow-600" onClick={() => setIsOpen(false)}>Tư vấn Tài chính & Huy động vốn</Link>
                  <Link href="/danh-muc/cong-nghe" className="text-sm text-slate-600 hover:text-yellow-600" onClick={() => setIsOpen(false)}>Nghiệp vụ Kế toán – Thuế</Link>
                  <Link href="/danh-muc/kinh-te" className="text-sm text-slate-600 hover:text-yellow-600" onClick={() => setIsOpen(false)}>Tư vấn Pháp lý & Quản trị rủi ro</Link>
                  <Link href="/danh-muc/giai-tri" className="text-sm text-slate-600 hover:text-yellow-600" onClick={() => setIsOpen(false)}>Chiến lược Tăng doanh số bền vững</Link>
                  <Link href="/danh-muc/xa-hoi" className="text-sm text-slate-600 hover:text-yellow-600" onClick={() => setIsOpen(false)}>Tối ưu Vận hành & An ninh Doanh nghiệp</Link>
                  <Link href="/giai-phap" className="text-sm text-blue-600 hover:underline font-semibold" onClick={() => setIsOpen(false)}>Xem tất cả giải pháp &rarr;</Link>
                </div>
                <Link
                  href="/kien-thuc"
                  className="text-sm font-medium hover:text-yellow-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Kiến thức
                </Link>
                <Link
                  href="/gioi-thieu"
                  className="text-sm font-medium hover:text-yellow-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Giới thiệu
                </Link>
                <Link
                  href="/lien-he"
                  className="text-sm font-medium hover:text-yellow-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Liên hệ
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </motion.header>
    </>
  )
}
