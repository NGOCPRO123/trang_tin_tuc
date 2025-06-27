import { CategoryPage } from "@/components/pages/category-page"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function Category({ params }: CategoryPageProps) {
  return <CategoryPage category={params.category} />
}
