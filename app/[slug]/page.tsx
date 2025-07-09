import { ArticleDetailPage } from "@/components/pages/article-detail-page"

interface ArticleDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ArticleDetail({ params }: ArticleDetailPageProps) {
  const { slug } = await params
  return <ArticleDetailPage articleId={slug} />
} 