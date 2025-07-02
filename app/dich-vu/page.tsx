import React from "react";

export default function DichVuPage() {
  return (
    <main className="container mx-auto py-10 px-4 min-h-[60vh]">
      <h1 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-6">Dịch vụ của chúng tôi</h1>
      <p className="text-lg mb-8 text-gray-700 max-w-2xl">
        Chúng tôi cung cấp các dịch vụ hỗ trợ doanh nghiệp phát triển bền vững, tối ưu hóa tài chính và nâng cao hiệu quả quản trị.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Tư vấn quản trị doanh nghiệp</h2>
          <p>Giải pháp tối ưu hóa quy trình, nâng cao hiệu quả hoạt động và phát triển bền vững.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Dịch vụ kế toán & tài chính</h2>
          <p>Hỗ trợ doanh nghiệp kiểm soát tài chính, lập báo cáo và tư vấn thuế chuyên nghiệp.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Đào tạo & phát triển nhân sự</h2>
          <p>Các chương trình đào tạo nâng cao kỹ năng quản lý, lãnh đạo và phát triển đội ngũ.</p>
        </div>
      </div>
    </main>
  );
} 