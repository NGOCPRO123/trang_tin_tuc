import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coffee, Heart, MessageCircle, Zap } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-600 via-yellow-500 to-orange-500">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Đang "Đau Đầu" Vì Kế Toán?</h2>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Gửi "tín hiệu cầu cứu" ngay - chúng tôi sẽ "giải cứu" bạn trong vòng 2 giờ (kể cả cuối tuần!)
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="bg-white shadow-2xl border-0">
            <CardHeader className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center">🚀 Nhận "Phép Màu" Miễn Phí</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tên gọi thân thiện *</label>
                    <Input
                      placeholder="Ví dụ: Anh Minh, Chị Lan..."
                      className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại "cứu hộ" *</label>
                    <Input
                      placeholder="Để chúng tôi gọi tư vấn"
                      className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email nhận "bí kíp" *</label>
                  <Input
                    type="email"
                    placeholder="Chúng tôi sẽ gửi tips hữu ích"
                    className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Loại hình "chiến đấu" *</label>
                  <Select>
                    <SelectTrigger className="border-gray-300 focus:border-amber-500 focus:ring-amber-500">
                      <SelectValue placeholder="Bạn đang kinh doanh gì?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="individual">Freelancer/Cá nhân</SelectItem>
                      <SelectItem value="household">Hộ kinh doanh gia đình</SelectItem>
                      <SelectItem value="startup">Startup công nghệ</SelectItem>
                      <SelectItem value="company">Công ty TNHH</SelectItem>
                      <SelectItem value="corporation">Công ty cổ phần</SelectItem>
                      <SelectItem value="other">Loại hình khác</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">"Nỗi đau" bạn đang gặp</label>
                  <Textarea
                    placeholder="Kể cho chúng tôi nghe - chúng tôi sẽ tìm cách giúp bạn..."
                    rows={4}
                    className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 text-lg font-semibold"
                >
                  🎯 Nhận "Liều Thuốc" Miễn Phí
                </Button>

                <div className="text-center text-sm text-gray-600">
                  <Heart className="h-4 w-4 inline mr-1 text-red-500" />
                  Thông tin được bảo vệ như "kho báu" - chúng tôi không bao giờ spam
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Benefits */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Tại Sao Chọn "Đội Cứu Hộ" Của Chúng Tôi?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Zap className="h-6 w-6 text-amber-200" />
                  <span>Phản hồi nhanh như "tia chớp" - trong 2 giờ</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="h-6 w-6 text-amber-200" />
                  <span>Bảo mật như "két sắt" - an toàn tuyệt đối</span>
                </div>
                <div className="flex items-center gap-3">
                  <Coffee className="h-6 w-6 text-amber-200" />
                  <span>Tư vấn "không áp lực" - thoải mái như uống cà phê</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-6 w-6 text-amber-200" />
                  <span>Hỗ trợ 24/7 - kể cả lúc 2h sáng</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Liên Hệ "Khẩn Cấp"</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <span>Hotline: 1900 1234 (miễn phí 24/7)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💬</span>
                  <span>Zalo: 0901 234 567 (phản hồi tức thì)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📧</span>
                  <span>Email: hello@ketoanviet.com</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-white/80 text-lg mb-2">Đã "cứu" thành công</div>
              <div className="text-4xl font-bold text-white mb-2">600+</div>
              <div className="text-white/80">doanh nghiệp khỏi "khủng hoảng" kế toán</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
