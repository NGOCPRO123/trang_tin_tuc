"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Newspaper, FolderOpen, Star, List, Search } from "lucide-react"
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
    <section className="relative bg-gradient-to-br from-yellow-200 via-yellow-100 to-yellow-50 text-yellow-900 py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800&text=News+Pattern')] bg-repeat opacity-20"></div>
      </div>

      <div className="container relative z-10">
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
            <div className="p-4 bg-yellow-100/60 rounded-full backdrop-blur-sm">
              <Newspaper className="h-12 w-12 text-yellow-600" />
            </div>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Chào mừng đến với{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Tin Tức VN
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-8 text-yellow-700 leading-relaxed"
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
