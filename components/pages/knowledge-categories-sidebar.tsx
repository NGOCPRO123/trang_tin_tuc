import Link from "next/link";
import useSWR from "swr";
import { Newspaper, Trophy, DollarSign } from "lucide-react";
import { Loading } from "@/components/ui/loading";

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
  if (isLoading) return <Loading size="sm" variant="dots" />;
  return (
    <ul className="space-y-3">
      {categories.map((cat) => {
        const Icon = categoryIcons[cat as keyof typeof categoryIcons] as React.ElementType;
        const slug = categorySlugs[cat as keyof typeof categorySlugs];
        const count = categoryCounts[cat] || 0;
        return (
          <li key={cat} className="border-b border-[#CCA776]/30 last:border-b-0 pb-2">
            <Link href={`/danh-muc/${slug}`} className="flex items-center gap-2 hover:text-[#CCA776] transition font-bold text-black">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white border border-[#CCA776]/30"><Icon className="w-4 h-4 text-[#CCA776]" /></span>
              <span className="flex-1">{cat}</span>
              <span className="text-xs bg-white border border-[#CCA776]/30 text-[#CCA776] rounded-full px-2 py-0.5 ml-2">{count}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
} 