export default function Section3() {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-[#CCA776]/20 rounded-xl flex items-center justify-center">
          <span className="text-xl font-bold text-[#CCA776]">03</span>
        </div>
        <h2 className="text-2xl font-black text-black mb-4">3. Quyền và trách nhiệm của người dùng</h2>
      </div>

      <div className="text-black font-bold leading-relaxed space-y-4">
        <p className="text-gray-600 leading-relaxed text-lg">
          Toàn bộ Nội dung, thiết kế, logo, nhãn hiệu, hình ảnh, video và các tài sản trí tuệ khác trên Website này là
          tài sản của HLCC hoặc được chúng tôi cấp phép sử dụng và được bảo vệ bởi luật pháp về sở hữu trí tuệ của Việt
          Nam và các công ước quốc tế.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#CCA776]/20 rounded-lg flex items-center justify-center">
                <span className="text-[#CCA776] font-bold text-sm">✓</span>
              </div>
              <h3 className="font-semibold text-gray-900">Được phép</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Xem, tải về và in các tài liệu từ Website cho mục đích cá nhân, phi thương mại.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#CCA776]/20 rounded-lg flex items-center justify-center">
                <span className="text-[#CCA776] font-bold text-sm">✕</span>
              </div>
              <h3 className="font-semibold text-gray-900">Bị cấm</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sao chép, sửa đổi, phân phối, xuất bản lại, truyền tải hoặc tạo ra các tác phẩm phái sinh mà không có sự
              cho phép bằng văn bản.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
