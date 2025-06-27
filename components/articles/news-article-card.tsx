"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import type { Article } from "@/types/article"
import Link from "next/link"
import { formatRelativeTime } from "@/lib/utils"

interface NewsArticleCardProps {
  article: Article
  index?: number
}

export function NewsArticleCard({ article, index = 0 }: NewsArticleCardProps) {
  // Xác định bài mới (trong 3 ngày gần nhất)
  const isNew = (() => {
    const now = new Date()
    const published = new Date(article.publishedAt)
    const diff = (now.getTime() - published.getTime()) / (1000 * 60 * 60 * 24)
    return diff <= 3
  })()
  return (
    <Link href={`/bai-viet/${article._id}`} className="block group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -8, scale: 1.02 }}
        className="cursor-pointer h-full"
      >
        <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white group h-full flex flex-col rounded-2xl border border-gray-200 hover:border-yellow-400">
          {/* Ảnh lớn phía trên */}
          <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden flex-shrink-0">
            <Image
              src={article.image || "/placeholder.svg?height=400&width=700&text=Tin+tức"}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3 flex gap-2 items-center z-10">
              <Badge variant="secondary" className="text-xs font-medium px-2 py-1 bg-white/90 backdrop-blur-sm">
                {article.category}
              </Badge>
              {isNew && (
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-white text-xs font-bold px-2 py-1 rounded shadow">Mới</span>
              )}
            </div>
          </div>
          {/* Nội dung dưới */}
          <CardContent className="p-4 md:p-6 flex-1 flex flex-col">
            <div className="flex flex-col justify-start h-full">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 line-clamp-2 transition-colors leading-tight group-hover:text-yellow-600 text-gray-900">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base line-clamp-3 mb-4 leading-relaxed flex-1">
                {article.summary}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 border-t border-gray-100 mt-auto">
              <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <User className="h-3 w-3 md:h-4 md:w-4" />
                  <span className="truncate">{article.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                  <span>{formatRelativeTime(article.publishedAt)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  <span>{article.viewCount ?? 0}</span>
                </div>
              </div>
              <div className="flex items-center font-medium group-hover:text-yellow-600 transition-colors">
                <span className="text-sm md:text-base">Đọc thêm</span>
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  )
}
