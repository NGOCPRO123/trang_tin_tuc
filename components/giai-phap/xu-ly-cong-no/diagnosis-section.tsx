"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react"

export default function DiagnosisSection() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({})
  const [showResult, setShowResult] = useState(false)

  const questions = [
    {
      id: "q1",
      question: "Bạn có hợp đồng/hóa đơn rõ ràng?",
      weight: 3,
    },
    {
      id: "q2",
      question: "Số tiền trên 50 triệu?",
      weight: 2,
    },
    {
      id: "q3",
      question: "Đã quá 3 tháng kể từ hạn thanh toán?",
      weight: 2,
    },
    {
      id: "q4",
      question: "Bạn đã nhắc nhở nhiều lần nhưng vô hiệu quả?",
      weight: 2,
    },
    {
      id: "q5",
      question: "Họ vẫn đang hoạt động kinh doanh bình thường?",
      weight: 3,
    },
  ]

  const handleAnswer = (questionId: string, answer: boolean) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  const calculateScore = () => {
    let score = 0
    questions.forEach((q) => {
      if (answers[q.id]) score += q.weight
    })
    return score
  }

  const getResult = () => {
    const score = calculateScore()
    if (score >= 10) return { level: "critical", color: "red", message: "TÌNH TRẠNG NGHIÊM TRỌNG" }
    if (score >= 7) return { level: "warning", color: "orange", message: "CẦN HÀNH ĐỘNG NGAY" }
    if (score >= 4) return { level: "caution", color: "#FBBF24", message: "NÊN CÂN NHẮC" }
    return { level: "low", color: "green", message: "TÌNH TRẠNG ỔN ĐỊNH" }
  }

  return (
    <section className="py-20 bg-white/60 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-100 text-yellow-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              🩺 CHẨN ĐOÁN NHANH
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              TÌNH TRẠNG NỢ CỦA BẠN
              <br />
              <span className="text-yellow-600">NGHIÊM TRỌNG ĐẾN MỨC NÀO?</span>
            </h2>
            <p className="text-xl text-gray-600">Trả lời 5 câu hỏi để biết bạn đang "chảy máu" bao nhiêu</p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border-4 border-yellow-200">
            <div className="space-y-8">
              {questions.map((q, index) => (
                <div key={q.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-yellow-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">{q.question}</h3>
                      <div className="flex space-x-4">
                        <Button
                          variant={answers[q.id] === true ? "default" : "outline"}
                          onClick={() => handleAnswer(q.id, true)}
                          className={`${
                            answers[q.id] === true
                              ? "bg-green-500 hover:bg-green-600 text-white"
                              : "border-green-300 text-green-700 hover:bg-green-50"
                          }`}
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Có
                        </Button>
                        <Button
                          variant={answers[q.id] === false ? "default" : "outline"}
                          onClick={() => handleAnswer(q.id, false)}
                          className={`${
                            answers[q.id] === false
                              ? "bg-red-500 hover:bg-red-600 text-white"
                              : "border-red-300 text-red-700 hover:bg-red-50"
                          }`}
                        >
                          <XCircle className="w-4 h-4 mr-2" />
                          Không
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {Object.keys(answers).length === questions.length && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <Button
                  onClick={() => setShowResult(true)}
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-bold rounded-xl"
                >
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  XEM KẾT QUẢ CHẨN ĐOÁN
                </Button>
              </div>
            )}

            {showResult && (
              <div className="mt-8 p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border-4 border-gray-300">
                <div className="text-center">
                  <div
                    className={`text-6xl mb-4 ${
                      getResult().color === "red"
                        ? "text-red-500"
                        : getResult().color === "orange"
                          ? "text-orange-500"
                          : getResult().color === "#FBBF24"
                            ? "text-amber-500"
                            : "text-green-500"
                    }`}
                  >
                    {getResult().color === "red"
                      ? "🚨"
                      : getResult().color === "orange"
                        ? "⚠️"
                        : getResult().color === "#FBBF24"
                          ? "⚡"
                          : "✅"}
                  </div>
                  <h3
                    className={`text-3xl font-black mb-4 ${
                      getResult().color === "red"
                        ? "text-red-600"
                        : getResult().color === "orange"
                          ? "text-orange-600"
                          : getResult().color === "#FBBF24"
                            ? "text-amber-600"
                            : "text-green-600"
                    }`}
                  >
                    {getResult().message}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Điểm số của bạn: <span className="font-bold">{calculateScore()}/12</span>
                  </p>
                  {calculateScore() >= 7 && (
                    <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                      <p className="text-red-800 font-semibold text-lg">🔥 BẠN ĐANG MẤT TIỀN MỖI NGÀY!</p>
                      <p className="text-red-700 mt-2">Hãy hành động ngay trước khi quá muộn</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
