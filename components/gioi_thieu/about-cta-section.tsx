"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function AboutCTASection() {
  const router = useRouter()

  const handleContactClick = () => {
    router.push('/lien-he#contact-form')
  }

  const handleLearnMoreClick = () => {
    router.push('/gioi-thieu')
  }

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Image with Blur Effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80')`,
            filter: "blur(2px)",
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-10">
        {/* Floating geometric shapes */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full backdrop-blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full backdrop-blur-sm"
        />
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-2xl">
            Sẵn sàng đồng hành cùng chúng tôi?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Hãy cùng chúng tôi tạo ra những giá trị bền vững và xây dựng 
            một cộng đồng affiliate marketing mạnh mẽ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 font-bold group relative overflow-hidden border-0"
                onClick={handleContactClick}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10">Liên hệ ngay</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg rounded-full backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                onClick={handleLearnMoreClick}
              >
                Tìm hiểu thêm
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 