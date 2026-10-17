import { Question, QuestionLevel } from '../types/quiz';
import { ROUNDS_METADATA } from './roundsMetadata';
import { selectUniqueQuestions } from './deduplication';
import { generateDistinctLevel1Questions } from './bank/level1Generators';
import { getRoundSpecificQuestions } from './bank/roundPools';
import { getCandidatePoolForRound } from './bank/roundQuestionGenerators';

// Helper to shuffle or select deterministically based on seed
function pseudoRandom(seed: number) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

/**
 * Fisher-Yates array shuffle
 */
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Shuffles options of a single question and updates correctIndex.
 * Guarantees that q.options[q.correctIndex] === q.correctAnswer.
 * Supports:
 * - string[] options
 * - options with { text, correct }
 * - correctAnswer as text OR numeric index (0, 1, 2, 3)
 * - targetPosition (0: A, 1: B, 2: C, 3: D)
 */
export function shuffleQuestionOptions(q: Question, targetPosition?: number): Question {
  // Only multiple choice questions with options should be shuffled
  if (q.type !== 'multiple_choice' || !q.options || q.options.length < 2) {
    return q;
  }

  // 1. Determine which option is the correct one
  let actualCorrect = '';
  const rawOptions = q.options as any[];

  // Check if options are objects with { text, correct }
  const objectCorrectIdx = rawOptions.findIndex(o => typeof o === 'object' && o !== null && (o.correct === true || o.isCorrect === true));
  if (objectCorrectIdx !== -1) {
    actualCorrect = String(rawOptions[objectCorrectIdx].text ?? rawOptions[objectCorrectIdx].label ?? '').trim();
  } else if (typeof q.correctIndex === 'number' && q.correctIndex >= 0 && q.correctIndex < rawOptions.length) {
    const item = rawOptions[q.correctIndex];
    actualCorrect = String(typeof item === 'object' && item !== null ? (item.text ?? item.label) : item).trim();
  } else if (typeof (q as any).correctAnswer === 'number' && (q as any).correctAnswer >= 0 && (q as any).correctAnswer < rawOptions.length) {
    const item = rawOptions[(q as any).correctAnswer];
    actualCorrect = String(typeof item === 'object' && item !== null ? (item.text ?? item.label) : item).trim();
  } else if (typeof q.correctAnswer === 'string') {
    const rawTrimmed = q.correctAnswer.trim();
    // Normalize string options
    const strOptions = rawOptions.map(o => String(typeof o === 'object' && o !== null ? (o.text ?? o.label) : o).trim());
    const foundIdx = strOptions.findIndex(opt => opt === rawTrimmed);
    if (foundIdx !== -1) {
      actualCorrect = strOptions[foundIdx];
    } else {
      // Check if correctAnswer is index string like "0", "1", "2", "3"
      const parsedNum = parseInt(rawTrimmed, 10);
      if (!isNaN(parsedNum) && parsedNum >= 0 && parsedNum < strOptions.length && !rawTrimmed.includes(' ')) {
        actualCorrect = strOptions[parsedNum];
      } else {
        // Fallback: search partial match
        const partialIdx = strOptions.findIndex(opt => opt.includes(rawTrimmed) || rawTrimmed.includes(opt));
        if (partialIdx !== -1) {
          actualCorrect = strOptions[partialIdx];
        } else {
          actualCorrect = strOptions[0];
        }
      }
    }
  } else {
    const item = rawOptions[0];
    actualCorrect = String(typeof item === 'object' && item !== null ? (item.text ?? item.label) : item).trim();
  }

  // 2. Extract distinct wrong options
  const strOptions = rawOptions.map(o => String(typeof o === 'object' && o !== null ? (o.text ?? o.label) : o).trim());
  const seen = new Set<string>([actualCorrect]);
  const wrongOptions: string[] = [];

  for (const opt of strOptions) {
    if (opt && !seen.has(opt)) {
      seen.add(opt);
      wrongOptions.push(opt);
    }
  }

  // 3. Ensure we have at least 3 distinct wrong options to form 4 options in total
  let fallbackCounter = 1;
  const numVal = parseInt(actualCorrect, 10);
  while (wrongOptions.length < 3) {
    let candidate = '';
    if (!isNaN(numVal)) {
      const delta = fallbackCounter % 2 === 0 ? fallbackCounter : -fallbackCounter;
      const alt = numVal + delta >= 0 ? numVal + delta : numVal + fallbackCounter + 5;
      candidate = q.unit ? `${alt} ${q.unit}` : `${alt}`;
    } else {
      candidate = `Phương án ${fallbackCounter}`;
    }
    if (!seen.has(candidate)) {
      seen.add(candidate);
      wrongOptions.push(candidate);
    }
    fallbackCounter++;
  }

  // 4. Shuffle the wrong options
  const shuffledWrongs = shuffleArray(wrongOptions);

  // 5. Determine target position: 0 (A), 1 (B), 2 (C), or 3 (D)
  const finalTargetPos = typeof targetPosition === 'number' && targetPosition >= 0 && targetPosition < 4
    ? targetPosition
    : Math.floor(Math.random() * 4);

  // 6. Build final 4 options array with actualCorrect at finalTargetPos
  const newOptions: string[] = [];
  let wrongIdx = 0;
  for (let i = 0; i < 4; i++) {
    if (i === finalTargetPos) {
      newOptions.push(actualCorrect);
    } else {
      newOptions.push(shuffledWrongs[wrongIdx++] || `Phương án ${i + 1}`);
    }
  }

  return {
    ...q,
    options: newOptions,
    correctAnswer: actualCorrect,
    correctIndex: finalTargetPos,
  };
}

/**
 * Shuffles all multiple-choice questions in a round:
 * 1. Correct answers randomly distributed across A, B, C, D
 * 2. Positions evenly balanced (~7-8 for each of A, B, C, D in a 30-question set)
 * 3. No repeating cyclical pattern (no A -> B -> C -> D -> A...)
 * 4. No 3 consecutive questions have the exact same correct option
 * 5. Every new playthrough generates a fresh permutation
 */
export function shuffleRoundQuestions(questions: Question[]): Question[] {
  // Find indices of all multiple-choice questions that have options
  const mcIndices: number[] = [];
  questions.forEach((q, idx) => {
    if (q.type === 'multiple_choice' && q.options && q.options.length >= 2) {
      mcIndices.push(idx);
    }
  });

  const totalMC = mcIndices.length;
  if (totalMC === 0) return questions.map(q => ({ ...q }));

  // Distribute target positions (0: A, 1: B, 2: C, 3: D) as evenly as possible
  const baseCount = Math.floor(totalMC / 4);
  const remainder = totalMC % 4;

  const counts = [baseCount, baseCount, baseCount, baseCount];
  // Randomly assign remainder to different letters so position 0 is not favored
  const bonusPositions = shuffleArray([0, 1, 2, 3]);
  for (let r = 0; r < remainder; r++) {
    counts[bonusPositions[r]]++;
  }

  // Create array of target positions
  let targetPositions: number[] = [];
  for (let pos = 0; pos < 4; pos++) {
    for (let c = 0; c < counts[pos]; c++) {
      targetPositions.push(pos);
    }
  }

  // Shuffle target positions using Fisher-Yates
  targetPositions = shuffleArray(targetPositions);

  // Prevent 3 consecutive identical positions
  for (let i = 2; i < targetPositions.length; i++) {
    if (targetPositions[i] === targetPositions[i - 1] && targetPositions[i] === targetPositions[i - 2]) {
      for (let j = i + 1; j < targetPositions.length; j++) {
        if (targetPositions[j] !== targetPositions[i]) {
          [targetPositions[i], targetPositions[j]] = [targetPositions[j], targetPositions[i]];
          break;
        }
      }
    }
  }

  // Break any cyclical pattern (0, 1, 2, 3, 0, 1, 2, 3)
  for (let i = 0; i < targetPositions.length - 3; i++) {
    if (
      targetPositions[i] === 0 &&
      targetPositions[i + 1] === 1 &&
      targetPositions[i + 2] === 2 &&
      targetPositions[i + 3] === 3
    ) {
      [targetPositions[i + 1], targetPositions[i + 2]] = [targetPositions[i + 2], targetPositions[i + 1]];
    }
  }

  const result = questions.map(q => ({ ...q }));
  mcIndices.forEach((qIdx, i) => {
    result[qIdx] = shuffleQuestionOptions(result[qIdx], targetPositions[i]);
  });

  return result;
}

