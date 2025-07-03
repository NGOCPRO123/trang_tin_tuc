export interface Article {
  id: string
  _id?: string
  title: string
  slug: string
  content: string
  summary: string
  category: string
  tags: string[]
  author: string
  status: "draft" | "pending" | "published" | "private"
  publishedAt: string
  scheduledDate?: string
  featuredImage: string
  altText: string
  metaTitle: string
  metaDescription: string
  canonicalUrl: string
  noIndex: boolean
  noFollow: boolean
  ogTitle: string
  ogDescription: string
  ogImage: string
  viewCount: number
  video?: string
  image?: string
  keywords?: string[]
  type?: "article" | "giai-phap" | "kien-thuc"
}
