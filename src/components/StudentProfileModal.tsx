import React, { useState } from 'react';
import { School, User, GraduationCap, X, Check } from 'lucide-react';
import { StudentProfile } from '../types/quiz';

interface StudentProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: StudentProfile;
  onSave: (newProfile: StudentProfile) => void;
  onStartQuiz?: () => void;
  isStartingQuiz?: boolean;
  roundNumber?: number;
}

export const StudentProfileModal: React.FC<StudentProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSave,
  onStartQuiz,
  isStartingQuiz = false,
  roundNumber,
}) => {
  const [schoolName, setSchoolName] = useState(profile.schoolName);
  const [studentName, setStudentName] = useState(profile.studentName);
  const [className, setClassName] = useState(profile.className);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) {
      setError('Vui lòng nhập Tên Học Sinh để bắt đầu');
      return;
    }

    const updated: StudentProfile = {
      schoolName: schoolName.trim() || 'Trường Tiểu Học',
      studentName: studentName.trim(),
      className: className.trim() || 'Lớp 2A',
    };

    onSave(updated);

    if (isStartingQuiz && onStartQuiz) {
      onStartQuiz();
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-md max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border-2 border-amber-300 p-5 sm:p-6 overscroll-contain">
        {/* Decorative corner motifs */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-amber-100/50 rounded-bl-full pointer-events-none" />

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">🏮</span>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-amber-950">
                {isStartingQuiz ? `Chuẩn Bị Vào Vòng ${roundNumber}` : 'Thông Tin Thí Sinh'}
              </h2>
              <p className="text-[11px] sm:text-xs text-amber-800">
                Luyện thi Trạng Nguyên Toán Học Lớp 2
              </p>
            </div>
          </div>
          {!isStartingQuiz && (
            <button
              onClick={onClose}
              className="min-w-[36px] min-h-[36px] flex items-center justify-center text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {error && (
          <div className="mb-4 p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl font-bold flex items-center gap-2">
            <span>⚠️</span> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
              <School className="w-4 h-4 text-amber-600" />
              Tên Trường:
            </label>
            <input
              type="text"
              value={schoolName}
              onChange={(e) => {
                setSchoolName(e.target.value);
                setError('');
              }}
              placeholder="Ví dụ: Tiểu Học Kim Đồng"
              className="w-full min-h-[44px] px-3.5 py-2.5 bg-amber-50/40 border border-amber-300 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
              <User className="w-4 h-4 text-amber-600" />
              Tên Học Sinh: <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              value={studentName}
              onChange={(e) => {
                setStudentName(e.target.value);
                setError('');
              }}
              placeholder="Ví dụ: Nguyễn Văn An"
              className="w-full min-h-[44px] px-3.5 py-2.5 bg-amber-50/40 border border-amber-300 rounded-xl text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-amber-600" />
              Tên Lớp:
            </label>
            <input
              type="text"
              value={className}
              onChange={(e) => {
                setClassName(e.target.value);
                setError('');
              }}
              placeholder="Ví dụ: 2A1"
              className="w-full min-h-[44px] px-3.5 py-2.5 bg-amber-50/40 border border-amber-300 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
            />
          </div>

          {isStartingQuiz && (
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <span>⏱️</span> Quy định thời gian & cấu trúc:
              </div>
              <ul className="list-disc list-inside text-[11px] space-y-0.5 text-amber-800">
                <li>Thời gian làm bài: <strong>30 phút</strong> đếm ngược.</li>
                <li>Gồm <strong>30 câu hỏi</strong> (15 câu Mức 1, 10 câu Mức 2, 5 câu Mức 3).</li>
                <li>Mỗi câu 10 điểm, tổng điểm tối đa 300 điểm.</li>
              </ul>
            </div>
          )}

          <div className="flex items-center gap-2 pt-2">
            {!isStartingQuiz ? (
              <button
                type="submit"
                className="w-full min-h-[46px] py-2.5 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white rounded-xl font-bold text-sm shadow-sm flex items-center justify-center gap-2 transition-colors active:scale-95"
              >
                <Check className="w-4 h-4" /> Lưu Thông Tin
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/3 min-h-[46px] py-2.5 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-700 rounded-xl font-bold text-xs transition-colors active:scale-95"
                >
                  TRỞ LẠI
                </button>
                <button
                  type="submit"
                  className="w-2/3 min-h-[46px] py-2.5 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white rounded-xl font-black text-xs sm:text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5"
                >
                  🚀 BẮT ĐẦU LÀM BÀI
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
