import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import { Loading } from "@/components/ui/loading";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function RecentPostsSidebar() {
  const { data: articles = [], isLoading } = useSWR("/api/articles", fetcher);
  // Lấy 5 bài mới nhất
  const recent = [...articles]
    .filter((a: any) => a.status === "published")
    .sort((a: any, b: any) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 5);
  if (isLoading) return <Loading size="sm" variant="dots" />;
  return (
    <ul className="space-y-4">
      {recent.map((post: any) => (
        <li key={post._id} className="flex gap-3 border-b border-[#CCA776]/30 pb-3 last:border-b-0 last:pb-0">
          <Link href={`/${post.slug || post._id}`} className="flex-shrink-0">
            <Image
              src={post.image || post.featuredImage || "/placeholder.svg"}
              alt={post.title}
              width={60}
              height={60}
              className="rounded object-cover w-[60px] h-[60px]"
            />
          </Link>
          <div className="flex-1 min-w-0">
            <Link href={`/${post.slug || post._id}`} className="font-bold text-sm line-clamp-2 text-black hover:text-[#CCA776] transition">
              {post.title}
            </Link>
            <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{post.summary || ""}</div>
          </div>
        </li>
      ))}
    </ul>
  );
} 