import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Shield, Phone, Mail, MapPin, Clock } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Final pitch */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black text-black mb-4">Sẵn sàng bảo vệ doanh nghiệp của bạn?</h2>
                <p className="text-xl text-black font-bold mb-8">Liên hệ ngay để nhận tư vấn miễn phí từ chuyên gia</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4 text-[#CCA776]">Cam kết của chúng tôi:</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-[#CCA776]" />
                    <span>Triển khai trong 2 giờ hoặc MIỄN PHÍ tháng đầu</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-[#CCA776]" />
                    <span>Không hài lòng = hoàn tiền 100%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-[#CCA776]" />
                    <span>Bảo hiểm trách nhiệm 10 tỷ đồng</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#CCA776] hover:bg-[#CCA776] text-white px-8 py-6 text-lg font-bold rounded-2xl flex-1"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  GỌI NGAY: 0999.888.777
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#CCA776] text-[#CCA776] hover:bg-[#CCA776] hover:text-white px-8 py-6 text-lg font-bold rounded-2xl bg-transparent"
                >
                  Chat Zalo
                </Button>
              </div>
            </div>

            {/* Right side - Contact form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Đăng ký tư vấn miễn phí</h3>

              <form className="space-y-6">
                <div>
                  <Input
                    placeholder="Họ tên của bạn *"
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Số điện thoại *"
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Địa chỉ cần bảo vệ"
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Mô tả tình hình hiện tại (có bao nhiêu lối vào, diện tích, đã từng xảy ra sự cố gì...)"
                    rows={4}
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                  />
                </div>

                <Button className="w-full bg-[#CCA776] hover:bg-[#CCA776] text-white py-4 text-lg font-bold rounded-2xl">
                  Nhận tư vấn miễn phí ngay
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-400">
                <p>Chúng tôi sẽ liên hệ trong vòng 15 phút</p>
              </div>
            </div>
          </div>

          {/* Footer info */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center space-y-2">
                <Phone className="w-8 h-8 text-[#CCA776]" />
                <div>
                  <p className="font-semibold">Hotline 24/7</p>
                  <p className="text-gray-300">0999.888.777</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Mail className="w-8 h-8 text-[#CCA776]" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">info@securepro.vn</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="w-8 h-8 text-[#CCA776]" />
                <div>
                  <p className="font-semibold">Văn phòng</p>
                  <p className="text-gray-300">123 Nguyễn Huệ, Q1, HCM</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Clock className="w-8 h-8 text-[#CCA776]" />
                <div>
                  <p className="font-semibold">Phản ứng</p>
                  <p className="text-gray-300">Trung bình 2.3 giây</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
