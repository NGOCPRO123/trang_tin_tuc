import { Button } from "@/components/ui/button"
import { BriefcaseMedical } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 py-20 lg:py-32">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
                <BriefcaseMedical className="mr-2 h-4 w-4" />
                Dịch vụ Kế toán – Thuế Chuyên sâu
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Sổ sách của bạn đang nói lên sự thật, <br className="hidden md:block" />
                hay đang che giấu những <span className="text-amber-600">quả bom nổ chậm?</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Một con số sai lệch, một hóa đơn thất lạc, một kỳ báo cáo trễ hạn... những vấn đề tưởng chừng nhỏ nhặt lại là nguồn cơn của những rủi ro khổng lồ về thuế và các quyết định kinh doanh sai lầm. <br className="hidden md:block" />
                <span className="font-semibold text-amber-700">Tại HLCC, chúng tôi cung cấp dịch vụ kế toán - thuế chuyên sâu, biến bộ phận kế toán từ một trung tâm chi phí trở thành một trung tâm thông tin chiến lược, mang lại sự an tâm tuyệt đối cho ban lãnh đạo.</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-bold shadow-lg">
                Yêu cầu một buổi "Khám" sức khỏe Kế toán
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center items-center h-full w-full">
            <div className="relative rounded-2xl bg-white p-6 shadow-2xl w-full h-full mx-auto">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Chuyên gia phân tích tài chính"
                className="rounded-lg w-full h-full object-cover min-h-[320px]"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4 rounded-xl shadow-lg min-w-[180px]">
                <div className="text-lg font-bold">"Bác sĩ" tài chính của bạn</div>
                <div className="text-sm">Chẩn đoán – Phòng bệnh – Tối ưu hóa</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
