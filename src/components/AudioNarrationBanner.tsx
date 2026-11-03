import React, { useEffect, useState } from 'react';
import { ttsManager, TTSState } from '../utils/tts';
import { Volume2, VolumeX, Pause, Play, RotateCcw, X, Sparkles } from 'lucide-react';

export const AudioNarrationBanner: React.FC = () => {
  const [ttsState, setTtsState] = useState<TTSState>({
    isSpeaking: false,
    isPaused: false,
    currentText: '',
    currentContext: ''
  });

  useEffect(() => {
    const unsubscribe = ttsManager.subscribe((state) => {
      setTtsState(state);
    });
    return unsubscribe;
  }, []);

  if (!ttsState.isSpeaking && !ttsState.isPaused && !ttsState.currentText) {
    return null;
  }

  return (
    <aside 
      aria-label="Panel Suara Narator Mister Jo"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-xl z-50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
    >
      <div className="bg-white/95 backdrop-blur-md border-2 border-rose-200 rounded-2xl p-4 shadow-xl shadow-rose-900/10 flex flex-col gap-2.5">
        <div className="flex items-center justify-between gap-3 border-b border-rose-100 pb-2">
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-rose-500 to-pink-400 flex items-center justify-center text-white font-bold text-xs shadow-md">
              <span>MJ</span>
              {ttsState.isSpeaking && !ttsState.isPaused && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-600"></span>
                </span>
              )}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-rose-900">Mister Jo – Narator Biologi</span>
                <Sparkles className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
              </div>
              <span className="text-[11px] text-rose-600 font-medium">
                {ttsState.currentContext || 'Membimbing Belajar'}
              </span>
            </div>
          </div>

          {/* Sound waves animation if speaking */}
          {ttsState.isSpeaking && !ttsState.isPaused && (
            <div className="flex items-center gap-0.5 h-4 px-2">
              <span className="w-1 bg-rose-500 rounded-full animate-bounce [animation-delay:-0.3s] h-3"></span>
              <span className="w-1 bg-rose-500 rounded-full animate-bounce [animation-delay:-0.15s] h-4"></span>
              <span className="w-1 bg-rose-500 rounded-full animate-bounce h-2"></span>
              <span className="w-1 bg-rose-500 rounded-full animate-bounce [animation-delay:-0.25s] h-3.5"></span>
            </div>
          )}

          {/* Controls */}
          <div className="flex items-center gap-1">
            {ttsState.isPaused ? (
              <button
                onClick={() => ttsManager.resume()}
                className="p-1.5 rounded-lg bg-rose-100 hover:bg-rose-200 text-rose-800 transition-colors"
                title="Lanjutkan Suara"
                aria-label="Lanjutkan Suara"
              >
                <Play className="w-4 h-4 fill-current" />
              </button>
            ) : (
              <button
                onClick={() => ttsManager.pause()}
                className="p-1.5 rounded-lg bg-rose-100 hover:bg-rose-200 text-rose-800 transition-colors"
                title="Jeda Suara"
                aria-label="Jeda Suara"
              >
                <Pause className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={() => ttsManager.replay()}
              className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 transition-colors"
              title="Ulangi Suara"
              aria-label="Ulangi Suara"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={() => ttsManager.stop()}
              className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
              title="Hentikan & Tutup"
              aria-label="Hentikan & Tutup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Spoken subtitle display */}
        <div className="text-xs text-slate-700 max-h-20 overflow-y-auto leading-relaxed bg-rose-50/50 p-2.5 rounded-xl border border-rose-100/60 font-serif italic">
          "{ttsState.currentText}"
        </div>
      </div>
    </aside>
  );
};
