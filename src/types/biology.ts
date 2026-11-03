export type QuestionType = 'PG' | 'PGK' | 'BS';

export type DifficultyLevel = 'Menengah' | 'Sulit' | 'Sangat Sulit';

export type CognitiveLevel = 'C4 (Menganalisis)' | 'C5 (Mengevaluasi)' | 'C6 (Merancang Solusi)';

export interface OptionItem {
  key: string; // 'A', 'B', 'C', 'D', 'E'
  text: string;
}

export interface StatementItem {
  id: number;
  text: string;
  correct: boolean; // true = Benar, false = Salah
}

export interface ExplanationSection {
  a_memahamiPersoalan: string;
  b_identifikasiInformasi: string;
  c_konsepBiologi: string;
  d_analisisPenalaran: string;
  e_kesimpulan: string;
  f_analisisOpsi: string;
}

export interface NarrationScript {
  stimulus: string;
  pertanyaan: string;
  pembahasan: string;
  caraCepat: string;
  refleksiBenar: string;
  refleksiSalah: string;
}

export interface Question {
  id: number;
  type: QuestionType;
  topic: string;
  subtopic: string;
  difficulty: DifficultyLevel;
  cognitiveLevel: CognitiveLevel;
  stimulusTitle: string;
  stimulusType: 'paragraph' | 'table' | 'graph' | 'diagram';
  stimulusContent: string;
  stimulusData?: {
    headers: string[];
    rows: (string | number)[][];
    caption?: string;
  };
  diagramId?: string;
  questionText: string;
  // For PG: 5 options, 1 correct
  options?: OptionItem[];
  correctAnswer?: string; // 'A' | 'B' | 'C' | 'D' | 'E'
  // For PGK: 5 options, multiple correct
  correctAnswers?: string[]; // e.g. ['A', 'C', 'D']
  // For BS: 3 statements
  statements?: StatementItem[];
  pembahasan: ExplanationSection;
  caraCepat: string;
  narasi: NarrationScript;
}

export type UserAnswer = 
  | { type: 'PG'; selected: string | null }
  | { type: 'PGK'; selected: string[] }
  | { type: 'BS'; answers: Record<number, boolean | null> };

export interface QuestionState {
  answered: boolean;
  userAnswer: UserAnswer;
  isCorrect: boolean;
  score: number;
  maxScore: number;
  markedForReview: boolean;
  checked: boolean;
}

export interface UserProgress {
  currentQuestionId: number;
  answers: Record<number, QuestionState>;
  lastUpdated: string;
}
