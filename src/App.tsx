/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { StudentProfile, RoundResult, Question } from './types/quiz';
import { Header } from './components/Header';
import { RoundSelector } from './components/RoundSelector';
import { QuizView } from './components/QuizView';
import { ResultView } from './components/ResultView';
import { GuideView } from './components/GuideView';
import { StudentProfileModal } from './components/StudentProfileModal';
import { getQuestionsForRound } from './data/questionBank';
import { sound } from './utils/soundEffects';

const STORAGE_KEY_STUDENT = 'trang_nguyen_student_profile_v1';
const STORAGE_KEY_RESULTS = 'trang_nguyen_results_v1';

export default function App() {
  const [currentView, setCurrentView] = useState<'rounds' | 'quiz' | 'result' | 'guide'>('rounds');
  const [selectedRoundNumber, setSelectedRoundNumber] = useState<number>(1);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Student profile state
  const [student, setStudent] = useState<StudentProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_STUDENT);
      if (saved) return JSON.parse(saved);
    } catch {}
    return {
      schoolName: 'Trường Tiểu Học Kim Đồng',
      studentName: 'Nguyễn Văn An',
      className: 'Lớp 2A',
    };
  });

  // Test results state (roundNumber -> RoundResult)
  const [results, setResults] = useState<Record<number, RoundResult>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_RESULTS);
      if (saved) return JSON.parse(saved);
    } catch {}
    return {};
  });

  // Modal states
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [isPreQuizModalOpen, setIsPreQuizModalOpen] = useState<boolean>(false);
  const [pendingRoundToStart, setPendingRoundToStart] = useState<number>(1);

  // Save student to localStorage
  const handleSaveStudent = (newProfile: StudentProfile) => {
    setStudent(newProfile);
    try {
      localStorage.setItem(STORAGE_KEY_STUDENT, JSON.stringify(newProfile));
    } catch {}
    setIsProfileModalOpen(false);
  };

  // Toggle sound
  const handleToggleSound = () => {
    const nextVal = sound.toggleSound();
    setSoundEnabled(nextVal);
  };

  // Start round click -> Open modal to review/confirm School, Student, Class with "BẮT ĐẦU LÀM BÀI"
  const handleInitiateRound = (roundNumber: number) => {
    setPendingRoundToStart(roundNumber);
    setIsPreQuizModalOpen(true);
  };

  // Actually start the quiz
  const handleConfirmStartQuiz = () => {
    setIsPreQuizModalOpen(false);
    setSelectedRoundNumber(pendingRoundToStart);
    const qs = getQuestionsForRound(pendingRoundToStart);
    setActiveQuestions(qs);
    setCurrentView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // When student submits quiz
  const handleFinishQuiz = (result: RoundResult) => {
    const resultWithQuestions: RoundResult = {
      ...result,
      questions: activeQuestions,
    };
    const updated = {
      ...results,
      [result.roundNumber]: resultWithQuestions,
    };
    setResults(updated);
    try {
      localStorage.setItem(STORAGE_KEY_RESULTS, JSON.stringify(updated));
    } catch {}
    setCurrentView('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // View past result
  const handleViewResult = (roundNumber: number) => {
    setSelectedRoundNumber(roundNumber);
    const pastResult = results[roundNumber];
    const qs = pastResult?.questions && pastResult.questions.length > 0
      ? pastResult.questions
      : getQuestionsForRound(roundNumber);
    setActiveQuestions(qs);
    setCurrentView('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Retry round
  const handleRetryRound = (roundNumber: number) => {
    setSelectedRoundNumber(roundNumber);
    const qs = getQuestionsForRound(roundNumber);
    setActiveQuestions(qs);
    setCurrentView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Next round
  const handleNextRound = (nextRoundNumber: number) => {
    setSelectedRoundNumber(nextRoundNumber);
    const qs = getQuestionsForRound(nextRoundNumber);
    setActiveQuestions(qs);
    setCurrentView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/30 selection:bg-amber-200">
      {/* Top Bar adhering to Top Bar Contract */}
      <Header
        currentView={currentView}
        onNavigate={(view) => {
          sound.playClick();
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        student={student}
        onOpenProfile={() => {
          sound.playClick();
          setIsProfileModalOpen(true);
        }}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'rounds' && (
          <RoundSelector
            student={student}
            onEditStudent={() => setIsProfileModalOpen(true)}
            onSelectRound={handleInitiateRound}
            results={results}
            onViewResult={handleViewResult}
          />
        )}

        {currentView === 'quiz' && (
          <QuizView
            roundNumber={selectedRoundNumber}
            questions={activeQuestions}
            student={student}
            onFinishQuiz={handleFinishQuiz}
            onExitQuiz={() => {
              sound.playClick();
              setCurrentView('rounds');
            }}
            onEditStudent={() => setIsProfileModalOpen(true)}
          />
        )}

        {currentView === 'result' && results[selectedRoundNumber] && (
          <ResultView
            roundNumber={selectedRoundNumber}
            result={results[selectedRoundNumber]}
            questions={activeQuestions}
            student={student}
            onRetryRound={handleRetryRound}
            onNextRound={handleNextRound}
            onBackToRounds={() => {
              sound.playClick();
              setCurrentView('rounds');
            }}
          />
        )}

        {currentView === 'guide' && (
          <GuideView
            onBack={() => {
              sound.playClick();
              setCurrentView('rounds');
            }}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-amber-200 py-6 text-center text-xs text-slate-500 print:hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-semibold text-slate-600">
            Trạng Nguyên Toán Học Lớp 2 · Bộ Sách Kết Nối Tri Thức Với Cuộc Sống
          </p>
          <p className="text-[11px] text-slate-400">
            35 Vòng Thi Toàn Diện · 30 Phút Bấm Ngược · Phân Bậc 3 Mức Độ Chuẩn GDPT 2018
          </p>
        </div>
      </footer>

      {/* Student Profile Modal (Edit from header or hero) */}
      <StudentProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        profile={student}
        onSave={handleSaveStudent}
      />

      {/* Pre-Quiz Launch Modal (Shows School, Student, Class with "BẮT ĐẦU LÀM BÀI" button) */}
      <StudentProfileModal
        isOpen={isPreQuizModalOpen}
        onClose={() => setIsPreQuizModalOpen(false)}
        profile={student}
        onSave={handleSaveStudent}
        onStartQuiz={handleConfirmStartQuiz}
        isStartingQuiz={true}
        roundNumber={pendingRoundToStart}
      />
    </div>
  );
}
