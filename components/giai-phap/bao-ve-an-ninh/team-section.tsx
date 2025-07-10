import { Award, Heart, Clock } from "lucide-react"

const qualifications = [
  {
    icon: Award,
    title: "Chứng chỉ nghiệp vụ bảo vệ",
  },
  {
    icon: Heart,
    title: "Kỹ năng ứng phó – sơ cấp cứu – PCCC – pháp luật cơ bản",
  },
  {
    icon: Clock,
    title: "Thái độ: lịch sự – kỷ luật – đúng giờ",
  },
]

export default function TeamSection() {
  return (
    <section className="py-20 bg-[#CCA776]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-black mb-4">Đội ngũ chuyên gia</h2>
          <p className="text-xl text-black font-bold mb-8">Kinh nghiệm thực chiến – Đạo đức nghề nghiệp</p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Đội ngũ bảo vệ chuyên nghiệp"
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            <div>
              <div className="space-y-6 mb-8">
                {qualifications.map((qual, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <qual.icon className="w-8 h-8 text-[#CCA776] mt-1" />
                    <p className="text-lg text-gray-700">{qual.title}</p>
                  </div>
                ))}
              </div>

              <blockquote className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#CCA776]">
                <p className="text-xl font-medium text-gray-800 italic">
                  "Chúng tôi không chỉ đứng đó – chúng tôi quan sát, đánh giá và sẵn sàng hành động."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
