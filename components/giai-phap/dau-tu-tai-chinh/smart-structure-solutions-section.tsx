import { useState } from "react"
import { CheckCircle, Repeat2, TrendingUp } from "lucide-react"

const solutions = [
  {
    key: "capital",
    icon: TrendingUp,
    title: "Tối ưu hóa & Huy động Nguồn vốn",
    details: [
      "✅ Huy động vốn đa kênh: Chúng tôi không chỉ tìm một nguồn. Chúng tôi giúp bạn tiếp cận mạng lưới đa dạng từ nhà đầu tư cá nhân, quỹ đầu tư, ngân hàng cho đến các phương án phát hành cổ phiếu, trái phiếu.",
      "✅ Đánh giá & Tái cấu trúc vốn: Phân tích sâu cơ cấu vốn hiện tại của bạn (nợ/vốn chủ sở hữu) để xây dựng một chiến lược tài chính tối ưu, giúp tối đa hóa lợi nhuận và giảm thiểu rủi ro.",
      "✅ Tư vấn tái đầu tư hiệu quả: Giúp bạn sử dụng nguồn vốn mới một cách thông minh nhất, đảm bảo mỗi đồng vốn bỏ ra đều tạo ra giá trị bền vững.",
    ],
  },
  {
    key: "ownership",
    icon: CheckCircle,
    title: "Tái cấu trúc Sở hữu & Mua lại Cổ phần",
    details: [
      "✅ Phân tích & Xây dựng chiến lược sở hữu: 'Soi chiếu' cơ cấu cổ đông, xác định các điểm nghẽn và đề xuất chiến lược mua lại cổ phần để giúp bạn tăng cường quyền kiểm soát một cách hợp pháp và hiệu quả.",
      "✅ Định giá chuyên nghiệp: Thực hiện định giá doanh nghiệp và cổ phần một cách minh bạch, khoa học, làm cơ sở vững chắc cho các cuộc đàm phán mua – bán, đảm bảo lợi ích tối đa cho bạn.",
      "✅ Kết nối Cổ đông Chiến lược: Giúp bạn tìm kiếm và hợp tác với các cổ đông chiến lược mới, những người không chỉ mang đến tiền mà còn cả kinh nghiệm, mạng lưới và giá trị cộng hưởng.",
    ],
  },
  {
    key: "recovery",
    icon: Repeat2,
    title: "Hỗ trợ Khôi phục & 'Hồi sinh' Tài chính",
    details: [
      "✅ Tái cấu trúc nợ thông minh: Xây dựng phương án và trực tiếp đại diện bạn đàm phán với ngân hàng, các chủ nợ để giảm áp lực tài chính, giãn nợ, khoanh nợ.",
      "✅ Quản lý dòng tiền khủng hoảng: Giúp bạn thiết lập một cơ chế quản lý dòng tiền chặt chẽ, tối ưu hóa chi phí vận hành và cải thiện khả năng thanh khoản trong giai đoạn khó khăn nhất.",
      "✅ Huy động vốn 'cứu sinh': Đề xuất các mô hình huy động vốn sáng tạo và linh hoạt, giúp doanh nghiệp có được nguồn lực cần thiết để vượt qua khủng hoảng và tiếp tục tăng trưởng.",
    ],
  },
]

export function SmartStructureSolutionsSection() {
  const [open, setOpen] = useState<string | null>(solutions[0].key)
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-amber-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-yellow-700 mb-4">
            Tối ưu hóa Tài chính – Củng cố Quyền kiểm soát – Đẩy mạnh Tăng trưởng
          </h2>
          <p className="text-xl text-yellow-900 max-w-3xl mx-auto">
            Chúng tôi cung cấp một bộ giải pháp tài chính toàn diện, được "may đo" cho từng giai đoạn và mục tiêu của bạn.
          </p>
        </div>
        {/* Stepper dọc */}
        <div className="flex flex-col gap-10 max-w-2xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-300 via-amber-300 to-yellow-400 rounded-full z-0" />
          {solutions.map((sol, idx) => {
            const Icon = sol.icon
            const isOpen = open === sol.key
            return (
              <div key={sol.key} className={`relative flex items-start gap-6 group transition-all duration-300 ${isOpen ? 'scale-105 z-10' : 'opacity-80'}`}
                style={{ transform: isOpen ? 'skewY(-2deg)' : 'skewY(0deg)' }}
              >
                {/* Số thứ tự và icon */}
                <div className="flex flex-col items-center z-10">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-4 ${isOpen ? 'bg-gradient-to-br from-yellow-200 to-amber-300 border-yellow-400' : 'bg-yellow-100 border-yellow-200'}`}>
                    <Icon className="w-8 h-8 text-yellow-700" />
                  </div>
                  <span className="mt-2 text-yellow-700 font-bold text-lg">{idx + 1}</span>
                </div>
                {/* Card nội dung */}
                <div
                  className={`flex-1 bg-white border-2 border-yellow-200 rounded-xl shadow-xl px-8 py-6 cursor-pointer transition-all duration-300 ${isOpen ? 'shadow-amber-200' : ''}`}
                  onClick={() => setOpen(isOpen ? null : sol.key)}
                >
                  <h3 className="text-xl font-bold text-yellow-800 mb-2">{sol.title}</h3>
                  <ul className={`text-yellow-900 space-y-2 text-base transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                    style={{ transition: 'all 0.4s cubic-bezier(.4,2,.6,1)' }}
                  >
                    {sol.details.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 