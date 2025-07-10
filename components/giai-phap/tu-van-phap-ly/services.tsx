"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CheckCircle, FileText, Gavel, ShieldCheck } from "lucide-react"

const tabData = [
  {
    value: "contract",
    label: "Tư vấn Hợp đồng & Giao dịch Chiến lược",
    icon: FileText,
    content: (
      <div className="space-y-4">
        <div className="font-bold text-lg flex items-center gap-2 text-[#CCA776]"><CheckCircle className="w-5 h-5" />Soạn thảo & Rà soát "thép"</div>
        <div>Chúng tôi không chỉ soạn thảo, chúng tôi "kiến tạo" nên những bản hợp đồng chặt chẽ, lường trước mọi rủi ro. Dịch vụ bao gồm hợp đồng thương mại, lao động, đầu tư, M&A...</div>
        <div className="font-bold text-lg flex items-center gap-2 text-[#CCA776]"><CheckCircle className="w-5 h-5" />Tư vấn Thủ tục & Giấy phép</div>
        <div>Đảm bảo mọi hoạt động của bạn từ kinh doanh, đầu tư đến sở hữu trí tuệ đều được thực hiện đúng và đủ theo quy định của pháp luật.</div>
        <div className="font-bold text-lg flex items-center gap-2 text-[#CCA776]"><CheckCircle className="w-5 h-5" />Đồng hành Đàm phán</div>
        <div>Hỗ trợ bạn trong quá trình đàm phán, ký kết hợp đồng, đảm bảo các điều khoản luôn có lợi nhất cho doanh nghiệp.</div>
      </div>
    ),
  },
  {
    value: "risk",
    label: "Quản trị Rủi ro & Xây dựng Hệ thống Tuân thủ",
    icon: ShieldCheck,
    content: (
      <div className="space-y-4">
        <div className="font-bold text-lg flex items-center gap-2 text-[#CCA776]"><CheckCircle className="w-5 h-5" />"Khám sức khỏe" Pháp lý</div>
        <div>Phân tích và đánh giá toàn diện các rủi ro pháp lý tiềm ẩn trong hoạt động kinh doanh của bạn, từ đó đưa ra bản đồ rủi ro và giải pháp phòng ngừa.</div>
        <div className="font-bold text-lg flex items-center gap-2 text-[#CCA776]"><CheckCircle className="w-5 h-5" />Xây dựng Chính sách Nội bộ</div>
        <div>Giúp bạn xây dựng các quy trình và chính sách nội bộ (quy chế lao động, bảo mật thông tin...) để hạn chế vi phạm và tạo ra một môi trường làm việc chuyên nghiệp.</div>
        <div className="font-bold text-lg flex items-center gap-2 text-[#CCA776]"><CheckCircle className="w-5 h-5" />Tư vấn Tình huống Khẩn cấp</div>
        <div>Luôn sẵn sàng hỗ trợ khi bạn đối mặt với các tình huống pháp lý đột xuất (thanh tra, kiểm tra...), đảm bảo hoạt động kinh doanh không bị gián đoạn.</div>
      </div>
    ),
  },
  {
    value: "dispute",
    label: "Giải quyết Tranh chấp Hiệu quả",
    icon: Gavel,
    content: (
      <div className="space-y-4">
        <div className="font-bold text-lg flex items-center gap-2 text-[#CCA776]"><CheckCircle className="w-5 h-5" />Đàm phán & Hòa giải thông minh</div>
        <div>Ưu tiên hàng đầu của chúng tôi là giúp bạn giải quyết tranh chấp một cách nhanh chóng, hiệu quả và ít tốn kém nhất thông qua đàm phán, hòa giải.</div>
        <div className="font-bold text-lg flex items-center gap-2 text-[#CCA776]"><CheckCircle className="w-5 h-5" />Đại diện Tranh tụng Chuyên nghiệp</div>
        <div>Khi việc kiện tụng là không thể tránh khỏi, đội ngũ luật sư của chúng tôi sẽ đại diện cho bạn tại Tòa án hoặc Trọng tài Thương mại để bảo vệ quyền lợi hợp pháp một cách mạnh mẽ nhất.</div>
        <div className="font-bold text-lg flex items-center gap-2 text-[#CCA776]"><CheckCircle className="w-5 h-5" />Dịch vụ "Luật sư Doanh nghiệp" dài hạn</div>
        <div>Cung cấp một đội ngũ pháp lý chuyên nghiệp luôn sát cánh cùng bạn, giúp bạn yên tâm tuyệt đối để tập trung vào kinh doanh.</div>
      </div>
    ),
  },
]

export default function Services() {
  return (
    <section className="py-24 bg-[#CCA776]/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#CCA776]/30 rounded-full px-6 py-2 border border-[#CCA776]/40 mb-6 shadow-md">
            <div className="w-2 h-2 bg-[#CCA776] rounded-full"></div>
            <span className="text-sm font-semibold text-[#CCA776] tracking-wide">Giải pháp pháp lý toàn diện</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4 drop-shadow-[0_2px_12px_rgba(204,167,118,0.10)]">
            Bảo vệ Doanh nghiệp trước mọi Rủi ro Pháp lý
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="contract" className="w-full">
            <TabsList className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 bg-transparent w-full min-w-0">
              {tabData.map(tab => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex-1 min-w-0 flex flex-col items-center justify-center h-full px-2 py-4 md:py-6 rounded-2xl text-sm md:text-base font-semibold border-2 border-transparent bg-gradient-to-br from-[#fffbe6]/80 to-[#CCA776]/10 text-[#0f172a] shadow-md transition-all duration-300
                  data-[state=active]:bg-white data-[state=active]:border-[#CCA776] data-[state=active]:shadow-xl data-[state=active]:text-[#CCA776] data-[state=active]:scale-105
                  hover:border-[#CCA776] hover:bg-[#fffbe6]/90 text-center"
                >
                  <tab.icon className="w-6 h-6 mb-1 text-[#CCA776] drop-shadow" />
                  <span className="text-xs md:text-base font-extrabold text-center leading-tight break-words whitespace-normal">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {tabData.map(tab => (
              <TabsContent key={tab.value} value={tab.value} className="bg-white/90 rounded-2xl p-10 border-2 border-[#CCA776]/30 shadow-xl transition-all duration-500 min-h-[320px] mt-16">
                {tab.content}
              </TabsContent>
              ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
