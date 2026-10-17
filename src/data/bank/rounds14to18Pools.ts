import { Question } from '../../types/quiz';

/**
 * NGÂN HÀNG CÂU HỎI MỨC 2 & MỨC 3: VÒNG 14 ĐẾN VÒNG 18
 * SGK Toán 2 Kết Nối Tri Thức Với Cuộc Sống (GDPT 2018)
 * Các chủ đề: Đồng hồ & Giờ phút, Ngày - Giờ, Ôn tập cộng trừ, Ôn tập hình học kì 1,
 * và VÒNG 18: THI SƠ KHẢO CẤP TRƯỜNG.
 */

export function getRounds14to18Questions(round: number): { level2: Question[]; level3: Question[] } {
  const l2: Question[] = [];
  const l3: Question[] = [];

  const addL2 = (q: Omit<Question, 'roundNumber' | 'level' | 'points' | 'questionNumber'>) => {
    l2.push({ ...q, roundNumber: round, level: 2, points: 10, questionNumber: 0 });
  };

  const addL3 = (q: Omit<Question, 'roundNumber' | 'level' | 'points' | 'questionNumber'>) => {
    l3.push({ ...q, roundNumber: round, level: 3, points: 10, questionNumber: 0 });
  };

  if (round === 14) {
    // Vòng 14: Giờ - Phút & Xem đồng hồ
    addL2({
      id: 'r14_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Xem đồng hồ kim giờ rưỡi',
      category: 'measurement',
      visualType: 'clock',
      visualData: { hour: 7, minute: 30 },
      questionText: 'Đồng hồ chỉ kim ngắn ở giữa số 7 và số 8, kim dài chỉ đúng số 6. Đồng hồ đang chỉ mấy giờ?',
      options: ['7 giờ 30 phút (7 giờ rưỡi)', '8 giờ 30 phút', '6 giờ 35 phút', '7 giờ 6 phút'],
      correctAnswer: '7 giờ 30 phút (7 giờ rưỡi)',
      explanation: 'Kim dài chỉ số 6 là 30 phút. Kim ngắn ở giữa số 7 và số 8 là 7 giờ rưỡi (7 giờ 30 phút).'
    });
    addL2({
      id: 'r14_l2_02',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Đồng hồ điện tử 24 giờ',
      category: 'measurement',
      questionText: 'Đồng hồ điện tử hiện số 15:00. Lúc đó là mấy giờ chiều?',
      options: ['3 giờ chiều', '5 giờ chiều', '2 giờ chiều', '4 giờ chiều'],
      correctAnswer: '3 giờ chiều',
      explanation: '15 giờ - 12 giờ = 3 giờ chiều.'
    });
    addL2({
      id: 'r14_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Một giờ có bao nhiêu phút',
      category: 'measurement',
      questionText: 'Một giờ có bao nhiêu phút?',
      correctAnswer: '60',
      unit: 'phút',
      explanation: '1 giờ = 60 phút.'
    });
    addL2({
      id: 'r14_l2_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Thời gian đi học',
      category: 'real_world',
      visualType: 'clock',
      visualData: { hour: 7, minute: 0 },
      questionText: 'An bắt đầu đi bộ từ nhà lúc 6 giờ 45 phút và đến trường lúc 7 giờ đúng. An đi hết bao nhiêu phút?',
      options: ['15 phút', '20 phút', '25 phút', '10 phút'],
      correctAnswer: '15 phút',
      unit: 'phút',
      explanation: 'Từ 6 giờ 45 phút đến 7 giờ đúng là: 60 - 45 = 15 phút.'
    });
    addL2({
      id: 'r14_l2_05',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Giờ tối trên đồng hồ 24h',
      category: 'measurement',
      questionText: '8 giờ tối còn được gọi là mấy giờ trong ngày?',
      options: ['20 giờ', '18 giờ', '22 giờ', '19 giờ'],
      correctAnswer: '20 giờ',
      explanation: '8 giờ tối = 12 + 8 = 20 giờ.'
    });
    addL2({
      id: 'r14_l2_06',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Thời lượng một tiết học',
      category: 'real_world',
      questionText: 'Tiết học thứ nhất bắt đầu lúc 7 giờ 30 phút và kết thúc lúc 8 giờ 5 phút. Tiết học đó kéo dài bao nhiêu phút?',
      correctAnswer: '35',
      unit: 'phút',
      explanation: 'Từ 7h30 đến 8h là 30 phút; từ 8h đến 8h05 là 5 phút. Tổng thời gian: 30 + 5 = 35 phút.'
    });
    addL2({
      id: 'r14_l2_07',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đúng sai về kim đồng hồ',
      category: 'measurement',
      questionText: 'Phát biểu nào sau đây là SAI?',
      options: [
        'Kim giờ ngắn và quay nhanh hơn kim phút',
        'Kim phút chỉ vào số 12 tức là giờ đúng',
        'Kim phút chỉ vào số 6 tức là 30 phút',
        'Một ngày đêm có đúng 24 giờ'
      ],
      correctAnswer: 'Kim giờ ngắn và quay nhanh hơn kim phút',
      explanation: 'Kim phút quay nhanh hơn kim giờ (1 giờ kim phút quay trọn 1 vòng, kim giờ chỉ nhích 1 số).'
    });
    addL2({
      id: 'r14_l2_08',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Xem phim hoạt hình',
      category: 'real_world',
      visualType: 'clock',
      visualData: { hour: 20, minute: 0 },
      questionText: 'Chương trình ca nhạc thiếu nhi bắt đầu lúc 20 giờ và kéo dài trong 30 phút. Chương trình kết thúc lúc mấy giờ?',
      options: ['20 giờ 30 phút (8 giờ rưỡi tối)', '21 giờ', '20 giờ 15 phút', '8 giờ tối'],
      correctAnswer: '20 giờ 30 phút (8 giờ rưỡi tối)',
      explanation: '20 giờ + 30 phút = 20 giờ 30 phút.'
    });
    addL2({
      id: 'r14_l2_09',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Kim phút quay trên mặt đồng hồ',
      category: 'measurement',
      questionText: 'Khi kim phút quay từ số 12 đến số 3 trên mặt đồng hồ thì đã trôi qua bao nhiêu phút?',
      correctAnswer: '15',
      unit: 'phút',
      explanation: 'Mỗi khoảng giữa hai số liên tiếp là 5 phút. Từ 12 đến 3 có 3 khoảng: 5 x 3 = 15 phút.'
    });
    addL2({
      id: 'r14_l2_10',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'So sánh thời lượng',
      category: 'measurement',
      questionText: 'Khoảng thời gian nào dài nhất trong các khoảng thời gian sau?',
      options: ['1 giờ', '50 phút', '45 phút', '30 phút'],
      correctAnswer: '1 giờ',
      explanation: '1 giờ = 60 phút, dài hơn 50 phút, 45 phút và 30 phút.'
    });

    // Vòng 14: Level 3
    addL3({
      id: 'r14_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Đồng hồ chạy chậm',
      category: 'logic',
      questionText: 'Một chiếc đồng hồ treo tường mỗi giờ chạy chậm mất 2 phút. Lúc 6 giờ sáng người ta chỉnh đồng hồ đúng giờ. Đến 10 giờ sáng cùng ngày, đồng hồ đó sẽ chỉ mấy giờ?',
      options: ['9 giờ 52 phút', '9 giờ 58 phút', '10 giờ 8 phút', '10 giờ 2 phút'],
      correctAnswer: '9 giờ 52 phút',
      explanation: 'Từ 6 giờ đến 10 giờ là 4 giờ. Đồng hồ chạy chậm: 4 x 2 = 8 phút. Lúc đó đồng hồ chỉ: 10 giờ - 8 phút = 9 giờ 52 phút.'
    });
    addL3({
      id: 'r14_l3_02',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Góc giữa hai kim đồng hồ',
      category: 'geometry',
      visualType: 'clock',
      visualData: { hour: 6, minute: 0 },
      questionText: 'Lúc mấy giờ đúng thì hai kim đồng hồ (kim giờ và kim phút) tạo thành một đường thẳng?',
      options: ['6 giờ đúng', '12 giờ đúng', '9 giờ đúng', '3 giờ đúng'],
      correctAnswer: '6 giờ đúng',
      explanation: 'Lúc 6 giờ đúng, kim phút chỉ số 12 thẳng đứng lên trên, kim giờ chỉ số 6 thẳng đứng xuống dưới, tạo thành đường thẳng.'
    });
    addL3({
      id: 'r14_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Thời gian di chuyển hai chiều',
      category: 'real_world',
      questionText: 'Bố đi xe máy từ nhà về quê mất 1 giờ 15 phút. Bố ở lại quê chơi 2 giờ rồi đi xe máy về lại nhà mất 1 giờ 15 phút. Bố đã rời khỏi nhà trong tổng cộng bao nhiêu giờ và phút? (Điền số phút của phần lẻ khi viết dạng 4 giờ ... phút)',
      correctAnswer: '30',
      unit: 'phút',
      explanation: '1h15p + 2h + 1h15p = 4 giờ 30 phút. Số phút lẻ là 30.'
    });
    addL3({
      id: 'r14_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Tiếng chuông đồng hồ',
      category: 'logic',
      questionText: 'Một chiếc đồng hồ quả lắc điểm chuông theo số giờ (1 giờ điểm 1 tiếng, 2 giờ điểm 2 tiếng...). Từ 1 giờ chiều đến 4 giờ chiều cùng ngày, đồng hồ đã điểm tổng cộng bao nhiêu tiếng chuông?',
      options: ['10 tiếng', '4 tiếng', '12 tiếng', '8 tiếng'],
      correctAnswer: '10 tiếng',
      explanation: '1 giờ + 2 giờ + 3 giờ + 4 giờ = 1 + 2 + 3 + 4 = 10 tiếng chuông.'
    });
    addL3({
      id: 'r14_l3_05',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Toán bẫy thời gian làm bài thi',
      category: 'real_world',
      questionText: 'Kì thi Trạng Nguyên bắt đầu lúc 8 giờ 10 phút sáng. Thời gian làm bài là 30 phút. Học sinh nộp bài trước giờ quy định 5 phút. Học sinh đó nộp bài lúc mấy giờ?',
      options: ['8 giờ 35 phút', '8 giờ 40 phút', '8 giờ 45 phút', '8 giờ 30 phút'],
      correctAnswer: '8 giờ 35 phút',
      explanation: 'Giờ hết bài: 8h10 + 30p = 8h40. Nộp trước 5 phút: 8h40 - 5p = 8 giờ 35 phút.'
    });
  }

  else if (round === 15) {
    // Vòng 15: Ngày - Giờ (24 giờ, các buổi trong ngày)
    addL2({
      id: 'r15_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: '24 giờ một ngày',
      category: 'measurement',
      questionText: 'Một ngày được tính bắt đầu từ lúc nào?',
      options: [
        'Từ 12 giờ đêm (0 giờ) hôm trước đến 12 giờ đêm hôm sau',
        'Từ lúc mặt trời mọc (6 giờ sáng)',
        'Từ lúc học sinh đến trường (7 giờ sáng)',
        'Từ 12 giờ trưa'
      ],
      correctAnswer: 'Từ 12 giờ đêm (0 giờ) hôm trước đến 12 giờ đêm hôm sau',
      explanation: 'Một ngày bắt đầu từ 0 giờ (12 giờ đêm) và kéo dài trọn vẹn 24 giờ.'
    });
    addL2({
      id: 'r15_l2_02',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Các buổi trong ngày',
      category: 'measurement',
      questionText: '13 giờ thuộc buổi nào trong ngày?',
      options: ['Buổi chiều (1 giờ chiều)', 'Buổi trưa', 'Buổi sáng', 'Buổi tối'],
      correctAnswer: 'Buổi chiều (1 giờ chiều)',
      explanation: '13 giờ chính là 1 giờ chiều.'
    });
    addL2({
      id: 'r15_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tính số giờ trôi qua',
      category: 'measurement',
      questionText: 'Từ 8 giờ sáng đến 11 giờ trưa cùng ngày có bao nhiêu giờ?',
      correctAnswer: '3',
      unit: 'giờ',
      explanation: '11 - 8 = 3 giờ.'
    });
    addL2({
      id: 'r15_l2_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Giấc ngủ của bé',
      category: 'real_world',
      questionText: 'Bé Lan đi ngủ lúc 21 giờ (9 giờ tối) và thức dậy lúc 6 giờ sáng hôm sau. Bé Lan đã ngủ được bao nhiêu giờ?',
      options: ['9 giờ', '8 giờ', '10 giờ', '7 giờ'],
      correctAnswer: '9 giờ',
      unit: 'giờ',
      explanation: 'Từ 21 giờ đến 24 giờ là 3 giờ; từ 0 giờ đến 6 giờ sáng là 6 giờ. Tổng cộng: 3 + 6 = 9 giờ.'
    });
    addL2({
      id: 'r15_l2_05',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Quy đổi giờ đêm',
      category: 'measurement',
      questionText: '24 giờ trong ngày còn được gọi là:',
      options: ['12 giờ đêm', '12 giờ trưa', '0 giờ sáng hôm sau', 'Cả 12 giờ đêm và 0 giờ hôm sau'],
      correctAnswer: 'Cả 12 giờ đêm và 0 giờ hôm sau',
      explanation: '24 giờ là mốc kết thúc ngày cũ, đồng thời là mốc 0 giờ bắt đầu ngày mới.'
    });
    addL2({
      id: 'r15_l2_06',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Số giờ trong 2 ngày',
      category: 'calculation',
      questionText: 'Hai ngày đêm có tất cả bao nhiêu giờ?',
      correctAnswer: '48',
      unit: 'giờ',
      explanation: '24 + 24 = 48 giờ.'
    });
    addL2({
      id: 'r15_l2_07',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đúng sai về sinh hoạt trong ngày',
      category: 'real_world',
      questionText: 'Hành động nào dưới đây diễn ra vào buổi trưa là hợp lý nhất?',
      options: ['Ăn cơm trưa lúc 11 giờ 30 phút', 'Tập thể dục sáng lúc 12 giờ trưa', 'Đi ngủ qua đêm lúc 13 giờ', 'Xem phim lúc 24 giờ trưa'],
      correctAnswer: 'Ăn cơm trưa lúc 11 giờ 30 phút',
      explanation: 'Khoảng thời gian 11h30 đến 12h là giờ ăn trưa phù hợp của học sinh và gia đình.'
    });
    addL2({
      id: 'r15_l2_08',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'Thứ tự các buổi trong ngày',
      category: 'measurement',
      questionText: 'Thứ tự đúng của các buổi trong một ngày là:',
      options: [
        'Sáng, Trưa, Chiều, Tối, Đêm',
        'Sáng, Chiều, Trưa, Tối, Đêm',
        'Đêm, Sáng, Chiều, Trưa, Tối',
        'Trưa, Sáng, Chiều, Tối, Đêm'
      ],
      correctAnswer: 'Sáng, Trưa, Chiều, Tối, Đêm',
      explanation: 'Một ngày diễn ra tuần tự: Sáng -> Trưa -> Chiều -> Tối -> Đêm.'
    });
    addL2({
      id: 'r15_l2_09',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Thời gian đi tàu hỏa',
      category: 'real_world',
      questionText: 'Đoàn tàu khởi hành từ ga lúc 6 giờ sáng và đến nơi lúc 14 giờ cùng ngày. Chuyến đi kéo dài bao nhiêu giờ?',
      correctAnswer: '8',
      unit: 'giờ',
      explanation: '14 - 6 = 8 giờ.'
    });
    addL2({
      id: 'r15_l2_10',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Giờ chiều sang hệ 24 giờ',
      category: 'measurement',
      questionText: '5 giờ chiều tương ứng với mấy giờ trên đồng hồ 24 giờ?',
      options: ['17 giờ', '15 giờ', '19 giờ', '16 giờ'],
      correctAnswer: '17 giờ',
      explanation: '12 + 5 = 17 giờ.'
    });

    // Vòng 15: Level 3
    addL3({
      id: 'r15_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Toán đồng hồ 24 giờ qua đêm',
      category: 'logic',
      questionText: 'Bác bảo vệ trực đêm tại trường học từ 18 giờ tối hôm trước đến 6 giờ sáng hôm sau. Hỏi bác đã trực bao nhiêu giờ?',
      options: ['12 giờ', '10 giờ', '14 giờ', '8 giờ'],
      correctAnswer: '12 giờ',
      unit: 'giờ',
      explanation: 'Từ 18h đến 24h là 6 giờ; từ 0h đến 6h sáng là 6 giờ. Tổng cộng: 6 + 6 = 12 giờ.'
    });
    addL3({
      id: 'r15_l3_02',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Múi giờ quốc tế đơn giản',
      category: 'logic',
      questionText: 'Giờ ở Tokyo (Nhật Bản) chạy trước giờ ở Hà Nội đúng 2 giờ. Khi ở Hà Nội là 14 giờ chiều thì ở Tokyo là mấy giờ?',
      options: ['16 giờ chiều', '12 giờ trưa', '15 giờ', '18 giờ'],
      correctAnswer: '16 giờ chiều',
      explanation: '14 + 2 = 16 giờ chiều.'
    });
    addL3({
      id: 'r15_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Khoảng thời gian trong 3 ngày',
      category: 'logic',
      questionText: 'Một bóng đèn tín hiệu nhấp nháy liên tục suốt 3 ngày đêm. Bóng đèn đã nhấp nháy trong bao nhiêu giờ?',
      correctAnswer: '72',
      unit: 'giờ',
      explanation: '24 x 3 = 72 giờ.'
    });
    addL3({
      id: 'r15_l3_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Thời gian bay máy bay',
      category: 'real_world',
      questionText: 'Máy bay cất cánh từ sân bay Nội Bài lúc 9 giờ 30 phút sáng và bay mất 2 giờ 15 phút đến TP. Hồ Chí Minh. Máy bay hạ cánh lúc mấy giờ?',
      options: ['11 giờ 45 phút', '11 giờ 30 phút', '12 giờ đúng', '11 giờ 15 phút'],
      correctAnswer: '11 giờ 45 phút',
      explanation: '9 giờ 30 phút + 2 giờ 15 phút = 11 giờ 45 phút trưa.'
    });
    addL3({
      id: 'r15_l3_05',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Tìm số giờ còn lại trong ngày',
      category: 'logic',
      questionText: 'Bây giờ là mấy giờ biết rằng thời gian từ đầu ngày đến bây giờ bằng thời gian từ bây giờ đến hết ngày?',
      options: ['12 giờ trưa', '6 giờ sáng', '18 giờ chiều', '24 giờ'],
      correctAnswer: '12 giờ trưa',
      explanation: 'Một ngày có 24 giờ. Thời gian chia đôi: 24 : 2 = 12 giờ trưa.'
    });
  }

  else if (round === 16) {
    // Vòng 16: Ôn tập phép cộng và phép trừ phạm vi 100, dãy tính a + b - c
    addL2({
      id: 'r16_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Dãy tính kết hợp',
      category: 'calculation',
      questionText: 'Tính giá trị biểu thức: 45 + 28 - 33 = ?',
      options: ['40', '50', '39', '42'],
      correctAnswer: '40',
      explanation: '45 + 28 = 73; 73 - 33 = 40.'
    });
    addL2({
      id: 'r16_l2_02',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tính nhẩm nhanh tổng tròn chục',
      category: 'calculation',
      questionText: 'Tính nhanh: 37 + 19 + 13 = ...',
      correctAnswer: '69',
      explanation: '(37 + 13) + 19 = 50 + 19 = 69.'
    });
    addL2({
      id: 'r16_l2_03',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Tìm x trong biểu thức',
      category: 'calculation',
      questionText: 'Tìm x biết: 85 - x = 27 + 18',
      options: ['40', '50', '30', '45'],
      correctAnswer: '40',
      explanation: '27 + 18 = 45; 85 - x = 45 => x = 85 - 45 = 40.'
    });
    addL2({
      id: 'r16_l2_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Vườn cây hai loại quả',
      category: 'real_world',
      questionText: 'Bác Tư có 56 cây bưởi. Số cây cam ít hơn số cây bưởi 18 cây. Hỏi bác Tư có tất cả bao nhiêu cây cả bưởi và cam?',
      options: ['94 cây', '38 cây', '92 cây', '84 cây'],
      correctAnswer: '94 cây',
      unit: 'cây',
      explanation: 'Số cây cam: 56 - 18 = 38 cây. Cả hai loại: 56 + 38 = 94 cây.'
    });
    addL2({
      id: 'r16_l2_05',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Dãy tính 3 phép cộng trừ',
      category: 'calculation',
      questionText: 'Tính: 90 - 45 + 15 = ...',
      correctAnswer: '60',
      explanation: '90 - 45 = 45; 45 + 15 = 60.'
    });
    addL2({
      id: 'r16_l2_06',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'So sánh kết quả biểu thức',
      category: 'calculation',
      questionText: 'Biểu thức nào sau đây có giá trị bé nhất?',
      options: ['62 - 18 + 5', '50 + 14 - 16', '75 - 35 + 2', '48 + 12 - 15'],
      correctAnswer: '48 + 12 - 15',
      explanation: '48 + 12 - 15 = 45; các phép khác: 62 - 18 + 5 = 49; 50 + 14 - 16 = 48; 75 - 35 + 2 = 42 (khoan, 75 - 35 + 2 = 42 bé hơn!). Tính lại: 75 - 35 + 2 = 42. Vậy bé nhất là 75 - 35 + 2.'
    });
    // sửa đáp án cho chuẩn xác:
    l2.pop();
    addL2({
      id: 'r16_l2_06',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'So sánh kết quả biểu thức',
      category: 'calculation',
      questionText: 'Biểu thức nào sau đây có giá trị lớn nhất?',
      options: ['38 + 45 - 12', '56 - 14 + 25', '90 - 35 - 10', '27 + 28 + 10'],
      correctAnswer: '38 + 45 - 12',
      explanation: '38 + 45 - 12 = 71 (lớn nhất). Các biểu thức còn lại: 56 - 14 + 25 = 67; 90 - 35 - 10 = 45; 27 + 28 + 10 = 65.'
    });
    addL2({
      id: 'r16_l2_07',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đúng sai thứ tự thực hiện',
      category: 'calculation',
      questionText: 'Khi thực hiện dãy tính chỉ gồm phép cộng và phép trừ, ta thực hiện theo thứ tự nào?',
      options: [
        'Từ trái sang phải',
        'Làm phép trừ trước phép cộng sau',
        'Làm phép cộng trước phép trừ sau',
        'Từ phải sang trái'
      ],
      correctAnswer: 'Từ trái sang phải',
      explanation: 'Quy tắc chuẩn: Biểu thức chỉ có cộng và trừ thì thực hiện lần lượt từ trái sang phải.'
    });
    addL2({
      id: 'r16_l2_08',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tìm số hạng còn thiếu',
      category: 'calculation',
      questionText: 'Điền số thích hợp: 34 + ... - 20 = 50',
      correctAnswer: '36',
      explanation: '50 + 20 = 70; 70 - 34 = 36.'
    });
    addL2({
      id: 'r16_l2_09',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Mua bán sách vở',
      category: 'real_world',
      questionText: 'Một cửa hàng có 95 quyển vở. Buổi sáng bán được 35 quyển, buổi chiều bán được 28 quyển. Cửa hàng còn lại bao nhiêu quyển vở?',
      options: ['32 quyển', '42 quyển', '22 quyển', '35 quyển'],
      correctAnswer: '32 quyển',
      unit: 'quyển',
      explanation: 'Tổng đã bán: 35 + 28 = 63 quyển. Còn lại: 95 - 63 = 32 quyển.'
    });
    addL2({
      id: 'r16_l2_10',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Phép trừ liên tiếp từ 100',
      category: 'calculation',
      questionText: 'Tính: 100 - 45 - 15 = ?',
      options: ['40', '50', '30', '60'],
      correctAnswer: '40',
      explanation: '100 - (45 + 15) = 100 - 60 = 40.'
    });

    // Vòng 16: Level 3
    addL3({
      id: 'r16_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Tìm số điền vào ngôi sao toán học',
      category: 'logic',
      questionText: 'Tìm một số biết rằng nếu lấy số đó cộng với 35 rồi trừ đi 18 thì được 50:',
      options: ['33', '35', '43', '23'],
      correctAnswer: '33',
      explanation: 'Tính ngược từ cuối: 50 + 18 - 35 = 68 - 35 = 33.'
    });
    addL3({
      id: 'r16_l3_02',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Tổng dãy số đặc biệt',
      category: 'pattern',
      questionText: 'Tính nhanh tổng của các số: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = ?',
      options: ['45', '50', '55', '40'],
      correctAnswer: '45',
      explanation: 'Ghép cặp: (1 + 9) + (2 + 8) + (3 + 7) + (4 + 6) + 5 = 10 + 10 + 10 + 10 + 5 = 45.'
    });
    addL3({
      id: 'r16_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Chuyển viên bi ba bạn',
      category: 'logic',
      questionText: 'Ba bạn An, Bình, Cư có tất cả 45 viên bi. Nếu An cho Bình 3 viên bi và Bình cho Cư 2 viên bi thì số bi của ba bạn bằng nhau. Hỏi ban đầu bạn An có bao nhiêu viên bi?',
      correctAnswer: '18',
      unit: 'viên bi',
      explanation: 'Lúc sau mỗi bạn có: 45 : 3 = 15 viên. Vì An cho Bình 3 viên nên ban đầu An có: 15 + 3 = 18 viên.'
    });
    addL3({
      id: 'r16_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Điền dấu phép tính',
      category: 'logic',
      questionText: 'Điền dấu phép tính (+ hoặc -) vào ô trống để được biểu thức đúng: 50 ... 20 ... 15 = 45',
      options: ['- và +', '+ và -', '+ và +', '- và -'],
      correctAnswer: '- và +',
      explanation: '50 - 20 + 15 = 30 + 15 = 45.'
    });
    addL3({
      id: 'r16_l3_05',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Toán xe buýt lên xuống',
      category: 'real_world',
      questionText: 'Một xe buýt đang chở 36 hành khách. Đến trạm dừng có 14 người xuống xe và 9 người lên xe. Hỏi trên xe buýt lúc này có bao nhiêu hành khách?',
      options: ['31 người', '41 người', '29 người', '32 người'],
      correctAnswer: '31 người',
      unit: 'người',
      explanation: '36 - 14 + 9 = 22 + 9 = 31 người.'
    });
  }

  else if (round === 17) {
    // Vòng 17: Ôn tập Hình học & Đo lường Kì 1
    addL2({
      id: 'r17_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Đếm hình tam giác',
      category: 'geometry',
      visualType: 'geo_shapes',
      visualData: { shapeType: 'triangle_split' },
      questionText: 'Một hình tam giác lớn có một đoạn thẳng kẻ từ đỉnh xuống cạnh đáy chia thành 2 hình tam giác nhỏ. Hỏi hình vẽ có tất cả bao nhiêu hình tam giác?',
      options: ['3 hình tam giác', '2 hình tam giác', '4 hình tam giác', '1 hình tam giác'],
      correctAnswer: '3 hình tam giác',
      explanation: 'Gồm 2 tam giác đơn nhỏ và 1 tam giác lớn bao ngoài. Tổng cộng có 3 hình tam giác.'
    });
    addL2({
      id: 'r17_l2_02',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Đếm hình tứ giác',
      category: 'geometry',
      questionText: 'Hình nào dưới đây KHÔNG PHẢI là hình tứ giác?',
      options: ['Hình tam giác', 'Hình vuông', 'Hình chữ nhật', 'Hình bình hành'],
      correctAnswer: 'Hình tam giác',
      explanation: 'Hình tam giác chỉ có 3 cạnh nên không phải hình tứ giác (hình có 4 cạnh).'
    });
    addL2({
      id: 'r17_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Độ dài đường gấp khúc hỗn hợp đơn vị',
      category: 'measurement',
      questionText: 'Đường gấp khúc gồm 3 đoạn: đoạn 1 dài 2 dm, đoạn 2 dài 15 cm, đoạn 3 dài 25 cm. Độ dài đường gấp khúc là ... cm.',
      correctAnswer: '60',
      unit: 'cm',
      explanation: '2 dm = 20 cm. Tổng: 20 + 15 + 25 = 60 cm.'
    });
    addL2({
      id: 'r17_l2_04',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'So sánh đại lượng đo lường kì 1',
      category: 'measurement',
      questionText: 'Trong các đơn vị: cm, dm, kg, l. Đơn vị nào dùng để đo dung tích chất lỏng?',
      options: ['l (lít)', 'kg (ki-lô-gam)', 'dm (đề-xi-mét)', 'cm (xăng-ti-mét)'],
      correctAnswer: 'l (lít)',
      explanation: 'Lít (l) là đơn vị đo dung tích chất lỏng.'
    });
    addL2({
      id: 'r17_l2_05',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Mua gạo và dầu ăn',
      category: 'real_world',
      questionText: 'Mẹ đi chợ mua 15 kg gạo và 5 lít dầu ăn. Bác bán hàng cân gạo bằng cân đồng hồ và đong dầu bằng can lít. Khẳng định nào ĐÚNG?',
      options: [
        'Gạo đo bằng ki-lô-gam, dầu ăn đo bằng lít',
        'Gạo đo bằng lít, dầu ăn đo bằng ki-lô-gam',
        'Cả hai đều đo bằng xăng-ti-mét',
        'Tổng số đo là 20 kg'
      ],
      correctAnswer: 'Gạo đo bằng ki-lô-gam, dầu ăn đo bằng lít',
      explanation: 'Vật thể rắn cân khối lượng bằng kg; chất lỏng đong thể tích bằng lít.'
    });
    addL2({
      id: 'r17_l2_06',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tính chu vi tam giác',
      category: 'geometry',
      questionText: 'Hình tam giác ABC có độ dài ba cạnh lần lượt là 12 cm, 15 cm và 18 cm. Tổng độ dài ba cạnh của hình tam giác đó là ... cm.',
      correctAnswer: '45',
      unit: 'cm',
      explanation: '12 + 15 + 18 = 45 cm.'
    });
    addL2({
      id: 'r17_l2_07',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đúng sai về hình chữ nhật',
      category: 'geometry',
      questionText: 'Hình chữ nhật có đặc điểm nào dưới đây?',
      options: [
        'Có 4 cạnh và 4 góc vuông',
        'Có 3 cạnh bằng nhau',
        'Chỉ có 2 đỉnh',
        'Bốn cạnh dài bằng nhau tuyệt đối'
      ],
      correctAnswer: 'Có 4 cạnh và 4 góc vuông',
      explanation: 'Hình chữ nhật là tứ giác có 4 góc vuông.'
    });
    addL2({
      id: 'r17_l2_08',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Dây thừng cuộn',
      category: 'measurement',
      questionText: 'Sợi dây thừng dài 10 dm. Cắt đi 35 cm. Sợi dây còn lại dài bao nhiêu xăng-ti-mét?',
      options: ['65 cm', '75 cm', '55 cm', '45 cm'],
      correctAnswer: '65 cm',
      unit: 'cm',
      explanation: '10 dm = 100 cm; 100 - 35 = 65 cm.'
    });
    addL2({
      id: 'r17_l2_09',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Cân thăng bằng tổng hợp',
      category: 'measurement',
      visualType: 'balance_scale',
      visualData: { leftWeight: 24, rightWeight: 24 },
      questionText: 'Đĩa cân bên trái có quả dưa 4 kg và túi gạo. Đĩa cân bên phải có hai quả cân 10 kg. Cân thăng bằng. Túi gạo nặng ... kg.',
      correctAnswer: '16',
      unit: 'kg',
      explanation: 'Đĩa phải: 10 + 10 = 20 kg. Túi gạo: 20 - 4 = 16 kg.'
    });
    addL2({
      id: 'r17_l2_10',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Số đỉnh hình tứ giác',
      category: 'geometry',
      questionText: 'Một hình tứ giác có bao nhiêu đỉnh và bao nhiêu cạnh?',
      options: ['4 đỉnh và 4 cạnh', '3 đỉnh và 3 cạnh', '5 đỉnh và 5 cạnh', '4 đỉnh và 3 cạnh'],
      correctAnswer: '4 đỉnh và 4 cạnh',
      explanation: 'Hình tứ giác có đúng 4 đỉnh và 4 cạnh.'
    });

    // Vòng 17: Level 3
    addL3({
      id: 'r17_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Đếm số hình tứ giác trong ô lưới',
      category: 'geometry',
      questionText: 'Một hình chữ nhật được chia đôi bởi một đường thẳng nối trung điểm hai cạnh đối diện thành 2 hình vuông nhỏ. Hỏi trên hình có tất cả bao nhiêu hình tứ giác?',
      options: ['3 hình tứ giác', '2 hình tứ giác', '4 hình tứ giác', '5 hình tứ giác'],
      correctAnswer: '3 hình tứ giác',
      explanation: 'Gồm 2 hình vuông nhỏ (hình vuông cũng là tứ giác) và 1 hình chữ nhật lớn bao quanh. Tổng cộng có 3 hình tứ giác.'
    });
    addL3({
      id: 'r17_l3_02',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Cắt góc hình chữ nhật',
      category: 'geometry',
      questionText: 'Một mảnh giấy hình chữ nhật có 4 góc. Người ta dùng kéo cắt thẳng đi một góc. Hỏi mảnh giấy còn lại có bao nhiêu góc?',
      options: ['5 góc', '3 góc', '4 góc', 'Không còn góc nào'],
      correctAnswer: '5 góc',
      explanation: 'Khi cắt chéo bỏ đi 1 góc của hình chữ nhật, tại vết cắt mới sẽ xuất hiện thêm 2 góc mới, biến hình tứ giác ban đầu thành hình ngũ giác có 5 góc.'
    });
    addL3({
      id: 'r17_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Toán chu vi ghép hình',
      category: 'geometry',
      questionText: 'Ghép hai hình vuông cạnh 5 cm thành một hình chữ nhật. Tính chu vi (tổng độ dài viền xung quanh) của hình chữ nhật ghép được (theo đơn vị cm):',
      correctAnswer: '30',
      unit: 'cm',
      explanation: 'Hình chữ nhật có chiều dài: 5 + 5 = 10 cm, chiều rộng: 5 cm. Chu vi: 10 + 5 + 10 + 5 = 30 cm.'
    });
    addL3({
      id: 'r17_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Que tính xếp hình tam giác',
      category: 'logic',
      questionText: 'Cần ít nhất bao nhiêu que tính bằng nhau để xếp thành 2 hình tam giác riêng biệt?',
      options: ['5 que tính (chung 1 cạnh)', '6 que tính', '4 que tính', '3 que tính'],
      correctAnswer: '5 que tính (chung 1 cạnh)',
      explanation: 'Nếu cho hai hình tam giác chung 1 cạnh ở giữa, ta chỉ cần: 3 + 2 = 5 que tính là xếp được 2 hình tam giác.'
    });
    addL3({
      id: 'r17_l3_05',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Toán đong nước tổng hợp',
      category: 'logic',
      questionText: 'Một bể chứa 80 lít nước. Người ta mở một vòi nước chảy vào bể mỗi giờ được 25 lít và mở một vòi tháo ra mỗi giờ thoát 15 lít. Sau 2 giờ, lượng nước trong bể tăng thêm bao nhiêu lít?',
      options: ['20 lít', '10 lít', '30 lít', '40 lít'],
      correctAnswer: '20 lít',
      unit: 'lít',
      explanation: 'Mỗi giờ nước tăng thêm: 25 - 15 = 10 lít. Sau 2 giờ tăng thêm: 10 x 2 = 20 lít.'
    });
  }

  else if (round === 18) {
    // Vòng 18: THI SƠ KHẢO CẤP TRƯỜNG (Kì 1) - Tổng hợp toàn diện Học kì 1
    addL2({
      id: 'r18_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Đề thi Sơ khảo: Tìm số lớn nhất',
      category: 'calculation',
      questionText: '[Thi Sơ Khảo] Cho các số: 78, 87, 89, 98. Hiệu của số lớn nhất và số bé nhất trong các số đó là:',
      options: ['20', '19', '21', '10'],
      correctAnswer: '20',
      explanation: 'Số lớn nhất là 98, số bé nhất là 78. Hiệu: 98 - 78 = 20.'
    });
    addL2({
      id: 'r18_l2_02',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Đề thi Sơ khảo: Phép tính có nhớ',
      category: 'calculation',
      questionText: '[Thi Sơ Khảo] Phép tính nào dưới đây có kết quả bằng 64?',
      options: ['38 + 26', '92 - 38', '47 + 18', '81 - 18'],
      correctAnswer: '38 + 26',
      explanation: '38 + 26 = 64. Các phép khác cho kết quả: 54, 65, 63.'
    });
    addL2({
      id: 'r18_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Đề thi Sơ khảo: Quy đổi độ dài',
      category: 'measurement',
      questionText: '[Thi Sơ Khảo] Tính: 5 dm 4 cm + 26 cm = ... dm',
      correctAnswer: '8',
      unit: 'dm',
      explanation: '5 dm 4 cm = 54 cm. 54 + 26 = 80 cm = 8 dm.'
    });
    addL2({
      id: 'r18_l2_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Đề thi Sơ khảo: Vườn hoa trường em',
      category: 'real_world',
      questionText: '[Thi Sơ Khảo] Trường Tiểu học Kim Đồng trồng được 46 cây hoa hồng và 38 cây hoa cúc. Nhà trường đã tặng các lớp 25 cây. Hỏi trường còn lại bao nhiêu cây hoa?',
      options: ['59 cây', '84 cây', '69 cây', '49 cây'],
      correctAnswer: '59 cây',
      unit: 'cây',
      explanation: 'Tổng số cây: 46 + 38 = 84 cây. Còn lại: 84 - 25 = 59 cây.'
    });
    addL2({
      id: 'r18_l2_05',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Đề thi Sơ khảo: Xem đồng hồ',
      category: 'measurement',
      visualType: 'clock',
      visualData: { hour: 14, minute: 30 },
      questionText: '[Thi Sơ Khảo] Tiết học buổi chiều bắt đầu lúc 2 giờ rưỡi chiều. Đồng hồ điện tử hiển thị như thế nào?',
      options: ['14:30', '14:00', '15:30', '02:30'],
      correctAnswer: '14:30',
      explanation: '2 giờ rưỡi chiều = 14 giờ 30 phút.'
    });
    addL2({
      id: 'r18_l2_06',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Đề thi Sơ khảo: Tìm x hai vế',
      category: 'calculation',
      questionText: '[Thi Sơ Khảo] Tìm x biết: x + 19 = 82 - 25. x = ...',
      correctAnswer: '38',
      explanation: '82 - 25 = 57; x = 57 - 19 = 38.'
    });
    addL2({
      id: 'r18_l2_07',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đề thi Sơ khảo: Khẳng định đúng',
      category: 'logic',
      questionText: '[Thi Sơ Khảo] Khẳng định nào sau đây là ĐÚNG?',
      options: [
        'Một tuần lễ có 7 ngày, một ngày đêm có 24 giờ',
        '1 dm ngắn hơn 9 cm',
        'Số liền trước của 100 là 101',
        'Hình tứ giác có 3 góc và 3 cạnh'
      ],
      correctAnswer: 'Một tuần lễ có 7 ngày, một ngày đêm có 24 giờ',
      explanation: 'Đây là kiến thức chuẩn cơ bản của Học kì 1.'
    });
    addL2({
      id: 'r18_l2_08',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Đề thi Sơ khảo: Khối lượng nông sản',
      category: 'real_world',
      questionText: '[Thi Sơ Khảo] Bác Ba thu hoạch được 54 kg bí đỏ, bác Tư thu hoạch được ít hơn bác Ba 16 kg bí đỏ. Bác Tư thu hoạch được bao nhiêu kg bí đỏ?',
      options: ['38 kg', '70 kg', '48 kg', '36 kg'],
      correctAnswer: '38 kg',
      unit: 'kg',
      explanation: '54 - 16 = 38 kg bí đỏ.'
    });
    addL2({
      id: 'r18_l2_09',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Đề thi Sơ khảo: Độ dài đường gấp khúc',
      category: 'measurement',
      questionText: '[Thi Sơ Khảo] Một đường gấp khúc gồm 4 đoạn thẳng, mỗi đoạn dài đúng 8 cm. Độ dài đường gấp khúc là ... cm.',
      correctAnswer: '32',
      unit: 'cm',
      explanation: '8 + 8 + 8 + 8 = 32 cm.'
    });
    addL2({
      id: 'r18_l2_10',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'Đề thi Sơ khảo: Thứ tự ngày lịch',
      category: 'measurement',
      questionText: '[Thi Sơ Khảo] Nếu ngày 15 của tháng là Thứ Bảy thì ngày 22 của tháng đó là thứ mấy?',
      options: ['Thứ Bảy', 'Chủ Nhật', 'Thứ Sáu', 'Thứ Hai'],
      correctAnswer: 'Thứ Bảy',
      explanation: '15 + 7 = 22, đúng 1 tuần lễ sau nên vẫn là ngày Thứ Bảy.'
    });

    // Vòng 18: Level 3
    addL3({
      id: 'r18_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Đề thi Sơ khảo Mức 3: Chữ số ẩn hai vế',
      category: 'logic',
      questionText: '[Thi Sơ Khảo Mức 3] Tìm chữ số A và B khác nhau trong phép cộng: AB + BA = 77 biết A > B:',
      options: ['A = 5, B = 2', 'A = 4, B = 3', 'A = 6, B = 1', 'Cả 3 cặp số trên đều thỏa mãn'],
      correctAnswer: 'Cả 3 cặp số trên đều thỏa mãn',
      explanation: 'Vì AB + BA = (A + B) x 11 = 77 => A + B = 7. Vì A > B nên các cặp (5, 2), (4, 3), (6, 1) đều thỏa mãn.'
    });
    addL3({
      id: 'r18_l3_02',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Đề thi Sơ khảo Mức 3: Bài toán trồng hoa dọc lối đi',
      category: 'logic',
      questionText: '[Thi Sơ Khảo Mức 3] Một lối đi thẳng từ cổng trường vào lớp học dài 20 m. Người ta trồng các bồn hoa ở cả hai đầu đường và cứ cách 4 m lại trồng một bồn hoa. Hỏi có tất cả bao nhiêu bồn hoa?',
      options: ['6 bồn hoa', '5 bồn hoa', '4 bồn hoa', '7 bồn hoa'],
      correctAnswer: '6 bồn hoa',
      unit: 'bồn hoa',
      explanation: 'Số khoảng cách là: 20 : 4 = 5 khoảng. Vì trồng ở cả hai đầu đường nên số bồn hoa là: 5 + 1 = 6 bồn hoa.'
    });
    addL3({
      id: 'r18_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Đề thi Sơ khảo Mức 3: Tuổi của mẹ và con',
      category: 'real_world',
      questionText: '[Thi Sơ Khảo Mức 3] Năm nay mẹ 32 tuổi, con 6 tuổi. Hỏi sau bao nhiêu năm nữa tuổi của mẹ gấp 3 lần tuổi của con?',
      correctAnswer: '7',
      unit: 'năm',
      explanation: 'Mẹ hơn con: 32 - 6 = 26 tuổi. Khi mẹ gấp 3 lần con thì hiệu là 2 phần: tuổi con lúc đó là 26 : 2 = 13 tuổi. Số năm sau là: 13 - 6 = 7 năm.'
    });
    addL3({
      id: 'r18_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Đề thi Sơ khảo Mức 3: Đi tìm số bi',
      category: 'logic',
      questionText: '[Thi Sơ Khảo Mức 3] An và Bình có tổng cộng 50 viên bi. Nếu An cho Bình 7 viên bi thì số bi của An vẫn nhiều hơn Bình 4 viên. Hỏi ban đầu An có bao nhiêu viên bi?',
      options: ['34 viên', '16 viên', '32 viên', '36 viên'],
      correctAnswer: '34 viên',
      unit: 'viên',
      explanation: 'Lúc sau An hơn Bình 4 viên. Tổng bi không đổi là 50. Lúc sau An có: (50 + 4) : 2 = 27 viên. Ban đầu An có: 27 + 7 = 34 viên.'
    });
    addL3({
      id: 'r18_l3_05',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Đề thi Sơ khảo Mức 3: Thử tài Trạng Nguyên',
      category: 'logic',
      questionText: '[Thi Sơ Khảo Mức 3] Có một can 10 lít đầy dầu và hai can rỗng loại 3 lít và 7 lít. Cần đong được đúng 4 lít dầu. Cách làm thông minh nhất là:',
      options: [
        'Rót đầy can 7 lít từ can 10 lít. Sau đó từ can 7 lít rót đầy can 3 lít. Trong can 7 lít còn đúng 4 lít dầu',
        'Rót đầy can 3 lít hai lần',
        'Ước lượng một nửa can 7 lít',
        'Đổ hết can 10 lít ra ngoài'
      ],
      correctAnswer: 'Rót đầy can 7 lít từ can 10 lít. Sau đó từ can 7 lít rót đầy can 3 lít. Trong can 7 lít còn đúng 4 lít dầu',
      explanation: '7 lít - 3 lít = 4 lít. Phần dầu còn lại trong can 7 lít chính xác là 4 lít.'
    });
  }

  return { level2: l2, level3: l3 };
}