// Generate the 30 questions for a given round number (1 to 35) with randomized balanced options
export function getQuestionsForRound(roundNum: number): Question[] {
  // 1. Generate 15 distinct Level 1 questions (no internal repetition)
  const l1Questions = generateDistinctLevel1Questions(roundNum);

  // 2. Build candidate pool for Level 2 (10 questions)
  const roundSpecific = getRoundSpecificQuestions(roundNum);
  const poolL2 = [
    ...roundSpecific.level2,
    ...getCandidatePoolForRound(roundNum, 2)
  ];

  // Select 10 unique, non-repeating Level 2 questions (excluding L1)
  const selectedL2 = selectUniqueQuestions(poolL2, 10, l1Questions);

  // Fallback protection if pool needs padding
  while (selectedL2.length < 10) {
    const idx = selectedL2.length + 16;
    const a = 20 + roundNum * 2 + idx;
    const b = 15 + idx;
    const sum = a + b;
    selectedL2.push({
      id: `r${roundNum}_l2_dyn_${idx}`,
      roundNumber: roundNum,
      questionNumber: idx,
      level: 2,
      points: 10,
      type: 'multiple_choice',
      questionText: `Tính nhanh giá trị: ${a} + ${b} = ?`,
      options: makeMCOptions(`${sum}`, [`${sum + 2}`, `${sum - 2}`, `${sum + 10}`]),
      correctAnswer: `${sum}`,
      explanation: `Thực hiện phép tính: ${a} + ${b} = ${sum}.`
    });
  }

  // Renumber Level 2 questions to 16-25
  selectedL2.forEach((q, i) => {
    q.questionNumber = i + 16;
  });

  // 3. Build candidate pool for Level 3 (5 questions)
  const poolL3 = [
    ...roundSpecific.level3,
    ...getCandidatePoolForRound(roundNum, 3)
  ];

  // Select 5 unique, non-repeating Level 3 questions (excluding L1 and L2)
  const selectedL3 = selectUniqueQuestions(poolL3, 5, [...l1Questions, ...selectedL2]);

  // Fallback protection if pool needs padding
  while (selectedL3.length < 5) {
    const idx = selectedL3.length + 26;
    const n = 10 + roundNum + idx;
    selectedL3.push({
      id: `r${roundNum}_l3_dyn_${idx}`,
      roundNumber: roundNum,
      questionNumber: idx,
      level: 3,
      points: 10,
      type: 'multiple_choice',
      questionText: `Tìm một số biết rằng nếu lấy số đó cộng với ${n} rồi trừ đi 5 thì được 40:`,
      options: makeMCOptions(`${40 + 5 - n}`, [`${40 + 5 - n + 5}`, `${40 + 5 - n - 5}`, `${40 - n}`]),
      correctAnswer: `${40 + 5 - n}`,
      explanation: `Tính ngược từ cuối: 40 + 5 - ${n} = ${40 + 5 - n}.`
    });
  }

  // Renumber Level 3 questions to 26-30
  selectedL3.forEach((q, i) => {
    q.questionNumber = i + 26;
  });

  const fullSet = [...l1Questions, ...selectedL2, ...selectedL3];
  return shuffleRoundQuestions(fullSet);
}

function generateQuestion(round: number, qNum: number, level: QuestionLevel): Question {
  const id = `r${round}_q${qNum}`;
  const seed = round * 100 + qNum * 7;

  // Branch by round topic categories
  // Semester 1 topics: Rounds 1 to 18
  // Semester 2 topics: Rounds 19 to 35

  if (round === 1) {
    return round1Question(id, round, qNum, level, seed);
  } else if (round === 2) {
    return round2Question(id, round, qNum, level, seed);
  } else if (round === 3) {
    return round3Question(id, round, qNum, level, seed);
  } else if (round === 4) {
    return round4Question(id, round, qNum, level, seed);
  } else if (round === 5 || round === 6) {
    return round5And6Question(id, round, qNum, level, seed);
  } else if (round === 7) {
    return round7Question(id, round, qNum, level, seed);
  } else if (round === 8) {
    return round8Question(id, round, qNum, level, seed);
  } else if (round === 9) {
    return round9Question(id, round, qNum, level, seed);
  } else if (round === 10 || round === 11) {
    return round10And11Question(id, round, qNum, level, seed);
  } else if (round === 12) {
    return round12Question(id, round, qNum, level, seed);
  } else if (round === 13) {
    return round13Question(id, round, qNum, level, seed);
  } else if (round === 14 || round === 15) {
    return round14And15Question(id, round, qNum, level, seed);
  } else if (round === 16 || round === 17) {
    return round16And17Question(id, round, qNum, level, seed);
  } else if (round === 18) {
    return round18SchoolExamQuestion(id, round, qNum, level, seed);
  } else if (round === 19 || round === 20) {
    return round19And20Question(id, round, qNum, level, seed);
  } else if (round === 21) {
    return round21Question(id, round, qNum, level, seed);
  } else if (round === 22 || round === 23) {
    return round22And23Question(id, round, qNum, level, seed);
  } else if (round === 24) {
    return round24Question(id, round, qNum, level, seed);
  } else if (round === 25) {
    return round25Question(id, round, qNum, level, seed);
  } else if (round === 26) {
    return round26Question(id, round, qNum, level, seed);
  } else if (round === 27 || round === 28) {
    return round27And28Question(id, round, qNum, level, seed);
  } else if (round === 29 || round === 30) {
    return round29And30Question(id, round, qNum, level, seed);
  } else if (round === 31 || round === 32) {
    return round31And32Question(id, round, qNum, level, seed);
  } else if (round === 33) {
    return round33Question(id, round, qNum, level, seed);
  } else if (round === 34) {
    return round34ProvinceExamQuestion(id, round, qNum, level, seed);
  } else {
    // Round 35 - Thi Đình Toàn Quốc
    return round35NationalExamQuestion(id, round, qNum, level, seed);
  }
}

