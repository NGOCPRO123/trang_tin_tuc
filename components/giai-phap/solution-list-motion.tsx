"use client";
import { motion } from "framer-motion";
import { SolutionCard } from "@/components/giai-phap/solution-card";

export function SolutionListMotion({ baiVietDaXuatBan }: { baiVietDaXuatBan: any[] }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      {baiVietDaXuatBan.length === 0 ? (
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">📰 Chưa có giải pháp nào</h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {baiVietDaXuatBan.map((article, index) => (
            <SolutionCard key={article.id || article._id} article={article} index={index} />
          ))}
        </div>
      )}
    </motion.div>
  );
} 