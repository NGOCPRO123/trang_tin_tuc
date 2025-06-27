"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { Article } from "@/types/article"

interface ArticleContextType {
  articles: Article[]
  addArticle: (article: Omit<Article, "id" | "publishedAt">) => void
  updateArticle: (id: string, article: Partial<Article>) => void
  deleteArticle: (id: string) => void
  getArticle: (id: string) => Article | undefined
}

const ArticleContext = createContext<ArticleContextType | undefined>(undefined)

const initialArticles: Article[] = [
  {
    id: "1",
    title: "Chào mừng đến với hệ thống quản lý tin tức",
    summary: "Đây là bài viết mẫu đầu tiên trong hệ thống. Bạn có thể chỉnh sửa hoặc xóa bài viết này.",
    content: "Nội dung chi tiết của bài viết mẫu. Hệ thống cho phép admin thêm, sửa, xóa bài viết một cách dễ dàng.",
    category: "Thông báo",
    image: "/placeholder.svg?height=400&width=600&text=Bài+viết+mẫu",
    author: "Admin",
    publishedAt: new Date().toISOString(),
  },
]

export function ArticleProvider({ children }: { children: React.ReactNode }) {
  const [articles, setArticles] = useState<Article[]>([])

  // Load articles from localStorage on mount
  useEffect(() => {
    const savedArticles = localStorage.getItem("articles")
    if (savedArticles) {
      setArticles(JSON.parse(savedArticles))
    } else {
      setArticles(initialArticles)
    }
  }, [])

  // Save articles to localStorage whenever articles change
  useEffect(() => {
    if (articles.length > 0) {
      localStorage.setItem("articles", JSON.stringify(articles))
    }
  }, [articles])

  const addArticle = (articleData: Omit<Article, "id" | "publishedAt">) => {
    const newArticle: Article = {
      ...articleData,
      id: Date.now().toString(),
      publishedAt: new Date().toISOString(),
    }
    setArticles((prev) => [newArticle, ...prev])
  }

  const updateArticle = (id: string, articleData: Partial<Article>) => {
    setArticles((prev) => prev.map((article) => (article.id === id ? { ...article, ...articleData } : article)))
  }

  const deleteArticle = (id: string) => {
    setArticles((prev) => prev.filter((article) => article.id !== id))
  }

  const getArticle = (id: string) => {
    return articles.find((article) => article.id === id)
  }

  return (
    <ArticleContext.Provider
      value={{
        articles,
        addArticle,
        updateArticle,
        deleteArticle,
        getArticle,
      }}
    >
      {children}
    </ArticleContext.Provider>
  )
}

export function useArticles() {
  const context = useContext(ArticleContext)
  if (context === undefined) {
    throw new Error("useArticles must be used within an ArticleProvider")
  }
  return context
}
