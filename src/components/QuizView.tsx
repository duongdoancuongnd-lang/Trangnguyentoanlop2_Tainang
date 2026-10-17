import React, { useState, useEffect, useRef } from 'react';
import { Question, StudentProfile, RoundResult } from '../types/quiz';
import { VisualDiagram } from './VisualDiagram';
import { Scratchpad } from './Scratchpad';
import { sound } from '../utils/soundEffects';
import { speech } from '../utils/speech';
import { 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  Flag, 
  CheckCircle2, 
  Volume2, 
  VolumeX, 
  School, 
  User, 
  GraduationCap, 
  Send, 
  AlertTriangle,
  PenTool,
  LayoutGrid,
  X
} from 'lucide-react';

interface QuizViewProps {
  roundNumber: number;
  questions: Question[];
  student: StudentProfile;
  onFinishQuiz: (result: RoundResult) => void;
  onExitQuiz: () => void;
  onEditStudent: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  roundNumber,
  questions,
  student,
  onFinishQuiz,
  onExitQuiz,
  onEditStudent,
}) => {
  // 30 minutes = 1800 seconds countdown
  const [timeLeft, setTimeLeft] = useState<number>(1800);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);
  const [showExitConfirm, setShowExitConfirm] = useState<boolean>(false);
  const [isScratchpadOpen, setIsScratchpadOpen] = useState<boolean>(false);
  const [isReadingAudio, setIsReadingAudio] = useState<boolean>(false);
  const [isMobilePaletteOpen, setIsMobilePaletteOpen] = useState<boolean>(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const currentQ = questions[currentIndex] || questions[0];

  // Timer countdown hook
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleTimeUp();
          return 0;
        }
        if (prev <= 60 && prev % 10 === 0) {
          sound.playTick();
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      speech.stop();
    };
  }, []);

  // Format time mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleTimeUp = () => {
    speech.stop();
    doSubmit();
  };

  const handleSelectOption = (option: string) => {
    sound.playSelect();
    setAnswers((prev) => ({
      ...prev,
      [currentQ.questionNumber]: option,
    }));
  };

  const handleToggleFlag = () => {
    sound.playClick();
    setFlagged((prev) => ({
      ...prev,
      [currentQ.questionNumber]: !prev[currentQ.questionNumber],
    }));
  };

  const handlePrevious = () => {
    sound.playClick();
    speech.stop();
    setIsReadingAudio(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    sound.playClick();
    speech.stop();
    setIsReadingAudio(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectQuestionIndex = (idx: number) => {
    sound.playClick();
    speech.stop();
    setIsReadingAudio(false);
    setCurrentIndex(idx);
    setIsMobilePaletteOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReadAloud = () => {
    if (isReadingAudio) {
      speech.stop();
      setIsReadingAudio(false);
    } else {
      setIsReadingAudio(true);
      const textToRead = `Câu số ${currentQ.questionNumber}. Mức ${currentQ.level}. ${currentQ.questionText}`;
      speech.speak(textToRead, () => {
        setIsReadingAudio(false);
      });
    }
  };

  const checkQuestionCorrect = (q: Question, studentAns?: string): boolean => {
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

  // Submit test calculations
  const doSubmit = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    speech.stop();

    let totalScore = 0;
    let l1Correct = 0;
    let l2Correct = 0;
    let l3Correct = 0;

    questions.forEach((q) => {
      const studentAns = answers[q.questionNumber];
      if (checkQuestionCorrect(q, studentAns)) {
        totalScore += q.points;
        if (q.level === 1) l1Correct++;
        if (q.level === 2) l2Correct++;
        if (q.level === 3) l3Correct++;
      }
    });

    let rankTitle = 'Cử Nhân Toán Học';
    if (totalScore === 300) rankTitle = 'Trạng Nguyên Xuất Sắc';
    else if (totalScore >= 270) rankTitle = 'Bảng Nhãn';
    else if (totalScore >= 240) rankTitle = 'Thám Hoa';
    else if (totalScore >= 200) rankTitle = 'Hoàng Giáp';
    else if (totalScore >= 150) rankTitle = 'Tiến Sĩ';

    const result: RoundResult = {
      roundNumber,
      score: totalScore,
      maxScore: 300,
      totalTimeSeconds: 1800 - timeLeft,
      completedAt: new Date().toISOString(),
      answers,
      isPassed: totalScore >= 150,
      levelCorrectCount: {
        level1: l1Correct,
        level2: l2Correct,
        level3: l3Correct,
      },
      rankTitle,
    };

    sound.playFanfare();
    onFinishQuiz(result);
  };

  const answeredCount = Object.keys(answers).length;
  const unansweredCount = questions.length - answeredCount;

  return (
    <div className="min-h-[calc(100vh-64px)] bg-amber-50/30 pb-24 md:pb-12">
      {/* Quiz Top Action & Student Information Bar - Optimized for Mobile & Desktop */}
      <div className="bg-white/95 backdrop-blur-md border-b border-amber-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 flex items-center justify-between gap-2">
          {/* Left: Round & Student info on desktop; compact on phone */}
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-amber-700 text-white font-black text-xs rounded-lg whitespace-nowrap">
              Vòng {roundNumber}
            </span>

            <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-800">
              <span className="text-amber-300">·</span>
              <span className="truncate max-w-[120px] text-amber-900">{student.studentName}</span>
              <span className="text-slate-400">({student.className})</span>
            </div>
          </div>

          {/* Center / Right: Countdown Timer & Action Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* 30-Minute Countdown Clock */}
            <div
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl font-mono text-xs sm:text-sm font-black border min-h-[38px] transition-all ${
                timeLeft <= 180
                  ? 'bg-rose-50 border-rose-300 text-rose-700 animate-pulse'
                  : timeLeft <= 600
                  ? 'bg-amber-100 border-amber-300 text-amber-900'
                  : 'bg-emerald-50 border-emerald-300 text-emerald-800'
              }`}
            >
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="tabular-nums font-bold">{formatTime(timeLeft)}</span>
            </div>

            {/* Electronic Scratchpad Button */}
            <button
              onClick={() => setIsScratchpadOpen(!isScratchpadOpen)}
              className="min-h-[38px] px-2.5 py-1.5 bg-amber-100/90 hover:bg-amber-200 text-amber-900 rounded-xl font-bold text-xs flex items-center gap-1 border border-amber-300 transition-colors"
              title="Mở bảng nháp để tính toán"
            >
              <PenTool className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Bảng Nháp</span>
            </button>

            {/* Mobile Question Palette Drawer Trigger Button */}
            <button
              onClick={() => {
                sound.playClick();
                setIsMobilePaletteOpen(true);
              }}
              className="lg:hidden min-h-[38px] px-2.5 py-1.5 bg-amber-600/10 hover:bg-amber-600/20 text-amber-900 rounded-xl font-bold text-xs flex items-center gap-1 border border-amber-300 transition-colors"
              title="Mở bảng 30 câu hỏi"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-amber-700" />
              <span>{answeredCount}/30</span>
            </button>

            {/* Final Submit Button */}
            <button
              onClick={() => setShowSubmitModal(true)}
              className="min-h-[38px] px-3 sm:px-4 py-1.5 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white rounded-xl font-black text-xs shadow-xs hover:shadow transition-all flex items-center gap-1 whitespace-nowrap active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>NỘP BÀI</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content: Left (Question Area) & Right (Question Palette 1-30 on Desktop) */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Question Stage (8 cols on lg) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-amber-200/90 shadow-sm p-4 sm:p-8 relative">
              {/* Question Header: Level, Number, Audio Read, Flag */}
              <div className="flex items-center justify-between border-b border-amber-100 pb-3 sm:pb-4 mb-4 gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-amber-700 text-white font-black text-xs rounded-xl shadow-xs">
                    Câu {currentQ.questionNumber} / 30
                  </span>
                  
                  {/* Level Tag */}
                  <span
                    className={`px-2 py-0.5 rounded-lg text-[11px] sm:text-xs font-bold ${
                      currentQ.level === 1
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : currentQ.level === 2
                        ? 'bg-amber-50 text-amber-800 border border-amber-200'
                        : 'bg-rose-50 text-rose-800 border border-rose-200'
                    }`}
                  >
                    {currentQ.level === 1 && 'Mức 1'}
                    {currentQ.level === 2 && 'Mức 2'}
                    {currentQ.level === 3 && '⭐ Mức 3'}
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-500 font-semibold">(10đ)</span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Read question aloud for 2nd graders (min-h-44 for easy touch) */}
                  <button
                    onClick={handleReadAloud}
                    className={`min-h-[40px] px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors border ${
                      isReadingAudio
                        ? 'bg-amber-600 text-white border-amber-700 animate-pulse'
                        : 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100 active:scale-95'
                    }`}
                    title="Đọc đề bài cho em nghe"
                  >
                    <Volume2 className="w-4 h-4 text-amber-700" />
                    <span>{isReadingAudio ? 'Đang đọc...' : 'Đọc đề'}</span>
                  </button>

                  {/* Flag question (min-w-44 min-h-44 touch hitbox) */}
                  <button
                    onClick={handleToggleFlag}
                    className={`min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl border transition-colors ${
                      flagged[currentQ.questionNumber]
                        ? 'bg-amber-500 text-white border-amber-600'
                        : 'text-slate-400 border-slate-200 hover:bg-slate-50'
                    }`}
                    title="Cắm cờ để xem lại sau"
                  >
                    <Flag className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <div className="space-y-2">
                <h2 className="text-base sm:text-xl font-black text-slate-900 leading-relaxed">
                  {currentQ.questionText}
                </h2>
                {currentQ.subText && (
                  <p className="text-xs sm:text-sm text-slate-600 font-medium italic">
                    {currentQ.subText}
                  </p>
                )}
              </div>

              {/* Visual Interactive Diagram if question has one */}
              <VisualDiagram type={currentQ.visualType} data={currentQ.visualData} />

              {/* Multiple Choice Options or Fill-Blank Input */}
              <div className="mt-5 space-y-3">
                {currentQ.type === 'multiple_choice' && currentQ.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    {currentQ.options.map((option, idx) => {
                      const label = String.fromCharCode(65 + idx); // A, B, C, D
                      const currentAns = answers[currentQ.questionNumber];
                      const isSelected = currentAns === option || currentAns === label;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSelectOption(option)}
                          className={`min-h-[52px] sm:min-h-[56px] p-3.5 sm:p-4 rounded-2xl border-2 text-left font-bold text-sm sm:text-base flex items-center gap-3 transition-all duration-150 active:scale-[0.98] ${
                            isSelected
                              ? 'bg-amber-100 border-amber-600 text-amber-950 shadow-xs'
                              : 'bg-white border-amber-200/90 text-slate-800 hover:bg-amber-50/70'
                          }`}
                        >
                          <span
                            className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black shrink-0 ${
                              isSelected
                                ? 'bg-amber-700 text-white'
                                : 'bg-amber-100/90 text-amber-800'
                            }`}
                          >
                            {label}
                          </span>
                          <span className="flex-1 leading-snug">{option}</span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {currentQ.type === 'fill_blank' && (
                  <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-200">
                    <label className="block text-xs font-bold text-amber-900 mb-2">
                      Nhập số hoặc câu trả lời của em:
                    </label>
                    <div className="flex items-center gap-3 flex-wrap">
                      <input
                        type="text"
                        inputMode="numeric"
                        value={answers[currentQ.questionNumber] || ''}
                        onChange={(e) => {
                          setAnswers((prev) => ({
                            ...prev,
                            [currentQ.questionNumber]: e.target.value,
                          }));
                        }}
                        placeholder="Điền đáp án vào đây..."
                        className="flex-1 min-w-[200px] max-w-xs px-4 py-3 bg-white border-2 border-amber-400 rounded-xl font-black text-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                      {currentQ.unit && (
                        <span className="font-bold text-slate-700 text-sm">{currentQ.unit}</span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Action Buttons: TRỞ LẠI & TIẾP TỤC (Card footer for desktop and tablet) */}
              <div className="mt-8 pt-5 border-t border-amber-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                  className={`min-h-[46px] px-4 sm:px-6 py-2.5 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 transition-all ${
                    currentIndex === 0
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      : 'bg-amber-100 hover:bg-amber-200 text-amber-950 active:scale-95 shadow-xs'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>TRỞ LẠI</span>
                </button>

                <div className="text-xs font-bold text-slate-500 hidden sm:block">
                  Đã trả lời: <strong className="text-amber-800">{answeredCount}/30 câu</strong>
                </div>

                {currentIndex < questions.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="min-h-[46px] px-5 sm:px-7 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-2xl font-black text-xs sm:text-sm shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center gap-2"
                  >
                    <span>TIẾP TỤC</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(true)}
                    className="min-h-[46px] px-5 sm:px-7 py-2.5 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white rounded-2xl font-black text-xs sm:text-sm shadow-md active:scale-95 transition-all flex items-center gap-2"
                  >
                    <span>NỘP BÀI THI</span>
                    <Send className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Bottom exit return button */}
            <div className="flex justify-between items-center text-xs px-2 pt-1">
              <button
                onClick={() => setShowExitConfirm(true)}
                className="text-slate-500 hover:text-rose-600 font-bold transition-colors flex items-center gap-1 min-h-[36px]"
              >
                <span>← Dừng làm bài và thoát về danh sách</span>
              </button>
            </div>
          </div>

          {/* Question Palette Sidebar (4 cols on Desktop) */}
          <div className="hidden lg:block lg:col-span-4 space-y-4">
            <div className="bg-white rounded-3xl border-2 border-amber-200/90 shadow-xs p-5 sticky top-32">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-black text-sm text-slate-900">
                  Bảng 30 Câu Hỏi (Vòng {roundNumber})
                </h3>
                <span className="text-xs font-bold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded-lg">
                  {answeredCount}/30
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-100 rounded-full h-2 mb-4 overflow-hidden border border-slate-200">
                <div
                  className="bg-gradient-to-r from-amber-500 to-emerald-500 h-full transition-all duration-300"
                  style={{ width: `${(answeredCount / 30) * 100}%` }}
                />
              </div>

              {/* Level Sections indicator */}
              <div className="space-y-3">
                {/* Level 1: Questions 1 to 15 */}
                <div>
                  <div className="text-[11px] font-bold text-blue-800 uppercase tracking-wide mb-1.5 flex items-center justify-between">
                    <span>Mức 1: Nhận Biết (1 - 15)</span>
                    <span className="text-slate-400 font-normal">15 câu</span>
                  </div>
                  <div className="grid grid-cols-5 gap-1.5">
                    {questions.slice(0, 15).map((q, idx) => {
                      const isCurrent = idx === currentIndex;
                      const isAnswered = !!answers[q.questionNumber];
                      const isFlagged = !!flagged[q.questionNumber];
                      return (
                        <button
                          key={q.id}
                          onClick={() => handleSelectQuestionIndex(idx)}
                          className={`relative h-9 rounded-xl font-black text-xs flex items-center justify-center transition-all ${
                            isCurrent
                              ? 'ring-2 ring-amber-600 bg-amber-600 text-white shadow-xs'
                              : isAnswered
                              ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold'
                              : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-amber-50'
                          }`}
                        >
                          {q.questionNumber}
                          {isFlagged && (
                            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full border border-white" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Level 2: Questions 16 to 25 */}
                <div>
                  <div className="text-[11px] font-bold text-amber-800 uppercase tracking-wide mb-1.5 flex items-center justify-between">
                    <span>Mức 2: Thông Hiểu (16 - 25)</span>
                    <span className="text-slate-400 font-normal">10 câu</span>
                  </div>
                  <div className="grid grid-cols-5 gap-1.5">
                    {questions.slice(15, 25).map((q, idx) => {
                      const actualIdx = 15 + idx;
                      const isCurrent = actualIdx === currentIndex;
                      const isAnswered = !!answers[q.questionNumber];
                      const isFlagged = !!flagged[q.questionNumber];
                      return (
                        <button
                          key={q.id}
                          onClick={() => handleSelectQuestionIndex(actualIdx)}
                          className={`relative h-9 rounded-xl font-black text-xs flex items-center justify-center transition-all ${
                            isCurrent
                              ? 'ring-2 ring-amber-600 bg-amber-600 text-white shadow-xs'
                              : isAnswered
                              ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold'
                              : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-amber-50'
                          }`}
                        >
                          {q.questionNumber}
                          {isFlagged && (
                            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full border border-white" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Level 3: Questions 26 to 30 */}
                <div>
                  <div className="text-[11px] font-bold text-rose-800 uppercase tracking-wide mb-1.5 flex items-center justify-between">
                    <span>⭐ Mức 3: Vận Dụng Cao (26 - 30)</span>
                    <span className="text-slate-400 font-normal">5 câu</span>
                  </div>
                  <div className="grid grid-cols-5 gap-1.5">
                    {questions.slice(25, 30).map((q, idx) => {
                      const actualIdx = 25 + idx;
                      const isCurrent = actualIdx === currentIndex;
                      const isAnswered = !!answers[q.questionNumber];
                      const isFlagged = !!flagged[q.questionNumber];
                      return (
                        <button
                          key={q.id}
                          onClick={() => handleSelectQuestionIndex(actualIdx)}
                          className={`relative h-9 rounded-xl font-black text-xs flex items-center justify-center transition-all ${
                            isCurrent
                              ? 'ring-2 ring-rose-600 bg-rose-600 text-white shadow-xs'
                              : isAnswered
                              ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold'
                              : 'bg-rose-50/60 text-rose-900 border border-rose-200 hover:bg-rose-100/60'
                          }`}
                        >
                          {q.questionNumber}
                          {isFlagged && (
                            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full border border-white" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="mt-4 pt-3 border-t border-amber-100 flex items-center justify-between text-[10px] text-slate-600">
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded bg-emerald-100 border border-emerald-300 inline-block" />
                  <span>Đã làm</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded bg-slate-50 border border-slate-200 inline-block" />
                  <span>Chưa làm</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded bg-amber-600 inline-block" />
                  <span>Đang xem</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                  <span>Cắm cờ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE FIXED BOTTOM THUMB BAR - Easy navigation for small hands on smartphones */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-amber-300/80 px-3 py-2 pb-safe flex items-center justify-between gap-2 shadow-lg">
        <button
          type="button"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`flex-1 min-h-[46px] py-2 rounded-xl font-black text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 ${
            currentIndex === 0
              ? 'bg-slate-100 text-slate-400'
              : 'bg-amber-100 text-amber-950 active:bg-amber-200 shadow-xs'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>TRỞ LẠI</span>
        </button>

        <button
          type="button"
          onClick={() => {
            sound.playClick();
            setIsMobilePaletteOpen(true);
          }}
          className="flex-1 min-h-[46px] py-2 px-1 bg-amber-500/15 text-amber-900 border border-amber-300 rounded-xl font-extrabold text-[11px] flex flex-col items-center justify-center leading-tight active:scale-95"
        >
          <span className="flex items-center gap-1">
            <LayoutGrid className="w-3.5 h-3.5 text-amber-700" />
            <span>Câu {currentIndex + 1}/30</span>
          </span>
          <span className="text-[10px] text-amber-700 font-semibold">({answeredCount} đã làm)</span>
        </button>

        {currentIndex < questions.length - 1 ? (
          <button
            type="button"
            onClick={handleNext}
            className="flex-1 min-h-[46px] py-2 bg-amber-600 active:bg-amber-700 text-white rounded-xl font-black text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
          >
            <span>TIẾP TỤC</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setShowSubmitModal(true)}
            className="flex-1 min-h-[46px] py-2 bg-gradient-to-r from-red-600 to-amber-600 active:from-red-700 active:to-amber-700 text-white rounded-xl font-black text-xs flex items-center justify-center gap-1 shadow-sm active:scale-95 transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>NỘP BÀI</span>
          </button>
        )}
      </div>

      {/* MOBILE BOTTOM SHEET DRAWER FOR 30 QUESTIONS */}
      {isMobilePaletteOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-t-3xl max-h-[85vh] flex flex-col shadow-2xl border-t-2 border-amber-400 p-4 pb-safe animate-in slide-in-from-bottom duration-200">
            {/* Grab handle */}
            <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-3 shrink-0" />

            <div className="flex items-center justify-between pb-3 border-b border-amber-100 shrink-0">
              <div>
                <h3 className="font-black text-sm text-slate-900">Bảng 30 Câu Hỏi</h3>
                <p className="text-[11px] text-amber-800 font-semibold">
                  Chạm vào số câu để chuyển đến câu đó
                </p>
              </div>
              <button
                onClick={() => setIsMobilePaletteOpen(false)}
                className="min-w-[36px] min-h-[36px] flex items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Questions Grid */}
            <div className="overflow-y-auto py-3 space-y-4 flex-1 overscroll-contain">
              {/* Level 1: 1 - 15 */}
              <div>
                <div className="text-xs font-black text-blue-800 uppercase tracking-wide mb-1.5 flex items-center justify-between">
                  <span>Mức 1: Nhận Biết (1 - 15)</span>
                  <span className="text-slate-400 text-[10px]">15 câu</span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {questions.slice(0, 15).map((q, idx) => {
                    const isCurrent = idx === currentIndex;
                    const isAnswered = !!answers[q.questionNumber];
                    const isFlagged = !!flagged[q.questionNumber];
                    return (
                      <button
                        key={q.id}
                        onClick={() => handleSelectQuestionIndex(idx)}
                        className={`relative min-h-[44px] rounded-xl font-black text-xs flex items-center justify-center transition-all active:scale-95 ${
                          isCurrent
                            ? 'ring-2 ring-amber-600 bg-amber-600 text-white shadow-xs'
                            : isAnswered
                            ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold'
                            : 'bg-slate-50 text-slate-700 border border-slate-200 active:bg-amber-100'
                        }`}
                      >
                        {q.questionNumber}
                        {isFlagged && (
                          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full border border-white" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Level 2: 16 - 25 */}
              <div>
                <div className="text-xs font-black text-amber-800 uppercase tracking-wide mb-1.5 flex items-center justify-between">
                  <span>Mức 2: Thông Hiểu (16 - 25)</span>
                  <span className="text-slate-400 text-[10px]">10 câu</span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {questions.slice(15, 25).map((q, idx) => {
                    const actualIdx = 15 + idx;
                    const isCurrent = actualIdx === currentIndex;
                    const isAnswered = !!answers[q.questionNumber];
                    const isFlagged = !!flagged[q.questionNumber];
                    return (
                      <button
                        key={q.id}
                        onClick={() => handleSelectQuestionIndex(actualIdx)}
                        className={`relative min-h-[44px] rounded-xl font-black text-xs flex items-center justify-center transition-all active:scale-95 ${
                          isCurrent
                            ? 'ring-2 ring-amber-600 bg-amber-600 text-white shadow-xs'
                            : isAnswered
                            ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold'
                            : 'bg-slate-50 text-slate-700 border border-slate-200 active:bg-amber-100'
                        }`}
                      >
                        {q.questionNumber}
                        {isFlagged && (
                          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full border border-white" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Level 3: 26 - 30 */}
              <div>
                <div className="text-xs font-black text-rose-800 uppercase tracking-wide mb-1.5 flex items-center justify-between">
                  <span>⭐ Mức 3: Vận Dụng Cao (26 - 30)</span>
                  <span className="text-slate-400 text-[10px]">5 câu</span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {questions.slice(25, 30).map((q, idx) => {
                    const actualIdx = 25 + idx;
                    const isCurrent = actualIdx === currentIndex;
                    const isAnswered = !!answers[q.questionNumber];
                    const isFlagged = !!flagged[q.questionNumber];
                    return (
                      <button
                        key={q.id}
                        onClick={() => handleSelectQuestionIndex(actualIdx)}
                        className={`relative min-h-[44px] rounded-xl font-black text-xs flex items-center justify-center transition-all active:scale-95 ${
                          isCurrent
                            ? 'ring-2 ring-rose-600 bg-rose-600 text-white shadow-xs'
                            : isAnswered
                            ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold'
                            : 'bg-rose-50/60 text-rose-900 border border-rose-200 active:bg-rose-100'
                        }`}
                      >
                        {q.questionNumber}
                        {isFlagged && (
                          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full border border-white" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Legend & Close CTA */}
            <div className="pt-3 border-t border-amber-100 flex items-center justify-between text-[11px] text-slate-600 shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-emerald-100 border border-emerald-300 inline-block" />
                <span>Đã làm: <strong>{answeredCount}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-slate-50 border border-slate-200 inline-block" />
                <span>Chưa làm: <strong>{unansweredCount}</strong></span>
              </div>
              <button
                onClick={() => setIsMobilePaletteOpen(false)}
                className="py-1.5 px-3 bg-amber-600 text-white rounded-lg font-bold text-xs"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Scratchpad Canvas */}
      <Scratchpad isOpen={isScratchpadOpen} onClose={() => setIsScratchpadOpen(false)} />

      {/* Submit Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl p-5 sm:p-7 max-w-md w-full shadow-2xl border-2 border-amber-300 space-y-4">
            <div className="flex items-center gap-3 text-amber-900">
              <span className="text-3xl">📜</span>
              <div>
                <h3 className="text-lg font-black">Xác Nhận Nộp Bài Thi</h3>
                <p className="text-xs text-amber-800">Trạng Nguyên Toán Học Lớp 2 - Vòng {roundNumber}</p>
              </div>
            </div>

            <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Thí sinh:</span>
                <span className="font-bold text-slate-900">{student.studentName} ({student.className})</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Số câu đã làm:</span>
                <span className="font-bold text-emerald-700">{answeredCount} / 30 câu</span>
              </div>
              {unansweredCount > 0 && (
                <div className="flex items-center justify-between text-rose-700 font-bold bg-rose-50 p-2 rounded-lg border border-rose-200">
                  <span className="flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Còn lại:
                  </span>
                  <span>{unansweredCount} câu chưa trả lời!</span>
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Thời gian còn lại:</span>
                <span className="font-bold text-amber-900">{formatTime(timeLeft)}</span>
              </div>
            </div>

            <p className="text-xs text-slate-600">
              Em có chắc chắn muốn nộp bài để xem điểm số và Bảng Vàng Trạng Nguyên không?
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="w-1/2 min-h-[44px] py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs transition-colors"
              >
                Làm Tiếp
              </button>
              <button
                type="button"
                onClick={doSubmit}
                className="w-1/2 min-h-[44px] py-2.5 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-black rounded-xl text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4" />
                Nộp Bài Ngay
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Exit Confirmation Modal */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-5 sm:p-6 max-w-sm w-full shadow-2xl border border-slate-200 space-y-4">
            <h3 className="text-base font-black text-slate-900">Tạm dừng làm bài?</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nếu em thoát ra bây giờ, kết quả bài thi hiện tại sẽ không được lưu. Em có chắc muốn quay lại danh sách các vòng thi không?
            </p>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setShowExitConfirm(false)}
                className="flex-1 min-h-[44px] py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl"
              >
                Ở lại làm tiếp
              </button>
              <button
                onClick={onExitQuiz}
                className="flex-1 min-h-[44px] py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl"
              >
                Thoát ra ngoài
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
