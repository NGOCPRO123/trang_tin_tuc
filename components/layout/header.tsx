"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Newspaper, Settings } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Newspaper className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Tin Tức VN
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Trang chủ
          </Link>
          <Link href="/danh-muc/the-thao" className="text-sm font-medium hover:text-primary transition-colors">
            Thể thao
          </Link>
          <Link href="/danh-muc/thoi-su" className="text-sm font-medium hover:text-primary transition-colors">
            Thời sự
          </Link>
          <Link href="/danh-muc/cong-nghe" className="text-sm font-medium hover:text-primary transition-colors">
            Công nghệ
          </Link>
          <Link href="/danh-muc/giai-tri" className="text-sm font-medium hover:text-primary transition-colors">
            Giải trí
          </Link>
          <Link href="/danh-muc/kinh-te" className="text-sm font-medium hover:text-primary transition-colors">
            Kinh tế
          </Link>
          <Link href="/danh-muc/xa-hoi" className="text-sm font-medium hover:text-primary transition-colors">
            Xã hội
          </Link>
          <Link href="/danh-muc/thong-bao" className="text-sm font-medium hover:text-primary transition-colors">
            Thông báo
          </Link>
          <Link href="/admin">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Đăng nhập
            </Button>
          </Link>
        </nav>

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
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Trang chủ
              </Link>
              <Link
                href="/danh-muc/the-thao"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Thể thao
              </Link>
              <Link
                href="/danh-muc/thoi-su"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Thời sự
              </Link>
              <Link
                href="/danh-muc/cong-nghe"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Công nghệ
              </Link>
              <Link
                href="/danh-muc/giai-tri"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Giải trí
              </Link>
              <Link
                href="/danh-muc/kinh-te"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Kinh tế
              </Link>
              <Link
                href="/danh-muc/xa-hoi"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Xã hội
              </Link>
              <Link
                href="/danh-muc/thong-bao"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Thông báo
              </Link>
              <Link
                href="/admin"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Đăng nhập
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}
