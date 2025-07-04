import { Shield, UserCheck, MessageCircle, Scale } from "lucide-react"

export default function CommitmentSection() {
  const commitments = [
    {
      icon: MessageCircle,
      text: "Không đòi bậy – Không hứa sai",
    },
    {
      icon: UserCheck,
      text: "Không chia sẻ thông tin khách hàng",
    },
    {
      icon: Scale,
      text: "Luôn ưu tiên thương lượng trước khi kiện tụng",
    },
    {
      icon: Shield,
      text: "Tuân thủ nghiêm ngặt quy định pháp luật",
    },
  ]

  return (
    <section className="py-20 bg-white/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-yellow-100 rounded-full px-6 py-2 mb-6">
              <Shield className="w-5 h-5 text-yellow-600" />
              <span className="text-yellow-800 font-semibold">Cam kết của chúng tôi</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Chúng tôi cam kết</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commitments.map((commitment, index) => {
              const IconComponent = commitment.icon
              return (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-white/80 rounded-xl p-6 border border-yellow-200"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-yellow-600" />
                    </div>
                  </div>
                  <div className="text-lg text-gray-700 font-medium">{commitment.text}</div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-8 border border-yellow-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-yellow-700">"Uy tín là tài sản quý giá nhất của chúng tôi."</span>
                <br />
                Mỗi khách hàng tin tưởng là một trách nhiệm mà chúng tôi không bao giờ xem nhẹ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
