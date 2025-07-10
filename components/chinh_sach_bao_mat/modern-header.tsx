export default function ModernHeader() {
  return (
    <header className="relative py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Floating badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#CCA776]/50 rounded-full px-6 py-2 mb-8 shadow-lg">
          <div className="w-2 h-2 bg-[#CCA776] rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-600">Cập nhật: 08/01/2025</span>
        </div>

        {/* Main title with gradient */}
        <h1 className="text-4xl md:text-5xl font-black text-black mb-4">
          Chính sách <span className="text-[#CCA776] font-black">Bảo mật</span>
        </h1>
        <p className="text-xl text-black font-bold mb-2">
          Cam kết bảo vệ quyền riêng tư và dữ liệu cá nhân của bạn.
        </p>

        {/* Decorative line */}
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#CCA776] to-transparent rounded-full"></div>
        </div>
      </div>
    </header>
  )
}
