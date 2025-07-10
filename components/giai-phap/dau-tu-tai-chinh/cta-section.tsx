import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          {/* Bên trái: Quote vàng lớn */}
          <div className="flex-1 flex flex-col items-start justify-center mb-8 md:mb-0">
            <div className="text-3xl md:text-4xl font-extrabold text-[#CCA776] mb-6 leading-tight">
              “Bước ngoặt tài chính bắt đầu từ một quyết định chiến lược.”
            </div>
            <div className="text-lg text-black font-medium">
              Hãy để HLCC đồng hành cùng bạn trên hành trình kiến tạo giá trị bền vững.
            </div>
          </div>
          {/* Bên phải: Form */}
          <div className="flex-1">
            <Card className="border-2 border-[#CCA776] shadow-2xl bg-[#CCA776] rounded-3xl">
              <CardHeader className="text-center bg-[#CCA776] rounded-t-3xl p-6">
                <CardTitle className="text-2xl text-black flex items-center justify-center font-bold">
                  NHẬN TƯ VẤN CHIẾN LƯỢC TÀI CHÍNH NGAY!
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName" className="text-black font-bold">
                        Họ tên *
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="Nhập họ và tên của bạn"
                        className="mt-2 border-[#CCA776] focus:border-[#CCA776] focus:ring-[#CCA776] bg-white text-black rounded-xl shadow-md focus:shadow-lg transition-shadow duration-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-black font-bold">
                        Số điện thoại *
                      </Label>
                      <Input
                        id="phone"
                        placeholder="Nhập số điện thoại"
                        className="mt-2 border-[#CCA776] focus:border-[#CCA776] focus:ring-[#CCA776] bg-white text-black rounded-xl shadow-md focus:shadow-lg transition-shadow duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-black font-bold">
                      Tên doanh nghiệp
                    </Label>
                    <Input
                      id="company"
                      placeholder="Nhập tên doanh nghiệp"
                      className="mt-2 border-[#CCA776] focus:border-[#CCA776] focus:ring-[#CCA776] bg-white text-black rounded-xl shadow-md focus:shadow-lg transition-shadow duration-300"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-black font-bold">
                      Nội dung cần tư vấn
                    </Label>
                    <Input
                      id="message"
                      placeholder="Bạn quan tâm điều gì nhất về tài chính & cổ phần?"
                      className="mt-2 border-[#CCA776] focus:border-[#CCA776] focus:ring-[#CCA776] bg-white text-black rounded-xl shadow-md focus:shadow-lg transition-shadow duration-300"
                    />
                  </div>

                  <div className="flex justify-center mt-6">
                    <Button
                      type="submit"
                      size="icon"
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-[#CCA776] to-[#CCA776]/80 hover:from-[#CCA776]/80 hover:to-[#CCA776] text-white font-bold text-2xl shadow-lg border-2 border-[#CCA776] flex items-center justify-center"
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
