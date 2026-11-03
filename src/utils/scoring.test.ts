import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateQuestionScore, getMasteryCategory } from './scoring';
import { Question } from '../types/biology';

const dummyPG: Question = {
  id: 1,
  type: 'PG',
  topic: 'Keanekaragaman Hayati',
  subtopic: 'Tingkat Gen',
  difficulty: 'Menengah',
  cognitiveLevel: 'C4 (Menganalisis)',
  stimulusTitle: 'Variasi Mangga',
  stimulusType: 'paragraph',
  stimulusContent: 'Variasi rasa mangga...',
  questionText: 'Manakah yang menunjukkan keanekaragaman tingkat gen?',
  options: [
    { key: 'A', text: 'Mangga arumanis dan mangga golek' },
    { key: 'B', text: 'Kelapa dan aren' },
    { key: 'C', text: 'Kucing dan harimau' },
    { key: 'D', text: 'Padi dan jagung' },
    { key: 'E', text: 'Bunga mawar dan melati' }
  ],
  correctAnswer: 'A',
  pembahasan: {
    a_memahamiPersoalan: '',
    b_identifikasiInformasi: '',
    c_konsepBiologi: '',
    d_analisisPenalaran: '',
    e_kesimpulan: '',
    f_analisisOpsi: ''
  },
  caraCepat: '',
  narasi: {
    stimulus: '',
    pertanyaan: '',
    pembahasan: '',
    caraCepat: '',
    refleksiBenar: '',
    refleksiSalah: ''
  }
};

const dummyPGK: Question = {
  id: 2,
  type: 'PGK',
  topic: 'Bakteri',
  subtopic: 'Gram Positif dan Negatif',
  difficulty: 'Sulit',
  cognitiveLevel: 'C4 (Menganalisis)',
  stimulusTitle: 'Dinding Sel Bakteri',
  stimulusType: 'table',
  stimulusContent: 'Analisis peptidoglikan...',
  questionText: 'Pilihlah seluruh pernyataan yang benar!',
  options: [
    { key: 'A', text: 'Gram positif memiliki peptidoglikan tebal' },
    { key: 'B', text: 'Gram negatif memiliki membran luar lipopolisakarida' },
    { key: 'C', text: 'Gram positif berwarna merah setelah pewarnaan Gram' },
    { key: 'D', text: 'Gram negatif lebih resisten terhadap penisilin biasa' },
    { key: 'E', text: 'Bakteri tidak memiliki ribosom' }
  ],
  correctAnswers: ['A', 'B', 'D'],
  pembahasan: {
    a_memahamiPersoalan: '',
    b_identifikasiInformasi: '',
    c_konsepBiologi: '',
    d_analisisPenalaran: '',
    e_kesimpulan: '',
    f_analisisOpsi: ''
  },
  caraCepat: '',
  narasi: {
    stimulus: '',
    pertanyaan: '',
    pembahasan: '',
    caraCepat: '',
    refleksiBenar: '',
    refleksiSalah: ''
  }
};

const dummyBS: Question = {
  id: 3,
  type: 'BS',
  topic: 'Ekosistem',
  subtopic: 'Jaring Makanan',
  difficulty: 'Menengah',
  cognitiveLevel: 'C4 (Menganalisis)',
  stimulusTitle: 'Piramida Energi',
  stimulusType: 'paragraph',
  stimulusContent: 'Aliran energi dalam ekosistem...',
  questionText: 'Tentukan Benar atau Salah pada pernyataan berikut:',
  statements: [
    { id: 1, text: 'Energi berkurang sekitar 90% pada setiap kenaikan tingkat trofik', correct: true },
    { id: 2, text: 'Daur materi berlangsung secara terbuka dan hilang ke luar angkasa', correct: false },
    { id: 3, text: 'Dekomposer mengembalikan unsur anorganik ke lingkungan fisik', correct: true }
  ],
  pembahasan: {
    a_memahamiPersoalan: '',
    b_identifikasiInformasi: '',
    c_konsepBiologi: '',
    d_analisisPenalaran: '',
    e_kesimpulan: '',
    f_analisisOpsi: ''
  },
  caraCepat: '',
  narasi: {
    stimulus: '',
    pertanyaan: '',
    pembahasan: '',
    caraCepat: '',
    refleksiBenar: '',
    refleksiSalah: ''
  }
};

test('PG: Correct answer gives max score (3)', () => {
  const result = calculateQuestionScore(dummyPG, { type: 'PG', selected: 'A' });
  assert.equal(result.score, 3);
  assert.equal(result.isCorrect, true);
});

test('PG: Incorrect answer gives 0', () => {
  const result = calculateQuestionScore(dummyPG, { type: 'PG', selected: 'B' });
  assert.equal(result.score, 0);
  assert.equal(result.isCorrect, false);
});

test('PGK: Selecting all 5 blindly yields 0 score', () => {
  const result = calculateQuestionScore(dummyPGK, {
    type: 'PGK',
    selected: ['A', 'B', 'C', 'D', 'E']
  });
  assert.equal(result.score, 0);
  assert.equal(result.isCorrect, false);
});

test('PGK: Selecting exact correct answers gives full 3 points', () => {
  const result = calculateQuestionScore(dummyPGK, {
    type: 'PGK',
    selected: ['A', 'B', 'D']
  });
  assert.equal(result.score, 3);
  assert.equal(result.isCorrect, true);
});

test('PGK: Partial correct gives proportional score', () => {
  const result = calculateQuestionScore(dummyPGK, {
    type: 'PGK',
    selected: ['A', 'B'] // 2 out of 3 correct, 0 incorrect chosen
  });
  assert.ok(result.score > 1.9 && result.score < 2.1); // ~2.0
  assert.equal(result.isCorrect, false);
});

test('BS: Validates all 3 statements correctly', () => {
  const result = calculateQuestionScore(dummyBS, {
    type: 'BS',
    answers: { 1: true, 2: false, 3: true }
  });
  assert.equal(result.isCorrect, true);
  assert.ok(result.score > 4.6);
});

test('Mastery categories correspond correctly', () => {
  assert.equal(getMasteryCategory(95).label, 'Sangat Mahir');
  assert.equal(getMasteryCategory(82).label, 'Mahir');
  assert.equal(getMasteryCategory(75).label, 'Berkembang Baik');
  assert.equal(getMasteryCategory(65).label, 'Perlu Penguatan');
  assert.equal(getMasteryCategory(50).label, 'Perlu Pendampingan Lebih Lanjut');
});
