import { CheckCircle, FileText, MessageSquare, Scale, Gavel } from "lucide-react"

export default function SolutionSection() {
  const solutions = [
    {
      icon: MessageSquare,
      title: "Nhắc nợ có kỹ thuật",
      description: "Không đe dọa nhưng khiến bên kia không thoải mái khi trì hoãn",
    },
    {
      icon: FileText,
      title: "Rà soát chứng từ",
      description: "Bạn có đủ căn cứ pháp lý hay không",
    },
    {
      icon: Scale,
      title: "Lập phương án",
      description: "Thương lượng, trả góp, ràng buộc pháp luật",
    },
    {
      icon: Gavel,
      title: "Chuẩn bị hồ sơ",
      description: "Nếu cần: Khởi kiện và thi hành án",
    },
  ]

  return (
    <section id="dich-vu" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-100 rounded-full px-6 py-2 mb-6">
              <span className="text-yellow-800 font-semibold">Chúng tôi làm gì?</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-yellow-600">"</span>Chúng tôi không làm phép.
              <br />
              Chúng tôi làm việc.<span className="text-yellow-600">"</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon
              return (
                <div
                  key={index}
                  className="bg-white/80 rounded-2xl p-8 border border-yellow-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-yellow-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{solution.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-8 border-l-4 border-yellow-400">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-8 h-8 text-yellow-600" />
              </div>
              <div>
                <p className="text-lg text-gray-800 font-semibold mb-2">Lưu ý quan trọng:</p>
                <p className="text-gray-700">
                  Chúng tôi chỉ làm nợ thật – có chứng từ – có căn cứ.
                  <span className="font-semibold"> Không xử lý các khoản mập mờ.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
