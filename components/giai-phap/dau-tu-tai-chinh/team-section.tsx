import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function TeamSection() {
  const team = [
    {
      name: "Nguyễn Minh Tuấn",
      title: "Trưởng phòng Phân tích",
      experience: "12 năm kinh nghiệm",
      credentials: ["CFA", "MBA"],
      quote: "Đầu tư là kiểm soát, không phải đỏ đen.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Trần Thị Hương",
      title: "Cố vấn Đầu tư Cấp cao",
      experience: "8 năm kinh nghiệm",
      credentials: ["CPA", "FRM"],
      quote: "Rủi ro được quản lý tốt sẽ trở thành cơ hội.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Lê Văn Đức",
      title: "Chuyên gia Tài sản số",
      experience: "6 năm kinh nghiệm",
      credentials: ["CAIA", "Blockchain Certified"],
      quote: "Công nghệ thay đổi cách chúng ta đầu tư.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            👩‍💼 Đội ngũ cố vấn đầu tư – thật, có chuyên môn
          </h2>
          <p className="text-xl text-gray-600">Đội ngũ chuyên gia giàu kinh nghiệm, được chứng nhận quốc tế</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={index}
              className="border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4 border-4 border-yellow-200"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-yellow-600 font-semibold mb-2">{member.title}</p>
                <p className="text-gray-600 mb-4">{member.experience}</p>

                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {member.credentials.map((credential, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-yellow-100 text-yellow-800">
                      {credential}
                    </Badge>
                  ))}
                </div>

                <blockquote className="text-gray-700 italic border-l-4 border-yellow-400 pl-4">
                  "{member.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
