import React, { useState, useEffect } from 'react';
import { Question, QuestionState } from '../types/biology';
import { evaluateAllProgress } from '../utils/scoring';
import { ttsManager } from '../utils/tts';
import { 
  GraduationCap, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Bookmark, 
  Volume2, 
  Save, 
  Layers, 
  ArrowRight,
  AlertTriangle,
  Sparkles
} from 'lucide-react';

export const NASKAH_NARATOR_PROGRES = `Progres belajarmu tersimpan secara otomatis di memori lokal peramban. Kamu dapat meninjau nomor soal yang telah tuntas, soal yang masih perlu diperbaiki, atau soal yang kamu tandai ragu-ragu. Gunakan tombol lanjutkan belajar untuk meneruskan latihanmu, atau atur ulang jika ingin mengulang simulasi dari awal.`;

interface ProgresViewProps {
  questions: Question[];
  states: Record<number, QuestionState>;
  currentQuestionId: number;
  onSelectQuestion: (id: number) => void;
  onContinueExam: () => void;
  onConfirmReset: () => void;
}

export const ProgresView: React.FC<ProgresViewProps> = ({
  questions,
  states,
  currentQuestionId,
  onSelectQuestion,
  onContinueExam,
  onConfirmReset
}) => {
  const [showResetModal, setShowResetModal] = useState(false);
  const summary = evaluateAllProgress(questions, states);

  useEffect(() => {
    if (ttsManager.getAutoPlay()) {
      ttsManager.speak(NASKAH_NARATOR_PROGRES, 'Progres Belajar Siswa');
    }
  }, []);

  const playAudio = () => {
    ttsManager.speak(NASKAH_NARATOR_PROGRES, 'Progres Belajar Siswa');
  };

  const markedCount = Object.values(states).filter((s) => s.markedForReview).length;

  return (
    <div className="space-y-6 py-4 max-w-5xl mx-auto">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 rounded-3xl p-6 sm:p-8 text-white shadow-lg shadow-rose-900/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-extrabold uppercase tracking-wider backdrop-blur-xs">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Penyimpanan Lokal Otomatis</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">Progres &amp; Rekap Belajar</h1>
            <p className="text-xs sm:text-sm text-rose-100 max-w-2xl leading-relaxed">
              Pantau kelengkapan pengerjaan 30 soal TKA Biologi 2026 yang tersimpan di perangkatmu
            </p>
          </div>

          <button
            onClick={playAudio}
            className="self-start sm:self-center flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white text-rose-700 hover:bg-rose-50 font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
          >
            <Volume2 className="w-4 h-4 text-rose-600" />
            <span>Dengarkan Narator</span>
          </button>
        </div>

        {/* Narrative text */}
        <div className="mt-4 p-3.5 rounded-2xl bg-black/10 border border-white/20 text-xs sm:text-sm text-rose-50 font-serif italic leading-relaxed">
          "{NASKAH_NARATOR_PROGRES}"
        </div>
      </div>

      {/* 4 Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        <div className="p-4 rounded-2xl bg-white border border-rose-100 shadow-2xs">
          <div className="text-xs font-semibold text-slate-500">Soal Diselesaikan</div>
          <div className="text-2xl font-black text-rose-700 mt-1">
            {summary.answeredCount} <span className="text-xs font-normal text-slate-400">/ 30</span>
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">
            {Math.round((summary.answeredCount / 30) * 100)}% Kelengkapan
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-rose-100 shadow-2xs">
          <div className="text-xs font-semibold text-slate-500">Nilai Sementara</div>
          <div className="text-2xl font-black text-slate-900 mt-1">
            {summary.totalScore} <span className="text-xs font-normal text-slate-400">/ 100</span>
          </div>
          <div className="text-[10px] text-emerald-700 font-semibold mt-0.5">
            Kategori: {summary.category.label}
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-rose-100 shadow-2xs">
          <div className="text-xs font-semibold text-slate-500">Jawaban Benar</div>
          <div className="text-2xl font-black text-emerald-600 mt-1">
            {summary.correctCount} <span className="text-xs font-normal text-slate-400">soal</span>
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">
            Akurasi: {summary.answeredCount > 0 ? Math.round((summary.correctCount / summary.answeredCount) * 100) : 0}%
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-rose-100 shadow-2xs">
          <div className="text-xs font-semibold text-slate-500">Ditandai Ragu</div>
          <div className="text-2xl font-black text-amber-600 mt-1">
            {markedCount} <span className="text-xs font-normal text-slate-400">soal</span>
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">
            Perlu ditinjau ulang
          </div>
        </div>

      </div>

      {/* Grid of 30 Numbers Overview */}
      <section className="bg-white rounded-3xl border border-rose-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-rose-100 pb-3">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-rose-600" />
            <h2 className="text-base sm:text-lg font-black text-slate-900">
              Peta Status 30 Nomor Soal
            </h2>
          </div>
          <span className="text-xs text-slate-500">Klik kotak untuk membuka soal</span>
        </div>

        <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 gap-2.5">
          {questions.map((q) => {
            const st = states[q.id];
            let bg = 'bg-slate-50 text-slate-700 border-slate-200 hover:border-rose-400';
            if (st?.checked) {
              if (st.isCorrect) {
                bg = 'bg-emerald-100/80 text-emerald-900 border-emerald-300 font-bold';
              } else {
                bg = 'bg-rose-100/80 text-rose-900 border-rose-300 font-bold';
              }
            } else if (st?.markedForReview) {
              bg = 'bg-amber-100/80 text-amber-900 border-amber-300 font-bold';
            }

            return (
              <button
                key={q.id}
                onClick={() => onSelectQuestion(q.id)}
                className={`relative flex flex-col items-center justify-center h-14 rounded-xl border text-xs transition-all active:scale-95 ${bg}`}
              >
                <span className="text-sm font-extrabold">{q.id}</span>
                <span className="text-[9px] font-semibold opacity-75">{q.type}</span>
                {st?.markedForReview && (
                  <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-500"></span>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Buttons: Lanjutkan Belajar & Reset Seluruh Progres */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-white border border-rose-200 shadow-xs">
        <div>
          <h3 className="text-base font-bold text-slate-900">Kelola Progres Belajar</h3>
          <p className="text-xs text-slate-500">
            Terakhir dibuka pada Soal #{currentQuestionId}. Data tersimpan otomatis di browser ini.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={() => setShowResetModal(true)}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-rose-300 bg-white hover:bg-rose-50 text-rose-700 font-bold text-xs sm:text-sm shadow-2xs transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>RESET SELURUH PROGRES</span>
          </button>

          <button
            onClick={onContinueExam}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-rose-600/20 transition-all active:scale-95"
          >
            <span>LANJUTKAN BELAJAR</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Confirmation Modal for Reset */}
      {showResetModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div 
            className="bg-white rounded-3xl border border-rose-200 p-6 sm:p-7 max-w-md w-full shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-rose-600" />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-black text-slate-900">
                Konfirmasi Reset Progres
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Apakah kamu yakin ingin menghapus seluruh progres belajar? Semua jawaban, nilai, dan riwayat latihan akan dihapus dan kembali ke kondisi awal.
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setShowResetModal(false)}
                className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={() => {
                  onConfirmReset();
                  setShowResetModal(false);
                }}
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold bg-rose-600 hover:bg-rose-700 text-white shadow-xs transition-colors"
              >
                Ya, Hapus Semua Progres
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
