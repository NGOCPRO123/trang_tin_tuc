import { MainLayout } from "@/components/layout/main-layout";
import { FeaturesSection } from "@/components/giai-phap/features-section";
import { NewsArticleCard } from "@/components/articles/news-article-card";
import { CategoriesSection } from "@/components/giai-phap/categories-section";
import { BackToTop } from "@/components/ui/back-to-top";
import { SolutionCard } from "@/components/giai-phap/solution-card";
import { SolutionListMotion } from "./solution-list-motion";

export function SolutionListPage({ articles }: { articles: any[] }) {
  // Lọc các bài viết đã xuất bản, đã đến giờ đăng
  const thoiGianHienTai = new Date();
  const baiVietDaXuatBan = articles.filter(baiViet =>
    baiViet.status === "published" &&
    (!baiViet.scheduledDate || new Date(baiViet.scheduledDate) <= thoiGianHienTai)
  );

  return (
    <MainLayout>
      {/* Features Section */}
      <FeaturesSection />
      {/* News Section */}
      <section id="news-section" className="py-16 bg-yellow-50">
        <div className="container">
          <SolutionListMotion baiVietDaXuatBan={baiVietDaXuatBan} />
        </div>
      </section>
      <CategoriesSection type="giai-phap" />
      <BackToTop />
    </MainLayout>
  );
} 