import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Lightbulb, RefreshCcw, UserCheck } from "lucide-react"

export function ServicesSection() {
  return (
    <section className="py-20 bg-[#CCA776]/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-black mb-4">Từ Ghi sổ Chính xác đến Tư vấn Tối ưu</h2>
          <p className="text-xl text-black font-bold max-w-3xl mx-auto">
            Chúng tôi cung cấp một gói giải pháp toàn diện, giúp bạn giải quyết mọi vấn đề từ cơ bản đến nâng cao.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="ke-toan-tron-goi" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 bg-white/80">
              <TabsTrigger value="ke-toan-tron-goi" className="flex flex-col items-center">
                <Briefcase className="h-6 w-6 mb-1 text-[#CCA776]" />
                Kế toán trọn gói
              </TabsTrigger>
              <TabsTrigger value="tu-van-thue" className="flex flex-col items-center">
                <Lightbulb className="h-6 w-6 mb-1 text-[#CCA776]" />
                Tư vấn & tối ưu thuế
              </TabsTrigger>
              <TabsTrigger value="don-dep-so-sach" className="flex flex-col items-center">
                <RefreshCcw className="h-6 w-6 mb-1 text-[#CCA776]" />
                Dọn dẹp sổ sách
              </TabsTrigger>
              <TabsTrigger value="cfo-thue-ngoai" className="flex flex-col items-center">
                <UserCheck className="h-6 w-6 mb-1 text-[#CCA776]" />
                Kế toán trưởng/CFO thuê ngoài
              </TabsTrigger>
            </TabsList>
            <TabsContent value="ke-toan-tron-goi">
              <Card className="shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-extrabold mb-2">✅ Dịch vụ Kế toán Trọn gói</h3>
                  <p>
                    Chúng tôi đảm nhận toàn bộ công việc của một phòng kế toán chuyên nghiệp: từ việc xử lý hóa đơn, chứng từ, ghi nhận sổ sách, lập báo cáo thuế hàng tháng/quý cho đến quyết toán thuế cuối năm. Bạn hoàn toàn có thể yên tâm tập trung vào kinh doanh.
                  </p>
                  <ul className="list-disc pl-5 text-[#CCA776]">
                    <li>Tiết kiệm chi phí so với việc xây dựng phòng kế toán riêng</li>
                    <li>Đảm bảo tính ổn định và chuyên môn cao</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tu-van-thue">
              <Card className="shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-extrabold mb-2">✅ Dịch vụ Tư vấn & Tối ưu Thuế</h3>
                  <p>
                    Đây là dịch vụ mang lại giá trị cao nhất. Chúng tôi sẽ "soi chiếu" toàn bộ hoạt động của bạn để tìm ra các phương án tối ưu hóa chi phí thuế một cách hợp pháp, từ thuế TNDN, GTGT đến TNCN. Chúng tôi giúp bạn tiết kiệm từng đồng thuế quý giá.
                  </p>
                  <ul className="list-disc pl-5 text-[#CCA776]">
                    <li>Tối đa hóa lợi nhuận sau thuế</li>
                    <li>Giảm thiểu rủi ro bị truy thu và xử phạt</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="don-dep-so-sach">
              <Card className="shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-extrabold mb-2">✅ Dịch vụ "Dọn dẹp" & Hoàn thiện Sổ sách</h3>
                  <p>
                    Dành cho các doanh nghiệp có hệ thống sổ sách lộn xộn, thiếu nhất quán qua nhiều năm. Đội ngũ chuyên gia của chúng tôi sẽ vào cuộc, rà soát, đối chiếu và hoàn thiện lại toàn bộ hệ thống chứng từ, sổ sách của bạn, giúp nó trở nên "sạch sẽ" và sẵn sàng cho bất kỳ cuộc thanh tra nào.
                  </p>
                  <ul className="list-disc pl-5 text-[#CCA776]">
                    <li>Loại bỏ các rủi ro tồn đọng</li>
                    <li>Tạo nền tảng vững chắc cho sự phát triển trong tương lai</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="cfo-thue-ngoai">
              <Card className="shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-extrabold mb-2">✅ Dịch vụ Kế toán trưởng & CFO Thuê ngoài</h3>
                  <p>
                    Nâng tầm bộ phận kế toán của bạn. Chuyên gia của chúng tôi không chỉ làm kế toán mà còn đóng vai trò là một cố vấn tài chính chiến lược, giúp bạn phân tích các chỉ số, xây dựng kế hoạch tài chính và đưa ra các quyết định kinh doanh dựa trên dữ liệu.
                  </p>
                  <ul className="list-disc pl-5 text-[#CCA776]">
                    <li>Sở hữu một bộ não tài chính cấp cao với chi phí hợp lý</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
