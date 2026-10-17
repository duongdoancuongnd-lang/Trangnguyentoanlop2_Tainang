/**
 * Deduplication & Question Validation Engine
 * Ensures zero duplicate or near-duplicate questions in any quiz attempt.
 */

import { Question } from '../types/quiz';

// Common Vietnamese Grade 2 character names to normalize for near-duplicate detection
const COMMON_NAMES = new Set([
  'an', 'bình', 'lan', 'mai', 'nam', 'hoa', 'hà', 'minh', 'hùng', 'dũng',
  'tuấn', 'hải', 'linh', 'phương', 'nga', 'tú', 'đức', 'long', 'việt',
  'bác ba', 'bác tư', 'chú năm', 'cô hoa', 'bà nội', 'mẹ', 'bố'
]);

// Common stop words in math questions
const STOP_WORDS = new Set([
  'hỏi', 'bao', 'nhiêu', 'là', 'có', 'của', 'bạn', 'trong', 'được', 'sau',
  'trước', 'tất', 'cả', 'cho', 'biết', 'hãy', 'tìm', 'mấy', 'gì', 'thế',
  'nào', 'các', 'những', 'một', 'hai', 'ba', 'bốn', 'năm', 'đáp', 'án',
  'đúng', 'sai', 'sau', 'đây', 'thì', 'em', 'hãy', 'tính', 'với'
]);

/**
 * Normalizes text for exact and near-match comparison:
 * Lowercases, strips punctuation, normalizes whitespace.
 */
export function normalizeText(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'«»“”]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Extracts a structural fingerprint from question text to detect pseudo-duplicates
 * (e.g., questions that only change character names or numbers).
 */
export function getQuestionFingerprint(text: string): string {
  const normalized = normalizeText(text);
  const words = normalized.split(' ');
  const coreWords: string[] = [];

  for (const w of words) {
    // Strip pure digits
    if (/^\d+$/.test(w)) continue;
    // Strip common character names
    if (COMMON_NAMES.has(w)) continue;
    // Strip common question words
    if (STOP_WORDS.has(w)) continue;
    if (w.length > 1) {
      coreWords.push(w);
    }
  }

  return coreWords.sort().join(' ');
}

/**
 * Calculates Token Jaccard Similarity between two texts.
 */
export function tokenSimilarity(text1: string, text2: string): number {
  const set1 = new Set(normalizeText(text1).split(' ').filter(w => w.length > 1));
  const set2 = new Set(normalizeText(text2).split(' ').filter(w => w.length > 1));

  if (set1.size === 0 || set2.size === 0) return 0;

  let intersection = 0;
  for (const w of set1) {
    if (set2.has(w)) intersection++;
  }

  const union = set1.size + set2.size - intersection;
  return union > 0 ? intersection / union : 0;
}

/**
 * Checks whether two questions are identical or near-duplicates.
 */
export function isDuplicateOrNearDuplicate(q1: Question, q2: Question): boolean {
  // 1. Same ID
  if (q1.id === q2.id) return true;

  const norm1 = normalizeText(q1.questionText);
  const norm2 = normalizeText(q2.questionText);

  // 2. Identical normalized question text
  if (norm1 === norm2) return true;

  // 3. Same structural fingerprint and high token similarity (> 0.8)
  const fp1 = getQuestionFingerprint(q1.questionText);
  const fp2 = getQuestionFingerprint(q2.questionText);

  if (fp1.length > 10 && fp1 === fp2) {
    return true;
  }

  if (tokenSimilarity(q1.questionText, q2.questionText) > 0.85) {
    return true;
  }

  return false;
}

/**
 * Selects N unique, non-repeating questions from candidate pool.
 * Automatically discards duplicates and near-duplicates.
 */
export function selectUniqueQuestions(
  pool: Question[],
  targetCount: number,
  existingQuestions: Question[] = []
): Question[] {
  const selected: Question[] = [];
  const selectedTexts = new Set<string>(existingQuestions.map(q => normalizeText(q.questionText)));
  const selectedFingerprints = new Set<string>(existingQuestions.map(q => getQuestionFingerprint(q.questionText)));
  const selectedIds = new Set<string>(existingQuestions.map(q => q.id));

  // Shuffle pool to ensure varied selection on every attempt
  const shuffledPool = [...pool].sort(() => Math.random() - 0.5);

  for (const q of shuffledPool) {
    if (selected.length >= targetCount) break;

    // Check ID
    if (selectedIds.has(q.id)) continue;

    const norm = normalizeText(q.questionText);
    if (selectedTexts.has(norm)) continue;

    const fp = getQuestionFingerprint(q.questionText);
    if (fp.length > 10 && selectedFingerprints.has(fp)) continue;

    // Check pairwise similarity against already selected
    let tooSimilar = false;
    for (const existing of [...existingQuestions, ...selected]) {
      if (isDuplicateOrNearDuplicate(q, existing)) {
        tooSimilar = true;
        break;
      }
    }

    if (!tooSimilar) {
      selected.push(q);
      selectedIds.add(q.id);
      selectedTexts.add(norm);
      if (fp.length > 10) selectedFingerprints.add(fp);
    }
  }

  return selected;
}
