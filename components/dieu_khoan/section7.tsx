export default function Section7() {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
          <span className="text-xl font-bold text-amber-700">07</span>
        </div>
        <h2 className="text-3xl font-light text-gray-900">Các điều khoản khác</h2>
      </div>

      <div className="space-y-6 ml-16">
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              Tính hiệu lực từng phần
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Nếu bất kỳ điều khoản nào trong văn bản này bị tòa án có thẩm quyền tuyên bố là vô hiệu hoặc không thể thi
              hành, các điều khoản còn lại sẽ vẫn có hiệu lực đầy đủ.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              Liên hệ
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Nếu bạn có bất kỳ câu hỏi nào về các Điều khoản Sử dụng này, vui lòng liên hệ với chúng tôi qua thông tin
              được cung cấp trên trang Liên hệ của Website.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="text-center space-y-2">
            <p className="text-gray-700 font-medium">© 2025 Công ty Cổ phần Cộng Đồng Sống Hạnh Phúc (HLCC)</p>
            <p className="text-gray-500 text-sm">Mọi quyền được bảo lưu</p>
          </div>
        </div>
      </div>
    </section>
  )
}
