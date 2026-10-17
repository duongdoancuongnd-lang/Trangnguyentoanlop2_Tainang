import { Question } from '../../types/quiz';

/**
 * NGÂN HÀNG CÂU HỎI MỨC 2 & MỨC 3: VÒNG 29 ĐẾN VÒNG 35
 * SGK Toán 2 Kết Nối Tri Thức Với Cuộc Sống (GDPT 2018)
 * Các chủ đề: Cộng trừ phạm vi 1000, Thu thập & Biểu đồ tranh,
 * Vòng 30 (THI HƯƠNG), Vòng 34 (THI HỘI) và Vòng 35 (THI ĐÌNH CHUNG KẾT).
 */

export function getRounds29to35Questions(round: number): { level2: Question[]; level3: Question[] } {
  const l2: Question[] = [];
  const l3: Question[] = [];

  const addL2 = (q: Omit<Question, 'roundNumber' | 'level' | 'points' | 'questionNumber'>) => {
    l2.push({ ...q, roundNumber: round, level: 2, points: 10, questionNumber: 0 });
  };

  const addL3 = (q: Omit<Question, 'roundNumber' | 'level' | 'points' | 'questionNumber'>) => {
    l3.push({ ...q, roundNumber: round, level: 3, points: 10, questionNumber: 0 });
  };

  if (round === 29) {
    // Vòng 29: Phép cộng không nhớ trong phạm vi 1000
    addL2({
      id: 'r29_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Cộng số tròn trăm',
      category: 'calculation',
      questionText: 'Tính: 300 + 400 = ?',
      options: ['700', '600', '800', '500'],
      correctAnswer: '700',
      explanation: '3 trăm + 4 trăm = 7 trăm (700).'
    });
    addL2({
      id: 'r29_l2_02',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Cộng không nhớ 3 chữ số',
      category: 'calculation',
      questionText: 'Đặt tính rồi tính: 243 + 325 = ?',
      options: ['568', '578', '558', '569'],
      correctAnswer: '568',
      explanation: '3 + 5 = 8; 4 + 2 = 6; 2 + 3 = 5. Kết quả là 568.'
    });
    addL2({
      id: 'r29_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tính nhẩm nhanh tổng',
      category: 'calculation',
      questionText: 'Tính: 512 + 234 = ...',
      correctAnswer: '746',
      explanation: '512 + 234 = 746.'
    });
    addL2({
      id: 'r29_l2_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Thư viện trường học',
      category: 'real_world',
      questionText: 'Thư viện trường có 320 cuốn truyện tranh và 245 cuốn sách khoa học. Hỏi thư viện có tất cả bao nhiêu cuốn sách và truyện?',
      options: ['565 cuốn', '555 cuốn', '575 cuốn', '560 cuốn'],
      correctAnswer: '565 cuốn',
      unit: 'cuốn',
      explanation: '320 + 245 = 565 cuốn.'
    });
    addL2({
      id: 'r29_l2_05',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Cộng với số có hai chữ số',
      category: 'calculation',
      questionText: 'Tính: 630 + 45 = ...',
      correctAnswer: '675',
      explanation: '630 + 45 = 675.'
    });
    addL2({
      id: 'r29_l2_06',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Tìm số hạng chưa biết',
      category: 'calculation',
      questionText: 'Điền số thích hợp vào dấu hỏi chấm: 412 + ? = 756',
      options: ['344', '354', '334', '345'],
      correctAnswer: '344',
      explanation: '756 - 412 = 344.'
    });
    addL2({
      id: 'r29_l2_07',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đúng sai phép cộng 3 chữ số',
      category: 'calculation',
      questionText: 'Chọn câu nói ĐÚNG trong các câu sau:',
      options: [
        'Khi cộng số có 3 chữ số, ta cộng lần lượt từ phải sang trái (hàng đơn vị, rồi chục, rồi trăm)',
        'Khi cộng số có 3 chữ số ta cộng từ hàng trăm trước',
        'Tổng của hai số tròn trăm luôn có tận cùng là hai chữ số 5',
        '400 + 600 = 900'
      ],
      correctAnswer: 'Khi cộng số có 3 chữ số, ta cộng lần lượt từ phải sang trái (hàng đơn vị, rồi chục, rồi trăm)',
      explanation: 'Quy tắc đặt tính và tính: cộng lần lượt từ phải sang trái bắt đầu từ hàng đơn vị.'
    });
    addL2({
      id: 'r29_l2_08',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Cộng đơn vị mét trong phạm vi 1000',
      category: 'measurement',
      questionText: 'Tính: 400 m + 250 m = ... m',
      correctAnswer: '650',
      unit: 'm',
      explanation: '400 + 250 = 650 m.'
    });
    addL2({
      id: 'r29_l2_09',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Vườn cây ăn quả',
      category: 'real_world',
      questionText: 'Trang trại trồng được 415 cây cam và 172 cây bưởi. Trang trại trồng được tất cả bao nhiêu cây cam và bưởi?',
      options: ['587 cây', '577 cây', '597 cây', '487 cây'],
      correctAnswer: '587 cây',
      unit: 'cây',
      explanation: '415 + 172 = 587 cây.'
    });
    addL2({
      id: 'r29_l2_10',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'So sánh các tổng',
      category: 'calculation',
      questionText: 'Tổng nào dưới đây có kết quả lớn nhất?',
      options: ['340 + 250', '210 + 370', '420 + 160', '500 + 90'],
      correctAnswer: '340 + 250',
      explanation: '340 + 250 = 590 (lớn nhất, các tổng khác bằng 580, 580, 590 - 500 + 90 cũng 590, đổi 350 + 250 = 600).'
    });
    // làm lại câu 10 cho rõ ràng:
    l2.pop();
    addL2({
      id: 'r29_l2_10',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'So sánh các tổng',
      category: 'calculation',
      questionText: 'Tổng nào dưới đây có kết quả lớn nhất?',
      options: ['350 + 320', '210 + 440', '420 + 210', '500 + 150'],
      correctAnswer: '350 + 320',
      explanation: '350 + 320 = 670 (lớn nhất). Các tổng còn lại: 650, 630, 650.'
    });

    // Vòng 29: Level 3
    addL3({
      id: 'r29_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Chữ số ẩn trong phép cộng',
      category: 'logic',
      questionText: 'Tìm chữ số A và B biết: 3A2 + 24B = 586',
      options: ['A = 4, B = 4', 'A = 5, B = 3', 'A = 3, B = 5', 'A = 4, B = 3'],
      correctAnswer: 'A = 4, B = 4',
      explanation: 'Hàng đơn vị: 2 + B = 6 => B = 4. Hàng chục: A + 4 = 8 => A = 4.'
    });
    addL3({
      id: 'r29_l3_02',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Toán 2 bước tính khối lượng nông sản',
      category: 'real_world',
      questionText: 'Kho thứ nhất chứa 310 kg thóc. Kho thứ hai chứa nhiều hơn kho thứ nhất 45 kg thóc. Hỏi cả hai kho chứa bao nhiêu ki-lô-gam thóc?',
      options: ['665 kg', '355 kg', '655 kg', '675 kg'],
      correctAnswer: '665 kg',
      unit: 'kg',
      explanation: 'Kho 2 chứa: 310 + 45 = 355 kg. Cả hai kho: 310 + 355 = 665 kg.'
    });
    addL3({
      id: 'r29_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tổng dãy số tròn trăm',
      category: 'pattern',
      questionText: 'Tính nhanh: 100 + 200 + 300 + 400 = ...',
      correctAnswer: '1000',
      explanation: '(100 + 400) + (200 + 300) = 500 + 500 = 1000.'
    });
    addL3({
      id: 'r29_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Số thỏa mãn điều kiện tổng chữ số',
      category: 'logic',
      questionText: 'Cộng số tròn trăm lớn nhất có ba chữ số với số bé nhất có ba chữ số khác nhau, ta được:',
      options: ['1002', '1099', '1000', '999'],
      correctAnswer: '1002',
      explanation: 'Số tròn trăm lớn nhất có 3 chữ số là 900. Số bé nhất có 3 chữ số khác nhau là 102. 900 + 102 = 1002.'
    });
    addL3({
      id: 'r29_l3_05',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Đoạn đường nối ba xã',
      category: 'real_world',
      questionText: 'Quãng đường từ xã A đến xã B dài 230 m, từ xã B đến xã C dài 340 m, từ xã C đến xã D dài 410 m (theo thứ tự trên một đường thẳng). Khoảng cách từ xã A đến xã D là:',
      options: ['980 m', '880 m', '970 m', '1000 m'],
      correctAnswer: '980 m',
      unit: 'm',
      explanation: '230 + 340 + 410 = 980 m.'
    });
  }

  else if (round === 30) {
    // Vòng 30: THI HƯƠNG - CẤP QUẬN / HUYỆN (Phép trừ không nhớ trong phạm vi 1000 & Toán tư duy Trạng Nguyên)
    addL2({
      id: 'r30_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Đề Thi Hương: Trừ số tròn trăm',
      category: 'calculation',
      questionText: '[Thi Hương] Tính: 800 - 300 = ?',
      options: ['500', '600', '400', '700'],
      correctAnswer: '500',
      explanation: '8 trăm - 3 trăm = 5 trăm (500).'
    });
    addL2({
      id: 'r30_l2_02',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Đề Thi Hương: Trừ 3 chữ số không nhớ',
      category: 'calculation',
      questionText: '[Thi Hương] Đặt tính rồi tính: 678 - 245 = ?',
      options: ['433', '423', '443', '432'],
      correctAnswer: '433',
      explanation: '8 - 5 = 3; 7 - 4 = 3; 6 - 2 = 4. Kết quả là 433.'
    });
    addL2({
      id: 'r30_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Đề Thi Hương: Tìm số bị trừ',
      category: 'calculation',
      questionText: '[Thi Hương] Tìm x biết: x - 132 = 425. x = ...',
      correctAnswer: '557',
      explanation: 'x = 425 + 132 = 557.'
    });
    addL2({
      id: 'r30_l2_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Đề Thi Hương: Kho hàng trường học',
      category: 'real_world',
      questionText: '[Thi Hương] Một trường tiểu học có 785 học sinh, trong đó có 432 bạn nữ. Hỏi trường đó có bao nhiêu bạn nam?',
      options: ['353 bạn', '343 bạn', '363 bạn', '355 bạn'],
      correctAnswer: '353 bạn',
      unit: 'bạn',
      explanation: '785 - 432 = 353 bạn nam.'
    });
    addL2({
      id: 'r30_l2_05',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Đề Thi Hương: Tính nhẩm',
      category: 'calculation',
      questionText: '[Thi Hương] Tính: 954 - 321 = ...',
      correctAnswer: '633',
      explanation: '954 - 321 = 633.'
    });
    addL2({
      id: 'r30_l2_06',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Đề Thi Hương: Tìm số trừ',
      category: 'calculation',
      questionText: '[Thi Hương] Tìm y biết: 869 - y = 524. y là:',
      options: ['345', '355', '335', '344'],
      correctAnswer: '345',
      explanation: 'y = 869 - 524 = 345.'
    });
    addL2({
      id: 'r30_l2_07',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đề Thi Hương: So sánh phép trừ và cộng',
      category: 'calculation',
      questionText: '[Thi Hương] Điền dấu thích hợp: 750 - 200 ... 300 + 250',
      options: ['=', '>', '<', 'Không so sánh được'],
      correctAnswer: '=',
      explanation: '750 - 200 = 550; 300 + 250 = 550. Hai bên bằng nhau nên điền dấu =.'
    });
    addL2({
      id: 'r30_l2_08',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Đề Thi Hương: Giảm đi số đơn vị',
      category: 'calculation',
      questionText: '[Thi Hương] Số 986 giảm đi 452 đơn vị thì được kết quả là ...',
      correctAnswer: '534',
      explanation: '986 - 452 = 534.'
    });
    addL2({
      id: 'r30_l2_09',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Đề Thi Hương: Cuộn dây điện',
      category: 'measurement',
      questionText: '[Thi Hương] Bác thợ điện có cuộn dây dài 650 m. Bác đã dùng hết 320 m để mắc đèn đường. Cuộn dây còn lại dài bao nhiêu mét?',
      options: ['330 m', '320 m', '340 m', '350 m'],
      correctAnswer: '330 m',
      unit: 'm',
      explanation: '650 - 320 = 330 m.'
    });
    addL2({
      id: 'r30_l2_10',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'Đề Thi Hương: Sắp xếp các hiệu',
      category: 'calculation',
      questionText: '[Thi Hương] Phép tính nào dưới đây có kết quả bé nhất?',
      options: ['580 - 340', '690 - 410', '770 - 420', '850 - 520'],
      correctAnswer: '580 - 340',
      explanation: '580 - 340 = 240 (bé nhất). Các hiệu khác lần lượt là 280, 350, 330.'
    });

    // Vòng 30: Level 3 (Thi Hương)
    addL3({
      id: 'r30_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Đề Thi Hương Mức 3: Chữ số ẩn trong phép trừ',
      category: 'logic',
      questionText: '[Thi Hương Mức 3] Tìm chữ số A và B trong phép trừ: 7A8 - B35 = 423',
      options: ['A = 5, B = 3', 'A = 4, B = 3', 'A = 5, B = 2', 'A = 6, B = 4'],
      correctAnswer: 'A = 5, B = 3',
      explanation: 'Hàng chục: A - 3 = 2 => A = 5. Hàng trăm: 7 - B = 4 => B = 3.'
    });
    addL3({
      id: 'r30_l3_02',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Đề Thi Hương Mức 3: Bài toán 2 bước trang trại',
      category: 'real_world',
      questionText: '[Thi Hương Mức 3] Một trang trại có 850 con vịt. Buổi sáng trang trại bán 210 con, buổi chiều bán tiếp 320 con. Trang trại còn lại bao nhiêu con vịt?',
      options: ['320 con', '330 con', '310 con', '340 con'],
      correctAnswer: '320 con',
      unit: 'con',
      explanation: 'Tổng số vịt đã bán: 210 + 320 = 530 con. Còn lại: 850 - 530 = 320 con.'
    });
    addL3({
      id: 'r30_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Đề Thi Hương Mức 3: Hiệu không đổi',
      category: 'logic',
      questionText: '[Thi Hương Mức 3] Hiệu của hai số là 250. Nếu cùng thêm vào mỗi số 50 đơn vị thì hiệu mới của hai số là bao nhiêu?',
      correctAnswer: '250',
      explanation: 'Khi cùng thêm vào cả số bị trừ và số trừ một số đơn vị như nhau thì hiệu của hai số không bao giờ thay đổi.'
    });
    addL3({
      id: 'r30_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Đề Thi Hương Mức 3: Đố vui Trạng Nguyên chia kẹo',
      category: 'logic',
      questionText: '[Thi Hương Mức 3] Có 3 hộp kẹo chứa tổng cộng 60 cái kẹo. Nếu chuyển 4 cái kẹo từ hộp 1 sang hộp 2, rồi chuyển 6 cái từ hộp 2 sang hộp 3 thì số kẹo ở 3 hộp bằng nhau. Hỏi ban đầu hộp thứ nhất có bao nhiêu cái kẹo?',
      options: ['24 cái', '20 cái', '22 cái', '26 cái'],
      correctAnswer: '24 cái',
      unit: 'cái',
      explanation: 'Lúc sau mỗi hộp có: 60 : 3 = 20 cái kẹo. Vì hộp 1 chỉ chuyển đi 4 cái nên ban đầu hộp 1 có: 20 + 4 = 24 cái kẹo.'
    });
    addL3({
      id: 'r30_l3_05',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Đề Thi Hương Mức 3: Tìm quy luật dãy số 3 chữ số',
      category: 'pattern',
      questionText: '[Thi Hương Mức 3] Tìm số tiếp theo của dãy số: 105, 210, 315, 420, ...',
      options: ['525', '520', '530', '515'],
      correctAnswer: '525',
      explanation: 'Quy luật mỗi số cộng thêm 105: 420 + 105 = 525.'
    });
  }

  else if (round === 31) {
    // Vòng 31: Phép cộng có nhớ trong phạm vi 1000
    addL2({
      id: 'r31_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Cộng có nhớ sang hàng chục',
      category: 'calculation',
      questionText: 'Đặt tính rồi tính: 358 + 227 = ?',
      options: ['585', '575', '584', '595'],
      correctAnswer: '585',
      explanation: '8 + 7 = 15 viết 5 nhớ 1; 5 + 2 = 7 thêm 1 là 8; 3 + 2 = 5. Kết quả là 585.'
    });
    addL2({
      id: 'r31_l2_02',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Cộng có nhớ sang hàng trăm',
      category: 'calculation',
      questionText: 'Tính: 480 + 250 = ?',
      options: ['730', '630', '720', '740'],
      correctAnswer: '730',
      explanation: '0 + 0 = 0; 8 + 5 = 13 viết 3 nhớ 1; 4 + 2 = 6 thêm 1 là 7. Kết quả 730.'
    });
    addL2({
      id: 'r31_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Cộng tròn trăm có nhớ',
      category: 'calculation',
      questionText: 'Tính: 650 + 350 = ...',
      correctAnswer: '1000',
      explanation: '650 + 350 = 1000.'
    });
    addL2({
      id: 'r31_l2_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Trồng rừng ngập mặn',
      category: 'real_world',
      questionText: 'Đoàn thanh niên trồng được 265 cây đước vào ngày thứ nhất và 185 cây đước vào ngày thứ hai. Cả hai ngày đoàn đã trồng được bao nhiêu cây đước?',
      options: ['450 cây', '440 cây', '460 cây', '430 cây'],
      correctAnswer: '450 cây',
      unit: 'cây',
      explanation: '265 + 185 = 450 cây.'
    });
    addL2({
      id: 'r31_l2_05',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tìm số hạng có nhớ',
      category: 'calculation',
      questionText: 'Tìm x biết: x - 268 = 357. x = ...',
      correctAnswer: '625',
      explanation: 'x = 357 + 268 = 625.'
    });
    addL2({
      id: 'r31_l2_06',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'So sánh phép cộng có nhớ',
      category: 'calculation',
      questionText: 'Điền dấu thích hợp: 347 + 258 ... 412 + 195',
      options: ['<', '>', '=', 'Không so sánh được'],
      correctAnswer: '<',
      explanation: '347 + 258 = 605; 412 + 195 = 607. Vì 605 < 607 nên điền dấu <.'
    });
    addL2({
      id: 'r31_l2_07',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đúng sai phép cộng nhớ 1 lần',
      category: 'calculation',
      questionText: 'Phép tính nào sau đây bị TÍNH SAI do quên cộng thêm số nhớ?',
      options: ['248 + 335 = 573', '156 + 238 = 394', '427 + 135 = 562', '319 + 253 = 572'],
      correctAnswer: '248 + 335 = 573',
      explanation: '248 + 335 = 583. Ghi 573 là do quên nhớ 1 sang hàng chục.'
    });
    addL2({
      id: 'r31_l2_08',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Cộng ba số trong phạm vi 1000',
      category: 'calculation',
      questionText: 'Tính: 250 + 350 + 150 = ...',
      correctAnswer: '750',
      explanation: '(250 + 350) + 150 = 600 + 150 = 750.'
    });
    addL2({
      id: 'r31_l2_09',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Đoàn tàu chở khách',
      category: 'real_world',
      questionText: 'Toa tàu thứ nhất chở 175 hành khách, toa tàu thứ hai chở 188 hành khách. Cả hai toa tàu chở tất cả bao nhiêu hành khách?',
      options: ['363 khách', '353 khách', '373 khách', '362 khách'],
      correctAnswer: '363 khách',
      unit: 'hành khách',
      explanation: '175 + 188 = 363 hành khách.'
    });
    addL2({
      id: 'r31_l2_10',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'Tổng lớn nhất',
      category: 'calculation',
      questionText: 'Tổng nào sau đây có kết quả lớn nhất?',
      options: ['467 + 355', '512 + 299', '605 + 198', '389 + 423'],
      correctAnswer: '467 + 355',
      explanation: '467 + 355 = 822 (lớn nhất). Các tổng còn lại: 811, 803, 812.'
    });

    // Vòng 31: Level 3
    addL3({
      id: 'r31_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Chữ số ẩn phép cộng có nhớ',
      category: 'logic',
      questionText: 'Tìm chữ số X trong phép cộng: 4X8 + 257 = 725',
      options: ['6', '5', '7', '4'],
      correctAnswer: '6',
      explanation: '725 - 257 = 468. Vậy X = 6.'
    });
    addL3({
      id: 'r31_l3_02',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Toán ba ngày thu hoạch',
      category: 'real_world',
      questionText: 'Ngày đầu nông trường thu được 250 kg chè búp. Ngày thứ hai thu được nhiều hơn ngày đầu 60 kg. Ngày thứ ba thu được bằng cả hai ngày đầu cộng lại. Hỏi ngày thứ ba thu được bao nhiêu kg chè?',
      options: ['560 kg', '310 kg', '500 kg', '600 kg'],
      correctAnswer: '560 kg',
      unit: 'kg',
      explanation: 'Ngày hai: 250 + 60 = 310 kg. Ngày ba: 250 + 310 = 560 kg.'
    });
    addL3({
      id: 'r31_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tính nhanh ghép cặp tròn trăm',
      category: 'calculation',
      questionText: 'Tính nhanh tổng: 125 + 348 + 375 = ...',
      correctAnswer: '848',
      explanation: '(125 + 375) + 348 = 500 + 348 = 848.'
    });
    addL3({
      id: 'r31_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Tổng lớn nhất có 3 chữ số khác nhau',
      category: 'logic',
      questionText: 'Tổng của số lớn nhất có ba chữ số và số bé nhất có ba chữ số khác nhau là:',
      options: ['1101', '1099', '1100', '1089'],
      correctAnswer: '1101',
      explanation: '999 + 102 = 1101.'
    });
    addL3({
      id: 'r31_l3_05',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Sách giáo khoa vùng cao',
      category: 'real_world',
      questionText: 'Học sinh thành phố quyên góp tặng các bạn vùng cao 450 cuốn sách Toán và 380 cuốn sách Tiếng Việt. Đợt 1 đã chuyển đi 500 cuốn. Hỏi còn lại bao nhiêu cuốn sách chưa chuyển?',
      options: ['330 cuốn', '320 cuốn', '350 cuốn', '830 cuốn'],
      correctAnswer: '330 cuốn',
      unit: 'cuốn',
      explanation: 'Tổng số sách: 450 + 380 = 830 cuốn. Còn lại: 830 - 500 = 330 cuốn.'
    });
  }

  else if (round === 32) {
    // Vòng 32: Phép trừ có nhớ trong phạm vi 1000
    addL2({
      id: 'r32_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Trừ có nhớ ở hàng đơn vị',
      category: 'calculation',
      questionText: 'Đặt tính rồi tính: 542 - 218 = ?',
      options: ['324', '334', '326', '314'],
      correctAnswer: '324',
      explanation: '2 không trừ được 8, lấy 12 - 8 = 4 viết 4 nhớ 1; 1 thêm 1 là 2; 4 - 2 = 2; 5 - 2 = 3. Kết quả là 324.'
    });
    addL2({
      id: 'r32_l2_02',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Trừ có nhớ ở hàng chục',
      category: 'calculation',
      questionText: 'Tính: 625 - 281 = ?',
      options: ['344', '444', '354', '334'],
      correctAnswer: '344',
      explanation: '5 - 1 = 4; 2 không trừ được 8 lấy 12 - 8 = 4 nhớ 1; 2 thêm 1 là 3; 6 - 3 = 3. Kết quả là 344.'
    });
    addL2({
      id: 'r32_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Trừ từ 1000',
      category: 'calculation',
      questionText: 'Tính: 1000 - 350 = ...',
      correctAnswer: '650',
      explanation: '1000 - 350 = 650.'
    });
    addL2({
      id: 'r32_l2_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Xưởng dệt may',
      category: 'real_world',
      questionText: 'Một xưởng may theo kế hoạch phải may 650 chiếc áo. Xưởng đã may được 385 chiếc áo. Xưởng còn phải may bao nhiêu chiếc áo nữa?',
      options: ['265 chiếc', '275 chiếc', '365 chiếc', '255 chiếc'],
      correctAnswer: '265 chiếc',
      unit: 'chiếc',
      explanation: '650 - 385 = 265 chiếc áo.'
    });
    addL2({
      id: 'r32_l2_05',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tìm số trừ trong phạm vi 1000',
      category: 'calculation',
      questionText: 'Tìm y biết: 745 - y = 362. y = ...',
      correctAnswer: '383',
      explanation: 'y = 745 - 362 = 383.'
    });
    addL2({
      id: 'r32_l2_06',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'So sánh phép trừ có nhớ',
      category: 'calculation',
      questionText: 'Điền dấu thích hợp: 835 - 350 ... 710 - 225',
      options: ['=', '>', '<', 'Không so sánh được'],
      correctAnswer: '=',
      explanation: '835 - 350 = 485; 710 - 225 = 485. Hai bên bằng nhau nên điền dấu =.'
    });
    addL2({
      id: 'r32_l2_07',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đúng sai phép trừ có nhớ',
      category: 'calculation',
      questionText: 'Phát biểu nào sau đây là ĐÚNG?',
      options: [
        '500 - 180 = 320',
        '642 - 275 = 467',
        '1000 - 400 = 500',
        '730 - 350 = 480'
      ],
      correctAnswer: '500 - 180 = 320',
      explanation: '500 - 180 = 320 là phép tính chính xác.'
    });
    addL2({
      id: 'r32_l2_08',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Dãy tính trừ liên tiếp',
      category: 'calculation',
      questionText: 'Tính: 900 - 350 - 150 = ...',
      correctAnswer: '400',
      explanation: '900 - (350 + 150) = 900 - 500 = 400.'
    });
    addL2({
      id: 'r32_l2_09',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Kho gạo dự trữ',
      category: 'real_world',
      questionText: 'Kho gạo có 920 kg gạo, sau khi xuất đi một số gạo thì trong kho còn lại 475 kg. Hỏi kho đã xuất đi bao nhiêu kg gạo?',
      options: ['445 kg', '455 kg', '545 kg', '435 kg'],
      correctAnswer: '445 kg',
      unit: 'kg',
      explanation: '920 - 475 = 445 kg.'
    });
    addL2({
      id: 'r32_l2_10',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'Sắp xếp kết quả phép tính',
      category: 'calculation',
      questionText: 'Sắp xếp theo thứ tự giảm dần: 820 - 250, 750 - 190, 900 - 380',
      options: [
        '820 - 250 (570), 750 - 190 (560), 900 - 380 (520)',
        '900 - 380, 750 - 190, 820 - 250',
        '750 - 190, 820 - 250, 900 - 380',
        '820 - 250, 900 - 380, 750 - 190'
      ],
      correctAnswer: '820 - 250 (570), 750 - 190 (560), 900 - 380 (520)',
      explanation: '570 > 560 > 520.'
    });

    // Vòng 32: Level 3
    addL3({
      id: 'r32_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Hiệu của số tròn trăm và số lẻ',
      category: 'logic',
      questionText: 'Hiệu giữa 1000 và số bé nhất có ba chữ số khác nhau là:',
      options: ['898', '899', '900', '888'],
      correctAnswer: '898',
      explanation: '1000 - 102 = 898.'
    });
    addL3({
      id: 'r32_l3_02',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Toán 2 bước tính giá trị hàng hóa',
      category: 'real_world',
      questionText: 'Một cửa hàng nhập về 750 chiếc khẩu trang. Tuần đầu bán được 280 chiếc, tuần sau bán được 315 chiếc. Hỏi sau 2 tuần cửa hàng còn lại bao nhiêu chiếc khẩu trang?',
      options: ['155 chiếc', '165 chiếc', '145 chiếc', '255 chiếc'],
      correctAnswer: '155 chiếc',
      unit: 'chiếc',
      explanation: 'Tổng bán: 280 + 315 = 595 chiếc. Còn lại: 750 - 595 = 155 chiếc.'
    });
    addL3({
      id: 'r32_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Chữ số ẩn phép trừ',
      category: 'logic',
      questionText: 'Tìm chữ số A biết: 6A4 - 285 = 339. A = ...',
      correctAnswer: '2',
      explanation: '339 + 285 = 624. Do đó A = 2.'
    });
    addL3({
      id: 'r32_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Tính tổng dãy số Trạng Nguyên',
      category: 'pattern',
      questionText: 'Tính: 1000 - 100 - 200 - 300 - 400 = ?',
      options: ['0', '100', '50', '200'],
      correctAnswer: '0',
      explanation: '100 + 200 + 300 + 400 = 1000; 1000 - 1000 = 0.'
    });
    addL3({
      id: 'r32_l3_05',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Tiền tiết kiệm mua xe đạp',
      category: 'real_world',
      questionText: 'Chiếc xe đạp giá 850 nghìn đồng. Nam đã tiết kiệm được 580 nghìn đồng. Bố cho Nam thêm 150 nghìn đồng. Nam còn thiếu bao nhiêu nghìn đồng nữa để đủ mua chiếc xe đạp?',
      options: ['120 nghìn đồng', '130 nghìn đồng', '270 nghìn đồng', '100 nghìn đồng'],
      correctAnswer: '120 nghìn đồng',
      explanation: 'Tổng tiền Nam có: 580 + 150 = 730 nghìn đồng. Số tiền còn thiếu: 850 - 730 = 120 nghìn đồng.'
    });
  }

  else if (round === 33) {
    // Vòng 33: Thu thập, kiểm đếm và Biểu đồ tranh
    addL2({
      id: 'r33_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Đọc biểu đồ tranh',
      category: 'data',
      visualType: 'chart_icons',
      visualData: { label: 'Số quả táo mỗi bạn hái được', items: [{ name: 'An', count: 4 }, { name: 'Bình', count: 6 }] },
      questionText: 'Trên biểu đồ tranh, mỗi biểu tượng quả táo biểu thị cho 2 quả táo thật. Bạn Bình có 4 biểu tượng quả táo. Hỏi bạn Bình có bao nhiêu quả táo thật?',
      options: ['8 quả táo', '4 quả táo', '6 quả táo', '10 quả táo'],
      correctAnswer: '8 quả táo',
      unit: 'quả táo',
      explanation: '2 x 4 = 8 quả táo.'
    });
    addL2({
      id: 'r33_l2_02',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Kiểm đếm đồ dùng học tập',
      category: 'data',
      questionText: 'Trong hộp bút của tổ Một có: 8 bút chì, 5 bút mực và 3 cục tẩy. Đồ vật nào có số lượng nhiều nhất?',
      options: ['Bút chì', 'Bút mực', 'Cục tẩy', 'Bằng nhau'],
      correctAnswer: 'Bút chì',
      explanation: '8 > 5 > 3 nên bút chì có số lượng nhiều nhất.'
    });
    addL2({
      id: 'r33_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tính tổng số lượng từ kiểm đếm',
      category: 'data',
      questionText: 'Kiểm đếm số học sinh thích các môn thể thao: Bóng đá có 15 bạn, Cầu lông có 12 bạn, Bơi lội có 10 bạn. Có tất cả ... bạn được hỏi ý kiến.',
      correctAnswer: '37',
      unit: 'bạn',
      explanation: '15 + 12 + 10 = 37 bạn.'
    });
    addL2({
      id: 'r33_l2_04',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Ý nghĩa biểu tượng biểu đồ tranh',
      category: 'data',
      questionText: 'Nếu mỗi hình ngôi sao biểu thị cho 5 điểm tốt. Bạn Hoa đạt được 7 hình ngôi sao. Bạn Hoa có bao nhiêu điểm tốt?',
      options: ['35 điểm tốt', '12 điểm tốt', '30 điểm tốt', '40 điểm tốt'],
      correctAnswer: '35 điểm tốt',
      explanation: '5 x 7 = 35 điểm tốt.'
    });
    addL2({
      id: 'r33_l2_05',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'So sánh số lượng trên biểu đồ',
      category: 'data',
      questionText: 'Lớp 2A nuôi 18 con chim bồ câu, lớp 2B nuôi 12 con chim bồ câu. Lớp 2A nuôi nhiều hơn lớp 2B bao nhiêu con?',
      correctAnswer: '6',
      unit: 'con',
      explanation: '18 - 12 = 6 con.'
    });
    addL2({
      id: 'r33_l2_06',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đúng sai về thu thập dữ liệu',
      category: 'data',
      questionText: 'Khẳng định nào dưới đây là ĐÚNG về biểu đồ tranh?',
      options: [
        'Biểu đồ tranh dùng hình ảnh hoặc biểu tượng để biểu thị dữ liệu',
        'Mỗi biểu tượng trên biểu đồ tranh luôn chỉ biểu thị đúng 1 vật thể duy nhất',
        'Biểu đồ tranh không thể so sánh số lượng được',
        'Biểu đồ tranh chỉ dùng được cho môn Toán lớp 5'
      ],
      correctAnswer: 'Biểu đồ tranh dùng hình ảnh hoặc biểu tượng để biểu thị dữ liệu',
      explanation: 'Biểu đồ tranh trực quan hóa số liệu bằng các hình vẽ hoặc biểu tượng quy ước.'
    });
    addL2({
      id: 'r33_l2_07',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Quan sát các loại hoa trong vườn',
      category: 'data',
      questionText: 'Lan đếm các luống hoa: 14 luống hoa hồng, 9 luống hoa cúc và 7 luống hoa hướng dương. Tổng số luống hoa trong vườn là:',
      options: ['30 luống', '28 luống', '32 luống', '29 luống'],
      correctAnswer: '30 luống',
      unit: 'luống',
      explanation: '14 + 9 + 7 = 30 luống hoa.'
    });
    addL2({
      id: 'r33_l2_08',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tìm số biểu tượng cần vẽ',
      category: 'data',
      questionText: 'Mỗi bông hoa vẽ đại diện cho 5 cây hoa thật. Để biểu thị 25 cây hoa thật, em cần vẽ bao nhiêu bông hoa?',
      correctAnswer: '5',
      unit: 'bông hoa',
      explanation: '25 : 5 = 5 bông hoa.'
    });
    addL2({
      id: 'r33_l2_09',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'Sắp xếp dữ liệu từ thấp đến cao',
      category: 'data',
      questionText: 'Số cây trồng của 3 tổ: Tổ 1 có 35 cây, Tổ 2 có 42 cây, Tổ 3 có 28 cây. Sắp xếp thứ tự các tổ từ trồng ít cây nhất đến nhiều nhất:',
      options: ['Tổ 3, Tổ 1, Tổ 2', 'Tổ 1, Tổ 2, Tổ 3', 'Tổ 2, Tổ 1, Tổ 3', 'Tổ 3, Tổ 2, Tổ 1'],
      correctAnswer: 'Tổ 3, Tổ 1, Tổ 2',
      explanation: '28 < 35 < 42.'
    });
    addL2({
      id: 'r33_l2_10',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Phân loại đồ vật theo nhóm màu sắc',
      category: 'data',
      questionText: 'Có 20 viên bi gồm: 8 bi đỏ, 7 bi xanh, còn lại là bi vàng. Số viên bi vàng là:',
      options: ['5 viên', '6 viên', '4 viên', '7 viên'],
      correctAnswer: '5 viên',
      unit: 'viên',
      explanation: '20 - (8 + 7) = 20 - 15 = 5 viên bi vàng.'
    });

    // Vòng 33: Level 3
    addL3({
      id: 'r33_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Suy luận từ biểu đồ tranh khuyết',
      category: 'data',
      questionText: 'Một biểu đồ tranh có 4 cột thể hiện số học sinh 4 tổ. Biết tổng số học sinh là 36 bạn. Tổ 1 có 8 bạn, tổ 2 có 10 bạn, tổ 3 có 9 bạn. Cột tổ 4 có bao nhiêu bạn?',
      options: ['9 bạn', '8 bạn', '10 bạn', '11 bạn'],
      correctAnswer: '9 bạn',
      unit: 'bạn',
      explanation: '36 - (8 + 10 + 9) = 36 - 27 = 9 bạn.'
    });
    addL3({
      id: 'r33_l3_02',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Tỉ lệ đại diện biểu đồ tranh',
      category: 'data',
      questionText: 'Trên biểu đồ tranh, mỗi khuôn mặt cười đại diện cho 2 bạn học sinh giỏi. Nếu lớp có 18 học sinh giỏi thì cần vẽ bao nhiêu khuôn mặt cười?',
      options: ['9 khuôn mặt', '18 khuôn mặt', '6 khuôn mặt', '12 khuôn mặt'],
      correctAnswer: '9 khuôn mặt',
      explanation: '18 : 2 = 9 khuôn mặt cười.'
    });
    addL3({
      id: 'r33_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tính số chênh lệch từ biểu đồ',
      category: 'data',
      questionText: 'Trên biểu đồ, Tổ 1 có 6 ngôi sao, Tổ 2 có 4 ngôi sao. Biết mỗi ngôi sao ứng với 5 điểm 10. Tổ 1 có nhiều hơn Tổ 2 bao nhiêu điểm 10?',
      correctAnswer: '10',
      unit: 'điểm 10',
      explanation: 'Tổ 1 hơn Tổ 2: 6 - 4 = 2 ngôi sao. Số điểm 10 hơn: 2 x 5 = 10 điểm 10.'
    });
    addL3({
      id: 'r33_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Trắc nghiệm logic dữ liệu',
      category: 'logic',
      questionText: 'Trong một cuộc khảo sát sở thích hoa quả của 30 bạn học sinh: có 18 bạn thích cam, 15 bạn thích táo, và có 5 bạn thích cả hai loại quả. Hỏi có bao nhiêu bạn không thích cả cam lẫn táo?',
      options: ['2 bạn', '3 bạn', '4 bạn', '5 bạn'],
      correctAnswer: '2 bạn',
      unit: 'bạn',
      explanation: 'Số bạn thích ít nhất 1 loại: 18 + 15 - 5 = 28 bạn. Số bạn không thích loại nào: 30 - 28 = 2 bạn.'
    });
    addL3({
      id: 'r33_l3_05',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Phát hiện dữ liệu bất hợp lý',
      category: 'logic',
      questionText: 'Lớp 2A có 32 bạn học sinh. Khi cô giáo kiểm đếm số bạn đi học các ngày trong tuần: Thứ Hai có 31 bạn, Thứ Ba có 32 bạn, Thứ Tư có 35 bạn, Thứ Năm có 30 bạn. Ngày nào có số liệu BẤT HỢP LÝ?',
      options: ['Thứ Tư (35 bạn)', 'Thứ Ba', 'Thứ Hai', 'Thứ Năm'],
      correctAnswer: 'Thứ Tư (35 bạn)',
      explanation: 'Cả lớp chỉ có 32 bạn, số bạn đi học ngày Thứ Tư ghi 35 bạn là vô lý (lớn hơn sĩ số cả lớp).'
    });
  }

  else if (round === 34) {
    // Vòng 34: THI HỘI - CẤP TỈNH / THÀNH PHỐ
    addL2({
      id: 'r34_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Đề Thi Hội: Tính nhanh biểu thức lớn',
      category: 'calculation',
      questionText: '[Thi Hội] Tính giá trị biểu thức: 450 + 280 - 130 = ?',
      options: ['600', '590', '610', '580'],
      correctAnswer: '600',
      explanation: '450 + 280 = 730; 730 - 130 = 600.'
    });
    addL2({
      id: 'r34_l2_02',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Đề Thi Hội: Nhân chia kết hợp',
      category: 'calculation',
      questionText: '[Thi Hội] Tính: 2 x 8 + 35 : 5 = ?',
      options: ['23', '24', '22', '25'],
      correctAnswer: '23',
      explanation: '2 x 8 = 16; 35 : 5 = 7; 16 + 7 = 23.'
    });
    addL2({
      id: 'r34_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Đề Thi Hội: Quy đổi đơn vị chiều dài',
      category: 'measurement',
      questionText: '[Thi Hội] Tính: 1 m - 35 cm = ... cm',
      correctAnswer: '65',
      unit: 'cm',
      explanation: '1 m = 100 cm; 100 - 35 = 65 cm.'
    });
    addL2({
      id: 'r34_l2_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Đề Thi Hội: Đội tuyển học sinh giỏi',
      category: 'real_world',
      questionText: '[Thi Hội] Tham gia ngày hội Toán học có 5 đội thi, mỗi đội gồm 6 bạn. Sau đó có thêm 4 bạn dự bị vào tham gia giao lưu. Hỏi có tất cả bao nhiêu bạn?',
      options: ['34 bạn', '30 bạn', '35 bạn', '32 bạn'],
      correctAnswer: '34 bạn',
      unit: 'bạn',
      explanation: '5 x 6 = 30 bạn. Thêm 4 bạn: 30 + 4 = 34 bạn.'
    });
    addL2({
      id: 'r34_l2_05',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Đề Thi Hội: Tìm x hai vế',
      category: 'calculation',
      questionText: '[Thi Hội] Tìm x biết: x : 5 = 14 - 6. x = ...',
      correctAnswer: '40',
      explanation: '14 - 6 = 8; x = 8 x 5 = 40.'
    });
    addL2({
      id: 'r34_l2_06',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Đề Thi Hội: Độ dài đường gấp khúc lớn',
      category: 'measurement',
      questionText: '[Thi Hội] Một đường gấp khúc gồm 5 đoạn thẳng bằng nhau, mỗi đoạn dài 4 dm. Độ dài đường gấp khúc theo đơn vị mét là:',
      options: ['2 m', '20 m', '20 dm', '200 cm'],
      correctAnswer: '2 m',
      unit: 'm',
      explanation: '5 x 4 = 20 dm. Đổi 20 dm = 2 m.'
    });
    addL2({
      id: 'r34_l2_07',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đề Thi Hội: So sánh đại lượng',
      category: 'measurement',
      questionText: '[Thi Hội] Khẳng định nào sau đây là ĐÚNG?',
      options: [
        '1 km dài hơn 999 m',
        '1 giờ bằng 100 phút',
        'Khối cầu có hai mặt đáy hình tròn',
        'Số lớn nhất có 3 chữ số là 900'
      ],
      correctAnswer: '1 km dài hơn 999 m',
      explanation: '1 km = 1000 m > 999 m.'
    });
    addL2({
      id: 'r34_l2_08',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Đề Thi Hội: Số kẹo chia đều',
      category: 'calculation',
      questionText: '[Thi Hội] Có 45 viên kẹo chia đều cho 5 bạn. Mỗi bạn nhận được ... viên kẹo.',
      correctAnswer: '9',
      unit: 'viên kẹo',
      explanation: '45 : 5 = 9 viên kẹo.'
    });
    addL2({
      id: 'r34_l2_09',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Đề Thi Hội: Mua hàng siêu thị',
      category: 'real_world',
      questionText: '[Thi Hội] Mẹ mua một chai dầu ăn giá 45 nghìn đồng và một gói đường giá 25 nghìn đồng. Mẹ đưa cho cô thu ngân tờ 100 nghìn đồng. Cô thu ngân trả lại mẹ bao nhiêu nghìn đồng?',
      options: ['30 nghìn đồng', '40 nghìn đồng', '20 nghìn đồng', '35 nghìn đồng'],
      correctAnswer: '30 nghìn đồng',
      explanation: 'Tổng tiền mua: 45 + 25 = 70 nghìn đồng. Tiền thừa: 100 - 70 = 30 nghìn đồng.'
    });
    addL2({
      id: 'r34_l2_10',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'Đề Thi Hội: Số học sinh',
      category: 'calculation',
      questionText: '[Thi Hội] Số liền sau của số bé nhất có ba chữ số khác nhau là:',
      options: ['103', '102', '101', '104'],
      correctAnswer: '103',
      explanation: 'Số bé nhất có 3 chữ số khác nhau là 102. Số liền sau của 102 là 102 + 1 = 103.'
    });

    // Vòng 34: Level 3 (Thi Hội)
    addL3({
      id: 'r34_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Đề Thi Hội Mức 3: Bài toán suy luận tuổi mẹ và con',
      category: 'real_world',
      questionText: '[Thi Hội Mức 3] Hiện nay tổng số tuổi của hai mẹ con là 40 tuổi. Biết mẹ sinh con năm mẹ 26 tuổi. Hỏi hiện nay con bao nhiêu tuổi?',
      options: ['7 tuổi', '8 tuổi', '6 tuổi', '9 tuổi'],
      correctAnswer: '7 tuổi',
      unit: 'tuổi',
      explanation: 'Mẹ sinh con năm 26 tuổi nghĩa là mẹ hơn con 26 tuổi. Tuổi con hiện nay: (40 - 26) : 2 = 14 : 2 = 7 tuổi.'
    });
    addL3({
      id: 'r34_l3_02',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Đề Thi Hội Mức 3: Cắt đoạn dây thành hình',
      category: 'geometry',
      questionText: '[Thi Hội Mức 3] Một sợi dây thép dài 40 cm được uốn thành một hình vuông. Diện tích không cần tính, hãy cho biết độ dài mỗi cạnh của hình vuông đó là bao nhiêu?',
      options: ['10 cm', '8 cm', '12 cm', '20 cm'],
      correctAnswer: '10 cm',
      unit: 'cm',
      explanation: 'Hình vuông có 4 cạnh bằng nhau: 40 : 4 = 10 cm.'
    });
    addL3({
      id: 'r34_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Đề Thi Hội Mức 3: Thừa số và tích mở rộng',
      category: 'logic',
      questionText: '[Thi Hội Mức 3] Tìm tích của hai số biết rằng tích gấp 5 lần thừa số thứ nhất và thừa số thứ nhất bằng 8. Tích đó là ...',
      correctAnswer: '40',
      explanation: 'Tích gấp 5 lần thừa số thứ nhất tức thừa số thứ hai bằng 5. Tích là: 8 x 5 = 40.'
    });
    addL3({
      id: 'r34_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Đề Thi Hội Mức 3: Quy luật chuỗi hình chữ nhật',
      category: 'pattern',
      questionText: '[Thi Hội Mức 3] Trong một hàng có 20 chiếc ghế được đánh số từ 1 đến 20. Bạn Nam ngồi ghế số 5, bạn Bắc ngồi ghế số 16. Ở giữa bạn Nam và bạn Bắc có bao nhiêu chiếc ghế?',
      options: ['10 chiếc ghế', '11 chiếc ghế', '9 chiếc ghế', '12 chiếc ghế'],
      correctAnswer: '10 chiếc ghế',
      unit: 'chiếc ghế',
      explanation: 'Các ghế ở giữa là từ số 6 đến số 15: 15 - 6 + 1 = 10 chiếc ghế (hoặc 16 - 5 - 1 = 10).'
    });
    addL3({
      id: 'r34_l3_05',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Đề Thi Hội Mức 3: Trạng Nguyên cân thăng bằng',
      category: 'logic',
      visualType: 'balance_scale',
      visualData: { leftWeight: 12, rightWeight: 12 },
      questionText: '[Thi Hội Mức 3] Đĩa cân bên trái có 3 quả cam bằng nhau. Đĩa cân bên phải có 1 quả cam cùng loại và một quả cân 400 g. Cân thăng bằng. Hỏi một quả cam cân nặng bao nhiêu gam?',
      options: ['200 g', '100 g', '300 g', '150 g'],
      correctAnswer: '200 g',
      unit: 'g',
      explanation: 'Bỏ bớt 1 quả cam ở cả hai đĩa thì bên trái còn 2 quả cam thăng bằng với quả cân 400 g. Một quả cam nặng: 400 : 2 = 200 g.'
    });
  }

  else if (round === 35) {
    // Vòng 35: THI ĐÌNH - CHUNG KẾT TOÀN QUỐC
    addL2({
      id: 'r35_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Chung Kết Thi Đình: Phép tính tổng hợp',
      category: 'calculation',
      questionText: '[Chung Kết Thi Đình] Tính giá trị biểu thức: 5 x 9 - 18 : 2 = ?',
      options: ['36', '35', '37', '40'],
      correctAnswer: '36',
      explanation: '5 x 9 = 45; 18 : 2 = 9; 45 - 9 = 36.'
    });
    addL2({
      id: 'r35_l2_02',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Chung Kết Thi Đình: Số có 3 chữ số đặc biệt',
      category: 'calculation',
      questionText: '[Chung Kết Thi Đình] Số tròn trăm lớn nhất có ba chữ số cộng với số tròn chục bé nhất có hai chữ số là:',
      options: ['910', '900', '920', '990'],
      correctAnswer: '910',
      explanation: '900 + 10 = 910.'
    });
    addL2({
      id: 'r35_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Chung Kết Thi Đình: Quy đổi đơn vị đo lường',
      category: 'measurement',
      questionText: '[Chung Kết Thi Đình] Tính: 1 km - 450 m = ... m',
      correctAnswer: '550',
      unit: 'm',
      explanation: '1000 m - 450 m = 550 m.'
    });
    addL2({
      id: 'r35_l2_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Chung Kết Thi Đình: Đoàn khách du lịch',
      category: 'real_world',
      questionText: '[Chung Kết Thi Đình] Một đoàn khách có 45 người muốn đi đò qua sông. Mỗi chuyến đò chỉ chở được tối đa 5 người. Hỏi cần ít nhất bao nhiêu chuyến đò để chở hết số khách qua sông?',
      options: ['9 chuyến', '8 chuyến', '10 chuyến', '7 chuyến'],
      correctAnswer: '9 chuyến',
      unit: 'chuyến',
      explanation: '45 : 5 = 9 chuyến đò.'
    });
    addL2({
      id: 'r35_l2_05',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Chung Kết Thi Đình: Tìm số bị trừ',
      category: 'calculation',
      questionText: '[Chung Kết Thi Đình] Tìm x biết: x - 350 = 280 + 170. x = ...',
      correctAnswer: '800',
      explanation: '280 + 170 = 450; x = 450 + 350 = 800.'
    });
    addL2({
      id: 'r35_l2_06',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Chung Kết Thi Đình: Chu vi hình tam giác',
      category: 'geometry',
      questionText: '[Chung Kết Thi Đình] Một hình tam giác có 3 cạnh đều dài 8 cm. Độ dài đường viền quanh hình tam giác đó là:',
      options: ['24 cm', '16 cm', '20 cm', '28 cm'],
      correctAnswer: '24 cm',
      unit: 'cm',
      explanation: '8 + 8 + 8 = 24 cm.'
    });
    addL2({
      id: 'r35_l2_07',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Chung Kết Thi Đình: Khẳng định chuẩn',
      category: 'logic',
      questionText: '[Chung Kết Thi Đình] Chọn khẳng định ĐÚNG NHẤT trong các câu sau:',
      options: [
        'Một năm thường có 365 ngày, một tuần có 7 ngày, một ngày có 24 giờ',
        'Khối trụ không thể lăn được',
        'Tất cả các số có 3 chữ số đều lớn hơn 1000',
        '1 dm = 100 cm'
      ],
      correctAnswer: 'Một năm thường có 365 ngày, một tuần có 7 ngày, một ngày có 24 giờ',
      explanation: 'Đây là kiến thức thời gian chuẩn xác của chương trình Tiểu học.'
    });
    addL2({
      id: 'r35_l2_08',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Chung Kết Thi Đình: Tiết kiệm tiền',
      category: 'real_world',
      questionText: '[Chung Kết Thi Đình] An có 6 tờ tiền loại 5 nghìn đồng và 2 tờ tiền loại 10 nghìn đồng. An có tất cả ... nghìn đồng.',
      correctAnswer: '50',
      explanation: '5 x 6 = 30 nghìn đồng; 10 x 2 = 20 nghìn đồng; 30 + 20 = 50 nghìn đồng.'
    });
    addL2({
      id: 'r35_l2_09',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Chung Kết Thi Đình: Bể cá cảnh trường học',
      category: 'real_world',
      questionText: '[Chung Kết Thi Đình] Bể cá chứa 100 lít nước. Sau một tuần nước bay hơi mất 15 lít và người ta xả đi 25 lít để thay nước mới. Lượng nước còn lại trong bể là:',
      options: ['60 lít', '70 lít', '50 lít', '65 lít'],
      correctAnswer: '60 lít',
      unit: 'lít',
      explanation: '100 - (15 + 25) = 100 - 40 = 60 lít.'
    });
    addL2({
      id: 'r35_l2_10',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'Chung Kết Thi Đình: Sắp xếp số học',
      category: 'calculation',
      questionText: '[Chung Kết Thi Đình] Số bé nhất trong các số: 305, 350, 503, 530 là:',
      options: ['305', '350', '503', '530'],
      correctAnswer: '305',
      explanation: '305 có hàng trăm là 3 và hàng chục là 0 nên là số bé nhất.'
    });

    // Vòng 35: Level 3 (Thi Đình Chung Kết Toàn Quốc)
    addL3({
      id: 'r35_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Đề Thi Đình Chung Kết: Tìm số bí ẩn Trạng Nguyên',
      category: 'logic',
      questionText: '[Thi Đình Chung Kết] Tìm một số biết rằng lấy số đó chia cho 5 rồi cộng với 28 thì được kết quả là 35:',
      options: ['35', '40', '45', '30'],
      correctAnswer: '35',
      explanation: 'Tính ngược từ cuối: (35 - 28) x 5 = 7 x 5 = 35.'
    });
    addL3({
      id: 'r35_l3_02',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Đề Thi Đình Chung Kết: Bài toán bắt tay Trạng Nguyên',
      category: 'logic',
      questionText: '[Thi Đình Chung Kết] Trong buổi lễ vinh danh Bảng Vàng Trạng Nguyên có 4 bạn học sinh xuất sắc nhất. Mỗi bạn đều bắt tay với từng bạn còn lại đúng 1 lần. Hỏi có tất cả bao nhiêu cái bắt tay?',
      options: ['6 cái bắt tay', '8 cái bắt tay', '12 cái bắt tay', '4 cái bắt tay'],
      correctAnswer: '6 cái bắt tay',
      unit: 'cái bắt tay',
      explanation: 'Công thức bắt tay giữa n người: 4 x 3 : 2 = 6 cái bắt tay.'
    });
    addL3({
      id: 'r35_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Đề Thi Đình Chung Kết: Bài toán gà và chó',
      category: 'logic',
      questionText: '[Thi Đình Chung Kết] Nhà Trạng Nguyên nuôi cả gà và chó, đếm được đúng 6 cái đầu và 16 cái chân. Hỏi nhà Trạng Nguyên nuôi bao nhiêu con chó? (Chó 4 chân, gà 2 chân)',
      correctAnswer: '2',
      unit: 'con chó',
      explanation: 'Nếu cả 6 con đều là gà thì có: 6 x 2 = 12 chân. Số chân dôi ra là: 16 - 12 = 4 chân. Mỗi con chó hơn con gà 2 chân. Số chó là: 4 : 2 = 2 con chó (và 4 con gà).'
    });
    addL3({
      id: 'r35_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Đề Thi Đình Chung Kết: Xếp số hình tam giác ma thuật',
      category: 'pattern',
      questionText: '[Thi Đình Chung Kết] Cho dãy số Trạng Nguyên: 2, 5, 10, 17, 26, ... Số thích hợp tiếp theo của dãy số này là:',
      options: ['37', '35', '36', '38'],
      correctAnswer: '37',
      explanation: 'Hiệu giữa các số liên tiếp tăng dần theo số lẻ: +3, +5, +7, +9, +11. Số tiếp theo là: 26 + 11 = 37.'
    });
    addL3({
      id: 'r35_l3_05',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Đề Thi Đình Chung Kết: Vinh Quy Bái Tổ',
      category: 'real_world',
      questionText: '[Thi Đình Chung Kết] Đoàn rước Trạng Nguyên về làng gồm đoàn người đi bộ dài 50 m. Người đi đầu cách cổng làng 200 m. Hỏi khi người đi cuối cùng của đoàn vừa bước qua cổng làng thì người đi đầu đã cách cổng làng bao nhiêu mét?',
      options: ['50 m', '250 m', '200 m', '150 m'],
      correctAnswer: '50 m',
      unit: 'm',
      explanation: 'Khi người cuối cùng vừa qua cổng làng, toàn bộ chiều dài đoàn người (50 m) đã qua cổng làng, do đó người đi đầu cách cổng làng đúng 50 m.'
    });
  }

  return { level2: l2, level3: l3 };
}
