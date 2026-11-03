import test from 'node:test';
import assert from 'node:assert/strict';
import { QUESTIONS_DATA } from '../data/questions';

test('QUESTIONS_DATA has exactly 30 questions', () => {
  assert.equal(QUESTIONS_DATA.length, 30);
});

test('Question distribution matches exact specifications: 12 PG, 12 PGK, 6 BS', () => {
  const pgCount = QUESTIONS_DATA.filter((q) => q.type === 'PG').length;
  const pgkCount = QUESTIONS_DATA.filter((q) => q.type === 'PGK').length;
  const bsCount = QUESTIONS_DATA.filter((q) => q.type === 'BS').length;

  assert.equal(pgCount, 12, `Expected 12 PG, got ${pgCount}`);
  assert.equal(pgkCount, 12, `Expected 12 PGK, got ${pgkCount}`);
  assert.equal(bsCount, 6, `Expected 6 BS, got ${bsCount}`);
  assert.equal(pgCount + pgkCount + bsCount, 30);
});

test('Every question has id 1 to 30 sequentially', () => {
  QUESTIONS_DATA.forEach((q, index) => {
    assert.equal(q.id, index + 1, `Question at index ${index} should have id ${index + 1}`);
  });
});

test('Every PG question has 5 options and exactly 1 correct answer', () => {
  QUESTIONS_DATA.filter((q) => q.type === 'PG').forEach((q) => {
    assert.equal(q.options?.length, 5, `Q${q.id} must have 5 options`);
    assert.ok(q.correctAnswer, `Q${q.id} must have correctAnswer`);
    assert.ok(['A', 'B', 'C', 'D', 'E'].includes(q.correctAnswer!), `Q${q.id} correctAnswer must be A-E`);
  });
});

test('Every PGK question has 5 options and > 1 correct answers', () => {
  QUESTIONS_DATA.filter((q) => q.type === 'PGK').forEach((q) => {
    assert.equal(q.options?.length, 5, `Q${q.id} must have 5 options`);
    assert.ok(q.correctAnswers && q.correctAnswers.length > 1, `Q${q.id} must have >1 correct answers`);
    assert.ok(q.correctAnswers && q.correctAnswers.length < 5, `Q${q.id} must not have all 5 correct answers`);
  });
});

test('Every BS question has exactly 3 statements with boolean correct values', () => {
  QUESTIONS_DATA.filter((q) => q.type === 'BS').forEach((q) => {
    assert.equal(q.statements?.length, 3, `Q${q.id} must have 3 statements`);
    q.statements?.forEach((st) => {
      assert.equal(typeof st.correct, 'boolean', `Q${q.id} statement ${st.id} must have boolean correct`);
    });
  });
});

test('Every question has complete structured pembahasan, cara cepat, and narration scripts', () => {
  QUESTIONS_DATA.forEach((q) => {
    assert.ok(q.pembahasan.a_memahamiPersoalan.length > 5, `Q${q.id} missing pembahasan A`);
    assert.ok(q.pembahasan.b_identifikasiInformasi.length > 5, `Q${q.id} missing pembahasan B`);
    assert.ok(q.pembahasan.c_konsepBiologi.length > 5, `Q${q.id} missing pembahasan C`);
    assert.ok(q.pembahasan.d_analisisPenalaran.length > 5, `Q${q.id} missing pembahasan D`);
    assert.ok(q.pembahasan.e_kesimpulan.length > 5, `Q${q.id} missing pembahasan E`);
    assert.ok(q.pembahasan.f_analisisOpsi.length > 5, `Q${q.id} missing pembahasan F`);
    assert.ok(q.caraCepat.length > 5, `Q${q.id} missing cara cepat`);
    assert.ok(q.narasi.stimulus.length > 5, `Q${q.id} missing narasi stimulus`);
    assert.ok(q.narasi.pertanyaan.length > 5, `Q${q.id} missing narasi pertanyaan`);
    assert.ok(q.narasi.pembahasan.length > 5, `Q${q.id} missing narasi pembahasan`);
    assert.ok(q.narasi.caraCepat.length > 5, `Q${q.id} missing narasi cara cepat`);
  });
});