// Helper to make multiple choice with 4 unique options
function makeMCOptions(correct: string, wrongs: string[], unit?: string): string[] {
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

// --- ROUND 1: CÁC SỐ ĐẾN 100, LIỀN TRƯỚC, LIỀN SAU, SO SÁNH ---
function round1Question(id: string, round: number, qNum: number, level: QuestionLevel, seed: number): Question {
  if (level === 1) {
    const num = 20 + ((qNum * 4 + 3) % 70);
    const type = qNum % 3;
    if (type === 0) {
      const ans = (num - 1).toString();
      return {
        id, roundNumber: round, questionNumber: qNum, level, points: 10,
        type: 'multiple_choice',
        questionText: `Số liền trước của số ${num} là số nào?`,
        options: makeMCOptions(ans, [(num + 1).toString(), (num - 2).toString(), (num + 2).toString()]),
        correctAnswer: ans,
        explanation: `Số liền trước của ${num} là số đứng ngay trước nó trên tia số: ${num} - 1 = ${ans}.`
      };
    } else if (type === 1) {
      const ans = (num + 1).toString();
      return {
        id, roundNumber: round, questionNumber: qNum, level, points: 10,
        type: 'multiple_choice',
        questionText: `Số liền sau của số ${num} là số nào?`,
        options: makeMCOptions(ans, [(num - 1).toString(), (num + 2).toString(), (num + 10).toString()]),
        correctAnswer: ans,
        explanation: `Số liền sau của ${num} là số đứng ngay sau nó trên tia số: ${num} + 1 = ${ans}.`
      };
    } else {
      const chuc = Math.floor(num / 10);
      const dvi = num % 10;
      const ans = `${chuc} chục và ${dvi} đơn vị`;
      return {
        id, roundNumber: round, questionNumber: qNum, level, points: 10,
        type: 'multiple_choice',
        questionText: `Số ${num} gồm mấy chục và mấy đơn vị?`,
        options: makeMCOptions(ans, [
          `${dvi} chục và ${chuc} đơn vị`,
          `${chuc} chục và 0 đơn vị`,
          `${chuc + 1} chục và ${dvi} đơn vị`,
          `${chuc} chục và ${(dvi + 3) % 10} đơn vị`,
          `${Math.max(1, chuc - 1)} chục và ${dvi} đơn vị`
        ]),
        correctAnswer: ans,
        explanation: `Số ${num} có chữ số hàng chục là ${chuc} và hàng đơn vị là ${dvi}, gồm ${chuc} chục và ${dvi} đơn vị.`
      };
    }
  } else if (level === 2) {
    const n1 = 30 + ((qNum * 6) % 50);
    const n2 = n1 + ((qNum % 2 === 0) ? 5 : -4);
    const ans = n1 > n2 ? '>' : '<';
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Điền dấu thích hợp vào chỗ chấm: ${n1} ... ${n2}`,
      options: ['<', '>', '=', 'Không so sánh được'],
      correctAnswer: ans,
      explanation: `So sánh hàng chục và đơn vị: ${n1} ${ans} ${n2}.`
    };
  } else {
    // Level 3
    if (qNum === 26) {
      return {
        id, roundNumber: round, questionNumber: qNum, level, points: 10,
        type: 'multiple_choice',
        questionText: `Từ ba chữ số 3; 0; 7 có thể lập được bao nhiêu số có hai chữ số khác nhau?`,
        options: ['4', '5', '6', '3'],
        correctAnswer: '4',
        explanation: `Chữ số hàng chục có 2 cách chọn (3 hoặc 7, chữ số 0 không thể đứng đầu). Chữ số hàng đơn vị có 2 cách chọn từ 2 chữ số còn lại. Các số lập được là: 30, 37, 70, 73. Vậy có tất cả 4 số.`
      };
    } else if (qNum === 27) {
      return {
        id, roundNumber: round, questionNumber: qNum, level, points: 10,
        type: 'multiple_choice',
        questionText: `Số tròn chục lớn nhất có hai chữ số mà tổng hai chữ số của nó bằng 9 là số nào?`,
        options: ['90', '81', '72', '99'],
        correctAnswer: '90',
        explanation: `Số tròn chục có chữ số tận cùng là 0. Chữ số hàng chục là 9 - 0 = 9. Vậy số đó là 90.`
      };
    } else if (qNum === 28) {
      return {
        id, roundNumber: round, questionNumber: qNum, level, points: 10,
        type: 'fill_blank',
        questionText: `Cho dãy số: 12, 15, 18, 21, ..., 30. Số thích hợp điền vào chỗ chấm là số nào?`,
        correctAnswer: '24',
        explanation: `Quy luật dãy số là mỗi số bằng số đứng trước cộng thêm 3: 21 + 3 = 24 (tiếp theo 24 + 3 = 27, 27 + 3 = 30).`
      };
    } else if (qNum === 29) {
      return {
        id, roundNumber: round, questionNumber: qNum, level, points: 10,
        type: 'multiple_choice',
        questionText: `Tổng của số lớn nhất có một chữ số và số bé nhất có hai chữ số giống nhau là:`,
        options: ['20', '21', '19', '22'],
        correctAnswer: '20',
        explanation: `Số lớn nhất có một chữ số là 9. Số bé nhất có hai chữ số giống nhau là 11. Tổng là 9 + 11 = 20.`
      };
    } else {
      return {
        id, roundNumber: round, questionNumber: qNum, level, points: 10,
        type: 'multiple_choice',
        questionText: `Năm nay An 7 tuổi, anh Bình 12 tuổi. Hỏi 5 năm nữa anh Bình hơn An bao nhiêu tuổi?`,
        options: ['5 tuổi', '10 tuổi', '12 tuổi', '7 tuổi'],
        correctAnswer: '5 tuổi',
        explanation: `Hiệu số tuổi của hai người không bao giờ thay đổi theo thời gian. Hiện nay anh Bình hơn An: 12 - 7 = 5 tuổi. Sau 5 năm nữa anh Bình vẫn hơn An 5 tuổi.`
      };
    }
  }
}

// --- ROUND 2: TIA SỐ & CỘNG KHÔNG NHỚ TRONG PHẠM VI 100 ---
function round2Question(id: string, round: number, qNum: number, level: QuestionLevel, seed: number): Question {
  if (level === 1) {
    const a = 20 + (qNum * 3) % 40;
    const b = 10 + (qNum * 2) % 30;
    const sum = a + b;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      visualType: qNum % 3 === 0 ? 'number_line' : 'none',
      visualData: { start: Math.floor(a / 10) * 10, end: Math.floor(a / 10) * 10 + 20, mark: a },
      questionText: `Kết quả của phép tính ${a} + ${b} là:`,
      options: makeMCOptions(sum.toString(), [(sum + 10).toString(), (sum - 10).toString(), (sum + 1).toString()]),
      correctAnswer: sum.toString(),
      explanation: `${a} + ${b} = ${sum}.`
    };
  } else if (level === 2) {
    const a = 15 + (qNum * 2);
    const b = 23;
    const x = a + b;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Tìm x biết: x - ${b} = ${a}`,
      options: makeMCOptions(x.toString(), [(x - 10).toString(), (x + 10).toString(), (a - b < 0 ? '8' : (a - b).toString())]),
      correctAnswer: x.toString(),
      explanation: `Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ: x = ${a} + ${b} = ${x}.`
    };
  } else {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Trên tia số, điểm A cách gốc 0 là 35 đơn vị, điểm B cách điểm A là 20 đơn vị về phía bên phải. Hỏi điểm B ứng với số nào?`,
      options: ['55', '15', '50', '65'],
      correctAnswer: '55',
      explanation: `Về phía bên phải là tăng thêm: 35 + 20 = 55.`
    };
  }
}

// --- ROUND 3: ĐIỂM, ĐOẠN THẲNG, BA ĐIỂM THẲNG HÀNG, ĐO ĐỘ DÀI ---
function round3Question(id: string, round: number, qNum: number, level: QuestionLevel, seed: number): Question {
  if (level === 1) {
    const len = 3 + (qNum % 9);
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      visualType: 'ruler',
      visualData: { lengthCm: len, objectName: 'Cây bút chì' },
      questionText: `Một cây bút chì đặt trên thước kẻ, đầu một bên ở vạch 0 cm, đầu kia ở vạch ${len} cm. Chiếc bút chì dài bao nhiêu xăng-ti-mét?`,
      options: makeMCOptions(`${len} cm`, [`${len + 1} cm`, `${len - 1} cm`, `${len + 2} cm`]),
      correctAnswer: `${len} cm`,
      unit: 'cm',
      explanation: `Độ dài chiếc bút chì bằng vạch kết thúc trừ vạch bắt đầu: ${len} - 0 = ${len} cm.`
    };
  } else if (level === 2) {
    const seg1 = 12 + (qNum % 5);
    const seg2 = 15;
    const total = seg1 + seg2;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Đoạn thẳng AB dài ${seg1} cm, đoạn thẳng BC dài ${seg2} cm. Ba điểm A, B, C thẳng hàng (B nằm giữa A và C). Hỏi đoạn thẳng AC dài bao nhiêu cm?`,
      options: makeMCOptions(`${total} cm`, [`${total - 2} cm`, `${total + 2} cm`, `${seg2 - seg1} cm`]),
      correctAnswer: `${total} cm`,
      unit: 'cm',
      explanation: `Vì B nằm giữa A và C nên AC = AB + BC = ${seg1} + ${seg2} = ${total} cm.`
    };
  } else {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      visualType: 'geo_shapes',
      visualData: { shape: 'line_segments', count: 6 },
      questionText: `Cho 4 điểm phân biệt A, B, C, D trong đó không có 3 điểm nào thẳng hàng. Nối từng cặp điểm lại với nhau thì được tất cả bao nhiêu đoạn thẳng?`,
      options: ['6', '4', '8', '5'],
      correctAnswer: '6',
      explanation: `Các đoạn thẳng tạo thành là: AB, AC, AD, BC, BD, CD. Vậy có tất cả 6 đoạn thẳng.`
    };
  }
}

// --- ROUND 4: ĐỀ-XI-MÉT (dm) & ƯỚC LƯỢNG ĐỘ DÀI ---
function round4Question(id: string, round: number, qNum: number, level: QuestionLevel, seed: number): Question {
  if (level === 1) {
    const dm = 2 + (qNum % 7);
    const cm = dm * 10;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `${dm} dm bằng bao nhiêu xăng-ti-mét (cm)?`,
      options: makeMCOptions(`${cm} cm`, [`${dm} cm`, `${cm + 5} cm`, `${dm * 100} cm`]),
      correctAnswer: `${cm} cm`,
      explanation: `Vì 1 dm = 10 cm nên ${dm} dm = ${dm} x 10 = ${cm} cm.`
    };
  } else if (level === 2) {
    const a = 3;
    const b = 25; // 3dm 5cm = 35cm
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Sợi dây thứ nhất dài 4 dm, sợi dây thứ hai dài 25 cm. Cả hai sợi dây dài tất cả bao nhiêu xăng-ti-mét?`,
      options: ['65 cm', '29 cm', '45 cm', '55 cm'],
      correctAnswer: '65 cm',
      explanation: `Đổi 4 dm = 40 cm. Cả hai sợi dây dài: 40 + 25 = 65 cm.`
    };
  } else {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Một gang tay của mẹ dài khoảng 2 dm. Cái bàn học dài khoảng 6 gang tay của mẹ. Hỏi cái bàn học dài khoảng bao nhiêu đề-xi-mét?`,
      options: ['12 dm', '8 dm', '10 dm', '14 dm'],
      correctAnswer: '12 dm',
      explanation: `Bàn học dài: 2 + 2 + 2 + 2 + 2 + 2 = 12 dm (hoặc 2 x 6 = 12 dm).`
    };
  }
}

