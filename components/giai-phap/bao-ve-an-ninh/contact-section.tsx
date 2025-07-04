import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              📞 Bạn không thể có mặt 24/7 – nhưng chúng tôi có thể
            </h2>
            <div className="bg-yellow-100 p-6 rounded-lg inline-block">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-6 h-6 text-yellow-600" />
                <p className="text-lg font-medium text-gray-800">
                  Chúng tôi nhận bảo vệ ngay trong 48h nếu bạn cần khẩn cấp
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-8 shadow-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Họ tên *</label>
                  <Input placeholder="Nhập họ tên của bạn" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email / SĐT *</label>
                  <Input placeholder="Nhập email hoặc số điện thoại" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Loại hình cần bảo vệ *</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn loại hình cần bảo vệ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="doanh-nghiep">Doanh nghiệp</SelectItem>
                    <SelectItem value="khu-dan-cu">Khu dân cư</SelectItem>
                    <SelectItem value="ngan-hang">Ngân hàng / Cửa hàng</SelectItem>
                    <SelectItem value="su-kien">Sự kiện</SelectItem>
                    <SelectItem value="khac">Khác</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Yêu cầu đặc biệt</label>
                <Textarea placeholder="Mô tả chi tiết yêu cầu của bạn..." rows={4} />
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-4 text-lg">
                  Gửi yêu cầu bảo vệ
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
