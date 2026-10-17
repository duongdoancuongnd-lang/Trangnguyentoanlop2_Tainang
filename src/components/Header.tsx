import React from 'react';
import { Volume2, VolumeX, User, Award, BookOpen } from 'lucide-react';
import { StudentProfile } from '../types/quiz';
import { sound } from '../utils/soundEffects';

interface HeaderProps {
  currentView: 'rounds' | 'quiz' | 'result' | 'guide';
  onNavigate: (view: 'rounds' | 'guide') => void;
  student: StudentProfile;
  onOpenProfile: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  student,
  onOpenProfile,
  soundEnabled,
  onToggleSound,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onNavigate('rounds')}
          className="flex items-center gap-2.5 text-left group"
        >
          <span className="text-2xl select-none group-hover:scale-110 transition-transform">🎓</span>
          <div>
            <span className="text-lg font-black tracking-tight text-amber-900 block leading-tight">
              Trạng Nguyên Toán 2
            </span>
            <span className="text-[11px] font-semibold text-amber-700 tracking-wide uppercase">
              Kết Nối Tri Thức · 35 Vòng
            </span>
          </div>
        </button>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-slate-600">
          <button
            onClick={() => onNavigate('rounds')}
            className={`transition-colors hover:text-amber-700 ${
              currentView === 'rounds' ? 'text-amber-800 border-b-2 border-amber-600 pb-0.5' : ''
            }`}
          >
            Danh Sách 35 Vòng
          </button>
          <button
            onClick={() => onNavigate('guide')}
            className={`transition-colors hover:text-amber-700 ${
              currentView === 'guide' ? 'text-amber-800 border-b-2 border-amber-600 pb-0.5' : ''
            }`}
          >
            Thể Lệ & Cấu Trúc Đề
          </button>
        </nav>

        {/* Zone 3: Primary Actions (Student badge & Sound toggle) */}
        <div className="flex items-center gap-2">
          {/* Quick Guide link for mobile */}
          <button
            type="button"
            onClick={() => onNavigate(currentView === 'guide' ? 'rounds' : 'guide')}
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-amber-800 bg-amber-100/70 hover:bg-amber-200/80 transition-colors border border-amber-300"
            title="Thể lệ & Cấu trúc đề"
          >
            <BookOpen className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onToggleSound}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-amber-800 bg-amber-100/70 hover:bg-amber-200/80 transition-colors border border-amber-300"
            title={soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={onOpenProfile}
            className="min-h-[44px] flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-xl shadow-xs transition-all text-xs font-bold whitespace-nowrap"
          >
            <User className="w-4 h-4" />
            <span className="max-w-[100px] sm:max-w-[120px] truncate">
              {student.studentName || 'Học Sinh'}
            </span>
            <span className="hidden sm:inline bg-amber-700/60 px-1.5 py-0.5 rounded text-[10px]">
              {student.className || 'Lớp 2'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
