import { Brain, Clock, Puzzle, Zap } from "lucide-react"

export function ProblemsSection() {
  const problems = [
    {
      icon: Brain,
      title: "Đuối sức với 'ma trận' số liệu",
      description: "Mỗi tháng như lạc vào mê cung Excel, không biết con số nào quan trọng nhất",
    },
    {
      icon: Clock,
      title: "Chạy đua với thời gian nộp thuế",
      description: "Cứ cuối tháng là thức trắng đêm, sợ nhầm lẫn một con số nào đó",
    },
    {
      icon: Puzzle,
      title: "Bỏ lỡ 'kho báu' tiết kiệm thuế",
      description: "Biết có những khoản được khấu trừ nhưng không biết cách 'khai thác'",
    },
    {
      icon: Zap,
      title: "Hoảng loạn khi thuế vụ gọi tên",
      description: "Tim đập thình thịch mỗi khi có cuộc gọi từ cơ quan thuế",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Những "Cơn Ác Mộng" Quen Thuộc</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bạn có từng trải qua những khoảnh khắc "muốn khóc" này không?
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-100 rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                  <problem.icon className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="text-red-500 mr-2">😰</span>
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 px-6 py-3 rounded-full font-medium">
            <span className="mr-2">💡</span>
            Đừng lo - chúng tôi đã "giải mã" tất cả những bài toán này
          </div>
        </div>
      </div>
    </section>
  )
}
