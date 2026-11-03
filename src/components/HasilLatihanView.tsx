import React from 'react';
import { Question, QuestionState } from '../types/biology';
import { evaluateAllProgress } from '../utils/scoring';
import { ttsManager } from '../utils/tts';
import { 
  Award, 
  BarChart3, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  Volume2, 
  BookOpen, 
  ArrowRight,
  Sparkles,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';

interface HasilLatihanViewProps {
  questions: Question[];
  states: Record<number, QuestionState>;
  onSelectQuestion: (id: number) => void;
  onResetProgress: () => void;
  onContinueExam: () => void;
}

export const HasilLatihanView: React.FC<HasilLatihanViewProps> = ({
  questions,
  states,
  onSelectQuestion,
  onResetProgress,
  onContinueExam
}) => {
  const summary = evaluateAllProgress(questions, states);

  const speakSummary = () => {
    const text = `Halo, ini adalah evaluasi hasil latihanmu. Nilai total yang kamu peroleh adalah ${summary.totalScore} dari 100 poin, dengan persentase penguasaan ${summary.percentage} persen. Kamu masuk dalam kategori ${summary.category.label}. ${summary.category.description}.`;
    ttsManager.speak(text, 'Evaluasi Hasil Latihan Mister Jo');
  };

  return (
    <div className="space-y-8 py-6 max-w-5xl mx-auto">
      
      {/* Top Banner Scorecard */}
      <section className="bg-gradient-to-br from-white via-rose-50/60 to-pink-100/80 rounded-3xl border border-rose-200/90 p-6 sm:p-10 shadow-lg shadow-rose-900/5 relative overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Score & Mastery Badge */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold border border-rose-200">
              <Award className="w-4 h-4 text-rose-600" />
              <span>Evaluasi Otomatis TKA Biologi 2026</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              Laporan Capaian Belajar Kamu
            </h1>

            {/* Category Banner */}
            <div className={`p-4 rounded-2xl border ${summary.category.color} flex items-start gap-3.5`}>
              <div className="p-2 rounded-xl bg-white/80 shadow-2xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-black uppercase tracking-wider">
                  Kategori Penguasaan:
                </div>
                <div className="text-lg font-black">{summary.category.label}</div>
                <p className="text-xs leading-relaxed font-medium">
                  {summary.category.description}
                </p>
              </div>
            </div>

            {/* Narration audio button */}
            <button
              onClick={speakSummary}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-xs transition-colors"
            >
              <Volume2 className="w-4 h-4" />
              <span>Dengarkan Evaluasi Mister Jo</span>
            </button>
          </div>

          {/* Right: Big Radial / Circular Score Display */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-white rounded-3xl border border-rose-200 shadow-md">
            <div className="relative w-44 h-44 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#f1f5f9"
                  strokeWidth="10"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#e11d48"
                  strokeWidth="10"
                  strokeDasharray={2 * Math.PI * 50}
                  strokeDashoffset={2 * Math.PI * 50 * (1 - summary.percentage / 100)}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-black text-slate-900 tracking-tight">
                  {summary.totalScore}
                </span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  dari 100 Poin
                </span>
                <span className="text-xs font-extrabold text-rose-600 mt-1">
                  {summary.percentage}% Tuntas
                </span>
              </div>
            </div>

            {/* 3 Quick Stats Under Score */}
            <div className="grid grid-cols-3 gap-2 w-full mt-6 text-center text-xs">
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200">
                <div className="font-black text-base">{summary.correctCount}</div>
                <div className="text-[10px] text-emerald-700">Benar</div>
              </div>
              <div className="p-2 rounded-xl bg-rose-50 text-rose-900 border border-rose-200">
                <div className="font-black text-base">{summary.incorrectCount}</div>
                <div className="text-[10px] text-rose-700">Salah</div>
              </div>
              <div className="p-2 rounded-xl bg-slate-50 text-slate-900 border border-slate-200">
                <div className="font-black text-base">{summary.unansweredCount}</div>
                <div className="text-[10px] text-slate-500">Belum</div>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Weak Topics & Personalized Recommendations */}
      {summary.weakTopics.length > 0 && (
        <section className="bg-amber-50/70 border border-amber-200 rounded-3xl p-5 sm:p-6 shadow-xs space-y-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-amber-500 text-white">
              <Lightbulb className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-amber-950">
                Rekomendasi Penguatan Belajar dari Mister Jo
              </h3>
              <p className="text-xs text-amber-800">
                Berdasarkan hasil analisis latihanmu, fokuskan pendalaman materi pada topik berikut:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {summary.weakTopics.map((topic, i) => (
              <div key={i} className="p-3 rounded-2xl bg-white border border-amber-200/80 shadow-2xs space-y-1">
                <div className="text-xs font-bold text-slate-900 flex items-center justify-between">
                  <span>{topic}</span>
                  <span className="text-[11px] font-extrabold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                    Skor &lt; 70%
                  </span>
                </div>
                <p className="text-[11px] text-slate-600">
                  Pelajari kembali stimulus dan trik cara cepat pada bank soal materi ini untuk memperkuat konsep inti.
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Topic Mastery Breakdown */}
      <section className="bg-white rounded-3xl border border-rose-200 p-6 shadow-xs space-y-5">
        <div className="flex items-center justify-between border-b border-rose-100 pb-3">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-rose-600" />
            <h2 className="text-base sm:text-lg font-black text-slate-900">
              Penguasaan per Topik Materi (13 Pokok Bahasan)
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-semibold">TKA Biologi 2026</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(summary.topicBreakdown).map(([topic, data], idx) => (
            <div key={idx} className="p-3.5 rounded-2xl bg-rose-50/40 border border-rose-100/80 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-900 line-clamp-1">{topic}</span>
                <span className="text-rose-700 font-extrabold">
                  {data.score} / {data.maxScore} Poin ({data.percentage}%)
                </span>
              </div>
              <div className="w-full h-2 bg-slate-200/60 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${
                    data.percentage >= 80 
                      ? 'bg-emerald-500' 
                      : data.percentage >= 60 
                      ? 'bg-rose-500' 
                      : 'bg-amber-500'
                  }`}
                  style={{ width: `${Math.max(4, data.percentage)}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                <span>Dikerjakan: {data.answered} dari {data.total} soal</span>
                <span>Benar: {data.correct} soal</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Review All 30 Questions Table */}
      <section className="bg-white rounded-3xl border border-rose-200 p-6 shadow-xs space-y-4">
        <h2 className="text-base sm:text-lg font-black text-slate-900">
          Daftar Lengkap 30 Soal &amp; Akses Pembahasan Cepat
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-rose-100 text-slate-500 font-bold uppercase text-[10px] tracking-wider">
                <th className="py-2.5 px-3">No</th>
                <th className="py-2.5 px-3">Tipe</th>
                <th className="py-2.5 px-3">Topik Bahasan</th>
                <th className="py-2.5 px-3">Status</th>
                <th className="py-2.5 px-3">Skor</th>
                <th className="py-2.5 px-3 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((q) => {
                const st = states[q.id];
                return (
                  <tr key={q.id} className="border-b border-rose-50 hover:bg-rose-50/50 transition-colors">
                    <td className="py-2.5 px-3 font-extrabold text-slate-900">#{q.id}</td>
                    <td className="py-2.5 px-3">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-700">
                        {q.type}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 font-medium text-slate-700 line-clamp-1">
                      {q.topic}
                    </td>
                    <td className="py-2.5 px-3">
                      {st?.checked ? (
                        st.isCorrect ? (
                          <span className="inline-flex items-center gap-1 text-emerald-700 font-bold text-xs">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Benar
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-rose-700 font-bold text-xs">
                            <XCircle className="w-3.5 h-3.5" /> Salah
                          </span>
                        )
                      ) : (
                        <span className="text-slate-400 font-medium text-xs">Belum</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 font-bold text-slate-900">
                      {st?.checked ? st.score : 0}
                    </td>
                    <td className="py-2.5 px-3 text-right">
                      <button
                        onClick={() => onSelectQuestion(q.id)}
                        className="px-3 py-1 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-800 text-xs font-bold border border-rose-200 transition-colors"
                      >
                        Buka Soal
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Bottom Actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <button
          onClick={onResetProgress}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-rose-300 hover:bg-rose-50 text-rose-700 text-xs sm:text-sm font-bold shadow-2xs transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Ulangi Latihan / Reset</span>
        </button>

        <button
          onClick={onContinueExam}
          className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-rose-600/20 transition-all active:scale-95"
        >
          <BookOpen className="w-4 h-4" />
          <span>Lanjutkan Belajar</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
