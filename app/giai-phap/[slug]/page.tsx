import { notFound } from "next/navigation";
import { SolutionDetailPage } from "@/components/giai-phap/solution-detail-page";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/trangchu/footer";
import { BlogSection } from "@/components/giai-phap/sections/blog-section";
import { ClientsSection } from "@/components/giai-phap/sections/clients-section";
import { HeroSection } from "@/components/giai-phap/sections/hero-section";
import { IntroSection } from "@/components/giai-phap/sections/intro-section";
import { ServicesSection } from "@/components/giai-phap/sections/services-section";

interface Props {
  params: { slug: string }
}

async function getArticleBySlug(slug: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://baolocmarket.vn";
  const res = await fetch(`${baseUrl}/api/articles`, { cache: "no-store" });
  const articles = await res.json();
  return articles.find((a: any) => a.slug === slug);
}

export default async function GiaiPhapBySlugPage({ params }: Props) {
  const article = await getArticleBySlug(params.slug);
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-amber-50">
      <Header />
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <ClientsSection />
      <BlogSection />
      {article ? <SolutionDetailPage articleId={article._id || article.id} /> : <div className="text-center text-red-500 py-10">Không tìm thấy bài viết phù hợp.</div>}
      <Footer />
    </div>
  );
} 