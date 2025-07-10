export default function Section2() {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-[#CCA776]/20 rounded-xl flex items-center justify-center">
          <span className="text-xl font-bold text-[#CCA776]">02</span>
        </div>
        <h2 className="text-2xl font-black text-black mb-4">2. Quy định sử dụng website</h2>
      </div>

      <div className="text-black font-bold leading-relaxed space-y-4">
        <div className="grid gap-6">
          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#CCA776] rounded-full"></div>
              Mục đích thông tin
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Tất cả nội dung được đăng tải trên Website này, bao gồm các bài viết, phân tích, bình luận, checklist, và
              các tài liệu khác ("Nội dung"), chỉ nhằm mục đích cung cấp thông tin tham khảo chung.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#CCA776] rounded-full"></div>
              Không phải tư vấn chuyên nghiệp
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Nội dung trên Website KHÔNG cấu thành lời tư vấn pháp lý, tư vấn tài chính, tư vấn thuế, tư vấn đầu tư hay
              bất kỳ lời tư vấn chuyên nghiệp nào khác. Đây là những thông tin mang tính tổng quan và có thể không phù
              hợp với tình huống cụ thể của bạn.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#CCA776] rounded-full"></div>
              Không tạo ra mối quan hệ khách hàng
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Việc bạn truy cập, đọc hoặc tương tác với Nội dung trên Website không tạo ra mối quan hệ luật sư - khách
              hàng, tư vấn - khách hàng hay bất kỳ mối quan hệ chuyên nghiệp nào giữa bạn và HLCC.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <p className="text-gray-700 font-medium">
            <span className="text-[#CCA776] font-semibold">Khuyến cáo:</span> Bạn không nên hành động hoặc không hành
            động chỉ dựa trên bất kỳ thông tin nào có trên Website này mà không tìm kiếm lời tư vấn chuyên nghiệp từ các
            chuyên gia có trình độ về vấn đề cụ thể của bạn.
          </p>
        </div>
      </div>
    </section>
  )
}
