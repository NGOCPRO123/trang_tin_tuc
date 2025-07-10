"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle } from "lucide-react"

export function ConversationSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    capital: "",
    experience: "",
    goals: ""
  })

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <MessageCircle className="w-16 h-16 text-[#CCA776] mx-auto mb-6" />
          <h2 className="text-4xl lg:text-6xl font-black mb-8">
            <span className="text-[#CCA776]">BẮT ĐẦU</span>
            <span className="text-white"> CUỘC TRÒ CHUYỆN</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Không phải form đăng ký. Không phải sales call. Chỉ là một cuộc trò chuyện thẳng thắn về tương lai tài chính của bạn.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact form */}
          <Card className="bg-gray-800/50 border-gray-700 border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Chia sẻ với chúng tôi về bạn
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">
                      Tên của bạn *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Nguyễn Văn A"
                      className="mt-2 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-300">
                      Số điện thoại *
                    </Label>
                    <Input
                      id="phone"
                      placeholder="0901 234 567"
                      className="mt-2 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    className="mt-2 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="capital" className="text-gray-300">
                      Số vốn dự kiến
                    </Label>
                    <Select onValueChange={(value) => setFormData({...formData, capital: value})}>
                      <SelectTrigger className="mt-2 bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Chọn mức vốn" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        <SelectItem value="under-50">Dưới 50 triệu</SelectItem>
                        <SelectItem value="50-200">50 - 200 triệu</SelectItem>
                        <SelectItem value="200-500">200 - 500 triệu</SelectItem>
                        <SelectItem value="over-500">Trên 500 triệu</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="experience" className="text-gray-300">
                      Kinh nghiệm đầu tư
                    </Label>
                    <Select onValueChange={(value) => setFormData({...formData, experience: value})}>
                      <SelectTrigger className="mt-2 bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Mức độ kinh nghiệm" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        <SelectItem value="beginner">Mới bắt đầu</SelectItem>
                        <SelectItem value="some">Có chút kinh nghiệm</SelectItem>
                        <SelectItem value="experienced">Khá có kinh nghiệm</SelectItem>
                        <SelectItem value="expert">Rất có kinh nghiệm</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="goals" className="text-gray-300">
                    Mục tiêu của bạn là gì?
                  </Label>
                  <Textarea
                    id="goals"
                    placeholder="Ví dụ: Tôi muốn có thu nhập thụ động 20 triệu/tháng sau 5 năm..."
                    className="mt-2 bg-gray-700 border-gray-600 text-white placeholder-gray-400 min-h-[100px]"
                    value={formData.goals}
                    onChange={(e) => setFormData({...formData, goals: e.target.value})}
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#CCA776] to-[#CCA776]/80 hover:from-[#CCA776]/80 hover:to-[#CCA776] text-white py-4 text-lg rounded-2xl shadow-xl"
                >
                  Bắt đầu cuộc trò chuyện
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Hoặc liên hệ trực tiếp
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Chúng tôi không bán hàng qua điện thoại. Chúng tôi chỉ muốn hiểu rõ hơn về tình hình và mục tiêu của bạn để có thể đưa ra những gợi ý phù hợp nhất.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#CCA776] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">📞</span>
                </div>
                <div>
                  <h4 className="text-[#CCA776] font-bold">Hotline</h4>
                  <p className="text-white">0901.234.567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#CCA776] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">📧</span>
                </div>
                <div>
                  <h4 className="text-[#CCA776] font-bold">Email</h4>
                  <p className="text-white">contact@hlcc.vn</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#CCA776] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">📍</span>
                </div>
                <div>
                  <h4 className="text-[#CCA776] font-bold">Văn phòng</h4>
                  <p className="text-white">123 Đường ABC, Quận 1, TP.HCM</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#CCA776]/20 to-[#CCA776]/10 rounded-2xl p-6 border border-[#CCA776]/30">
              <h4 className="text-[#CCA776] font-bold mb-3">💡 Lưu ý quan trọng</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Cuộc trò chuyện này hoàn toàn miễn phí và không ràng buộc. Chúng tôi chỉ muốn hiểu rõ hơn về tình hình của bạn để có thể đưa ra những gợi ý phù hợp nhất.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
