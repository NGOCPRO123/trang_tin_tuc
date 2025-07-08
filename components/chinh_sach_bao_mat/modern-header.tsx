export default function ModernHeader() {
  return (
    <header className="relative py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Floating badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-yellow-200/50 rounded-full px-6 py-2 mb-8 shadow-lg">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-600">Cập nhật: 08/01/2025</span>
        </div>

        {/* Main title with gradient */}
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent mb-6 leading-tight">
          Chính sách Bảo mật
        </h1>

        {/* Subtitle */}
        <p className="text-2xl text-gray-600 mx-auto leading-relaxed">
          Cam kết bảo vệ thông tin cá nhân của bạn với các tiêu chuẩn bảo mật cao nhất
        </p>

        {/* Decorative line */}
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </header>
  )
}
