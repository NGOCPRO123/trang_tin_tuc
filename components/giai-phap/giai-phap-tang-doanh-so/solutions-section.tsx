"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Brain, Users, DollarSign } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { motion } from "framer-motion"

export function SolutionsSection() {
  const solutions = [
    {
      icon: BarChart3,
      title: "Tối ưu quy trình bán hàng",
      description: "Tự động hóa và tối ưu hóa toàn bộ quy trình từ lead đến chốt đơn",
      color: "from-amber-500 to-yellow-500",
    },
    {
      icon: Brain,
      title: "Ứng dụng công nghệ phân tích dữ liệu",
      description: "AI và Machine Learning giúp dự đoán xu hướng và tối ưu chiến lược",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Giữ chân khách hàng hiệu quả",
      description: "Hệ thống CRM thông minh với automation marketing cá nhân hóa",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: DollarSign,
      title: "Tối ưu chi phí marketing",
      description: "Phân tích ROI chi tiết và tối ưu ngân sách quảng cáo thông minh",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section className="relative py-24 bg-gradient-to-b from-yellow-50 via-amber-50 to-yellow-100 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 right-0 w-[400px] h-[400px] bg-yellow-200 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[200px] bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-100 rounded-full blur-2xl opacity-40" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-yellow-400 to-amber-300 text-yellow-900 px-4 py-2 mb-6 shadow-md rounded-xl">💡 Hệ thống tăng trưởng toàn diện</Badge>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Chiến lược thông minh giúp doanh nghiệp phát triển <span className="bg-gradient-to-r from-yellow-600 to-amber-500 bg-clip-text text-transparent">bền vững</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Chúng tôi kiến tạo một hệ thống tăng trưởng toàn diện, gồm 4 mảnh ghép cốt lõi:
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Tabs defaultValue="1" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 bg-white/60 backdrop-blur-xl rounded-2xl border border-yellow-200/60 shadow-lg">
              <TabsTrigger value="1" className="text-yellow-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-400 data-[state=active]:to-amber-300 data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-semibold text-lg py-3 transition-all">Phân tích thị trường</TabsTrigger>
              <TabsTrigger value="2" className="text-yellow-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-400 data-[state=active]:to-amber-300 data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-semibold text-lg py-3 transition-all">Chiến lược Marketing</TabsTrigger>
              <TabsTrigger value="3" className="text-yellow-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-400 data-[state=active]:to-amber-300 data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-semibold text-lg py-3 transition-all">Tối ưu bán hàng</TabsTrigger>
              <TabsTrigger value="4" className="text-yellow-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-400 data-[state=active]:to-amber-300 data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-semibold text-lg py-3 transition-all">Affiliate Thực Chiến</TabsTrigger>
            </TabsList>
            <TabsContent value="1">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white/60 backdrop-blur-xl rounded-2xl border border-yellow-200/60 shadow-lg p-8">
                <Accordion type="single" collapsible defaultValue="a1">
                  <AccordionItem value="a1">
                    <AccordionTrigger>Nghiên cứu hành vi & xu hướng</AccordionTrigger>
                    <AccordionContent>
                      Chúng tôi không đoán mò. Chúng tôi "điều tra" hành vi tiêu dùng và xu hướng thị trường để giúp bạn xác định chính xác chân dung khách hàng vàng.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="a2">
                    <AccordionTrigger>Định vị thương hiệu & lợi thế cạnh tranh</AccordionTrigger>
                    <AccordionContent>
                      Giúp bạn trả lời: "Tại sao khách hàng phải chọn bạn mà không phải đối thủ?" Từ đó xây dựng chiến lược giá, sản phẩm và phân phối phù hợp.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="a3">
                    <AccordionTrigger>Tối ưu mô hình kinh doanh</AccordionTrigger>
                    <AccordionContent>
                      Đề xuất các mô hình kinh doanh linh hoạt, đảm bảo tối đa hóa lợi nhuận trên từng phân khúc khách hàng.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            </TabsContent>
            <TabsContent value="2">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white/60 backdrop-blur-xl rounded-2xl border border-yellow-200/60 shadow-lg p-8">
                <Accordion type="single" collapsible defaultValue="b1">
                  <AccordionItem value="b1">
                    <AccordionTrigger>Digital Marketing thực chiến</AccordionTrigger>
                    <AccordionContent>
                      Không chỉ "chạy ads". Chúng tôi xây dựng các chiến dịch quảng cáo số thông minh trên Google, Facebook, TikTok... tập trung vào việc gia tăng nhận diện thương hiệu với chi phí tối ưu nhất.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="b2">
                    <AccordionTrigger>Tiếp thị nội dung đa kênh</AccordionTrigger>
                    <AccordionContent>
                      Xây dựng chiến lược nội dung giá trị để thu hút và nuôi dưỡng khách hàng tiềm năng một cách tự nhiên, thay vì làm phiền họ.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="b3">
                    <AccordionTrigger>Cá nhân hóa trải nghiệm khách hàng</AccordionTrigger>
                    <AccordionContent>
                      Ứng dụng dữ liệu để hiểu sâu hơn về từng khách hàng, từ đó tạo ra những thông điệp và ưu đãi "chạm" đến họ, giúp tăng vọt tỷ lệ chuyển đổi.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            </TabsContent>
            <TabsContent value="3">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white/60 backdrop-blur-xl rounded-2xl border border-yellow-200/60 shadow-lg p-8">
                <Accordion type="single" collapsible defaultValue="c1">
                  <AccordionItem value="c1">
                    <AccordionTrigger>Xây dựng "cỗ máy" bán hàng</AccordionTrigger>
                    <AccordionContent>
                      Thiết kế quy trình bán hàng chuyên nghiệp, kịch bản chốt sale hiệu quả và các chương trình đào tạo để nâng cấp đội ngũ kinh doanh của bạn.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="c2">
                    <AccordionTrigger>Quản lý khách hàng thông minh (CRM)</AccordionTrigger>
                    <AccordionContent>
                      Ứng dụng CRM để chăm sóc và giữ chân khách hàng hiệu quả, biến khách hàng một lần thành fan trung thành.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="c3">
                    <AccordionTrigger>Tự động hóa bán hàng</AccordionTrigger>
                    <AccordionContent>
                      Sử dụng công nghệ để tự động hóa các tác vụ lặp lại, giúp tăng tốc độ chốt đơn và giảm chi phí vận hành.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            </TabsContent>
            <TabsContent value="4">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white/60 backdrop-blur-xl rounded-2xl border border-yellow-200/60 shadow-lg p-8">
                <Accordion type="single" collapsible defaultValue="d1">
                  <AccordionItem value="d1">
                    <AccordionTrigger>Khai thác sức mạnh cộng đồng</AccordionTrigger>
                    <AccordionContent>
                      Thay vì tự mình tìm kiếm khách hàng, hãy để hàng trăm, hàng ngàn đối tác (Affiliates) bán hàng cho bạn.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="d2">
                    <AccordionTrigger>Tối ưu chi phí tuyệt đối</AccordionTrigger>
                    <AccordionContent>
                      Bạn chỉ trả hoa hồng khi có đơn hàng thành công. Không còn rủi ro "đốt tiền" vào quảng cáo không hiệu quả.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="d3">
                    <AccordionTrigger>Mở rộng thị trường thần tốc</AccordionTrigger>
                    <AccordionContent>
                      Nhanh chóng đưa sản phẩm của bạn tiếp cận đến những tệp khách hàng mới thông qua mạng lưới của các Affiliates.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
