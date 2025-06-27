"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User } from "lucide-react"
import type { Article } from "@/types/article"
import { formatRelativeTime } from "@/lib/utils"

interface ArticleCardProps {
  article: Article
  index?: number
}

export function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white h-full flex flex-col rounded-xl border border-gray-200 hover:border-blue-300">
        <div className="relative h-48 w-full flex-shrink-0">
          <Image
            src={article.image || "/placeholder.svg?height=200&width=400&text=Hình+ảnh"}
            alt={article.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="text-xs font-medium px-2 py-1 bg-white/90 backdrop-blur-sm">
              {article.category}
            </Badge>
          </div>
        </div>
        <CardHeader className="pb-3 pt-4 px-4">
          <h3 className="text-lg font-bold line-clamp-2 leading-tight text-gray-900 hover:text-blue-600 transition-colors">
            {article.title}
          </h3>
        </CardHeader>
        <CardContent className="pt-0 px-4 pb-4 flex-1 flex flex-col">
          <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed flex-1">
            {article.summary}
          </p>
          <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-3 border-t border-gray-100">
            <div className="flex items-center space-x-1">
              <User className="h-3 w-3" />
              <span className="truncate">{article.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3" />
              <span>{formatRelativeTime(article.publishedAt)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
