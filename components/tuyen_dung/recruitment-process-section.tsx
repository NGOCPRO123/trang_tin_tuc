"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, MessageCircle, UserCheck, CheckCircle, Flag, X } from "lucide-react"

const processSteps = [
  {
    step: 1,
    title: "Nộp hồ sơ",
    description: 'Gửi CV và thư ứng tuyển của bạn qua form "Ứng tuyển ngay" hoặc email tuyển dụng.',
    icon: FileText,
    position: { top: "25%", left: "20%" },
    delay: "0s",
  },
  {
    step: 2,
    title: "Phỏng vấn với HR",
    description: "Một buổi trao đổi ngắn để chúng tôi hiểu hơn về bạn và bạn hiểu hơn về văn hóa HLCC.",
    icon: MessageCircle,
    position: { top: "40%", left: "65%" },
    delay: "0.3s",
  },
  {
    step: 3,
    title: "Phỏng vấn Chuyên môn",
    description: "Trao đổi sâu về kỹ năng và kinh nghiệm với Trưởng bộ phận hoặc thành viên Ban Giám đốc.",
    icon: UserCheck,
    position: { top: "70%", left: "30%" },
    delay: "0.6s",
  },
  {
    step: 4,
    title: "Nhận Thư mời & Gia nhập",
    description:
      "Nếu phù hợp, bạn sẽ nhận được thư mời làm việc và chính thức trở thành một phần của đội ngũ chúng tôi.",
    icon: CheckCircle,
    position: { top: "85%", left: "70%" },
    delay: "0.9s",
  },
]

