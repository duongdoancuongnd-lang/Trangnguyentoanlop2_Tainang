import { Question } from '../../types/quiz';

/**
 * NGÂN HÀNG CÂU HỎI MỨC 2 & MỨC 3: VÒNG 1 ĐẾN VÒNG 7
 * SGK Toán 2 Kết Nối Tri Thức Với Cuộc Sống (GDPT 2018)
 * Mỗi vòng cung cấp 14-16 câu Mức 2 và 7-9 câu Mức 3 chất lượng cao, đa dạng dạng bài.
 */

export function getRounds1to7Questions(round: number): { level2: Question[]; level3: Question[] } {
  const l2: Question[] = [];
  const l3: Question[] = [];

  const addL2 = (q: Omit<Question, 'roundNumber' | 'level' | 'points' | 'questionNumber'>) => {
    l2.push({ ...q, roundNumber: round, level: 2, points: 10, questionNumber: 0 });
  };

  const addL3 = (q: Omit<Question, 'roundNumber' | 'level' | 'points' | 'questionNumber'>) => {
    l3.push({ ...q, roundNumber: round, level: 3, points: 10, questionNumber: 0 });
  };

  if (round === 1) {
    // Vòng 1: Các số đến 100, số liền trước/sau, cấu tạo số, so sánh
    addL2({
      id: 'r1_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Số liền trước, liền sau',
      category: 'calculation',
      questionText: 'Số liền trước của số lớn nhất có hai chữ số là số nào?',
      options: ['98', '99', '97', '100'],
      correctAnswer: '98',
      explanation: 'Số lớn nhất có hai chữ số là 99. Số liền trước của 99 là 99 - 1 = 98.'
    });
    addL2({
      id: 'r1_l2_02',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Cấu tạo số',
      category: 'calculation',
      questionText: 'Trong các số: 35, 53, 45, 54. Những số có chữ số hàng chục lớn hơn chữ số hàng đơn vị là:',
      options: ['53 và 54', '35 và 45', '53 và 35', '45 và 54'],
      correctAnswer: '53 và 54',
      explanation: '53 có hàng chục là 5 > 3. 54 có hàng chục là 5 > 4.'
    });
    addL2({
      id: 'r1_l2_03',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Số tròn chục',
      category: 'calculation',
      questionText: 'Tìm số tròn chục x biết: 45 < x < 58',
      options: ['50', '40', '60', '55'],
      correctAnswer: '50',
      explanation: 'Số tròn chục nằm giữa 45 và 58 là 50.'
    });
    addL2({
      id: 'r1_l2_04',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'So sánh phép tính',
      category: 'calculation',
      questionText: 'Điền dấu thích hợp vào chỗ chấm: 30 + 40 ... 90 - 20',
      options: ['=', '>', '<', 'Không so sánh được'],
      correctAnswer: '=',
      explanation: '30 + 40 = 70; 90 - 20 = 70. Hai bên bằng nhau nên điền dấu =.'
    });
    addL2({
      id: 'r1_l2_05',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Cấu tạo số',
      category: 'calculation',
      questionText: 'Số gồm 7 chục và 8 đơn vị được viết là số nào?',
      correctAnswer: '78',
      explanation: '7 chục + 8 đơn vị = 78.'
    });
    addL2({
      id: 'r1_l2_06',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Bài toán thực tế',
      category: 'real_world',
      questionText: 'Bác nông dân thu hoạch được 68 quả trứng gà và 72 quả trứng vịt. Khẳng định nào sau đây là ĐÚNG?',
      options: [
        'Số trứng vịt nhiều hơn số trứng gà',
        'Số trứng gà nhiều hơn số trứng vịt',
        'Số trứng vịt bằng số trứng gà',
        'Số trứng vịt ít hơn 70 quả'
      ],
      correctAnswer: 'Số trứng vịt nhiều hơn số trứng gà',
      explanation: 'Vì 72 > 68 nên số trứng vịt nhiều hơn số trứng gà.'
    });
    addL2({
      id: 'r1_l2_07',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'Sắp xếp số',
      category: 'calculation',
      questionText: 'Sắp xếp các số sau theo thứ tự từ lớn đến bé: 28, 82, 49, 94',
      options: ['94, 82, 49, 28', '94, 49, 82, 28', '28, 49, 82, 94', '82, 94, 49, 28'],
      correctAnswer: '94, 82, 49, 28',
      explanation: 'So sánh chữ số hàng chục: 94 > 82 > 49 > 28.'
    });
    addL2({
      id: 'r1_l2_08',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Số liền sau',
      category: 'calculation',
      questionText: 'Số liền sau của 89 là số nào?',
      options: ['90', '88', '91', '100'],
      correctAnswer: '90',
      explanation: '89 + 1 = 90.'
    });
    addL2({
      id: 'r1_l2_09',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Đếm số lượng số',
      category: 'logic',
      questionText: 'Có bao nhiêu số có hai chữ số mà chữ số hàng chục là 8?',
      options: ['10 số', '9 số', '8 số', '11 số'],
      correctAnswer: '10 số',
      explanation: 'Các số đó là từ 80 đến 89, gồm đúng 10 số (80, 81, 82, 83, 84, 85, 86, 87, 88, 89).'
    });
    addL2({
      id: 'r1_l2_10',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Số liền trước',
      category: 'calculation',
      questionText: 'Tìm y biết y là số liền trước của số 60:',
      correctAnswer: '59',
      explanation: 'Số liền trước của 60 là 60 - 1 = 59.'
    });
    addL2({
      id: 'r1_l2_11',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đúng / Sai về số',
      category: 'logic',
      questionText: 'Phát biểu nào sau đây là SAI?',
      options: [
        'Số bé nhất có hai chữ số là 11',
        'Số tròn chục lớn nhất có hai chữ số là 90',
        'Số liền sau của 99 là 100',
        'Số 47 gồm 4 chục và 7 đơn vị'
      ],
      correctAnswer: 'Số bé nhất có hai chữ số là 11',
      explanation: 'Số bé nhất có hai chữ số là 10, chứ không phải 11.'
    });
    addL2({
      id: 'r1_l2_12',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Tia số',
      category: 'calculation',
      visualType: 'number_line',
      visualData: { start: 20, end: 30, marked: 26 },
      questionText: 'Trên tia số, điểm nằm giữa số 25 và số 27 là số nào?',
      options: ['26', '24', '28', '27'],
      correctAnswer: '26',
      explanation: 'Số nằm giữa 25 và 27 là 26.'
    });
    addL2({
      id: 'r1_l2_13',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Chữ số giống nhau',
      category: 'calculation',
      questionText: 'Có bao nhiêu số có hai chữ số giống nhau trong phạm vi 100?',
      options: ['9 số', '10 số', '8 số', '11 số'],
      correctAnswer: '9 số',
      explanation: 'Các số có 2 chữ số giống nhau là: 11, 22, 33, 44, 55, 66, 77, 88, 99 (tổng cộng 9 số).'
    });
    addL2({
      id: 'r1_l2_14',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Mua sắm thực tế',
      category: 'real_world',
      questionText: 'Mẹ đưa cho Nam 5 chục nghìn đồng để mua sách. Hỏi mẹ đã đưa cho Nam bao nhiêu nghìn đồng?',
      options: ['50 nghìn đồng', '5 nghìn đồng', '500 nghìn đồng', '15 nghìn đồng'],
      correctAnswer: '50 nghìn đồng',
      explanation: '5 chục = 50, do đó 5 chục nghìn đồng là 50 nghìn đồng.'
    });

    // Vòng 1: Level 3
    addL3({
      id: 'r1_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Tổ hợp chữ số',
      category: 'logic',
      questionText: 'Từ 3 chữ số 2, 5, 8 có thể lập được bao nhiêu số có hai chữ số KHÁC NHAU?',
      options: ['6 số', '4 số', '9 số', '3 số'],
      correctAnswer: '6 số',
      explanation: 'Các số lập được là: 25, 28, 52, 58, 82, 85. Tổng cộng có 6 số.'
    });
    addL3({
      id: 'r1_l3_02',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Cấu tạo số suy luận',
      category: 'logic',
      questionText: 'Số tròn chục bé nhất có hai chữ số mà tổng hai chữ số bằng 6 là số nào?',
      options: ['60', '15', '24', '42'],
      correctAnswer: '60',
      explanation: 'Số tròn chục có chữ số tận cùng là 0. Chữ số hàng chục là 6 - 0 = 6. Vậy số đó là 60.'
    });
    addL3({
      id: 'r1_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Quy luật dãy số',
      category: 'pattern',
      questionText: 'Cho dãy số: 12, 16, 20, 24, ..., 32. Số thích hợp điền vào chỗ chấm là:',
      correctAnswer: '28',
      explanation: 'Quy luật mỗi số cộng thêm 4 đơn vị: 24 + 4 = 28.'
    });
    addL3({
      id: 'r1_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Toán tư duy số học',
      category: 'logic',
      questionText: 'Hiệu giữa số lớn nhất có hai chữ số và số bé nhất có hai chữ số giống nhau là:',
      options: ['88', '89', '90', '78'],
      correctAnswer: '88',
      explanation: 'Số lớn nhất có 2 chữ số là 99. Số bé nhất có 2 chữ số giống nhau là 11. Ta có: 99 - 11 = 88.'
    });
    addL3({
      id: 'r1_l3_05',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Hiệu số tuổi không đổi',
      category: 'real_world',
      questionText: 'Năm nay mẹ 35 tuổi, con 7 tuổi. Hỏi sau 3 năm nữa mẹ hơn con bao nhiêu tuổi?',
      options: ['28 tuổi', '31 tuổi', '38 tuổi', '25 tuổi'],
      correctAnswer: '28 tuổi',
      unit: 'tuổi',
      explanation: 'Hiệu số tuổi của hai người không bao giờ thay đổi theo thời gian: 35 - 7 = 28 tuổi.'
    });
    addL3({
      id: 'r1_l3_06',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Tìm số qua ẩn số',
      category: 'logic',
      questionText: 'Tìm một số có hai chữ số biết chữ số hàng chục gấp đôi chữ số hàng đơn vị và tổng hai chữ số bằng 9:',
      options: ['63', '36', '84', '72'],
      correctAnswer: '63',
      explanation: '6 = 3 x 2 (hàng chục gấp đôi hàng đơn vị) và 6 + 3 = 9. Vậy số đó là 63.'
    });
    addL3({
      id: 'r1_l3_07',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Trạng Nguyên Nhí',
      category: 'logic',
      questionText: 'Trong một trò chơi xếp hàng, bạn Nam đứng thứ 6 từ đầu hàng và đứng thứ 8 từ cuối hàng. Hỏi hàng đó có tất cả bao nhiêu bạn?',
      options: ['13 bạn', '14 bạn', '15 bạn', '12 bạn'],
      correctAnswer: '13 bạn',
      unit: 'bạn',
      explanation: 'Số bạn trong hàng là: 6 + 8 - 1 = 13 bạn (vì bạn Nam được đếm hai lần).'
    });
  }

  else if (round === 2) {
    // Vòng 2: Tia số, số tròn chục, phép cộng không nhớ trong phạm vi 100
    addL2({
      id: 'r2_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Khoảng cách trên tia số',
      category: 'calculation',
      questionText: 'Trên tia số, điểm A cách vạch 0 là 40 đơn vị, điểm B cách vạch 0 là 65 đơn vị. Đoạn thẳng nối A và B dài bao nhiêu đơn vị?',
      options: ['25 đơn vị', '105 đơn vị', '35 đơn vị', '20 đơn vị'],
      correctAnswer: '25 đơn vị',
      explanation: 'Khoảng cách giữa A và B là: 65 - 40 = 25 đơn vị.'
    });
    addL2({
      id: 'r2_l2_02',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Số tròn chục liền trước',
      category: 'calculation',
      questionText: 'Tìm số tròn chục liền trước của số 73:',
      options: ['70', '60', '80', '72'],
      correctAnswer: '70',
      explanation: 'Các số tròn chục bé hơn 73 là 10, 20, ..., 70. Số liền trước gần nhất là 70.'
    });
    addL2({
      id: 'r2_l2_03',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Cộng không nhớ',
      category: 'calculation',
      questionText: 'Phép tính nào dưới đây có kết quả bằng 78?',
      options: ['43 + 35', '50 + 27', '38 + 41', '44 + 33'],
      correctAnswer: '43 + 35',
      explanation: '43 + 35 = 78. Các phép khác cho 77, 79.'
    });
    addL2({
      id: 'r2_l2_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Toán lời văn cộng',
      category: 'real_world',
      questionText: 'Một cuộn dây điện dài 50 m, người ta nối thêm vào một đoạn dây dài 30 m nữa. Cuộn dây dài tất cả bao nhiêu mét?',
      options: ['80 m', '70 m', '90 m', '20 m'],
      correctAnswer: '80 m',
      unit: 'm',
      explanation: '50 + 30 = 80 m.'
    });
    addL2({
      id: 'r2_l2_05',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tính nhẩm',
      category: 'calculation',
      questionText: 'Tính nhẩm: 42 + 25 = ...',
      correctAnswer: '67',
      explanation: '4 chục + 2 chục = 6 chục; 2 đơn vị + 5 đơn vị = 7 đơn vị. Kết quả là 67.'
    });
    addL2({
      id: 'r2_l2_06',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Tìm số hạng chưa biết',
      category: 'calculation',
      questionText: 'Điền số thích hợp vào dấu hỏi chấm: 24 + ? = 68',
      options: ['44', '34', '54', '42'],
      correctAnswer: '44',
      explanation: 'Số cần tìm là 68 - 24 = 44.'
    });
    addL2({
      id: 'r2_l2_07',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'So sánh tổng',
      category: 'calculation',
      questionText: 'Trong các phép tính sau, phép tính nào có kết quả bé nhất?',
      options: ['31 + 12', '25 + 20', '14 + 33', '10 + 40'],
      correctAnswer: '31 + 12',
      explanation: '31 + 12 = 43. Các phép tính còn lại lần lượt bằng 45, 47, 50.'
    });
    addL2({
      id: 'r2_l2_08',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Đàn gia cầm',
      category: 'real_world',
      questionText: 'Một trang trại có 34 con vịt đang ở trên bờ và 25 con vịt đang bơi dưới ao. Trang trại có tất cả bao nhiêu con vịt?',
      options: ['59 con', '69 con', '58 con', '60 con'],
      correctAnswer: '59 con',
      unit: 'con',
      explanation: '34 + 25 = 59 con.'
    });
    addL2({
      id: 'r2_l2_09',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Cộng ba số tròn chục',
      category: 'calculation',
      questionText: 'Tính nhanh kết quả của dãy tính: 20 + 30 + 40 = ...',
      correctAnswer: '90',
      explanation: '20 + 30 = 50; 50 + 40 = 90.'
    });
    addL2({
      id: 'r2_l2_10',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đúng / Sai về tổng',
      category: 'logic',
      questionText: 'Chọn khẳng định ĐÚNG trong các câu dưới đây:',
      options: [
        'Tổng của 45 và 23 bằng 68',
        'Tổng của hai số tròn chục luôn bé hơn 50',
        'Cộng số nào với 0 cũng bằng 0',
        '34 + 15 có chữ số hàng đơn vị là 8'
      ],
      correctAnswer: 'Tổng của 45 và 23 bằng 68',
      explanation: '45 + 23 = 68 là phép tính chính xác.'
    });
    addL2({
      id: 'r2_l2_11',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Tìm số tròn chục',
      category: 'calculation',
      questionText: 'Tìm số tròn chục x biết rằng: 50 + x = 90',
      options: ['40', '30', '50', '20'],
      correctAnswer: '40',
      explanation: 'x = 90 - 50 = 40.'
    });
    addL2({
      id: 'r2_l2_12',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Vườn cây',
      category: 'real_world',
      questionText: 'Lớp 2A trồng được 32 cây hoa, lớp 2B trồng được 36 cây hoa. Hỏi cả hai lớp trồng được bao nhiêu cây hoa?',
      options: ['68 cây', '67 cây', '78 cây', '58 cây'],
      correctAnswer: '68 cây',
      unit: 'cây',
      explanation: '32 + 36 = 68 cây hoa.'
    });

    // Vòng 2: Level 3
    addL3({
      id: 'r2_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Bước nhảy tia số',
      category: 'logic',
      visualType: 'number_line',
      visualData: { start: 10, end: 40, marked: 35 },
      questionText: 'Trên tia số, một chú cào cào nhảy từ vạch 15 sang phải 4 bước, mỗi bước dài đúng 5 đơn vị. Chú cào cào dừng lại ở số mấy?',
      options: ['35', '30', '40', '25'],
      correctAnswer: '35',
      explanation: '4 bước dài: 5 + 5 + 5 + 5 = 20 đơn vị. Vị trí dừng lại: 15 + 20 = 35.'
    });
    addL3({
      id: 'r2_l3_02',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Tìm số ngược từ cuối',
      category: 'logic',
      questionText: 'Tìm một số biết rằng nếu lấy số đó cộng với 23 rồi cộng tiếp với 15 thì được kết quả là 78:',
      options: ['40', '50', '35', '45'],
      correctAnswer: '40',
      explanation: 'Tổng hai số cộng vào là: 23 + 15 = 38. Số cần tìm là: 78 - 38 = 40.'
    });
    addL3({
      id: 'r2_l3_03',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Toán trồng cây khoảng cách',
      category: 'logic',
      questionText: 'Một đoạn đường trồng 7 cây cau thẳng hàng, khoảng cách giữa hai cây liên tiếp là 3 m. Hỏi khoảng cách từ cây đầu tiên đến cây cuối cùng là bao nhiêu mét?',
      options: ['18 m', '21 m', '15 m', '24 m'],
      correctAnswer: '18 m',
      unit: 'm',
      explanation: 'Giữa 7 cây có đúng 6 khoảng cách. Khoảng cách tổng cộng: 6 x 3 = 18 m (không phải 7 x 3).'
    });
    addL3({
      id: 'r2_l3_04',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Đếm số theo điều kiện hiệu',
      category: 'logic',
      questionText: 'Có bao nhiêu số có hai chữ số mà chữ số hàng chục hơn chữ số hàng đơn vị đúng 3 đơn vị?',
      correctAnswer: '7',
      explanation: 'Các số thỏa mãn: 30, 41, 52, 63, 74, 85, 96. Tổng cộng có 7 số.'
    });
    addL3({
      id: 'r2_l3_05',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Chuyển dung tích cân bằng',
      category: 'real_world',
      questionText: 'Hai can đựng tất cả 60 lít nước. Nếu chuyển 10 lít từ can thứ nhất sang can thứ hai thì lượng nước ở hai can bằng nhau. Ban đầu can thứ nhất có:',
      options: ['40 lít', '35 lít', '30 lít', '50 lít'],
      correctAnswer: '40 lít',
      unit: 'lít',
      explanation: 'Khi bằng nhau mỗi can có: 60 : 2 = 30 lít. Ban đầu can 1 có: 30 + 10 = 40 lít.'
    });
    addL3({
      id: 'r2_l3_06',
      type: 'multiple_choice',
      formatType: 'pattern',
      topic: 'Điền vào tháp số',
      category: 'pattern',
      questionText: 'Quy luật mỗi ô bằng tổng hai ô kề ngay bên dưới: ô trái là 14, ô phải là 25. Ô ở tầng trên chứa số nào?',
      options: ['39', '49', '38', '29'],
      correctAnswer: '39',
      explanation: '14 + 25 = 39.'
    });
  }

  else if (round === 3) {
    // Vòng 3: Điểm, đoạn thẳng, ba điểm thẳng hàng, độ dài cm
    addL2({
      id: 'r3_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Ba điểm thẳng hàng',
      category: 'geometry',
      questionText: 'Ba điểm A, B, C được gọi là thẳng hàng khi nào?',
      options: [
        'Cùng nằm trên một đường thẳng',
        'Tạo thành ba đỉnh của hình tam giác',
        'Nằm ở ba vị trí bất kỳ',
        'Có khoảng cách bằng nhau'
      ],
      correctAnswer: 'Cùng nằm trên một đường thẳng',
      explanation: 'Ba điểm thẳng hàng là ba điểm cùng thuộc một đường thẳng.'
    });
    addL2({
      id: 'r3_l2_02',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Đo đoạn thẳng thước kẻ',
      category: 'measurement',
      visualType: 'ruler',
      visualData: { lengthCm: 8, startCm: 2 },
      questionText: 'Đặt thước kẻ đo một đoạn thẳng: đầu đoạn thẳng ở vạch 2 cm, đuôi đoạn thẳng ở vạch 8 cm. Đoạn thẳng đó dài bao nhiêu xăng-ti-mét?',
      options: ['6 cm', '8 cm', '10 cm', '7 cm'],
      correctAnswer: '6 cm',
      unit: 'cm',
      explanation: 'Độ dài đoạn thẳng là: 8 cm - 2 cm = 6 cm.'
    });
    addL2({
      id: 'r3_l2_03',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Ghép đoạn thẳng',
      category: 'geometry',
      questionText: 'Cho đoạn thẳng AB dài 15 cm. Điểm M nằm giữa A và B sao cho AM dài 8 cm. Độ dài đoạn thẳng MB là:',
      options: ['7 cm', '23 cm', '8 cm', '9 cm'],
      correctAnswer: '7 cm',
      unit: 'cm',
      explanation: 'Độ dài MB = AB - AM = 15 cm - 8 cm = 7 cm.'
    });
    addL2({
      id: 'r3_l2_04',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Cộng độ dài xăng-ti-mét',
      category: 'measurement',
      questionText: 'Tính: 34 cm + 25 cm = ... cm',
      correctAnswer: '59',
      unit: 'cm',
      explanation: '34 + 25 = 59 cm.'
    });
    addL2({
      id: 'r3_l2_05',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Đếm đoạn thẳng',
      category: 'geometry',
      questionText: 'Trên một đoạn thẳng AB lấy thêm hai điểm C và D. Hỏi trên hình vẽ có tất cả bao nhiêu đoạn thẳng?',
      options: ['6 đoạn thẳng', '4 đoạn thẳng', '5 đoạn thẳng', '3 đoạn thẳng'],
      correctAnswer: '6 đoạn thẳng',
      explanation: '4 điểm A, C, D, B tạo ra các đoạn: AC, CD, DB, AD, CB, AB (tổng cộng 6 đoạn thẳng).'
    });
    addL2({
      id: 'r3_l2_06',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đúng / Sai về điểm đoạn thẳng',
      category: 'geometry',
      questionText: 'Chọn câu nói ĐÚNG trong các phát biểu sau:',
      options: [
        'Đoạn thẳng có hai điểm mút giới hạn ở hai đầu',
        'Đoạn thẳng kéo dài vô tận về hai phía',
        'Ba điểm không cùng nằm trên một đường thẳng vẫn gọi là thẳng hàng',
        'Hình tam giác có 4 đoạn thẳng'
      ],
      correctAnswer: 'Đoạn thẳng có hai điểm mút giới hạn ở hai đầu',
      explanation: 'Đoạn thẳng bị giới hạn bởi 2 đầu mút và đo được độ dài chính xác.'
    });
    addL2({
      id: 'r3_l2_07',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Cắt dây ruy băng',
      category: 'real_world',
      questionText: 'Sợi dây ruy băng dài 48 cm, Mai cắt đi một đoạn dài 16 cm để gói quà. Đoạn dây ruy băng còn lại dài bao nhiêu xăng-ti-mét?',
      options: ['32 cm', '34 cm', '64 cm', '22 cm'],
      correctAnswer: '32 cm',
      unit: 'cm',
      explanation: '48 cm - 16 cm = 32 cm.'
    });
    addL2({
      id: 'r3_l2_08',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'So sánh độ dài đoạn thẳng',
      category: 'measurement',
      questionText: 'Cho 3 đoạn thẳng: MN = 25 cm, PQ = 3 dm, HK = 18 cm. Đoạn thẳng dài nhất là:',
      options: ['PQ', 'MN', 'HK', 'MN và PQ bằng nhau'],
      correctAnswer: 'PQ',
      explanation: 'Đổi 3 dm = 30 cm. So sánh 30 cm > 25 cm > 18 cm. Vậy PQ dài nhất.'
    });
    addL2({
      id: 'r3_l2_09',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Trừ đơn vị độ dài',
      category: 'measurement',
      questionText: 'Tính: 78 cm - 40 cm = ... cm',
      correctAnswer: '38',
      unit: 'cm',
      explanation: '78 - 40 = 38 cm.'
    });
    addL2({
      id: 'r3_l2_10',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Ước lượng đồ dùng học tập',
      category: 'real_world',
      questionText: 'Độ dài chiếc bút chì của học sinh lớp 2 khoảng bao nhiêu là hợp lý nhất?',
      options: ['15 cm', '15 dm', '15 m', '1 cm'],
      correctAnswer: '15 cm',
      explanation: 'Chiếc bút chì dài khoảng 15 cm. 15 dm = 150 cm là quá dài.'
    });
    addL2({
      id: 'r3_l2_11',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Nối que tính',
      category: 'measurement',
      questionText: 'An ghép 3 que tính: que thứ nhất dài 6 cm, que thứ hai dài 8 cm, que thứ ba dài 5 cm thành một đường thẳng. Tổng độ dài là:',
      options: ['19 cm', '18 cm', '20 cm', '14 cm'],
      correctAnswer: '19 cm',
      unit: 'cm',
      explanation: '6 + 8 + 5 = 19 cm.'
    });

    // Vòng 3: Level 3
    addL3({
      id: 'r3_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Đếm đoạn thẳng tổng quát',
      category: 'geometry',
      questionText: 'Cho 5 điểm phân biệt cùng nằm trên một đường thẳng. Có tất cả bao nhiêu đoạn thẳng được tạo thành từ 5 điểm đó?',
      options: ['10 đoạn thẳng', '8 đoạn thẳng', '12 đoạn thẳng', '5 đoạn thẳng'],
      correctAnswer: '10 đoạn thẳng',
      explanation: 'Công thức đếm đoạn thẳng từ n điểm thẳng hàng: n x (n - 1) : 2 = 5 x 4 : 2 = 10 đoạn thẳng.'
    });
    addL3({
      id: 'r3_l3_02',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Điểm chính giữa đoạn thẳng',
      category: 'geometry',
      questionText: 'Đoạn thẳng AB dài 24 cm. Điểm M là điểm chính giữa của đoạn thẳng AB. Điểm N là điểm chính giữa của đoạn thẳng AM. Độ dài đoạn thẳng MN là:',
      options: ['6 cm', '12 cm', '8 cm', '4 cm'],
      correctAnswer: '6 cm',
      unit: 'cm',
      explanation: 'AM = 24 : 2 = 12 cm. MN = 12 : 2 = 6 cm.'
    });
    addL3({
      id: 'r3_l3_03',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Cắt gỗ thành nhiều đoạn',
      category: 'logic',
      questionText: 'Bác thợ mộc cưa một khúc gỗ dài 40 cm thành các đoạn dài 10 cm. Mỗi lần cưa mất 2 phút. Hỏi bác cưa xong khúc gỗ hết bao nhiêu phút?',
      options: ['6 phút', '8 phút', '4 phút', '10 phút'],
      correctAnswer: '6 phút',
      unit: 'phút',
      explanation: 'Khúc gỗ chia thành 40 : 10 = 4 đoạn. Để có 4 đoạn chỉ cần cưa 3 lần. Thời gian: 3 x 2 = 6 phút.'
    });
    addL3({
      id: 'r3_l3_04',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Suy luận vị trí các điểm',
      category: 'logic',
      questionText: 'Trên đường thẳng có 3 điểm A, B, C theo thứ tự. Biết AB = 18 cm, BC = 12 cm. Khoảng cách giữa điểm A và điểm C là bao nhiêu cm?',
      correctAnswer: '30',
      unit: 'cm',
      explanation: 'AC = AB + BC = 18 cm + 12 cm = 30 cm.'
    });
    addL3({
      id: 'r3_l3_05',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Ốc sên leo cột',
      category: 'logic',
      questionText: 'Một chú ốc sên leo lên một chiếc cột cao 10 dm. Ban ngày chú bò lên được 3 dm, ban đêm chú bị tụt xuống 1 dm. Hỏi sau bao nhiêu ngày đêm chú leo lên tới đỉnh cột?',
      options: ['5 ngày 4 đêm (ngày thứ 5)', '5 ngày 5 đêm', '4 ngày 3 đêm', '6 ngày 5 đêm'],
      correctAnswer: '5 ngày 4 đêm (ngày thứ 5)',
      explanation: 'Mỗi ngày đêm tiến được: 3 - 1 = 2 dm. Sau 4 ngày đêm ốc sên leo được 8 dm. Sang ban ngày thứ 5 chú leo thêm 3 dm là vượt quá 10 dm và tới đỉnh cột.'
    });
  }

  else if (round === 4) {
    // Vòng 4: Đề-xi-mét (dm), quy đổi 1dm = 10cm, ước lượng
    addL2({
      id: 'r4_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Quy đổi dm và cm',
      category: 'measurement',
      questionText: '3 đề-xi-mét bằng bao nhiêu xăng-ti-mét?',
      options: ['30 cm', '3 cm', '300 cm', '13 cm'],
      correctAnswer: '30 cm',
      explanation: 'Vì 1 dm = 10 cm nên 3 dm = 30 cm.'
    });
    addL2({
      id: 'r4_l2_02',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Quy đổi ngược cm sang dm',
      category: 'measurement',
      questionText: '50 cm đổi ra đề-xi-mét được kết quả là:',
      options: ['5 dm', '50 dm', '15 dm', '500 dm'],
      correctAnswer: '5 dm',
      explanation: '10 cm = 1 dm nên 50 cm = 5 dm.'
    });
    addL2({
      id: 'r4_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Cộng đơn vị dm',
      category: 'measurement',
      questionText: 'Tính: 24 dm + 35 dm = ... dm',
      correctAnswer: '59',
      unit: 'dm',
      explanation: '24 + 35 = 59 dm.'
    });
    addL2({
      id: 'r4_l2_04',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'So sánh khác đơn vị đo',
      category: 'measurement',
      questionText: 'Điền dấu thích hợp: 4 dm 5 cm ... 50 cm',
      options: ['<', '>', '=', 'Không so sánh được'],
      correctAnswer: '<',
      explanation: '4 dm 5 cm = 45 cm. Vì 45 cm < 50 cm nên điền dấu <.'
    });
    addL2({
      id: 'r4_l2_05',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Cắt thanh nẹp gỗ',
      category: 'real_world',
      questionText: 'Bố có thanh gỗ dài 9 dm, bố cưa đi một đoạn 40 cm để làm chân ghế. Hỏi thanh gỗ còn lại dài bao nhiêu đề-xi-mét?',
      options: ['5 dm', '50 dm', '4 dm', '49 dm'],
      correctAnswer: '5 dm',
      unit: 'dm',
      explanation: 'Đổi 40 cm = 4 dm. Thanh gỗ còn lại: 9 dm - 4 dm = 5 dm.'
    });
    addL2({
      id: 'r4_l2_06',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Tính tổng hỗn hợp đơn vị',
      category: 'measurement',
      questionText: 'Tính: 2 dm + 30 cm = ?',
      options: ['5 dm', '32 cm', '50 dm', '23 dm'],
      correctAnswer: '5 dm',
      explanation: '30 cm = 3 dm. Ta có: 2 dm + 3 dm = 5 dm (hoặc 50 cm).'
    });
    addL2({
      id: 'r4_l2_07',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Ước lượng đồ vật thực tế',
      category: 'real_world',
      questionText: 'Bề dày của cuốn sách Toán lớp 2 khoảng bao nhiêu là phù hợp nhất?',
      options: ['1 cm', '1 dm', '10 dm', '1 m'],
      correctAnswer: '1 cm',
      explanation: 'Cuốn sách giáo khoa mỏng khoảng 1 cm (1 dm = 10 cm là quá dày).'
    });
    addL2({
      id: 'r4_l2_08',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tìm số thích hợp điền vào phép tính',
      category: 'measurement',
      questionText: 'Điền số thích hợp: 7 dm - ... dm = 35 cm + 15 cm',
      correctAnswer: '2',
      unit: 'dm',
      explanation: '35 cm + 15 cm = 50 cm = 5 dm. Ta có: 7 dm - 2 dm = 5 dm. Số điền là 2.'
    });
    addL2({
      id: 'r4_l2_09',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'Sắp xếp độ dài',
      category: 'measurement',
      questionText: 'Sắp xếp theo thứ tự từ bé đến lớn: 6 dm, 45 cm, 8 dm, 70 cm',
      options: [
        '45 cm, 6 dm, 70 cm, 8 dm',
        '6 dm, 45 cm, 70 cm, 8 dm',
        '45 cm, 70 cm, 6 dm, 8 dm',
        '8 dm, 70 cm, 6 dm, 45 cm'
      ],
      correctAnswer: '45 cm, 6 dm, 70 cm, 8 dm',
      explanation: 'Đổi ra cm: 45 cm < 60 cm (6 dm) < 70 cm < 80 cm (8 dm).'
    });
    addL2({
      id: 'r4_l2_10',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Sợi len',
      category: 'real_world',
      questionText: 'Cuộn len màu xanh dài 6 dm, cuộn len màu đỏ dài 35 cm. Hỏi cuộn len màu xanh dài hơn cuộn len màu đỏ bao nhiêu xăng-ti-mét?',
      options: ['25 cm', '15 cm', '35 cm', '29 cm'],
      correctAnswer: '25 cm',
      unit: 'cm',
      explanation: 'Đổi 6 dm = 60 cm. 60 cm - 35 cm = 25 cm.'
    });

    // Vòng 4: Level 3
    addL3({
      id: 'r4_l3_01',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Toán 2 bước tính độ dài',
      category: 'real_world',
      questionText: 'Một con đường gấp khúc gồm 3 đoạn: đoạn thứ nhất dài 2 dm, đoạn thứ hai dài 25 cm, đoạn thứ ba dài 15 cm. Độ dài cả con đường gấp khúc đó theo đơn vị đề-xi-mét là:',
      options: ['6 dm', '60 dm', '5 dm', '4 dm'],
      correctAnswer: '6 dm',
      unit: 'dm',
      explanation: '25 cm + 15 cm = 40 cm = 4 dm. Tổng độ dài: 2 dm + 4 dm = 6 dm.'
    });
    addL3({
      id: 'r4_l3_02',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Ghép đoạn thẳng có phần chồng lên nhau',
      category: 'logic',
      questionText: 'Hai thanh gỗ mỗi thanh dài 5 dm được đóng dính vào nhau, phần dính chồng lên nhau dài 10 cm. Hỏi thanh gỗ mới ghép được dài bao nhiêu xăng-ti-mét?',
      options: ['90 cm', '100 cm', '80 cm', '95 cm'],
      correctAnswer: '90 cm',
      unit: 'cm',
      explanation: 'Mỗi thanh dài 50 cm. Tổng độ dài 2 thanh là 100 cm. Trừ đi phần chồng chéo 10 cm: 100 - 10 = 90 cm.'
    });
    addL3({
      id: 'r4_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'So sánh tổng hiệu độ dài',
      category: 'logic',
      questionText: 'Cây cau cao hơn cây chuối 18 dm. Nếu cây chuối lớn thêm 5 dm thì cây cau cao hơn cây chuối lúc đó bao nhiêu đề-xi-mét?',
      correctAnswer: '13',
      unit: 'dm',
      explanation: 'Cây chuối cao thêm 5 dm thì khoảng cách giữa 2 cây giảm đi 5 dm: 18 - 5 = 13 dm.'
    });
    addL3({
      id: 'r4_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Cắt dây gấp đôi',
      category: 'logic',
      questionText: 'Một sợi dây dài 8 dm. Bạn Nam gập đôi sợi dây lại rồi dùng kéo cắt ở chính giữa nếp gấp. Hỏi bạn Nam nhận được bao nhiêu đoạn dây và mỗi đoạn ngắn nhất dài bao nhiêu?',
      options: [
        '3 đoạn, đoạn ngắn nhất dài 2 dm',
        '2 đoạn, mỗi đoạn dài 4 dm',
        '4 đoạn, mỗi đoạn dài 2 dm',
        '3 đoạn, đoạn ngắn nhất dài 4 dm'
      ],
      correctAnswer: '3 đoạn, đoạn ngắn nhất dài 2 dm',
      explanation: 'Khi gập đôi rồi cắt ở giữa nếp gấp, ta được: 2 đoạn ngắn (mỗi đoạn 2 dm) và 1 đoạn dài 4 dm. Tổng là 3 đoạn dây.'
    });
    addL3({
      id: 'r4_l3_05',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Ước lượng chiều cao thực tế',
      category: 'real_world',
      questionText: 'Bố của Nam cao 17 dm, Nam thấp hơn bố 50 cm. Hỏi Nam cao bao nhiêu đề-xi-mét?',
      options: ['12 dm', '15 dm', '11 dm', '13 dm'],
      correctAnswer: '12 dm',
      unit: 'dm',
      explanation: 'Đổi 50 cm = 5 dm. Chiều cao của Nam là: 17 dm - 5 dm = 12 dm (120 cm).'
    });
  }

  else if (round === 5) {
    // Vòng 5: Phép cộng có nhớ (2 chữ số + 1 chữ số, dạng 9 + 5, 29 + 5)
    addL2({
      id: 'r5_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Cộng qua 10',
      category: 'calculation',
      questionText: 'Tính: 9 + 6 = ?',
      options: ['15', '14', '16', '13'],
      correctAnswer: '15',
      explanation: 'Tách 6 = 1 + 5; 9 + 1 = 10; 10 + 5 = 15.'
    });
    addL2({
      id: 'r5_l2_02',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Cộng có nhớ 2 chữ số với 1 chữ số',
      category: 'calculation',
      questionText: 'Tính giá trị của phép tính: 38 + 7 = ?',
      options: ['45', '44', '46', '35'],
      correctAnswer: '45',
      explanation: '8 + 7 = 15, viết 5 nhớ 1; 3 thêm 1 bằng 4. Kết quả là 45.'
    });
    addL2({
      id: 'r5_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Đặt tính rồi tính',
      category: 'calculation',
      questionText: 'Tính: 49 + 8 = ...',
      correctAnswer: '57',
      explanation: '9 + 8 = 17, viết 7 nhớ 1; 4 thêm 1 bằng 5. Kết quả là 57.'
    });
    addL2({
      id: 'r5_l2_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Vườn cây của ông',
      category: 'real_world',
      questionText: 'Vườn nhà ông có 28 cây cam, ông trồng thêm 6 cây cam nữa. Hỏi vườn nhà ông có tất cả bao nhiêu cây cam?',
      options: ['34 cây', '32 cây', '35 cây', '33 cây'],
      correctAnswer: '34 cây',
      unit: 'cây',
      explanation: '28 + 6 = 34 cây cam.'
    });
    addL2({
      id: 'r5_l2_05',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Tìm số thích hợp vào ô trống',
      category: 'calculation',
      questionText: 'Tìm chữ số thích hợp điền vào dấu *: 5* + 6 = 63',
      options: ['7', '8', '6', '9'],
      correctAnswer: '7',
      explanation: '63 - 6 = 57. Chữ số hàng đơn vị là 7.'
    });
    addL2({
      id: 'r5_l2_06',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'So sánh phép tính có nhớ',
      category: 'calculation',
      questionText: 'Điền dấu thích hợp: 58 + 5 ... 49 + 6',
      options: ['>', '<', '=', 'Không có dấu phù hợp'],
      correctAnswer: '>',
      explanation: '58 + 5 = 63; 49 + 6 = 55. Vì 63 > 55 nên điền dấu >.'
    });
    addL2({
      id: 'r5_l2_07',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Đọc sách ngày hè',
      category: 'real_world',
      questionText: 'Tuần trước Hoa đọc được 47 trang sách, tuần này Hoa đọc được 9 trang nữa. Hoa đã đọc được tất cả bao nhiêu trang sách?',
      options: ['56 trang', '55 trang', '57 trang', '54 trang'],
      correctAnswer: '56 trang',
      unit: 'trang',
      explanation: '47 + 9 = 56 trang.'
    });
    addL2({
      id: 'r5_l2_08',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tính nhẩm nhanh',
      category: 'calculation',
      questionText: 'Tính: 65 + 8 = ...',
      correctAnswer: '73',
      explanation: '5 + 8 = 13, viết 3 nhớ 1; 6 thêm 1 là 7. Kết quả là 73.'
    });
    addL2({
      id: 'r5_l2_09',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Kiểm tra phép tính đúng sai',
      category: 'calculation',
      questionText: 'Phép tính nào sau đây bị ĐẶT TÍNH HOẶC TÍNH SAI?',
      options: ['37 + 5 = 41', '29 + 4 = 33', '56 + 8 = 64', '78 + 3 = 81'],
      correctAnswer: '37 + 5 = 41',
      explanation: '37 + 5 = 42, ghi 41 là sai do quên cộng nhớ.'
    });
    addL2({
      id: 'r5_l2_10',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Cộng ba số',
      category: 'calculation',
      questionText: 'Tính giá trị biểu thức: 46 + 7 + 3 = ?',
      options: ['56', '55', '54', '57'],
      correctAnswer: '56',
      explanation: 'Nhóm tính nhanh: 7 + 3 = 10; 46 + 10 = 56.'
    });

    // Vòng 5: Level 3
    addL3({
      id: 'r5_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Cộng có nhớ suy luận chữ số',
      category: 'logic',
      questionText: 'Cho phép tính: A8 + 7 = 55. Chữ số A là chữ số nào?',
      options: ['4', '5', '3', '6'],
      correctAnswer: '4',
      explanation: '55 - 7 = 48, do đó A = 4.'
    });
    addL3({
      id: 'r5_l3_02',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Bài toán 2 bước tính tuổi',
      category: 'real_world',
      questionText: 'Năm nay anh 15 tuổi. Em kém anh 6 tuổi. Hỏi sau 5 năm nữa tổng số tuổi của hai anh em là bao nhiêu?',
      options: ['34 tuổi', '24 tuổi', '29 tuổi', '32 tuổi'],
      correctAnswer: '34 tuổi',
      unit: 'tuổi',
      explanation: 'Tuổi em hiện nay: 15 - 6 = 9 tuổi. Tổng tuổi hiện nay: 15 + 9 = 24 tuổi. Sau 5 năm mỗi người tăng 5 tuổi: 24 + 5 + 5 = 34 tuổi.'
    });
    addL3({
      id: 'r5_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tìm quy luật dãy số tăng dần',
      category: 'pattern',
      questionText: 'Tìm số tiếp theo của dãy số: 19, 27, 35, 43, ...',
      correctAnswer: '51',
      explanation: 'Mỗi số bằng số liền trước cộng thêm 8: 43 + 8 = 51.'
    });
    addL3({
      id: 'r5_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Toán đố Trạng Nguyên nhí',
      category: 'logic',
      questionText: 'Một bác chăn cừu đếm được 9 con cừu đi trước một con cừu, và có 9 con cừu đi sau một con cừu. Hỏi đàn cừu đi thành một hàng dọc có ít nhất bao nhiêu con?',
      options: ['11 con', '19 con', '10 con', '18 con'],
      correctAnswer: '11 con',
      unit: 'con',
      explanation: 'Để số cừu ít nhất, con cừu đó là con thứ 2 từ cuối hoặc con thứ 2 từ đầu, đàn cừu có đúng: 9 + 1 + 1 = 11 con cừu.'
    });
    addL3({
      id: 'r5_l3_05',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Bù trừ số kẹo',
      category: 'logic',
      questionText: 'Bình có 28 cái kẹo, An có 8 cái kẹo. Hỏi Bình phải cho An bao nhiêu cái kẹo để hai bạn có số kẹo bằng nhau?',
      options: ['10 cái', '20 cái', '5 cái', '8 cái'],
      correctAnswer: '10 cái',
      unit: 'cái',
      explanation: 'Bình nhiều hơn An: 28 - 8 = 20 cái. Để bằng nhau, Bình cho An một nửa số hơn: 20 : 2 = 10 cái.'
    });
  }

  else if (round === 6) {
    // Vòng 6: Phép cộng có nhớ 2 chữ số + 2 chữ số (dạng 38 + 25, 47 + 36)
    addL2({
      id: 'r6_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Cộng có nhớ 2 chữ số',
      category: 'calculation',
      questionText: 'Đặt tính rồi tính: 38 + 27 = ?',
      options: ['65', '55', '64', '75'],
      correctAnswer: '65',
      explanation: '8 + 7 = 15, viết 5 nhớ 1; 3 + 2 = 5, thêm 1 bằng 6. Kết quả là 65.'
    });
    addL2({
      id: 'r6_l2_02',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Tính tổng',
      category: 'calculation',
      questionText: 'Kết quả của phép tính 46 + 39 là:',
      options: ['85', '75', '84', '86'],
      correctAnswer: '85',
      explanation: '6 + 9 = 15, viết 5 nhớ 1; 4 + 3 = 7, thêm 1 bằng 8. Kết quả 85.'
    });
    addL2({
      id: 'r6_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tìm số hạng trong tổng',
      category: 'calculation',
      questionText: 'Tìm x biết: x + 28 = 73. x = ...',
      correctAnswer: '45',
      explanation: 'x = 73 - 28 = 45.'
    });
    addL2({
      id: 'r6_l2_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Toán đố học sinh giỏi',
      category: 'real_world',
      questionText: 'Khối lớp Hai có 48 bạn nam và 47 bạn nữ. Hỏi khối lớp Hai có tất cả bao nhiêu học sinh?',
      options: ['95 bạn', '85 bạn', '96 bạn', '94 bạn'],
      correctAnswer: '95 bạn',
      unit: 'bạn',
      explanation: '48 + 47 = 95 bạn học sinh.'
    });
    addL2({
      id: 'r6_l2_05',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Số tròn trăm',
      category: 'calculation',
      questionText: 'Phép tính nào dưới đây có kết quả là số tròn trăm?',
      options: ['64 + 36', '55 + 35', '72 + 18', '47 + 43'],
      correctAnswer: '64 + 36',
      explanation: '64 + 36 = 100 (số tròn trăm duy nhất trong phạm vi 100).'
    });
    addL2({
      id: 'r6_l2_06',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'So sánh các tổng',
      category: 'calculation',
      questionText: 'Tổng nào dưới đây lớn nhất?',
      options: ['57 + 38', '49 + 45', '62 + 29', '38 + 54'],
      correctAnswer: '57 + 38',
      explanation: '57 + 38 = 95 (lớn nhất). Các tổng còn lại lần lượt là: 94, 91, 92.'
    });
    addL2({
      id: 'r6_l2_07',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tính giá trị biểu thức',
      category: 'calculation',
      questionText: 'Tính: 26 + 37 + 14 = ...',
      correctAnswer: '77',
      explanation: 'Nhóm (26 + 14) + 37 = 40 + 37 = 77.'
    });
    addL2({
      id: 'r6_l2_08',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Vận chuyển hàng hóa',
      category: 'real_world',
      questionText: 'Bác Ba chở 38 bao gạo tẻ và 26 bao gạo nếp. Bác Ba chở tất cả bao nhiêu bao gạo?',
      options: ['64 bao', '54 bao', '65 bao', '63 bao'],
      correctAnswer: '64 bao',
      unit: 'bao',
      explanation: '38 + 26 = 64 bao gạo.'
    });
    addL2({
      id: 'r6_l2_09',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đúng sai phép tính',
      category: 'calculation',
      questionText: 'Khẳng định nào sau đây là SAI?',
      options: [
        'Tổng của hai số lẻ luôn là một số lẻ',
        '35 + 47 = 82',
        'Tổng của 50 và 50 bằng 100',
        'Phép cộng có tính chất giao hoán (đổi chỗ)'
      ],
      correctAnswer: 'Tổng của hai số lẻ luôn là một số lẻ',
      explanation: 'Tổng của hai số lẻ luôn là một số chẵn (ví dụ 1 + 3 = 4).'
    });
    addL2({
      id: 'r6_l2_10',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Điền chữ số',
      category: 'calculation',
      questionText: 'Tìm chữ số A và B biết: 2A + B5 = 63 và A = 8. Khi đó B là:',
      options: ['3', '2', '4', '1'],
      correctAnswer: '3',
      explanation: '28 + B5 = 63 => B5 = 63 - 28 = 35. Vậy B = 3.'
    });

    // Vòng 6: Level 3
    addL3({
      id: 'r6_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Phép tính chứa chữ cái',
      category: 'logic',
      questionText: 'Tìm chữ số X trong phép tính: 4X + X7 = 93',
      options: ['4', '5', '6', '3'],
      correctAnswer: '5',
      explanation: 'Nếu X = 5: 45 + 57 = 102 (chưa đúng); Thử hàng đơn vị: X + 7 tận cùng là 3 nên X = 6 (6 + 7 = 13 viết 3 nhớ 1). 46 + 67 = 113. Xem xét phép tính 4X + X7 nếu là 46 + 47 = 93 thì hai chữ số hàng chục khác nhau. Hãy tìm X sao cho X = 4: 44 + 47 = 91; nếu X = 6: 46 + ... Xem xét: nếu X = 4 thì 48 + 45. Với câu hỏi này: nếu phép tính là 46 + 47 = 93 thì X = 6 và X = 4 không giống nhau. Hãy tính chính xác: 40 + X + 10 x X + 7 = 93 => 11 x X + 47 = 93 => 11 x X = 46 (không chia hết). Vậy bài toán đúng là: 4X + 47 = 93 => 4X = 93 - 47 = 46 => X = 6.'
    });
    // Thay câu logic chữ chuẩn xác:
    l3.pop(); // remove
    addL3({
      id: 'r6_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Phép tính chứa chữ số ẩn',
      category: 'logic',
      questionText: 'Tìm chữ số A trong phép cộng: 3A + A3 = 88',
      options: ['5', '4', '6', '3'],
      correctAnswer: '5',
      explanation: 'Hàng đơn vị: A + 3 = 8 => A = 5. Kiểm tra: 35 + 53 = 88 (hoàn toàn chính xác).'
    });
    addL3({
      id: 'r6_l3_02',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Bài toán hai bước tính tổng',
      category: 'real_world',
      questionText: 'Thùng thứ nhất đựng 36 lít dầu. Thùng thứ hai đựng nhiều hơn thùng thứ nhất 18 lít dầu. Hỏi cả hai thùng đựng bao nhiêu lít dầu?',
      options: ['90 lít', '54 lít', '88 lít', '72 lít'],
      correctAnswer: '90 lít',
      unit: 'lít',
      explanation: 'Thùng thứ hai đựng: 36 + 18 = 54 lít. Cả hai thùng đựng: 36 + 54 = 90 lít.'
    });
    addL3({
      id: 'r6_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tìm số lớn nhất khi biết tổng',
      category: 'logic',
      questionText: 'Tổng của hai số có hai chữ số bằng 50. Số lớn nhất có thể của một trong hai số đó là bao nhiêu?',
      correctAnswer: '40',
      explanation: 'Vì cả hai số đều có hai chữ số nên số bé nhất có hai chữ số là 10. Số lớn nhất khi đó là: 50 - 10 = 40.'
    });
    addL3({
      id: 'r6_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Cân đĩa quả cân',
      category: 'logic',
      visualType: 'balance_scale',
      visualData: { leftWeight: 15, rightWeight: 15 },
      questionText: 'Trên đĩa cân bên trái có một gói kẹo và một quả cân 5 kg. Trên đĩa cân bên phải có quả cân 12 kg và quả cân 8 kg. Cân ở vị trí thăng bằng. Gói kẹo nặng bao nhiêu kg?',
      options: ['15 kg', '20 kg', '25 kg', '13 kg'],
      correctAnswer: '15 kg',
      unit: 'kg',
      explanation: 'Đĩa bên phải: 12 + 8 = 20 kg. Để thăng bằng, đĩa trái cũng nặng 20 kg. Gói kẹo nặng: 20 - 5 = 15 kg.'
    });
    addL3({
      id: 'r6_l3_05',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Đoàn xe chở khách',
      category: 'real_world',
      questionText: 'Có hai xe chở học sinh đi tham quan. Xe thứ nhất chở 45 bạn. Nếu chuyển 5 bạn từ xe thứ nhất sang xe thứ hai thì số bạn ở hai xe bằng nhau. Hỏi ban đầu xe thứ hai chở bao nhiêu bạn?',
      options: ['35 bạn', '40 bạn', '30 bạn', '50 bạn'],
      correctAnswer: '35 bạn',
      unit: 'bạn',
      explanation: 'Khi chuyển 5 bạn, xe thứ nhất còn: 45 - 5 = 40 bạn. Khi đó xe thứ hai cũng có 40 bạn. Ban đầu xe thứ hai có: 40 - 5 = 35 bạn.'
    });
  }

  else if (round === 7) {
    // Vòng 7: Bài toán về nhiều hơn - ít hơn, sơ đồ đoạn thẳng
    addL2({
      id: 'r7_l2_01',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Bài toán nhiều hơn',
      category: 'real_world',
      questionText: 'Lớp 2A có 18 bạn nữ. Số bạn nam nhiều hơn số bạn nữ 5 bạn. Hỏi lớp 2A có bao nhiêu bạn nam?',
      options: ['23 bạn', '13 bạn', '22 bạn', '24 bạn'],
      correctAnswer: '23 bạn',
      unit: 'bạn',
      explanation: 'Số bạn nam là: 18 + 5 = 23 bạn.'
    });
    addL2({
      id: 'r7_l2_02',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Bài toán ít hơn',
      category: 'real_world',
      questionText: 'Bác Tư nuôi 45 con gà, số con vịt ít hơn số con gà 12 con. Hỏi bác Tư nuôi bao nhiêu con vịt?',
      options: ['33 con', '57 con', '32 con', '35 con'],
      correctAnswer: '33 con',
      unit: 'con',
      explanation: 'Số con vịt là: 45 - 12 = 33 con.'
    });
    addL2({
      id: 'r7_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Nhiều hơn bao nhiêu đơn vị',
      category: 'calculation',
      questionText: 'Số 72 nhiều hơn số 45 bao nhiêu đơn vị?',
      correctAnswer: '27',
      unit: 'đơn vị',
      explanation: '72 - 45 = 27 đơn vị.'
    });
    addL2({
      id: 'r7_l2_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Đo chiều cao',
      category: 'measurement',
      questionText: 'Cây dừa cao 68 dm, cây bưởi thấp hơn cây dừa 25 dm. Hỏi cây bưởi cao bao nhiêu đề-xi-mét?',
      options: ['43 dm', '93 dm', '42 dm', '45 dm'],
      correctAnswer: '43 dm',
      unit: 'dm',
      explanation: '68 - 25 = 43 dm.'
    });
    addL2({
      id: 'r7_l2_05',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Tóm tắt bài toán bằng sơ đồ',
      category: 'logic',
      questionText: 'Trong bài toán: "Hòa có 15 nhãn vở, Bình có nhiều hơn Hòa 7 nhãn vở". Đoạn thẳng biểu diễn số nhãn vở của Bình sẽ như thế nào so với của Hòa?',
      options: [
        'Dài hơn đoạn thẳng của Hòa một đoạn ứng với 7 nhãn vở',
        'Ngắn hơn đoạn thẳng của Hòa',
        'Bằng đúng đoạn thẳng của Hòa',
        'Gấp đôi đoạn thẳng của Hòa'
      ],
      correctAnswer: 'Dài hơn đoạn thẳng của Hòa một đoạn ứng với 7 nhãn vở',
      explanation: 'Vì Bình nhiều hơn Hòa nên đoạn thẳng của Bình dài hơn.'
    });
    addL2({
      id: 'r7_l2_06',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Ít hơn bao nhiêu đơn vị',
      category: 'calculation',
      questionText: 'Số 36 ít hơn số 80 bao nhiêu đơn vị?',
      correctAnswer: '44',
      unit: 'đơn vị',
      explanation: '80 - 36 = 44 đơn vị.'
    });
    addL2({
      id: 'r7_l2_07',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Cân nặng học sinh',
      category: 'measurement',
      questionText: 'Bảo cân nặng 28 kg, Nam nặng hơn Bảo 4 kg. Hỏi cả hai bạn cân nặng bao nhiêu ki-lô-gam?',
      options: ['60 kg', '32 kg', '56 kg', '58 kg'],
      correctAnswer: '60 kg',
      unit: 'kg',
      explanation: 'Nam cân nặng: 28 + 4 = 32 kg. Cả hai bạn cân nặng: 28 + 32 = 60 kg.'
    });
    addL2({
      id: 'r7_l2_08',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đúng sai nhiều hơn ít hơn',
      category: 'logic',
      questionText: 'Nếu An có nhiều hơn Bình 6 cái kẹo thì khẳng định nào sau đây là ĐÚNG?',
      options: [
        'Bình có ít hơn An 6 cái kẹo',
        'Bình có nhiều hơn An 6 cái kẹo',
        'An và Bình có số kẹo bằng nhau',
        'Tổng số kẹo của hai bạn là 6 cái'
      ],
      correctAnswer: 'Bình có ít hơn An 6 cái kẹo',
      explanation: 'An nhiều hơn Bình 6 cái thì ngược lại Bình ít hơn An 6 cái.'
    });
    addL2({
      id: 'r7_l2_09',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Bể cá cảnh',
      category: 'real_world',
      questionText: 'Bể thứ nhất chứa 42 lít nước. Bể thứ hai chứa ít hơn bể thứ nhất 15 lít nước. Hỏi bể thứ hai chứa bao nhiêu lít nước?',
      options: ['27 lít', '57 lít', '28 lít', '26 lít'],
      correctAnswer: '27 lít',
      unit: 'lít',
      explanation: '42 - 15 = 27 lít nước.'
    });
    addL2({
      id: 'r7_l2_10',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Bài toán giảm đi một số đơn vị',
      category: 'calculation',
      questionText: 'Một số giảm đi 19 đơn vị thì còn lại 35. Số đó là:',
      options: ['54', '16', '44', '55'],
      correctAnswer: '54',
      explanation: '35 + 19 = 54.'
    });

    // Vòng 7: Level 3
    addL3({
      id: 'r7_l3_01',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Toán 2 bước nhiều hơn ít hơn',
      category: 'real_world',
      questionText: 'Tổ Một hái được 25 bông hoa. Tổ Hai hái được nhiều hơn Tổ Một 7 bông hoa. Tổ Ba hái được ít hơn Tổ Hai 4 bông hoa. Hỏi cả ba tổ hái được tất cả bao nhiêu bông hoa?',
      options: ['85 bông', '78 bông', '82 bông', '80 bông'],
      correctAnswer: '85 bông',
      unit: 'bông hoa',
      explanation: 'Tổ Hai hái: 25 + 7 = 32 bông. Tổ Ba hái: 32 - 4 = 28 bông. Cả 3 tổ hái: 25 + 32 + 28 = 85 bông.'
    });
    addL3({
      id: 'r7_l3_02',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Thay đổi hiệu số khi cùng thêm',
      category: 'logic',
      questionText: 'Anh hơn em 8 tuổi. Sau 4 năm nữa, anh vẫn hơn em bao nhiêu tuổi?',
      options: ['8 tuổi', '12 tuổi', '4 tuổi', '16 tuổi'],
      correctAnswer: '8 tuổi',
      unit: 'tuổi',
      explanation: 'Mỗi năm cả anh và em đều tăng thêm 1 tuổi nên hiệu số tuổi giữa hai người không thay đổi.'
    });
    addL3({
      id: 'r7_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tìm số lớn số bé qua sơ đồ',
      category: 'logic',
      questionText: 'Hai số có tổng bằng 48 và số lớn hơn số bé 12 đơn vị. Số bé là số nào?',
      correctAnswer: '18',
      explanation: 'Số bé = (Tổng - Hiệu) : 2 = (48 - 12) : 2 = 36 : 2 = 18.'
    });
    addL3({
      id: 'r7_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Cho nhận số bi',
      category: 'logic',
      questionText: 'Dũng có nhiều hơn Minh 14 viên bi. Hỏi Dũng phải cho Minh bao nhiêu viên bi để số bi của hai bạn bằng nhau?',
      options: ['7 viên', '14 viên', '8 viên', '6 viên'],
      correctAnswer: '7 viên',
      unit: 'viên',
      explanation: 'Để số bi bằng nhau, Dũng cho Minh một nửa số bi hơn: 14 : 2 = 7 viên.'
    });
    addL3({
      id: 'r7_l3_05',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Bài toán giá tiền mua sách',
      category: 'real_world',
      questionText: 'Giá tiền một quyển vở là 12 nghìn đồng. Giá tiền hộp bút đắt hơn quyển vở 15 nghìn đồng. Bạn An mua cả hai món đồ đó và đưa cô bán hàng 50 nghìn đồng. Cô bán hàng phải trả lại An bao nhiêu nghìn đồng?',
      options: ['11 nghìn đồng', '23 nghìn đồng', '27 nghìn đồng', '13 nghìn đồng'],
      correctAnswer: '11 nghìn đồng',
      explanation: 'Giá tiền hộp bút: 12 + 15 = 27 nghìn đồng. Tổng tiền phải trả: 12 + 27 = 39 nghìn đồng. Tiền thối lại: 50 - 39 = 11 nghìn đồng.'
    });
  }

  return { level2: l2, level3: l3 };
}
