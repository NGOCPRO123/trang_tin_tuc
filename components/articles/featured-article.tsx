"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User } from "lucide-react"
import type { Article } from "@/types/article"
import { formatDate } from "@/lib/utils"

interface FeaturedArticleProps {
  article: Article
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.6 }}
      className="h-full"
    >
      <Link href={`/bai-viet/${article.id}`} className="block h-full group">
        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col rounded-xl border border-gray-200 hover:border-blue-300">
          <div className="relative h-56 md:h-64 lg:h-72 w-full flex-shrink-0">
            <Image 
              src={article.image || "/placeholder.svg"} 
              alt={article.title} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-300" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <Badge variant="secondary" className="mb-3 text-xs font-medium px-2 py-1 bg-white/20 backdrop-blur-sm">
                {article.category}
              </Badge>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 line-clamp-2 leading-tight group-hover:text-blue-200 transition-colors">
                {article.title}
              </h2>
              <p className="text-sm opacity-90 line-clamp-2 mb-3 leading-relaxed">
                {article.summary}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <div className="flex items-center space-x-1">
                  <User className="h-3 w-3" />
                  <span className="truncate">{article.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3" />
                  <span>{formatDate(article.publishedAt)}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}
