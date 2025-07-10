"use client"

export default function TableOfContents() {
  const sections = [
    { id: "commitment", title: "1. Cam kết của chúng tôi" },
    { id: "data-collection", title: "2. Các loại thông tin chúng tôi thu thập" },
    { id: "data-usage", title: "3. Chúng tôi sử dụng thông tin của bạn như thế nào?" },
    { id: "data-sharing", title: "4. Việc chia sẻ thông tin của bạn" },
    { id: "data-security", title: "5. An toàn dữ liệu của bạn" },
    { id: "user-rights", title: "6. Quyền của bạn đối với thông tin cá nhân" },
    { id: "contact", title: "7. Liên hệ với chúng tôi" },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-6 mb-8 border border-[#CCA776]/50">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Mục lục</h2>
      <nav className="space-y-2">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="block px-4 py-2 rounded-lg font-bold text-black hover:bg-[#CCA776]/10 hover:text-[#CCA776] transition-colors"
          >
            {section.title}
          </a>
        ))}
      </nav>
    </nav>
  )
}
