import React, { useState } from 'react';
import { Question, QuestionState } from '../types/biology';
import { X, Bookmark, CheckCircle2, XCircle, HelpCircle, Filter } from 'lucide-react';

interface BankSoalModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  states: Record<number, QuestionState>;
  currentQuestionId: number;
  onSelectQuestion: (id: number) => void;
}

type FilterType = 'all' | 'unanswered' | 'correct' | 'incorrect' | 'marked';

export const BankSoalModal: React.FC<BankSoalModalProps> = ({
  isOpen,
  onClose,
  questions,
  states,
  currentQuestionId,
  onSelectQuestion
}) => {
  const [filter, setFilter] = useState<FilterType>('all');

  if (!isOpen) return null;

  const filteredQuestions = questions.filter((q) => {
    const st = states[q.id];
    if (filter === 'marked') return st?.markedForReview;
    if (filter === 'correct') return st?.checked && st?.isCorrect;
    if (filter === 'incorrect') return st?.checked && !st?.isCorrect;
    if (filter === 'unanswered') return !st?.checked;
    return true;
  });

  const getStatusBadge = (qId: number) => {
    const st = states[qId];
    if (st?.markedForReview) {
      return (
        <span className="absolute -top-1.5 -right-1.5 p-1 bg-amber-500 text-white rounded-full shadow-xs">
          <Bookmark className="w-2.5 h-2.5 fill-current" />
        </span>
      );
    }
    if (st?.checked) {
      if (st.isCorrect) {
        return (
          <span className="absolute -top-1.5 -right-1.5 p-0.5 bg-emerald-600 text-white rounded-full shadow-xs">
            <CheckCircle2 className="w-3 h-3" />
          </span>
        );
      } else {
        return (
          <span className="absolute -top-1.5 -right-1.5 p-0.5 bg-rose-600 text-white rounded-full shadow-xs">
            <XCircle className="w-3 h-3" />
          </span>
        );
      }
    }
    return null;
  };

  const getButtonBg = (qId: number) => {
    const isCurrent = qId === currentQuestionId;
    const st = states[qId];

    let base = 'bg-white text-slate-800 border-rose-200 hover:border-rose-400';
    if (st?.checked) {
      if (st.isCorrect) {
        base = 'bg-emerald-50 text-emerald-900 border-emerald-300 hover:bg-emerald-100';
      } else {
        base = 'bg-rose-50 text-rose-900 border-rose-300 hover:bg-rose-100';
      }
    } else if (st?.markedForReview) {
      base = 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100';
    }

    if (isCurrent) {
      base += ' ring-3 ring-rose-500 font-black shadow-md';
    }
    return base;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white rounded-3xl border border-rose-200 shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 border-b border-rose-100 flex items-center justify-between bg-rose-50/50">
          <div>
            <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <span>Bank 30 Nomor Soal</span>
              <span className="text-xs font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">
                TKA Biologi 2026
              </span>
            </h2>
            <p className="text-xs text-slate-500">Pilih nomor soal untuk langsung berpindah halaman latihan</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="p-4 border-b border-rose-100 flex items-center gap-1.5 overflow-x-auto text-xs font-semibold bg-white">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
              filter === 'all'
                ? 'bg-rose-600 text-white font-bold'
                : 'bg-slate-100 text-slate-600 hover:bg-rose-50'
            }`}
          >
            Semua (30)
          </button>
          <button
            onClick={() => setFilter('unanswered')}
            className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
              filter === 'unanswered'
                ? 'bg-rose-600 text-white font-bold'
                : 'bg-slate-100 text-slate-600 hover:bg-rose-50'
            }`}
          >
            Belum Dijawab
          </button>
          <button
            onClick={() => setFilter('correct')}
            className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
              filter === 'correct'
                ? 'bg-emerald-600 text-white font-bold'
                : 'bg-slate-100 text-slate-600 hover:bg-emerald-50'
            }`}
          >
            Dijawab Benar
          </button>
          <button
            onClick={() => setFilter('incorrect')}
            className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
              filter === 'incorrect'
                ? 'bg-rose-600 text-white font-bold'
                : 'bg-slate-100 text-slate-600 hover:bg-rose-50'
            }`}
          >
            Dijawab Salah
          </button>
          <button
            onClick={() => setFilter('marked')}
            className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
              filter === 'marked'
                ? 'bg-amber-600 text-white font-bold'
                : 'bg-slate-100 text-slate-600 hover:bg-amber-50'
            }`}
          >
            Ditandai Ragu
          </button>
        </div>

        {/* Legend */}
        <div className="px-5 py-2.5 bg-rose-50/30 text-[11px] font-medium text-slate-600 flex flex-wrap items-center gap-4 border-b border-rose-100">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-white border border-rose-300 inline-block"></span>
            <span>Belum</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-emerald-100 border border-emerald-400 inline-block"></span>
            <span>Benar</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-rose-100 border border-rose-400 inline-block"></span>
            <span>Salah</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-amber-100 border border-amber-400 inline-block"></span>
            <span>Ditandai</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-rose-500 inline-block"></span>
            <span>Soal Aktif</span>
          </span>
        </div>

        {/* Numbers Grid */}
        <div className="p-6 overflow-y-auto flex-1">
          <div className="grid grid-cols-5 sm:grid-cols-6 gap-3">
            {filteredQuestions.map((q) => {
              const isCurrent = q.id === currentQuestionId;
              return (
                <button
                  key={q.id}
                  onClick={() => {
                    onSelectQuestion(q.id);
                    onClose();
                  }}
                  className={`relative flex flex-col items-center justify-center h-16 rounded-2xl border transition-all active:scale-95 ${getButtonBg(
                    q.id
                  )}`}
                >
                  {getStatusBadge(q.id)}
                  <span className="text-base font-extrabold">{q.id}</span>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase mt-0.5">
                    {q.type}
                  </span>
                </button>
              );
            })}
          </div>

          {filteredQuestions.length === 0 && (
            <div className="py-12 text-center text-slate-400 text-xs font-medium">
              Tidak ada soal dengan filter kategori ini.
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