// --- ROUND 5 & 6: PHÉP CỘNG CÓ NHỚ PHẠM VI 100 ---
function round5And6Question(id: string, round: number, qNum: number, level: QuestionLevel, seed: number): Question {
  if (level === 1) {
    const a = 28 + (qNum % 5) * 8;
    const b = 5 + (qNum % 4);
    const sum = a + b;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Tính: ${a} + ${b} = ?`,
      options: makeMCOptions(sum.toString(), [(sum - 1).toString(), (sum + 1).toString(), (sum - 10).toString()]),
      correctAnswer: sum.toString(),
      explanation: `Thực hiện cộng có nhớ: ${a} + ${b} = ${sum}.`
    };
  } else if (level === 2) {
    const a = 36 + (qNum % 7) * 4;
    const b = 27 + (qNum % 6);
    const sum = a + b;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Một cửa hàng buổi sáng bán được ${a} kg gạo, buổi chiều bán được ${b} kg gạo. Hỏi cả ngày cửa hàng bán được bao nhiêu ki-lô-gam gạo?`,
      options: makeMCOptions(`${sum} kg`, [`${sum - 10} kg`, `${sum + 2} kg`, `${sum - 2} kg`]),
      correctAnswer: `${sum} kg`,
      explanation: `Cả ngày cửa hàng bán được: ${a} + ${b} = ${sum} (kg gạo).`
    };
  } else {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Biết a + 18 = 45 và b + 27 = 52. So sánh a và b:`,
      options: ['a > b', 'a < b', 'a = b', 'Không so sánh được'],
      correctAnswer: 'a > b',
      explanation: `Ta có a = 45 - 18 = 27; b = 52 - 27 = 25. Vì 27 > 25 nên a > b.`
    };
  }
}

// --- ROUND 7: BÀI TOÁN NHIỀU HƠN, ÍT HƠN ---
function round7Question(id: string, round: number, qNum: number, level: QuestionLevel, seed: number): Question {
  if (level === 1) {
    const mai = 15 + (qNum % 8);
    const more = 6 + (qNum % 4);
    const hoa = mai + more;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Bạn Mai có ${mai} bông hoa. Bạn Hoa có nhiều hơn Mai ${more} bông hoa. Hỏi bạn Hoa có bao nhiêu bông hoa?`,
      options: makeMCOptions(`${hoa} bông hoa`, [`${mai - more} bông hoa`, `${hoa + 2} bông hoa`, `${hoa - 1} bông hoa`]),
      correctAnswer: `${hoa} bông hoa`,
      explanation: `Bài toán về nhiều hơn: Lấy số hoa của Mai cộng thêm ${more}: ${mai} + ${more} = ${hoa} (bông hoa).`
    };
  } else if (level === 2) {
    const ha = 28 + (qNum % 6);
    const less = 9;
    const linh = ha - less;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Lớp 2A có ${ha} học sinh. Lớp 2B có ít hơn lớp 2A là ${less} học sinh. Hỏi lớp 2B có bao nhiêu học sinh?`,
      options: makeMCOptions(`${linh} học sinh`, [`${ha + less} học sinh`, `${linh + 2} học sinh`, `${linh - 2} học sinh`]),
      correctAnswer: `${linh} học sinh`,
      explanation: `Bài toán về ít hơn: ${ha} - ${less} = ${linh} (học sinh).`
    };
  } else {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Hùng có 35 viên bi. Nếu Hùng cho Dũng 5 viên bi thì số bi của hai bạn bằng nhau. Hỏi lúc đầu Dũng có bao nhiêu viên bi?`,
      options: ['25 viên bi', '30 viên bi', '20 viên bi', '15 viên bi'],
      correctAnswer: '25 viên bi',
      explanation: `Khi Hùng cho Dũng 5 viên thì Hùng còn: 35 - 5 = 30 viên bi. Lúc này Dũng cũng có 30 viên bi. Vậy lúc đầu Dũng có: 30 - 5 = 25 viên bi.`
    };
  }
}

// --- ROUND 8: KI-LÔ-GAM (kg) & CÂN THĂNG BẰNG ---
function round8Question(id: string, round: number, qNum: number, level: QuestionLevel, seed: number): Question {
  if (level === 1) {
    const k1 = 12 + (qNum % 9);
    const k2 = 18;
    const sum = k1 + k2;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      visualType: 'balance_scale',
      visualData: { leftKg: sum, rightKg: sum, balanced: true },
      questionText: `Bao gạo thứ nhất nặng ${k1} kg, bao gạo thứ hai nặng ${k2} kg. Cả hai bao gạo nặng bao nhiêu ki-lô-gam?`,
      options: makeMCOptions(`${sum} kg`, [`${sum - 5} kg`, `${sum + 5} kg`, `${k2 - k1} kg`]),
      correctAnswer: `${sum} kg`,
      explanation: `Cả hai bao nặng: ${k1} + ${k2} = ${sum} kg.`
    };
  } else if (level === 2) {
    const quả_dưa = 4;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      visualType: 'balance_scale',
      visualData: { leftKg: 'Quả dưa hấu + 1kg', rightKg: '5kg', balanced: true },
      questionText: `Đĩa cân bên trái có quả dưa hấu và 1 quả cân 1 kg. Đĩa cân bên phải có quả cân 5 kg. Cân ở vị trí thăng bằng. Hỏi quả dưa hấu nặng bao nhiêu ki-lô-gam?`,
      options: ['4 kg', '6 kg', '5 kg', '3 kg'],
      correctAnswer: '4 kg',
      explanation: `Vì cân thăng bằng nên: Cân nặng dưa hấu + 1 kg = 5 kg. Quả dưa hấu nặng: 5 - 1 = 4 kg.`
    };
  } else {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Có một quả cân 2 kg và một chiếc cân đĩa. Làm thế nào để lấy được 6 kg gạo chỉ sau 2 lần cân?`,
      options: [
        'Lần 1 cân 2kg, lần 2 dùng 2kg gạo và quả cân 2kg để cân thêm 4kg',
        'Cân 3 lần, mỗi lần 2kg',
        'Không thể làm được',
        'Bỏ quả cân đi rồi chia đôi'
      ],
      correctAnswer: 'Lần 1 cân 2kg, lần 2 dùng 2kg gạo và quả cân 2kg để cân thêm 4kg',
      explanation: `Lần 1: Dùng quả cân 2kg cân được 2kg gạo. Lần 2: Đặt 2kg gạo vừa cân và quả cân 2kg lên 1 đĩa cân (tổng 4kg), đĩa kia đong gạo cho thăng bằng thì được thêm 4kg gạo. Tổng cộng 2 + 4 = 6kg sau đúng 2 lần cân.`
    };
  }
}

// --- ROUND 9: LÍT (l) & DUNG TÍCH THỰC TẾ ---
function round9Question(id: string, round: number, qNum: number, level: QuestionLevel, seed: number): Question {
  if (level === 1) {
    const l1 = 15 + (qNum % 10);
    const l2 = 8;
    const ans = l1 + l2;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      visualType: 'liters_pitcher',
      visualData: { capacity: ans, currentLiters: ans },
      questionText: `Thùng thứ nhất đựng ${l1} l nước mắm, thùng thứ hai đựng ${l2} l nước mắm. Cả hai thùng đựng tất cả bao nhiêu lít nước mắm?`,
      options: makeMCOptions(`${ans} l`, [`${ans - 3} l`, `${ans + 3} l`, `${l1 - l2} l`]),
      correctAnswer: `${ans} l`,
      explanation: `${l1} l + ${l2} l = ${ans} l.`
    };
  } else if (level === 2) {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Trong can có 20 l dầu. Bác Ba rót vào đầy một can 5 l và một can 3 l. Hỏi trong can còn lại bao nhiêu lít dầu?`,
      options: ['12 l', '15 l', '8 l', '10 l'],
      correctAnswer: '12 l',
      explanation: `Số dầu đã rót ra là: 5 + 3 = 8 l. Số dầu còn lại trong can là: 20 - 8 = 12 l.`
    };
  } else {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Có hai bình nước, bình A đựng nhiều hơn bình B là 6 lít. Nếu rót từ bình A sang bình B là 4 lít thì bình nào nhiều nước hơn và nhiều hơn bao nhiêu lít?`,
      options: [
        'Bình B nhiều hơn bình A là 2 lít',
        'Bình A nhiều hơn bình B là 2 lít',
        'Hai bình bằng nhau',
        'Bình B nhiều hơn bình A là 4 lít'
      ],
      correctAnswer: 'Bình B nhiều hơn bình A là 2 lít',
      explanation: `Giả sử ban đầu bình B có 10 l thì bình A có 16 l. Khi chuyển 4 l từ A sang B: bình A còn 16 - 4 = 12 l; bình B có 10 + 4 = 14 l. Vậy bình B nhiều hơn bình A: 14 - 12 = 2 l.`
    };
  }
}

// --- ROUND 10 & 11: PHÉP TRỪ CÓ NHỚ PHẠM VI 100 ---
function round10And11Question(id: string, round: number, qNum: number, level: QuestionLevel, seed: number): Question {
  if (level === 1) {
    const a = 42 + (qNum % 5) * 7;
    const b = 7 + (qNum % 3);
    const sub = a - b;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Tính: ${a} - ${b} = ?`,
      options: makeMCOptions(sub.toString(), [(sub + 2).toString(), (sub - 2).toString(), (sub + 10).toString()]),
      correctAnswer: sub.toString(),
      explanation: `Thực hiện phép trừ có nhớ: ${a} - ${b} = ${sub}.`
    };
  } else if (level === 2) {
    const a = 63 + (qNum % 4) * 5;
    const b = 28 + (qNum % 3);
    const sub = a - b;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Vườn nhà bà có ${a} cây bưởi. Bà đã bán đi ${b} cây. Hỏi vườn nhà bà còn lại bao nhiêu cây bưởi?`,
      options: makeMCOptions(`${sub} cây`, [`${sub + 10} cây`, `${sub - 2} cây`, `${sub + 2} cây`]),
      correctAnswer: `${sub} cây`,
      explanation: `Số cây bưởi còn lại là: ${a} - ${b} = ${sub} cây.`
    };
  } else {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Hiệu của hai số là 38. Nếu số bị trừ bớt đi 5 đơn vị và giữ nguyên số trừ thì hiệu mới là bao nhiêu?`,
      options: ['33', '43', '38', '28'],
      correctAnswer: '33',
      explanation: `Khi số bị trừ bớt đi bao nhiêu đơn vị thì hiệu cũng giảm đi bấy nhiêu đơn vị. Hiệu mới là: 38 - 5 = 33.`
    };
  }
}

