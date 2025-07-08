export default function Section5() {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
          <span className="text-xl font-bold text-amber-700">05</span>
        </div>
        <h2 className="text-3xl font-light text-gray-900">Miễn trừ và Giới hạn Trách nhiệm</h2>
      </div>

      <div className="space-y-6 ml-16">
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              Về tính chính xác
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Mặc dù chúng tôi nỗ lực để đảm bảo Nội dung trên Website là chính xác và cập nhật tại thời điểm đăng tải,
              chúng tôi không đưa ra bất kỳ tuyên bố hay bảo đảm nào về tính đầy đủ, chính xác, kịp thời hoặc phù hợp
              của thông tin cho bất kỳ mục đích cụ thể nào.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              Miễn trừ trách nhiệm
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              HLCC, các giám đốc, nhân viên, và đối tác của chúng tôi sẽ không chịu trách nhiệm cho bất kỳ tổn thất hoặc
              thiệt hại nào phát sinh từ việc bạn sử dụng hoặc không thể sử dụng Website hoặc Nội dung trên đó.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Bao gồm nhưng không giới hạn:</span> các thiệt hại về mất lợi nhuận, mất
                dữ liệu hoặc gián đoạn kinh doanh.
              </p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              Liên kết của bên thứ ba
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Website có thể chứa các liên kết đến các website của bên thứ ba. Các liên kết này được cung cấp chỉ nhằm
              mục đích thuận tiện. Chúng tôi không kiểm soát và không chịu trách nhiệm về nội dung, chính sách bảo mật
              hay các hoạt động của các website này.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
