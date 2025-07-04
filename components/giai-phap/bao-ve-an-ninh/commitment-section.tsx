import { CheckCircle } from "lucide-react"

const commitments = [
  {
    title: "Có hợp đồng pháp lý rõ ràng",
    description: "Ghi nhận nhiệm vụ, ca trực, báo cáo",
  },
  {
    title: "Bảo hiểm trách nhiệm dân sự",
    description: "Trong trường hợp xảy ra sự cố",
  },
  {
    title: "Linh hoạt theo thực tế phát sinh",
    description: "Không tính phí bất hợp lý",
  },
]

export default function CommitmentSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-yellow-100 to-amber-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">🔒 Cam kết rõ ràng</h2>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-yellow-600 text-white p-4">
              <div className="grid md:grid-cols-2 gap-4 font-semibold">
                <div>✅ Cam kết</div>
                <div>Nội dung</div>
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              {commitments.map((commitment, index) => (
                <div key={index} className="p-6">
                  <div className="grid md:grid-cols-2 gap-4 items-start">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <h3 className="font-semibold text-gray-800">{commitment.title}</h3>
                    </div>
                    <p className="text-gray-600">{commitment.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
