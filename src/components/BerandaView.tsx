import React from 'react';
import { 
  Play, 
  HelpCircle, 
  Award, 
  GraduationCap, 
  Sparkles, 
  Volume2, 
  BrainCircuit, 
  Dna, 
  Microscope, 
  Leaf, 
  Activity, 
  ArrowRight,
  RotateCcw
} from 'lucide-react';
import { ttsManager } from '../utils/tts';

export const NASKAH_NARATOR_PEMBUKA = `Halo, calon ilmuwan hebat! Selamat datang di Biologi Genius, tempat kita menaklukkan soal-soal TKA Biologi 2026 dengan cara yang lebih cerdas, menyenangkan, dan penuh penalaran. Saya Mister Jo akan menemani perjalanan belajarmu. Di sini, kamu tidak hanya menghafal nama organ, mengingat proses metabolisme, atau membaca teori biologi. Kamu akan belajar menganalisis fenomena kehidupan, membaca data penelitian, memahami grafik, memecahkan masalah lingkungan, dan mengambil kesimpulan berdasarkan bukti ilmiah. Jangan takut jika awalnya terasa sulit. Kita akan belajar langkah demi langkah, mulai dari memahami stimulus, menemukan konsep penting, sampai menemukan jawaban terbaik. Siapkan pikiranmu. Mari kita buktikan bahwa Biologi bukan sekadar hafalan, tetapi ilmu untuk memahami kehidupan!`;

interface BerandaViewProps {
  onStartExam: () => void;
  onOpenPetunjuk: () => void;
  onOpenManfaat: () => void;
  onOpenProgres: () => void;
  answeredCount: number;
  totalQuestions: number;
  totalScore: number;
  currentQuestionId: number;
}

