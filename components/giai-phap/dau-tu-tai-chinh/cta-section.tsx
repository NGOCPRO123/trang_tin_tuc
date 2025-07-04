import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-100 to-amber-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              📞 Bạn không cần giàu để bắt đầu đầu tư
            </h2>
            <p className="text-2xl text-gray-700 mb-4">– bạn cần hiểu để không mất tiền.</p>
            <p className="text-xl text-gray-600">Gửi thông tin – chúng tôi sẽ giúp bạn khởi động đúng cách.</p>
          </div>

          <Card className="border-yellow-300 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-800">📬 Đăng ký tư vấn miễn phí</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName" className="text-gray-700 font-medium">
                      Họ tên *
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Nhập họ và tên của bạn"
                      className="mt-2 border-gray-300 focus:border-yellow-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium">
                      Số điện thoại *
                    </Label>
                    <Input
                      id="phone"
                      placeholder="Nhập số điện thoại"
                      className="mt-2 border-gray-300 focus:border-yellow-400"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="capital" className="text-gray-700 font-medium">
                    Mức vốn dự kiến đầu tư
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-2 border-gray-300 focus:border-yellow-400">
                      <SelectValue placeholder="Chọn mức vốn" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-100">Dưới 100 triệu</SelectItem>
                      <SelectItem value="100-500">100 - 500 triệu</SelectItem>
                      <SelectItem value="over-500">Trên 500 triệu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-gray-700 font-medium mb-3 block">
                    Kênh đầu tư quan tâm (có thể chọn nhiều)
                  </Label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {["Chứng khoán", "Trái phiếu", "Tài sản số", "Bất động sản", "Vàng", "Ngoại tệ"].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <Checkbox id={option} />
                        <Label htmlFor={option} className="text-gray-700">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 text-lg"
                >
                  🚀 Nhận tư vấn miễn phí ngay
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