// --- ROUND 12: ĐƯỜNG CONG, ĐƯỜNG GẤP KHÚC & TÍNH ĐỘ DÀI ---
function round12Question(id: string, round: number, qNum: number, level: QuestionLevel, seed: number): Question {
  if (level === 1) {
    const d1 = 10 + (qNum % 4);
    const d2 = 12;
    const d3 = 8;
    const total = d1 + d2 + d3;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      visualType: 'geo_shapes',
      visualData: { shape: 'broken_line', segments: [d1, d2, d3] },
      questionText: `Đường gấp khúc ABCD gồm 3 đoạn thẳng có độ dài lần lượt là: AB = ${d1} cm, BC = ${d2} cm, CD = ${d3} cm. Độ dài đường gấp khúc ABCD là:`,
      options: makeMCOptions(`${total} cm`, [`${total - 4} cm`, `${total + 4} cm`, `${d1 + d2} cm`]),
      correctAnswer: `${total} cm`,
      explanation: `Độ dài đường gấp khúc ABCD bằng tổng độ dài các đoạn thẳng: ${d1} + ${d2} + ${d3} = ${total} cm.`
    };
  } else if (level === 2) {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Một đường gấp khúc gồm 4 đoạn thẳng có độ dài bằng nhau, mỗi đoạn dài 5 cm. Hỏi đường gấp khúc đó dài bao nhiêu xăng-ti-mét?`,
      options: ['20 cm', '15 cm', '25 cm', '16 cm'],
      correctAnswer: '20 cm',
      explanation: `Độ dài đường gấp khúc là: 5 + 5 + 5 + 5 = 20 cm.`
    };
  } else {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Một đường gấp khúc dài 45 cm gồm hai đoạn thẳng. Biết đoạn thứ nhất dài hơn đoạn thứ hai là 5 cm. Độ dài đoạn thẳng thứ nhất là:`,
      options: ['25 cm', '20 cm', '30 cm', '15 cm'],
      correctAnswer: '25 cm',
      explanation: `Đoạn thứ hai dài: (45 - 5) : 2 = 20 cm. Đoạn thứ nhất dài: 20 + 5 = 25 cm. (Kiểm tra lại: 25 + 20 = 45 cm, 25 - 20 = 5 cm).`
    };
  }
}

// --- ROUND 13: LỊCH TỜ & NGÀY TRONG TUẦN, NGÀY TRONG THÁNG ---
function round13Question(id: string, round: number, qNum: number, level: QuestionLevel, seed: number): Question {
  if (level === 1) {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Một tuần lễ có bao nhiêu ngày?`,
      options: ['7 ngày', '5 ngày', '6 ngày', '8 ngày'],
      correctAnswer: '7 ngày',
      explanation: `Một tuần lễ có đúng 7 ngày: Thứ Hai, Thứ Ba, Thứ Tư, Thứ Năm, Thứ Sáu, Thứ Bảy, Chủ Nhật.`
    };
  } else if (level === 2) {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Nếu ngày hôm nay là Thứ Năm, ngày 10 thì Thứ Năm tuần sau sẽ là ngày bao nhiêu?`,
      options: ['Ngày 17', 'Ngày 16', 'Ngày 18', 'Ngày 15'],
      correctAnswer: 'Ngày 17',
      explanation: `Một tuần lễ có 7 ngày. Thứ Năm tuần sau sẽ là: 10 + 7 = 17.`
    };
  } else {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Nếu ngày 3 của một tháng là ngày Thứ Hai thì trong tháng đó có bao nhiêu ngày Thứ Hai?`,
      options: ['5 ngày', '4 ngày', '3 ngày', '6 ngày'],
      correctAnswer: '5 ngày',
      explanation: `Các ngày Thứ Hai trong tháng đó là: ngày 3, ngày 10 (3+7), ngày 17 (10+7), ngày 24 (17+7), ngày 31 (24+7). Vậy tháng đó có tất cả 5 ngày Thứ Hai.`
    };
  }
}

// --- ROUND 14 & 15: GIỜ - PHÚT, XEM ĐỒNG HỒ & THỜI GIAN TRONG NGÀY ---
function round14And15Question(id: string, round: number, qNum: number, level: QuestionLevel, seed: number): Question {
  if (level === 1) {
    const hour = (qNum % 12) + 1;
    const isHalf = qNum % 2 === 1;
    const ans = isHalf ? `${hour} giờ 30 phút` : `${hour} giờ đúng`;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      visualType: 'clock',
      visualData: { hour, minute: isHalf ? 30 : 0 },
      questionText: `Quan sát đồng hồ kim, kim ngắn chỉ vào ${isHalf ? `giữa số ${hour} và ${hour === 12 ? 1 : hour + 1}` : `số ${hour}`}, kim dài chỉ vào số ${isHalf ? '6' : '12'}. Đồng hồ chỉ mấy giờ?`,
      options: makeMCOptions(ans, [
        `${hour} giờ`,
        `${hour === 12 ? 1 : hour + 1} giờ 30 phút`,
        `${hour} giờ 15 phút`
      ]),
      correctAnswer: ans,
      explanation: `Kim ngắn chỉ giờ, kim dài chỉ số 12 là đúng giờ, chỉ số 6 là 30 phút (giờ rưỡi).`
    };
  } else if (level === 2) {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Buổi chiều, Mai bắt đầu học bài lúc 14 giờ và hoàn thành bài tập lúc 16 giờ. Hỏi bạn Mai đã học bài trong bao nhiêu giờ?`,
      options: ['2 giờ', '3 giờ', '1 giờ', '4 giờ'],
      correctAnswer: '2 giờ',
      explanation: `Thời gian Mai học bài là: 16 - 14 = 2 (giờ).`
    };
  } else {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Một trận bóng đá mini của các bạn học sinh bắt đầu lúc 16 giờ 30 phút và kết thúc lúc 17 giờ 30 phút. Hỏi trận bóng diễn ra trong bao lâu?`,
      options: ['1 giờ', '2 giờ', '30 phút', '60 ngày'],
      correctAnswer: '1 giờ',
      explanation: `Từ 16 giờ 30 phút đến 17 giờ 30 phút là tròn 1 giờ (tức 60 phút).`
    };
  }
}

// --- ROUND 16 & 17: ÔN TẬP TỔNG HỢP KÌ 1 ---
function round16And17Question(id: string, round: number, qNum: number, level: QuestionLevel, seed: number): Question {
  if (level === 1) {
    const a = 34 + (qNum % 4) * 8;
    const b = 19 + (qNum % 5);
    const sum = a + b;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Tính giá trị của biểu thức: ${a} + ${b} = ?`,
      options: makeMCOptions(sum.toString(), [(sum + 1).toString(), (sum - 1).toString(), (sum + 10).toString()]),
      correctAnswer: sum.toString(),
      explanation: `Cộng từ hàng đơn vị sang hàng chục: ${a} + ${b} = ${sum}.`
    };
  } else if (level === 2) {
    const x = 25;
    const res = 72;
    const hidden = res - x;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Tìm y biết: y + ${x} = ${res}`,
      options: makeMCOptions(hidden.toString(), [(hidden - 10).toString(), (hidden + 10).toString(), (hidden + 2).toString()]),
      correctAnswer: hidden.toString(),
      explanation: `Muốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết: y = ${res} - ${x} = ${hidden}.`
    };
  } else {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Hình bên có bao nhiêu hình tứ giác? (Hình vẽ gồm 1 hình chữ nhật lớn được chia làm 2 hình chữ nhật nhỏ bởi 1 đoạn thẳng đứng)`,
      visualType: 'geo_shapes',
      visualData: { shape: 'rectangles_split', count: 3 },
      options: ['3', '2', '4', '1'],
      correctAnswer: '3',
      explanation: `Gồm có: 2 hình chữ nhật đơn nhỏ và 1 hình chữ nhật kép lớn ghép bởi hai hình đó. Tổng cộng có 3 hình tứ giác.`
    };
  }
}

// --- ROUND 18: THI SƠ KHẢO CẤP TRƯỜNG (KÌ 1) ---
function round18SchoolExamQuestion(id: string, round: number, qNum: number, level: QuestionLevel, seed: number): Question {
  if (level === 1) {
    const list = [
      { q: "Số tròn chục liền sau của số 45 là số nào?", a: "50", o: ["50", "40", "46", "60"] },
      { q: "1 dm 8 cm bằng bao nhiêu xăng-ti-mét?", a: "18 cm", o: ["18 cm", "81 cm", "9 cm", "28 cm"] },
      { q: "Số bé nhất có hai chữ số là số nào?", a: "10", o: ["10", "11", "01", "00"] },
      { q: "Kết quả của phép tính 56 + 27 là:", a: "83", o: ["83", "73", "84", "82"] },
      { q: "Kết quả của phép tính 70 - 24 là:", a: "46", o: ["46", "56", "44", "54"] },
    ];
    const item = list[(qNum - 1) % list.length];
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: item.q,
      options: item.o,
      correctAnswer: item.a,
      explanation: `Đáp án chính xác là: ${item.a}.`
    };
  } else if (level === 2) {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Bình có 28 viên bi đỏ và 19 viên bi xanh. Bình cho bạn Nam 15 viên bi. Hỏi Bình còn lại bao nhiêu viên bi?`,
      options: ['32 viên bi', '47 viên bi', '34 viên bi', '22 viên bi'],
      correctAnswer: '32 viên bi',
      explanation: `Tổng số bi Bình có lúc đầu: 28 + 19 = 47 viên bi. Số bi Bình còn lại: 47 - 15 = 32 viên bi.`
    };
  } else {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Hai số có tổng bằng 56, nếu thêm vào số thứ nhất 8 đơn vị và giữ nguyên số thứ hai thì tổng mới là bao nhiêu?`,
      options: ['64', '48', '56', '72'],
      correctAnswer: '64',
      explanation: `Khi thêm vào một số hạng bao nhiêu đơn vị thì tổng tăng thêm bấy nhiêu đơn vị. Tổng mới: 56 + 8 = 64.`
    };
  }
}