export default function RecruitmentRaceTrack() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null)
  const [showModal, setShowModal] = useState(false)

  const handleStepClick = (index: number) => {
    setSelectedStep(index)
    setShowModal(false)
    setTimeout(() => {
      setShowModal(true)
    }, 400)
  }

  const closeModal = () => {
    setShowModal(false)
    setTimeout(() => setSelectedStep(null), 400)
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden min-h-screen">
      {/* Recruitment Race Track Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          {/* Main recruitment track path */}
          <path
            d="M 150 200 Q 350 100 550 200 T 850 250 Q 1050 300 950 450 Q 850 600 650 550 Q 450 500 350 600 Q 250 700 350 550 Q 450 400 650 450 Q 850 500 950 400"
            stroke="#CCA776"
            strokeWidth="60"
            fill="none"
            opacity="0.3"
            strokeLinecap="round"
          />

          {/* Track center line */}
          <path
            d="M 150 200 Q 350 100 550 200 T 850 250 Q 1050 300 950 450 Q 850 600 650 550 Q 450 500 350 600 Q 250 700 350 550 Q 450 400 650 450 Q 850 500 950 400"
            stroke="#CCA776"
            strokeWidth="4"
            fill="none"
            strokeDasharray="20,10"
            opacity="0.6"
          />

          {/* Animated progress line */}
          <path
            d="M 150 200 Q 350 100 550 200 T 850 250 Q 1050 300 950 450 Q 850 600 650 550 Q 450 500 350 600 Q 250 700 350 550 Q 450 400 650 450 Q 850 500 950 400"
            stroke="#CCA776"
            strokeWidth="3"
            fill="none"
            strokeDasharray="15,8"
            opacity="0.8"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-[#CCA776] text-white rounded-full text-sm font-bold mb-6 shadow-lg">
            🎯 Quy trình tuyển dụng HLCC
          </div>
          <h2 className="text-4xl font-black text-black mb-8">Hành trình gia nhập đội ngũ</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Chúng tôi tin vào sự minh bạch. Đây là quy trình tuyển dụng rõ ràng để bạn có thể chuẩn bị tốt nhất cho hành
            trình gia nhập HLCC.
          </p>
        </div>

        {/* Recruitment Process Checkpoints */}
        <div className="relative h-[700px] mb-16">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30"
              style={{
                top: step.position.top,
                left: step.position.left,
                animationDelay: step.delay,
              }}
            >
              {/* Process Step Marker */}
              <div className="relative group pointer-events-auto">
                {/* Process Sign Post */}
                <div className="absolute left-1/2 top-full transform -translate-x-1/2 w-3 h-20 bg-[#CCA776] rounded-full shadow-lg z-10"></div>

                {/* Process Sign */}
                <Card
                  className="w-72 bg-[#CCA776] border-4 border-white shadow-2xl cursor-pointer z-20 pointer-events-auto process-step-card"
                  onClick={() => handleStepClick(index)}
                >
                  <CardHeader className="pb-3 relative">
                    {/* Sign Shape Background */}
                    <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-white rounded-lg transform rotate-2 z-0"></div>

                    <div className="relative bg-[#CCA776] rounded-lg p-3 z-10">
                      {/* Step Number */}
                      <div className="absolute -top-4 -right-4 w-10 h-10 bg-white text-[#CCA776] rounded-full flex items-center justify-center font-black text-xl border-3 border-[#CCA776] shadow-lg z-20">
                        {step.step}
                      </div>

                      {/* Icon as Process Sign */}
                      <div className="mx-auto w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-3 shadow-inner">
                        <step.icon className="h-8 w-8 text-[#CCA776]" />
                      </div>

                      <CardTitle className="text-lg font-black text-white text-center mb-2 leading-tight">
                        {step.title}
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent className="bg-white rounded-b-lg p-3">
                    <p className="text-gray-800 font-medium text-xs leading-relaxed line-clamp-3">{step.description}</p>
                  </CardContent>
                                  </Card>

                {/* Step Glow Effect */}
                <div className="absolute inset-0 bg-[#CCA776] rounded-lg opacity-10 blur-xl scale-105 z-0"></div>
              </div>
            </div>
          ))}

          {/* Start Line */}
          <div className="absolute top-[23%] left-[13%] transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="bg-white border-4 border-[#CCA776] rounded-lg px-4 py-2 shadow-lg">
              <span className="text-[#CCA776] font-black text-sm">📝 BẮT ĐẦU</span>
            </div>
          </div>
        </div>

        {/* Finish Line - Welcome to Team */}
        <div className="text-center relative">
          <div className="inline-block relative">
            {/* Checkered Flag Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-white to-black opacity-10 rounded-2xl"></div>

            <div className="bg-[#CCA776] text-white px-12 py-8 rounded-2xl shadow-2xl relative overflow-hidden">
              {/* Racing Stripes */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
              <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>

              <Flag className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-3xl font-black mb-4">🎉 CHÀO MỪNG</h3>
              <p className="text-xl font-bold">Bạn đã chính thức gia nhập đội ngũ HLCC!</p>
              <div className="mt-4 text-sm opacity-90">Hành trình phát triển sự nghiệp bắt đầu từ đây</div>
            </div>
          </div>
        </div>

        {/* Modal for detailed process step */}
        {showModal && selectedStep !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                            <div 
                  className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
                >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-[#CCA776] text-white rounded-full flex items-center justify-center hover:bg-[#B8956A] transition-colors z-10"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal content */}
              <div className="p-8">
                {/* Header with step info */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#CCA776] rounded-full mb-4">
                    {React.createElement(processSteps[selectedStep].icon, {
                      className: "h-10 w-10 text-white",
                    })}
                  </div>
                  <div className="inline-flex items-center px-4 py-2 bg-[#CCA776] text-white rounded-full text-sm font-bold mb-4">
                    Bước {processSteps[selectedStep].step}
                  </div>
                  <h3 className="text-3xl font-black text-[#CCA776] mb-4">{processSteps[selectedStep].title}</h3>
                </div>

                {/* Detailed content */}
                <div className="bg-gradient-to-br from-[#CCA776]/10 to-[#CCA776]/20 rounded-xl p-6 mb-6">
                  <p className="text-lg text-gray-800 leading-relaxed font-medium">
                    {processSteps[selectedStep].description}
                  </p>
                </div>

                {/* Additional process details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white border-2 border-[#CCA776] rounded-lg p-4">
                    <h4 className="font-bold text-[#CCA776] mb-2">⏱️ Thời gian dự kiến</h4>
                    <p className="text-sm text-gray-600">
                      {selectedStep === 0 && "1-2 ngày xử lý hồ sơ"}
                      {selectedStep === 1 && "30-45 phút phỏng vấn"}
                      {selectedStep === 2 && "60-90 phút phỏng vấn chuyên môn"}
                      {selectedStep === 3 && "2-3 ngày thông báo kết quả"}
                    </p>
                  </div>
                  <div className="bg-white border-2 border-[#CCA776] rounded-lg p-4">
                    <h4 className="font-bold text-[#CCA776] mb-2">📋 Chuẩn bị</h4>
                    <p className="text-sm text-gray-600">
                      {selectedStep === 0 && "CV chi tiết và thư ứng tuyển"}
                      {selectedStep === 1 && "Tìm hiểu về HLCC và văn hóa công ty"}
                      {selectedStep === 2 && "Chuẩn bị kiến thức chuyên môn và dự án"}
                      {selectedStep === 3 && "Chuẩn bị tâm lý và thủ tục nhập việc"}
                    </p>
                  </div>
                </div>

                {/* Tips section */}
                <div className="bg-gradient-to-r from-[#CCA776]/5 to-[#CCA776]/10 rounded-lg p-4 mt-4">
                  <h4 className="font-bold text-[#CCA776] mb-2">💡 Lời khuyên</h4>
                  <p className="text-sm text-gray-700">
                    {selectedStep === 0 && "Hãy thể hiện rõ động lực và sự phù hợp với vị trí trong thư ứng tuyển"}
                    {selectedStep === 1 && "Hãy tự nhiên và thể hiện tính cách thật của bạn"}
                    {selectedStep === 2 && "Chuẩn bị các câu hỏi về công việc để thể hiện sự quan tâm"}
                    {selectedStep === 3 && "Đọc kỹ hợp đồng và đừng ngại hỏi nếu có thắc mắc"}
                  </p>
                </div>

                {/* Action button */}
                <div className="text-center mt-8">
                  <button
                    onClick={closeModal}
                    className="bg-[#CCA776] text-white px-8 py-3 rounded-full font-bold hover:bg-[#B8956A] transition-colors"
                  >
                    Tiếp tục hành trình 🚀
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .process-step-card {
          transform: scale(1) rotate(1deg) !important;
          transition: all 0.3s ease !important;
        }

        .process-step-card:hover {
          transform: scale(1.1) rotate(0deg) !important;
          z-index: 30 !important;
        }
      `}</style>
    </section>
  )
}
