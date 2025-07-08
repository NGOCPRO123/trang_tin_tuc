import { FileText, MessageCircle, UserCheck, CheckCircle } from "lucide-react"

const processSteps = [
  {
    step: 1,
    title: "Nộp hồ sơ",
    description: 'Gửi CV và thư ứng tuyển của bạn qua form "Ứng tuyển ngay" hoặc email tuyển dụng.',
    icon: FileText,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    step: 2,
    title: "Phỏng vấn với HR",
    description: "Một buổi trao đổi ngắn để chúng tôi hiểu hơn về bạn và bạn hiểu hơn về văn hóa HLCC.",
    icon: MessageCircle,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    step: 3,
    title: "Phỏng vấn Chuyên môn",
    description: "Trao đổi sâu về kỹ năng và kinh nghiệm với Trưởng bộ phận hoặc thành viên Ban Giám đốc.",
    icon: UserCheck,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    step: 4,
    title: "Nhận Thư mời & Gia nhập",
    description:
      "Nếu phù hợp, bạn sẽ nhận được thư mời làm việc và chính thức trở thành một phần của đội ngũ chúng tôi.",
    icon: CheckCircle,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
]

export default function RecruitmentProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Hành trình trở thành một thành viên của HLCC
          </h2>
          <p className="text-lg text-gray-600">
            Chúng tôi tin vào sự minh bạch. Đây là quy trình tuyển dụng của chúng tôi để bạn có thể chuẩn bị tốt nhất.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className={`mx-auto w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mb-4`}>
                  <step.icon className={`h-8 w-8 ${step.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.step}. {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
