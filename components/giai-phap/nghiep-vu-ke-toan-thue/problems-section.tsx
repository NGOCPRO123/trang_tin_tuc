import { AlertTriangle, Clock, FileWarning, UserX, TrendingDown } from "lucide-react"

export function ProblemsSection() {
  const problems = [
    {
      icon: Clock,
      title: "Báo cáo luôn trễ hạn",
      description: "Ban lãnh đạo không bao giờ có được số liệu kịp thời để ra quyết định.",
    },
    {
      icon: FileWarning,
      title: "Số liệu không đáng tin cậy",
      description: "Các con số trên báo cáo tài chính và báo cáo quản trị nội bộ không khớp nhau.",
    },
    {
      icon: AlertTriangle,
      title: "Luôn lo lắng mỗi kỳ quyết toán",
      description: "Bạn không chắc chắn về tính hợp lệ của các chi phí và luôn trong tâm thế sẵn sàng bị truy thu thuế.",
    },
    {
      icon: UserX,
      title: "Nhân sự kế toán biến động",
      description: "Kế toán viên nghỉ việc đột ngột, gây gián đoạn và làm thất lạc dữ liệu quan trọng.",
    },
    {
      icon: TrendingDown,
      title: "Chi phí không được tối ưu",
      description: "Bạn cảm thấy mình đang nộp thuế nhiều hơn mức cần thiết nhưng không biết cách tối ưu một cách hợp pháp.",
    },
  ]

  const topProblems = problems.slice(0, 2)
  const bottomProblems = problems.slice(2)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#CCA776] mb-4">Bạn có đang phớt lờ những tín hiệu nguy hiểm này?</h2>
          <p className="text-2xl text-black font-bold max-w-3xl mx-auto">
            Nếu bạn thấy những dấu hiệu này, hệ thống kế toán - thuế của bạn đang cần được <span className="font-black text-[#CCA776]">"cấp cứu"</span>!
          </p>
        </div>
        <div className="flex flex-col items-center gap-8 w-full">
          <div className="flex flex-col sm:flex-row justify-center gap-8 w-full mb-2">
            {topProblems.map((problem, index) => (
              <div
                key={index}
                className="bg-[#CCA776]/10 border border-[#CCA776]/30 rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105 w-full sm:w-[340px] max-w-full"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#CCA776]/30 p-3 rounded-lg flex-shrink-0">
                    <problem.icon className="h-6 w-6 text-[#CCA776]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg md:text-xl text-black mb-2 flex items-center">
                      <span className="text-[#CCA776] mr-2">⚠️</span>
                      {problem.title}
                    </h3>
                    <p className="text-black text-sm font-bold leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-8 w-full">
            {bottomProblems.map((problem, index) => (
              <div
                key={index}
                className="bg-[#CCA776]/10 border border-[#CCA776]/30 rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105 w-full sm:w-[340px] max-w-full"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#CCA776]/30 p-3 rounded-lg flex-shrink-0">
                    <problem.icon className="h-6 w-6 text-[#CCA776]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg md:text-xl text-black mb-2 flex items-center">
                      <span className="text-[#CCA776] mr-2">⚠️</span>
                      {problem.title}
                    </h3>
                    <p className="text-black text-sm font-bold leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-[#CCA776]/30 text-[#CCA776] px-6 py-3 rounded-full font-medium">
            <span className="mr-2">💡</span>
            Đừng lo - HLCC sẽ giúp bạn "giải cứu" hệ thống kế toán - thuế!
          </div>
        </div>
      </div>
    </section>
  )
}
