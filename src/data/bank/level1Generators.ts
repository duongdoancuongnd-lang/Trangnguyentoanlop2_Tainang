import { Question } from '../../types/quiz';
import { makeMCOptions } from './roundQuestionGenerators';

/**
 * GENERATES 15 DISTINCT LEVEL 1 (NHẬN BIẾT) QUESTIONS FOR EACH OF THE 35 ROUNDS
 * Guarantees zero internal duplicates in Level 1.
 */
export function generateDistinctLevel1Questions(round: number): Question[] {
  const list: Question[] = [];

  for (let qNum = 1; qNum <= 15; qNum++) {
    const id = `r${round}_l1_q${qNum}`;
    list.push(createLevel1Item(round, qNum, id));
  }

  return list;
}

function createLevel1Item(round: number, qNum: number, id: string): Question {
  // Semester 1: Rounds 1 to 18
  // Semester 2: Rounds 19 to 35
  if (round === 1) {
    // Các số đến 100, liền trước, liền sau
    const val = 15 + qNum * 4;
    const type = qNum % 3;
    if (type === 0) {
      const ans = (val - 1).toString();
      return {
        id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
        type: 'multiple_choice',
        questionText: `Số liền trước của số ${val} là:`,
        options: makeMCOptions(ans, [(val + 1).toString(), (val - 2).toString(), (val + 2).toString()]),
        correctAnswer: ans,
        explanation: `Số liền trước của ${val} là: ${val} - 1 = ${ans}.`
      };
    } else if (type === 1) {
      const ans = (val + 1).toString();
      return {
        id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
        type: 'multiple_choice',
        questionText: `Số liền sau của số ${val} là:`,
        options: makeMCOptions(ans, [(val - 1).toString(), (val + 2).toString(), (val + 10).toString()]),
        correctAnswer: ans,
        explanation: `Số liền sau của ${val} là: ${val} + 1 = ${ans}.`
      };
    } else {
      const chuc = Math.floor(val / 10);
      const dvi = val % 10;
      const ans = `${chuc} chục và ${dvi} đơn vị`;
      return {
        id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
        type: 'multiple_choice',
        questionText: `Số ${val} gồm mấy chục và mấy đơn vị?`,
        options: makeMCOptions(ans, [
          `${dvi} chục và ${chuc} đơn vị`,
          `${chuc} chục và 0 đơn vị`,
          `${chuc + 1} chục và ${dvi} đơn vị`,
          `${chuc} chục và ${(dvi + 3) % 10} đơn vị`
        ]),
        correctAnswer: ans,
        explanation: `Số ${val} gồm ${chuc} chục và ${dvi} đơn vị.`
      };
    }
  }

  if (round === 2) {
    // Tia số & cộng không nhớ
    const a = 15 + qNum * 3;
    const b = 10 + (qNum % 5) * 4;
    const sum = a + b;
    return {
      id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
      type: 'multiple_choice',
      visualType: qNum % 4 === 0 ? 'number_line' : 'none',
      visualData: { start: Math.floor(a / 10) * 10, end: Math.floor(a / 10) * 10 + 20, mark: a },
      questionText: `Tính nhẩm: ${a} + ${b} = ?`,
      options: makeMCOptions(sum.toString(), [(sum + 10).toString(), (sum - 10).toString(), (sum + 1).toString()]),
      correctAnswer: sum.toString(),
      explanation: `${a} + ${b} = ${sum}.`
    };
  }

  if (round === 3) {
    // Đoạn thẳng, thước kẻ, cm
    const len = 3 + qNum;
    return {
      id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
      type: 'multiple_choice',
      visualType: qNum % 3 === 0 ? 'ruler' : 'none',
      visualData: { lengthCm: len, objectName: `Thước kẻ đoạn ${len}cm` },
      questionText: `Một đoạn thẳng có điểm đầu ở vạch 0 cm và điểm cuối ở vạch ${len} cm. Đoạn thẳng đó dài bao nhiêu cm?`,
      options: makeMCOptions(`${len} cm`, [`${len + 1} cm`, `${len - 1} cm`, `${len + 2} cm`]),
      correctAnswer: `${len} cm`,
      unit: 'cm',
      explanation: `Đoạn thẳng dài: ${len} - 0 = ${len} cm.`
    };
  }

  if (round === 4) {
    // dm và cm
    if (qNum <= 8) {
      const dm = qNum + 1;
      const cm = dm * 10;
      return {
        id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
        type: 'multiple_choice',
        questionText: `${dm} dm bằng bao nhiêu xăng-ti-mét (cm)?`,
        options: makeMCOptions(`${cm} cm`, [`${dm} cm`, `${cm + 5} cm`, `${dm * 100} cm`]),
        correctAnswer: `${cm} cm`,
        unit: 'cm',
        explanation: `1 dm = 10 cm nên ${dm} dm = ${cm} cm.`
      };
    } else {
      const dm = qNum - 7;
      const extra = 2 + (qNum % 5);
      const total = dm * 10 + extra;
      return {
        id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
        type: 'multiple_choice',
        questionText: `Đổi: ${dm} dm ${extra} cm = ... cm`,
        options: makeMCOptions(`${total} cm`, [`${total + 10} cm`, `${total - 5} cm`, `${dm + extra} cm`]),
        correctAnswer: `${total} cm`,
        unit: 'cm',
        explanation: `${dm} dm = ${dm * 10} cm. Vậy ${dm} dm ${extra} cm = ${dm * 10} + ${extra} = ${total} cm.`
      };
    }
  }

  if (round === 5 || round === 6) {
    // Phép cộng có nhớ trong phạm vi 100
    const a = 25 + qNum * 3;
    const b = 6 + (qNum % 4) * 3;
    const sum = a + b;
    return {
      id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
      type: 'multiple_choice',
      questionText: `Đặt tính rồi tính: ${a} + ${b} = ?`,
      options: makeMCOptions(sum.toString(), [(sum - 1).toString(), (sum + 1).toString(), (sum - 10).toString()]),
      correctAnswer: sum.toString(),
      explanation: `${a} + ${b} = ${sum}.`
    };
  }

  if (round === 7) {
    // Nhiều hơn, ít hơn cơ bản
    const base = 12 + qNum * 2;
    const diff = 3 + (qNum % 4);
    const ans = base + diff;
    return {
      id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
      type: 'multiple_choice',
      questionText: `Bạn Lan có ${base} bông hoa. Bạn Mai có nhiều hơn bạn Lan ${diff} bông hoa. Hỏi bạn Mai có bao nhiêu bông hoa?`,
      options: makeMCOptions(`${ans} bông hoa`, [`${ans - 2} bông hoa`, `${ans + 2} bông hoa`, `${base} bông hoa`]),
      correctAnswer: `${ans} bông hoa`,
      unit: 'bông hoa',
      explanation: `Số hoa của Mai là: ${base} + ${diff} = ${ans} bông hoa.`
    };
  }

  if (round === 8 || round === 9) {
    // Phép trừ có nhớ trong phạm vi 100
    const a = 50 + qNum * 2;
    const b = 15 + (qNum % 5) * 3;
    const diff = a - b;
    return {
      id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
      type: 'multiple_choice',
      questionText: `Đặt tính rồi tính: ${a} - ${b} = ?`,
      options: makeMCOptions(diff.toString(), [(diff + 10).toString(), (diff - 1).toString(), (diff + 1).toString()]),
      correctAnswer: diff.toString(),
      explanation: `${a} - ${b} = ${diff}.`
    };
  }

  if (round === 10) {
    // Ki-lô-gam
    const kg = 2 + qNum * 2;
    return {
      id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
      type: 'multiple_choice',
      visualType: qNum % 3 === 0 ? 'balance_scale' : 'none',
      visualData: { leftKg: kg, rightKg: kg },
      questionText: `Quả dưa hấu nặng ${kg} kg, quả mít nặng hơn quả dưa 3 kg. Quả mít nặng bao nhiêu ki-lô-gam?`,
      options: makeMCOptions(`${kg + 3} kg`, [`${kg - 1} kg`, `${kg} kg`, `${kg + 5} kg`]),
      correctAnswer: `${kg + 3} kg`,
      unit: 'kg',
      explanation: `Quả mít nặng: ${kg} + 3 = ${kg + 3} kg.`
    };
  }

  if (round === 11) {
    // Lít
    const l1 = 5 + qNum;
    const l2 = 10 + (qNum % 5);
    const sum = l1 + l2;
    return {
      id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
      type: 'multiple_choice',
      visualType: qNum % 3 === 0 ? 'liters_pitcher' : 'none',
      visualData: { liters: l1 },
      questionText: `Can thứ nhất có ${l1} lít nước, can thứ hai có ${l2} lít nước. Cả hai can có tất cả bao nhiêu lít nước?`,
      options: makeMCOptions(`${sum} lít`, [`${sum - 2} lít`, `${sum + 2} lít`, `${sum - 5} lít`]),
      correctAnswer: `${sum} lít`,
      unit: 'lít',
      explanation: `${l1} + ${l2} = ${sum} lít.`
    };
  }

  if (round === 12) {
    // Hình tam giác, hình tứ giác (15 câu phân biệt)
    const items = [
      { q: 'Hình tam giác là hình có mấy cạnh?', a: '3 cạnh', o: ['3 cạnh', '4 cạnh', '2 cạnh', '5 cạnh'], exp: 'Hình tam giác có đúng 3 cạnh.' },
      { q: 'Hình tam giác là hình có mấy đỉnh?', a: '3 đỉnh', o: ['3 đỉnh', '4 đỉnh', '2 đỉnh', '5 đỉnh'], exp: 'Hình tam giác có 3 đỉnh.' },
      { q: 'Hình tứ giác là hình có bao nhiêu cạnh?', a: '4 cạnh', o: ['4 cạnh', '3 cạnh', '5 cạnh', '2 cạnh'], exp: 'Hình tứ giác có đúng 4 cạnh.' },
      { q: 'Hình tứ giác là hình có bao nhiêu đỉnh?', a: '4 đỉnh', o: ['4 đỉnh', '3 đỉnh', '5 đỉnh', '6 đỉnh'], exp: 'Hình tứ giác có đúng 4 đỉnh.' },
      { q: 'Khăn quàng đỏ của học sinh có dạng hình gì?', a: 'Hình tam giác', o: ['Hình tam giác', 'Hình tứ giác', 'Hình tròn', 'Hình vuông'], exp: 'Khăn quàng đỏ có 3 cạnh nên có dạng hình tam giác.' },
      { q: 'Bảng đen của lớp học có dạng hình gì?', a: 'Hình tứ giác', o: ['Hình tứ giác', 'Hình tam giác', 'Hình tròn', 'Hình thoi'], exp: 'Bảng đen có 4 cạnh nên là hình tứ giác.' },
      { q: 'Cánh buồm của thuyền buồm thường có dạng hình gì?', a: 'Hình tam giác', o: ['Hình tam giác', 'Hình tròn', 'Hình lục giác', 'Hình trụ'], exp: 'Cánh buồm thường có dạng hình tam giác.' },
      { q: 'Chiếc ê-ke của học sinh có dạng hình gì?', a: 'Hình tam giác', o: ['Hình tam giác', 'Hình tứ giác', 'Hình tròn', 'Hình cầu'], exp: 'Thước ê-ke có 3 cạnh là hình tam giác.' },
      { q: 'Mặt bàn học sinh thường có dạng hình gì?', a: 'Hình tứ giác', o: ['Hình tứ giác', 'Hình tam giác', 'Hình tròn', 'Hình nón'], exp: 'Mặt bàn có 4 cạnh là hình tứ giác.' },
      { q: 'Quyển vở học sinh đóng kín có dạng hình gì?', a: 'Hình tứ giác', o: ['Hình tứ giác', 'Hình tam giác', 'Hình tròn', 'Hình sao'], exp: 'Bìa vở có 4 cạnh là hình tứ giác.' },
      { q: 'Hình chữ nhật là hình tam giác hay hình tứ giác?', a: 'Hình tứ giác', o: ['Hình tứ giác', 'Hình tam giác', 'Không phải cả hai', 'Hình tròn'], exp: 'Hình chữ nhật có 4 cạnh nên là một hình tứ giác đặc biệt.' },
      { q: 'Hình vuông là hình tam giác hay hình tứ giác?', a: 'Hình tứ giác', o: ['Hình tứ giác', 'Hình tam giác', 'Không phải cả hai', 'Hình trụ'], exp: 'Hình vuông có 4 cạnh nên là hình tứ giác.' },
      { q: 'Nối 3 điểm không thẳng hàng lại với nhau ta được hình gì?', a: 'Hình tam giác', o: ['Hình tam giác', 'Hình tứ giác', 'Đoạn thẳng', 'Hình tròn'], exp: 'Nối 3 điểm không thẳng hàng tạo thành 3 đoạn thẳng khép kín là hình tam giác.' },
      { q: 'Biển báo giao thông hình tam giác có bao nhiêu đỉnh?', a: '3 đỉnh', o: ['3 đỉnh', '4 đỉnh', '2 đỉnh', '5 đỉnh'], exp: 'Hình tam giác có 3 đỉnh.' },
      { q: 'Một khung ảnh chữ nhật có mấy góc?', a: '4 góc', o: ['4 góc', '3 góc', '2 góc', '5 góc'], exp: 'Khung ảnh hình chữ nhật có 4 góc.' }
    ];
    const it = items[(qNum - 1) % items.length];
    return {
      id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
      type: 'multiple_choice',
      visualType: 'geo_shapes',
      visualData: { shape: 'triangle_split' },
      questionText: it.q,
      options: it.o,
      correctAnswer: it.a,
      explanation: it.exp
    };
  }

  if (round === 13) {
    // Đồng hồ & thời gian (15 câu phân biệt)
    const items = [
      { q: 'Một ngày có bao nhiêu giờ?', a: '24 giờ', o: ['24 giờ', '12 giờ', '30 giờ', '60 giờ'], exp: 'Một ngày có 24 giờ, tính từ 12 giờ đêm hôm trước đến 12 giờ đêm hôm sau.' },
      { q: '1 giờ có bao nhiêu phút?', a: '60 phút', o: ['60 phút', '24 phút', '30 phút', '100 phút'], exp: '1 giờ = 60 phút.' },
      { q: 'Kim dài của đồng hồ chỉ số 12, kim ngắn chỉ số 3. Khi đó là mấy giờ?', a: '3 giờ', o: ['3 giờ', '12 giờ', '3 giờ 12 phút', '4 giờ'], exp: 'Kim dài chỉ 12, kim ngắn chỉ 3 là đúng 3 giờ.' },
      { q: 'Kim dài của đồng hồ chỉ số 12, kim ngắn chỉ số 7. Khi đó là mấy giờ?', a: '7 giờ', o: ['7 giờ', '12 giờ', '7 giờ 12 phút', '8 giờ'], exp: 'Kim dài chỉ 12, kim ngắn chỉ 7 là đúng 7 giờ.' },
      { q: 'Kim dài chỉ số 6 trên mặt đồng hồ nghĩa là bao nhiêu phút?', a: '30 phút (nửa giờ)', o: ['30 phút (nửa giờ)', '6 phút', '15 phút', '45 phút'], exp: 'Kim dài chỉ số 6 là 30 phút hay nửa giờ.' },
      { q: '15 giờ tương ứng với mấy giờ chiều?', a: '3 giờ chiều', o: ['3 giờ chiều', '5 giờ chiều', '2 giờ chiều', '4 giờ chiều'], exp: '15 giờ - 12 giờ = 3 giờ chiều.' },
      { q: '17 giờ tương ứng với mấy giờ chiều?', a: '5 giờ chiều', o: ['5 giờ chiều', '7 giờ chiều', '4 giờ chiều', '6 giờ chiều'], exp: '17 giờ - 12 giờ = 5 giờ chiều.' },
      { q: '20 giờ tương ứng với mấy giờ tối?', a: '8 giờ tối', o: ['8 giờ tối', '10 giờ tối', '9 giờ tối', '7 giờ tối'], exp: '20 giờ - 12 giờ = 8 giờ tối.' },
      { q: '21 giờ tương ứng với mấy giờ tối?', a: '9 giờ tối', o: ['9 giờ tối', '11 giờ tối', '8 giờ tối', '10 giờ tối'], exp: '21 giờ - 12 giờ = 9 giờ tối.' },
      { q: 'Đồng hồ chỉ 8 giờ 30 phút còn được gọi là:', a: '8 giờ rưỡi', o: ['8 giờ rưỡi', '8 giờ kém', '9 giờ rưỡi', '7 giờ rưỡi'], exp: '8 giờ 30 phút còn gọi là 8 giờ rưỡi.' },
      { q: 'Buổi sáng em thường bắt đầu vào học lúc mấy giờ?', a: '7 giờ 30 phút', o: ['7 giờ 30 phút', '12 giờ trưa', '18 giờ tối', '23 giờ đêm'], exp: 'Học sinh tiểu học vào học buổi sáng lúc khoảng 7 giờ 30 phút.' },
      { q: 'Kim ngắn đồng hồ chỉ số 9, kim dài chỉ số 12. Khi đó là mấy giờ?', a: '9 giờ', o: ['9 giờ', '12 giờ', '9 giờ 12 phút', '10 giờ'], exp: 'Đúng 9 giờ.' },
      { q: '12 giờ trưa còn được gọi là:', a: 'Đúng giữa trưa', o: ['Đúng giữa trưa', 'Nửa đêm', 'Chiều tối', 'Rạng sáng'], exp: '12 giờ trưa là đúng thời điểm giữa trưa.' },
      { q: 'Kim ngắn đồng hồ dùng để chỉ gì?', a: 'Chỉ giờ', o: ['Chỉ giờ', 'Chỉ phút', 'Chỉ giây', 'Chỉ ngày'], exp: 'Kim ngắn trên đồng hồ dùng để chỉ giờ.' },
      { q: 'Kim dài đồng hồ dùng để chỉ gì?', a: 'Chỉ phút', o: ['Chỉ phút', 'Chỉ giờ', 'Chỉ giây', 'Chỉ thứ'], exp: 'Kim dài trên đồng hồ dùng để chỉ phút.' }
    ];
    const it = items[(qNum - 1) % items.length];
    return {
      id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
      type: 'multiple_choice',
      visualType: 'clock',
      visualData: { hour: qNum, minute: 0 },
      questionText: it.q,
      options: it.o,
      correctAnswer: it.a,
      explanation: it.exp
    };
  }

  if (round === 14) {
    // Ngày tháng & lịch (15 câu phân biệt)
    const items = [
      { q: 'Một tuần lễ có bao nhiêu ngày?', a: '7 ngày', o: ['7 ngày', '6 ngày', '8 ngày', '5 ngày'], exp: 'Một tuần có 7 ngày.' },
      { q: 'Ngày đầu tiên trong tuần lễ theo quy ước là thứ mấy?', a: 'Thứ Hai', o: ['Thứ Hai', 'Chủ Nhật', 'Thứ Bảy', 'Thứ Ba'], exp: 'Thứ Hai là ngày đầu tuần đi học.' },
      { q: 'Ngày cuối cùng trong tuần lễ là ngày nào?', a: 'Chủ Nhật', o: ['Chủ Nhật', 'Thứ Bảy', 'Thứ Sáu', 'Thứ Hai'], exp: 'Chủ Nhật là ngày cuối tuần.' },
      { q: 'Một năm có bao nhiêu tháng?', a: '12 tháng', o: ['12 tháng', '10 tháng', '11 tháng', '24 tháng'], exp: 'Một năm gồm 12 tháng từ tháng 1 đến tháng 12.' },
      { q: 'Tháng đầu tiên của một năm là tháng mấy?', a: 'Tháng 1', o: ['Tháng 1', 'Tháng 12', 'Tháng 2', 'Tháng 0'], exp: 'Tháng 1 (tháng Giêng) mở đầu năm mới.' },
      { q: 'Tháng cuối cùng của một năm là tháng mấy?', a: 'Tháng 12', o: ['Tháng 12', 'Tháng 11', 'Tháng 1', 'Tháng 10'], exp: 'Tháng 12 (tháng Chạp) là tháng kết thúc năm.' },
      { q: 'Ngày Quốc tế Thiếu nhi là ngày nào trong năm?', a: 'Ngày 1 tháng 6', o: ['Ngày 1 tháng 6', 'Ngày 1 tháng 5', 'Ngày 2 tháng 9', 'Ngày 20 tháng 11'], exp: '1 tháng 6 là ngày Quốc tế Thiếu nhi.' },
      { q: 'Ngày Quốc khánh Việt Nam là ngày nào?', a: 'Ngày 2 tháng 9', o: ['Ngày 2 tháng 9', 'Ngày 30 tháng 4', 'Ngày 1 tháng 1', 'Ngày 19 tháng 5'], exp: 'Ngày 2 tháng 9 là ngày Quốc khánh nước Cộng hòa XHCN Việt Nam.' },
      { q: 'Ngày Nhà giáo Việt Nam là ngày nào?', a: 'Ngày 20 tháng 11', o: ['Ngày 20 tháng 11', 'Ngày 20 tháng 10', 'Ngày 8 tháng 3', 'Ngày 5 tháng 9'], exp: 'Ngày 20 tháng 11 là ngày Nhà giáo Việt Nam tri ân thầy cô.' },
      { q: 'Nếu hôm nay là thứ Tư thì ngày mai là thứ mấy?', a: 'Thứ Năm', o: ['Thứ Năm', 'Thứ Ba', 'Thứ Sáu', 'Thứ Bảy'], exp: 'Ngày mai của thứ Tư là thứ Năm.' },
      { q: 'Nếu hôm nay là thứ Sáu thì hôm qua là thứ mấy?', a: 'Thứ Năm', o: ['Thứ Năm', 'Thứ Tư', 'Thứ Bảy', 'Chủ Nhật'], exp: 'Hôm qua của thứ Sáu là thứ Năm.' },
      { q: 'Tháng liền sau của tháng 7 là tháng mấy?', a: 'Tháng 8', o: ['Tháng 8', 'Tháng 6', 'Tháng 9', 'Tháng 10'], exp: 'Liền sau tháng 7 là tháng 8.' },
      { q: 'Tháng liền trước của tháng 11 là tháng mấy?', a: 'Tháng 10', o: ['Tháng 10', 'Tháng 12', 'Tháng 9', 'Tháng 8'], exp: 'Liền trước tháng 11 là tháng 10.' },
      { q: 'Tháng 4 có bao nhiêu ngày?', a: '30 ngày', o: ['30 ngày', '31 ngày', '28 ngày', '29 ngày'], exp: 'Tháng 4 có 30 ngày.' },
      { q: 'Nếu thứ Hai tuần này là ngày 8 thì thứ Hai tuần sau là ngày mấy?', a: 'Ngày 15', o: ['Ngày 15', 'Ngày 14', 'Ngày 16', 'Ngày 17'], exp: '8 + 7 = 15. Thứ Hai tuần sau là ngày 15.' }
    ];
    const it = items[(qNum - 1) % items.length];
    return {
      id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
      type: 'multiple_choice',
      questionText: it.q,
      options: it.o,
      correctAnswer: it.a,
      explanation: it.exp
    };
  }

  if (round === 15) {
    // Đường gấp khúc (15 câu phân biệt)
    const segA = 8 + qNum;
    const segB = 12 + (qNum % 5);
    const total = segA + segB;
    return {
      id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
      type: 'multiple_choice',
      questionText: `Đường gấp khúc gồm hai đoạn thẳng dài ${segA} cm và ${segB} cm. Độ dài đường gấp khúc đó là:`,
      options: makeMCOptions(`${total} cm`, [`${total - 2} cm`, `${total + 2} cm`, `${segA} cm`]),
      correctAnswer: `${total} cm`,
      unit: 'cm',
      explanation: `Độ dài đường gấp khúc bằng tổng độ dài các đoạn thẳng: ${segA} + ${segB} = ${total} cm.`
    };
  }

  if (round >= 16 && round <= 18) {
    // Tổng hợp Học kì 1
    const a = 30 + qNum * 3;
    const b = 25 + (qNum % 4) * 5;
    const sum = a + b;
    return {
      id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
      type: 'multiple_choice',
      questionText: `Tính: ${a} + ${b} = ?`,
      options: makeMCOptions(sum.toString(), [(sum + 10).toString(), (sum - 10).toString(), (sum + 1).toString()]),
      correctAnswer: sum.toString(),
      explanation: `${a} + ${b} = ${sum}.`
    };
  }

  if (round === 19) {
    // Bảng nhân 2 (15 câu phân biệt)
    if (qNum <= 10) {
      const prod = 2 * qNum;
      return {
        id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
        type: 'multiple_choice',
        questionText: `Tính giá trị của phép nhân: 2 x ${qNum} = ?`,
        options: makeMCOptions(prod.toString(), [(prod + 2).toString(), (prod - 2 < 0 ? '0' : (prod - 2).toString()), (prod + 4).toString()]),
        correctAnswer: prod.toString(),
        explanation: `2 x ${qNum} = ${prod}.`
      };
    } else {
      const items = [
        { q: 'Một đôi đũa có bao nhiêu chiếc đũa?', a: '2 chiếc', o: ['2 chiếc', '4 chiếc', '1 chiếc', '3 chiếc'], exp: 'Một đôi gồm 2 chiếc.' },
        { q: 'Một con gà có mấy cái chân?', a: '2 cái chân', o: ['2 cái chân', '4 cái chân', '1 cái chân', '3 cái chân'], exp: 'Con gà có 2 chân.' },
        { q: 'Trong phép nhân 2 x 6 = 12, số 12 được gọi là gì?', a: 'Tích', o: ['Tích', 'Thừa số', 'Số bị chia', 'Thương'], exp: 'Kết quả của phép nhân gọi là Tích.' },
        { q: 'Trong phép nhân 2 x 8 = 16, các số 2 và 8 được gọi là gì?', a: 'Thừa số', o: ['Thừa số', 'Tích', 'Số hạng', 'Hiệu'], exp: 'Các số nhân với nhau gọi là Thừa số.' },
        { q: 'Chuyển tổng 2 + 2 + 2 + 2 thành phép nhân thích hợp:', a: '2 x 4', o: ['2 x 4', '2 x 3', '4 x 4', '2 + 4'], exp: 'Số 2 được lấy 4 lần viết thành 2 x 4.' }
      ];
      const it = items[qNum - 11];
      return {
        id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
        type: 'multiple_choice',
        questionText: it.q,
        options: it.o,
        correctAnswer: it.a,
        explanation: it.exp
      };
    }
  }

  if (round === 20) {
    // Bảng nhân 5 (15 câu phân biệt)
    if (qNum <= 10) {
      const prod = 5 * qNum;
      return {
        id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
        type: 'multiple_choice',
        questionText: `Tính giá trị của phép nhân: 5 x ${qNum} = ?`,
        options: makeMCOptions(prod.toString(), [(prod + 5).toString(), (prod - 5 < 0 ? '0' : (prod - 5).toString()), (prod + 10).toString()]),
        correctAnswer: prod.toString(),
        explanation: `5 x ${qNum} = ${prod}.`
      };
    } else {
      const items = [
        { q: 'Một bàn tay người bình thường có mấy ngón tay?', a: '5 ngón tay', o: ['5 ngón tay', '4 ngón tay', '6 ngón tay', '10 ngón tay'], exp: 'Một bàn tay có 5 ngón.' },
        { q: 'Một ngôi sao năm cánh có mấy cánh?', a: '5 cánh', o: ['5 cánh', '4 cánh', '6 cánh', '3 cánh'], exp: 'Ngôi sao năm cánh có đúng 5 cánh.' },
        { q: 'Trong phép nhân 5 x 7 = 35, kết quả 35 được gọi là gì?', a: 'Tích', o: ['Tích', 'Thừa số', 'Thương', 'Tổng'], exp: 'Kết quả của phép nhân là Tích.' },
        { q: 'Mỗi can đựng 5 lít nước, hỏi 3 can như thế đựng bao nhiêu lít nước?', a: '15 lít', o: ['15 lít', '8 lít', '20 lít', '10 lít'], exp: '5 x 3 = 15 lít.' },
        { q: 'Chuyển tổng 5 + 5 + 5 thành phép nhân thích hợp:', a: '5 x 3', o: ['5 x 3', '5 x 4', '3 x 3', '5 + 3'], exp: 'Số 5 lấy 3 lần viết là 5 x 3.' }
      ];
      const it = items[qNum - 11];
      return {
        id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
        type: 'multiple_choice',
        questionText: it.q,
        options: it.o,
        correctAnswer: it.a,
        explanation: it.exp
      };
    }
  }

  if (round === 21) {
    // Bảng chia 2 (15 câu phân biệt)
    if (qNum <= 10) {
      const quotient = qNum;
      const dividend = 2 * quotient;
      return {
        id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
        type: 'multiple_choice',
        questionText: `Tính: ${dividend} : 2 = ?`,
        options: makeMCOptions(quotient.toString(), [(quotient + 1).toString(), (quotient - 1 < 1 ? '10' : (quotient - 1).toString()), (quotient + 2).toString()]),
        correctAnswer: quotient.toString(),
        explanation: `${dividend} : 2 = ${quotient}.`
      };
    } else {
      const items = [
        { q: 'Trong phép chia 14 : 2 = 7, số 14 được gọi là gì?', a: 'Số bị chia', o: ['Số bị chia', 'Số chia', 'Thương', 'Tích'], exp: '14 là số bị chia.' },
        { q: 'Trong phép chia 14 : 2 = 7, số 2 được gọi là gì?', a: 'Số chia', o: ['Số chia', 'Số bị chia', 'Thương', 'Thừa số'], exp: '2 là số chia.' },
        { q: 'Trong phép chia 14 : 2 = 7, kết quả 7 được gọi là gì?', a: 'Thương', o: ['Thương', 'Tích', 'Số chia', 'Hiệu'], exp: 'Kết quả phép chia gọi là Thương.' },
        { q: 'Tìm một nửa (1/2) của số 18:', a: '9', o: ['9', '8', '10', '7'], exp: '18 : 2 = 9.' },
        { q: 'Có 12 cái kẹo chia đều cho 2 bạn, mỗi bạn được mấy cái kẹo?', a: '6 cái kẹo', o: ['6 cái kẹo', '5 cái kẹo', '7 cái kẹo', '8 cái kẹo'], exp: '12 : 2 = 6 cái kẹo.' }
      ];
      const it = items[qNum - 11];
      return {
        id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
        type: 'multiple_choice',
        questionText: it.q,
        options: it.o,
        correctAnswer: it.a,
        explanation: it.exp
      };
    }
  }

  if (round === 22) {
    // Bảng chia 5 (15 câu phân biệt)
    if (qNum <= 10) {
      const quotient = qNum;
      const dividend = 5 * quotient;
      return {
        id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
        type: 'multiple_choice',
        questionText: `Tính: ${dividend} : 5 = ?`,
        options: makeMCOptions(quotient.toString(), [(quotient + 1).toString(), (quotient - 1 < 1 ? '10' : (quotient - 1).toString()), (quotient + 2).toString()]),
        correctAnswer: quotient.toString(),
        explanation: `${dividend} : 5 = ${quotient}.`
      };
    } else {
      const items = [
        { q: 'Trong phép chia 30 : 5 = 6, số 30 được gọi là gì?', a: 'Số bị chia', o: ['Số bị chia', 'Số chia', 'Thương', 'Tích'], exp: '30 là số bị chia.' },
        { q: 'Một phần năm (1/5) của số 25 là bao nhiêu?', a: '5', o: ['5', '4', '6', '10'], exp: '25 : 5 = 5.' },
        { q: 'Một phần năm (1/5) của số 40 là bao nhiêu?', a: '8', o: ['8', '7', '9', '6'], exp: '40 : 5 = 8.' },
        { q: 'Có 20 quả táo chia đều vào 5 giỏ, mỗi giỏ có mấy quả táo?', a: '4 quả táo', o: ['4 quả táo', '5 quả táo', '3 quả táo', '6 quả táo'], exp: '20 : 5 = 4 quả.' },
        { q: 'Dây vải dài 50 cm cắt thành 5 đoạn bằng nhau, mỗi đoạn dài bao nhiêu cm?', a: '10 cm', o: ['10 cm', '5 cm', '15 cm', '8 cm'], exp: '50 : 5 = 10 cm.' }
      ];
      const it = items[qNum - 11];
      return {
        id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
        type: 'multiple_choice',
        questionText: it.q,
        options: it.o,
        correctAnswer: it.a,
        explanation: it.exp
      };
    }
  }

  if (round === 23) {
    // Khối trụ & khối cầu (15 câu phân biệt)
    const items = [
      { q: 'Lon sữa đặc có dạng hình khối nào?', a: 'Khối trụ', o: ['Khối trụ', 'Khối cầu', 'Hình vuông', 'Khối lập phương'], exp: 'Lon sữa đặc dạng ống tròn là khối trụ.' },
      { q: 'Quả bóng đá trên sân cỏ có dạng hình khối nào?', a: 'Khối cầu', o: ['Khối cầu', 'Khối trụ', 'Hình tròn', 'Khối chữ nhật'], exp: 'Quả bóng đá là khối cầu.' },
      { q: 'Quả cam sành mẹ mua về có dạng hình khối nào?', a: 'Khối cầu', o: ['Khối cầu', 'Khối trụ', 'Hình tròn', 'Khối nón'], exp: 'Quả cam có dạng khối cầu.' },
      { q: 'Ống cắm bút hình tròn trên bàn học có dạng hình khối nào?', a: 'Khối trụ', o: ['Khối trụ', 'Khối cầu', 'Hình chữ nhật', 'Khối tam giác'], exp: 'Ống cắm bút dạng khối trụ.' },
      { q: 'Viên bi Ve dùng để chơi bắn bi có dạng hình khối nào?', a: 'Khối cầu', o: ['Khối cầu', 'Khối trụ', 'Hình tròn', 'Khối hộp'], exp: 'Viên bi ve tròn xoe là khối cầu.' },
      { q: 'Cuộn giấy vệ sinh hình ống có dạng hình khối nào?', a: 'Khối trụ', o: ['Khối trụ', 'Khối cầu', 'Khối hộp', 'Hình tròn'], exp: 'Cuộn giấy vệ sinh dạng khối trụ.' },
      { q: 'Quả địa cầu đặt trong phòng học địa lý có dạng hình khối gì?', a: 'Khối cầu', o: ['Khối cầu', 'Khối trụ', 'Hình tròn phẳng', 'Khối hộp'], exp: 'Quả địa cầu là khối cầu.' },
      { q: 'Thùng phuy đựng nước hình ống có dạng hình khối nào?', a: 'Khối trụ', o: ['Khối trụ', 'Khối cầu', 'Hình chữ nhật', 'Khối nón'], exp: 'Thùng phuy là khối trụ.' },
      { q: 'Quả bóng bàn màu trắng có dạng hình khối nào?', a: 'Khối cầu', o: ['Khối cầu', 'Khối trụ', 'Hình tròn', 'Khối nón'], exp: 'Quả bóng bàn là khối cầu.' },
      { q: 'Khối trụ có mấy mặt phẳng hình tròn ở hai đáy?', a: '2 mặt', o: ['2 mặt', '1 mặt', '3 mặt', 'Không có mặt nào'], exp: 'Khối trụ có 2 mặt đáy hình tròn phẳng.' },
      { q: 'Khối hình nào có thể lăn được về mọi phía?', a: 'Khối cầu', o: ['Khối cầu', 'Khối trụ', 'Khối lập phương', 'Khối chữ nhật'], exp: 'Khối cầu lăn được về mọi phía.' },
      { q: 'Cây nến tròn dùng để thắp sáng có dạng hình khối gì?', a: 'Khối trụ', o: ['Khối trụ', 'Khối cầu', 'Hình vuông', 'Khối tam giác'], exp: 'Cây nến hình ống tròn là khối trụ.' },
      { q: 'Quả bóng tennis màu vàng có dạng hình khối nào?', a: 'Khối cầu', o: ['Khối cầu', 'Khối trụ', 'Hình tròn', 'Khối nón'], exp: 'Quả bóng tennis có dạng khối cầu.' },
      { q: 'Cột đình làng hình ống tròn có dạng hình khối gì?', a: 'Khối trụ', o: ['Khối trụ', 'Khối cầu', 'Khối lập phương', 'Hình vuông'], exp: 'Cột đình hình trụ tròn là khối trụ.' },
      { q: 'Viên ngọc trai tròn xoe có dạng hình khối nào?', a: 'Khối cầu', o: ['Khối cầu', 'Khối trụ', 'Hình tròn', 'Khối hộp'], exp: 'Viên ngọc trai là khối cầu.' }
    ];
    const it = items[(qNum - 1) % items.length];
    return {
      id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
      type: 'multiple_choice',
      visualType: 'geo_shapes',
      visualData: { shape: it.a === 'Khối trụ' ? 'cylinder' : 'sphere' },
      questionText: it.q,
      options: it.o,
      correctAnswer: it.a,
      explanation: it.exp
    };
  }

  if (round === 24) {
    // Mét và Ki-lô-mét (15 câu phân biệt)
    const items = [
      { q: '1 mét (m) bằng bao nhiêu xăng-ti-mét (cm)?', a: '100 cm', o: ['100 cm', '10 cm', '1000 cm', '50 cm'], exp: '1 m = 100 cm.' },
      { q: '1 mét (m) bằng bao nhiêu đề-xi-mét (dm)?', a: '10 dm', o: ['10 dm', '100 dm', '1000 dm', '5 dm'], exp: '1 m = 10 dm.' },
      { q: '1 ki-lô-mét (km) bằng bao nhiêu mét (m)?', a: '1000 m', o: ['1000 m', '100 m', '10 m', '500 m'], exp: '1 km = 1000 m.' },
      { q: '2 mét (m) bằng bao nhiêu xăng-ti-mét (cm)?', a: '200 cm', o: ['200 cm', '20 cm', '2000 cm', '250 cm'], exp: '2 m = 200 cm.' },
      { q: '5 mét (m) bằng bao nhiêu đề-xi-mét (dm)?', a: '50 dm', o: ['50 dm', '500 dm', '5 dm', '55 dm'], exp: '5 m = 50 dm.' },
      { q: 'Chiều cao của cột cờ trường học thường khoảng bao nhiêu mét?', a: 'Khoảng 8 m đến 10 m', o: ['Khoảng 8 m đến 10 m', 'Khoảng 100 m', 'Khoảng 1 m', 'Khoảng 1000 m'], exp: 'Cột cờ trường học thường cao khoảng 8 - 10 mét.' },
      { q: 'Quãng đường giữa hai thành phố thường được đo bằng đơn vị nào?', a: 'Ki-lô-mét (km)', o: ['Ki-lô-mét (km)', 'Xăng-ti-mét (cm)', 'Đề-xi-mét (dm)', 'Mi-li-mét (mm)'], exp: 'Khoảng cách giữa các tỉnh/thành phố dùng ki-lô-mét.' },
      { q: 'Chiều dài một phòng học thường dài khoảng bao nhiêu mét?', a: 'Khoảng 7 m đến 8 m', o: ['Khoảng 7 m đến 8 m', 'Khoảng 70 m', 'Khoảng 1 m', 'Khoảng 1 km'], exp: 'Lớp học dài khoảng 7-8 m.' },
      { q: 'Đổi: 300 cm = ... m?', a: '3 m', o: ['3 m', '30 m', '300 m', '33 m'], exp: '300 cm = 3 m.' },
      { q: 'Đổi: 40 dm = ... m?', a: '4 m', o: ['4 m', '40 m', '400 m', '14 m'], exp: '40 dm = 4 m.' },
      { q: 'Đổi: 2 km = ... m?', a: '2000 m', o: ['2000 m', '200 m', '20 m', '20000 m'], exp: '2 km = 2000 m.' },
      { q: 'Đổi: 1 m 35 cm = ... cm?', a: '135 cm', o: ['135 cm', '153 cm', '36 cm', '1350 cm'], exp: '1 m = 100 cm. 100 + 35 = 135 cm.' },
      { q: 'Tính: 6 m + 8 m = ?', a: '14 m', o: ['14 m', '12 m', '16 m', '15 m'], exp: '6 + 8 = 14 m.' },
      { q: 'Tính: 35 km - 15 km = ?', a: '20 km', o: ['20 km', '25 km', '15 km', '50 km'], exp: '35 - 15 = 20 km.' },
      { q: 'Con đê làng dài 5 km, người ta đã trồng hoa được 2 km. Còn lại bao nhiêu km chưa trồng hoa?', a: '3 km', o: ['3 km', '7 km', '2 km', '4 km'], exp: '5 - 2 = 3 km.' }
    ];
    const it = items[(qNum - 1) % items.length];
    return {
      id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
      type: 'multiple_choice',
      questionText: it.q,
      options: it.o,
      correctAnswer: it.a,
      explanation: it.exp
    };
  }

  if (round >= 25 && round <= 28) {
    // Số có ba chữ số
    const h = 2 + (qNum % 7);
    const t = (qNum * 2) % 10;
    const u = (qNum * 3) % 10;
    const num = h * 100 + t * 10 + u;
    return {
      id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
      type: 'multiple_choice',
      visualType: 'blocks_tens',
      visualData: { hundreds: h, tens: t, units: u },
      questionText: `Số gồm ${h} trăm, ${t} chục và ${u} đơn vị được viết là:`,
      options: makeMCOptions(num.toString(), [`${h}${u}${t}`, `${t}${h}${u}`, `${h + 1}${t}${u}`]),
      correctAnswer: num.toString(),
      explanation: `${h} trăm + ${t} chục + ${u} đơn vị = ${num}.`
    };
  }

  // Rounds 29 to 35: Tiền Việt Nam, biểu đồ, phép tính trong phạm vi 1000 & thi đấu
  const valA = 200 + qNum * 30;
  const valB = 100 + (qNum % 5) * 20;
  const sumVal = valA + valB;
  return {
    id, roundNumber: round, questionNumber: qNum, level: 1, points: 10,
    type: 'multiple_choice',
    questionText: `Tính: ${valA} + ${valB} = ?`,
    options: makeMCOptions(sumVal.toString(), [(sumVal + 100).toString(), (sumVal - 100).toString(), (sumVal + 10).toString()]),
    correctAnswer: sumVal.toString(),
    explanation: `${valA} + ${valB} = ${sumVal}.`
  };
}
