export default function ContactSection() {
  return (
    <section id="contact" className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-8 border border-[#CCA776]/50">
      <h2 className="text-2xl font-black text-black mb-6 border-b-2 border-[#CCA776] pb-2">
        7. Liên hệ với chúng tôi
      </h2>

      <div className="prose prose-lg max-w-none text-black font-bold leading-relaxed space-y-6">
        <p>
          Nếu bạn có bất kỳ câu hỏi, thắc mắc hoặc yêu cầu nào liên quan đến Chính sách Bảo mật này, vui lòng liên hệ
          với chúng tôi qua:
        </p>

        <div className="bg-gradient-to-r from-[#CCA776]/20 to-[#CCA776]/20 rounded-xl p-8 border border-[#CCA776]">
          <h3 className="text-xl font-black text-[#CCA776] mb-6 text-center">
            Công ty Cổ phần Cộng Đồng Sống Hạnh Phúc (HLCC)
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-[#CCA776]/20 rounded-full p-2 mt-1">
                  <svg className="w-5 h-5 text-[#CCA776]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-black">Địa chỉ:</p>
                  <p className="font-bold">[Địa chỉ công ty của bạn]</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-[#CCA776]/20 rounded-full p-2 mt-1">
                  <svg className="w-5 h-5 text-[#CCA776]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-black">Email:</p>
                  <p className="font-bold">legal@hlcc.com.vn</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-[#CCA776]/20 rounded-full p-2 mt-1">
                  <svg className="w-5 h-5 text-[#CCA776]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-black">Số điện thoại:</p>
                  <p className="font-bold">[Số điện thoại công ty]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
