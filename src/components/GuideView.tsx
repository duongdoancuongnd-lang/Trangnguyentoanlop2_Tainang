import React from 'react';
import { ArrowLeft, BookOpen, Clock, Target, Award, CheckCircle, ShieldCheck } from 'lucide-react';

interface GuideViewProps {
  onBack: () => void;
}

export const GuideView: React.FC<GuideViewProps> = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-xs font-bold text-amber-800 hover:text-amber-950 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Quay Lại Danh Sách Vòng Thi</span>
      </button>

      {/* Title */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-300 shadow-sm space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-widest">
          <span>🏛️</span>
          <span>QUY CHẾ & THỂ LỆ THI</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-amber-950">
          Thể Lệ & Cấu Trúc Đề Trạng Nguyên Toán Học Lớp 2
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Ứng dụng được biên soạn công phu, chuẩn bám sát Chương trình Giáo dục Phổ thông 2018 và bộ sách giáo khoa <strong>Kết Nối Tri Thức Với Cuộc Sống (Toán 2)</strong>.
        </p>
      </div>

      {/* Core Rules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="font-black text-sm text-slate-900">Thời Gian 30 Phút</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Đồng hồ đếm ngược chính xác 30:00. Khi hết giờ, hệ thống sẽ tự động nộp bài và tính điểm cho học sinh.
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-black">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="font-black text-sm text-slate-900">30 Câu Hỏi Phân Bậc</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Mỗi vòng có 30 câu: <strong>15 câu Mức 1</strong> (Nhận biết), <strong>10 câu Mức 2</strong> (Thông hiểu), và <strong>5 câu Mức 3</strong> (Vận dụng cao).
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="font-black text-sm text-slate-900">300 Điểm Tối Đa</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Mỗi câu trả lời đúng được cộng 10 điểm. Học sinh đạt từ 150 điểm trở lên được cấp Giấy Khen Bảng Vàng.
          </p>
        </div>
      </div>

      {/* Ranking Tiers */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-xs space-y-4">
        <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
          <span>🏆</span>
          <span>Bảng Xếp Hạng Danh Hiệu Trạng Nguyên</span>
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-amber-100/60 text-amber-900 font-black">
              <tr>
                <th className="py-2.5 px-3 rounded-l-xl">Danh Hiệu</th>
                <th className="py-2.5 px-3">Điểm Số Yêu Cầu</th>
                <th className="py-2.5 px-3 rounded-r-xl">Khen Thưởng</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-100">
              <tr>
                <td className="py-2.5 px-3 font-bold text-amber-900 flex items-center gap-1.5">
                  <span>👑</span> Trạng Nguyên Xuất Sắc
                </td>
                <td className="py-2.5 px-3 font-mono font-bold text-slate-800">300 điểm (Tuyệt đối)</td>
                <td className="py-2.5 px-3 text-slate-600">Thủ khoa Bảng Vàng toàn diện</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-amber-900 flex items-center gap-1.5">
                  <span>🥈</span> Bảng Nhãn
                </td>
                <td className="py-2.5 px-3 font-mono font-bold text-slate-800">270 - 290 điểm</td>
                <td className="py-2.5 px-3 text-slate-600">Giấy khen Bảng Nhãn tài năng</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-amber-900 flex items-center gap-1.5">
                  <span>🥉</span> Thám Hoa
                </td>
                <td className="py-2.5 px-3 font-mono font-bold text-slate-800">240 - 260 điểm</td>
                <td className="py-2.5 px-3 text-slate-600">Giấy khen Thám Hoa xuất sắc</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-amber-900 flex items-center gap-1.5">
                  <span>⭐</span> Hoàng Giáp
                </td>
                <td className="py-2.5 px-3 font-mono font-bold text-slate-800">200 - 230 điểm</td>
                <td className="py-2.5 px-3 text-slate-600">Giấy khen Hoàng Giáp</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-amber-900 flex items-center gap-1.5">
                  <span>📜</span> Tiến Sĩ
                </td>
                <td className="py-2.5 px-3 font-mono font-bold text-slate-800">150 - 190 điểm</td>
                <td className="py-2.5 px-3 text-slate-600">Giấy khen Đạt chuẩn Trạng Nguyên</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Guide to Controls */}
      <div className="bg-amber-50/70 rounded-3xl p-6 sm:p-8 border border-amber-200 text-xs space-y-3">
        <h3 className="text-sm font-black text-amber-950 flex items-center gap-2">
          <span>🎮</span> Hướng Dẫn Sử Dụng Các Tính Năng Trong Bài Thi:
        </h3>
        <ul className="space-y-2 text-slate-700 leading-relaxed">
          <li>
            <strong>Tên Trường, Tên Học Sinh, Tên Lớp:</strong> Học sinh nhập đầy đủ để xuất hiện trang trọng trên Bảng Vàng và Giấy Khen.
          </li>
          <li>
            <strong>BẮT ĐẦU LÀM BÀI:</strong> Nhấn để mở đề thi và kích hoạt đồng hồ đếm ngược 30 phút.
          </li>
          <li>
            <strong>TRỞ LẠI & TIẾP TỤC:</strong> Chuyển đổi linh hoạt giữa các câu hỏi hoặc xem lại các câu trước đó.
          </li>
          <li>
            <strong>ĐỌC ĐỀ BÀI:</strong> Nhấn nút loa để ứng dụng tự động phát âm đọc đề bài tiếng Việt bằng giọng nói rõ ràng, phù hợp học sinh lớp 2.
          </li>
          <li>
            <strong>BẢNG NHÁP:</strong> Bấm vào nút "Bảng Nháp" để mở bảng vẽ điện tử giúp đặt tính hoặc vẽ nháp phép cộng trừ trực tiếp trên màn hình.
          </li>
        </ul>
      </div>

      <div className="text-center pt-2">
        <button
          onClick={onBack}
          className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-black text-xs rounded-xl shadow-md transition-all"
        >
          VÀO LUYỆN TẬP NGAY
        </button>
      </div>
    </div>
  );
};
