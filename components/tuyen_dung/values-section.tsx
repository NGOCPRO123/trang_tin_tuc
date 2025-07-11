import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Lightbulb, Users, Star } from "lucide-react"

const values = [
  {
    icon: Rocket,
    title: "Lộ trình Phát triển Rõ ràng",
    description:
      'Chúng tôi không muốn bạn "dậm chân tại chỗ". Tại HLCC, bạn sẽ có một lộ trình sự nghiệp được cá nhân hóa, được tham gia vào các chương trình đào tạo chuyên sâu và có cơ hội làm việc trực tiếp với các chuyên gia hàng đầu trong ngành.',
    bgColor: "from-[#CCA776]/20 to-[#CCA776]/20",
    iconColor: "text-[#CCA776]",
    cardBg: "from-white to-[#CCA776]/30",
  },
  {
    icon: Lightbulb,
    title: "Thử thách & Tác động Thực tế",
    description:
      'Bạn sẽ không bao giờ cảm thấy nhàm chán. Mỗi dự án là một "vụ án" mới đầy thách thức, đòi hỏi sự tư duy sắc bén. Công việc của bạn sẽ tạo ra tác động trực tiếp và có ý nghĩa lên sự thành bại của các doanh nghiệp khách hàng.',
    bgColor: "from-[#CCA776]/20 to-[#CCA776]/20",
    iconColor: "text-[#CCA776]",
    cardBg: "from-white to-[#CCA776]/30",
  },
  {
    icon: Users,
    title: "Môi trường Đồng đội & Hỗ trợ",
    description:
      'Chúng tôi là một đội. Ở đây không có "ngôi sao", chỉ có những người đồng đội sẵn sàng chia sẻ kiến thức, hỗ trợ lẫn nhau để cùng đạt được mục tiêu chung. Sự thành công của bạn cũng là thành công của chúng tôi.',
    bgColor: "from-[#CCA776]/20 to-[#CCA776]/20",
    iconColor: "text-[#CCA776]",
    cardBg: "from-white to-[#CCA776]/30",
  },
  {
    icon: Star,
    title: "Chế độ Đãi ngộ Xứng đáng",
    description:
      "Chúng tôi ghi nhận mọi nỗ lực. Chính sách lương, thưởng và phúc lợi của HLCC được xây dựng dựa trên hiệu suất và sự đóng góp, đảm bảo bạn nhận được sự tưởng thưởng xứng đáng với giá trị mình tạo ra.",
    bgColor: "from-[#CCA776]/20 to-[#CCA776]/20",
    iconColor: "text-[#CCA776]",
    cardBg: "from-white to-[#CCA776]/30",
  },
]

export default function ValuesSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-[#CCA776]/20 text-[#CCA776] rounded-full text-sm font-medium mb-6">
            💼 Văn hóa doanh nghiệp
          </div>
          <h2 className="text-3xl font-black text-black mb-8">Giá trị cốt lõi tại HLCC</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Chúng tôi tin rằng con người là tài sản quý giá nhất. Vì vậy, chúng tôi nỗ lực xây dựng một môi trường nơi
            bạn không chỉ làm việc, mà còn phát triển, được công nhận và cảm thấy hạnh phúc.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className={`group text-center p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${value.cardBg}`}
            >
              <CardHeader className="pb-4">
                <div
                  className={`mx-auto w-20 h-20 bg-gradient-to-br ${value.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border-4 border-[#CCA776] shadow-lg`}
                >
                  <value.icon className={`h-12 w-12 ${value.iconColor} font-black`} />
                </div>
                <CardTitle className="text-2xl font-black text-[#CCA776] mb-3">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black font-bold">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
