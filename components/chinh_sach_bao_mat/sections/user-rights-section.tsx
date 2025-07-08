export default function UserRightsSection() {
  return (
    <section
      id="user-rights"
      className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-8 border border-yellow-200"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-yellow-300 pb-2">
        6. Quyền của bạn đối với thông tin cá nhân
      </h2>

      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
        <p>Bạn có các quyền sau đối với thông tin cá nhân của mình:</p>

        <div className="grid gap-4">
          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">Quyền truy cập:</h3>
            <p>Bạn có quyền yêu cầu một bản sao thông tin cá nhân mà chúng tôi đang lưu trữ về bạn.</p>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-3">Quyền chỉnh sửa:</h3>
            <p>Bạn có quyền yêu cầu chúng tôi chỉnh sửa bất kỳ thông tin nào không chính xác hoặc chưa hoàn chỉnh.</p>
          </div>

          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-800 mb-3">Quyền xóa bỏ:</h3>
            <p>Bạn có quyền yêu cầu chúng tôi xóa thông tin cá nhân của bạn trong một số trường hợp nhất định.</p>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-3">Quyền rút lại sự đồng ý:</h3>
            <p>
              Nếu bạn đã đồng ý cho chúng tôi sử dụng thông tin của mình cho một mục đích cụ thể (ví dụ: nhận email
              marketing), bạn có quyền rút lại sự đồng ý đó bất cứ lúc nào.
            </p>
          </div>
        </div>

        <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
          <p className="font-medium text-center">
            Để thực hiện các quyền này, vui lòng liên hệ với chúng tôi qua thông tin bên dưới.
          </p>
        </div>
      </div>
    </section>
  )
}
