"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, TrendingUp } from "lucide-react"

export function CreativeHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-xl shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-[#CCA776] via-[#CCA776]/90 to-[#CCA776]/80 rounded-2xl rotate-12 shadow-lg"></div>
              <TrendingUp className="absolute inset-0 m-auto w-6 h-6 text-white -rotate-12" />
            </div>
            <div>
              <h1 className="text-2xl font-black bg-gradient-to-r from-[#CCA776] to-[#CCA776]/80 bg-clip-text text-transparent">
                WEALTH.CRAFT
              </h1>
              <p className="text-xs text-gray-500 font-medium tracking-wider">INVESTMENT ARTISTRY</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="text-sm text-black">
              <span className="font-bold">Hotline:</span>
              <span className="ml-2 font-mono">0901.234.567</span>
            </div>
            <Button className="bg-gradient-to-r from-[#CCA776] to-[#CCA776]/80 hover:from-[#CCA776]/80 hover:to-[#CCA776] text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <MessageCircle className="w-4 h-4 mr-2" />
              Trò chuyện ngay
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
