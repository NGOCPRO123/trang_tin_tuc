export default function DataUsageSection() {
  return (
    <section id="data-usage" className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-8 border border-[#CCA776]/50">
      <h2 className="text-2xl font-black text-black mb-6 border-b-2 border-[#CCA776] pb-2">
        3. Chúng tôi sử dụng thông tin của bạn như thế nào?
      </h2>

      <div className="prose prose-lg max-w-none text-black font-bold leading-relaxed space-y-6">
        <p>Thông tin chúng tôi thu thập được sử dụng cho các mục đích sau:</p>

        <div className="grid gap-6">
          <div className="bg-[#CCA776]/10 rounded-lg p-6">
            <h3 className="text-lg font-black text-[#CCA776] mb-3">Để cung cấp và duy trì dịch vụ:</h3>
            <ul className="space-y-2">
              <li>• Liên hệ lại với bạn để trả lời các yêu cầu tư vấn.</li>
              <li>• Gửi tài liệu, thông tin về webinar/sự kiện mà bạn đã đăng ký.</li>
            </ul>
          </div>

          <div className="bg-[#CCA776]/10 rounded-lg p-6">
            <h3 className="text-lg font-black text-[#CCA776] mb-3">Để cải thiện dịch vụ của chúng tôi:</h3>
            <ul className="space-y-2">
              <li>• Phân tích cách bạn sử dụng website để cải thiện giao diện, nội dung và trải nghiệm người dùng.</li>
              <li>• Hiểu rõ hơn về nhu cầu của khách hàng để phát triển các giải pháp và dịch vụ phù hợp hơn.</li>
            </ul>
          </div>

          <div className="bg-[#CCA776]/10 rounded-lg p-6">
            <h3 className="text-lg font-black text-[#CCA776] mb-3">Để liên lạc với bạn (với sự đồng ý của bạn):</h3>
            <p>
              Gửi các bản tin, bài viết phân tích chuyên sâu, thông tin về các sự kiện hoặc các giải pháp mới mà chúng
              tôi cho rằng có thể hữu ích với bạn. Bạn có quyền hủy đăng ký nhận các thông tin này bất cứ lúc nào bằng
              cách làm theo hướng dẫn trong email.
            </p>
          </div>

          <div className="bg-[#CCA776]/10 rounded-lg p-6">
            <h3 className="text-lg font-black text-[#CCA776] mb-3">Để đảm bảo an ninh và tuân thủ pháp luật:</h3>
            <ul className="space-y-2">
              <li>• Bảo vệ an toàn, an ninh cho website và hệ thống của chúng tôi.</li>
              <li>• Thực hiện các nghĩa vụ pháp lý theo yêu cầu của cơ quan nhà nước có thẩm quyền.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
