export default function Section4() {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
          <span className="text-xl font-bold text-amber-700">04</span>
        </div>
        <h2 className="text-3xl font-light text-gray-900">Các hành vi bị cấm</h2>
      </div>

      <div className="space-y-6 ml-16">
        <p className="text-gray-600 leading-relaxed text-lg">
          Khi sử dụng Website, bạn đồng ý sẽ không thực hiện các hành vi sau:
        </p>

        <div className="space-y-4">
          {[
            {
              title: "Vi phạm pháp luật",
              description:
                "Sử dụng Website cho bất kỳ mục đích bất hợp pháp nào hoặc vi phạm các quy định của pháp luật.",
            },
            {
              title: "Nội dung có hại",
              description:
                "Đăng tải, truyền bá bất kỳ nội dung nào có tính chất đe dọa, phỉ báng, tục tĩu, hoặc xâm phạm quyền riêng tư của người khác.",
            },
            {
              title: "Can thiệp hệ thống",
              description:
                "Cố gắng can thiệp vào hoạt động của Website, bao gồm việc phát tán virus, tấn công từ chối dịch vụ (DoS), hoặc sử dụng các công cụ tự động để thu thập dữ liệu.",
            },
            {
              title: "Mạo danh",
              description: "Mạo danh bất kỳ cá nhân hoặc tổ chức nào, bao gồm cả nhân viên của HLCC.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
