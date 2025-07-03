"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MainLayout } from "@/components/layout/main-layout"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { CategoriesSection } from "@/components/sections/categories-section"
import { FeaturedArticleCard } from "@/components/articles/featured-article-card"
import { NewsArticleCard } from "@/components/articles/news-article-card"
import { useArticles } from "@/contexts/article-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BackToTop } from "@/components/ui/back-to-top"
import { Newspaper, ChevronDown, Plus } from "lucide-react"
import useSWR from "swr"
import { removeVietnameseTones } from "@/lib/utils"

const fetcher = (url: string) => fetch(url).then(res => res.json())

// Hàm chuyển status sang tiếng Việt
function hienThiTrangThai(status: string) {
  switch (status) {
    case "published": return "Đã xuất bản";
    case "scheduled": return "Đã lên lịch";
    case "draft": return "Bản nháp";
    case "pending": return "Chờ duyệt";
    case "private": return "Riêng tư";
    default: return status;
  }
}

function KnowledgeHomePage({ articles }: { articles: any[] }) {
  // Lọc các bài viết đã xuất bản, đã đến giờ đăng
  const thoiGianHienTai = new Date();
  const baiVietDaXuatBan = articles.filter(baiViet =>
    baiViet.status === "published" &&
    (!baiViet.scheduledDate || new Date(baiViet.scheduledDate) <= thoiGianHienTai)
  );
  // Danh mục kiến thức
  const categories = [
    {
      name: "Quản trị Doanh nghiệp",
      desc: "Kiến thức về quản lý, vận hành, phát triển doanh nghiệp hiệu quả.",
      bg: "bg-yellow-50",
      icon: "📊"
    },
    {
      name: "Phát triển Doanh nghiệp",
      desc: "Chiến lược, kinh nghiệm giúp doanh nghiệp tăng trưởng bền vững.",
      bg: "bg-yellow-50",
      icon: "🚀"
    },
    {
      name: "Tài chính - Kế toán - Thuế",
      desc: "Kiến thức về tài chính, kế toán, thuế dành cho doanh nghiệp và cá nhân.",
      bg: "bg-yellow-50",
      icon: "💰"
    },
    {
      name: "Pháp lý & Rủi ro",
      desc: "Cập nhật pháp luật, quản trị rủi ro, bảo vệ doanh nghiệp.",
      bg: "bg-yellow-50",
      icon: "⚖️"
    },
    {
      name: "Tài nguyên tải về",
      desc: "Tổng hợp tài liệu, biểu mẫu, file hữu ích cho doanh nghiệp.",
      bg: "bg-yellow-50",
      icon: "📂"
    }
  ];
  // Gom bài viết theo category
  const articlesByCategory: Record<string, any[]> = {};
  baiVietDaXuatBan.forEach(article => {
    if (!articlesByCategory[article.category]) articlesByCategory[article.category] = [];
    articlesByCategory[article.category].push(article);
  });
  return (
    <MainLayout>
      {/* Hero Section riêng */}
      <section className="relative min-h-[70vh] py-16 bg-yellow-50 overflow-hidden flex items-center">
        {/* Background image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img src="/anh_trangchu.jpg" alt="background" className="w-full h-full object-cover object-center opacity-60" />
        </div>
        <div className="container relative z-10 flex flex-col justify-center items-center h-full">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-extrabold text-yellow-800 mb-4 flex items-center justify-center gap-2 text-center">
              <span>📖</span> Chào mừng đến với Kho Kiến Thức
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }}
              className="text-lg md:text-xl text-yellow-700 mb-6 max-w-2xl mx-auto text-center">
              Nơi tổng hợp các chủ đề, bài viết hữu ích giúp doanh nghiệp và cá nhân phát triển bền vững.
            </motion.p>
          </div>
        </div>
      </section>
      {/* Sectioned Categories */}
      {categories.map((cat, idx) => (
        <section key={cat.name} className={`py-12 ${cat.bg}`}>
          <div className="container">
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-900 flex items-center justify-center gap-2 mb-2">
                <span>{cat.icon}</span> {cat.name}
              </h2>
              <p className="text-yellow-700 text-base md:text-lg max-w-2xl mx-auto">{cat.desc}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(articlesByCategory[cat.name] || []).length === 0 ? (
                <div className="col-span-full text-center text-gray-400 italic">Chưa có bài viết nào</div>
              ) : (
                articlesByCategory[cat.name].map((article, index) => (
                  <NewsArticleCard key={article.id || article._id} article={article} index={index} />
                ))
              )}
            </div>
          </div>
        </section>
      ))}
      {/* Categories Section cuối trang */}
      <CategoriesSection type="kien-thuc" />
      <BackToTop />
    </MainLayout>
  );
}

