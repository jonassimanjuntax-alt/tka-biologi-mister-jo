import React, { useState, useEffect } from 'react';
import { QUESTIONS_DATA } from './data/questions';
import { QuestionState, UserAnswer } from './types/biology';
import { Navbar, NavTab } from './components/Navbar';
import { BerandaView } from './components/BerandaView';
import { PetunjukView } from './components/PetunjukView';
import { ManfaatView } from './components/ManfaatView';
import { LatihanView } from './components/LatihanView';
import { HasilLatihanView } from './components/HasilLatihanView';
import { ProgresView } from './components/ProgresView';
import { BankSoalModal } from './components/BankSoalModal';
import { PengaturanNaratorModal } from './components/PengaturanNaratorModal';
import { AudioNarrationBanner } from './components/AudioNarrationBanner';
import { evaluateAllProgress } from './utils/scoring';
import { ttsManager } from './utils/tts';

const STORAGE_KEY = 'biologi_genius_2026_progress';

function getInitialStates(): Record<number, QuestionState> {
  const initial: Record<number, QuestionState> = {};
  QUESTIONS_DATA.forEach((q) => {
    let emptyAnswer: UserAnswer;
    if (q.type === 'PG') {
      emptyAnswer = { type: 'PG', selected: null };
    } else if (q.type === 'PGK') {
      emptyAnswer = { type: 'PGK', selected: [] };
    } else {
      emptyAnswer = { type: 'BS', answers: {} };
    }

    initial[q.id] = {
      answered: false,
      userAnswer: emptyAnswer,
      isCorrect: false,
      score: 0,
      maxScore: q.type === 'BS' ? 28 / 6 : 3,
      markedForReview: false,
      checked: false
    };
  });
  return initial;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('beranda');
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(1);
  const [states, setStates] = useState<Record<number, QuestionState>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.states) {
          return parsed.states;
        }
      }
    } catch {
      // Ignore fallback
    }
    return getInitialStates();
  });

  const [bankSoalOpen, setBankSoalOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Restore current question index if saved
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.currentQuestionId) {
          setCurrentQuestionId(parsed.currentQuestionId);
        }
      }
    } catch {
      // Ignore fallback
    }
  }, []);

  // Save progress automatically whenever states or currentQuestionId changes
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          currentQuestionId,
          states,
          lastUpdated: new Date().toISOString()
        })
      );
    } catch {
      // Ignore fallback
    }
  }, [states, currentQuestionId]);

  // When changing tabs, stop any existing speech unless going to a page that starts its own
  const handleSelectTab = (tab: NavTab) => {
    ttsManager.stop();
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpdateQuestionState = (updated: QuestionState) => {
    setStates((prev) => ({
      ...prev,
      [currentQuestionId]: updated
    }));
  };

  const handlePrevQuestion = () => {
    ttsManager.stop();
    if (currentQuestionId > 1) {
      setCurrentQuestionId(currentQuestionId - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextQuestion = () => {
    ttsManager.stop();
    if (currentQuestionId < QUESTIONS_DATA.length) {
      setCurrentQuestionId(currentQuestionId + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveTab('hasil');
    }
  };

  const handleSelectQuestionFromModal = (id: number) => {
    ttsManager.stop();
    setCurrentQuestionId(id);
    setActiveTab('latihan');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetAllProgress = () => {
    ttsManager.stop();
    const freshStates = getInitialStates();
    setStates(freshStates);
    setCurrentQuestionId(1);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
    setActiveTab('beranda');
  };

  // Evaluate current overall score
  const summary = evaluateAllProgress(QUESTIONS_DATA, states);
  const currentQuestion = 
    QUESTIONS_DATA.find((q) => q.id === currentQuestionId) || QUESTIONS_DATA[0];
  const currentQuestionState = 
    states[currentQuestionId] || getInitialStates()[currentQuestionId];

  return (
    <div className="min-h-screen flex flex-col bg-[#fdf5f7] text-slate-800 antialiased selection:bg-rose-200 selection:text-rose-900">
      
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        answeredCount={summary.answeredCount}
        totalQuestions={QUESTIONS_DATA.length}
        totalScore={summary.totalScore}
        onOpenBankSoalModal={() => setBankSoalOpen(true)}
        onOpenSettingsModal={() => setSettingsOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {activeTab === 'beranda' && (
          <BerandaView
            onStartExam={() => handleSelectTab('latihan')}
            onOpenPetunjuk={() => handleSelectTab('petunjuk')}
            onOpenManfaat={() => handleSelectTab('manfaat')}
            onOpenProgres={() => handleSelectTab('progres')}
            answeredCount={summary.answeredCount}
            totalQuestions={QUESTIONS_DATA.length}
            totalScore={summary.totalScore}
            currentQuestionId={currentQuestionId}
          />
        )}

        {activeTab === 'petunjuk' && (
          <PetunjukView onStartExam={() => handleSelectTab('latihan')} />
        )}

        {activeTab === 'manfaat' && (
          <ManfaatView onStartExam={() => handleSelectTab('latihan')} />
        )}

        {activeTab === 'latihan' && (
          <LatihanView
            question={currentQuestion}
            totalQuestions={QUESTIONS_DATA.length}
            questionState={currentQuestionState}
            onUpdateState={handleUpdateQuestionState}
            onPrev={handlePrevQuestion}
            onNext={handleNextQuestion}
            onJumpToResult={() => handleSelectTab('hasil')}
            onOpenBankSoal={() => setBankSoalOpen(true)}
          />
        )}

        {activeTab === 'hasil' && (
          <HasilLatihanView
            questions={QUESTIONS_DATA}
            states={states}
            onSelectQuestion={handleSelectQuestionFromModal}
            onResetProgress={handleResetAllProgress}
            onContinueExam={() => handleSelectTab('latihan')}
          />
        )}

        {activeTab === 'progres' && (
          <ProgresView
            questions={QUESTIONS_DATA}
            states={states}
            currentQuestionId={currentQuestionId}
            onSelectQuestion={handleSelectQuestionFromModal}
            onContinueExam={() => handleSelectTab('latihan')}
            onConfirmReset={handleResetAllProgress}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-rose-200/60 bg-white/70 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-rose-700">BIOLOGI GENIUS</span>
            <span>•</span>
            <span>Master TKA Biologi 2026 SMA/MA</span>
          </div>
          <div className="text-center sm:text-right">
            <span>Dibimbing oleh </span>
            <span className="font-bold text-slate-800">Mister Jo</span>
            <span className="italic ml-2">"Berpikir Ilmiah, Membaca Kehidupan, Menaklukkan TKA!"</span>
          </div>
        </div>
      </footer>

      {/* Floating Audio Narration Subtitle Bar */}
      <AudioNarrationBanner />

      {/* Bank Nomor Soal Modal */}
      <BankSoalModal
        isOpen={bankSoalOpen}
        onClose={() => setBankSoalOpen(false)}
        questions={QUESTIONS_DATA}
        states={states}
        currentQuestionId={currentQuestionId}
        onSelectQuestion={handleSelectQuestionFromModal}
      />

      {/* Pengaturan Narator TTS Modal */}
      <PengaturanNaratorModal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />

    </div>
  );
}
