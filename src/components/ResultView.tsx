import React, { useState } from 'react';
import { Question, RoundResult, StudentProfile } from '../types/quiz';
import { ROUNDS_METADATA } from '../data/roundsMetadata';
import { VisualDiagram } from './VisualDiagram';
import { sound } from '../utils/soundEffects';
import { 
  Trophy, 
  Award, 
  CheckCircle, 
  XCircle, 
  RotateCcw, 
  ArrowRight, 
  Printer, 
  Home, 
  Clock, 
  School, 
  User, 
  GraduationCap,
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface ResultViewProps {
  roundNumber: number;
  result: RoundResult;
  questions: Question[];
  student: StudentProfile;
  onRetryRound: (roundNumber: number) => void;
  onNextRound: (nextRoundNumber: number) => void;
  onBackToRounds: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({
  roundNumber,
  result,
  questions,
  student,
  onRetryRound,
  onNextRound,
  onBackToRounds,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'wrong' | 'correct'>('all');
  const [expandedSolutions, setExpandedSolutions] = useState<Record<number, boolean>>({});

  const roundMeta = ROUNDS_METADATA.find(r => r.id === roundNumber) || ROUNDS_METADATA[0];

  const formatSpentTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} phút ${secs} giây`;
  };

  const toggleSolution = (qNum: number) => {
    sound.playClick();
    setExpandedSolutions(prev => ({ ...prev, [qNum]: !prev[qNum] }));
  };

  const handlePrintCertificate = () => {
    window.print();
  };

  const checkAnswer = (q: Question, studentAns?: string): boolean => {
    if (!studentAns) return false;
    const s = studentAns.trim();
    const c = q.correctAnswer.trim();
    if (s.toLowerCase() === c.toLowerCase()) return true;
    if (q.type === 'multiple_choice' && q.options) {
      const letterMap: Record<string, number> = { 'A': 0, 'B': 1, 'C': 2, 'D': 3 };
      const upperS = s.toUpperCase();
      if (upperS.length === 1 && letterMap[upperS] !== undefined) {
        const idx = letterMap[upperS];
        if (typeof q.correctIndex === 'number' && idx === q.correctIndex) return true;
        return !!q.options[idx] && q.options[idx].trim().toLowerCase() === c.toLowerCase();
      }
      if (typeof q.correctIndex === 'number' && q.options[q.correctIndex]) {
        if (s.toLowerCase() === q.options[q.correctIndex].trim().toLowerCase()) return true;
      }
    }
    return false;
  };

  const filteredQuestions = questions.filter(q => {
    const studentAns = result.answers[q.questionNumber];
    const isCorrect = checkAnswer(q, studentAns);
    if (filterMode === 'correct') return isCorrect;
    if (filterMode === 'wrong') return !isCorrect;
    return true;
  });

  const correctCount = questions.filter(q => {
    const ans = result.answers[q.questionNumber];
    return checkAnswer(q, ans);
  }).length;

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-6 space-y-6 sm:space-y-8">
      {/* 1. BẢNG VÀNG TRẠNG NGUYÊN / GIẤY KHEN DANH DỰ (PRINTABLE & MOBILE ADAPTIVE) */}
      <div className="printable-certificate relative bg-[#FFFDF7] border-4 sm:border-8 border-double border-amber-600 rounded-2xl sm:rounded-3xl p-4 sm:p-10 shadow-xl overflow-hidden text-center">
        {/* Traditional Corner Lotus Decoration */}
        <div className="absolute top-2 left-2 text-xl sm:text-2xl select-none">🌸</div>
        <div className="absolute top-2 right-2 text-xl sm:text-2xl select-none">🌸</div>
        <div className="absolute bottom-2 left-2 text-xl sm:text-2xl select-none">🌸</div>
        <div className="absolute bottom-2 right-2 text-xl sm:text-2xl select-none">🌸</div>

        {/* Header */}
        <div className="max-w-xl mx-auto space-y-1 mb-3 sm:mb-4 px-2">
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-amber-800 block">
            HỘI ĐỒNG THI TRẠNG NGUYÊN TOÁN HỌC TIỂU HỌC
          </span>
          <h1 className="text-lg sm:text-3xl font-black text-amber-950 font-serif tracking-tight leading-tight">
            BẢNG VÀNG VINH DANH TRẠNG NGUYÊN NHÍ
          </h1>
          <div className="w-36 sm:w-48 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-1" />
        </div>

        {/* Student Details */}
        <div className="my-4 sm:my-6 space-y-2 sm:space-y-3">
          <p className="text-xs sm:text-sm text-slate-700 italic">Chứng nhận học sinh:</p>
          <div className="text-xl sm:text-3xl font-black text-amber-900 tracking-wide uppercase">
            {student.studentName || 'HỌC SINH LỚP 2'}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-slate-800">
            <span>Lớp: <strong className="text-amber-800">{student.className || 'Lớp 2'}</strong></span>
            <span>·</span>
            <span>Trường: <strong className="text-amber-800">{student.schoolName || 'Tiểu Học'}</strong></span>
          </div>
        </div>

        {/* Round & Result Badge */}
        <div className="max-w-lg mx-auto bg-amber-50/80 border-2 border-amber-300 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 my-4 sm:my-6">
          <div className="text-xs font-bold text-amber-800 mb-1">
            Đã hoàn thành xuất sắc <strong>{roundMeta.title}</strong>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-red-600 my-1 sm:my-2">
            {result.score} <span className="text-sm sm:text-base text-slate-600 font-semibold">/ 300 điểm</span>
          </div>
          <div className="inline-block px-3 sm:px-4 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-black text-xs sm:text-sm rounded-xl shadow-xs">
            🏆 Danh hiệu: {result.rankTitle}
          </div>

          {/* Level Breakdown Stats */}
          <div className="grid grid-cols-3 gap-2 mt-3 sm:mt-4 pt-3 border-t border-amber-200 text-xs">
            <div className="bg-white p-2 rounded-xl border border-amber-200">
              <div className="text-slate-500 text-[10px]">Mức 1</div>
              <div className="font-black text-blue-700 text-xs sm:text-sm mt-0.5">
                {result.levelCorrectCount.level1} / 15
              </div>
            </div>
            <div className="bg-white p-2 rounded-xl border border-amber-200">
              <div className="text-slate-500 text-[10px]">Mức 2</div>
              <div className="font-black text-amber-800 text-xs sm:text-sm mt-0.5">
                {result.levelCorrectCount.level2} / 10
              </div>
            </div>
            <div className="bg-white p-2 rounded-xl border border-amber-200">
              <div className="text-slate-500 text-[10px]">⭐ Mức 3</div>
              <div className="font-black text-rose-700 text-xs sm:text-sm mt-0.5">
                {result.levelCorrectCount.level3} / 5
              </div>
            </div>
          </div>
        </div>

        {/* Footer of Certificate */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-slate-500 max-w-lg mx-auto pt-2 gap-1">
          <span>Thời gian làm bài: <strong>{formatSpentTime(result.totalTimeSeconds)}</strong></span>
          <span>Số câu đúng: <strong>{correctCount}/30 câu</strong></span>
        </div>
      </div>

      {/* Control Action Buttons Bar - Mobile responsive stack & grid */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3 bg-white p-3 sm:p-4 rounded-2xl border border-amber-200 shadow-xs print:hidden">
        <button
          onClick={onBackToRounds}
          className="min-h-[44px] px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors active:scale-95"
        >
          <Home className="w-4 h-4" />
          <span>Danh Sách Vòng</span>
        </button>

        <div className="grid grid-cols-2 sm:flex sm:items-center gap-2">
          <button
            onClick={handlePrintCertificate}
            className="min-h-[44px] px-3 sm:px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-amber-300 active:scale-95"
          >
            <Printer className="w-4 h-4" />
            <span>In Giấy Khen</span>
          </button>

          <button
            onClick={() => onRetryRound(roundNumber)}
            className="min-h-[44px] px-3 sm:px-4 py-2 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Làm Lại Vòng</span>
          </button>

          {roundNumber < 35 && (
            <button
              onClick={() => onNextRound(roundNumber + 1)}
              className="col-span-2 sm:col-auto min-h-[44px] px-4 sm:px-5 py-2.5 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white rounded-xl font-black text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95"
            >
              <span>VÀO VÒNG TIẾP {roundNumber + 1}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 2. CHI TIẾT ĐÁP ÁN VÀ LỜI GIẢI 30 CÂU HỎI */}
      <div className="space-y-4 print:hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-200 pb-3">
          <div>
            <h2 className="text-lg font-black text-slate-900">
              Chi Tiết Bài Làm & Lời Giải (30 Câu)
            </h2>
            <p className="text-xs text-slate-500">
              Xem lại đáp án của em và lời giải chi tiết cho từng câu hỏi
            </p>
          </div>

          {/* Filter options */}
          <div className="flex items-center gap-1 bg-amber-100/60 p-1 rounded-xl border border-amber-200 text-xs">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1 font-bold rounded-lg transition-all ${
                filterMode === 'all' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-700'
              }`}
            >
              Tất cả (30)
            </button>
            <button
              onClick={() => setFilterMode('wrong')}
              className={`px-3 py-1 font-bold rounded-lg transition-all ${
                filterMode === 'wrong' ? 'bg-rose-600 text-white shadow-xs' : 'text-rose-700'
              }`}
            >
              Câu làm sai ({30 - correctCount})
            </button>
            <button
              onClick={() => setFilterMode('correct')}
              className={`px-3 py-1 font-bold rounded-lg transition-all ${
                filterMode === 'correct' ? 'bg-emerald-600 text-white shadow-xs' : 'text-emerald-700'
              }`}
            >
              Câu làm đúng ({correctCount})
            </button>
          </div>
        </div>

        {/* Question List */}
        <div className="space-y-4">
          {filteredQuestions.map((q) => {
            const studentAns = result.answers[q.questionNumber];
            const isCorrect = checkAnswer(q, studentAns);
            const isExpanded = expandedSolutions[q.questionNumber] ?? true; // default open for study

            return (
              <div
                key={q.id}
                className={`bg-white rounded-2xl border-2 p-5 transition-all shadow-xs ${
                  isCorrect ? 'border-emerald-200' : 'border-rose-200'
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs text-white ${
                        isCorrect ? 'bg-emerald-600' : 'bg-rose-600'
                      }`}
                    >
                      {q.questionNumber}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-lg ${
                        q.level === 1
                          ? 'bg-blue-50 text-blue-700'
                          : q.level === 2
                          ? 'bg-amber-50 text-amber-800'
                          : 'bg-rose-50 text-rose-800'
                      }`}
                    >
                      Mức {q.level}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {isCorrect ? (
                      <span className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-xl border border-emerald-200">
                        <CheckCircle className="w-4 h-4" /> Đúng (+10đ)
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-xl border border-rose-200">
                        <XCircle className="w-4 h-4" /> Chưa đúng (0đ)
                      </span>
                    )}
                  </div>
                </div>

                {/* Question Text */}
                <div className="my-2">
                  <div className="font-bold text-sm text-slate-900 leading-snug">
                    {q.questionText}
                  </div>
                </div>

                {/* Visual diagram if applicable */}
                <VisualDiagram type={q.visualType} data={q.visualData} />

                {/* Shuffled Multiple-Choice Options with Feedback */}
                {q.type === 'multiple_choice' && q.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-2.5">
                    {q.options.map((opt, oIdx) => {
                      const letter = String.fromCharCode(65 + oIdx);
                      const isOptionCorrect = opt.trim() === q.correctAnswer.trim();
                      const isStudentPick = studentAns && (studentAns.trim() === opt.trim() || studentAns.trim().toUpperCase() === letter);

                      let style = 'bg-slate-50 border-slate-200 text-slate-700';
                      if (isOptionCorrect) {
                        style = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold';
                      } else if (isStudentPick) {
                        style = 'bg-rose-50 border-rose-400 text-rose-950 font-bold';
                      }

                      return (
                        <div
                          key={oIdx}
                          className={`p-2.5 rounded-xl border flex items-center justify-between text-xs transition-all ${style}`}
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center shrink-0 ${
                                isOptionCorrect
                                  ? 'bg-emerald-600 text-white'
                                  : isStudentPick
                                  ? 'bg-rose-600 text-white'
                                  : 'bg-slate-200 text-slate-700'
                              }`}
                            >
                              {letter}
                            </span>
                            <span>{opt}</span>
                          </div>

                          {isOptionCorrect && (
                            <span className="text-[10px] bg-emerald-600 text-white font-bold px-1.5 py-0.5 rounded">
                              Đáp án đúng
                            </span>
                          )}
                          {!isOptionCorrect && isStudentPick && (
                            <span className="text-[10px] bg-rose-600 text-white font-bold px-1.5 py-0.5 rounded">
                              Em đã chọn
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {(() => {
                  const studentIdx = q.options?.findIndex(opt => opt.trim() === studentAns?.trim()) ?? -1;
                  const studentLetter = studentIdx >= 0 ? String.fromCharCode(65 + studentIdx) : (studentAns && studentAns.length === 1 && 'ABCD'.includes(studentAns.toUpperCase()) ? studentAns.toUpperCase() : '');
                  const correctIdx = q.correctIndex !== undefined && q.correctIndex >= 0 ? q.correctIndex : (q.options?.findIndex(opt => opt.trim() === q.correctAnswer.trim()) ?? -1);
                  const correctLetter = correctIdx >= 0 ? String.fromCharCode(65 + correctIdx) : '';

                  return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-100 text-xs">
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                        <span className="text-slate-500 font-medium">Câu trả lời của em:</span>
                        <div className="font-bold mt-0.5 text-slate-800">
                          {studentAns ? (
                            <span>
                              {studentLetter ? <strong className="text-amber-800 mr-1.5 font-black">[{studentLetter}]</strong> : null}
                              {studentAns}
                            </span>
                          ) : (
                            <em className="text-rose-500 font-normal">Chưa chọn câu trả lời</em>
                          )}
                        </div>
                      </div>

                      <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200">
                        <span className="text-emerald-700 font-medium">Đáp án chuẩn xác:</span>
                        <div className="font-bold mt-0.5 text-emerald-900">
                          {correctLetter ? <strong className="text-emerald-800 mr-1.5 font-black">[{correctLetter}]</strong> : null}
                          {q.correctAnswer} {q.unit || ''}
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* Detailed Solution / Explanation */}
                <div className="mt-3">
                  <button
                    onClick={() => toggleSolution(q.questionNumber)}
                    className="flex items-center gap-1 text-xs font-bold text-amber-800 hover:text-amber-900 transition-colors"
                  >
                    <span>💡 Hướng dẫn giải chi tiết</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {isExpanded && (
                    <div className="mt-2 p-3 bg-amber-50/70 rounded-xl border border-amber-200 text-xs text-amber-950 leading-relaxed font-medium">
                      {q.explanation}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
