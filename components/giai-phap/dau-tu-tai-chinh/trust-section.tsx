import { Handshake, Network, BarChart3 } from "lucide-react"

export function TrustSection() {
  const differences = [
    {
      icon: Handshake,
      title: "Cam kết Hiệu quả – Đồng hành đến cùng",
      description:
        "Mô hình hợp tác của chúng tôi linh hoạt và gắn liền với thành công của bạn. Trong nhiều trường hợp, chúng tôi chỉ nhận một phần phí đáng kể sau khi thương vụ hoàn tất, đảm bảo chúng tôi luôn nỗ lực vì lợi ích cao nhất của bạn.",
    },
    {
      icon: Network,
      title: "Mạng lưới Quan hệ sâu rộng",
      description:
        "Chúng tôi không chỉ có chuyên môn. Chúng tôi có một mạng lưới quan hệ sâu rộng trong giới tài chính – đầu tư, từ các quỹ đầu tư mạo hiểm, ngân hàng cho đến các nhà đầu tư cá nhân uy tín.",
    },
    {
      icon: BarChart3,
      title: "Chiến lược Tài chính Toàn diện",
      description:
        "Chúng tôi nhìn xa hơn một thương vụ đơn lẻ. Mọi giải pháp về vốn và cổ phần đều được đặt trong một chiến lược tài chính tổng thể, giúp tối ưu dòng vốn, kiểm soát rủi ro và phục vụ cho mục tiêu tăng trưởng dài hạn.",
    },
  ]

  return (
    <section className="py-20 bg-[#CCA776]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#CCA776] mb-4">
            Sự khác biệt của chúng tôi
          </h2>
        </div>
        {/* Zigzag layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-[-40px] max-w-5xl mx-auto relative">
          {differences.map((item, index) => (
            <div
              key={index}
              className={`relative bg-white border-2 border-[#CCA776] rounded-2xl shadow-2xl p-10 text-center flex flex-col items-center transition-all duration-300 z-${10 + index * 10} ${index === 1 ? 'lg:-mt-16' : ''} ${index === 2 ? 'lg:-mt-32' : ''}`}
              style={{ left: index === 1 ? '0px' : index === 2 ? '-40px' : '0px', marginRight: index === 0 ? '-40px' : '0px' }}
            >
              <div className="bg-[#CCA776] w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <item.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#CCA776] mb-4">{item.title}</h3>
              <p className="text-black leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
