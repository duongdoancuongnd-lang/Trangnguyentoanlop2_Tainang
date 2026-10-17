import React, { useState } from 'react';
import { ROUNDS_METADATA } from '../data/roundsMetadata';
import { StudentProfile, RoundResult } from '../types/quiz';
import { Trophy, Clock, Award, CheckCircle, ChevronRight, School, User, GraduationCap, Edit3, Sparkles } from 'lucide-react';
import { sound } from '../utils/soundEffects';

interface RoundSelectorProps {
  student: StudentProfile;
  onEditStudent: () => void;
  onSelectRound: (roundNumber: number) => void;
  results: Record<number, RoundResult>;
  onViewResult: (roundNumber: number) => void;
}

export const RoundSelector: React.FC<RoundSelectorProps> = ({
  student,
  onEditStudent,
  onSelectRound,
  results,
  onViewResult,
}) => {
  const [filter, setFilter] = useState<'all' | 'hk1' | 'hk2' | 'special'>('all');

  const completedCount = Object.keys(results).length;
  const totalScoreAchieved = Object.values(results).reduce((acc, r) => acc + r.score, 0);

  const filteredRounds = ROUNDS_METADATA.filter((r) => {
    if (filter === 'hk1') return r.id <= 18;
    if (filter === 'hk2') return r.id > 18;
    if (filter === 'special') return r.id === 18 || r.id === 30 || r.id === 34 || r.id === 35;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-6 space-y-5 sm:space-y-6">
      {/* Hero Banner with Student Identification */}
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-red-900 rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-white shadow-xl border-2 sm:border-4 border-amber-400/40">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 sm:gap-6">
          <div>
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-lg sm:text-xl">🏮</span>
              <span className="text-[10px] sm:text-xs font-black tracking-widest text-amber-300 uppercase">
                SÂN CHƠI TRÍ TUỆ TOÁN HỌC TIỂU HỌC
              </span>
            </div>
            <h1 className="text-xl sm:text-4xl font-black tracking-tight text-white mb-2 leading-tight">
              BỘ ĐỀ TRẠNG NGUYÊN TOÁN HỌC LỚP 2
            </h1>
            <p className="text-amber-100/90 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Chuẩn chương trình GDPT 2018 bộ sách <strong>Kết Nối Tri Thức Với Cuộc Sống</strong>. 
              Trọn bộ <strong>35 Vòng thi</strong>, mỗi vòng gồm <strong>30 câu hỏi</strong>: 15 câu Mức 1, 10 câu Mức 2, 5 câu Mức 3. Thời gian <strong>30 phút</strong> bấm ngược.
            </p>

            {/* Student ID Card Badge */}
            <div className="mt-4 inline-flex flex-wrap items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-black/25 backdrop-blur-md rounded-xl sm:rounded-2xl border border-amber-300/30">
              <div className="flex items-center gap-1.5 text-xs text-amber-200">
                <School className="w-3.5 h-3.5 text-amber-300" />
                <span className="text-amber-100 font-bold">{student.schoolName || 'Chưa nhập trường'}</span>
              </div>
              <span className="text-amber-400/60 hidden sm:inline">|</span>
              <div className="flex items-center gap-1.5 text-xs text-amber-200">
                <User className="w-3.5 h-3.5 text-amber-300" />
                <span className="text-white font-black">{student.studentName || 'Học Sinh'}</span>
              </div>
              <span className="text-amber-400/60 hidden sm:inline">|</span>
              <div className="flex items-center gap-1.5 text-xs text-amber-200">
                <GraduationCap className="w-3.5 h-3.5 text-amber-300" />
                <span className="text-amber-100 font-bold">{student.className || 'Lớp 2'}</span>
              </div>
              <button
                onClick={onEditStudent}
                className="min-h-[32px] px-2.5 py-1 bg-amber-500/90 hover:bg-amber-400 text-amber-950 font-black rounded-lg text-[11px] flex items-center gap-1 transition-all"
                title="Thay đổi thông tin thí sinh"
              >
                <Edit3 className="w-3 h-3" />
                <span>Sửa</span>
              </button>
            </div>
          </div>

          {/* Quick Statistics Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-white/20 flex lg:flex-col gap-3 justify-around min-w-[200px]">
            <div>
              <div className="text-[10px] sm:text-[11px] font-bold text-amber-200 uppercase tracking-wider">Tiến Độ</div>
              <div className="text-xl sm:text-2xl font-black text-white flex items-baseline gap-1 mt-0.5">
                <span className="text-amber-300">{completedCount}</span>
                <span className="text-xs sm:text-sm font-normal text-amber-100">/ 35 vòng</span>
              </div>
            </div>
            <div>
              <div className="text-[10px] sm:text-[11px] font-bold text-amber-200 uppercase tracking-wider">Điểm Tích Lũy</div>
              <div className="text-xl sm:text-2xl font-black text-white flex items-baseline gap-1 mt-0.5">
                <span className="text-amber-300">{totalScoreAchieved}</span>
                <span className="text-[11px] sm:text-xs font-normal text-amber-100">điểm</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs (Interactive Filter Controls) */}
      <div className="flex items-center justify-between flex-wrap gap-3 border-b border-amber-200/80 pb-3">
        <div className="flex items-center gap-1.5 p-1 bg-amber-100/70 rounded-xl border border-amber-200 overflow-x-auto max-w-full touch-pan-x">
          <button
            onClick={() => {
              sound.playClick();
              setFilter('all');
            }}
            className={`min-h-[38px] px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
              filter === 'all'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-amber-900 hover:bg-amber-200/60'
            }`}
          >
            Tất Cả (35 Vòng)
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setFilter('hk1');
            }}
            className={`min-h-[38px] px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
              filter === 'hk1'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-amber-900 hover:bg-amber-200/60'
            }`}
          >
            Học Kì 1 (1 - 18)
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setFilter('hk2');
            }}
            className={`min-h-[38px] px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
              filter === 'hk2'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-amber-900 hover:bg-amber-200/60'
            }`}
          >
            Học Kì 2 (19 - 35)
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setFilter('special');
            }}
            className={`min-h-[38px] px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
              filter === 'special'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-amber-900 hover:bg-amber-200/60'
            }`}
          >
            ⭐ Vòng Thi Cấp Trường / Huyện / Tỉnh / Đình
          </button>
        </div>

        <div className="text-[11px] sm:text-xs text-amber-900 font-semibold flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-amber-700" />
          <span><strong>30 phút</strong> / vòng</span>
          <span className="text-amber-400">·</span>
          <span><strong>30 câu</strong> (300đ)</span>
        </div>
      </div>

      {/* Grid of 35 Rounds */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4">
        {filteredRounds.map((round) => {
          const res = results[round.id];
          const isDone = !!res;
          const isSpecial = round.id === 18 || round.id === 30 || round.id === 34 || round.id === 35;

          return (
            <div
              key={round.id}
              className={`flex flex-col justify-between bg-white rounded-2xl border transition-all duration-200 shadow-xs hover:shadow-md ${
                isSpecial
                  ? 'border-amber-400 bg-linear-to-b from-amber-50/50 to-white'
                  : 'border-amber-200/80 hover:border-amber-300'
              }`}
            >
              <div className="p-4">
                {/* Header of Round Card */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl select-none">{round.badge.split(' ')[0]}</span>
                    <div>
                      <span className="text-[11px] font-black text-amber-800 block">
                        {round.stageName}
                      </span>
                      <h3 className="font-extrabold text-sm text-slate-900 line-clamp-1">
                        {round.title}
                      </h3>
                    </div>
                  </div>
                  {isDone && (
                    <div className="shrink-0 flex items-center gap-1 text-[11px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>{res.score}đ</span>
                    </div>
                  )}
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 mb-3 min-h-[32px] leading-relaxed">
                  {round.subtitle}
                </p>

                {/* Level Breakdown Info */}
                <div className="bg-amber-50/60 rounded-xl p-2.5 border border-amber-100 text-[11px] text-slate-700 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Cấu trúc:</span>
                    <span className="font-bold text-amber-900">30 câu hỏi (30 phút)</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-600">
                    <span>Mức 1: <strong>15 câu</strong></span>
                    <span>·</span>
                    <span>Mức 2: <strong>10 câu</strong></span>
                    <span>·</span>
                    <span className="text-amber-800 font-bold">Mức 3: <strong>5 câu</strong></span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 pt-0 border-t border-amber-100 flex items-center gap-2 mt-2">
                {isDone ? (
                  <>
                    <button
                      onClick={() => onViewResult(round.id)}
                      className="flex-1 min-h-[44px] py-2 px-3 bg-amber-100 hover:bg-amber-200 active:bg-amber-300 text-amber-900 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1"
                    >
                      <Award className="w-3.5 h-3.5 text-amber-700" />
                      Xem Kết Quả
                    </button>
                    <button
                      onClick={() => {
                        sound.playClick();
                        onSelectRound(round.id);
                      }}
                      className="min-h-[44px] py-2 px-3 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white rounded-xl font-bold text-xs transition-colors whitespace-nowrap"
                    >
                      Thi Lại
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      sound.playClick();
                      onSelectRound(round.id);
                    }}
                    className={`w-full min-h-[46px] py-2.5 px-4 rounded-xl font-black text-xs transition-all shadow-xs active:scale-95 flex items-center justify-center gap-2 ${
                      isSpecial
                        ? 'bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white shadow-amber-600/20'
                        : 'bg-amber-600 hover:bg-amber-700 text-white'
                    }`}
                  >
                    <span>BẮT ĐẦU LÀM BÀI</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
