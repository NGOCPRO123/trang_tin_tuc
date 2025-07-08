"use client"

import { useState, useEffect } from "react"

export default function SidebarNavigation() {
  const [activeSection, setActiveSection] = useState("commitment")

  const sections = [
    { id: "commitment", title: "Cam kết", number: "01" },
    { id: "data-collection", title: "Thu thập dữ liệu", number: "02" },
    { id: "data-usage", title: "Sử dụng thông tin", number: "03" },
    { id: "data-sharing", title: "Chia sẻ thông tin", number: "04" },
    { id: "data-security", title: "Bảo mật dữ liệu", number: "05" },
    { id: "user-rights", title: "Quyền của bạn", number: "06" },
    { id: "contact", title: "Liên hệ", number: "07" },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      let current = ""

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section.id
        }
      })

      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="sticky top-8 w-64 h-fit hidden lg:block">
      <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Nội dung</h3>

        <div className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left p-3 rounded-xl transition-all duration-300 group ${
                activeSection === section.id
                  ? "bg-gradient-to-r from-yellow-400/20 to-amber-400/20 border-l-4 border-yellow-500"
                  : "hover:bg-yellow-50/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`text-xs font-bold px-2 py-1 rounded-full transition-colors ${
                    activeSection === section.id
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-200 text-gray-600 group-hover:bg-yellow-200"
                  }`}
                >
                  {section.number}
                </span>
                <span
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section.id ? "text-yellow-700" : "text-gray-600"
                  }`}
                >
                  {section.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
