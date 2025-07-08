export default function DataSharingSection() {
  return (
    <section
      id="data-sharing"
      className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-8 border border-yellow-200"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-yellow-300 pb-2">
        4. Việc chia sẻ thông tin của bạn
      </h2>

      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
          <p className="font-semibold text-yellow-800">
            HLCC cam kết không bán, cho thuê hoặc trao đổi thông tin cá nhân của bạn cho bất kỳ bên thứ ba nào vì mục
            đích thương mại.
          </p>
        </div>

        <p>Chúng tôi chỉ chia sẻ thông tin của bạn trong các trường hợp sau:</p>

        <div className="space-y-4">
          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Nhà cung cấp dịch vụ:</h3>
            <p>
              Chúng tôi có thể chia sẻ thông tin với các đối tác cung cấp dịch vụ cho chúng tôi (ví dụ: nhà cung cấp
              dịch vụ email marketing, phân tích website) với điều kiện họ cũng phải tuân thủ các nguyên tắc bảo mật
              tương đương.
            </p>
          </div>

          <div className="bg-amber-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Yêu cầu pháp lý:</h3>
            <p>
              Chúng tôi có thể tiết lộ thông tin của bạn nếu được yêu cầu bởi luật pháp hoặc theo yêu cầu hợp lệ của các
              cơ quan công quyền (ví dụ: tòa án, cơ quan công an).
            </p>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Chuyển giao kinh doanh:</h3>
            <p>
              Trong trường hợp sáp nhập, mua lại hoặc bán một phần tài sản, thông tin của bạn có thể được chuyển giao
              như một phần của tài sản đó.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
