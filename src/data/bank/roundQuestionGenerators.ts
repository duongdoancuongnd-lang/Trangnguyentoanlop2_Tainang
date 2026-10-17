import { Question } from '../../types/quiz';
import { LEVEL2_QUESTION_BANK } from './level2Bank';
import { LEVEL3_QUESTION_BANK } from './level3Bank';
import { SEMESTER_1_BANK } from './semester1Questions';
import { SEMESTER_2_BANK } from './semester2Questions';
import { selectUniqueQuestions } from '../deduplication';

// Helper to make multiple choice with 4 unique options
export function makeMCOptions(correct: string, wrongs: string[], unit?: string): string[] {
  const correctTrimmed = (correct || '').trim();
  const seen = new Set<string>([correctTrimmed]);
  const validWrongs: string[] = [];

  for (const w of wrongs) {
    const trimmed = (w || '').trim();
    if (trimmed && !seen.has(trimmed)) {
      seen.add(trimmed);
      validWrongs.push(trimmed);
    }
  }

  let counter = 1;
  const numVal = parseInt(correctTrimmed, 10);
  while (validWrongs.length < 3) {
    let candidate = '';
    if (!isNaN(numVal)) {
      const delta = (counter % 2 === 0 ? counter : -counter);
      const alt = numVal + delta >= 0 ? numVal + delta : numVal + counter + 5;
      candidate = unit ? `${alt} ${unit}` : `${alt}`;
    } else {
      candidate = `Phương án khác ${counter}`;
    }
    if (!seen.has(candidate)) {
      seen.add(candidate);
      validWrongs.push(candidate);
    }
    counter++;
  }

  return [correctTrimmed, ...validWrongs.slice(0, 3)];
}

/**
 * Returns all candidate pool questions applicable for a given round.
 * Combines general bank questions matching round topics and prerequisites.
 */
export function getCandidatePoolForRound(roundNum: number, level: 2 | 3): Question[] {
  const allBank = [
    ...LEVEL2_QUESTION_BANK,
    ...LEVEL3_QUESTION_BANK,
    ...SEMESTER_1_BANK,
    ...SEMESTER_2_BANK
  ];

  // Filter bank questions by matching level and relevant round span
  // Round N can draw from topics up to round N (for cumulative mastery)
  // giving top priority to questions with roundNumber === roundNum
  const directMatches = allBank.filter(q => q.level === level && q.roundNumber === roundNum);
  
  // Also include prerequisite questions from earlier rounds within same semester
  const semesterStart = roundNum <= 18 ? 1 : 19;
  const relatedMatches = allBank.filter(
    q => q.level === level && q.roundNumber >= semesterStart && q.roundNumber <= roundNum && q.roundNumber !== roundNum
  );

  return [...directMatches, ...relatedMatches];
}

/**
 * Builds the complete 30 questions for a round:
 * - 15 Level 1 questions (Unique, pedagogically tailored)
 * - 10 Level 2 questions (Sampled randomly from diverse pool via Deduplication Engine)
 * - 5 Level 3 questions (Sampled randomly from high-order reasoning pool via Deduplication Engine)
 */
export function assembleRoundQuestions(
  roundNum: number,
  level1Generator: (round: number, qNum: number) => Question,
  roundSpecificL2: Question[],
  roundSpecificL3: Question[]
): Question[] {
  // 1. Generate 15 distinct Level 1 questions
  const l1Questions: Question[] = [];
  for (let i = 1; i <= 15; i++) {
    const q = level1Generator(roundNum, i);
    q.questionNumber = i;
    l1Questions.push(q);
  }

  // 2. Build candidate pool for Level 2
  const poolL2 = [
    ...roundSpecificL2,
    ...getCandidatePoolForRound(roundNum, 2)
  ];

  // Select 10 unique Level 2 questions avoiding any duplicates with L1
  const selectedL2 = selectUniqueQuestions(poolL2, 10, l1Questions);

  // If pool was smaller than 10, supplement with extra distinct variations
  while (selectedL2.length < 10) {
    const fallbackIdx = selectedL2.length + 16;
    const fallbackQ: Question = {
      id: `r${roundNum}_l2_extra_${fallbackIdx}`,
      roundNumber: roundNum,
      questionNumber: fallbackIdx,
      level: 2,
      points: 10,
      type: 'multiple_choice',
      questionText: `[Luyện tập Vòng ${roundNum}] Tính giá trị thích hợp: ${roundNum * 2 + selectedL2.length * 3} + ${15 + selectedL2.length} = ?`,
      options: makeMCOptions(
        `${roundNum * 2 + selectedL2.length * 3 + 15 + selectedL2.length}`,
        [`${roundNum * 2 + selectedL2.length * 3 + 15 + selectedL2.length + 2}`, `${roundNum * 2 + selectedL2.length * 3 + 15 + selectedL2.length - 2}`, `${roundNum * 2 + selectedL2.length * 3 + 15 + selectedL2.length + 10}`]
      ),
      correctAnswer: `${roundNum * 2 + selectedL2.length * 3 + 15 + selectedL2.length}`,
      explanation: `Thực hiện phép tính: ${roundNum * 2 + selectedL2.length * 3} + ${15 + selectedL2.length} = ${roundNum * 2 + selectedL2.length * 3 + 15 + selectedL2.length}.`
    };
    selectedL2.push(fallbackQ);
  }

  // Assign question numbers 16 to 25 for Level 2
  selectedL2.forEach((q, idx) => {
    q.questionNumber = idx + 16;
  });

  // 3. Build candidate pool for Level 3
  const poolL3 = [
    ...roundSpecificL3,
    ...getCandidatePoolForRound(roundNum, 3)
  ];

  // Select 5 unique Level 3 questions avoiding any duplicates with L1 and L2
  const selectedL3 = selectUniqueQuestions(poolL3, 5, [...l1Questions, ...selectedL2]);

  // If pool was smaller than 5, supplement with extra distinct problem
  while (selectedL3.length < 5) {
    const fallbackIdx = selectedL3.length + 26;
    const fallbackQ: Question = {
      id: `r${roundNum}_l3_extra_${fallbackIdx}`,
      roundNumber: roundNum,
      questionNumber: fallbackIdx,
      level: 3,
      points: 10,
      type: 'multiple_choice',
      questionText: `[Tư duy Vòng ${roundNum}] Tìm một số biết rằng nếu lấy số đó cộng với ${10 + selectedL3.length * 5} rồi trừ đi ${5 + selectedL3.length} thì được kết quả là 50:`,
      options: makeMCOptions(
        `${50 + (5 + selectedL3.length) - (10 + selectedL3.length * 5)}`,
        [`${50 + (5 + selectedL3.length) - (10 + selectedL3.length * 5) + 5}`, `${50 + (5 + selectedL3.length) - (10 + selectedL3.length * 5) - 5}`, `${50 + (5 + selectedL3.length) - (10 + selectedL3.length * 5) + 10}`]
      ),
      correctAnswer: `${50 + (5 + selectedL3.length) - (10 + selectedL3.length * 5)}`,
      explanation: `Thực hiện tính ngược: 50 + ${5 + selectedL3.length} - ${10 + selectedL3.length * 5} = ${50 + (5 + selectedL3.length) - (10 + selectedL3.length * 5)}.`
    };
    selectedL3.push(fallbackQ);
  }

  // Assign question numbers 26 to 30 for Level 3
  selectedL3.forEach((q, idx) => {
    q.questionNumber = idx + 26;
  });

  return [...l1Questions, ...selectedL2, ...selectedL3];
}
