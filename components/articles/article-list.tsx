"use client"

import { motion } from "framer-motion"
import { ArticleCard } from "./article-card"
import type { Article } from "@/types/article"

interface ArticleListProps {
  articles: Article[]
  title?: string
  columns?: 1 | 2 | 3 | 4
}

export function ArticleList({ articles, title, columns = 3 }: ArticleListProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  }

  return (
    <div className="space-y-6">
      {title && (
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
      )}
      <div className={`grid ${gridCols[columns]} gap-4 md:gap-6 lg:gap-8`}>
        {articles.map((article, index) => (
          <ArticleCard key={article._id || article.id} article={article} index={index} />
        ))}
      </div>
    </div>
  )
}
