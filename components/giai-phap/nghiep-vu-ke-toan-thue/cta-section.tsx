import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, PhoneCall } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-[#CCA776]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Bạn đã sẵn sàng để có một Hệ thống Tài chính - Kế toán Vững mạnh & An tâm?
          </h2>
          <p className="text-xl text-white font-bold mx-auto whitespace-nowrap">
            Để HLCC giúp bạn giải quyết mọi lo lắng về kế toán, thuế. Liên hệ nhận tư vấn miễn phí ngay!
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
          <Card className="border-0 shadow-none bg-transparent">
            <CardHeader className="bg-[#CCA776] text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center">
                <ShieldCheck className="inline mr-2 mb-1 h-6 w-6" /> YÊU CẦU TƯ VẤN KẾ TOÁN - THUẾ
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 pt-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">Họ và tên *</label>
                    <Input placeholder="Nhập họ tên" className="border-gray-300 focus:border-[#CCA776] focus:ring-[#CCA776]" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">Số điện thoại *</label>
                    <Input placeholder="Số điện thoại liên hệ" className="border-gray-300 focus:border-[#CCA776] focus:ring-[#CCA776]" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-black mb-2">Email</label>
                  <Input type="email" placeholder="Email nhận tư vấn (không bắt buộc)" className="border-gray-300 focus:border-[#CCA776] focus:ring-[#CCA776]" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-black mb-2">Nội dung cần tư vấn</label>
                  <Textarea placeholder="Bạn đang gặp vấn đề gì?" rows={4} className="border-gray-300 focus:border-[#CCA776] focus:ring-[#CCA776]" />
                </div>
                <Button size="lg" className="w-full bg-[#CCA776] hover:bg-[#CCA776] text-white py-4 text-lg font-bold shadow-lg">
                  <PhoneCall className="inline mr-2 mb-1 h-5 w-5" /> Gửi yêu cầu tư vấn miễn phí
                </Button>
                <div className="text-center text-sm text-black font-bold mt-2">
                  <ShieldCheck className="h-4 w-4 inline mr-1 text-[#CCA776]" /> Thông tin của bạn được bảo mật tuyệt đối.
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

