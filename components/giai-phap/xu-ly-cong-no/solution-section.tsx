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
            <div className="inline-block bg-[#CCA776]/30 rounded-full px-6 py-2 mb-6">
              <span className="text-[#CCA776] font-semibold">Chúng tôi làm gì?</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-extrabold text-black mb-6">
              <span className="text-[#CCA776] font-black">"</span>Chúng tôi không làm phép.
              <br />
              Chúng tôi làm việc.<span className="text-[#CCA776] font-black">"</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon
              return (
                <div
                  key={index}
                  className="bg-white/80 rounded-2xl p-8 border border-[#CCA776]/30 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-[#CCA776]/30 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-[#CCA776]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-black mb-3">{solution.title}</h3>
                      <p className="text-black font-bold leading-relaxed">{solution.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="bg-[#CCA776]/10 rounded-2xl p-8 border-l-4 border-[#CCA776]">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-8 h-8 text-[#CCA776]" />
              </div>
              <div>
                <p className="text-lg text-black font-bold mb-2">Lưu ý quan trọng:</p>
                <p className="text-black font-bold">
                  Chúng tôi chỉ làm nợ thật – có chứng từ – có căn cứ.
                  <span className="font-black"> Không xử lý các khoản mập mờ.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
