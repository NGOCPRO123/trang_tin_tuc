import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { CheckCircle } from "lucide-react"

const layers = [
  {
    title: "Lắp đặt Hệ thống Giám sát An ninh Thông minh (CCTV & Alarms)",
    desc: "Chúng tôi không chỉ bán camera. Chúng tôi thiết kế một 'mạng lưới mắt thần' dựa trên việc khảo sát kỹ lưỡng layout và các điểm yếu của cơ sở. Hệ thống bao gồm camera CCTV độ nét cao, có khả năng quan sát ban đêm, kết hợp với hệ thống cảnh báo xâm nhập, báo khói, báo cháy thông minh.",
    benefit: "Giám sát toàn diện, ghi lại bằng chứng rõ ràng, và cảnh báo tức thì khi có sự cố."
  },
  {
    title: "Thiết lập Hệ thống Kiểm soát Ra vào (Access Control)",
    desc: "Ai được vào? Vào khi nào? Và vào đâu? Chúng tôi giúp bạn trả lời những câu hỏi đó bằng các giải pháp kiểm soát truy cập hiện đại: từ thẻ từ, vân tay, đến nhận diện khuôn mặt. Phân quyền chi tiết cho từng cá nhân, từng khu vực.",
    benefit: "Ngăn chặn tuyệt đối việc xâm nhập trái phép vào các khu vực trọng yếu, kiểm soát lịch sử ra vào một cách chính xác."
  },
  {
    title: "Bảo vệ Chuyên biệt cho các Khu vực Trọng yếu",
    desc: "Kho bãi chứa hàng hóa giá trị cao, phòng máy chủ chứa 'bộ não' của công ty, phòng R&D chứa bí mật kinh doanh... những khu vực này cần một lớp bảo vệ đặc biệt. Chúng tôi thiết kế các giải pháp riêng biệt, kết hợp nhiều công nghệ để đảm bảo an ninh cấp cao nhất.",
    benefit: "An tâm tuyệt đối rằng những tài sản cốt lõi nhất của bạn luôn được bảo vệ 24/7."
  },
  {
    title: "Xây dựng Quy trình Ứng phó Khẩn cấp",
    desc: "Một hệ thống tốt phải đi kèm với một quy trình tốt. Chúng tôi giúp bạn xây dựng các kịch bản và quy trình ứng phó chi tiết cho các tình huống khẩn cấp (xâm nhập, cháy nổ, sự cố an ninh...), đồng thời đào tạo cho đội ngũ của bạn để họ biết chính xác phải làm gì.",
    benefit: "Giảm thiểu hoảng loạn và thiệt hại về người và của khi có sự cố xảy ra."
  },
  {
    title: "Dịch vụ Giám sát và Báo cáo Định kỳ",
    desc: "Chúng tôi cung cấp dịch vụ giám sát từ xa (tùy chọn) và gửi báo cáo định kỳ về tình hình an ninh, các hoạt động đáng ngờ, và hiệu suất của hệ thống. Giúp bạn luôn nắm bắt được tình hình mà không cần trực tiếp theo dõi.",
    benefit: "Tiết kiệm thời gian quản lý, có được báo cáo khách quan và chuyên nghiệp."
  },
]

export default function MultiLayerSecuritySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Quản lý và Bảo vệ Tài sản Vật lý: Từ Phòng ngừa đến Ứng phó
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {layers.map((item, idx) => (
              <AccordionItem key={idx} value={String(idx)}>
                <AccordionTrigger className="text-lg font-bold text-orange-700">
                  <CheckCircle className="inline-block mr-2 text-green-600" />
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-gray-800 mb-2">{item.desc}</div>
                  <div className="text-green-700 font-semibold">Lợi ích: {item.benefit}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
