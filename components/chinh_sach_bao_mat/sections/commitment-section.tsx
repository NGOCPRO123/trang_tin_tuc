export default function CommitmentSection() {
  return (
    <section id="commitment" className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-8 border border-[#CCA776]/50">
      <h2 className="text-2xl font-black text-black mb-6 border-b-2 border-[#CCA776] pb-2">
        1. Cam kết của chúng tôi
      </h2>

      <div className="prose prose-lg max-w-none text-black font-bold leading-relaxed space-y-4">
        <p>
          Tại <span className="font-black">HLCC (Công ty Cổ phần Cộng Đồng Sống Hạnh Phúc)</span>, chúng tôi hiểu rằng sự tin tưởng của Quý
          khách hàng và Đối tác là tài sản quý giá nhất. Vì vậy, việc bảo vệ thông tin cá nhân và dữ liệu của bạn là ưu
          tiên hàng đầu của chúng tôi.
        </p>

        <p>
          Chính sách Bảo mật này giải thích cách chúng tôi thu thập, sử dụng, lưu trữ và bảo vệ thông tin cá nhân của
          bạn khi bạn truy cập và sử dụng website <span className="font-black">[hlcc.vn]</span> cũng như các dịch vụ của chúng tôi.
        </p>

        <div className="bg-[#CCA776]/10 border-l-4 border-[#CCA776] p-4 rounded-r-lg">
          <p className="font-black">
            Bằng việc sử dụng website và dịch vụ của chúng tôi, bạn đồng ý với các điều khoản được mô tả trong chính
            sách này.
          </p>
        </div>
      </div>
    </section>
  )
}
