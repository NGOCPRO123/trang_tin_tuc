"use client"

import { useEffect, useState } from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { AdminArticleList } from "@/components/admin/admin-article-list"
import type { Article } from "@/types/article"

const giaiPhapCategories = [
  "Đầu tư tài chính",
  "Giải pháp tăng doanh số bền vững",
  "Tư vấn pháp lý",
  "Nghiệp vụ kế toán – Thuế",
  "Xử lý công nợ",
  "Bảo vệ an ninh"
]

const kienThucCategories = [
  "Quản trị doanh nghiệp",
  "Giải pháp doanh nghiệp",
  "Phát triển bền vững"
]

export default function AdminCategoriesPage() {
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((data: Article[]) => setArticles(data))
  }, [])

  // Lọc bài viết theo loại và danh mục
  const getArticlesByTypeAndCategory = (type: "giai-phap" | "kien-thuc", category: string) => {
    return articles.filter(a => a.type === type && a.category === category)
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-8 text-blue-700 text-center">Quản lý danh mục & bài viết</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Danh mục Giải pháp */}
        <div>
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Danh mục Giải pháp</h2>
          <Accordion type="multiple" className="w-full space-y-4">
            {giaiPhapCategories.map((cat) => (
              <AccordionItem
                value={cat}
                key={cat}
                className="border border-purple-200 rounded-lg bg-purple-50/50 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-3 text-lg font-semibold text-purple-800 hover:bg-purple-100 transition">
                  {cat}
                </AccordionTrigger>
                <AccordionContent className="bg-white px-6 pb-6 pt-2">
                  <AdminArticleList articles={getArticlesByTypeAndCategory("giai-phap", cat)} onEdit={() => {}} onDelete={() => {}} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        {/* Danh mục Kiến thức */}
        <div>
          <h2 className="text-2xl font-semibold text-orange-700 mb-4">Danh mục Kiến thức</h2>
          <Accordion type="multiple" className="w-full space-y-4">
            {kienThucCategories.map((cat) => (
              <AccordionItem
                value={cat}
                key={cat}
                className="border border-orange-200 rounded-lg bg-orange-50/50 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-3 text-lg font-semibold text-orange-800 hover:bg-orange-100 transition">
                  {cat}
                </AccordionTrigger>
                <AccordionContent className="bg-white px-6 pb-6 pt-2">
                  <AdminArticleList articles={getArticlesByTypeAndCategory("kien-thuc", cat)} onEdit={() => {}} onDelete={() => {}} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
} 