import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react"

const securityHoles = [
  {
    title: "Hệ thống giám sát 'có cũng như không'",
    desc: "Camera lắp đặt sai vị trí, chất lượng hình ảnh kém, không có khả năng xem lại khi cần thiết."
  },
  {
    title: "Kiểm soát ra vào lỏng lẻo",
    desc: "Bất kỳ ai cũng có thể tiếp cận các khu vực nhạy cảm như kho hàng, phòng server, phòng lưu trữ tài liệu kế toán."
  },
  {
    title: "Không có kịch bản ứng phó",
    desc: "Khi xảy ra sự cố (cháy nổ, xâm nhập, mất cắp), nhân viên và ban lãnh đạo hoàn toàn bị động, không biết phải làm gì để giảm thiểu thiệt hại."
  },
  {
    title: "Mất mát 'vô hình'",
    desc: "Tài sản không chỉ là máy móc. Việc thất thoát hàng hóa trong kho, mất mát công cụ dụng cụ... đang âm thầm bào mòn lợi nhuận của bạn."
  },
  {
    title: "Rủi ro rò rỉ dữ liệu (nếu có dịch vụ an ninh mạng)",
    desc: "Rò rỉ dữ liệu khách hàng, kế hoạch kinh doanh do hệ thống an ninh mạng yếu kém."
  },
]

export default function SecurityHolesSection() {
  return (
    <section className="py-20 bg-[#CCA776]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-black mb-4">Vấn đề & Giải pháp</h2>
            <p className="text-xl text-black font-bold mb-8">Nhận diện đúng vấn đề – Đưa ra giải pháp tối ưu</p>
          </div>
          <div className="space-y-8">
            {securityHoles.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4 bg-white/80 p-6 rounded-2xl shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-[#CCA776]/30 rounded-full text-[#CCA776] font-bold text-2xl">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-black text-[#CCA776] mb-2">{item.title}</h3>
                  <p className="text-black font-bold">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
