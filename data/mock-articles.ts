import type { Article } from "@/types/article"

export const mockArticles: Article[] = [
  {
    id: "1",
    title: "Chính phủ công bố gói hỗ trợ kinh tế mới cho doanh nghiệp nhỏ",
    summary:
      "Gói hỗ trợ trị giá 50.000 tỷ đồng nhằm giúp các doanh nghiệp nhỏ và vừa vượt qua khó khăn trong bối cảnh kinh tế hiện tại.",
    content: `Chính phủ vừa chính thức công bố gói hỗ trợ kinh tế mới với tổng giá trị lên đến 50.000 tỷ đồng, nhằm hỗ trợ các doanh nghiệp nhỏ và vừa trong bối cảnh kinh tế đang gặp nhiều thách thức.

Theo thông tin từ Bộ Kế hoạch và Đầu tư, gói hỗ trợ này sẽ tập trung vào các lĩnh vực ưu tiên như sản xuất, chế biến, dịch vụ và công nghệ thông tin. Các doanh nghiệp đủ điều kiện sẽ được hỗ trợ về lãi suất vay, giảm thuế và các chính sách ưu đãi khác.

Thủ tướng Chính phủ nhấn mạnh rằng đây là một trong những biện pháp quan trọng nhằm thúc đẩy tăng trưởng kinh tế và tạo việc làm cho người lao động. Gói hỗ trợ dự kiến sẽ có hiệu lực từ đầu tháng tới và kéo dài trong 12 tháng.

Các chuyên gia kinh tế đánh giá cao động thái này của Chính phủ, cho rằng đây là bước đi đúng hướng để hỗ trợ nền kinh tế phục hồi và phát triển bền vững.`,
    category: "Thời sự",
    image: "/placeholder.svg?height=400&width=600",
    author: "Nguyễn Văn An",
    publishedAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "2",
    title: "Đội tuyển bóng đá Việt Nam chuẩn bị cho trận đấu quan trọng",
    summary: "HLV Park Hang-seo đã công bố danh sách 23 cầu thủ cho trận đấu giao hữu quốc tế sắp tới.",
    content: `Đội tuyển bóng đá quốc gia Việt Nam đang tích cực chuẩn bị cho trận đấu giao hữu quốc tế quan trọng sắp tới. HLV Park Hang-seo đã chính thức công bố danh sách 23 cầu thủ được triệu tập.

Danh sách lần này có sự góp mặt của nhiều gương mặt quen thuộc như Nguyễn Quang Hải, Phan Văn Đức, và Đoàn Văn Hậu. Đáng chú ý, có một số cầu thủ trẻ được bổ sung nhằm tạo sự đổi mới cho đội hình.

Theo kế hoạch, đội tuyển sẽ tập trung tại Trung tâm đào tạo bóng đá trẻ Việt Nam từ ngày mai để chuẩn bị cho trận đấu. Các cầu thủ sẽ trải qua chương trình tập luyện chuyên sâu trong 10 ngày.

HLV Park Hang-seo chia sẻ: "Chúng tôi đang chuẩn bị rất kỹ lưỡng cho trận đấu này. Đây là cơ hội tốt để thử nghiệm đội hình và chiến thuật mới."`,
    category: "Thể thao",
    image: "/placeholder.svg?height=400&width=600",
    author: "Trần Thị Bình",
    publishedAt: "2024-01-14T15:30:00Z",
  },
  {
    id: "3",
    title: "Nghệ sĩ Việt Nam giành giải thưởng tại liên hoan phim quốc tế",
    summary:
      'Bộ phim "Mùa hè của em" do đạo diễn Lê Minh Đức thực hiện đã giành giải Phim hay nhất tại Liên hoan phim châu Á.',
    content: `Bộ phim "Mùa hè của em" của đạo diễn Lê Minh Đức đã tạo nên tiếng vang lớn khi giành giải thưởng Phim hay nhất tại Liên hoan phim châu Á lần thứ 25.

Bộ phim kể về câu chuyện tình yêu trong sáng của hai bạn trẻ trong bối cảnh nông thôn Việt Nam. Với cách kể chuyện tinh tế và hình ảnh đẹp mắt, tác phẩm đã chinh phục được ban giám khảo quốc tế.

Đạo diễn Lê Minh Đức chia sẻ: "Tôi rất vui mừng và tự hào khi bộ phim được ghi nhận. Đây là động lực lớn để tôi tiếp tục sáng tạo và đóng góp cho nền điện ảnh Việt Nam."

Bộ phim dự kiến sẽ được công chiếu rộng rãi tại Việt Nam vào tháng tới, hứa hẹn sẽ mang đến những trải nghiệm thú vị cho khán giả trong nước.`,
    category: "Giải trí",
    image: "/placeholder.svg?height=400&width=600",
    author: "Phạm Văn Cường",
    publishedAt: "2024-01-13T09:15:00Z",
  },
  {
    id: "4",
    title: "Công nghệ AI mới giúp dự báo thời tiết chính xác hơn",
    summary:
      "Các nhà khoa học Việt Nam đã phát triển hệ thống AI có thể dự báo thời tiết với độ chính xác lên đến 95%.",
    content: `Nhóm nghiên cứu tại Đại học Bách khoa Hà Nội đã thành công trong việc phát triển hệ thống trí tuệ nhân tạo (AI) mới có khả năng dự báo thời tiết với độ chính xác lên đến 95%.

Hệ thống này sử dụng thuật toán học máy tiên tiến để phân tích dữ liệu khí tượng từ nhiều nguồn khác nhau, bao gồm vệ tinh, radar và các trạm quan trắc mặt đất.

Tiến sĩ Nguyễn Văn Minh, trưởng nhóm nghiên cứu, cho biết: "Hệ thống của chúng tôi có thể dự báo chính xác thời tiết trong vòng 7 ngày tới, đặc biệt hiệu quả trong việc cảnh báo các hiện tượng thời tiết cực đoan."

Dự kiến, hệ thống này sẽ được triển khai thử nghiệm tại một số tỉnh thành trong năm nay, góp phần nâng cao chất lượng dự báo thời tiết phục vụ sản xuất và đời sống người dân.`,
    category: "Công nghệ",
    image: "/placeholder.svg?height=400&width=600",
    author: "Lê Thị Dung",
    publishedAt: "2024-01-12T14:20:00Z",
  },
  {
    id: "5",
    title: "Lễ hội văn hóa truyền thống sắp diễn ra tại Hà Nội",
    summary:
      "Lễ hội Tết Nguyên đán 2024 sẽ được tổ chức với nhiều hoạt động văn hóa đặc sắc tại các điểm du lịch nổi tiếng.",
    content: `Ủy ban nhân dân thành phố Hà Nội vừa công bố kế hoạch tổ chức Lễ hội Tết Nguyên đán 2024 với chủ đề "Hà Nội - Ngàn năm văn hiến".

Lễ hội sẽ diễn ra từ ngày 20 tháng Chạp đến hết ngày 15 tháng Giêng âm lịch tại nhiều địa điểm như Hồ Gươm, Văn Miếu - Quốc Tử Giám, và Hoàng thành Thăng Long.

Chương trình bao gồm nhiều hoạt động đa dạng như biểu diễn nghệ thuật dân gian, triển lãm ảnh, hội chợ đặc sản và các trò chơi truyền thống. Đặc biệt, sẽ có màn trình diễn pháo hoa nghệ thuật vào đêm giao thừa.

Ông Nguyễn Văn Sửu, Phó Chủ tịch UBND thành phố, cho biết: "Chúng tôi mong muốn tạo ra một không gian văn hóa đậm đà bản sắc dân tộc, đồng thời thu hút du khách trong và ngoài nước."`,
    category: "Thời sự",
    image: "/placeholder.svg?height=400&width=600",
    author: "Hoàng Văn Em",
    publishedAt: "2024-01-11T11:45:00Z",
  },
  {
    id: "6",
    title: "Startup Việt Nam nhận đầu tư 10 triệu USD",
    summary:
      "Công ty công nghệ VietTech vừa hoàn tất vòng gọi vốn Series A với số tiền 10 triệu USD từ các nhà đầu tư quốc tế.",
    content: `Công ty công nghệ VietTech, chuyên phát triển giải pháp thương mại điện tử, đã thành công trong việc huy động 10 triệu USD trong vòng gọi vốn Series A.

Vòng đầu tư này có sự tham gia của các quỹ đầu tư uy tín từ Singapore và Hàn Quốc. Số tiền này sẽ được sử dụng để mở rộng thị trường và phát triển sản phẩm mới.

CEO VietTech, ông Trần Minh Tuấn, chia sẻ: "Chúng tôi rất vui mừng khi nhận được sự tin tưởng từ các nhà đầu tư. Đây là bước đệm quan trọng để VietTech trở thành một trong những công ty công nghệ hàng đầu khu vực."

Hiện tại, VietTech đã có mặt tại 5 quốc gia trong khu vực Đông Nam Á và phục vụ hơn 100.000 khách hàng doanh nghiệp.`,
    category: "Công nghệ",
    image: "/placeholder.svg?height=400&width=600",
    author: "Đặng Thị Phương",
    publishedAt: "2024-01-10T16:30:00Z",
  },
]
