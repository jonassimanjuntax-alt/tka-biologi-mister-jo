import React, { useState, useEffect } from 'react';
import { 
  Question, 
  QuestionState, 
  UserAnswer 
} from '../types/biology';
import { BiologyDiagram } from './BiologyDiagrams';
import { calculateQuestionScore } from '../utils/scoring';
import { ttsManager } from '../utils/tts';
import { 
  ChevronLeft, 
  ChevronRight, 
  Bookmark, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Volume2, 
  Zap, 
  BookOpen, 
  Lightbulb, 
  RotateCcw, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

interface LatihanViewProps {
  question: Question;
  totalQuestions: number;
  questionState: QuestionState;
  onUpdateState: (newState: QuestionState) => void;
  onPrev: () => void;
  onNext: () => void;
  onJumpToResult: () => void;
  onOpenBankSoal: () => void;
}

export const LatihanView: React.FC<LatihanViewProps> = ({
  question,
  totalQuestions,
  questionState,
  onUpdateState,
  onPrev,
  onNext,
  onJumpToResult,
  onOpenBankSoal
}) => {
  const [showPembahasan, setShowPembahasan] = useState<boolean>(false);
  const [showCaraCepat, setShowCaraCepat] = useState<boolean>(false);

  // When question changes, reset view state or auto open if already checked
  useEffect(() => {
    if (questionState.checked) {
      setShowPembahasan(true);
      setShowCaraCepat(true);
    } else {
      setShowPembahasan(false);
      setShowCaraCepat(false);
    }

    // Auto voice reading of stimulus guide when question opens if autoPlay is active
    if (ttsManager.getAutoPlay() && !questionState.checked) {
      ttsManager.speak(question.narasi.stimulus, `Panduan Stimulus Soal #${question.id}`);
    }
  }, [question.id]);

  const handleSelectPG = (key: string) => {
    if (questionState.checked) return;
    onUpdateState({
      ...questionState,
      userAnswer: { type: 'PG', selected: key }
    });
  };

  const handleTogglePGK = (key: string) => {
    if (questionState.checked) return;
    const current = (questionState.userAnswer.type === 'PGK' && questionState.userAnswer.selected) || [];
    let updated: string[];
    if (current.includes(key)) {
      updated = current.filter((k) => k !== key);
    } else {
      updated = [...current, key];
    }
    onUpdateState({
      ...questionState,
      userAnswer: { type: 'PGK', selected: updated }
    });
  };

  const handleSelectBS = (statementId: number, value: boolean) => {
    if (questionState.checked) return;
    const currentAnswers = 
      (questionState.userAnswer.type === 'BS' && questionState.userAnswer.answers) || {};
    onUpdateState({
      ...questionState,
      userAnswer: {
        type: 'BS',
        answers: { ...currentAnswers, [statementId]: value }
      }
    });
  };

  const handleCheckAnswer = () => {
    const evaluation = calculateQuestionScore(question, questionState.userAnswer);
    const updatedState: QuestionState = {
      ...questionState,
      answered: true,
      checked: true,
      isCorrect: evaluation.isCorrect,
      score: evaluation.score,
      maxScore: evaluation.maxScore
    };
    onUpdateState(updatedState);
    setShowPembahasan(true);
    setShowCaraCepat(true);

    // Speak reflection feedback
    const reflectionText = evaluation.isCorrect 
      ? question.narasi.refleksiBenar 
      : question.narasi.refleksiSalah;
    ttsManager.speak(reflectionText, `Refleksi Jawaban Soal #${question.id}`);
  };

  const handleResetAnswer = () => {
    let emptyAnswer: UserAnswer;
    if (question.type === 'PG') emptyAnswer = { type: 'PG', selected: null };
    else if (question.type === 'PGK') emptyAnswer = { type: 'PGK', selected: [] };
    else emptyAnswer = { type: 'BS', answers: {} };

    onUpdateState({
      ...questionState,
      answered: false,
      checked: false,
      isCorrect: false,
      score: 0,
      userAnswer: emptyAnswer
    });
    setShowPembahasan(false);
    setShowCaraCepat(false);
    ttsManager.stop();
  };

  const toggleBookmark = () => {
    onUpdateState({
      ...questionState,
      markedForReview: !questionState.markedForReview
    });
  };

  // Checking if question has an answer ready to check
  const isAnswerReady = () => {
    if (question.type === 'PG') {
      return questionState.userAnswer.type === 'PG' && !!questionState.userAnswer.selected;
    }
    if (question.type === 'PGK') {
      return (
        questionState.userAnswer.type === 'PGK' &&
        questionState.userAnswer.selected &&
        questionState.userAnswer.selected.length > 0
      );
    }
    if (question.type === 'BS') {
      if (questionState.userAnswer.type !== 'BS') return false;
      const ans = questionState.userAnswer.answers || {};
      const statements = question.statements || [];
      return statements.every((st) => ans[st.id] !== undefined && ans[st.id] !== null);
    }
    return false;
  };

  return (
    <div className="space-y-6 py-4 max-w-5xl mx-auto">
      
      {/* Question Header & Navigation Bar */}
      <div className="bg-white rounded-3xl border border-rose-200/80 p-4 sm:p-5 shadow-xs flex flex-wrap items-center justify-between gap-4">
        
        {/* Left: Number & badges */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenBankSoal}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-rose-600 text-white font-black text-sm sm:text-base hover:bg-rose-700 transition-colors shadow-xs"
            title="Buka Bank Nomor Soal"
          >
            <Layers className="w-4 h-4" />
            <span>Soal #{question.id}</span>
            <span className="text-xs font-normal text-rose-200">/ {totalQuestions}</span>
          </button>

          {/* Question Type Badge */}
          <span className={`px-2.5 py-1 rounded-xl text-xs font-black uppercase tracking-wider border ${
            question.type === 'PG' 
              ? 'bg-blue-50 text-blue-700 border-blue-200' 
              : question.type === 'PGK' 
              ? 'bg-purple-50 text-purple-700 border-purple-200' 
              : 'bg-amber-50 text-amber-700 border-amber-200'
          }`}>
            {question.type === 'PG' ? 'Pilihan Ganda' : question.type === 'PGK' ? 'Pilihan Ganda Kompleks' : 'Benar – Salah'}
          </span>

          {/* Cognitive & Difficulty Badge */}
          <span className="hidden md:inline-flex px-2 py-0.5 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-bold">
            {question.cognitiveLevel}
          </span>
          <span className="hidden sm:inline-flex px-2 py-0.5 rounded-lg bg-rose-50 text-rose-700 text-[11px] font-bold border border-rose-200">
            {question.difficulty}
          </span>
        </div>

        {/* Right: Prev / Next / Bookmark Controls */}
        <div className="flex items-center gap-2">
          
          <button
            onClick={toggleBookmark}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
              questionState.markedForReview
                ? 'bg-amber-500 text-white border-amber-600 shadow-xs'
                : 'bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-700 border-slate-200'
            }`}
            title="Tandai Soal untuk Ditinjau Kembali"
          >
            <Bookmark className={`w-3.5 h-3.5 ${questionState.markedForReview ? 'fill-current' : ''}`} />
            <span className="hidden sm:inline">Ragu-ragu</span>
          </button>

          <button
            onClick={onPrev}
            disabled={question.id === 1}
            className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-rose-50 text-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            title="Soal Sebelumnya"
            aria-label="Soal Sebelumnya"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {question.id < totalQuestions ? (
            <button
              onClick={onNext}
              className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-rose-50 text-slate-700 transition-colors"
              title="Soal Berikutnya"
              aria-label="Soal Berikutnya"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={onJumpToResult}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-colors shadow-xs"
            >
              <span>Hasil</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}

        </div>

      </div>

      {/* Topic Subheader */}
      <div className="px-2 flex flex-wrap items-center justify-between text-xs text-slate-500 font-semibold gap-2">
        <div className="flex items-center gap-2">
          <span className="text-rose-700 font-bold">{question.topic}</span>
          <span>•</span>
          <span className="text-slate-600">{question.subtopic}</span>
        </div>
      </div>

      {/* Mister Jo Audio Guidance Toolbar */}
      <div className="bg-gradient-to-r from-rose-50 via-pink-50 to-rose-100/60 rounded-2xl border border-rose-200/80 p-3 flex flex-wrap items-center justify-between gap-2 shadow-2xs">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-rose-600 flex items-center justify-center text-white text-[11px] font-black">
            MJ
          </div>
          <span className="text-xs font-bold text-rose-900">Bimbingan Suara Mister Jo:</span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => ttsManager.speak(question.narasi.stimulus, `Panduan Stimulus Soal #${question.id}`)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white hover:bg-rose-100/70 text-slate-700 hover:text-rose-900 border border-rose-200 text-xs font-semibold shadow-2xs transition-all"
            title="Dengarkan panduan membaca stimulus"
          >
            <Volume2 className="w-3.5 h-3.5 text-rose-600" />
            <span>Stimulus</span>
          </button>

          <button
            onClick={() => ttsManager.speak(question.narasi.pertanyaan, `Inti Masalah Soal #${question.id}`)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white hover:bg-rose-100/70 text-slate-700 hover:text-rose-900 border border-rose-200 text-xs font-semibold shadow-2xs transition-all"
            title="Dengarkan bimbingan inti pertanyaan"
          >
            <HelpCircle className="w-3.5 h-3.5 text-pink-600" />
            <span>Inti Soal</span>
          </button>

          <button
            onClick={() => ttsManager.speak(question.narasi.caraCepat, `Trik Cepat Soal #${question.id}`)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold shadow-2xs transition-all"
            title="Dengarkan trik cepat menyelesaikan soal"
          >
            <Zap className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            <span>Trik Cepat</span>
          </button>
        </div>
      </div>

      {/* Stimulus Card */}
      <section className="bg-white rounded-3xl border border-rose-200/90 p-5 sm:p-7 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-rose-100 pb-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-rose-600" />
            <h2 className="text-sm sm:text-base font-extrabold text-slate-900 uppercase tracking-wide">
              Stimulus: {question.stimulusTitle}
            </h2>
          </div>
          <span className="text-[11px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md">
            Wacana &amp; Data Sains
          </span>
        </div>

        {/* Narrative text */}
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal whitespace-pre-line">
          {question.stimulusContent}
        </p>

        {/* Render SVG Diagram if any */}
        {question.diagramId && (
          <div className="pt-2">
            <BiologyDiagram id={question.diagramId} />
          </div>
        )}

        {/* Render Data Table if any */}
        {question.stimulusData && (
          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left text-xs sm:text-sm border-collapse rounded-xl overflow-hidden shadow-2xs border border-rose-200">
              <thead>
                <tr className="bg-rose-100/80 text-rose-950 font-bold">
                  {question.stimulusData.headers.map((h, i) => (
                    <th key={i} className="p-3 border-b border-rose-200">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {question.stimulusData.rows.map((row, rIdx) => (
                  <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-rose-50/40'}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="p-3 border-b border-rose-100/70 text-slate-700 font-medium">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {question.stimulusData.caption && (
              <div className="text-[11px] text-slate-500 italic mt-1.5 text-right font-serif">
                {question.stimulusData.caption}
              </div>
            )}
          </div>
        )}
      </section>

      {/* Question & Options Card */}
      <section className="bg-white rounded-3xl border border-rose-200/90 p-5 sm:p-7 shadow-xs space-y-6">
        
        {/* Question Text */}
        <div className="space-y-2">
          <div className="text-xs font-bold text-rose-700 uppercase tracking-wider flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-rose-600" />
            <span>Pertanyaan Ujian:</span>
          </div>
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-relaxed">
            {question.questionText}
          </h3>
          {question.type === 'PGK' && (
            <div className="text-xs font-bold text-purple-700 bg-purple-50 p-2 rounded-xl border border-purple-200 flex items-center justify-between">
              <span>⚠️ Pilihlah SELURUH opsi yang benar. Terdapat lebih dari satu jawaban benar.</span>
              <span className="font-extrabold">
                {(questionState.userAnswer.type === 'PGK' && questionState.userAnswer.selected?.length) || 0} dipilih
              </span>
            </div>
          )}
        </div>

        {/* Options Rendering */}
        <div className="space-y-3">
          
          {/* PG - Single Choice */}
          {question.type === 'PG' && question.options && (
            <div className="space-y-2.5">
              {question.options.map((opt) => {
                const isSelected = 
                  questionState.userAnswer.type === 'PG' && 
                  questionState.userAnswer.selected === opt.key;
                
                let optBorder = 'border-slate-200 hover:border-rose-400 bg-white';
                if (isSelected) {
                  optBorder = 'border-rose-500 bg-rose-50/70 ring-2 ring-rose-500/20 shadow-xs';
                }
                if (questionState.checked) {
                  if (opt.key === question.correctAnswer) {
                    optBorder = 'border-emerald-500 bg-emerald-50/80 ring-2 ring-emerald-500/20 text-emerald-950';
                  } else if (isSelected && !questionState.isCorrect) {
                    optBorder = 'border-rose-500 bg-rose-50/80 ring-2 ring-rose-500/20 text-rose-950';
                  }
                }

                return (
                  <button
                    key={opt.key}
                    type="button"
                    disabled={questionState.checked}
                    onClick={() => handleSelectPG(opt.key)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 group cursor-pointer ${optBorder}`}
                  >
                    <span className={`w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center font-black text-sm transition-colors ${
                      isSelected
                        ? 'bg-rose-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 group-hover:bg-rose-100 group-hover:text-rose-700'
                    }`}>
                      {opt.key}
                    </span>
                    <span className="text-sm sm:text-base text-slate-800 leading-snug pt-0.5 flex-1">
                      {opt.text}
                    </span>
                    {questionState.checked && opt.key === question.correctAnswer && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 self-center" />
                    )}
                    {questionState.checked && isSelected && !questionState.isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0 self-center" />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* PGK - Multi Choice */}
          {question.type === 'PGK' && question.options && (
            <div className="space-y-2.5">
              {question.options.map((opt) => {
                const isSelected = 
                  questionState.userAnswer.type === 'PGK' && 
                  questionState.userAnswer.selected?.includes(opt.key);
                const isKeyCorrect = question.correctAnswers?.includes(opt.key);

                let optBorder = 'border-slate-200 hover:border-purple-400 bg-white';
                if (isSelected) {
                  optBorder = 'border-purple-600 bg-purple-50/60 ring-2 ring-purple-600/20 shadow-xs';
                }
                if (questionState.checked) {
                  if (isKeyCorrect) {
                    optBorder = 'border-emerald-500 bg-emerald-50/80 ring-2 ring-emerald-500/20';
                  } else if (isSelected && !isKeyCorrect) {
                    optBorder = 'border-rose-500 bg-rose-50/80 ring-2 ring-rose-500/20';
                  }
                }

                return (
                  <button
                    key={opt.key}
                    type="button"
                    disabled={questionState.checked}
                    onClick={() => handleTogglePGK(opt.key)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 group cursor-pointer ${optBorder}`}
                  >
                    <div className={`w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center font-black text-sm border transition-colors ${
                      isSelected
                        ? 'bg-purple-600 border-purple-700 text-white shadow-xs'
                        : 'bg-slate-100 border-slate-200 text-slate-700 group-hover:bg-purple-100 group-hover:text-purple-700'
                    }`}>
                      {opt.key}
                    </div>
                    <span className="text-sm sm:text-base text-slate-800 leading-snug pt-0.5 flex-1">
                      {opt.text}
                    </span>
                    {questionState.checked && isKeyCorrect && (
                      <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold self-center">
                        Benar
                      </span>
                    )}
                    {questionState.checked && isSelected && !isKeyCorrect && (
                      <span className="px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 text-xs font-bold self-center">
                        Salah
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* BS - Benar / Salah 3 Statements */}
          {question.type === 'BS' && question.statements && (
            <div className="space-y-4">
              {question.statements.map((st) => {
                const userVal = 
                  questionState.userAnswer.type === 'BS' 
                    ? questionState.userAnswer.answers?.[st.id] 
                    : undefined;

                return (
                  <div
                    key={st.id}
                    className="p-4 sm:p-5 rounded-2xl border border-rose-100 bg-rose-50/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <span className="w-6 h-6 rounded-full bg-rose-200 text-rose-900 flex-shrink-0 flex items-center justify-center text-xs font-black">
                        {st.id}
                      </span>
                      <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                        {st.text}
                      </p>
                    </div>

                    {/* Benar / Salah Toggle Buttons */}
                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <button
                        type="button"
                        disabled={questionState.checked}
                        onClick={() => handleSelectBS(st.id, true)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                          userVal === true
                            ? 'bg-emerald-600 border-emerald-700 text-white shadow-xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700'
                        }`}
                      >
                        BENAR
                      </button>

                      <button
                        type="button"
                        disabled={questionState.checked}
                        onClick={() => handleSelectBS(st.id, false)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                          userVal === false
                            ? 'bg-rose-600 border-rose-700 text-white shadow-xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-rose-50 hover:text-rose-700'
                        }`}
                      >
                        SALAH
                      </button>

                      {questionState.checked && (
                        <div className="ml-2">
                          {userVal === st.correct ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          ) : (
                            <div className="flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-md">
                              <XCircle className="w-3.5 h-3.5" />
                              <span>Kunci: {st.correct ? 'Benar' : 'Salah'}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>

        {/* Action Buttons Row */}
        <div className="border-t border-rose-100 pt-5 flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-2">
            {!questionState.checked ? (
              <button
                type="button"
                disabled={!isAnswerReady()}
                onClick={handleCheckAnswer}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-sm shadow-md shadow-rose-600/20 disabled:opacity-40 disabled:pointer-events-none transition-all active:scale-95"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>PERIKSA JAWABAN</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleResetAnswer}
                className="flex items-center gap-2 px-4 py-2.5 rounded-2xl border border-rose-200 bg-white hover:bg-rose-50 text-slate-700 font-bold text-xs transition-colors"
                title="Buka kunci untuk mencoba menjawab ulang"
              >
                <RotateCcw className="w-3.5 h-3.5 text-rose-500" />
                <span>Coba Jawab Ulang</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => setShowPembahasan(!showPembahasan)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl border text-xs font-bold transition-colors ${
                showPembahasan
                  ? 'bg-rose-50 border-rose-300 text-rose-800'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-rose-50'
              }`}
            >
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>{showPembahasan ? 'Tutup Pembahasan' : 'Buka Pembahasan'}</span>
            </button>

            <button
              type="button"
              onClick={() => setShowCaraCepat(!showCaraCepat)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl border text-xs font-bold transition-colors ${
                showCaraCepat
                  ? 'bg-amber-50 border-amber-300 text-amber-900'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-amber-50'
              }`}
            >
              <Zap className="w-4 h-4 text-amber-500 fill-amber-400" />
              <span>{showCaraCepat ? 'Tutup Cara Cepat' : 'Cara Cepat'}</span>
            </button>
          </div>

          {/* Navigation Next Question */}
          <div className="flex items-center gap-2">
            {question.id < totalQuestions ? (
              <button
                type="button"
                onClick={onNext}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-xs transition-colors active:scale-95"
              >
                <span>Soal Berikutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={onJumpToResult}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-black text-sm shadow-md transition-all active:scale-95"
              >
                <span>Lihat Hasil Akhir</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

      </section>

      {/* Evaluation Result Feedback Banner */}
      {questionState.checked && (
        <section className={`rounded-3xl border p-5 sm:p-6 shadow-sm transition-all animate-in fade-in slide-in-from-top-2 ${
          questionState.isCorrect 
            ? 'bg-emerald-50/90 border-emerald-200' 
            : questionState.score > 0
            ? 'bg-amber-50/90 border-amber-200'
            : 'bg-rose-50/90 border-rose-200'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black ${
                questionState.isCorrect
                  ? 'bg-emerald-600 text-white'
                  : questionState.score > 0
                  ? 'bg-amber-600 text-white'
                  : 'bg-rose-600 text-white'
              }`}>
                {questionState.isCorrect ? (
                  <CheckCircle2 className="w-6 h-6" />
                ) : (
                  <XCircle className="w-6 h-6" />
                )}
              </div>
              <div>
                <h4 className="text-base font-black text-slate-900 flex items-center gap-2">
                  <span>
                    {questionState.isCorrect 
                      ? 'JAWABAN BENAR!' 
                      : questionState.score > 0 
                      ? 'JAWABAN SEBAGIAN BENAR' 
                      : 'JAWABAN KURANG TEPAT'}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white border">
                    Skor: +{questionState.score} dari {questionState.maxScore} Poin
                  </span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 mt-0.5 font-medium">
                  {questionState.isCorrect 
                    ? question.narasi.refleksiBenar 
                    : question.narasi.refleksiSalah}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                const text = questionState.isCorrect 
                  ? question.narasi.refleksiBenar 
                  : question.narasi.refleksiSalah;
                ttsManager.speak(text, `Refleksi Jawaban Soal #${question.id}`);
              }}
              className="self-start sm:self-center flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold border border-slate-200 shadow-2xs transition-colors"
            >
              <Volume2 className="w-4 h-4 text-rose-600" />
              <span>Dengarkan Refleksi</span>
            </button>
          </div>
        </section>
      )}

      {/* Cara Cepat Highlight Card */}
      {showCaraCepat && (
        <section className="bg-gradient-to-br from-amber-50 via-white to-pink-50 rounded-3xl border-2 border-amber-300/80 p-5 sm:p-6 shadow-sm space-y-3 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-amber-200 pb-2.5">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-xl bg-amber-500 text-white">
                <Zap className="w-4 h-4 fill-current" />
              </div>
              <h3 className="text-sm sm:text-base font-black text-amber-950 uppercase tracking-wide">
                Cara Cepat Menjawab – Strategi Efisien Mister Jo
              </h3>
            </div>
            <button
              onClick={() => ttsManager.speak(question.caraCepat, `Cara Cepat Soal #${question.id}`)}
              className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white hover:bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold shadow-2xs transition-colors"
            >
              <Volume2 className="w-3.5 h-3.5 text-amber-700" />
              <span>Dengarkan Trik</span>
            </button>
          </div>
          <p className="text-xs sm:text-sm text-amber-950 font-semibold leading-relaxed">
            {question.caraCepat}
          </p>
        </section>
      )}

      {/* Pembahasan Lengkap Section (6 Structured Parts A-F) */}
      {showPembahasan && (
        <section className="bg-white rounded-3xl border border-rose-200 p-5 sm:p-8 shadow-sm space-y-6 animate-in fade-in duration-200">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-rose-100 pb-4 gap-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-extrabold mb-1">
                <Sparkles className="w-3.5 h-3.5 text-rose-600" />
                <span>Penalaran Ilmiah Komprehensif</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                Pembahasan Lengkap 6 Tahap Ilmiah Soal #{question.id}
              </h3>
            </div>

            <button
              onClick={() => {
                const fullExplanationText = `${question.pembahasan.a_memahamiPersoalan}. ${question.pembahasan.b_identifikasiInformasi}. ${question.pembahasan.c_konsepBiologi}. ${question.pembahasan.d_analisisPenalaran}. ${question.pembahasan.e_kesimpulan}.`;
                ttsManager.speak(fullExplanationText, `Pembahasan Ilmiah Soal #${question.id}`);
              }}
              className="self-start sm:self-center flex items-center gap-2 px-4 py-2 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-xs transition-colors"
            >
              <Volume2 className="w-4 h-4" />
              <span>Dengarkan Pembahasan</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Bagian A */}
            <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 space-y-1.5">
              <span className="text-xs font-extrabold text-rose-800 uppercase tracking-wide">
                A. Memahami Persoalan
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {question.pembahasan.a_memahamiPersoalan}
              </p>
            </div>

            {/* Bagian B */}
            <div className="p-4 rounded-2xl bg-pink-50/50 border border-pink-100 space-y-1.5">
              <span className="text-xs font-extrabold text-pink-800 uppercase tracking-wide">
                B. Mengidentifikasi Informasi Penting
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {question.pembahasan.b_identifikasiInformasi}
              </p>
            </div>

            {/* Bagian C */}
            <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-1.5">
              <span className="text-xs font-extrabold text-purple-800 uppercase tracking-wide">
                C. Menghubungkan dengan Konsep Biologi
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {question.pembahasan.c_konsepBiologi}
              </p>
            </div>

            {/* Bagian D */}
            <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-1.5">
              <span className="text-xs font-extrabold text-blue-800 uppercase tracking-wide">
                D. Analisis dan Penalaran Bertahap
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {question.pembahasan.d_analisisPenalaran}
              </p>
            </div>

          </div>

          {/* Bagian E - Kesimpulan Utama */}
          <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1.5">
            <span className="text-xs font-black text-emerald-900 uppercase tracking-wide flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>E. Kesimpulan Ilmiah</span>
            </span>
            <p className="text-xs sm:text-sm text-emerald-950 font-bold leading-relaxed">
              {question.pembahasan.e_kesimpulan}
            </p>
          </div>

          {/* Bagian F - Analisis Opsi Lainnya */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              F. Analisis Opsi Lainnya
            </span>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {question.pembahasan.f_analisisOpsi}
            </p>
          </div>

        </section>
      )}

    </div>
  );
};
