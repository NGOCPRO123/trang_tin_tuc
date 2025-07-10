export default function DataSecuritySection() {
  return (
    <section
      id="data-security"
      className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-8 border border-[#CCA776]/50"
    >
      <h2 className="text-2xl font-black text-black mb-6 border-b-2 border-[#CCA776] pb-2">
        5. An toàn dữ liệu của bạn
      </h2>

      <div className="prose prose-lg max-w-none text-black font-bold leading-relaxed space-y-6">
        <div className="bg-white rounded-lg p-6">
          <p className="text-black">
            Chúng tôi áp dụng các biện pháp bảo mật vật lý và kỹ thuật phù hợp để bảo vệ thông tin của bạn khỏi bị truy
            cập, sử dụng hoặc tiết lộ trái phép. Các biện pháp này bao gồm mã hóa dữ liệu, tường lửa và các quy trình
            kiểm soát truy cập nội bộ.
          </p>
        </div>

        <div className="bg-white border-l-4 border-[#CCA776] p-4 rounded-r-lg">
          <p className="font-black text-black">
            Tuy nhiên, không có phương thức truyền tải qua Internet hoặc phương pháp lưu trữ điện tử nào là an toàn
            100%. Mặc dù chúng tôi nỗ lực hết sức để bảo vệ thông tin cá nhân của bạn, chúng tôi không thể đảm bảo an
            ninh tuyệt đối.
          </p>
        </div>
      </div>
    </section>
  )
}
