"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Search, 
  Lightbulb, 
  Users, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Target,
  Zap,
  Award,
  Clock
} from "lucide-react"
import useSWR from "swr"
import { NewsArticleCard } from "@/components/articles/news-article-card"
import { useRouter } from "next/navigation"

const processSteps = [
  {
    step: "01",
    icon: Search,
    title: "Chẩn đoán Toàn diện",
    description: "Lắng nghe và phân tích sâu sắc để tìm ra vấn đề gốc rễ, không chỉ là triệu chứng bề mặt.",
    details: [
      "Phân tích tình hình doanh nghiệp",
      "Xác định vấn đề gốc rễ",
      "Đánh giá tác động đa chiều",
      "Lập báo cáo chẩn đoán chi tiết"
    ],
    color: "from-[#CCA776] to-[#CCA776]",
    bgColor: "from-[#CCA776] to-[#CCA776]"
  },
  {
    step: "02",
    icon: Lightbulb,
    title: "Xây dựng Lộ trình Giải pháp",
    description: "Thiết kế một lộ trình tích hợp nhiều dịch vụ doanh nghiệp, được 'may đo' riêng cho bạn.",
    details: [
      "Thiết kế giải pháp tích hợp",
      "Lộ trình thực hiện chi tiết",
      "Phân bổ nguồn lực tối ưu",
      "Dự kiến kết quả và thời gian"
    ],
    color: "from-[#CCA776] to-[#CCA776]",
    bgColor: "from-[#CCA776] to-[#CCA776]"
  },
  {
    step: "03",
    icon: Users,
    title: "Đồng hành Triển khai",
    description: "Sát cánh cùng bạn trong quá trình thực thi để đảm bảo các giải pháp được áp dụng thành công.",
    details: [
      "Hỗ trợ triển khai thực tế",
      "Đào tạo và chuyển giao",
      "Giám sát tiến độ liên tục",
      "Điều chỉnh khi cần thiết"
    ],
    color: "from-[#CCA776] to-[#CCA776]",
    bgColor: "from-[#CCA776] to-[#CCA776]"
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Đo lường & Tối ưu",
    description: "Liên tục theo dõi, đánh giá và tinh chỉnh để mang lại kết quả kinh doanh thực tế.",
    details: [
      "Đo lường KPI định kỳ",
      "Đánh giá hiệu quả giải pháp",
      "Tối ưu hóa liên tục",
      "Báo cáo kết quả chi tiết"
    ],
    color: "from-[#CCA776] to-[#CCA776]",
    bgColor: "from-[#CCA776] to-[#CCA776]"
  }
]

const fetcher = (url: string) => fetch(url).then(res => res.json())

export function BlogSection() {
  const { data: articles = [], isLoading } = useSWR("/api/articles", fetcher)
  const router = useRouter()

  // Lọc bài viết kiến thức đã xuất bản
  const thoiGianHienTai = new Date();
  const kienThucArticles = articles.filter(
    (baiViet: any) =>
      baiViet.status === "published" &&
      (!baiViet.scheduledDate || new Date(baiViet.scheduledDate) <= thoiGianHienTai) &&
      baiViet.type === "kien-thuc"
  )
  .sort((a: any, b: any) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  .slice(0, 3)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Kiến thức từ Thư viện của Chuyên gia
          </h2>
          <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
            Cập nhật các bài viết chuyên sâu về tư vấn doanh nghiệp, giải pháp tài chính, quản trị và phát triển bền vững từ đội ngũ chuyên gia HLCC.
          </p>
        </motion.div>
        {/* Blog highlight section - Lấy từ API */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {kienThucArticles.map((article: any, idx: number) => (
            <NewsArticleCard key={article._id || article.id} article={article} index={idx} />
          ))}
        </div>
        <div className="flex justify-center mb-12">
          <button
            className="bg-[#CCA776] hover:bg-[#CCA776]/80 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300"
            onClick={() => router.push("/kien-thuc")}
          >
            Xem thêm bài viết
            <ArrowRight className="ml-2 h-5 w-5 inline" />
          </button>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${step.bgColor} border-2 border-[#CCA776]/20`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`bg-white text-[#CCA776] rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg border-2 border-[#CCA776]`}>
                      {step.step}
                    </div>
                    <div className={`bg-white p-3 rounded-full border-2 border-[#CCA776] shadow-lg bg-gradient-to-br from-[#CCA776] to-[#CCA776]`}>
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-black mb-3">
                    {step.title}
                  </CardTitle>
                  <p className="text-black leading-relaxed">
                    {step.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {step.details.map((detail, detailIdx) => (
                      <div key={detailIdx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-[#CCA776] flex-shrink-0" />
                        <span className="text-sm text-black">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-white p-8 rounded-2xl border-2 border-[#CCA776] shadow-lg mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Lợi ích của quy trình HLCC
            </h3>
            <p className="text-lg text-black">
              Quy trình chuyên nghiệp giúp đảm bảo mọi giải pháp doanh nghiệp đều được thực hiện hiệu quả và mang lại kết quả thực tế.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#CCA776] to-[#CCA776] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-black mb-2">Chính xác</h4>
              <p className="text-sm text-black">Giải quyết đúng vấn đề gốc rễ</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#CCA776] to-[#CCA776] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-black mb-2">Hiệu quả</h4>
              <p className="text-sm text-black">Tiết kiệm thời gian và chi phí</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#CCA776] to-[#CCA776] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-black mb-2">Chất lượng</h4>
              <p className="text-sm text-black">Đảm bảo kết quả bền vững</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#CCA776] to-[#CCA776] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-black mb-2">Đúng tiến độ</h4>
              <p className="text-sm text-black">Cam kết thời gian thực hiện</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white p-8 rounded-2xl text-[#CCA776] shadow-xl border-2 border-[#CCA776]">
            <h3 className="text-2xl font-bold mb-4 text-black">
              Sẵn sàng trải nghiệm quy trình chuyên nghiệp?
            </h3>
            <p className="text-lg mb-6 text-black font-semibold drop-shadow">
              Hãy để chúng tôi chứng minh sự khác biệt thông qua một buổi tư vấn miễn phí.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-[#CCA776] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#CCA776]/90 transition-all duration-300 transform hover:scale-105 border-2 border-[#CCA776] flex items-center justify-center gap-2"
                onClick={() => router.push('/lien-he#contact-form')}
              >
                Đặt lịch tư vấn miễn phí
                <ArrowRight className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
