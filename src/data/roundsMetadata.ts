import { RoundInfo } from '../types/quiz';

export const ROUNDS_METADATA: RoundInfo[] = [
  {
    id: 1,
    title: "Vòng 1: Khởi Động Trạng Nguyên Nhí",
    subtitle: "Ôn tập các số đến 100, số liền trước, số liền sau, so sánh",
    week: 1,
    stageName: "Vòng Tự Luyện",
    badge: "🌱 Búp Măng",
    topics: ["Các số đến 100", "Số liền trước - liền sau", "So sánh lớn hơn, bé hơn, bằng"]
  },
  {
    id: 2,
    title: "Vòng 2: Tia Số & Phép Cộng Cơ Bản",
    subtitle: "Tia số, số tròn chục, phép cộng không nhớ trong phạm vi 100",
    week: 2,
    stageName: "Vòng Tự Luyện",
    badge: "🌿 Khám Phá",
    topics: ["Tia số", "Số tròn chục", "Cộng không nhớ trong phạm vi 100"]
  },
  {
    id: 3,
    title: "Vòng 3: Điểm, Đoạn Thẳng & Ba Điểm Thẳng Hàng",
    subtitle: "Nhận biết điểm, đoạn thẳng, đo độ dài đoạn thẳng bằng cm",
    week: 3,
    stageName: "Vòng Tự Luyện",
    badge: "📐 Thước Kẻ Nhí",
    topics: ["Điểm và đoạn thẳng", "Ba điểm thẳng hàng", "Độ dài đoạn thẳng (xăng-ti-mét)"]
  },
  {
    id: 4,
    title: "Vòng 4: Đề-xi-mét (dm) & Ước Lượng Độ Dài",
    subtitle: "Đơn vị đo dm, mối quan hệ 1dm = 10cm, ước lượng thực tế",
    week: 4,
    stageName: "Vòng Tự Luyện",
    badge: "📏 Đo Lường",
    topics: ["Đơn vị Đề-xi-mét (dm)", "Quy đổi 1dm = 10cm", "Thực hành đo lường"]
  },
  {
    id: 5,
    title: "Vòng 5: Phép Cộng Có Nhớ (Số 2 chữ số + 1 chữ số)",
    subtitle: "Kỹ thuật cộng qua 10, đặt tính rồi tính chuẩn xác",
    week: 5,
    stageName: "Vòng Tự Luyện",
    badge: "🧮 Đặt Tính Chuẩn",
    topics: ["Phép cộng qua 10", "Dạng 9 + 5, 29 + 5", "Tính nhẩm và đặt tính"]
  },
  {
    id: 6,
    title: "Vòng 6: Phép Cộng Có Nhớ (Số 2 chữ số + 2 chữ số)",
    subtitle: "Dạng 38 + 25, 47 + 36, tìm số hạng chưa biết",
    week: 6,
    stageName: "Vòng Tự Luyện",
    badge: "⭐ Ngôi Sao Toán",
    topics: ["Cộng 2 chữ số có nhớ", "Tìm một số hạng trong tổng", "Toán đố có lời văn"]
  },
  {
    id: 7,
    title: "Vòng 7: Bài Toán Về Nhiều Hơn - Ít Hơn",
    subtitle: "Dạng toán lời văn quan trọng: xác định phép tính cộng hay trừ",
    week: 7,
    stageName: "Vòng Tự Luyện",
    badge: "💡 Trí Tuệ",
    topics: ["Bài toán về nhiều hơn", "Bài toán về ít hơn", "Tóm tắt sơ đồ đoạn thẳng"]
  },
  {
    id: 8,
    title: "Vòng 8: Ki-lô-gam (kg) & Cân Thăng Bằng",
    subtitle: "Đơn vị kg, cân đồng hồ, cân đĩa, bài toán mua sắm thực tế",
    week: 8,
    stageName: "Vòng Tự Luyện",
    badge: "⚖️ Cân Thăng Bằng",
    topics: ["Đơn vị Ki-lô-gam (kg)", "Cân đĩa & cân đồng hồ", "So sánh nặng hơn - nhẹ hơn"]
  },
  {
    id: 9,
    title: "Vòng 9: Lít (l) & Dung Tích Thực Tế",
    subtitle: "Đơn vị Lít, thực hành rót nước, can và chai dung tích",
    week: 9,
    stageName: "Vòng Tự Luyện",
    badge: "🥛 Bình Nước Nhí",
    topics: ["Đơn vị Lít (l)", "Đong rót chất lỏng", "Bài toán can nước - chai dầu"]
  },
  {
    id: 10,
    title: "Vòng 10: Phép Trừ Có Nhớ (Số 2 chữ số - 1 chữ số)",
    subtitle: "Dạng 11 - 5, 31 - 5, 52 - 8, kỹ thuật lùi và mượn chục",
    week: 10,
    stageName: "Vòng Tự Luyện",
    badge: "🎯 Bắn Tên Trúng Đích",
    topics: ["Trừ qua 10 trong phạm vi 20", "Dạng 42 - 7, 53 - 8", "Tìm số trừ, số bị trừ"]
  },
  {
    id: 11,
    title: "Vòng 11: Phép Trừ Có Nhớ (Số 2 chữ số - 2 chữ số)",
    subtitle: "Dạng 54 - 28, 70 - 35, tính nhẩm và giải bài toán thực tế",
    week: 11,
    stageName: "Vòng Tự Luyện",
    badge: "🏆 Thử Thách Vàng",
    topics: ["Trừ 2 chữ số có nhớ", "Đặt tính dọc chính xác", "Toán lời văn giảm đi"]
  },
  {
    id: 12,
    title: "Vòng 12: Đường Cong & Đường Gấp Khúc",
    subtitle: "Phân biệt đường cong, đường gấp khúc, tính độ dài đường gấp khúc",
    week: 12,
    stageName: "Vòng Tự Luyện",
    badge: "〽️ Đường Gấp Khúc",
    topics: ["Đường cong, đường thẳng", "Đoạn thẳng và đường gấp khúc", "Tính độ dài đường gấp khúc"]
  },
  {
    id: 13,
    title: "Vòng 13: Lịch Tờ & Ngày Trong Tuần, Ngày Trong Tháng",
    subtitle: "Xem lịch tờ, số ngày trong tháng, các thứ trong tuần",
    week: 13,
    stageName: "Vòng Tự Luyện",
    badge: "📅 Quyển Lịch Thần Kỳ",
    topics: ["7 ngày trong tuần", "Xem tờ lịch tháng", "Hôm nay, hôm qua, ngày mai"]
  },
  {
    id: 14,
    title: "Vòng 14: Giờ - Phút & Xem Đồng Hồ",
    subtitle: "Đồng hồ kim: giờ đúng, giờ rưỡi, đồng hồ điện tử",
    week: 14,
    stageName: "Vòng Tự Luyện",
    badge: "⏰ Bác Đồng Hồ",
    topics: ["Kim giờ và kim phút", "Giờ đúng và 30 phút (rưỡi)", "Đồng hồ 24 giờ điện tử"]
  },
  {
    id: 15,
    title: "Vòng 15: Ngày - Giờ & Giờ - Phút",
    subtitle: "1 ngày có 24 giờ, buổi sáng, trưa, chiều, tối, đêm",
    week: 15,
    stageName: "Vòng Tự Luyện",
    badge: "☀️ Ngày Và Đêm",
    topics: ["24 giờ trong một ngày", "Các buổi trong ngày", "Khoảng thời gian sinh hoạt"]
  },
  {
    id: 16,
    title: "Vòng 16: Ôn Tập Cộng Trừ Trong Phạm Vi 100",
    subtitle: "Rèn luyện phản xạ cộng trừ nhanh, dãy tính có nhiều phép tính",
    week: 16,
    stageName: "Vòng Tự Luyện",
    badge: "⚡ Tia Chớp Toán Học",
    topics: ["Dãy tính a + b - c", "Tìm thành phần chưa biết", "Số tròn chục và bài toán sao"]
  },
  {
    id: 17,
    title: "Vòng 17: Ôn Tập Hình Học & Đo Lường Kì 1",
    subtitle: "Tổng hợp điểm, đoạn thẳng, đường gấp khúc, dm, kg, lít",
    week: 17,
    stageName: "Vòng Tự Luyện",
    badge: "🛡️ Tinh Thông Đo Lường",
    topics: ["Độ dài đường gấp khúc", "Toán thực tế cân nặng và lít", "Đếm hình học phẳng"]
  },
  {
    id: 18,
    title: "Vòng 18: THI SƠ KHẢO CẤP TRƯỜNG (Kì 1)",
    subtitle: "Đề thi khảo sát chất lượng toàn diện Học kì 1 chuẩn Trạng Nguyên",
    week: 18,
    stageName: "Sơ Khảo Cấp Trường",
    badge: "🎖️ Sơ Khảo Học Đường",
    topics: ["Tổng hợp toàn diện Học kì 1", "Toán tư duy mức 3", "Bài toán có bẫy logic"]
  },
  {
    id: 19,
    title: "Vòng 19: Làm Quen Phép Nhân - Thừa Số & Tích",
    subtitle: "Tổng của nhiều số hạng bằng nhau, dấu nhân (x)",
    week: 19,
    stageName: "Vòng Tự Luyện",
    badge: "✖️ Cánh Cửa Phép Nhân",
    topics: ["Tổng các số hạng bằng nhau", "Chuyển tổng thành tích", "Thừa số và tích"]
  },
  {
    id: 20,
    title: "Vòng 20: Bảng Nhân 2 & Ứng Dụng Đếm Đôi",
    subtitle: "Học thuộc bảng nhân 2, đếm số chân gà, bánh xe, đôi đũa",
    week: 20,
    stageName: "Vòng Tự Luyện",
    badge: "🦆 Đôi Bạn Thân",
    topics: ["Bảng nhân 2 (2 x 1 đến 2 x 10)", "Đếm thêm 2", "Bài toán đôi đồ vật"]
  },
  {
    id: 21,
    title: "Vòng 21: Bảng Nhân 5 & Đồng Hồ 5 Phút",
    subtitle: "Học thuộc bảng nhân 5, đếm số ngón tay, khoảng cách 5 phút",
    week: 21,
    stageName: "Vòng Tự Luyện",
    badge: "🖐️ Bàn Tay Kì Diệu",
    topics: ["Bảng nhân 5 (5 x 1 đến 5 x 10)", "Đếm thêm 5", "Toán thực tế 5 ngày, 5 bạn"]
  },
  {
    id: 22,
    title: "Vòng 22: Làm Quen Phép Chia - Số Bị Chia, Số Chia, Thương",
    subtitle: "Chia thành các phần bằng nhau, chia theo nhóm",
    week: 22,
    stageName: "Vòng Tự Luyện",
    badge: "➗ Chia Đều Quà Tặng",
    topics: ["Ý nghĩa phép chia", "Số bị chia, số chia, thương", "Mối liên hệ giữa nhân và chia"]
  },
  {
    id: 23,
    title: "Vòng 23: Bảng Chia 2 & Một Phần Hai (1/2)",
    subtitle: "Bảng chia 2, nhận biết một nửa, 1/2 hình vẽ",
    week: 23,
    stageName: "Vòng Tự Luyện",
    badge: "🌗 Một Phần Hai (1/2)",
    topics: ["Bảng chia 2", "Khái niệm một nửa (1/2)", "Tô màu 1/2 hình"]
  },
  {
    id: 24,
    title: "Vòng 24: Bảng Chia 5 & Một Phần Năm (1/5)",
    subtitle: "Bảng chia 5, một phần năm, giải toán chia đều",
    week: 24,
    stageName: "Vòng Tự Luyện",
    badge: "⭐ Một Phần Năm (1/5)",
    topics: ["Bảng chia 5", "Nhận biết 1/5 hình", "Toán chia kẹo, chia hoa quả"]
  },
  {
    id: 25,
    title: "Vòng 25: Khối Trụ & Khối Cầu",
    subtitle: "Nhận dạng khối trụ, khối cầu trong đời sống: quả bóng, hộp sữa, lon nước",
    week: 25,
    stageName: "Vòng Tự Luyện",
    badge: "⚽ Khối Trụ Khối Cầu",
    topics: ["Đặc điểm khối trụ, khối cầu", "Phân biệt với khối lập phương, hộp chữ nhật", "Ghép hình không gian"]
  },
  {
    id: 26,
    title: "Vòng 26: Đơn Vị Đo Chiều Dài Mét (m) & Ki-lô-mét (km)",
    subtitle: "Mối quan hệ 1m = 10dm = 100cm, 1km = 1000m, khoảng cách đường bộ",
    week: 26,
    stageName: "Vòng Tự Luyện",
    badge: "🛣️ Chặng Đường Dài",
    topics: ["Đơn vị Mét (m)", "Đơn vị Ki-lô-mét (km)", "So sánh và đổi đơn vị đo"]
  },
  {
    id: 27,
    title: "Vòng 27: Các Số Có Ba Chữ Số (Trăm - Chục - Đơn Vị)",
    subtitle: "Đọc, viết các số từ 100 đến 999, cấu tạo số thập phân",
    week: 27,
    stageName: "Vòng Tự Luyện",
    badge: "💯 Trăm Chục Đơn Vị",
    topics: ["Đọc viết số có 3 chữ số", "Phân tích số: a trăm + b chục + c", "Số tròn trăm"]
  },
  {
    id: 28,
    title: "Vòng 28: So Sánh Các Số Có Ba Chữ Số",
    subtitle: "So sánh chữ số hàng trăm, hàng chục, hàng đơn vị, dãy số tăng giảm",
    week: 28,
    stageName: "Vòng Tự Luyện",
    badge: "🔍 Tinh Mắt So Sánh",
    topics: ["So sánh số có 3 chữ số", "Sắp xếp theo thứ tự", "Số lớn nhất, bé nhất có 3 chữ số"]
  },
  {
    id: 29,
    title: "Vòng 29: Phép Cộng Không Nhớ Trong Phạm Vi 1000",
    subtitle: "Dạng 324 + 152, 400 + 300, cộng nhẩm và đặt tính cột",
    week: 29,
    stageName: "Vòng Tự Luyện",
    badge: "➕ Cộng Nhanh Thần Tốc",
    topics: ["Cộng số tròn trăm", "Cộng không nhớ trong phạm vi 1000", "Toán trồng cây, sách thư viện"]
  },
  {
    id: 30,
    title: "Vòng 30: THI HƯƠNG - CẤP QUẬN / HUYỆN",
    subtitle: "Phép trừ không nhớ trong phạm vi 1000 & Toán tư duy tranh tài",
    week: 30,
    stageName: "Thi Hương Cấp Huyện",
    badge: "🏮 Bảng Vàng Thi Hương",
    topics: ["Trừ không nhớ phạm vi 1000", "Toán tư duy Trạng Nguyên", "Bài toán chuỗi logic"]
  },
  {
    id: 31,
    title: "Vòng 31: Phép Cộng Có Nhớ Trong Phạm Vi 1000",
    subtitle: "Cộng có nhớ 1 lần sang hàng chục hoặc hàng trăm",
    week: 31,
    stageName: "Vòng Tự Luyện",
    badge: "✨ Thăng Cấp Thần Tốc",
    topics: ["Cộng có nhớ sang hàng chục", "Cộng có nhớ sang hàng trăm", "Tìm số hạng chưa biết"]
  },
  {
    id: 32,
    title: "Vòng 32: Phép Trừ Có Nhớ Trong Phạm Vi 1000",
    subtitle: "Trừ có nhớ 1 lần ở hàng đơn vị hoặc hàng chục",
    week: 32,
    stageName: "Vòng Tự Luyện",
    badge: "💎 Viên Ngọc Trí Tuệ",
    topics: ["Trừ có nhớ 1 lần", "Đặt tính và kiểm tra kết quả", "Bài toán thực tế bớt đi"]
  },
  {
    id: 33,
    title: "Vòng 33: Thu Thập, Kiểm Đếm & Biểu Đồ Tranh",
    subtitle: "Đọc biểu đồ tranh, đếm số lượng, trả lời câu hỏi dữ liệu",
    week: 33,
    stageName: "Vòng Tự Luyện",
    badge: "📊 Nhà Thống Kê Nhí",
    topics: ["Thu thập và phân loại", "Kiểm đếm dữ liệu", "Đọc và vẽ biểu đồ tranh"]
  },
  {
    id: 34,
    title: "Vòng 34: THI HỘI - CẤP TỈNH / THÀNH PHỐ",
    subtitle: "Thử thách Trạng Nguyên cấp Tỉnh - Hội tụ tài năng nhí",
    week: 34,
    stageName: "Thi Hội Cấp Tỉnh",
    badge: "👑 Đỉnh Cao Thi Hội",
    topics: ["Toàn bộ chương trình Toán 2", "Toán mẹo & tư duy nâng cao", "Quy luật dãy số Trạng Nguyên"]
  },
  {
    id: 35,
    title: "Vòng 35: THI ĐÌNH - CHUNG KẾT TOÀN QUỐC",
    subtitle: "Vinh quy bái tổ - Tìm kiếm Đệ nhất Trạng Nguyên Toán Học Lớp 2",
    week: 35,
    stageName: "Thi Đình Toàn Quốc",
    badge: "🏛️ Vinh Quy Bái Tổ",
    topics: ["Đề thi chung kết quốc gia", "Toán logic sao nâng cao", "Vinh danh Bảng Vàng Trạng Nguyên"]
  }
];
