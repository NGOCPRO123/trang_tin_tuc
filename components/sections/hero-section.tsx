"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, FolderOpen, Star, List, Search } from "lucide-react"
import { useState } from "react"

export function HeroSection({ onSearch }: { onSearch?: (q: string) => void } = {}) {
  const [search, setSearch] = useState("")

  const scrollToNews = () => {
    const newsSection = document.getElementById("news-section")
    if (newsSection) {
      newsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToCategories = () => {
    const categoriesSection = document.getElementById("categories-section")
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToFeatured = () => {
    const featuredSection = document.getElementById("featured-section")
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToAll = () => {
    const allSection = document.getElementById("all-articles-section")
    if (allSection) {
      allSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative text-white py-16 overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }} />
      <div className="absolute inset-0 z-10 bg-black/60" />

      <div className="container relative z-20">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-6 bg-yellow-100/60 rounded-full backdrop-blur-sm">
              <Image
                src="logo.png"
                alt="Tin Tức ACTA Logo"
                width={80}
                height={80}
                className="h-20 w-20"
              />
            </div>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Chào mừng đến với{" "}
            <span className="text-amber-300">
              Tin Tức ACTA
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Cập nhật tin tức mỗi ngày - Nhanh chóng, chính xác, đáng tin cậy
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-yellow-300 text-yellow-900 hover:bg-yellow-200 px-6 py-3 text-base font-semibold border-yellow-400"
              onClick={scrollToNews}
            >
              Xem tin mới nhất
              <ArrowDown className="ml-2 h-4 w-4 text-yellow-700" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-yellow-400 text-yellow-900 hover:bg-yellow-100 hover:text-yellow-800 px-6 py-3 text-base font-semibold"
              onClick={scrollToCategories}
            >
              Xem danh mục
              <FolderOpen className="ml-2 h-4 w-4 text-yellow-700" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-yellow-400 text-yellow-900 hover:bg-yellow-100 hover:text-yellow-800 px-6 py-3 text-base font-semibold"
              onClick={scrollToFeatured}
            >
              Tin nổi bật
              <Star className="ml-2 h-4 w-4 text-yellow-700" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-yellow-400 text-yellow-900 hover:bg-yellow-100 hover:text-yellow-800 px-6 py-3 text-base font-semibold"
              onClick={scrollToAll}
            >
              Tất cả bài viết
              <List className="ml-2 h-4 w-4 text-yellow-700" />
            </Button>
          </motion.div>

          {/* Thanh tìm kiếm */}
          <motion.div
            className="flex justify-center mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <form
              className="flex w-full max-w-xl"
              onSubmit={e => {
                e.preventDefault();
                onSearch?.(search);
              }}
            >
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Tìm kiếm theo tiêu đề, danh mục, tác giả, tóm tắt, nội dung..."
                className="flex-1 px-5 py-3 rounded-l-full border-2 border-yellow-300 focus:border-yellow-500 outline-none text-lg shadow-sm bg-white text-yellow-900 placeholder-yellow-400"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-r-full bg-yellow-300 hover:bg-yellow-400 border-2 border-yellow-300 focus:border-yellow-500 text-yellow-900 text-lg font-semibold flex items-center justify-center transition-colors"
                aria-label="Tìm kiếm"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
