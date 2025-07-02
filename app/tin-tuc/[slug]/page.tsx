import { notFound } from "next/navigation";
import { ArticleDetailPage } from "@/components/pages/article-detail-page";

interface Props {
  params: { slug: string }
}

async function getArticleBySlug(slug: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://baolocmarket.vn";
  const res = await fetch(`${baseUrl}/api/articles`, { cache: "no-store" });
  const articles = await res.json();
  return articles.find((a: any) => a.slug === slug);
}

export default async function ArticleBySlugPage({ params }: Props) {
  const article = await getArticleBySlug(params.slug);
  if (!article) return notFound();
  return <ArticleDetailPage articleId={article._id || article.id} />;
} 