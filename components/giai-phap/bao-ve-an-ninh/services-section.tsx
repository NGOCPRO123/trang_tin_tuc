import { CheckCircle } from "lucide-react"

const services = [
  "Bố trí lực lượng theo mô hình thực tế",
  "Kiểm tra – tuần tra – báo cáo ca trực định kỳ",
  "Can thiệp sự cố, xử lý tình huống bất ngờ",
  "Giữ gìn tài sản, kiểm soát xuất nhập",
  "Hỗ trợ camera, giám sát từ xa nếu cần",
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">⚙️ Chúng tôi làm gì cho bạn?</h2>
          <p className="text-lg text-gray-600 mb-12 text-center">Trình bày thật, không khoa trương</p>

          <div className="bg-yellow-50 rounded-lg p-8">
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
