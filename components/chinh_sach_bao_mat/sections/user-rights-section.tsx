export default function UserRightsSection() {
  return (
    <section
      id="user-rights"
      className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-8 border border-[#CCA776]/50"
    >
      <h2 className="text-2xl font-black text-black mb-6 border-b-2 border-[#CCA776] pb-2">
        6. Quyền của bạn đối với thông tin cá nhân
      </h2>

      <div className="prose prose-lg max-w-none text-black font-bold leading-relaxed space-y-6">
        <p>Bạn có các quyền sau đối với thông tin cá nhân của mình:</p>

        <div className="grid gap-4">
          <div className="bg-[#CCA776]/10 rounded-lg p-6">
            <h3 className="text-lg font-black text-[#CCA776] mb-3">Quyền truy cập:</h3>
            <p>Bạn có quyền yêu cầu một bản sao thông tin cá nhân mà chúng tôi đang lưu trữ về bạn.</p>
          </div>

          <div className="bg-[#CCA776]/10 rounded-lg p-6">
            <h3 className="text-lg font-black text-[#CCA776] mb-3">Quyền chỉnh sửa:</h3>
            <p>Bạn có quyền yêu cầu chúng tôi chỉnh sửa bất kỳ thông tin nào không chính xác hoặc chưa hoàn chỉnh.</p>
          </div>

          <div className="bg-[#CCA776]/10 rounded-lg p-6">
            <h3 className="text-lg font-black text-[#CCA776] mb-3">Quyền xóa bỏ:</h3>
            <p>Bạn có quyền yêu cầu chúng tôi xóa thông tin cá nhân của bạn trong một số trường hợp nhất định.</p>
          </div>

          <div className="bg-[#CCA776]/10 rounded-lg p-6">
            <h3 className="text-lg font-black text-[#CCA776] mb-3">Quyền rút lại sự đồng ý:</h3>
            <p>
              Nếu bạn đã đồng ý cho chúng tôi sử dụng thông tin của mình cho một mục đích cụ thể (ví dụ: nhận email
              marketing), bạn có quyền rút lại sự đồng ý đó bất cứ lúc nào.
            </p>
          </div>
        </div>

        <div className="bg-[#CCA776]/20 border border-[#CCA776] rounded-lg p-4">
          <p className="font-black text-center">
            Để thực hiện các quyền này, vui lòng liên hệ với chúng tôi qua thông tin bên dưới.
          </p>
        </div>
      </div>
    </section>
  )
}
