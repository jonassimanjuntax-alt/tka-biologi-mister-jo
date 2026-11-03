import React, { useEffect } from 'react';
import { 
  Play, 
  HelpCircle, 
  BookOpen, 
  CheckCircle2, 
  Volume2, 
  Sparkles, 
  FileText, 
  Layers, 
  Save, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { ttsManager } from '../utils/tts';

export const NASKAH_NARATOR_PETUNJUK = `Untuk menggunakan aplikasi ini, pilih nomor soal yang ingin kamu kerjakan. Bacalah stimulus dengan teliti, amati gambar, diagram, grafik, atau tabel yang tersedia. Setelah itu, tentukan jawabanmu. Kamu dapat memeriksa jawaban dan membuka pembahasan lengkap yang akan membimbing proses berpikirmu. Jangan lupa perhatikan bagian cara cepat, karena di sana kamu akan mempelajari strategi efisien untuk menyelesaikan soal. Progres belajarmu akan tersimpan otomatis, sehingga kamu bisa melanjutkan latihan kapan saja.`;

interface PetunjukViewProps {
  onStartExam: () => void;
}

export const PetunjukView: React.FC<PetunjukViewProps> = ({ onStartExam }) => {
  useEffect(() => {
    // If auto play is enabled, read instructions when opened
    if (ttsManager.getAutoPlay()) {
      ttsManager.speak(NASKAH_NARATOR_PETUNJUK, 'Petunjuk Penggunaan Mister Jo');
    }
  }, []);

  const playAudio = () => {
    ttsManager.speak(NASKAH_NARATOR_PETUNJUK, 'Petunjuk Penggunaan Mister Jo');
  };

  const steps = [
    {
      num: 1,
      title: 'Pilih Nomor & Tipe Soal',
      desc: 'Gunakan panel navigasi atau Bank Soal untuk memilih nomor 1 sampai 30. Terdapat 12 soal PG (1 jawaban benar), 12 soal PGK (lebih dari 1 jawaban benar), dan 6 soal Benar-Salah (3 pernyataan).',
      icon: Layers,
      color: 'bg-rose-100 text-rose-700'
    },
    {
      num: 2,
      title: 'Analisis Stimulus Ilmiah',
      desc: 'Setiap soal dilengkapi fenomena ilmiah nyata, grafik kinetika, diagram anatomi berlabel, atau tabel data laboratorium. Mister Jo siap membacakan panduan cara membaca stimulus.',
      icon: BookOpen,
      color: 'bg-pink-100 text-pink-700'
    },
    {
      num: 3,
      title: 'Tentukan & Kunci Jawaban',
      desc: 'Pilih opsi yang paling tepat. Pada soal PGK, seleksi semua pernyataan yang benar. Pada Benar-Salah, tentukan nilai kebenaran tiap pernyataan secara mandiri.',
      icon: CheckCircle2,
      color: 'bg-purple-100 text-purple-700'
    },
    {
      num: 4,
      title: 'Periksa Jawaban & Umpan Balik',
      desc: 'Tekan tombol "Periksa Jawaban" untuk mengevaluasi hasil. Sistem langsung memberikan skor, menandai status benar/salah, dan Mister Jo memberikan refleksi ilmiah.',
      icon: Sparkles,
      color: 'bg-emerald-100 text-emerald-700'
    },
    {
      num: 5,
      title: 'Buka Pembahasan 6 Bagian',
      desc: 'Pelajari proses bernalar tahap demi tahap: Memahami persoalan, Identifikasi informasi, Konsep biologi, Analisis bertahap, Kesimpulan, dan Analisis opsi lainnya.',
      icon: FileText,
      color: 'bg-blue-100 text-blue-700'
    },
    {
      num: 6,
      title: 'Kuasai Trik Cara Cepat',
      desc: 'Manfaatkan fitur "Cara Cepat Menjawab" untuk mendapatkan strategi eliminasi cerdas, prinsip kata kunci, dan jalan pintas konsep demi efisiensi waktu ujian TKA.',
      icon: Zap,
      color: 'bg-amber-100 text-amber-700'
    },
    {
      num: 7,
      title: 'Tersimpan Otomatis & Offline',
      desc: 'Seluruh progres, jawaban, nilai, dan soal yang ditandai tersimpan otomatis di browser secara lokal. Kamu dapat melanjutkan latihan kapan saja tanpa khawatir kehilangan data.',
      icon: Save,
      color: 'bg-teal-100 text-teal-700'
    }
  ];

  return (
    <div className="space-y-6 py-4 max-w-5xl mx-auto">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 rounded-3xl p-6 sm:p-8 text-white shadow-lg shadow-rose-900/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-extrabold uppercase tracking-wider backdrop-blur-xs">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Panduan Lengkap Siswa</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">Petunjuk Penggunaan Aplikasi</h1>
            <p className="text-xs sm:text-sm text-rose-100 max-w-2xl leading-relaxed">
              Panduan interaktif menyelesaikan 30 soal latihan TKA Biologi 2026 bersama Mister Jo
            </p>
          </div>

          <button
            onClick={playAudio}
            className="self-start sm:self-center flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white text-rose-700 hover:bg-rose-50 font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
          >
            <Volume2 className="w-4 h-4 text-rose-600" />
            <span>Dengarkan Petunjuk</span>
          </button>
        </div>

        {/* Spoken text script preview */}
        <div className="mt-4 p-3.5 rounded-2xl bg-black/10 border border-white/20 text-xs sm:text-sm text-rose-50 font-serif italic leading-relaxed">
          "{NASKAH_NARATOR_PETUNJUK}"
        </div>
      </div>

      {/* Step Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {steps.map((st) => {
          const Icon = st.icon;
          return (
            <div 
              key={st.num}
              className="p-5 rounded-2xl bg-white border border-rose-100 shadow-xs hover:border-rose-300 transition-all flex gap-4"
            >
              <div className={`w-12 h-12 rounded-2xl ${st.color} flex-shrink-0 flex items-center justify-center font-black text-lg shadow-xs`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md">
                    Langkah {st.num}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">{st.title}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="text-center pt-2">
        <button
          onClick={onStartExam}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-md shadow-rose-600/25 transition-all active:scale-95"
        >
          <span>Sudah Paham, Mulai Latihan Sekarang</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
