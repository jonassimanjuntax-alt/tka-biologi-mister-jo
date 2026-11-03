// TTS Narration Engine for Mister Jo - Biologi Genius

export interface TTSState {
  isSpeaking: boolean;
  isPaused: boolean;
  currentText: string;
  currentContext: string; // e.g., 'Sambutan', 'Stimulus', 'Soal', 'Pembahasan', 'Cara Cepat', 'Refleksi'
}

export interface TTSVoiceOption {
  voice: SpeechSynthesisVoice;
  isIndonesian: boolean;
  name: string;
  lang: string;
}

type TTSListener = (state: TTSState) => void;

class TTSEngine {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private voices: SpeechSynthesisVoice[] = [];
  private selectedVoice: SpeechSynthesisVoice | null = null;
  private rate: number = 1.0;
  private pitch: number = 1.05; // Slightly elevated warm friendly tutor pitch
  private volume: number = 1.0;
  private autoPlay: boolean = true;
  private listeners: Set<TTSListener> = new Set();
  private state: TTSState = {
    isSpeaking: false,
    isPaused: false,
    currentText: '',
    currentContext: ''
  };

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
      // Load saved settings from localStorage
      this.loadSettings();
    }
  }

  private loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
    // Prefer Indonesian voices (id-ID or language tag starting with 'id')
    const idVoice = this.voices.find(
      (v) => v.lang.toLowerCase().startsWith('id') || v.name.toLowerCase().includes('indonesia')
    );
    if (idVoice && !this.selectedVoice) {
      this.selectedVoice = idVoice;
    } else if (!this.selectedVoice && this.voices.length > 0) {
      this.selectedVoice = this.voices[0];
    }
  }

  private loadSettings() {
    try {
      const saved = localStorage.getItem('biologi_genius_tts_settings');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.rate) this.rate = parsed.rate;
        if (parsed.pitch) this.pitch = parsed.pitch;
        if (parsed.volume) this.volume = parsed.volume;
        if (typeof parsed.autoPlay === 'boolean') this.autoPlay = parsed.autoPlay;
      }
    } catch {
      // Ignore fallback
    }
  }

  public saveSettings() {
    try {
      localStorage.setItem(
        'biologi_genius_tts_settings',
        JSON.stringify({
          rate: this.rate,
          pitch: this.pitch,
          volume: this.volume,
          autoPlay: this.autoPlay,
          voiceURI: this.selectedVoice?.voiceURI
        })
      );
    } catch {
      // Ignore fallback
    }
  }

  public subscribe(listener: TTSListener): () => void {
    this.listeners.add(listener);
    listener(this.state);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private updateState(partial: Partial<TTSState>) {
    this.state = { ...this.state, ...partial };
    this.listeners.forEach((listener) => listener(this.state));
  }

  public getAvailableVoices(): TTSVoiceOption[] {
    if (!this.synth) return [];
    if (this.voices.length === 0) {
      this.voices = this.synth.getVoices();
    }
    return this.voices.map((v) => ({
      voice: v,
      isIndonesian: v.lang.toLowerCase().startsWith('id') || v.name.toLowerCase().includes('indonesia'),
      name: v.name,
      lang: v.lang
    }));
  }

  public setVoice(voice: SpeechSynthesisVoice) {
    this.selectedVoice = voice;
    this.saveSettings();
  }

  public setRate(rate: number) {
    this.rate = Math.max(0.5, Math.min(2.0, rate));
    this.saveSettings();
  }

  public setPitch(pitch: number) {
    this.pitch = Math.max(0.5, Math.min(1.5, pitch));
    this.saveSettings();
  }

  public setVolume(volume: number) {
    this.volume = Math.max(0, Math.min(1, volume));
    this.saveSettings();
  }

  public setAutoPlay(val: boolean) {
    this.autoPlay = val;
    this.saveSettings();
  }

  public getAutoPlay(): boolean {
    return this.autoPlay;
  }

  public getSettings() {
    return {
      rate: this.rate,
      pitch: this.pitch,
      volume: this.volume,
      autoPlay: this.autoPlay,
      selectedVoice: this.selectedVoice
    };
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
    }
    this.currentUtterance = null;
    this.updateState({
      isSpeaking: false,
      isPaused: false,
      currentText: '',
      currentContext: ''
    });
  }

  public pause() {
    if (this.synth && this.state.isSpeaking && !this.state.isPaused) {
      this.synth.pause();
      this.updateState({ isPaused: true });
    }
  }

  public resume() {
    if (this.synth && this.state.isPaused) {
      this.synth.resume();
      this.updateState({ isPaused: false });
    }
  }

  public replay() {
    if (this.state.currentText) {
      this.speak(this.state.currentText, this.state.currentContext);
    }
  }

  public speak(
    text: string,
    context: string = 'Mister Jo',
    onEndCallback?: () => void
  ) {
    if (!text || typeof window === 'undefined') return;

    // If already speaking, cancel previous
    this.stop();

    if (!this.synth) {
      // SpeechSynthesis not supported
      this.updateState({
        isSpeaking: true,
        isPaused: false,
        currentText: text,
        currentContext: context
      });
      setTimeout(() => {
        this.updateState({ isSpeaking: false, currentText: '', currentContext: '' });
        onEndCallback?.();
      }, 4000);
      return;
    }

    // Clean text of markdown asterisks, hashtags for smoother audio reading
    const cleanText = text
      .replace(/\*\*/g, '')
      .replace(/\*/g, '')
      .replace(/#/g, '')
      .replace(/\[\d+\]/g, '')
      .trim();

    try {
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = this.rate;
      utterance.pitch = this.pitch;
      utterance.volume = this.volume;

      if (this.selectedVoice) {
        utterance.voice = this.selectedVoice;
        utterance.lang = this.selectedVoice.lang || 'id-ID';
      } else {
        utterance.lang = 'id-ID';
      }

      utterance.onstart = () => {
        this.updateState({
          isSpeaking: true,
          isPaused: false,
          currentText: text,
          currentContext: context
        });
      };

      utterance.onend = () => {
        this.updateState({
          isSpeaking: false,
          isPaused: false,
          currentText: '',
          currentContext: ''
        });
        onEndCallback?.();
      };

      utterance.onerror = (e) => {
        // Interrupted or canceled is common when navigating
        this.updateState({
          isSpeaking: false,
          isPaused: false,
          currentText: '',
          currentContext: ''
        });
        if (e.error !== 'interrupted' && e.error !== 'canceled') {
          console.warn('TTS error:', e.error);
        }
      };

      this.currentUtterance = utterance;
      this.synth.speak(utterance);
    } catch (err) {
      console.warn('TTS speak error:', err);
    }
  }
}

export const ttsManager = new TTSEngine();
