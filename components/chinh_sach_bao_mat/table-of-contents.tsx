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
    <nav className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-6 mb-8 border border-yellow-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Mục lục</h2>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className="text-left w-full p-2 rounded-lg hover:bg-yellow-100 transition-colors duration-200 text-gray-700 hover:text-gray-900"
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
