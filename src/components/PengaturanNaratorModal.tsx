import React, { useState, useEffect } from 'react';
import { ttsManager, TTSVoiceOption } from '../utils/tts';
import { X, Volume2, Play, Sparkles, Sliders, Check } from 'lucide-react';

interface PengaturanNaratorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PengaturanNaratorModal: React.FC<PengaturanNaratorModalProps> = ({
  isOpen,
  onClose
}) => {
  const [voices, setVoices] = useState<TTSVoiceOption[]>([]);
  const [selectedVoiceURI, setSelectedVoiceURI] = useState<string>('');
  const [rate, setRate] = useState<number>(1.0);
  const [pitch, setPitch] = useState<number>(1.05);
  const [volume, setVolume] = useState<number>(1.0);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);

  useEffect(() => {
    if (!isOpen) return;
    const availVoices = ttsManager.getAvailableVoices();
    setVoices(availVoices);

    const settings = ttsManager.getSettings();
    setRate(settings.rate);
    setPitch(settings.pitch);
    setVolume(settings.volume);
    setAutoPlay(settings.autoPlay);
    if (settings.selectedVoice) {
      setSelectedVoiceURI(settings.selectedVoice.voiceURI);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleVoiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const uri = e.target.value;
    setSelectedVoiceURI(uri);
    const chosen = voices.find((v) => v.voice.voiceURI === uri);
    if (chosen) {
      ttsManager.setVoice(chosen.voice);
    }
  };

  const handleRateChange = (val: number) => {
    setRate(val);
    ttsManager.setRate(val);
  };

  const handlePitchChange = (val: number) => {
    setPitch(val);
    ttsManager.setPitch(val);
  };

  const handleVolumeChange = (val: number) => {
    setVolume(val);
    ttsManager.setVolume(val);
  };

  const handleAutoPlayChange = (checked: boolean) => {
    setAutoPlay(checked);
    ttsManager.setAutoPlay(checked);
  };

  const testVoice = () => {
    ttsManager.speak(
      'Halo! Ini adalah uji coba suara Mister Jo. Saya siap membimbingmu menaklukkan 30 soal TKA Biologi 2026 dengan penalaran ilmiah terbaik.',
      'Uji Coba Suara Mister Jo'
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white rounded-3xl border border-rose-200 shadow-2xl w-full max-w-lg overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-rose-100 flex items-center justify-between bg-rose-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-rose-600 flex items-center justify-center text-white font-bold text-xs shadow-xs">
              MJ
            </div>
            <div>
              <h2 className="text-base font-black text-slate-900">
                Pengaturan Narator Mister Jo
              </h2>
              <p className="text-xs text-slate-500">Kustomisasi suara Text-to-Speech bahasa Indonesia</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 overflow-y-auto max-h-[75vh]">
          
          {/* Voice selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Pilihan Suara Sistem (TTS)
            </label>
            <select
              value={selectedVoiceURI}
              onChange={handleVoiceChange}
              className="w-full p-3 rounded-2xl border border-rose-200 text-xs sm:text-sm bg-white font-medium focus:ring-2 focus:ring-rose-500 focus:outline-hidden"
            >
              {voices.map((v, i) => (
                <option key={i} value={v.voice.voiceURI}>
                  {v.name} ({v.lang}) {v.isIndonesian ? '⭐ Rekomendasi Indonesia' : ''}
                </option>
              ))}
            </select>
            <p className="text-[11px] text-slate-500">
              *Direkomendasikan memilih suara bahasa Indonesia (id-ID) untuk pelafalan istilah biologi yang lebih natural.
            </p>
          </div>

          {/* Rate / Speed slider */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold text-slate-700">
              <span>Kecepatan Berbicara (Rate)</span>
              <span className="text-rose-600">{rate}x</span>
            </div>
            <input
              type="range"
              min="0.7"
              max="1.5"
              step="0.05"
              value={rate}
              onChange={(e) => handleRateChange(parseFloat(e.target.value))}
              className="w-full accent-rose-600 h-2 bg-slate-100 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>Lambat (0.7x)</span>
              <span>Normal (1.0x)</span>
              <span>Cepat (1.5x)</span>
            </div>
          </div>

          {/* Pitch slider */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold text-slate-700">
              <span>Nada Suara (Pitch)</span>
              <span className="text-rose-600">{pitch}</span>
            </div>
            <input
              type="range"
              min="0.8"
              max="1.3"
              step="0.05"
              value={pitch}
              onChange={(e) => handlePitchChange(parseFloat(e.target.value))}
              className="w-full accent-rose-600 h-2 bg-slate-100 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>Berat (0.8)</span>
              <span>Ramah (1.05)</span>
              <span>Tinggi (1.3)</span>
            </div>
          </div>

          {/* Volume slider */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold text-slate-700">
              <span>Volume</span>
              <span className="text-rose-600">{Math.round(volume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className="w-full accent-rose-600 h-2 bg-slate-100 rounded-lg cursor-pointer"
            />
          </div>

          {/* Auto-Play Toggle */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-rose-50/50 border border-rose-100">
            <div>
              <div className="text-xs font-bold text-slate-900">
                Putar Otomatis saat Buka Soal
              </div>
              <div className="text-[11px] text-slate-500">
                Mister Jo langsung membacakan panduan stimulus saat berganti nomor
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={autoPlay}
                onChange={(e) => handleAutoPlayChange(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-600"></div>
            </label>
          </div>

          {/* Test Voice Button */}
          <div className="pt-2">
            <button
              onClick={testVoice}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Uji Suara Mister Jo Sekarang</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