// --- ROUND 19 & 20: LÀM QUEN PHÉP NHÂN & BẢNG NHÂN 2 ---
function round19And20Question(id: string, round: number, qNum: number, level: QuestionLevel, seed: number): Question {
  if (level === 1) {
    const factor = (qNum % 10) + 1;
    const res = 2 * factor;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Tính nhẩm: 2 x ${factor} = ?`,
      options: makeMCOptions(res.toString(), [(res + 2).toString(), (res - 2 < 0 ? '1' : (res - 2).toString()), (res + 4).toString()]),
      correctAnswer: res.toString(),
      explanation: `Theo bảng nhân 2: 2 x ${factor} = ${res}.`
    };
  } else if (level === 2) {
    const count = 4 + (qNum % 6);
    const ans = 2 * count;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Có ${count} con gà. Hỏi ${count} con gà có tất cả bao nhiêu cái chân?`,
      options: makeMCOptions(`${ans} cái chân`, [`${ans - 2} cái chân`, `${ans + 2} cái chân`, `${count} cái chân`]),
      correctAnswer: `${ans} cái chân`,
      explanation: `Mỗi con gà có 2 cái chân. Vậy ${count} con gà có: 2 x ${count} = ${ans} cái chân.`
    };
  } else {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Một đôi đũa có 2 chiếc đũa. Hỏi 9 đôi đũa và thêm 3 chiếc đũa nữa thì có tất cả bao nhiêu chiếc đũa?`,
      options: ['21 chiếc', '18 chiếc', '24 chiếc', '20 chiếc'],
      correctAnswer: '21 chiếc',
      explanation: `9 đôi đũa có: 2 x 9 = 18 chiếc đũa. Thêm 3 chiếc đũa nữa là: 18 + 3 = 21 chiếc đũa.`
    };
  }
}

// --- ROUND 21: BẢNG NHÂN 5 & ĐẾM THÊM 5 ---
function round21Question(id: string, round: number, qNum: number, level: QuestionLevel, seed: number): Question {
  if (level === 1) {
    const n = (qNum % 10) + 1;
    const res = 5 * n;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Tính: 5 x ${n} = ?`,
      options: makeMCOptions(res.toString(), [(res + 5).toString(), (res - 5 < 0 ? '1' : (res - 5).toString()), (res + 10).toString()]),
      correctAnswer: res.toString(),
      explanation: `Theo bảng nhân 5: 5 x ${n} = ${res}.`
    };
  } else if (level === 2) {
    const bags = 5 + (qNum % 5);
    const total = 5 * bags;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Mỗi túi kẹo đựng 5 chiếc kẹo. Hỏi ${bags} túi kẹo như thế đựng tất cả bao nhiêu chiếc kẹo?`,
      options: makeMCOptions(`${total} chiếc kẹo`, [`${total - 5} chiếc kẹo`, `${total + 5} chiếc kẹo`, `${bags} chiếc kẹo`]),
      correctAnswer: `${total} chiếc kẹo`,
      explanation: `${bags} túi đựng số kẹo là: 5 x ${bags} = ${total} (chiếc kẹo).`
    };
  } else {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Có 6 gói bánh, mỗi gói bánh có 5 chiếc bánh. Nếu chia đều số bánh đó cho 3 bạn thì mỗi bạn nhận được bao nhiêu chiếc bánh?`,
      options: ['10 chiếc bánh', '12 chiếc bánh', '8 chiếc bánh', '15 chiếc bánh'],
      correctAnswer: '10 chiếc bánh',
      explanation: `Tổng số bánh trong 6 gói là: 5 x 6 = 30 chiếc bánh. Mỗi bạn nhận được: 30 : 3 = 10 chiếc bánh.`
    };
  }
}

// --- ROUND 22 & 23: LÀM QUEN PHÉP CHIA & BẢNG CHIA 2 (1/2) ---
function round22And23Question(id: string, round: number, qNum: number, level: QuestionLevel, seed: number): Question {
  if (level === 1) {
    const quotient = (qNum % 9) + 1;
    const dividend = 2 * quotient;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Tính: ${dividend} : 2 = ?`,
      options: makeMCOptions(quotient.toString(), [(quotient + 1).toString(), (quotient - 1 < 0 ? '9' : (quotient - 1).toString()), (quotient + 2).toString()]),
      correctAnswer: quotient.toString(),
      explanation: `Theo bảng chia 2: ${dividend} : 2 = ${quotient}.`
    };
  } else if (level === 2) {
    const total = 16 + (qNum % 3) * 2;
    const half = total / 2;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Cô giáo có ${total} quyển vở, cô thưởng cho các bạn một phần hai (1/2) số vở đó. Hỏi cô giáo đã thưởng bao nhiêu quyển vở?`,
      options: makeMCOptions(`${half} quyển`, [`${half - 1} quyển`, `${half + 1} quyển`, `${half + 2} quyển`]),
      correctAnswer: `${half} quyển`,
      explanation: `Một phần hai số vở là: ${total} : 2 = ${half} (quyển vở).`
    };
  } else {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Tìm một số biết rằng lấy số đó nhân với 2 rồi cộng thêm 14 thì được kết quả bằng 30?`,
      options: ['8', '7', '9', '6'],
      correctAnswer: '8',
      explanation: `Tính ngược từ cuối: Số đó nhân với 2 bằng: 30 - 14 = 16. Số cần tìm là: 16 : 2 = 8.`
    };
  }
}

// --- ROUND 24: BẢNG CHIA 5 & MỘT PHẦN NĂM (1/5) ---
function round24Question(id: string, round: number, qNum: number, level: QuestionLevel, seed: number): Question {
  if (level === 1) {
    const quotient = (qNum % 9) + 1;
    const dividend = 5 * quotient;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Tính: ${dividend} : 5 = ?`,
      options: makeMCOptions(quotient.toString(), [(quotient + 1).toString(), (quotient - 1 < 0 ? '7' : (quotient - 1).toString()), (quotient + 2).toString()]),
      correctAnswer: quotient.toString(),
      explanation: `Theo bảng chia 5: ${dividend} : 5 = ${quotient}.`
    };
  } else if (level === 2) {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Bác thợ may có một tấm vải dài 35 m. Bác cắt lấy 1/5 tấm vải để may rèm cửa. Hỏi tấm vải còn lại dài bao nhiêu mét?`,
      options: ['28 m', '7 m', '30 m', '25 m'],
      correctAnswer: '28 m',
      explanation: `Đoạn vải đã cắt may rèm: 35 : 5 = 7 m. Tấm vải còn lại dài: 35 - 7 = 28 m.`
    };
  } else {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Có 45 bông hoa cắm đều vào 5 bình hoa. Lấy 2 bình hoa đó đem tặng cô giáo. Hỏi đã đem tặng bao nhiêu bông hoa?`,
      options: ['18 bông hoa', '9 bông hoa', '15 bông hoa', '20 bông hoa'],
      correctAnswer: '18 bông hoa',
      explanation: `Mỗi bình hoa có: 45 : 5 = 9 bông hoa. Đem tặng 2 bình tức là tặng: 9 x 2 = 18 bông hoa.`
    };
  }
}

// --- ROUND 25: KHỐI TRỤ & KHỐI CẦU ---
function round25Question(id: string, round: number, qNum: number, level: QuestionLevel, seed: number): Question {
  if (level === 1) {
    const items = [
      { q: "Quả bóng đá trong sân trường có dạng hình khối nào?", a: "Khối cầu", o: ["Khối cầu", "Khối trụ", "Khối lập phương", "Hình tròn"] },
      { q: "Hộp sữa đặc hoặc lon nước ngọt thường có dạng hình khối nào?", a: "Khối trụ", o: ["Khối trụ", "Khối cầu", "Khối hộp chữ nhật", "Khối tam giác"] },
      { q: "Viên bi Ve dùng để chơi bắn bi có dạng hình khối gì?", a: "Khối cầu", o: ["Khối cầu", "Khối trụ", "Hình vuông", "Khối nón"] },
      { q: "Ống cắm bút hình ống tròn đặt trên bàn học có dạng hình khối nào?", a: "Khối trụ", o: ["Khối trụ", "Khối cầu", "Khối lập phương", "Khối cầu tròn"] }
    ];
    const item = items[qNum % items.length];
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      visualType: 'geo_shapes',
      visualData: { shape: item.a === 'Khối cầu' ? 'sphere' : 'cylinder' },
      questionText: item.q,
      options: item.o,
      correctAnswer: item.a,
      explanation: `${item.q} có dạng ${item.a}.`
    };
  } else if (level === 2) {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Khối trụ có mấy mặt phẳng hình tròn ở hai đáy?`,
      options: ['2 mặt', '1 mặt', '3 mặt', 'Không có mặt nào'],
      correctAnswer: '2 mặt',
      explanation: `Khối trụ có hai mặt đáy là hai hình tròn bằng nhau.`
    };
  } else {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Trong các đồ vật sau: Quả cam, lon bia, cục tẩy hộp chữ nhật, hộp phấn lập phương, quả địa cầu. Có bao nhiêu đồ vật có dạng khối cầu?`,
      options: ['2 đồ vật', '3 đồ vật', '1 đồ vật', '4 đồ vật'],
      correctAnswer: '2 đồ vật',
      explanation: `Có 2 đồ vật có dạng khối cầu là: Quả cam và quả địa cầu.`
    };
  }
}

