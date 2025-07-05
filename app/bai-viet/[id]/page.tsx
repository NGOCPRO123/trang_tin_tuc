import { redirect } from 'next/navigation'

interface ArticleDetailPageProps {
  params: {
    id: string
  }
}

export default function ArticleDetail({ params }: ArticleDetailPageProps) {
  // Redirect từ URL cũ sang URL mới
  redirect(`/${params.id}`)
}
