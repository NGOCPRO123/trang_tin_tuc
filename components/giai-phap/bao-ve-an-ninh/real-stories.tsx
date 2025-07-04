"use client"

import { Quote, Star, Calendar } from "lucide-react"
import { useState } from "react"

const stories = [
  {
    title: "Ngăn chặn vụ trộm 50 tỷ trong đêm",
    client: "Tập đoàn ABC",
    date: "15/11/2024",
    story:
      "3h07 sáng, camera phát hiện bóng người lạ. Thay vì chờ xem, nhân viên chúng tôi đã phân tích ngay: 'Cách di chuyển không tự nhiên, có thể mang công cụ'. Kết quả: Bắt quả tang nhóm trộm chuyên nghiệp với thiết bị cắt két sắt.",
    impact: "Tài sản được bảo toàn 100%",
    rating: 5,
    avatar: "👨‍💼",
  },
  {
    title: "Cứu sống người đàn ông đột quỵ",
    client: "Chung cư Sunrise",
    date: "08/10/2024",
    story:
      "Nhân viên bảo vệ phát hiện ông A đi lại không vững trong sảnh. Thay vì nghĩ 'say rượu', anh đã áp dụng kiến thức y tế: kiểm tra dấu hiệu đột quỵ và gọi cấp cứu ngay. Bác sĩ xác nhận: thêm 10 phút là quá muộn.",
    impact: "Cứu sống 1 người, tránh di chứng nặng",
    rating: 5,
    avatar: "👩‍⚕️",
  },
  {
    title: "Xử lý khách hàng hung hăng không gây xung đột",
    client: "Ngân hàng XYZ",
    date: "22/09/2024",
    story:
      "Khách hàng tức giận vì mất tiền, đe dọa 'đập phá ngân hàng'. Nhân viên chúng tôi không dùng vũ lực mà áp dụng kỹ thuật đàm phán: lắng nghe, thấu hiểu, hướng dẫn giải quyết. Cuối cùng khách hàng cảm ơn và xin lỗi.",
    impact: "Không xung đột, khách hàng hài lòng",
    rating: 5,
    avatar: "🏦",
  },
]

export default function RealStories() {
  const [activeStory, setActiveStory] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-amber-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Câu chuyện có thật, không phải quảng cáo</h2>
            <p className="text-xl text-gray-600">Khi chuyên nghiệp thể hiện qua hành động cụ thể</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Story selector */}
            <div className="space-y-4">
              {stories.map((story, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-2xl cursor-pointer transition-all ${
                    activeStory === index
                      ? "bg-white shadow-lg border-2 border-yellow-400"
                      : "bg-white/70 hover:bg-white hover:shadow-md"
                  }`}
                  onClick={() => setActiveStory(index)}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{story.avatar}</span>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">{story.client}</h3>
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>{story.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-800">{story.title}</p>
                </div>
              ))}
            </div>

            {/* Story detail */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-start space-x-4 mb-6">
                  <Quote className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{stories[activeStory].title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <span>{stories[activeStory].client}</span>
                      <span>•</span>
                      <span>{stories[activeStory].date}</span>
                      <div className="flex items-center space-x-1">
                        {[...Array(stories[activeStory].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 text-lg">{stories[activeStory].story}</p>

                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-4 border-l-4 border-green-500">
                  <h4 className="font-bold text-green-800 mb-1">Kết quả:</h4>
                  <p className="text-green-700">{stories[activeStory].impact}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