export function HomePage({ type }: { type?: "giai-phap" | "kien-thuc" }) {
  const { data: articles = [], isLoading } = useSWR("/api/articles", fetcher)
  const [allVisibleCount, setAllVisibleCount] = useState(9)
  const [latestVisibleCount, setLatestVisibleCount] = useState(6)
  const [search, setSearch] = useState("")

  // Hàm lọc bài viết theo nhiều trường, không phân biệt hoa thường, có dấu/không dấu
  const filterArticles = (list: any[]) => {
    if (!search.trim()) return list
    const q = removeVietnameseTones(search.toLowerCase())
    return list.filter(article => {
      const fields = [article.title, article.category, article.author, article.summary, article.content]
        .map(x => removeVietnameseTones((x || "").toLowerCase()))
      return fields.some(f => f.includes(q))
    })
  }

  const filteredArticles = filterArticles(articles)

  const loadMoreAll = () => setAllVisibleCount((prev) => Math.min(prev + 9, articles.length))
  const loadMoreLatest = () => setLatestVisibleCount((prev) => Math.min(prev + 6, articles.length))

  // Lọc các bài viết đã xuất bản, đã đến giờ đăng và đúng type nếu có
  const thoiGianHienTai = new Date();
  const baiVietDaXuatBan = filteredArticles.filter(baiViet =>
    baiViet.status === "published" &&
    (!baiViet.scheduledDate || new Date(baiViet.scheduledDate) <= thoiGianHienTai) &&
    (!type || baiViet.type === type)
  );

  // Tin nổi bật: 5 bài có lượt xem cao nhất
  const tinNoiBat = [...baiVietDaXuatBan]
    .sort((a, b) => (b.viewCount || 0) - (a.viewCount || 0))
    .slice(0, 5);
  // Tin mới nhất: sắp xếp theo ngày đăng
  const tatCaTinMoiNhat = [...baiVietDaXuatBan]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  const tinMoiNhat = tatCaTinMoiNhat.slice(0, latestVisibleCount);

  const tatCaBaiVietHienThi = baiVietDaXuatBan.slice(0, allVisibleCount);
  const conThemAll = allVisibleCount < baiVietDaXuatBan.length;
  const conThemMoiNhat = latestVisibleCount < tatCaTinMoiNhat.length;

  if (type === "kien-thuc") {
    if (isLoading) return <div className="text-center py-16">Đang tải dữ liệu...</div>;
    return <KnowledgeHomePage articles={articles.filter((a: any) => a.type === "kien-thuc")} />;
  }

  if (isLoading) return <div className="text-center py-16">Đang tải dữ liệu...</div>
  return (
    <MainLayout>
      {/* Hero Section */}
      <HeroSection onSearch={setSearch} />

      {/* Why Choose Us Section */}
      {/* <WhyChooseUsSection /> */}

      {/* Features Section */}
      <FeaturesSection />

      {/* News Section */}
      <section id="news-section" className="py-16 bg-yellow-50">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {articles.length === 0 ? (
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">📰 Tin tức mới nhất</h2>
                <Card className="text-center py-16 bg-yellow-50 border-dashed border-2">
                  <CardContent>
                    <Newspaper className="h-20 w-20 mx-auto mb-6 text-gray-400" />
                    <h3 className="text-2xl font-semibold mb-4 text-gray-600">Chưa có bài viết nào</h3>
                    <p className="text-gray-500 text-lg mb-6 max-w-md mx-auto">
                      Hãy vào trang quản trị để thêm những bài viết đầu tiên và tạo nên trang tin tức chuyên nghiệp!
                    </p>
                    <Button asChild size="lg">
                      <a href="/admin">
                        <Plus className="h-5 w-5 mr-2" />
                        Thêm bài viết đầu tiên
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <>
                {/* Featured News Section */}
                {tinNoiBat.length > 0 && (
                  <div className="mb-16" id="featured-section">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">🔥 Tin nổi bật</h2>
                      <p className="text-gray-600">Những tin tức được quan tâm nhất hiện tại</p>
                      <div className="w-20 h-1 bg-gradient-to-r from-yellow-300 to-yellow-100 mx-auto mt-3 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Spotlight lớn cho bài đầu */}
                      <div className="lg:col-span-2">
                        <FeaturedArticleCard article={tinNoiBat[0]} spotlight />
                      </div>
                      {/* 4 bài mini card */}
                      <div className="flex flex-col gap-6">
                        {tinNoiBat.slice(1, 5).map((article: any, index: number) => (
                          <FeaturedArticleCard key={`${article.id || article._id}-featured-mini-${index}`} article={article} mini />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Latest News Section */}
                {tinMoiNhat.length > 0 && (
                  <div>
                    <div className="text-center mb-8">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">🆕 Tin tức mới nhất</h2>
                      <p className="text-gray-600">Cập nhật mỗi ngày — chọn lọc những nội dung đáng chú ý nhất</p>
                      <div className="w-20 h-1 bg-gradient-to-r from-yellow-300 to-yellow-100 mx-auto mt-3 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                      {tinMoiNhat.map((article: any, index: number) => (
                        <NewsArticleCard key={`${article.id || article._id}-latest-${index}`} article={article} index={index} />
                      ))}
                    </div>
                    {conThemMoiNhat && (
                      <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Button
                          onClick={loadMoreLatest}
                          size="lg"
                          className="px-8 py-3 text-base font-semibold bg-yellow-400 hover:bg-yellow-500 text-yellow-900"
                        >
                          Xem thêm tin tức mới nhất
                          <ChevronDown className="ml-2 h-5 w-5 text-yellow-700" />
                        </Button>
                        <p className="text-sm text-gray-500 mt-3">
                          Hiển thị {Math.min(latestVisibleCount, tatCaTinMoiNhat.length)} / {tatCaTinMoiNhat.length} bài viết mới nhất
                        </p>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* All Other Articles Section */}
                {articles.length > 0 && (
                  <div id="all-articles-section">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">📚 Tất cả các bài viết</h2>
                      <p className="text-gray-600">Danh sách toàn bộ bài viết trên hệ thống</p>
                      <div className="w-20 h-1 bg-gradient-to-r from-yellow-300 to-yellow-100 mx-auto mt-3 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                      {tatCaBaiVietHienThi.map((article: any, index: number) => (
                        <NewsArticleCard key={`${article.id || article._id}-all-${index}`} article={article} index={index} />
                      ))}
                    </div>
                    {conThemAll && (
                      <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Button
                          onClick={loadMoreAll}
                          size="lg"
                          className="px-8 py-3 text-base font-semibold bg-yellow-400 hover:bg-yellow-500 text-yellow-900"
                        >
                          Xem thêm bài viết
                          <ChevronDown className="ml-2 h-5 w-5 text-yellow-700" />
                        </Button>
                        <p className="text-sm text-gray-500 mt-3">
                          Hiển thị {Math.min(allVisibleCount, articles.length)} / {articles.length} bài viết
                        </p>
                      </motion.div>
                    )}
                  </div>
                )}
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <CategoriesSection type={type} />

      {/* Back to Top Button */}
      <BackToTop />
    </MainLayout>
  )
}
