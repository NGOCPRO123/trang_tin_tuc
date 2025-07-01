"use client"

import { useEffect, useState } from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { AdminArticleList } from "@/components/admin/admin-article-list"
import type { Article } from "@/types/article"

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<string[]>([])
  const [articlesByCategory, setArticlesByCategory] = useState<Record<string, Article[]>>({})

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((data: Article[]) => {
        const grouped: Record<string, Article[]> = {}
        data.forEach((article) => {
          if (!grouped[article.category]) grouped[article.category] = []
          grouped[article.category].push(article)
        })
        setCategories(Object.keys(grouped))
        setArticlesByCategory(grouped)
      })
  }, [])

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-8 text-blue-700 text-center">Quản lý danh mục & bài viết</h1>
      <Accordion type="multiple" className="w-full space-y-4">
        {categories.map((cat) => (
          <AccordionItem
            value={cat}
            key={cat}
            className="border border-blue-200 rounded-lg bg-blue-50/50 overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-3 text-lg font-semibold text-blue-800 hover:bg-blue-100 transition">
              {cat}
            </AccordionTrigger>
            <AccordionContent className="bg-white px-6 pb-6 pt-2">
              <AdminArticleList articles={articlesByCategory[cat] || []} onEdit={() => {}} onDelete={() => {}} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
} 