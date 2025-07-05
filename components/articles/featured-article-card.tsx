"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import type { Article } from "@/types/article"
import { formatRelativeTime } from "@/lib/utils"
import Link from "next/link"

interface FeaturedArticleCardProps {
  article: Article
  index?: number
  spotlight?: boolean
  mini?: boolean
}

export function FeaturedArticleCard({ article, index = 0, spotlight = false, mini = false }: FeaturedArticleCardProps) {
  return (
    <Link href={`/${article.slug || article._id}`} className={`block group ${spotlight ? "" : mini ? "" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className={`cursor-pointer ${spotlight ? "rounded-2xl shadow-2xl border-2 border-yellow-300 bg-gradient-to-br from-yellow-50 to-white" : mini ? "rounded-xl border bg-white hover:shadow-lg" : ""}`}
      >
        {spotlight ? (
          <div>
            <div className="relative w-full h-80 md:h-96 rounded-t-2xl overflow-hidden">
              <Image
                src={article.image || "/placeholder.svg?height=400&width=700&text=Tin+nổi+bật"}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-red-500 hover:bg-red-600 text-white font-semibold text-sm px-3 py-1.5 shadow-lg">🔥 TIN NỔI BẬT</Badge>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <Badge variant="secondary" className="mb-3 text-sm px-2.5 py-1">{article.category}</Badge>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                {article.title}
              </h3>
              <p className="text-base md:text-lg text-gray-700 line-clamp-3 mb-6 leading-relaxed">{article.summary}</p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span className="truncate">{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formatRelativeTime(article.publishedAt)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    <span>{article.viewCount ?? 0}</span>
                  </div>
                </div>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                  <span className="text-sm md:text-base">Xem chi tiết</span>
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        ) : mini ? (
          <div className="flex gap-3 md:gap-4 items-start p-3 md:p-4">
            <div className="relative w-28 md:w-32 h-20 md:h-24 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={article.image || "/placeholder.svg?height=120&width=180&text=Tin+nổi+bật"}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-1 left-1">
                <Badge className="bg-red-500 text-white text-xs px-1.5 py-0.5">Nổi bật</Badge>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <Badge variant="secondary" className="mb-2 text-xs px-1.5 py-0.5">{article.category}</Badge>
              <h4 className="text-sm md:text-base font-bold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                {article.title}
              </h4>
              <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                <span className="flex items-center"><User className="h-3 w-3 mr-1" />{article.author}</span>
                <span className="flex items-center"><Calendar className="h-3 w-3 mr-1" />{formatRelativeTime(article.publishedAt)}</span>
                <span className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-yellow-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>{article.viewCount ?? 0}</span>
              </div>
            </div>
          </div>
        ) : (
          // fallback layout nếu không truyền spotlight hoặc mini
          <div className="p-6">
            <h3 className="text-xl font-bold">{article.title}</h3>
          </div>
        )}
      </motion.div>
    </Link>
  )
}
