import { AlertTriangle, Users, Shuffle, ArrowUpRight } from "lucide-react"
import { CTASection } from "./cta-section"

export function StrategicTurningPointsSection() {
  const stages = [
    {
      icon: AlertTriangle,
      title: "Giai đoạn 1: Khát vốn để Tăng trưởng",
      description:
        "Bạn có một thị trường rộng mở nhưng thiếu nguồn lực để nắm bắt, cần huy động vốn để mở rộng sản xuất, marketing.",
    },
    {
      icon: Users,
      title: "Giai đoạn 2: Cấu trúc Sở hữu Phức tạp",
      description:
        "Công ty có nhiều cổ đông, quyền lực bị phân mảnh, việc ra quyết định chiến lược trở nên chậm chạp và khó khăn.",
    },
    {
      icon: Shuffle,
      title: "Giai đoạn 3: Cần 'Dọn dẹp' để Bứt phá",
      description:
        "Cấu trúc nợ vay chồng chéo, chi phí tài chính quá cao, cần một cuộc 'đại phẫu' để khôi phục sức khỏe tài chính và chuẩn bị cho vòng gọi vốn mới.",
    },
    {
      icon: ArrowUpRight,
      title: "Giai đoạn 4: Muốn Tăng cường Quyền lực",
      description:
        "Bạn muốn mua lại cổ phần từ các cổ đông khác để củng cố quyền kiểm soát và định hướng công ty theo đúng tầm nhìn của mình.",
    },
  ]

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-[#CCA776]/10 to-[#CCA776]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#CCA776] mb-4">
              Những ngã rẽ chiến lược về Vốn & Cổ phần
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Mỗi giai đoạn phát triển đều đặt ra những thách thức tài chính khác nhau. Hãy xem bạn đang ở đâu:
            </p>
          </div>
          {/* Timeline ngang */}
          <div className="relative flex flex-col items-center">
            <div className="w-full h-2 bg-gradient-to-r from-[#CCA776] via-[#CCA776]/80 to-[#CCA776] rounded-full absolute top-1/2 left-0 transform -translate-y-1/2 z-0" style={{minWidth: '320px'}} />
            <div className="flex flex-row justify-between w-full max-w-5xl mx-auto z-10">
              {stages.map((stage, index) => (
                <div key={index} className="flex flex-col items-center flex-1 group">
                  {/* Node lớn */}
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#CCA776] to-[#CCA776]/80 rounded-full flex items-center justify-center shadow-lg border-4 border-[#CCA776] group-hover:scale-110 transition-transform duration-300">
                      <stage.icon className="w-10 h-10 text-white" />
                    </div>
                    {/* Đường nối nhỏ giữa các node */}
                    {index < stages.length - 1 && (
                      <div className="absolute right-0 top-1/2 w-1/2 h-1 bg-[#CCA776] z-0" style={{left: '100%'}} />
                    )}
                  </div>
                  {/* Card nổi */}
                  <div className="mt-6 bg-white border-2 border-[#CCA776] rounded-xl shadow-xl px-6 py-4 text-center max-w-xs group-hover:shadow-[#CCA776] transition-all duration-300">
                    <h3 className="text-lg font-bold text-[#CCA776] mb-2">{stage.title}</h3>
                    <p className="text-black leading-relaxed">{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
