import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-yellow-50 to-amber-100 overflow-hidden">
      {/* Hiệu ứng nền vàng */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-200/40 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-amber-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          {/* Bên trái: Quote vàng lớn */}
          <div className="flex-1 flex flex-col items-start justify-center mb-8 md:mb-0">
            <div className="text-3xl md:text-4xl font-extrabold text-yellow-700 mb-6 leading-tight">
              “Bước ngoặt tài chính bắt đầu từ một quyết định chiến lược.”
            </div>
            <div className="text-lg text-yellow-900 font-medium">
              Hãy để HLCC đồng hành cùng bạn trên hành trình kiến tạo giá trị bền vững.
            </div>
          </div>
          {/* Bên phải: Form */}
          <div className="flex-1">
            <Card className="border-2 border-yellow-200 shadow-2xl bg-white/80 rounded-3xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-yellow-800 flex items-center justify-center font-bold">
                  NHẬN TƯ VẤN CHIẾN LƯỢC TÀI CHÍNH NGAY!
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName" className="text-yellow-900 font-medium">
                        Họ tên *
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="Nhập họ và tên của bạn"
                        className="mt-2 border-yellow-200 focus:border-yellow-400 focus:ring-yellow-400 bg-yellow-50/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-yellow-900 font-medium">
                        Số điện thoại *
                      </Label>
                      <Input
                        id="phone"
                        placeholder="Nhập số điện thoại"
                        className="mt-2 border-yellow-200 focus:border-yellow-400 focus:ring-yellow-400 bg-yellow-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-yellow-900 font-medium">
                      Tên doanh nghiệp
                    </Label>
                    <Input
                      id="company"
                      placeholder="Nhập tên doanh nghiệp"
                      className="mt-2 border-yellow-200 focus:border-yellow-400 focus:ring-yellow-400 bg-yellow-50/50"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-yellow-900 font-medium">
                      Nội dung cần tư vấn
                    </Label>
                    <Input
                      id="message"
                      placeholder="Bạn quan tâm điều gì nhất về tài chính & cổ phần?"
                      className="mt-2 border-yellow-200 focus:border-yellow-400 focus:ring-yellow-400 bg-yellow-50/50"
                    />
                  </div>

                  <div className="flex justify-center mt-6">
                    <Button
                      type="submit"
                      size="icon"
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-yellow-900 font-bold text-2xl shadow-lg border-2 border-yellow-200 flex items-center justify-center"
                    >
                      <ArrowRight className="w-8 h-8" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
