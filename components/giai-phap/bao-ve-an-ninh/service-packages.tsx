import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const packages = [
  {
    title: "Gói cơ bản",
    description: "1–2 bảo vệ ca ngày/đêm",
    details: "Bảo vệ văn phòng nhỏ, shop, cổng trường",
    color: "border-[#CCA776]/30",
  },
  {
    title: "Gói chuyên sâu",
    description: "4+ người, phân ca – có trưởng nhóm",
    details: "Chung cư, khu công nghiệp, doanh nghiệp",
    color: "border-[#CCA776]",
    featured: true,
  },
  {
    title: "Gói sự kiện",
    description: "Lực lượng tăng cường theo giờ",
    details: "Event, hội chợ, liveshow…",
    color: "border-[#CCA776]/30",
  },
]

export default function ServicePackages() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-black mb-4">Các gói dịch vụ</h2>
          <p className="text-xl text-black font-bold mb-8">Linh hoạt – Phù hợp mọi quy mô doanh nghiệp</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`${pkg.color} border-2 ${pkg.featured ? "scale-105 shadow-xl" : "shadow-lg"} hover:shadow-xl transition-all`}
              >
                <CardHeader className="text-center">
                  <h3 className="font-black text-[#CCA776] mb-2">{pkg.title}</h3>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-black font-bold">{pkg.description}</p>
                  <p className="text-gray-600">{pkg.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-[#CCA776] hover:bg-[#CCA776] text-white px-8 py-4">
              📝 Nhận tư vấn gói phù hợp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
