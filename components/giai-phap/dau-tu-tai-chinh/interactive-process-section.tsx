"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Brain, Target, Shield, TrendingUp, Eye } from "lucide-react"

export function InteractiveProcessSection() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      icon: Brain,
      title: "PHÂN TÍCH TÂM LÝ",
      subtitle: "Hiểu bản thân trước khi đầu tư",
      description: "Chúng tôi không hỏi bạn muốn lãi bao nhiều. Chúng tôi hỏi bạn có thể chấp nhận mất bao nhiều.",
      details: [
        "Test tâm lý đầu tư chuyên sâu",
        "Phân tích khả năng chịu rủi ro",
        "Xác định mục tiêu thực tế",
        "Đánh giá tình hình tài chính hiện tại",
      ],
      color: "from-[#CCA776] to-[#CCA776]/80",
    },
    {
      icon: Target,
      title: "THIẾT KẾ CHIẾN LƯỢC",
      subtitle: "Xây dựng kế hoạch cá nhân hóa",
      description: "Không có chiến lược nào phù hợp với tất cả. Chiến lược của bạn chỉ dành riêng cho bạn.",
      details: [
        "Phân bổ tài sản theo tỷ lệ vàng",
        "Chọn lọc công cụ đầu tư phù hợp",
        "Thiết lập mốc thời gian cụ thể",
        "Xây dựng kế hoạch B khi thị trường biến động",
      ],
      color: "from-[#CCA776] to-[#CCA776]/80",
    },
    {
      icon: Shield,
      title: "KIỂM SOÁT RỦI RO",
      subtitle: "Bảo vệ vốn là ưu tiên số 1",
      description: "Quy tắc đầu tiên: Không mất tiền. Quy tắc thứ hai: Không quên quy tắc đầu tiên.",
      details: [
        "Đặt lệnh stop-loss tự động",
        "Đa dạng hóa danh mục đầu tư",
        "Dự phòng cho các tình huống xấu",
        "Kiểm tra và điều chỉnh định kỳ",
      ],
      color: "from-[#CCA776] to-[#CCA776]/80",
    },
    {
      icon: TrendingUp,
      title: "THỰC THI & THEO DÕI",
      subtitle: "Hành động nhất quán và kiên nhẫn",
      description:
        "Kế hoạch tốt nhất cũng vô dụng nếu không thực hiện. Chúng tôi đảm bảo bạn không bỏ cuộc giữa chừng.",
      details: [
        "Thực hiện giao dịch theo kế hoạch",
        "Báo cáo hiệu quả hàng tuần",
        "Điều chỉnh khi cần thiết",
        "Tư vấn tâm lý khi thị trường biến động",
      ],
      color: "from-[#CCA776] to-[#CCA776]/80",
    },
    {
      icon: Eye,
      title: "MINH BẠCH KẾT QUẢ",
      subtitle: "Mọi thứ đều được báo cáo rõ ràng",
      description: "Bạn sẽ biết chính xác tiền của mình ở đâu, làm gì, và sinh lời như thế nào.",
      details: [
        "Dashboard theo dõi real-time",
        "Báo cáo chi tiết hàng tháng",
        "So sánh với chỉ số thị trường",
        "Tư vấn tối ưu hóa liên tục",
      ],
      color: "from-[#CCA776] to-[#CCA776]/80",
    },
  ]

  const Icon = steps[activeStep].icon;

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-black mb-8">
            HỆ THỐNG
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#CCA776] to-[#CCA776]/80">
              5 BƯỚC VÀNG
            </span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Không phải magic, không phải may mắn. Chỉ là khoa học và kỷ luật.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Step navigation */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {steps.map((step, index) => (
              <Button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`rounded-full px-6 py-3 transition-all duration-300 ${
                  activeStep === index
                    ? `bg-gradient-to-r ${step.color} text-white shadow-lg scale-105`
                    : "bg-white text-black hover:text-black border border-gray-200"
                }`}
              >
                {step.icon && <step.icon className="w-5 h-5 mr-2" />}
                Bước {index + 1}
              </Button>
            ))}
          </div>

          {/* Active step content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className={`inline-flex items-center space-x-3 bg-gradient-to-r ${steps[activeStep].color} text-white px-6 py-3 rounded-full mb-6`}>
                  <Icon className="w-6 h-6" />
                  <span className="font-bold">BƯỚC {activeStep + 1}</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-black mb-4">
                  {steps[activeStep].title}
                </h3>
                <p className="text-xl text-[#CCA776] font-semibold mb-6">
                  {steps[activeStep].subtitle}
                </p>
                <p className="text-lg text-black leading-relaxed">
                  {steps[activeStep].description}
                </p>
              </div>

              <div className="space-y-4">
                {steps[activeStep].details.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <ChevronRight className="w-5 h-5 text-[#CCA776]" />
                    <span className="text-black">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Card className="border-none shadow-2xl bg-white">
                <CardContent className="p-8">
                  <div className={`w-full h-64 bg-gradient-to-br ${steps[activeStep].color} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="w-24 h-24 text-white" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-black mb-2">
                      {steps[activeStep].title}
                    </h4>
                    <p className="text-black">
                      {steps[activeStep].subtitle}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
