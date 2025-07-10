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

        <nav className="space-y-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`block px-4 py-2 rounded-lg font-bold transition-colors flex items-center gap-2
                ${activeSection === section.id
                  ? "bg-[#CCA776]/20 text-[#CCA776]"
                  : "text-black hover:bg-[#CCA776]/10 hover:text-[#CCA776]"}
              `}
            >
              <span className="inline-block w-8 h-8 flex items-center justify-center rounded-full bg-[#CCA776]/20 text-[#CCA776] font-black mr-2">{section.number}</span>
              {section.title}
            </a>
          ))}
        </nav>
      </div>
    </nav>
  )
}
