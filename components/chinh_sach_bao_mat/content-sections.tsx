export default function ContentSections() {
  return (
    <main className="flex-1 max-w-4xl space-y-16 pb-16">
      {/* Section 1: Commitment */}
      <section id="commitment" className="group">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">01</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Cam kết của chúng tôi</h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 border-l-4 border-yellow-400">
              <p className="text-lg font-medium text-gray-800 mb-4">
                Tại <strong>HLCC (Công ty Cổ phần Cộng Đồng Sống Hạnh Phúc)</strong>, sự tin tưởng của bạn là tài sản
                quý giá nhất của chúng tôi.
              </p>
            </div>

            <p className="text-gray-600">
              Chính sách Bảo mật này giải thích cách chúng tôi thu thập, sử dụng, lưu trữ và bảo vệ thông tin cá nhân
              của bạn khi bạn truy cập website <strong className="text-yellow-600">hlcc.vn</strong> và sử dụng các dịch
              vụ của chúng tôi.
            </p>

            <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
              <p className="text-yellow-800 font-medium text-center">
                💡 Bằng việc sử dụng dịch vụ của chúng tôi, bạn đồng ý với chính sách này
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Data Collection */}
      <section id="data-collection" className="group">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">02</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Thu thập thông tin</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-yellow-800 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                Thông tin trực tiếp
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Họ tên, email, số điện thoại</li>
                <li>• Tên công ty và chức danh</li>
                <li>• Nội dung tin nhắn liên hệ</li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-yellow-800 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                Thông tin tự động
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Địa chỉ IP và dữ liệu truy cập</li>
                <li>• Thông tin trình duyệt</li>
                <li>• Cookies và tracking data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Data Usage */}
      <section id="data-usage" className="group">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">03</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Sử dụng thông tin</h2>
          </div>

          <div className="grid gap-4">
            {[
              { icon: "🎯", title: "Cung cấp dịch vụ", desc: "Liên hệ tư vấn và gửi tài liệu theo yêu cầu" },
              { icon: "📈", title: "Cải thiện dịch vụ", desc: "Phân tích và tối ưu trải nghiệm người dùng" },
              { icon: "📧", title: "Liên lạc marketing", desc: "Gửi newsletter và thông tin hữu ích (có thể hủy)" },
              { icon: "🔒", title: "Bảo mật & tuân thủ", desc: "Đảm bảo an ninh và thực hiện nghĩa vụ pháp lý" },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-yellow-50/50 transition-colors">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Data Sharing */}
      <section id="data-sharing" className="group">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">04</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Chia sẻ thông tin</h2>
          </div>

          <div className="bg-yellow-50 rounded-2xl p-6 mb-6 border-l-4 border-yellow-400">
            <p className="text-yellow-800 font-semibold text-lg">
              🚫 Chúng tôi KHÔNG bán hoặc trao đổi thông tin cá nhân vì mục đích thương mại
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <span className="text-blue-500 text-xl">🤝</span>
              <div>
                <h4 className="font-semibold text-gray-800">Đối tác dịch vụ</h4>
                <p className="text-gray-600 text-sm">Chia sẻ với nhà cung cấp dịch vụ tuân thủ bảo mật tương đương</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <span className="text-orange-500 text-xl">⚖️</span>
              <div>
                <h4 className="font-semibold text-gray-800">Yêu cầu pháp lý</h4>
                <p className="text-gray-600 text-sm">Tuân thủ yêu cầu của cơ quan nhà nước có thẩm quyền</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Data Security */}
      <section id="data-security" className="group">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">05</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Bảo mật dữ liệu</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { icon: "🔐", title: "Mã hóa", desc: "Dữ liệu được mã hóa" },
              { icon: "🛡️", title: "Tường lửa", desc: "Bảo vệ hệ thống" },
              { icon: "👥", title: "Kiểm soát", desc: "Truy cập nội bộ" },
            ].map((item, index) => (
              <div key={index} className="text-center p-4 bg-yellow-50 rounded-xl">
                <span className="text-3xl block mb-2">{item.icon}</span>
                <h4 className="font-semibold text-yellow-800">{item.title}</h4>
                <p className="text-yellow-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <p className="text-yellow-800 text-center">
              ⚠️ Không có phương thức bảo mật nào là 100% an toàn, nhưng chúng tôi nỗ lực tối đa
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: User Rights */}
      <section id="user-rights" className="group">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">06</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Quyền của bạn</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: "👁️", title: "Quyền truy cập", desc: "Xem thông tin chúng tôi lưu trữ" },
              { icon: "✏️", title: "Quyền chỉnh sửa", desc: "Cập nhật thông tin không chính xác" },
              { icon: "🗑️", title: "Quyền xóa bỏ", desc: "Yêu cầu xóa thông tin cá nhân" },
              { icon: "↩️", title: "Rút lại đồng ý", desc: "Hủy đăng ký nhận thông tin" },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-yellow-50 rounded-2xl border border-yellow-200">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h4 className="font-semibold text-yellow-800 mb-2">{item.title}</h4>
                <p className="text-yellow-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Contact */}
      <section id="contact" className="group">
        <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-3xl p-8 md:p-12 shadow-xl border border-yellow-200">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">07</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Liên hệ với chúng tôi</h2>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Công ty Cổ phần Cộng Đồng Sống Hạnh Phúc</h3>
            <p className="text-gray-600">Có câu hỏi về chính sách bảo mật? Chúng tôi sẵn sàng hỗ trợ bạn</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/80 rounded-2xl">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📍</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Địa chỉ</h4>
              <p className="text-gray-600 text-sm">[Địa chỉ công ty]</p>
            </div>

            <div className="text-center p-6 bg-white/80 rounded-2xl">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📧</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
              <p className="text-gray-600 text-sm">legal@hlcc.com.vn</p>
            </div>

            <div className="text-center p-6 bg-white/80 rounded-2xl">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📞</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Điện thoại</h4>
              <p className="text-gray-600 text-sm">[Số điện thoại]</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
