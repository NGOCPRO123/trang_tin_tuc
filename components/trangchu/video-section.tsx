"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, Youtube, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function VideoSection() {
  const router = useRouter()

  const handleExploreJourneyClick = () => {
    router.push('/gioi-thieu')
  }

  const handleYouTubeClick = () => {
    window.open('https://www.youtube.com', '_blank')
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Hành trình truyền cảm hứng</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá những câu chuyện đầy cảm hứng và những khoảnh khắc ý nghĩa trong hành trình xây dựng cộng đồng
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Video truyền cảm hứng"
              width={800}
              height={400}
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Video overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>

            {/* Play button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-white transition-all duration-300">
                <Play className="w-8 h-8 text-orange-500 ml-1" fill="currentColor" />
              </div>
            </motion.div>

            {/* Video title overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-2xl font-bold mb-2">Cộng đồng Hạnh phúc - Hành trình 2024</h3>
              <p className="text-white/90">Những khoảnh khắc đáng nhớ trong hành trình xây dựng cộng đồng tử tế</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
        >
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={handleYouTubeClick}
          >
            <Youtube className="mr-2 w-5 h-5" />
            Xem thêm trên YouTube
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
            onClick={handleExploreJourneyClick}
          >
            Khám phá hành trình
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
