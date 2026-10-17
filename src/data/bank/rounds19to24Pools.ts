import { Question } from '../../types/quiz';

/**
 * NGÂN HÀNG CÂU HỎI MỨC 2 & MỨC 3: VÒNG 19 ĐẾN VÒNG 24
 * SGK Toán 2 Kết Nối Tri Thức Với Cuộc Sống (GDPT 2018)
 * Các chủ đề cốt lõi Học kì 2:
 * Phép nhân, Bảng nhân 2, Bảng nhân 5, Phép chia, Bảng chia 2, Bảng chia 5, 1/2 và 1/5.
 */

export function getRounds19to24Questions(round: number): { level2: Question[]; level3: Question[] } {
  const l2: Question[] = [];
  const l3: Question[] = [];

  const addL2 = (q: Omit<Question, 'roundNumber' | 'level' | 'points' | 'questionNumber'>) => {
    l2.push({ ...q, roundNumber: round, level: 2, points: 10, questionNumber: 0 });
  };

  const addL3 = (q: Omit<Question, 'roundNumber' | 'level' | 'points' | 'questionNumber'>) => {
    l3.push({ ...q, roundNumber: round, level: 3, points: 10, questionNumber: 0 });
  };

  if (round === 19) {
    // Vòng 19: Làm quen phép nhân, thừa số và tích, chuyển tổng thành tích
    addL2({
      id: 'r19_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Chuyển tổng thành tích',
      category: 'calculation',
      questionText: 'Tổng: 4 + 4 + 4 + 4 + 4 được viết dưới dạng tích là:',
      options: ['4 x 5', '5 x 4', '4 x 4', '5 x 5'],
      correctAnswer: '4 x 5',
      explanation: 'Số 4 được lấy 5 lần nên viết là 4 x 5.'
    });
    addL2({
      id: 'r19_l2_02',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Tên gọi thành phần phép nhân',
      category: 'calculation',
      questionText: 'Trong phép nhân 3 x 6 = 18. Số 3 và số 6 được gọi là gì?',
      options: ['Thừa số', 'Số hạng', 'Số bị chia', 'Tích'],
      correctAnswer: 'Thừa số',
      explanation: 'Trong phép nhân, các số nhân với nhau được gọi là thừa số, kết quả gọi là tích.'
    });
    addL2({
      id: 'r19_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tính tích từ tổng',
      category: 'calculation',
      questionText: 'Tính: 6 + 6 + 6 = 6 x ...',
      correctAnswer: '3',
      explanation: 'Số 6 được lấy 3 lần nên bằng 6 x 3.'
    });
    addL2({
      id: 'r19_l2_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Đĩa quả cam',
      category: 'real_world',
      questionText: 'Có 4 đĩa cam, mỗi đĩa có 3 quả cam. Hỏi có tất cả bao nhiêu quả cam?',
      options: ['12 quả', '7 quả', '15 quả', '9 quả'],
      correctAnswer: '12 quả',
      unit: 'quả',
      explanation: '3 được lấy 4 lần: 3 x 4 = 12 quả cam (hoặc 3 + 3 + 3 + 3 = 12).'
    });
    addL2({
      id: 'r19_l2_05',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đúng sai về bản chất phép nhân',
      category: 'logic',
      questionText: 'Tổng nào dưới đây KHÔNG THỂ viết thành phép nhân một số với một số khác?',
      options: ['3 + 3 + 4 + 3', '5 + 5 + 5', '7 + 7', '2 + 2 + 2 + 2'],
      correctAnswer: '3 + 3 + 4 + 3',
      explanation: 'Phép nhân là tổng của các số hạng BẰNG NHAU. 3 + 3 + 4 + 3 có số 4 khác các số còn lại nên không viết trực tiếp thành 3 x 4 được.'
    });
    addL2({
      id: 'r19_l2_06',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tính giá trị tích',
      category: 'calculation',
      questionText: 'Tính tích của hai thừa số 5 và 3. Tích = ...',
      correctAnswer: '15',
      explanation: '5 x 3 = 5 + 5 + 5 = 15.'
    });
    addL2({
      id: 'r19_l2_07',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Bàn học sinh',
      category: 'real_world',
      questionText: 'Trong lớp học có 5 dãy bàn, mỗi dãy bàn có 2 bạn học sinh ngồi. Lớp học đó có bao nhiêu học sinh?',
      options: ['10 bạn', '7 bạn', '12 bạn', '8 bạn'],
      correctAnswer: '10 bạn',
      unit: 'bạn',
      explanation: '2 x 5 = 10 bạn học sinh.'
    });
    addL2({
      id: 'r19_l2_08',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'So sánh tổng và tích',
      category: 'calculation',
      questionText: 'Điền dấu thích hợp: 2 + 2 + 2 + 2 ... 2 x 5',
      options: ['<', '>', '=', 'Không so sánh được'],
      correctAnswer: '<',
      explanation: '2 + 2 + 2 + 2 = 2 x 4 = 8; 2 x 5 = 10. Vì 8 < 10 nên điền dấu <.'
    });
    addL2({
      id: 'r19_l2_09',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Chuyển tích thành tổng để tính',
      category: 'calculation',
      questionText: 'Tính giá trị của tích 7 x 2 = ...',
      correctAnswer: '14',
      explanation: '7 x 2 = 7 + 7 = 14.'
    });
    addL2({
      id: 'r19_l2_10',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Nhân với số 1 và 0',
      category: 'calculation',
      questionText: 'Số nào nhân với 1 cũng bằng:',
      options: ['Chính số đó', 'Số 1', 'Số 0', 'Số gấp đôi'],
      correctAnswer: 'Chính số đó',
      explanation: 'Quy tắc: Bất kì số nào nhân với 1 cũng bằng chính số đó (a x 1 = a).'
    });

    // Vòng 19: Level 3
    addL3({
      id: 'r19_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Tìm số cách biểu diễn tích',
      category: 'logic',
      questionText: 'Có bao nhiêu cách viết số 12 thành tích của hai thừa số lớn hơn 1?',
      options: ['2 cách (2 x 6 và 3 x 4)', '1 cách', '3 cách', '4 cách'],
      correctAnswer: '2 cách (2 x 6 và 3 x 4)',
      explanation: '12 = 2 x 6 = 3 x 4. Gồm đúng 2 cách phân tích.'
    });
    addL3({
      id: 'r19_l3_02',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Quy luật tăng của tích',
      category: 'logic',
      questionText: 'Nếu tăng một thừa số lên 1 đơn vị và giữ nguyên thừa số kia (bằng 4) thì tích tăng thêm bao nhiêu đơn vị?',
      options: ['4 đơn vị', '1 đơn vị', '5 đơn vị', 'Không đổi'],
      correctAnswer: '4 đơn vị',
      explanation: 'Khi thừa số thứ nhất tăng 1 đơn vị, tích sẽ tăng thêm 1 lần thừa số thứ hai: 1 x 4 = 4 đơn vị.'
    });
    addL3({
      id: 'r19_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Chuyển đổi biểu thức thành tích',
      category: 'logic',
      questionText: 'Cho biểu thức: 5 + 5 + 5 + 5 + 10. Biểu thức này bằng 5 nhân với mấy?',
      correctAnswer: '6',
      explanation: '10 = 5 + 5. Vậy có: 5 + 5 + 5 + 5 + 5 + 5 = 5 x 6.'
    });
    addL3({
      id: 'r19_l3_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Bài toán vườn cây hình chữ nhật',
      category: 'real_world',
      questionText: 'Khu vườn trồng cây bắp cải thành 4 hàng, mỗi hàng có 8 cây. Bác nông dân trồng thêm 1 hàng như thế nữa. Hỏi vườn có tất cả bao nhiêu cây bắp cải?',
      options: ['40 cây', '32 cây', '36 cây', '48 cây'],
      correctAnswer: '40 cây',
      unit: 'cây',
      explanation: 'Có tất cả: 4 + 1 = 5 hàng. Mỗi hàng 8 cây nên có: 8 x 5 = 40 cây.'
    });
    addL3({
      id: 'r19_l3_05',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Tìm hai số khi biết tích và tổng',
      category: 'logic',
      questionText: 'Tìm hai số tự nhiên có tổng bằng 9 và có tích bằng 20:',
      options: ['4 và 5', '2 và 7', '3 và 6', '1 và 8'],
      correctAnswer: '4 và 5',
      explanation: '4 + 5 = 9 và 4 x 5 = 20.'
    });
  }

  else if (round === 20) {
    // Vòng 20: Bảng nhân 2 & Đếm đôi (chân gà, đôi đũa, bánh xe)
    addL2({
      id: 'r20_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Bảng nhân 2 cơ bản',
      category: 'calculation',
      questionText: 'Tính: 2 x 7 = ?',
      options: ['14', '12', '16', '18'],
      correctAnswer: '14',
      explanation: '2 x 7 = 14.'
    });
    addL2({
      id: 'r20_l2_02',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Số chân gà',
      category: 'real_world',
      questionText: 'Một con gà có 2 cái chân. Hỏi đàn gà gồm 8 con gà có tất cả bao nhiêu cái chân?',
      options: ['16 cái chân', '14 cái chân', '18 cái chân', '10 cái chân'],
      correctAnswer: '16 cái chân',
      unit: 'cái chân',
      explanation: '2 x 8 = 16 cái chân.'
    });
    addL2({
      id: 'r20_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Đếm thêm 2',
      category: 'pattern',
      questionText: 'Điền số tiếp theo vào dãy số đếm thêm 2: 2, 4, 6, 8, 10, ...',
      correctAnswer: '12',
      explanation: '10 + 2 = 12.'
    });
    addL2({
      id: 'r20_l2_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Đôi đũa ăn cơm',
      category: 'real_world',
      questionText: 'Mẹ xếp 6 đôi đũa lên bàn ăn. Hỏi có tất cả bao nhiêu chiếc đũa?',
      options: ['12 chiếc', '8 chiếc', '10 chiếc', '14 chiếc'],
      correctAnswer: '12 chiếc',
      unit: 'chiếc',
      explanation: 'Mỗi đôi có 2 chiếc đũa: 2 x 6 = 12 chiếc.'
    });
    addL2({
      id: 'r20_l2_05',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Tìm thừa số',
      category: 'calculation',
      questionText: 'Điền số thích hợp: 2 x ? = 18',
      options: ['9', '8', '7', '6'],
      correctAnswer: '9',
      explanation: '2 x 9 = 18.'
    });
    addL2({
      id: 'r20_l2_06',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tính giá trị biểu thức chứa phép nhân',
      category: 'calculation',
      questionText: 'Tính: 2 x 9 + 15 = ...',
      correctAnswer: '33',
      explanation: '2 x 9 = 18; 18 + 15 = 33.'
    });
    addL2({
      id: 'r20_l2_07',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đặc điểm tích trong bảng nhân 2',
      category: 'logic',
      questionText: 'Khẳng định nào dưới đây là ĐÚNG về bảng nhân 2?',
      options: [
        'Tất cả các tích trong bảng nhân 2 đều là số chẵn',
        'Tích của 2 nhân với bất kì số nào cũng là số lẻ',
        '2 x 0 = 2',
        '2 x 10 = 22'
      ],
      correctAnswer: 'Tất cả các tích trong bảng nhân 2 đều là số chẵn',
      explanation: 'Các tích trong bảng nhân 2: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 đều là các số chẵn.'
    });
    addL2({
      id: 'r20_l2_08',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Xe đạp hai bánh',
      category: 'real_world',
      questionText: 'Trong nhà xe có 9 chiếc xe đạp 2 bánh. Hỏi 9 chiếc xe đạp đó có tất cả bao nhiêu bánh xe?',
      options: ['18 bánh xe', '16 bánh xe', '20 bánh xe', '14 bánh xe'],
      correctAnswer: '18 bánh xe',
      unit: 'bánh xe',
      explanation: '2 x 9 = 18 bánh xe.'
    });
    addL2({
      id: 'r20_l2_09',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tính nhanh phép trừ có nhân',
      category: 'calculation',
      questionText: 'Tính: 2 x 8 - 9 = ...',
      correctAnswer: '7',
      explanation: '2 x 8 = 16; 16 - 9 = 7.'
    });
    addL2({
      id: 'r20_l2_10',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'So sánh kết quả bảng nhân 2',
      category: 'calculation',
      questionText: 'So sánh hai phép tính: 2 x 6 + 4 ... 2 x 9',
      options: ['<', '>', '=', 'Không so sánh được'],
      correctAnswer: '<',
      explanation: '2 x 6 + 4 = 12 + 4 = 16; 2 x 9 = 18. Vì 16 < 18 nên điền dấu <.'
    });

    // Vòng 20: Level 3
    addL3({
      id: 'r20_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Số gà và số thỏ đếm chân',
      category: 'logic',
      questionText: 'Trong chuồng có 5 con gà và một số con thỏ. Người ta đếm được tất cả 26 cái chân. Hỏi trong chuồng có bao nhiêu con thỏ? (Gà 2 chân, thỏ 4 chân)',
      options: ['4 con thỏ', '3 con thỏ', '5 con thỏ', '6 con thỏ'],
      correctAnswer: '4 con thỏ',
      unit: 'con thỏ',
      explanation: '5 con gà có: 2 x 5 = 10 cái chân. Số chân của thỏ là: 26 - 10 = 16 cái chân. Vì thỏ có 4 chân nên số thỏ là: 16 : 4 = 4 con thỏ.'
    });
    addL3({
      id: 'r20_l3_02',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Bài toán hai bước tính số học sinh',
      category: 'real_world',
      questionText: 'Có 7 bàn học sinh, mỗi bàn có 2 bạn ngồi. Sau đó có thêm 3 bạn nữa vào lớp. Hỏi trong phòng học lúc này có tất cả bao nhiêu bạn học sinh?',
      options: ['17 bạn', '14 bạn', '16 bạn', '18 bạn'],
      correctAnswer: '17 bạn',
      unit: 'bạn',
      explanation: '7 bàn có: 2 x 7 = 14 bạn. Thêm 3 bạn: 14 + 3 = 17 bạn.'
    });
    addL3({
      id: 'r20_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Biến đổi tổng thành nhân với 2',
      category: 'logic',
      questionText: 'Tìm y biết: 2 x y = 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2. y = ...',
      correctAnswer: '8',
      explanation: 'Có 8 số 2 cộng lại nên bằng 2 x 8. Do đó y = 8.'
    });
    addL3({
      id: 'r20_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Tính tổng dãy chẵn',
      category: 'pattern',
      questionText: 'Tổng các số chẵn từ 2 đến 10 là: 2 + 4 + 6 + 8 + 10 = ?',
      options: ['30', '28', '32', '24'],
      correctAnswer: '30',
      explanation: '(2 + 10) + (4 + 8) + 6 = 12 + 12 + 6 = 30.'
    });
    addL3({
      id: 'r20_l3_05',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Trạng Nguyên chia cặp',
      category: 'logic',
      questionText: 'Có 18 bạn học sinh xếp thành các cặp (mỗi cặp gồm 2 bạn) để múa hát. Sau khi xếp xong, có 2 cặp xin nghỉ. Hỏi còn lại bao nhiêu bạn đang tham gia múa?',
      options: ['14 bạn', '16 bạn', '12 bạn', '15 bạn'],
      correctAnswer: '14 bạn',
      unit: 'bạn',
      explanation: '2 cặp xin nghỉ là: 2 x 2 = 4 bạn. Số bạn còn lại: 18 - 4 = 14 bạn.'
    });
  }

  else if (round === 21) {
    // Vòng 21: Bảng nhân 5 & Xem đồng hồ 5 phút
    addL2({
      id: 'r21_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Bảng nhân 5',
      category: 'calculation',
      questionText: 'Tính: 5 x 7 = ?',
      options: ['35', '30', '40', '25'],
      correctAnswer: '35',
      explanation: '5 x 7 = 35.'
    });
    addL2({
      id: 'r21_l2_02',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Ngôi sao 5 cánh',
      category: 'real_world',
      questionText: 'Mỗi lá cờ Tổ quốc có một ngôi sao vàng 5 cánh. Hỏi 6 lá cờ như thế có tất cả bao nhiêu cánh sao?',
      options: ['30 cánh', '25 cánh', '35 cánh', '20 cánh'],
      correctAnswer: '30 cánh',
      unit: 'cánh sao',
      explanation: '5 x 6 = 30 cánh sao.'
    });
    addL2({
      id: 'r21_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Đếm thêm 5 trên mặt đồng hồ',
      category: 'pattern',
      questionText: 'Khi kim phút chỉ vào số 5 trên mặt đồng hồ thì tương ứng với bao nhiêu phút?',
      correctAnswer: '25',
      unit: 'phút',
      explanation: '5 x 5 = 25 phút.'
    });
    addL2({
      id: 'r21_l2_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Tiền Việt Nam 5 nghìn đồng',
      category: 'real_world',
      questionText: 'An có 4 tờ tiền loại 5 nghìn đồng. An có tất cả bao nhiêu nghìn đồng?',
      options: ['20 nghìn đồng', '25 nghìn đồng', '15 nghìn đồng', '10 nghìn đồng'],
      correctAnswer: '20 nghìn đồng',
      explanation: '5 x 4 = 20 nghìn đồng.'
    });
    addL2({
      id: 'r21_l2_05',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Chữ số tận cùng bảng nhân 5',
      category: 'logic',
      questionText: 'Các tích trong bảng nhân 5 đều có chữ số tận cùng là chữ số nào?',
      options: ['0 hoặc 5', 'Chỉ có 5', 'Chỉ có 0', 'Bất kì chữ số nào'],
      correctAnswer: '0 hoặc 5',
      explanation: 'Nhân 5 với số chẵn tận cùng là 0, nhân 5 với số lẻ tận cùng là 5.'
    });
    addL2({
      id: 'r21_l2_06',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tính biểu thức có nhân 5',
      category: 'calculation',
      questionText: 'Tính: 5 x 8 - 18 = ...',
      correctAnswer: '22',
      explanation: '5 x 8 = 40; 40 - 18 = 22.'
    });
    addL2({
      id: 'r21_l2_07',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Bình hoa hồng',
      category: 'real_world',
      questionText: 'Mai cắm hoa vào 5 bình hoa, mỗi bình có đúng 9 bông hoa. Mai đã cắm tất cả bao nhiêu bông hoa?',
      options: ['45 bông', '40 bông', '50 bông', '35 bông'],
      correctAnswer: '45 bông',
      unit: 'bông hoa',
      explanation: '5 x 9 = 45 (hoặc 9 x 5 = 45 bông hoa).'
    });
    addL2({
      id: 'r21_l2_08',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đúng sai so sánh bảng nhân',
      category: 'calculation',
      questionText: 'Phép tính nào sau đây có kết quả lớn nhất?',
      options: ['5 x 8', '2 x 9 + 20', '5 x 7 + 6', '5 x 9 - 6'],
      correctAnswer: '5 x 7 + 6',
      explanation: '5 x 7 + 6 = 35 + 6 = 41. (5 x 8 = 40; 2 x 9 + 20 = 38; 5 x 9 - 6 = 39).'
    });
    addL2({
      id: 'r21_l2_09',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Số ngón tay trên bàn tay',
      category: 'real_world',
      questionText: 'Mỗi bàn tay có 5 ngón tay. Hỏi 7 bàn tay như thế có tất cả bao nhiêu ngón tay?',
      correctAnswer: '35',
      unit: 'ngón tay',
      explanation: '5 x 7 = 35 ngón tay.'
    });
    addL2({
      id: 'r21_l2_10',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'Sắp xếp dãy tích',
      category: 'calculation',
      questionText: 'Sắp xếp theo thứ tự từ bé đến lớn: 5 x 4, 5 x 2, 5 x 6, 5 x 3',
      options: [
        '5 x 2, 5 x 3, 5 x 4, 5 x 6',
        '5 x 2, 5 x 4, 5 x 3, 5 x 6',
        '5 x 6, 5 x 4, 5 x 3, 5 x 2',
        '5 x 3, 5 x 2, 5 x 4, 5 x 6'
      ],
      correctAnswer: '5 x 2, 5 x 3, 5 x 4, 5 x 6',
      explanation: '10 < 15 < 20 < 30.'
    });

    // Vòng 21: Level 3
    addL3({
      id: 'r21_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Toán đồng hồ 5 phút chính xác',
      category: 'measurement',
      visualType: 'clock',
      visualData: { hour: 8, minute: 40 },
      questionText: 'Đồng hồ chỉ kim ngắn ở gần số 9, kim dài chỉ đúng số 8. Lúc đó là mấy giờ?',
      options: ['8 giờ 40 phút (9 giờ kém 20 phút)', '8 giờ 8 phút', '9 giờ 40 phút', '8 giờ 35 phút'],
      correctAnswer: '8 giờ 40 phút (9 giờ kém 20 phút)',
      explanation: 'Kim dài ở số 8 là: 5 x 8 = 40 phút. Kim ngắn qua số 8 gần tới số 9 là 8 giờ 40 phút.'
    });
    addL3({
      id: 'r21_l3_02',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Bài toán 2 bước mua sắm tiền Việt',
      category: 'real_world',
      questionText: 'Nam mua 5 quyển vở, mỗi quyển giá 5 nghìn đồng. Nam đưa cho bác bán hàng tờ 50 nghìn đồng. Bác bán hàng trả lại Nam bao nhiêu nghìn đồng?',
      options: ['25 nghìn đồng', '20 nghìn đồng', '30 nghìn đồng', '15 nghìn đồng'],
      correctAnswer: '25 nghìn đồng',
      explanation: '5 quyển vở hết: 5 x 5 = 25 nghìn đồng. Bác trả lại: 50 - 25 = 25 nghìn đồng.'
    });
    addL3({
      id: 'r21_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Quy luật tăng 5 đơn vị',
      category: 'pattern',
      questionText: 'Tìm số hạng thứ 8 của dãy số: 5, 10, 15, 20, ...',
      correctAnswer: '40',
      explanation: 'Số thứ 8 là: 5 x 8 = 40.'
    });
    addL3({
      id: 'r21_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Toán đố Trạng Nguyên chia kẹo',
      category: 'logic',
      questionText: 'Có 5 gói kẹo như nhau. Nếu lấy ra từ mỗi gói 2 cái kẹo thì số kẹo lấy ra bằng đúng số kẹo của 1 gói ban đầu. Hỏi ban đầu cả 5 gói kẹo có tất cả bao nhiêu cái kẹo?',
      options: ['50 cái kẹo', '40 cái kẹo', '30 cái kẹo', '60 cái kẹo'],
      correctAnswer: '50 cái kẹo',
      unit: 'cái kẹo',
      explanation: 'Số kẹo lấy ra từ 5 gói là: 2 x 5 = 10 cái kẹo. Vì số kẹo này bằng 1 gói nên 1 gói có 10 cái kẹo. Cả 5 gói có: 10 x 5 = 50 cái kẹo.'
    });
    addL3({
      id: 'r21_l3_05',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Biến đổi tổng thành tích thông minh',
      category: 'logic',
      questionText: 'Cho biểu thức: 5 x 6 + 5 x 3. Biểu thức này có kết quả bằng phép nhân nào?',
      options: ['5 x 9', '5 x 18', '10 x 9', '5 x 8'],
      correctAnswer: '5 x 9',
      explanation: '5 được lấy 6 lần cộng thêm 5 được lấy 3 lần bằng 5 được lấy: 6 + 3 = 9 lần (5 x 9 = 45).'
    });
  }

  else if (round === 22) {
    // Vòng 22: Làm quen phép chia, Số bị chia - Số chia - Thương
    addL2({
      id: 'r22_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Tên gọi thành phần phép chia',
      category: 'calculation',
      questionText: 'Trong phép tính 18 : 2 = 9. Tên gọi của số 18, số 2 và số 9 lần lượt là:',
      options: [
        'Số bị chia, Số chia, Thương',
        'Số chia, Số bị chia, Thương',
        'Thừa số, Thừa số, Tích',
        'Số hạng, Số hạng, Tổng'
      ],
      correctAnswer: 'Số bị chia, Số chia, Thương',
      explanation: 'Số đứng trước dấu chia là Số bị chia, đứng sau dấu chia là Số chia, kết quả là Thương.'
    });
    addL2({
      id: 'r22_l2_02',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Chia đều kẹo',
      category: 'real_world',
      questionText: 'Có 12 cái kẹo chia đều cho 3 bạn. Hỏi mỗi bạn được bao nhiêu cái kẹo?',
      options: ['4 cái kẹo', '3 cái kẹo', '5 cái kẹo', '6 cái kẹo'],
      correctAnswer: '4 cái kẹo',
      unit: 'cái kẹo',
      explanation: '12 : 3 = 4 cái kẹo.'
    });
    addL2({
      id: 'r22_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Từ phép nhân viết thành phép chia',
      category: 'calculation',
      questionText: 'Biết 2 x 6 = 12. Phép chia tương ứng: 12 : 2 = ...',
      correctAnswer: '6',
      explanation: 'Lấy tích chia cho thừa số này được thừa số kia: 12 : 2 = 6.'
    });
    addL2({
      id: 'r22_l2_04',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Tìm thương của phép chia',
      category: 'calculation',
      questionText: 'Tìm thương của phép chia có số bị chia là 20 và số chia là 5:',
      options: ['4', '5', '15', '25'],
      correctAnswer: '4',
      explanation: '20 : 5 = 4.'
    });
    addL2({
      id: 'r22_l2_05',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Xếp học sinh vào các nhóm',
      category: 'real_world',
      questionText: 'Có 16 bạn học sinh chia đều thành 4 nhóm. Mỗi nhóm có bao nhiêu bạn?',
      options: ['4 bạn', '5 bạn', '3 bạn', '6 bạn'],
      correctAnswer: '4 bạn',
      unit: 'bạn',
      explanation: '16 : 4 = 4 bạn.'
    });
    addL2({
      id: 'r22_l2_06',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Chia đều số quả vào các đĩa',
      category: 'real_world',
      questionText: 'Có 15 quả táo chia đều vào 5 đĩa. Mỗi đĩa có ... quả táo.',
      correctAnswer: '3',
      unit: 'quả táo',
      explanation: '15 : 5 = 3 quả táo.'
    });
    addL2({
      id: 'r22_l2_07',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đúng sai về phép chia cho chính nó',
      category: 'logic',
      questionText: 'Bất kì số nào khác 0 chia cho chính nó đều bằng:',
      options: ['1', '0', 'Chính số đó', '2'],
      correctAnswer: '1',
      explanation: 'a : a = 1 (với a khác 0).'
    });
    addL2({
      id: 'r22_l2_08',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Từ một phép nhân lập được mấy phép chia',
      category: 'calculation',
      questionText: 'Từ phép nhân 2 x 5 = 10, ta viết được mấy phép chia tương ứng?',
      options: [
        '2 phép chia (10 : 2 = 5 và 10 : 5 = 2)',
        '1 phép chia',
        '3 phép chia',
        '4 phép chia'
      ],
      correctAnswer: '2 phép chia (10 : 2 = 5 và 10 : 5 = 2)',
      explanation: 'Từ 1 phép nhân hai thừa số khác nhau, ta lập được đúng 2 phép chia tương ứng.'
    });
    addL2({
      id: 'r22_l2_09',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tìm số bị chia khi biết thương và số chia',
      category: 'calculation',
      questionText: 'Tìm x biết: x : 2 = 8. x = ...',
      correctAnswer: '16',
      explanation: 'x = 8 x 2 = 16.'
    });
    addL2({
      id: 'r22_l2_10',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'So sánh các thương',
      category: 'calculation',
      questionText: 'Thương nào dưới đây có giá trị bé nhất?',
      options: ['10 : 5', '14 : 2', '16 : 2', '15 : 5'],
      correctAnswer: '10 : 5',
      explanation: '10 : 5 = 2 (bé nhất). Các thương khác lần lượt là 7, 8, 3.'
    });

    // Vòng 22: Level 3
    addL3({
      id: 'r22_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Số chia hết cho cả 2 và 5',
      category: 'logic',
      questionText: 'Trong các số từ 1 đến 30, có bao nhiêu số chia hết cho cả 2 và 5?',
      options: ['3 số (10, 20, 30)', '2 số', '5 số', '4 số'],
      correctAnswer: '3 số (10, 20, 30)',
      explanation: 'Số chia hết cho cả 2 và 5 có chữ số tận cùng là 0: 10, 20, 30 (tổng cộng 3 số).'
    });
    addL3({
      id: 'r22_l3_02',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Bài toán chia nhóm thừa thiếu',
      category: 'logic',
      questionText: 'Cô giáo có 25 quyển vở thưởng cho học sinh giỏi. Cô thưởng cho mỗi bạn 5 quyển thì vừa hết. Hỏi có bao nhiêu bạn được thưởng vở?',
      options: ['5 bạn', '4 bạn', '6 bạn', '7 bạn'],
      correctAnswer: '5 bạn',
      unit: 'bạn',
      explanation: '25 : 5 = 5 bạn.'
    });
    addL3({
      id: 'r22_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tìm số bị chia và số chia',
      category: 'logic',
      questionText: 'Một phép chia có số chia bằng 2, thương bằng 7. Số bị chia của phép chia đó là ...',
      correctAnswer: '14',
      explanation: 'Số bị chia = Thương x Số chia = 7 x 2 = 14.'
    });
    addL3({
      id: 'r22_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Thay đổi thương khi số bị chia thay đổi',
      category: 'logic',
      questionText: 'Nếu số bị chia tăng thêm 4 đơn vị mà số chia vẫn giữ nguyên là 2 thì thương tăng thêm bao nhiêu đơn vị?',
      options: ['2 đơn vị', '4 đơn vị', '1 đơn vị', '8 đơn vị'],
      correctAnswer: '2 đơn vị',
      explanation: '4 : 2 = 2 đơn vị. Thương tăng thêm đúng 2 đơn vị.'
    });
    addL3({
      id: 'r22_l3_05',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Chia bàn ăn tập thể',
      category: 'real_world',
      questionText: 'Có 20 bạn học sinh đi dã ngoại. Mỗi bàn ăn ngồi được 4 bạn. Các bạn đã ngồi kín 3 bàn. Hỏi còn bao nhiêu bạn chưa có chỗ ngồi?',
      options: ['8 bạn', '12 bạn', '10 bạn', '6 bạn'],
      correctAnswer: '8 bạn',
      unit: 'bạn',
      explanation: '3 bàn có: 4 x 3 = 12 bạn. Số bạn chưa có chỗ ngồi: 20 - 12 = 8 bạn.'
    });
  }

  else if (round === 23) {
    // Vòng 23: Bảng chia 2 & Một phần hai (1/2)
    addL2({
      id: 'r23_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Bảng chia 2',
      category: 'calculation',
      questionText: 'Tính: 16 : 2 = ?',
      options: ['8', '7', '9', '6'],
      correctAnswer: '8',
      explanation: '16 : 2 = 8.'
    });
    addL2({
      id: 'r23_l2_02',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Khái niệm một phần hai (1/2)',
      category: 'calculation',
      questionText: 'Một phần hai (1/2) còn được gọi là gì?',
      options: ['Một nửa', 'Một phần ba', 'Gấp đôi', 'Một góc'],
      correctAnswer: 'Một nửa',
      explanation: 'Chia một vật thành 2 phần bằng nhau, lấy 1 phần thì phần đó gọi là 1/2 hay một nửa.'
    });
    addL2({
      id: 'r23_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tìm 1/2 của một số',
      category: 'calculation',
      questionText: 'Một phần hai của 18 là số nào?',
      correctAnswer: '9',
      explanation: '18 : 2 = 9.'
    });
    addL2({
      id: 'r23_l2_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Chia quả dưa hấu',
      category: 'real_world',
      questionText: 'Mẹ mua quả dưa hấu cân nặng 4 kg. Mẹ bổ đôi quả dưa thành hai phần bằng nhau. Mỗi phần cân nặng bao nhiêu ki-lô-gam?',
      options: ['2 kg', '1 kg', '3 kg', '8 kg'],
      correctAnswer: '2 kg',
      unit: 'kg',
      explanation: '4 : 2 = 2 kg.'
    });
    addL2({
      id: 'r23_l2_05',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Hình đã tô màu 1/2',
      category: 'geometry',
      questionText: 'Hình nào dưới đây được coi là đã tô màu 1/2 hình?',
      options: [
        'Hình vuông chia thành 2 phần bằng nhau và tô màu 1 phần',
        'Hình tròn chia thành 3 phần và tô màu 1 phần',
        'Hình chữ nhật chia thành 2 phần không bằng nhau',
        'Hình tam giác chưa chia phần nào'
      ],
      correctAnswer: 'Hình vuông chia thành 2 phần bằng nhau và tô màu 1 phần',
      explanation: 'Muốn có 1/2 thì hình phải được chia thành các phần BẰNG NHAU rồi lấy 1 phần.'
    });
    addL2({
      id: 'r23_l2_06',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tính biểu thức bảng chia 2',
      category: 'calculation',
      questionText: 'Tính: 20 : 2 - 4 = ...',
      correctAnswer: '6',
      explanation: '20 : 2 = 10; 10 - 4 = 6.'
    });
    addL2({
      id: 'r23_l2_07',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Cắt dây chia đôi',
      category: 'measurement',
      questionText: 'Sợi dây ruy băng dài 14 dm. Bạn Mai cắt sợi dây làm 2 đoạn bằng nhau. Mỗi đoạn dài bao nhiêu đề-xi-mét?',
      options: ['7 dm', '6 dm', '8 dm', '12 dm'],
      correctAnswer: '7 dm',
      unit: 'dm',
      explanation: '14 : 2 = 7 dm.'
    });
    addL2({
      id: 'r23_l2_08',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đúng sai về 1/2',
      category: 'logic',
      questionText: 'Tìm khẳng định SAI trong các câu dưới đây:',
      options: [
        'Một phần hai của 12 là 7',
        'Một phần hai của 10 là 5',
        '14 : 2 = 7',
        'Số chẵn luôn chia hết cho 2'
      ],
      correctAnswer: 'Một phần hai của 12 là 7',
      explanation: '12 : 2 = 6, nên 1/2 của 12 phải là 6 chứ không phải 7.'
    });
    addL2({
      id: 'r23_l2_09',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tìm số ban đầu khi biết một nửa',
      category: 'calculation',
      questionText: 'Một nửa số bi của Nam là 8 viên bi. Hỏi Nam có tất cả bao nhiêu viên bi?',
      correctAnswer: '16',
      unit: 'viên bi',
      explanation: '8 x 2 = 16 viên bi.'
    });
    addL2({
      id: 'r23_l2_10',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Tính chuỗi chia nhân',
      category: 'calculation',
      questionText: 'Tính: 18 : 2 + 5 x 2 = ?',
      options: ['19', '18', '20', '16'],
      correctAnswer: '19',
      explanation: '18 : 2 = 9; 5 x 2 = 10; 9 + 10 = 19.'
    });

    // Vòng 23: Level 3
    addL3({
      id: 'r23_l3_01',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Toán bẫy chia đôi số gà',
      category: 'real_world',
      questionText: 'Bác Ba nuôi 20 con gà. Bác đã bán đi 1/2 số con gà đó. Sau đó bác lại mua thêm 6 con gà nữa. Hỏi hiện nay bác Ba có bao nhiêu con gà?',
      options: ['16 con', '10 con', '14 con', '18 con'],
      correctAnswer: '16 con',
      unit: 'con',
      explanation: 'Bác bán 1/2 là: 20 : 2 = 10 con. Bác còn lại 10 con. Mua thêm 6 con: 10 + 6 = 16 con.'
    });
    addL3({
      id: 'r23_l3_02',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Tô màu 1/2 hình bàn cờ',
      category: 'geometry',
      questionText: 'Một hình vuông lớn gồm 16 ô vuông nhỏ bằng nhau. Người ta đã tô màu 1/2 số ô vuông đó. Hỏi còn lại bao nhiêu ô vuông chưa tô màu?',
      options: ['8 ô vuông', '6 ô vuông', '10 ô vuông', '4 ô vuông'],
      correctAnswer: '8 ô vuông',
      explanation: '16 : 2 = 8 ô đã tô màu. Số ô chưa tô: 16 - 8 = 8 ô vuông.'
    });
    addL3({
      id: 'r23_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Bài toán tuổi mẹ và con qua 1/2',
      category: 'real_world',
      questionText: 'Mẹ 36 tuổi. Tuổi của con bằng 1/2 tuổi mẹ bớt đi 10 tuổi. Hỏi con bao nhiêu tuổi?',
      correctAnswer: '8',
      unit: 'tuổi',
      explanation: '1/2 tuổi mẹ: 36 : 2 = 18 tuổi. Tuổi con: 18 - 10 = 8 tuổi.'
    });
    addL3({
      id: 'r23_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Chia kẹo hai lần liên tiếp',
      category: 'logic',
      questionText: 'An có một túi kẹo. An cho Bình 1/2 số kẹo trong túi rồi lại cho Cư 1/2 số kẹo còn lại. Lúc này An còn lại đúng 4 cái kẹo. Hỏi ban đầu túi kẹo của An có bao nhiêu cái?',
      options: ['16 cái', '12 cái', '8 cái', '20 cái'],
      correctAnswer: '16 cái',
      unit: 'cái',
      explanation: 'Trước khi cho Cư, An có: 4 x 2 = 8 cái kẹo. Ban đầu An có: 8 x 2 = 16 cái kẹo.'
    });
    addL3({
      id: 'r23_l3_05',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Tìm số có hai chữ số thỏa mãn 1/2',
      category: 'logic',
      questionText: 'Tìm số chẵn lớn nhất có hai chữ số mà 1/2 của số đó là một số có hai chữ số giống nhau:',
      options: ['88', '66', '44', '98'],
      correctAnswer: '88',
      explanation: 'Các số có hai chữ số giống nhau là: 11, 22, 33, 44... Gấp đôi lên ta được: 22, 44, 66, 88. Số lớn nhất có 2 chữ số là 88 (1/2 của 88 là 44).'
    });
  }

  else if (round === 24) {
    // Vòng 24: Bảng chia 5 & Một phần năm (1/5)
    addL2({
      id: 'r24_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Bảng chia 5',
      category: 'calculation',
      questionText: 'Tính: 35 : 5 = ?',
      options: ['7', '6', '8', '5'],
      correctAnswer: '7',
      explanation: '35 : 5 = 7.'
    });
    addL2({
      id: 'r24_l2_02',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Khái niệm một phần năm (1/5)',
      category: 'calculation',
      questionText: 'Một phần năm (1/5) của một đoạn thẳng dài 20 cm là:',
      options: ['4 cm', '5 cm', '10 cm', '15 cm'],
      correctAnswer: '4 cm',
      unit: 'cm',
      explanation: '20 : 5 = 4 cm.'
    });
    addL2({
      id: 'r24_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tính thương bảng chia 5',
      category: 'calculation',
      questionText: 'Tính: 45 : 5 = ...',
      correctAnswer: '9',
      explanation: '45 : 5 = 9.'
    });
    addL2({
      id: 'r24_l2_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Chia sách vào 5 ngăn',
      category: 'real_world',
      questionText: 'Có 40 quyển sách chia đều vào 5 ngăn giá sách. Mỗi ngăn có bao nhiêu quyển sách?',
      options: ['8 quyển', '7 quyển', '9 quyển', '6 quyển'],
      correctAnswer: '8 quyển',
      unit: 'quyển',
      explanation: '40 : 5 = 8 quyển.'
    });
    addL2({
      id: 'r24_l2_05',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tìm 1/5 của số lít nước',
      category: 'measurement',
      questionText: 'Một thùng có 50 lít nước. Người ta đã lấy ra 1/5 số nước đó. Số lít nước đã lấy ra là ... l.',
      correctAnswer: '10',
      unit: 'l',
      explanation: '50 : 5 = 10 lít.'
    });
    addL2({
      id: 'r24_l2_06',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đúng sai về 1/5',
      category: 'logic',
      questionText: 'Phát biểu nào sau đây là ĐÚNG?',
      options: [
        'Một phần năm của 25 kg là 5 kg',
        'Một phần năm của 30 là 7',
        '45 : 5 = 8',
        'Một phần năm của 10 m là 5 m'
      ],
      correctAnswer: 'Một phần năm của 25 kg là 5 kg',
      explanation: '25 : 5 = 5 kg là đáp án chính xác.'
    });
    addL2({
      id: 'r24_l2_07',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Phát kẹo cho 5 tổ',
      category: 'real_world',
      questionText: 'Cô giáo có 30 gói kẹo chia đều cho 5 tổ. Mỗi tổ nhận được bao nhiêu gói kẹo?',
      options: ['6 gói', '5 gói', '7 gói', '8 gói'],
      correctAnswer: '6 gói',
      unit: 'gói',
      explanation: '30 : 5 = 6 gói kẹo.'
    });
    addL2({
      id: 'r24_l2_08',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tìm số ban đầu khi biết 1/5',
      category: 'calculation',
      questionText: 'Biết 1/5 của một số là 6. Số đó là ...',
      correctAnswer: '30',
      explanation: '6 x 5 = 30.'
    });
    addL2({
      id: 'r24_l2_09',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Dãy tính kết hợp bảng chia 5',
      category: 'calculation',
      questionText: 'Tính: 50 : 5 + 25 : 5 = ?',
      options: ['15', '10', '20', '25'],
      correctAnswer: '15',
      explanation: '10 + 5 = 15.'
    });
    addL2({
      id: 'r24_l2_10',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'So sánh các thương',
      category: 'calculation',
      questionText: 'So sánh: 25 : 5 + 3 ... 40 : 5',
      options: ['=', '>', '<', 'Không so sánh được'],
      correctAnswer: '=',
      explanation: '25 : 5 + 3 = 5 + 3 = 8; 40 : 5 = 8. Hai vế bằng nhau nên điền dấu =.'
    });

    // Vòng 24: Level 3
    addL3({
      id: 'r24_l3_01',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Toán hai bước tính còn lại sau khi dùng 1/5',
      category: 'real_world',
      questionText: 'Một cửa hàng có 45 bao xi măng. Ngày thứ nhất bán được 1/5 số bao xi măng đó. Hỏi cửa hàng còn lại bao nhiêu bao xi măng?',
      options: ['36 bao', '9 bao', '40 bao', '35 bao'],
      correctAnswer: '36 bao',
      unit: 'bao',
      explanation: 'Ngày thứ nhất bán: 45 : 5 = 9 bao. Cửa hàng còn lại: 45 - 9 = 36 bao.'
    });
    addL3({
      id: 'r24_l3_02',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'So sánh 1/2 và 1/5',
      category: 'logic',
      questionText: 'Cho sợi dây dài 20 dm. Hỏi 1/2 sợi dây dài hơn 1/5 sợi dây đó bao nhiêu đề-xi-mét?',
      options: ['6 dm', '10 dm', '4 dm', '8 dm'],
      correctAnswer: '6 dm',
      unit: 'dm',
      explanation: '1/2 sợi dây là: 20 : 2 = 10 dm. 1/5 sợi dây là: 20 : 5 = 4 dm. Hiệu: 10 - 4 = 6 dm.'
    });
    addL3({
      id: 'r24_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Đoàn học sinh chia xe',
      category: 'real_world',
      questionText: 'Có 35 học sinh đi tham quan bằng xe ô tô 5 chỗ (mỗi xe chở đúng 5 học sinh). Hỏi cần ít nhất bao nhiêu chiếc ô tô như thế?',
      correctAnswer: '7',
      unit: 'chiếc xe',
      explanation: '35 : 5 = 7 chiếc xe.'
    });
    addL3({
      id: 'r24_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Tìm số thỏa mãn điều kiện chia hết',
      category: 'logic',
      questionText: 'Số bé nhất có hai chữ số mà chia cho 5 dư 3 là số nào?',
      options: ['13', '18', '23', '28'],
      correctAnswer: '13',
      explanation: 'Số bé nhất có 2 chữ số chia hết cho 5 là 10. Cộng thêm số dư 3 ta được: 10 + 3 = 13.'
    });
    addL3({
      id: 'r24_l3_05',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Chia táo vào rổ có rổ đựng táo',
      category: 'logic',
      questionText: 'Có 5 quả táo để trong rổ. Làm thế nào để chia cho 5 bạn, mỗi bạn được 1 quả táo mà trong rổ vẫn còn lại 1 quả táo?',
      options: [
        'Chia cho 4 bạn đầu mỗi bạn 1 quả, bạn thứ 5 nhận cả chiếc rổ chứa quả táo còn lại',
        'Cắt đôi các quả táo',
        'Để dành 1 quả táo không chia',
        'Không có cách nào thực hiện được'
      ],
      correctAnswer: 'Chia cho 4 bạn đầu mỗi bạn 1 quả, bạn thứ 5 nhận cả chiếc rổ chứa quả táo còn lại',
      explanation: 'Đây là câu đố Trạng Nguyên kinh điển: bạn cuối cùng nhận quả táo kèm cả chiếc rổ, nên bạn ấy vẫn có táo và trong rổ vẫn có quả táo đó.'
    });
  }

  return { level2: l2, level3: l3 };
}
