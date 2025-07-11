const stats = [
  {
    number: "200+",
    label: "khách hàng doanh nghiệp",
    result: "Đặt dịch vụ lại hàng năm",
  },
  {
    number: "98%",
    label: "phản hồi hài lòng",
    result: "Về thái độ, phản ứng và trách nhiệm",
  },
  {
    number: "10+",
    label: "năm kinh nghiệm",
    result: "Trong ngành bảo vệ an ninh chuyên biệt",
  },
]

const clients = [
  "Công ty A",
  "Tập đoàn B",
  "Ngân hàng C",
  "Khu đô thị D",
  "Trung tâm E",
  "Doanh nghiệp F",
  "Tổ hợp G",
  "Công ty H",
]

export default function ExperienceSection() {
  return (
    <section className="py-20 bg-[#CCA776]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-black mb-4">Kinh nghiệm thực chiến</h2>
          <p className="text-xl text-black font-bold mb-8">Đội ngũ chuyên gia từng xử lý hàng trăm vụ việc an ninh phức tạp</p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="text-4xl font-bold text-[#CCA776] mb-2">{stat.number}</div>
                <div className="text-lg font-medium text-gray-800 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.result}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="font-black text-[#CCA776] mb-2">📣 Khách hàng tin tưởng</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {clients.map((client, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <p className="text-gray-700 font-medium">{client}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
