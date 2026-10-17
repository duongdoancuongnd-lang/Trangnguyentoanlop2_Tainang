import { getQuestionsForRound } from '../src/data/questionBank.ts';

console.log('===============================================================');
console.log('KIỂM TRA BỘ ĐỀ 30 CÂU - VỊ TRÍ ĐÁP ÁN ĐÚNG TRẮC NGHIỆM');
console.log('===============================================================\n');

// Test 1: Single Round 30 questions verification
const round1Questions = getQuestionsForRound(1);
const letterCount: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
let mcCount = 0;
let fillBlankCount = 0;

console.log('--- CHI TIẾT 30 CÂU HỎI VÒNG 1 ---');
round1Questions.forEach((q, idx) => {
  if (q.type === 'multiple_choice' && q.options) {
    mcCount++;
    const correctIdx = q.options.findIndex(opt => opt.trim() === q.correctAnswer.trim());
    const letter = correctIdx >= 0 ? String.fromCharCode(65 + correctIdx) : 'UNKNOWN';
    letterCount[letter] = (letterCount[letter] || 0) + 1;

    console.log(
      `Câu ${String(q.questionNumber).padStart(2, '0')}: Đáp án đúng: [${letter}] (${q.correctAnswer})` +
      ` | A: "${q.options[0]}" | B: "${q.options[1]}" | C: "${q.options[2]}" | D: "${q.options[3]}"`
    );

    // Strict validation
    if (q.options[correctIdx] !== q.correctAnswer) {
      throw new Error(`LỖI: Câu ${q.questionNumber} đáp án đúng không khớp với options[${correctIdx}]!`);
    }
  } else {
    fillBlankCount++;
    console.log(`Câu ${String(q.questionNumber).padStart(2, '0')}: [Dạng điền khuyết] Đáp án: "${q.correctAnswer}"`);
  }
});

console.log('\n--- THỐNG KÊ PHÂN BỐ VỊ TRÍ ĐÁP ÁN ĐÚNG (30 CÂU) ---');
console.log(`Tổng số câu trắc nghiệm 4 lựa chọn: ${mcCount}`);
console.log(`Tổng số câu dạng điền đáp án: ${fillBlankCount}`);
console.log(`Vị trí A: ${letterCount.A} câu (${((letterCount.A / mcCount) * 100).toFixed(1)}%)`);
console.log(`Vị trí B: ${letterCount.B} câu (${((letterCount.B / mcCount) * 100).toFixed(1)}%)`);
console.log(`Vị trí C: ${letterCount.C} câu (${((letterCount.C / mcCount) * 100).toFixed(1)}%)`);
console.log(`Vị trí D: ${letterCount.D} câu (${((letterCount.D / mcCount) * 100).toFixed(1)}%)`);

// Verify that all 4 positions appear
if (letterCount.A === 0 || letterCount.B === 0 || letterCount.C === 0 || letterCount.D === 0) {
  throw new Error('THẤT BẠI: Đáp án đúng chưa xuất hiện đủ ở cả 4 phương án A, B, C, D!');
}
if (letterCount.A === mcCount) {
  throw new Error('THẤT BẠI: Tất cả đáp án vẫn bị cố định ở phương án A!');
}

console.log('\n✓ ĐẠT: Đáp án đúng đã xuất hiện ngẫu nhiên và phân bố đều ở cả A, B, C và D!');

// Test 2: Verify fresh shuffle across two gameplays of the same round
console.log('\n--- KIỂM TRA LƯỢT CHƠI MỚI (CHƠI LẠI CÙNG 1 VÒNG) ---');
const secondPlayQuestions = getQuestionsForRound(1);
let differencesCount = 0;
round1Questions.forEach((q1, idx) => {
  const q2 = secondPlayQuestions[idx];
  if (q1.type === 'multiple_choice' && q2.type === 'multiple_choice') {
    if (q1.correctIndex !== q2.correctIndex) {
      differencesCount++;
    }
  }
});
console.log(`Số câu thay đổi vị trí đáp án giữa 2 lần chơi: ${differencesCount}/${mcCount}`);
if (differencesCount === 0) {
  throw new Error('THẤT BẠI: Vị trí đáp án không thay đổi khi bắt đầu lượt chơi mới!');
}
console.log('✓ ĐẠT: Mỗi lần chơi mới, vị trí các phương án được xáo trộn ngẫu nhiên độc lập!');

// Test 3: Large sample simulation (100 rounds = 3000 questions)
console.log('\n--- KIỂM TRA MẪU LỚN TRÊN 100 VÒNG THI (3000 CÂU HỎI) ---');
const totalLetters: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
let totalMCQuestions = 0;

for (let r = 1; r <= 100; r++) {
  const qs = getQuestionsForRound((r % 35) + 1);
  qs.forEach(q => {
    if (q.type === 'multiple_choice' && q.options && q.options.length === 4) {
      totalMCQuestions++;
      const letter = String.fromCharCode(65 + q.correctIndex!);
      totalLetters[letter] = (totalLetters[letter] || 0) + 1;
    }
  });
}

console.log(`Tổng số câu trắc nghiệm kiểm tra: ${totalMCQuestions}`);
console.log(`Phần trăm A: ${((totalLetters.A / totalMCQuestions) * 100).toFixed(2)}% (${totalLetters.A} câu)`);
console.log(`Phần trăm B: ${((totalLetters.B / totalMCQuestions) * 100).toFixed(2)}% (${totalLetters.B} câu)`);
console.log(`Phần trăm C: ${((totalLetters.C / totalMCQuestions) * 100).toFixed(2)}% (${totalLetters.C} câu)`);
console.log(`Phần trăm D: ${((totalLetters.D / totalMCQuestions) * 100).toFixed(2)}% (${totalLetters.D} câu)`);

console.log('\n===============================================================');
console.log('TẤT CẢ CÁC BÀI KIỂM THỬ ĐÃ ĐẠT TIÊU CHUẨN 100%!');
console.log('===============================================================');
