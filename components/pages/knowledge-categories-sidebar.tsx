import Link from "next/link";
import useSWR from "swr";
import { Newspaper, Trophy, DollarSign } from "lucide-react";

const categoryIcons = {
  "Quản trị doanh nghiệp": Newspaper,
  "Giải pháp doanh nghiệp": Trophy,
  "Phát triển bền vững": DollarSign,
};
const categorySlugs = {
  "Quản trị doanh nghiệp": "quan-tri-doanh-nghiep",
  "Giải pháp doanh nghiệp": "giai-phap-doanh-nghiep",
  "Phát triển bền vững": "phat-trien-ben-vung",
};
const fetcher = (url: string) => fetch(url).then(res => res.json());

export function KnowledgeCategoriesSidebar() {
  const { data: articles = [], isLoading } = useSWR("/api/articles", fetcher);
  // Lọc bài viết kiến thức
  const filtered = articles.filter((a: any) => a.type === "kien-thuc");
  // Đếm số bài theo category
  const categoryCounts = filtered.reduce((acc: Record<string, number>, a: any) => {
    acc[a.category] = (acc[a.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  const categories = Object.keys(categoryIcons);
  if (isLoading) return <div>Đang tải...</div>;
  return (
    <ul className="space-y-3">
      {categories.map((cat) => {
        const Icon = categoryIcons[cat as keyof typeof categoryIcons] as React.ElementType;
        const slug = categorySlugs[cat as keyof typeof categorySlugs];
        const count = categoryCounts[cat] || 0;
        return (
          <li key={cat}>
            <Link href={`/danh-muc/${slug}`} className="flex items-center gap-2 hover:text-yellow-700 transition font-medium">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-100 text-yellow-700"><Icon className="w-4 h-4" /></span>
              <span className="flex-1">{cat}</span>
              <span className="text-xs bg-yellow-200 text-yellow-800 rounded-full px-2 py-0.5 ml-2">{count}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
} 