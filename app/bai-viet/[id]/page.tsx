import { redirect } from 'next/navigation'

interface ArticleDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ArticleDetail({ params }: ArticleDetailPageProps) {
  // Redirect từ URL cũ sang URL mới
  const { id } = await params;
  redirect(`/${id}`)
}
