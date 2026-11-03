import { Question, UserAnswer, QuestionState } from '../types/biology';

export const PG_MAX_SCORE = 3;
export const PGK_MAX_SCORE = 3;
// For BS: 6 questions total 28 points -> 28 / 6 = 4.6666667
export const BS_TOTAL_POINTS = 28;
export const BS_QUESTION_MAX_SCORE = 28 / 6;

export function calculateQuestionScore(question: Question, answer: UserAnswer): {
  score: number;
  maxScore: number;
  isCorrect: boolean;
  feedback: string;
} {
  if (question.type === 'PG') {
    const maxScore = PG_MAX_SCORE;
    if (answer.type !== 'PG' || !answer.selected) {
      return { score: 0, maxScore, isCorrect: false, feedback: 'Belum dijawab.' };
    }
    const isCorrect = answer.selected.toUpperCase() === question.correctAnswer?.toUpperCase();
    return {
      score: isCorrect ? maxScore : 0,
      maxScore,
      isCorrect,
      feedback: isCorrect
        ? 'Jawaban kamu tepat sekali! Penalaran ilmiah kamu sesuai.'
        : `Jawaban kamu kurang tepat. Jawaban yang benar adalah pilihan ${question.correctAnswer}.`
    };
  }

  if (question.type === 'PGK') {
    const maxScore = PGK_MAX_SCORE;
    if (answer.type !== 'PGK' || !answer.selected || answer.selected.length === 0) {
      return { score: 0, maxScore, isCorrect: false, feedback: 'Belum dijawab.' };
    }

    const correctSet = new Set((question.correctAnswers || []).map((k) => k.toUpperCase()));
    const selectedSet = new Set(answer.selected.map((k) => k.toUpperCase()));
    const totalCorrect = correctSet.size;
    const totalIncorrect = 5 - totalCorrect;

    // Rule: Penalize blind selection of all options
    if (selectedSet.size === 5 && totalCorrect < 5) {
      return {
        score: 0,
        maxScore,
        isCorrect: false,
        feedback: 'Kamu memilih semua opsi tanpa memilah. Pada soal PGK, seleksilah hanya pernyataan yang benar berdasarkan bukti ilmiah.'
      };
    }

    let truePositives = 0;
    let falsePositives = 0;

    selectedSet.forEach((key) => {
      if (correctSet.has(key)) {
        truePositives++;
      } else {
        falsePositives++;
      }
    });

    const isFullyCorrect = truePositives === totalCorrect && falsePositives === 0;

    // Proportional accuracy formula with penalty for false positives
    const posRatio = totalCorrect > 0 ? truePositives / totalCorrect : 0;
    const negRatio = totalIncorrect > 0 ? falsePositives / totalIncorrect : 0;
    const accuracy = Math.max(0, posRatio - negRatio);
    const score = Number((accuracy * maxScore).toFixed(2));

    let feedback = '';
    if (isFullyCorrect) {
      feedback = 'Sempurna! Semua opsi yang benar berhasil kamu analisis dengan tepat.';
    } else if (score > 0) {
      feedback = `Bagus, sebagian pilihan kamu benar (Skor ${score} dari ${maxScore}). Periksa pembahasan untuk melihat opsi mana yang keliru.`;
    } else {
      feedback = 'Analisis kamu belum tepat pada pilihan ini. Pelajari kembali data pada stimulus dan buka pembahasan.';
    }

    return {
      score,
      maxScore,
      isCorrect: isFullyCorrect,
      feedback
    };
  }

  if (question.type === 'BS') {
    const maxScore = Number(BS_QUESTION_MAX_SCORE.toFixed(2));
    if (answer.type !== 'BS' || !answer.answers) {
      return { score: 0, maxScore, isCorrect: false, feedback: 'Belum dijawab.' };
    }

    const statements = question.statements || [];
    let correctCount = 0;
    let answeredCount = 0;

    statements.forEach((st) => {
      const userVal = answer.answers[st.id];
      if (userVal !== null && userVal !== undefined) {
        answeredCount++;
        if (userVal === st.correct) {
          correctCount++;
        }
      }
    });

    if (answeredCount === 0) {
      return { score: 0, maxScore, isCorrect: false, feedback: 'Belum dijawab.' };
    }

    const pointPerStatement = BS_QUESTION_MAX_SCORE / statements.length;
    const score = Number((correctCount * pointPerStatement).toFixed(2));
    const isCorrect = correctCount === statements.length;

    return {
      score,
      maxScore,
      isCorrect,
      feedback: isCorrect
        ? 'Luar biasa! Seluruh pernyataan berhasil kamu validasi dengan benar.'
        : `Kamu benar pada ${correctCount} dari ${statements.length} pernyataan. Periksa kembali bukti faktual setiap pernyataan pada pembahasan.`
    };
  }

  return { score: 0, maxScore: 0, isCorrect: false, feedback: '' };
}

