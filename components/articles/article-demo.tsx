"use client"

import { ArticleCard } from "./article-card"
import { FeaturedArticleCard } from "./featured-article-card"
import { NewsArticleCard } from "./news-article-card"
import { ArticleList } from "./article-list"
import type { Article } from "@/types/article"

// Mock data để demo
const mockArticles: Article[] = [
  {
    _id: "1",
    id: "1",
    title: "Công nghệ AI đang thay đổi cách chúng ta làm việc trong tương lai",
    summary: "Trí tuệ nhân tạo không chỉ là xu hướng mà đang trở thành công cụ thiết yếu trong mọi lĩnh vực. Từ tự động hóa đến ra quyết định thông minh, AI đang mở ra những cơ hội mới cho doanh nghiệp và cá nhân.",
    content: "Nội dung chi tiết về AI...",
    author: "Nguyễn Văn A",
    category: "Công nghệ",
    image: "/placeholder.jpg",
    publishedAt: new Date().toISOString(),
    viewCount: 1250
  },
  {
    _id: "2",
    id: "2",
    title: "Du lịch Việt Nam phục hồi mạnh mẽ sau đại dịch",
    summary: "Sau thời gian dài bị ảnh hưởng bởi COVID-19, ngành du lịch Việt Nam đang có những dấu hiệu phục hồi tích cực với số lượng khách quốc tế tăng trưởng đáng kể.",
    content: "Nội dung chi tiết về du lịch...",
    author: "Trần Thị B",
    category: "Du lịch",
    image: "/placeholder.jpg",
    publishedAt: new Date(Date.now() - 86400000).toISOString(),
    viewCount: 890
  },
  {
    _id: "3",
    id: "3",
    title: "Giáo dục trực tuyến: Xu hướng học tập của tương lai",
    summary: "Với sự phát triển của công nghệ, giáo dục trực tuyến đang trở thành phương pháp học tập phổ biến và hiệu quả, mang lại cơ hội tiếp cận kiến thức cho mọi người.",
    content: "Nội dung chi tiết về giáo dục...",
    author: "Lê Văn C",
    category: "Giáo dục",
    image: "/placeholder.jpg",
    publishedAt: new Date(Date.now() - 172800000).toISOString(),
    viewCount: 567
  }
]

export function ArticleDemo() {
  return (
    <div className="container mx-auto py-12 space-y-16">
      {/* Demo ArticleCard */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">ArticleCard - Cải thiện</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockArticles.map((article, index) => (
            <ArticleCard key={article._id} article={article} index={index} />
          ))}
        </div>
      </section>

      {/* Demo FeaturedArticleCard */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">FeaturedArticleCard - Spotlight</h2>
        <div className="max-w-4xl mx-auto">
          <FeaturedArticleCard article={mockArticles[0]} spotlight />
        </div>
      </section>

      {/* Demo FeaturedArticleCard Mini */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">FeaturedArticleCard - Mini</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {mockArticles.map((article, index) => (
            <FeaturedArticleCard key={article._id} article={article} mini />
          ))}
        </div>
      </section>

      {/* Demo NewsArticleCard */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">NewsArticleCard - Cải thiện</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockArticles.map((article, index) => (
            <NewsArticleCard key={article._id} article={article} index={index} />
          ))}
        </div>
      </section>

      {/* Demo ArticleList với các columns khác nhau */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">ArticleList - Responsive Grid</h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">2 Columns</h3>
            <ArticleList articles={mockArticles} columns={2} />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">3 Columns (Default)</h3>
            <ArticleList articles={mockArticles} columns={3} />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">4 Columns</h3>
            <ArticleList articles={mockArticles} columns={4} />
          </div>
        </div>
      </section>
    </div>
  )
} 