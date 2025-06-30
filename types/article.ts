export interface Article {
  id: string
  title: string
  summary: string
  content: string
  category: string
  image: string
  video?: string
  author: string
  publishedAt: string
  viewCount: number
  _id?: string
}
