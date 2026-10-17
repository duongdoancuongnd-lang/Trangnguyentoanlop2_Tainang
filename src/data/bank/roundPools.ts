import { Question } from '../../types/quiz';
import { getRounds1to7Questions } from './rounds1to7Pools';
import { getRounds8to13Questions } from './rounds8to13Pools';
import { getRounds14to18Questions } from './rounds14to18Pools';
import { getRounds19to24Questions } from './rounds19to24Pools';
import { getRounds25to28Questions } from './rounds25to28Pools';
import { getRounds29to35Questions } from './rounds29to35Pools';

/**
 * POOLS OF UNIQUE LEVEL 2 AND LEVEL 3 QUESTIONS FOR ALL 35 ROUNDS
 * Ensures each round from 1 to 35 has rich, pedagogically authentic, varied questions
 * with multiple choices, fill-ins, true/false, ordering, and situations.
 * Strictly aligned with GDPT 2018 & SGK Kết Nối Tri Thức Toán Lớp 2.
 */
export function getRoundSpecificQuestions(round: number): { level2: Question[]; level3: Question[] } {
  if (round >= 1 && round <= 7) {
    return getRounds1to7Questions(round);
  }
  if (round >= 8 && round <= 13) {
    return getRounds8to13Questions(round);
  }
  if (round >= 14 && round <= 18) {
    return getRounds14to18Questions(round);
  }
  if (round >= 19 && round <= 24) {
    return getRounds19to24Questions(round);
  }
  if (round >= 25 && round <= 28) {
    return getRounds25to28Questions(round);
  }
  if (round >= 29 && round <= 35) {
    return getRounds29to35Questions(round);
  }

  // Fallback to round 1 if out of range
  return getRounds1to7Questions(1);
}
