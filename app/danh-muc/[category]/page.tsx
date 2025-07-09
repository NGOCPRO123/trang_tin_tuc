import { CategoryPage } from "@/components/pages/category-page"

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

export default async function Category({ params }: CategoryPageProps) {
  const { category } = await params;
  return <CategoryPage category={category} />
}
