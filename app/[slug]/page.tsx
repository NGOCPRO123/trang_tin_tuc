import { ArticleDetailPage } from "@/components/pages/article-detail-page"

interface ArticleDetailPageProps {
  params: {
    slug: string
  }
}

export default function ArticleDetail({ params }: ArticleDetailPageProps) {
  return <ArticleDetailPage articleId={params.slug} />
} 