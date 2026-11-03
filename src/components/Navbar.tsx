import React, { useState } from 'react';
import { 
  BookOpen, 
  HelpCircle, 
  Award, 
  ListChecks, 
  BarChart3, 
  Settings2, 
  Home, 
  Menu, 
  X, 
  Volume2, 
  VolumeX, 
  Sparkles,
  GraduationCap
} from 'lucide-react';
import { ttsManager } from '../utils/tts';

export type NavTab = 
  | 'beranda' 
  | 'petunjuk' 
  | 'manfaat' 
  | 'latihan' 
  | 'bank-soal' 
  | 'hasil' 
  | 'progres'
  | 'pengaturan-suara';

interface NavbarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  answeredCount: number;
  totalQuestions: number;
  totalScore: number;
  onOpenBankSoalModal: () => void;
  onOpenSettingsModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  answeredCount,
  totalQuestions,
  totalScore,
  onOpenBankSoalModal,
  onOpenSettingsModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const toggleSound = () => {
    if (isMuted) {
      setIsMuted(false);
      ttsManager.setVolume(1.0);
    } else {
      setIsMuted(true);
      ttsManager.stop();
      ttsManager.setVolume(0);
    }
  };

  const navItems = [
    { id: 'beranda' as NavTab, label: 'Beranda', icon: Home },
    { id: 'latihan' as NavTab, label: 'Latihan Soal', icon: BookOpen },
    { id: 'petunjuk' as NavTab, label: 'Petunjuk', icon: HelpCircle },
    { id: 'manfaat' as NavTab, label: 'Manfaat', icon: Award },
    { id: 'hasil' as NavTab, label: 'Hasil Latihan', icon: BarChart3 },
    { id: 'progres' as NavTab, label: 'Progres Belajar', icon: GraduationCap }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-rose-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo & Mister Jo Branding */}
          <div 
            onClick={() => onSelectTab('beranda')}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group select-none min-w-0"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-rose-600 via-pink-500 to-rose-400 p-0.5 shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform flex-shrink-0">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-rose-600 to-pink-500 text-base sm:text-lg">BG</span>
              </div>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h1 className="text-sm sm:text-base md:text-lg font-black tracking-tight text-slate-900 group-hover:text-rose-600 transition-colors truncate">
                  BIOLOGI GENIUS
                </h1>
                <span className="hidden sm:inline-block px-1.5 py-0.2 text-[9px] font-extrabold uppercase tracking-wider rounded-md bg-rose-100 text-rose-800 border border-rose-200">
                  TKA 2026
                </span>
              </div>
              <div className="flex items-center gap-1 text-[11px] sm:text-xs text-rose-700 font-semibold truncate">
                <span className="hidden xs:inline">Dibimbing:</span>
                <span className="bg-rose-50 text-rose-800 px-1 py-0.2 rounded border border-rose-200/60 font-bold text-[10px] sm:text-xs">
                  Mister Jo
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navigasi Utama">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20'
                      : 'text-slate-600 hover:text-rose-700 hover:bg-rose-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick Stats & Utilities */}
          <div className="flex items-center gap-2">
            
            {/* Bank Soal Quick Button */}
            <button
              onClick={onOpenBankSoalModal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-pink-50 hover:bg-pink-100 text-pink-900 border border-pink-200 shadow-xs transition-colors"
              title="Buka Bank Nomor Soal"
            >
              <ListChecks className="w-4 h-4 text-pink-600" />
              <span className="hidden sm:inline">Bank Soal</span>
              <span className="bg-pink-200 text-pink-900 px-1.5 py-0.5 rounded-full text-[10px]">
                {answeredCount}/{totalQuestions}
              </span>
            </button>

            {/* Score Pill */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-500 text-white shadow-xs shadow-rose-500/20">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Nilai: {totalScore}</span>
            </div>

            {/* TTS Mute Toggle */}
            <button
              onClick={toggleSound}
              className="p-2 rounded-xl bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-600 transition-colors"
              title={isMuted ? 'Aktifkan Suara Narator' : 'Matikan Suara Narator'}
              aria-label={isMuted ? 'Aktifkan Suara Narator' : 'Matikan Suara Narator'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-red-500" /> : <Volume2 className="w-4 h-4 text-rose-600" />}
            </button>

            {/* TTS Settings Button */}
            <button
              onClick={onOpenSettingsModal}
              className="p-2 rounded-xl bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-600 transition-colors"
              title="Pengaturan Narator Mister Jo"
              aria-label="Pengaturan Narator Mister Jo"
            >
              <Settings2 className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-600 transition-colors"
              aria-label="Menu Navigasi Mobile"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-rose-200/80 bg-white/98 px-4 pt-3 pb-5 space-y-1 shadow-lg animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-rose-100 text-xs font-bold text-rose-900">
            <span>Progress: {answeredCount} dari {totalQuestions} Soal</span>
            <span className="bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full">Nilai: {totalScore}</span>
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-rose-600 text-white'
                    : 'text-slate-700 hover:bg-rose-50 hover:text-rose-700'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