// --- ROUND 26: MÉT (m) & KI-LÔ-MÉT (km) ---
function round26Question(id: string, round: number, qNum: number, level: QuestionLevel, seed: number): Question {
  if (level === 1) {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `1 mét (m) bằng bao nhiêu xăng-ti-mét (cm)?`,
      options: ['100 cm', '10 cm', '1000 cm', '50 cm'],
      correctAnswer: '100 cm',
      explanation: `Ta có mối liên hệ: 1 m = 10 dm = 100 cm.`
    };
  } else if (level === 2) {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Quãng đường từ nhà bạn Lan đến trường dài 420 m, quãng đường từ nhà bạn Mai đến trường dài 380 m. Hỏi nhà Lan xa hơn nhà Mai bao nhiêu mét?`,
      options: ['40 m', '50 m', '800 m', '30 m'],
      correctAnswer: '40 m',
      explanation: `Nhà Lan xa hơn nhà Mai: 420 - 380 = 40 m.`
    };
  } else {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Người ta cắm cọc tiêu dọc theo một con đường dài 20 m. Cứ cách 5 m lại cắm 1 cọc tiêu (ở cả hai đầu đường đều có cọc). Hỏi có tất cả bao nhiêu cọc tiêu?`,
      options: ['5 cái cọc', '4 cái cọc', '6 cái cọc', '3 cái cọc'],
      correctAnswer: '5 cái cọc',
      explanation: `Số khoảng cách là: 20 : 5 = 4 khoảng. Vì cắm cả hai đầu đường nên số cọc bằng số khoảng + 1: 4 + 1 = 5 cái cọc.`
    };
  }
}

// --- ROUND 27 & 28: SỐ CÓ BA CHỮ SỐ & SO SÁNH ---
function round27And28Question(id: string, round: number, qNum: number, level: QuestionLevel, seed: number): Question {
  if (level === 1) {
    const h = 2 + (qNum % 7);
    const t = (qNum * 3) % 10;
    const u = (qNum * 2) % 10;
    const num = h * 100 + t * 10 + u;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      visualType: 'blocks_tens',
      visualData: { hundreds: h, tens: t, units: u },
      questionText: `Số gồm ${h} trăm, ${t} chục và ${u} đơn vị được viết là:`,
      options: makeMCOptions(num.toString(), [
        `${h}${u}${t}`,
        `${t}${h}${u}`,
        `${h + 1}${t}${u}`,
        `${h}${t + 1}${u}`,
        `${Math.max(1, h - 1)}${t}${u}`
      ]),
      correctAnswer: num.toString(),
      explanation: `${h} trăm + ${t} chục + ${u} đơn vị = ${num}.`
    };
  } else if (level === 2) {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Sắp xếp các số sau theo thứ tự từ bé đến lớn: 435, 345, 543, 354`,
      options: [
        '345, 354, 435, 543',
        '354, 345, 435, 543',
        '543, 435, 354, 345',
        '345, 435, 354, 543'
      ],
      correctAnswer: '345, 354, 435, 543',
      explanation: `So sánh chữ số hàng trăm rồi đến hàng chục: 345 < 354 < 435 < 543.`
    };
  } else {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Số lớn nhất có ba chữ số khác nhau mà chữ số hàng trăm là 7 là:`,
      options: ['798', '789', '799', '788'],
      correctAnswer: '798',
      explanation: `Hàng trăm là 7. Để số lớn nhất và các chữ số khác nhau thì hàng chục là chữ số lớn nhất còn lại (9), hàng đơn vị là chữ số lớn nhất kế tiếp khác 7 và 9 (8). Số đó là 798.`
    };
  }
}

// --- ROUND 29 & 30: PHÉP CỘNG TRỪ PHẠM VI 1000 & THI HƯƠNG ---
function round29And30Question(id: string, round: number, qNum: number, level: QuestionLevel, seed: number): Question {
  if (level === 1) {
    const a = 200 + (qNum % 5) * 50;
    const b = 130 + (qNum % 4) * 20;
    const sum = a + b;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Tính nhẩm: ${a} + ${b} = ?`,
      options: makeMCOptions(sum.toString(), [(sum + 10).toString(), (sum - 10).toString(), (sum + 100).toString()]),
      correctAnswer: sum.toString(),
      explanation: `${a} + ${b} = ${sum}.`
    };
  } else if (level === 2) {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Một trường tiểu học có 425 học sinh nữ và 452 học sinh nam. Hỏi trường đó có tất cả bao nhiêu học sinh?`,
      options: ['877 học sinh', '870 học sinh', '867 học sinh', '887 học sinh'],
      correctAnswer: '877 học sinh',
      explanation: `Tổng số học sinh toàn trường: 425 + 452 = 877 học sinh.`
    };
  } else {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `[THI HƯƠNG] Tìm số có 3 chữ số biết chữ số hàng trăm gấp 3 lần chữ số hàng chục, chữ số hàng chục gấp 2 lần chữ số hàng đơn vị?`,
      options: ['621', '310', '931', '631'],
      correctAnswer: '621',
      explanation: `Nếu hàng đơn vị là 1 thì hàng chục là: 1 x 2 = 2. Hàng trăm là: 2 x 3 = 6. Số đó là 621. (Nếu hàng đơn vị là 2 thì hàng trăm là 2 x 2 x 3 = 12 > 9, loại).`
    };
  }
}

// --- ROUND 31 & 32: PHÉP CỘNG TRỪ CÓ NHỚ TRONG PHẠM VI 1000 ---
function round31And32Question(id: string, round: number, qNum: number, level: QuestionLevel, seed: number): Question {
  if (level === 1) {
    const a = 238 + (qNum % 6) * 15;
    const b = 125;
    const sum = a + b;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Đặt tính rồi tính: ${a} + ${b} = ?`,
      options: makeMCOptions(sum.toString(), [(sum - 10).toString(), (sum + 10).toString(), (sum - 1).toString()]),
      correctAnswer: sum.toString(),
      explanation: `Thực hiện phép cộng có nhớ sang hàng chục: ${a} + ${b} = ${sum}.`
    };
  } else if (level === 2) {
    const sub = 352;
    const b = 184;
    const a = sub + b;
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Tìm x biết: x - ${b} = ${sub}`,
      options: makeMCOptions(a.toString(), [(a - 10).toString(), (a + 10).toString(), (a - 100).toString()]),
      correctAnswer: a.toString(),
      explanation: `x = ${sub} + ${b} = ${a}.`
    };
  } else {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Một kho thóc có 650 kg thóc. Ngày thứ nhất xuất đi 180 kg thóc, ngày thứ hai xuất đi 230 kg thóc. Hỏi trong kho còn lại bao nhiêu ki-lô-gam thóc?`,
      options: ['240 kg', '250 kg', '230 kg', '260 kg'],
      correctAnswer: '240 kg',
      explanation: `Tổng số thóc đã xuất sau hai ngày: 180 + 230 = 410 kg. Số thóc còn lại: 650 - 410 = 240 kg.`
    };
  }
}

// --- ROUND 33: THU THẬP, KIỂM ĐẾM & BIỂU ĐỒ TRANH ---
function round33Question(id: string, round: number, qNum: number, level: QuestionLevel, seed: number): Question {
  if (level === 1) {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      visualType: 'chart_icons',
      visualData: { category: 'Hoa quả', items: [{ name: 'Táo', count: 5 }, { name: 'Cam', count: 8 }, { name: 'Xoài', count: 3 }] },
      questionText: `Quan sát biểu đồ tranh số quả cam của bác nông dân. Biết mỗi biểu tượng quả cam ứng với 1 quả. Có 8 biểu tượng cam. Hỏi có tất cả bao nhiêu quả cam?`,
      options: ['8 quả', '10 quả', '7 quả', '9 quả'],
      correctAnswer: '8 quả',
      explanation: `Mỗi biểu tượng ứng với 1 quả cam, có 8 biểu tượng tương ứng với 8 quả cam.`
    };
  } else if (level === 2) {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Trong biểu đồ tranh: Mỗi ngôi sao ⭐ biểu thị 5 điểm tốt. Bạn Nam đạt được 4 ngôi sao ⭐. Hỏi bạn Nam có tất cả bao nhiêu điểm tốt?`,
      options: ['20 điểm tốt', '15 điểm tốt', '25 điểm tốt', '9 điểm tốt'],
      correctAnswer: '20 điểm tốt',
      explanation: `Mỗi ngôi sao biểu thị 5 điểm tốt. 4 ngôi sao biểu thị: 5 x 4 = 20 điểm tốt.`
    };
  } else {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `Điều tra sở thích ăn kem của 35 bạn học sinh: có 18 bạn thích kem vani, 12 bạn thích kem dâu, số còn lại thích kem sô-cô-la. Hỏi có bao nhiêu bạn thích kem sô-cô-la?`,
      options: ['5 bạn', '7 bạn', '6 bạn', '8 bạn'],
      correctAnswer: '5 bạn',
      explanation: `Số bạn thích kem vani và dâu là: 18 + 12 = 30 bạn. Số bạn thích kem sô-cô-la là: 35 - 30 = 5 bạn.`
    };
  }
}

