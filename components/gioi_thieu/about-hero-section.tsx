"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function AboutHeroSection() {
  const router = useRouter()

  const handleExploreMoreClick = () => {
    router.push('/lien-he#contact-form')
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }} />
      <div className="absolute inset-0 z-10 bg-black/60" />
      <div className="container mx-auto max-w-7xl relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            VỀ LIÊN MINH CỘNG ĐỒNG AFFILIATE THỰC CHIẾN
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed font-medium drop-shadow-lg">
            Hơn 10 năm đồng hành cùng doanh nghiệp, chúng tôi tự hào là đối tác tin cậy 
            trong hành trình phát triển và thành công của bạn
          </p>
          <Button 
            size="lg" 
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full"
            onClick={handleExploreMoreClick}
          >
            Khám phá thêm
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 