export const BerandaView: React.FC<BerandaViewProps> = ({
  onStartExam,
  onOpenPetunjuk,
  onOpenManfaat,
  onOpenProgres,
  answeredCount,
  totalQuestions,
  totalScore,
  currentQuestionId
}) => {
  const playGreetingAudio = () => {
    ttsManager.speak(NASKAH_NARATOR_PEMBUKA, 'Sambutan Pembuka Mister Jo');
  };

  return (
    <div className="space-y-8 py-6">
      
      {/* Hero Card */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-rose-50/60 to-pink-100/70 border border-rose-200/80 p-6 sm:p-10 shadow-lg shadow-rose-950/5">
        {/* Decorative background biological elements */}
        <div className="absolute top-0 right-0 -mr-12 -mt-12 w-64 h-64 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-16 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-100/80 text-rose-800 text-xs font-bold border border-rose-200">
              <Sparkles className="w-3.5 h-3.5 text-rose-600" />
              <span>Aplikasi Pembelajaran Interaktif TKA 2026</span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                BIOLOGI GENIUS
              </h1>
              <div className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 mt-1">
                MASTER TKA BIOLOGI 2026
              </div>
            </div>

            {/* Mister Jo Tutor Badge */}
            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/80 border border-rose-200/60 max-w-md shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-rose-600 to-pink-500 flex items-center justify-center text-white font-extrabold text-base shadow-md">
                MJ
              </div>
              <div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  Identitas Pengajar &amp; Pembimbing:
                </div>
                <div className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <span>MISTER JO</span>
                  <span className="text-[10px] font-bold bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full">Tutor Senior Biologi SMA</span>
                </div>
              </div>
            </div>

            {/* Slogan */}
            <div className="text-base sm:text-lg font-bold text-rose-900 italic border-l-4 border-rose-500 pl-4 py-1">
              "Berpikir Ilmiah, Membaca Kehidupan, Menaklukkan TKA!"
            </div>

            {/* Speech Player Prompt */}
            <div className="p-4 rounded-2xl bg-white/90 border border-rose-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-rose-600" />
                  Sambutan Suara Mister Jo
                </span>
                <button
                  onClick={playGreetingAudio}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-xs hover:shadow-md transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Dengarkan Sambutan</span>
                </button>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-serif italic line-clamp-3">
                "{NASKAH_NARATOR_PEMBUKA}"
              </p>
            </div>

            {/* 4 Main Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              <button
                onClick={onStartExam}
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-md shadow-rose-600/25 hover:shadow-lg transition-all active:scale-[0.98]"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>MULAI BELAJAR</span>
              </button>

              <button
                onClick={onOpenPetunjuk}
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-white hover:bg-rose-50 text-slate-800 hover:text-rose-700 font-bold text-sm border border-rose-200 shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
              >
                <HelpCircle className="w-4 h-4 text-rose-500" />
                <span>PETUNJUK</span>
              </button>

              <button
                onClick={onOpenManfaat}
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-white hover:bg-rose-50 text-slate-800 hover:text-rose-700 font-bold text-sm border border-rose-200 shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
              >
                <Award className="w-4 h-4 text-rose-500" />
                <span>MANFAAT</span>
              </button>

              <button
                onClick={onOpenProgres}
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-white hover:bg-rose-50 text-slate-800 hover:text-rose-700 font-bold text-sm border border-rose-200 shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
              >
                <GraduationCap className="w-4 h-4 text-rose-500" />
                <span>PROGRES</span>
              </button>
            </div>

          </div>

          {/* Hero Right Visuals & Quick Dashboard */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Live Progress Card */}
            <div className="bg-white rounded-3xl border border-rose-200/80 p-5 shadow-md shadow-rose-950/5 space-y-4">
              <div className="flex items-center justify-between border-b border-rose-100 pb-3">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Status Belajar Kamu
                </span>
                <span className="text-xs font-extrabold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md">
                  Tersimpan Otomatis
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-rose-50/60 p-3 rounded-2xl border border-rose-100">
                  <div className="text-2xl font-black text-rose-700">{answeredCount} / {totalQuestions}</div>
                  <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Soal Dikerjakan</div>
                </div>
                <div className="bg-pink-50/60 p-3 rounded-2xl border border-pink-100">
                  <div className="text-2xl font-black text-pink-700">{totalScore}</div>
                  <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Nilai Sementara</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1.5">
                  <span>Persentase Ketuntasan</span>
                  <span>{Math.round((answeredCount / totalQuestions) * 100)}%</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-rose-500 to-pink-500 rounded-full transition-all duration-500"
                    style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
                  />
                </div>
              </div>

              {answeredCount > 0 ? (
                <button
                  onClick={onStartExam}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  <span>Lanjutkan Soal #{currentQuestionId}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={onStartExam}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  <span>Mulai Kerjakan Soal #1</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Scientific Lab Visual Pills */}
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-white border border-rose-100 shadow-2xs">
                <Dna className="w-4 h-4 text-rose-500" />
                <span>Genetika &amp; Sel</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-white border border-rose-100 shadow-2xs">
                <Microscope className="w-4 h-4 text-pink-500" />
                <span>Laboratorium HOTS</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-white border border-rose-100 shadow-2xs">
                <Activity className="w-4 h-4 text-purple-500" />
                <span>Fisiologi Organ</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-white border border-rose-100 shadow-2xs">
                <Leaf className="w-4 h-4 text-emerald-500" />
                <span>Ekologi Nusantara</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Keunggulan Sistem Pembelajaran Biologi Genius</h2>
            <p className="text-xs sm:text-sm text-slate-500">Dirancang khusus sesuai standar format TKA Biologi 2026 tingkat SMA/MA</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="p-5 rounded-2xl bg-white border border-rose-100 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-3">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">30 Soal HOTS Terdistribusi</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Kombinasi merata: 12 Pilihan Ganda (PG), 12 Pilihan Ganda Kompleks (PGK), dan 6 Benar-Salah dengan stimulus penelitian realistis.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-rose-100 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center mb-3">
              <Volume2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Narator Suara Bahasa Indonesia</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mister Jo berbicara langsung memandu stimulus, membimbing inti masalah, menguraikan pembahasan, dan memberikan strategi kilat.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-rose-100 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Pembahasan 6 Tahap &amp; Cara Cepat</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Setiap nomor dilengkapi penalaran langkah demi langkah dan strategi intuitif cara cepat menjawab untuk efisiensi ujian sesungguhnya.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
