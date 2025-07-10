"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import JobCard from "@/components/job-card"

const jobPositions = [
  {
    id: "finance-consultant",
    title: "Chuyên viên Tư vấn Tài chính Doanh nghiệp",
    subtitle: "Senior Corporate Finance Consultant",
    department: "Tư vấn Tài chính",
    location: "TP. Hồ Chí Minh",
    type: "Toàn thời gian",
    featured: true,
    jobDescription: [
      "Trực tiếp tham gia vào các dự án tư vấn tái cấu trúc, huy động vốn, M&A",
      "Phân tích mô hình tài chính, định giá doanh nghiệp và xây dựng các báo cáo chuyên sâu",
      "Làm việc trực tiếp với ban lãnh đạo của các doanh nghiệp khách hàng",
    ],
    requirements: [
      "Tối thiểu 3 năm kinh nghiệm trong lĩnh vực tài chính, kiểm toán, đầu tư",
      "Có chứng chỉ CFA, ACCA là một lợi thế lớn",
      "Kỹ năng phân tích, giải quyết vấn đề và giao tiếp xuất sắc",
    ],
    benefits: [
      "💰 Mức lương cạnh tranh và thưởng theo hiệu quả dự án",
      "🚀 Cơ hội trở thành Trưởng nhóm/Quản lý dự án",
      "📚 Được đào tạo và phát triển theo lộ trình sự nghiệp rõ ràng",
    ],
  },
  {
    id: "accountant",
    title: "Chuyên viên Kế toán - Thuế",
    subtitle: "",
    department: "Kế toán & Thuế",
    location: "TP. Hồ Chí Minh",
    type: "Toàn thời gian",
    featured: false,
    jobDescription: [
      "Thực hiện công tác kế toán tổng hợp và lập báo cáo tài chính",
      "Tư vấn thuế và thực hiện các thủ tục thuế cho khách hàng",
      "Hỗ trợ kiểm toán và đảm bảo tuân thủ các quy định pháp luật",
    ],
    requirements: [
      "Tốt nghiệp chuyên ngành Kế toán, Tài chính",
      "Có ít nhất 2 năm kinh nghiệm trong lĩnh vực kế toán thuế",
      "Thành thạo các phần mềm kế toán và Excel",
    ],
    benefits: ["💰 Mức lương cạnh tranh", "📚 Đào tạo chuyên môn định kỳ", "🏥 Bảo hiểm sức khỏe toàn diện"],
  },
  {
    id: "lawyer",
    title: "Luật sư Doanh nghiệp",
    subtitle: "",
    department: "Pháp lý",
    location: "TP. Hồ Chí Minh",
    type: "Toàn thời gian",
    featured: false,
    jobDescription: [
      "Tư vấn pháp lý cho các doanh nghiệp trong và ngoài nước",
      "Soạn thảo và rà soát các hợp đồng, văn bản pháp lý",
      "Đại diện khách hàng trong các vụ việc tranh chấp",
    ],
    requirements: [
      "Có chứng chỉ hành nghề luật sư",
      "Kinh nghiệm tối thiểu 3 năm trong lĩnh vực luật doanh nghiệp",
      "Tiếng Anh giao tiếp tốt",
    ],
    benefits: [
      "💰 Mức lương hấp dẫn",
      "🎓 Hỗ trợ học tập và nâng cao trình độ",
      "🌟 Môi trường làm việc chuyên nghiệp",
    ],
  },
  {
    id: "intern",
    title: "Thực tập sinh Phân tích Kinh doanh",
    subtitle: "",
    department: "Phân tích",
    location: "TP. Hồ Chí Minh",
    type: "Thực tập",
    featured: false,
    jobDescription: [
      "Hỗ trợ phân tích dữ liệu và lập báo cáo kinh doanh",
      "Tham gia nghiên cứu thị trường và đối thủ cạnh tranh",
      "Hỗ trợ các dự án tư vấn chiến lược",
    ],
    requirements: [
      "Sinh viên năm 3, 4 các ngành Kinh tế, Tài chính, Quản trị",
      "Có khả năng sử dụng Excel, PowerPoint thành thạo",
      "Tư duy logic và khả năng học hỏi nhanh",
    ],
    benefits: [
      "💡 Trải nghiệm thực tế tại môi trường doanh nghiệp",
      "👥 Được mentor bởi các chuyên gia",
      "🎯 Cơ hội được tuyển dụng chính thức",
    ],
  },
]

export default function JobPositionsSection() {
  return (
    <section id="job-positions" className="py-24 bg-gradient-to-br from-gray-50 to-[#CCA776]/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-[#CCA776]/20 text-[#CCA776] rounded-full text-sm font-medium mb-6">
            🎯 Cơ hội nghề nghiệp
          </div>
          <h2 className="text-3xl font-black text-black mb-8">Vị trí đang tuyển dụng</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nếu bạn đã sẵn sàng cho những thử thách lớn, hãy xem các vị trí mà chúng tôi đang tìm kiếm.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {jobPositions.map((job) => (
              <AccordionItem
                key={job.id}
                value={job.id}
                className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-[#CCA776]/10 transition-colors">
                  <JobCard job={job} />
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-6">
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                          <span className="w-2 h-2 bg-[#CCA776] rounded-full mr-3"></span>
                          Mô tả công việc:
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          {job.jobDescription.map((desc, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-[#CCA776] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-[#CCA776]/10 rounded-xl p-6">
                        <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                          <span className="w-2 h-2 bg-[#CCA776] rounded-full mr-3"></span>
                          Yêu cầu ứng viên:
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-[#CCA776] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {job.benefits && (
                        <div className="bg-gradient-to-br from-[#CCA776] to-[#CCA776] text-white rounded-xl p-6">
                          <h4 className="font-bold mb-4 flex items-center">
                            <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                            Quyền lợi:
                          </h4>
                          <ul className="space-y-2 text-sm">
                            {job.benefits.map((benefit, index) => (
                              <li key={index}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <button className="w-full bg-[#CCA776] hover:bg-[#CCA776]/80 text-white py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg">
                        Ứng tuyển ngay
                      </button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
