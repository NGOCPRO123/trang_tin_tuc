import { AlertTriangle, DollarSign, Clock } from "lucide-react"

export default function TruthSection() {
  return (
    <section className="py-20 relative overflow-hidden text-white" style={{ backgroundImage: 'url(https://i.pinimg.com/1200x/d8/5f/5d/d85f5d360237adaa9429bc867872ffab.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#CCA776] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              💣 SỰ THẬT PHŨ PHÀNG
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">
              NHỮNG ĐIỀU
              <br />
              <span className="text-[#CCA776] font-black">KHÔNG AI MUỐN NÓI</span>
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-[#CCA776]/50 backdrop-blur-sm rounded-2xl p-8 border-l-8 border-[#CCA776]">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-8 h-8 text-[#CCA776] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-black text-[#CCA776] mb-4">95% người nợ KHÔNG TỰ NGUYỆT trả</h3>
                  <p className="text-white font-bold text-lg leading-relaxed">
                    Họ chỉ trả khi bị ép buộc. Sự "tử tế" và "kiên nhẫn" của bạn chỉ khiến họ coi thường bạn hơn.
                    <span className="font-black text-white"> Đây là sự thật mà 99% chủ nợ không muốn tin.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#CCA776]/50 backdrop-blur-sm rounded-2xl p-8 border-l-8 border-[#CCA776]">
              <div className="flex items-start space-x-4">
                <DollarSign className="w-8 h-8 text-[#CCA776] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-black text-[#CCA776] mb-4">Tiền không đòi = Tiền cho không</h3>
                  <p className="text-white font-bold text-lg leading-relaxed">
                    Trong tâm lý của người nợ: "Nếu anh ta không đòi quyết liệt, có nghĩa là anh ta không cần gấp."
                    <span className="font-black text-white"> Họ sẽ ưu tiên trả những khoản nợ có áp lực trước.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#CCA776]/50 backdrop-blur-sm rounded-2xl p-8 border-l-8 border-[#CCA776]">
              <div className="flex items-start space-x-4">
                <Clock className="w-8 h-8 text-[#CCA776] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-black text-[#CCA776] mb-4">Thời gian = Kẻ thù của chủ nợ</h3>
                  <p className="text-white font-bold text-lg leading-relaxed">
                    Mỗi tháng trôi qua, khả năng thu hồi giảm 15-20%. Sau 1 năm, bạn chỉ còn 30% cơ hội.
                    <span className="font-black text-white"> Đây không phải ý kiến, đây là thống kê.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border-4 border-white/20">
            <div className="text-center">
              <div className="text-6xl mb-6">🔥</div>
              <h3 className="text-3xl font-black mb-6">VẬY TẠI SAO BẠN VẪN CHỜ?</h3>
              <div className="text-xl text-white font-bold leading-relaxed space-y-4">
                <p>❌ Vì bạn sợ "mất lòng" người nợ?</p>
                <p>❌ Vì bạn tin họ sẽ "có lương tâm" tự trả?</p>
                <p>❌ Vì bạn nghĩ "đòi nợ" là việc xấu hổ?</p>
              </div>
              <div className="mt-8 p-6 bg-[#CCA776]/20 rounded-2xl border-2 border-[#CCA776]">
                <p className="text-2xl font-black text-[#CCA776]">TRONG KHI ĐÓ, HỌ ĐANG CƯỜI THẦM VÀ TIÊU TIỀN CỦA BẠN!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
