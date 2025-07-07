import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Đừng chờ đến khi Mất mát Xảy ra mới Hành động
            </h2>
            <div className="text-lg text-gray-700 mb-4">
              Bảo vệ tài sản là nền tảng cho sự ổn định. Hãy chủ động xây dựng pháo đài an ninh cho doanh nghiệp của bạn ngay hôm nay.<br />
              Liên hệ với chúng tôi để nhận một buổi khảo sát và tư vấn giải pháp an ninh hoàn toàn miễn phí.
            </div>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Họ và Tên *</label>
                  <Input placeholder="Nhập họ tên của bạn" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại *</label>
                  <Input placeholder="Nhập số điện thoại" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <Input placeholder="Nhập email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Lĩnh vực kinh doanh</label>
                  <Input placeholder="Ví dụ: Sản xuất, Dịch vụ, Công nghệ..." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nhu cầu tư vấn</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn nhu cầu tư vấn" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="camera">Lắp camera</SelectItem>
                    <SelectItem value="access-control">Kiểm soát ra vào</SelectItem>
                    <SelectItem value="overall">Tư vấn tổng thể</SelectItem>
                    <SelectItem value="other">Khác</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Yêu cầu chi tiết</label>
                <Textarea placeholder="Mô tả chi tiết nhu cầu hoặc vấn đề bạn quan tâm..." rows={4} />
              </div>
              <div className="text-center mt-8">
                <Button size="lg" className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white px-12 py-4 text-xl font-bold rounded-2xl shadow-xl">
                  YÊU CẦU TƯ VẤN AN NINH MIỄN PHÍ
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