// --- ROUND 34: THI HỘI CẤP TỈNH / THÀNH PHỐ ---
function round34ProvinceExamQuestion(id: string, round: number, qNum: number, level: QuestionLevel, seed: number): Question {
  if (level === 1) {
    const list = [
      { q: "Số liền sau của số 799 là số nào?", a: "800", o: ["800", "798", "801", "790"] },
      { q: "5 dm x 4 bằng bao nhiêu?", a: "20 dm", o: ["20 dm", "20 cm", "9 dm", "25 dm"] },
      { q: "40 : 5 = ?", a: "8", o: ["8", "7", "9", "6"] },
      { q: "Số tròn trăm lớn nhất có 3 chữ số là:", a: "900", o: ["900", "999", "1000", "990"] },
      { q: "Một ngày có bao nhiêu giờ?", a: "24 giờ", o: ["24 giờ", "12 giờ", "60 giờ", "48 giờ"] },
    ];
    const item = list[(qNum - 1) % list.length];
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `[THI HỘI] ${item.q}`,
      options: item.o,
      correctAnswer: item.a,
      explanation: `Đáp án chuẩn xác là: ${item.a}.`
    };
  } else if (level === 2) {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `[THI HỘI] Mẹ mua 3 can nước ngọt loại 5 lít. Mẹ đã dùng hết 8 lít để đãi tiệc sinh nhật. Hỏi còn lại bao nhiêu lít nước ngọt?`,
      options: ['7 lít', '8 lít', '15 lít', '6 lít'],
      correctAnswer: '7 lít',
      explanation: `Số lít nước ngọt mẹ đã mua: 5 x 3 = 15 lít. Số lít còn lại: 15 - 8 = 7 lít.`
    };
  } else {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `[THI HỘI] Cho một số có hai chữ số. Biết chữ số hàng chục gấp 4 lần chữ số hàng đơn vị và tổng hai chữ số bằng 10. Tìm số đó?`,
      options: ['82', '64', '91', '41'],
      correctAnswer: '82',
      explanation: `Chữ số hàng chục gấp 4 lần hàng đơn vị: Nếu hàng đơn vị là 2 thì hàng chục là 2 x 4 = 8. Tổng hai chữ số là 8 + 2 = 10 (thỏa mãn đề bài). Vậy số đó là 82.`
    };
  }
}

// --- ROUND 35: THI ĐÌNH CHUNG KẾT TOÀN QUỐC ---
function round35NationalExamQuestion(id: string, round: number, qNum: number, level: QuestionLevel, seed: number): Question {
  if (level === 1) {
    const list = [
      { q: "Số liền trước của 1000 là số nào?", a: "999", o: ["999", "990", "1001", "900"] },
      { q: "1 km bằng bao nhiêu mét?", a: "1000 m", o: ["1000 m", "100 m", "10 m", "10000 m"] },
      { q: "Tích của 2 và 8 là:", a: "16", o: ["16", "10", "14", "18"] },
      { q: "Thương của 30 và 5 là:", a: "6", o: ["6", "5", "7", "8"] },
      { q: "Số bé nhất có ba chữ số khác nhau là:", a: "102", o: ["102", "100", "123", "101"] }
    ];
    const item = list[(qNum - 1) % list.length];
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `[THI ĐÌNH] ${item.q}`,
      options: item.o,
      correctAnswer: item.a,
      explanation: `Đáp án chuẩn là: ${item.a}.`
    };
  } else if (level === 2) {
    return {
      id, roundNumber: round, questionNumber: qNum, level, points: 10,
      type: 'multiple_choice',
      questionText: `[THI ĐÌNH] Có hai thùng dầu đựng tổng cộng 70 lít dầu. Nếu chuyển 5 lít dầu từ thùng thứ nhất sang thùng thứ hai thì hai thùng có số lít dầu bằng nhau. Hỏi lúc đầu thùng thứ nhất có bao nhiêu lít dầu?`,
      options: ['40 lít', '35 lít', '45 lít', '30 lít'],
      correctAnswer: '40 lít',
      explanation: `Khi hai thùng bằng nhau, mỗi thùng có: 70 : 2 = 35 lít. Lúc đầu thùng thứ nhất có: 35 + 5 = 40 lít. (Thùng thứ hai có: 35 - 5 = 30 lít. 40 + 30 = 70 lít).`
    };
  } else {
    // Level 3 đỉnh cao
    if (qNum === 26) {
      return {
        id, roundNumber: round, questionNumber: qNum, level, points: 10,
        type: 'multiple_choice',
        questionText: `[THI ĐÌNH] Bác thợ cưa một cây gỗ dài 12 m thành những đoạn gỗ ngắn dài 2 m. Mỗi lần cưa mất 5 phút, sau mỗi lần cưa bác nghỉ 2 phút. Hỏi bác cưa xong cây gỗ mất tất cả bao nhiêu phút?`,
        options: ['33 phút', '35 phút', '42 phút', '30 phút'],
        correctAnswer: '33 phút',
        explanation: `Cây gỗ được cưa thành: 12 : 2 = 6 đoạn. Để được 6 đoạn gỗ cần cưa 5 lần (6 - 1 = 5 lần cưa). Giữa 5 lần cưa có 4 lần nghỉ giải lao. Tổng thời gian là: 5 lần cưa x 5 phút + 4 lần nghỉ x 2 phút = 25 + 8 = 33 phút.`
      };
    } else if (qNum === 27) {
      return {
        id, roundNumber: round, questionNumber: qNum, level, points: 10,
        type: 'multiple_choice',
        questionText: `[THI ĐÌNH] Trong một cuộc thi chạy tiếp sức, An đứng thứ 4 tính từ người chạy đầu tiên và đứng thứ 9 tính từ người chạy cuối cùng. Hỏi đoàn tiếp sức đó có tất cả bao nhiêu bạn tham gia?`,
        options: ['12 bạn', '13 bạn', '11 bạn', '14 bạn'],
        correctAnswer: '12 bạn',
        explanation: `Số bạn trong đoàn là: 4 + 9 - 1 = 12 bạn (vì An được đếm 2 lần).`
      };
    } else if (qNum === 28) {
      return {
        id, roundNumber: round, questionNumber: qNum, level, points: 10,
        type: 'multiple_choice',
        questionText: `[THI ĐÌNH] Tìm một số biết rằng nếu lấy số đó chia cho 5 rồi cộng thêm 18 thì được 26?`,
        options: ['40', '35', '45', '50'],
        correctAnswer: '40',
        explanation: `Số đó chia cho 5 được: 26 - 18 = 8. Số cần tìm là: 8 x 5 = 40.`
      };
    } else if (qNum === 29) {
      return {
        id, roundNumber: round, questionNumber: qNum, level, points: 10,
        type: 'multiple_choice',
        questionText: `[THI ĐÌNH] Lan có số bông hoa là số bé nhất có hai chữ số giống nhau. Cúc có số bông hoa gấp đôi của Lan. Mai có ít hơn Cúc 5 bông hoa. Hỏi cả ba bạn có bao nhiêu bông hoa?`,
        options: ['50 bông hoa', '48 bông hoa', '55 bông hoa', '45 bông hoa'],
        correctAnswer: '50 bông hoa',
        explanation: `Số hoa của Lan: 11 bông. Số hoa của Cúc: 11 x 2 = 22 bông. Số hoa của Mai: 22 - 5 = 17 bông. Cả 3 bạn có: 11 + 22 + 17 = 50 bông hoa.`
      };
    } else {
      return {
        id, roundNumber: round, questionNumber: qNum, level, points: 10,
        type: 'multiple_choice',
        questionText: `[THI ĐÌNH - CÂU 30 SAO VÀNG] Hình vẽ dưới đây gồm một hình tam giác lớn được chia thành 4 hình tam giác nhỏ. Có tất cả bao nhiêu hình tam giác trong hình vẽ?`,
        visualType: 'geo_shapes',
        visualData: { shape: 'triangle_subdivided', count: 5 },
        options: ['5 hình', '4 hình', '6 hình', '8 hình'],
        correctAnswer: '5 hình',
        explanation: `Gồm có 4 hình tam giác đơn nhỏ và 1 hình tam giác lớn bao quanh bên ngoài. Tổng cộng có 5 hình tam giác.`
      };
    }
  }
}
