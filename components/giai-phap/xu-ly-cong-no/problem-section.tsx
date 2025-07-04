import { AlertTriangle, Phone, Clock, Users } from "lucide-react"

export default function ProblemSection() {
  const problems = [
    {
      icon: AlertTriangle,
      text: "Bạn ngại làm lớn chuyện?",
    },
    {
      icon: Clock,
      text: "Bạn không biết bắt đầu từ đâu?",
    },
    {
      icon: Phone,
      text: 'Bạn gọi hoài mà họ "đang kẹt tiền"?',
    },
    {
      icon: Users,
      text: "Bạn không muốn mất khách nên... cứ để đó?",
    },
  ]

  return (
    <section className="py-20 bg-white/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
            Tại sao bạn chưa thu được nợ?
          </h2>

          <p className="text-xl text-center text-gray-600 mb-12">Hãy thẳng thắn với chính mình</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {problems.map((problem, index) => {
              const IconComponent = problem.icon
              return (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-white/80 rounded-xl p-6 border border-yellow-200 shadow-sm"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-yellow-600" />
                    </div>
                  </div>
                  <div className="text-lg text-gray-700 font-medium">{problem.text}</div>
                </div>
              )
            })}
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border-l-4 border-red-400">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-bold">👉</span>
                </div>
              </div>
              <div>
                <p className="text-lg text-gray-800 font-semibold mb-2">
                  Trong khi đó, người nợ bạn vẫn sống bình thường
                </p>
                <p className="text-gray-700">– và có thể nợ cả chục người như bạn.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