export interface ExamSummary {
  totalScore: number;
  maxTotalScore: number;
  percentage: number;
  answeredCount: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  category: {
    label: string;
    description: string;
    color: string;
  };
  topicBreakdown: Record<string, {
    total: number;
    answered: number;
    correct: number;
    score: number;
    maxScore: number;
    percentage: number;
  }>;
  weakTopics: string[];
}

export function getMasteryCategory(scoreOutOf100: number): {
  label: string;
  description: string;
  color: string;
} {
  if (scoreOutOf100 >= 90) {
    return {
      label: 'Sangat Mahir',
      description: 'Kemampuan penalaran ilmiah dan analisis data biologi kamu berada pada tingkat prima! Siap menaklukkan TKA Biologi 2026 dengan hasil maksimal.',
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200'
    };
  }
  if (scoreOutOf100 >= 80) {
    return {
      label: 'Mahir',
      description: 'Pemahaman konsep dasar dan interpretasi stimulus kamu sangat solid. Pertajam sedikit lagi ketelitian pada variasi soal PGK kompleks.',
      color: 'text-rose-700 bg-rose-50 border-rose-200'
    };
  }
  if (scoreOutOf100 >= 70) {
    return {
      label: 'Berkembang Baik',
      description: 'Kamu memahami sebagian besar konsep inti. Fokuskan latihan pada analisis grafik bertingkat dan keterkaitan antartopik fisiologi.',
      color: 'text-amber-700 bg-amber-50 border-amber-200'
    };
  }
  if (scoreOutOf100 >= 60) {
    return {
      label: 'Perlu Penguatan',
      description: 'Perlu penguatan pada identifikasi variabel penelitian dan rute biokimia seluler. Manfaatkan fitur Cara Cepat dan Pembahasan Ilmiah.',
      color: 'text-orange-700 bg-orange-50 border-orange-200'
    };
  }
  return {
    label: 'Perlu Pendampingan Lebih Lanjut',
    description: 'Jangan berkecil hati! Ulangi kembali materi dasar stimulus bersama panduan Mister Jo langkah demi langkah.',
    color: 'text-purple-700 bg-purple-50 border-purple-200'
  };
}

export function evaluateAllProgress(
  questions: Question[],
  states: Record<number, QuestionState>
): ExamSummary {
  let totalScore = 0;
  let correctCount = 0;
  let incorrectCount = 0;
  let answeredCount = 0;

  const topicBreakdown: ExamSummary['topicBreakdown'] = {};

  questions.forEach((q) => {
    if (!topicBreakdown[q.topic]) {
      topicBreakdown[q.topic] = {
        total: 0,
        answered: 0,
        correct: 0,
        score: 0,
        maxScore: 0,
        percentage: 0
      };
    }

    const topicItem = topicBreakdown[q.topic];
    topicItem.total += 1;

    const maxQScore = q.type === 'BS' ? BS_QUESTION_MAX_SCORE : 3;
    topicItem.maxScore += maxQScore;

    const state = states[q.id];
    if (state && state.checked) {
      answeredCount++;
      totalScore += state.score;
      topicItem.score += state.score;
      topicItem.answered++;

      if (state.isCorrect) {
        correctCount++;
        topicItem.correct++;
      } else {
        incorrectCount++;
      }
    }
  });

  // Calculate percentages per topic
  const weakTopics: string[] = [];
  Object.keys(topicBreakdown).forEach((topic) => {
    const item = topicBreakdown[topic];
    item.percentage = item.maxScore > 0 ? Math.round((item.score / item.maxScore) * 100) : 0;
    if (item.answered > 0 && item.percentage < 70) {
      weakTopics.push(topic);
    }
  });

  const roundedTotalScore = Math.min(100, Math.round(totalScore * 10) / 10);
  const unansweredCount = questions.length - answeredCount;
  const percentage = Math.round(roundedTotalScore);

  return {
    totalScore: roundedTotalScore,
    maxTotalScore: 100,
    percentage,
    answeredCount,
    correctCount,
    incorrectCount,
    unansweredCount,
    category: getMasteryCategory(percentage),
    topicBreakdown,
    weakTopics
  };
}
