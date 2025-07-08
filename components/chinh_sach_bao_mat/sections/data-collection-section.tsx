export default function DataCollectionSection() {
  return (
    <section
      id="data-collection"
      className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-8 border border-yellow-200"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-yellow-300 pb-2">
        2. Các loại thông tin chúng tôi thu thập
      </h2>

      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
        <p>Chúng tôi có thể thu thập các loại thông tin sau từ bạn:</p>

        <div className="bg-yellow-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Thông tin cá nhân bạn cung cấp trực tiếp:</h3>
          <p>
            Khi bạn điền form liên hệ, đăng ký tư vấn, tải tài liệu hoặc đăng ký sự kiện: Họ và tên, địa chỉ email, số
            điện thoại, tên công ty, chức danh và bất kỳ thông tin nào khác bạn tự nguyện cung cấp trong nội dung tin
            nhắn.
          </p>
        </div>

        <div className="bg-amber-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Thông tin được thu thập tự động:</h3>
          <ul className="space-y-3">
            <li>
              <strong>Dữ liệu truy cập (Log Data):</strong> Khi bạn truy cập website của chúng tôi, máy chủ có thể tự
              động ghi lại các thông tin như địa chỉ IP, loại trình duyệt, phiên bản trình duyệt, các trang bạn đã truy
              cập, thời gian và ngày truy cập, và các số liệu thống kê khác.
            </li>
            <li>
              <strong>Cookies:</strong> Chúng tôi sử dụng cookies để cải thiện trải nghiệm người dùng, phân tích lưu
              lượng truy cập và cá nhân hóa nội dung. Bạn có thể cài đặt trình duyệt của mình để từ chối tất cả cookies
              hoặc để thông báo khi một cookie được gửi đi.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
