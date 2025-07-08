import { AlertTriangle } from "lucide-react"

export default function ProblemSection() {
  const mistakes = [
    {
      title: "Thiếu quy trình chuyên nghiệp",
      description:
        "Việc đòi nợ cảm tính, lúc mềm mỏng, lúc cứng rắn không nhất quán khiến đối tác 'nhờn thuốc'.",
    },
    {
      title: "Không có cơ sở pháp lý vững chắc",
      description:
        "Hợp đồng lỏng lẻo, thiếu chứng từ khiến bạn yếu thế khi cần đến các biện pháp mạnh.",
    },
    {
      title: "Ngại ngần, sợ mất lòng",
      description:
        "Lo sợ việc đòi nợ sẽ làm hỏng mối quan hệ kinh doanh, dẫn đến việc chần chừ và để khoản nợ trở thành nợ xấu.",
    },
    {
      title: "Sử dụng các biện pháp tiêu cực",
      description:
        "Các hành động thiếu chuyên nghiệp không chỉ không thu được tiền mà còn làm tổn hại nghiêm trọng đến uy tín thương hiệu của bạn.",
    },
  ]

  return (
    <section className="py-20 bg-white/60 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-black text-center text-yellow-700 mb-4">
            Những Sai lầm Chết người khi Tự đi Đòi nợ
          </h2>
          <p className="text-xl text-center text-gray-700 mb-12">
            Bạn có đang vô tình khiến khoản nợ trở nên khó đòi hơn?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {mistakes.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 bg-white rounded-xl p-6 border-l-4 border-yellow-400 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-7 h-7 text-yellow-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-yellow-700 mb-1 flex items-center">
                    <span className="mr-2">⚠️</span>{item.title}
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

