import React, { useEffect } from 'react';
import { 
  Award, 
  Volume2, 
  Brain, 
  Search, 
  BarChart2, 
  CheckCircle, 
  Network, 
  Zap, 
  Lightbulb, 
  Target, 
  ArrowRight 
} from 'lucide-react';
import { ttsManager } from '../utils/tts';

export const NASKAH_NARATOR_MANFAAT = `Keunggulan belajar di Biologi Genius adalah kamu tidak hanya mengetahui jawaban benar, tetapi juga memahami mengapa jawaban tersebut benar. Setiap soal dilengkapi pembahasan ilmiah, penalaran bertahap, dan cara cepat. Dengan begitu, kemampuanmu berkembang bukan hanya dalam mengingat materi, tetapi juga dalam berpikir seperti seorang ilmuwan.`;

interface ManfaatViewProps {
  onStartExam: () => void;
}

export const ManfaatView: React.FC<ManfaatViewProps> = ({ onStartExam }) => {
  useEffect(() => {
    if (ttsManager.getAutoPlay()) {
      ttsManager.speak(NASKAH_NARATOR_MANFAAT, 'Manfaat Aplikasi Biologi Genius');
    }
  }, []);

  const playAudio = () => {
    ttsManager.speak(NASKAH_NARATOR_MANFAAT, 'Manfaat Aplikasi Biologi Genius');
  };

  const benefits = [
    {
      id: 1,
      title: 'Melatih Kemampuan Berpikir Tingkat Tinggi (HOTS)',
      desc: 'Membiasakan siswa menyelesaikan problem kognitif level C4 (Menganalisis), C5 (Mengevaluasi), dan C6 (Merancang Solusi) tanpa sekadar hafalan tekstual.',
      icon: Brain,
      tag: 'Kognitif Prima'
    },
    {
      id: 2,
      title: 'Membiasakan Menganalisis Fenomena Biologis',
      desc: 'Mengaitkan teori biologi sel, fisiologi manusia, dan genetika dengan studi kasus fenomena klinis dan lingkungan kehidupan nyata.',
      icon: Search,
      tag: 'Kontekstual'
    },
    {
      id: 3,
      title: 'Melatih Interpretasi Grafik, Diagram, dan Tabel',
      desc: 'Mengasah kepekaan membaca kurva kinetika enzim, diagram nefron ginjal, aliran siklus fotosintesis, dan data laboratorium kuantitatif.',
      icon: BarChart2,
      tag: 'Literasi Data'
    },
    {
      id: 4,
      title: 'Mengembangkan Kemampuan Menarik Kesimpulan Berdasarkan Data',
      desc: 'Membangun kebiasaan bernalar secara objektif (evidence-based thinking) berdasarkan fakta penelitian teruji, bukan asumsi subjektif.',
      icon: CheckCircle,
      tag: 'Sains Objektif'
    },
    {
      id: 5,
      title: 'Memahami Hubungan Antarkonsep Biologi',
      desc: 'Melihat biologi sebagai satu kesatuan utuh: bagaimana respirasi sel berhubungan dengan sirkulasi darah, difusi gas paru, dan osmoregulasi ginjal.',
      icon: Network,
      tag: 'Integrasi Holistik'
    },
    {
      id: 6,
      title: 'Melatih Strategi Menjawab Soal secara Efektif',
      desc: 'Memanfaatkan fitur Cara Cepat dan teknik eliminasi opsi cerdas untuk menghemat waktu pengerjaan saat menghadapi durasi ujian yang ketat.',
      icon: Zap,
      tag: 'Trik Cepat'
    },
    {
      id: 7,
      title: 'Memahami Alasan Ilmiah di Balik Setiap Jawaban',
      desc: 'Setiap soal menyajikan pembahasan ilmiah mendalam 6 tahap: dari pemahaman masalah, identifikasi data, hingga bedah kesalahan opsi lainnya.',
      icon: Lightbulb,
      tag: 'Bahas Tuntas'
    },
    {
      id: 8,
      title: 'Mempersiapkan Diri Menghadapi TKA Biologi 2026',
      desc: 'Format soal, proporsi tipe soal (PG, PGK, Benar-Salah), dan tingkat kesulitan telah disinkronkan sepenuhnya dengan kisi-kisi resmi TKA 2026.',
      icon: Target,
      tag: 'Target Lolos PTN'
    }
  ];

  return (
    <div className="space-y-6 py-4 max-w-5xl mx-auto">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 rounded-3xl p-6 sm:p-8 text-white shadow-lg shadow-rose-900/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-extrabold uppercase tracking-wider backdrop-blur-xs">
              <Award className="w-3.5 h-3.5" />
              <span>Nilai Lebih Pembelajaran</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">Manfaat Utama Belajar di Biologi Genius</h1>
            <p className="text-xs sm:text-sm text-rose-100 max-w-2xl leading-relaxed">
              Membangun kompetensi bernalar ilmiah seperti seorang biologiawan profesional
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

        {/* Script preview */}
        <div className="mt-4 p-3.5 rounded-2xl bg-black/10 border border-white/20 text-xs sm:text-sm text-rose-50 font-serif italic leading-relaxed">
          "{NASKAH_NARATOR_MANFAAT}"
        </div>
      </div>

      {/* Benefits 8-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {benefits.map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.id}
              className="p-5 rounded-2xl bg-white border border-rose-100 shadow-xs hover:border-rose-300 hover:shadow-md transition-all flex gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex-shrink-0 flex items-center justify-center text-rose-600 shadow-xs">
                <Icon className="w-6 h-6" />
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-700 bg-rose-100/70 px-2 py-0.5 rounded-full">
                    {b.tag}
                  </span>
                  <span className="text-xs font-bold text-slate-400">#0{b.id}</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">{b.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Button */}
      <div className="text-center pt-2">
        <button
          onClick={onStartExam}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-md shadow-rose-600/25 transition-all active:scale-95"
        >
          <span>Buktikan Sendiri, Mulai Kerjakan Soal</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
