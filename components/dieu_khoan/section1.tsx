export default function Section1() {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
          <span className="text-xl font-bold text-amber-700">01</span>
        </div>
        <h2 className="text-3xl font-light text-gray-900">Chấp nhận Điều khoản</h2>
      </div>

      <div className="space-y-6 text-gray-600 leading-relaxed ml-16">
        <p className="text-lg">
          Chào mừng Quý khách đến với website <span className="font-semibold text-amber-700">hlcc.vn</span> ("Website"),
          được sở hữu và vận hành bởi Công ty Cổ phần Cộng Đồng Sống Hạnh Phúc ("HLCC", "chúng tôi").
        </p>

        <p>
          Bằng việc truy cập và sử dụng Website này, bạn ("Người dùng", "bạn") đồng ý tuân thủ và bị ràng buộc bởi các
          điều khoản và điều kiện được quy định trong văn bản này ("Điều khoản Sử dụng"), cũng như Chính sách Bảo mật
          của chúng tôi. Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này, vui lòng không sử dụng Website
          của chúng tôi.
        </p>

        <div className="border-l-4 border-amber-200 pl-6 py-4 bg-amber-50/50 rounded-r-lg">
          <p className="text-gray-700 font-medium">
            Chúng tôi có quyền sửa đổi, cập nhật các Điều khoản Sử dụng này vào bất kỳ lúc nào mà không cần thông báo
            trước. Việc bạn tiếp tục sử dụng Website sau khi có bất kỳ thay đổi nào đồng nghĩa với việc bạn chấp nhận
            các điều khoản đã được sửa đổi.
          </p>
        </div>
      </div>
    </section>
  )
}
