import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileSearch, MessageCircle, Gavel, Handshake, Scale } from "lucide-react"

export default function ProcessTimeline() {
  const steps = [
    {
      icon: FileSearch,
      title: "Bước 1: Phân tích & Đánh giá Hồ sơ nợ",
      description:
        "Chúng tôi không hành động mù quáng. Bước đầu tiên là 'khám bệnh': rà soát toàn bộ hồ sơ, hợp đồng, chứng từ liên quan để đánh giá tính pháp lý của khoản nợ và khả năng thanh toán của đối tác.",
      result: "Bạn sẽ có một bức tranh rõ ràng về điểm mạnh, điểm yếu của mình trong từng trường hợp.",
    },
    {
      icon: MessageCircle,
      title: "Bước 2: Tác động Tâm lý & Thương lượng Mềm (Giai đoạn 1)",
      description:
        "Sử dụng các kỹ thuật giao tiếp và đàm phán chuyên nghiệp thông qua thư nhắc nhở, cuộc gọi được chuẩn bị kịch bản kỹ lưỡng để tạo áp lực một cách lịch sự, duy trì mối quan hệ tốt đẹp.",
      result: "Rất nhiều khoản nợ được giải quyết ngay ở giai đoạn này mà không cần đến các biện pháp mạnh.",
    },
    {
      icon: Gavel,
      title: "Bước 3: Gửi Thư Cảnh báo Pháp lý (Giai đoạn 2)",
      description:
        "Khi thương lượng mềm không hiệu quả, chúng tôi sẽ soạn thảo và gửi thư cảnh báo pháp lý chính thức, do các luật sư và chuyên gia của HLCC đứng tên. Thư này nêu rõ các cơ sở pháp lý và hậu quả nếu khoản nợ không được thanh toán.",
      result: "Tạo ra một sức ép pháp lý mạnh mẽ, cho thấy sự nghiêm túc và quyết tâm của bạn.",
    },
    {
      icon: Handshake,
      title: "Bước 4: Đàm phán Trực tiếp & Tái cấu trúc nợ",
      description:
        "Trong nhiều trường hợp, đối tác thực sự gặp khó khăn tài chính. Chúng tôi sẽ đại diện bạn ngồi vào bàn đàm phán, xây dựng các phương án thanh toán linh hoạt (trả góp, gia hạn...) để giúp họ có lối thoát và bạn thu hồi được tiền.",
      result: "Tìm ra giải pháp 'cùng thắng', thu hồi được nợ mà vẫn có thể giữ được mối quan hệ đối tác.",
    },
    {
      icon: Scale,
      title: "Bước 5: Hỗ trợ Khởi kiện & Thi hành án (Biện pháp Cuối cùng)",
      description:
        "Khi mọi nỗ lực thương lượng đều thất bại, chúng tôi sẽ tư vấn và hỗ trợ bạn chuẩn bị hồ sơ để tiến hành các thủ tục khởi kiện tại Tòa án hoặc Trọng tài, đồng thời hỗ trợ trong quá trình thi hành án để đảm bảo bạn nhận lại được số tiền của mình.",
      result: "Sử dụng công cụ pháp lý mạnh nhất để bảo vệ quyền lợi hợp pháp của bạn.",
    },
  ]

  return (
    <section className="py-20 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-100 text-yellow-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Quy trình 5 Bước "Phẫu thuật" Công nợ của HLCC
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6">
              Giải pháp của chúng tôi: Quy trình Thu hồi Công nợ Thông minh & Bài bản
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Chúng tôi áp dụng một quy trình đa tầng, từ mềm dẻo đến cứng rắn, nhằm tối đa hóa khả năng thu hồi nợ và giảm thiểu xung đột.
            </p>
          </div>
          <Tabs defaultValue="0" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8 bg-white/90">
              {steps.map((step, idx) => (
                <TabsTrigger key={idx} value={String(idx)} className="flex flex-col items-center text-xs md:text-sm">
                  <step.icon className="h-7 w-7 mb-1 text-yellow-600" />
                  Bước {idx + 1}
                </TabsTrigger>
              ))}
            </TabsList>
            {steps.map((step, idx) => (
              <TabsContent key={idx} value={String(idx)}>
                <div className="bg-white rounded-2xl shadow-xl border-l-4 border-yellow-400 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-yellow-100 mb-4 md:mb-0">
                    <step.icon className="h-10 w-10 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-yellow-700">{step.title}</h3>
                    <p className="text-gray-800 mb-4 text-base md:text-lg">{step.description}</p>
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 border-l-4 border-yellow-400">
                      <span className="text-yellow-700 font-semibold">Kết quả:</span> {step.result}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
