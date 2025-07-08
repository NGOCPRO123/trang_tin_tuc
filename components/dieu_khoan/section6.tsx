export default function Section6() {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
          <span className="text-xl font-bold text-amber-700">06</span>
        </div>
        <h2 className="text-3xl font-light text-gray-900">Luật áp dụng và Thẩm quyền giải quyết</h2>
      </div>

      <div className="space-y-6 ml-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              Luật áp dụng
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Các Điều khoản Sử dụng này sẽ được điều chỉnh và giải thích theo pháp luật của nước Cộng hòa Xã hội Chủ
              nghĩa Việt Nam.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              Giải quyết tranh chấp
            </h3>
            <div className="space-y-2 text-gray-600">
              <p className="text-sm">
                <span className="font-medium">Bước 1:</span> Thương lượng, hòa giải
              </p>
              <p className="text-sm">
                <span className="font-medium">Bước 2:</span> Tòa án có thẩm quyền tại TP. Hồ Chí Minh
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
