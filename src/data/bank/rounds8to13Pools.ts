import { Question } from '../../types/quiz';

/**
 * NGÂN HÀNG CÂU HỎI MỨC 2 & MỨC 3: VÒNG 8 ĐẾN VÒNG 13
 * SGK Toán 2 Kết Nối Tri Thức Với Cuộc Sống (GDPT 2018)
 * Các chủ đề: Ki-lô-gam (kg), Lít (l), Phép trừ có nhớ (2 chữ số), Đường gấp khúc, Lịch tờ & Thời gian.
 */

export function getRounds8to13Questions(round: number): { level2: Question[]; level3: Question[] } {
  const l2: Question[] = [];
  const l3: Question[] = [];

  const addL2 = (q: Omit<Question, 'roundNumber' | 'level' | 'points' | 'questionNumber'>) => {
    l2.push({ ...q, roundNumber: round, level: 2, points: 10, questionNumber: 0 });
  };

  const addL3 = (q: Omit<Question, 'roundNumber' | 'level' | 'points' | 'questionNumber'>) => {
    l3.push({ ...q, roundNumber: round, level: 3, points: 10, questionNumber: 0 });
  };

  if (round === 8) {
    // Vòng 8: Ki-lô-gam (kg) & Cân thăng bằng
    addL2({
      id: 'r8_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Đơn vị ki-lô-gam',
      category: 'measurement',
      questionText: 'Ki-lô-gam là đơn vị dùng để đo đại lượng nào dưới đây?',
      options: ['Khối lượng (cân nặng)', 'Độ dài', 'Dung tích chất lỏng', 'Thời gian'],
      correctAnswer: 'Khối lượng (cân nặng)',
      explanation: 'Ki-lô-gam (kg) là đơn vị đo khối lượng của vật thể.'
    });
    addL2({
      id: 'r8_l2_02',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Cân thăng bằng quả cân',
      category: 'measurement',
      visualType: 'balance_scale',
      visualData: { leftWeight: 8, rightWeight: 8 },
      questionText: 'Trên đĩa cân bên trái để một quả dưa hấu. Trên đĩa cân bên phải để một quả cân 5 kg và một quả cân 2 kg thì cân thăng bằng. Quả dưa hấu cân nặng bao nhiêu ki-lô-gam?',
      options: ['7 kg', '3 kg', '10 kg', '6 kg'],
      correctAnswer: '7 kg',
      unit: 'kg',
      explanation: '5 kg + 2 kg = 7 kg. Vì cân thăng bằng nên quả dưa nặng 7 kg.'
    });
    addL2({
      id: 'r8_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Cộng trừ đơn vị kg',
      category: 'measurement',
      questionText: 'Tính: 45 kg + 28 kg = ... kg',
      correctAnswer: '73',
      unit: 'kg',
      explanation: '45 + 28 = 73 kg.'
    });
    addL2({
      id: 'r8_l2_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Bao gạo thực tế',
      category: 'real_world',
      questionText: 'Bao gạo to nặng 50 kg, bao gạo bé nặng 25 kg. Hỏi bao gạo to nặng hơn bao gạo bé bao nhiêu ki-lô-gam?',
      options: ['25 kg', '75 kg', '20 kg', '30 kg'],
      correctAnswer: '25 kg',
      unit: 'kg',
      explanation: '50 - 25 = 25 kg.'
    });
    addL2({
      id: 'r8_l2_05',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'So sánh cân nặng',
      category: 'measurement',
      questionText: 'Điền dấu thích hợp: 38 kg + 14 kg ... 60 kg - 8 kg',
      options: ['=', '>', '<', 'Không so sánh được'],
      correctAnswer: '=',
      explanation: '38 + 14 = 52 kg; 60 - 8 = 52 kg. Hai vế bằng nhau nên điền dấu =.'
    });
    addL2({
      id: 'r8_l2_06',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Bài toán bớt đi ki-lô-gam',
      category: 'measurement',
      questionText: 'Một thùng đựng 34 kg đường, người ta đã lấy ra 16 kg để làm bánh. Trong thùng còn lại bao nhiêu kg đường?',
      correctAnswer: '18',
      unit: 'kg',
      explanation: '34 - 16 = 18 kg.'
    });
    addL2({
      id: 'r8_l2_07',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Cân nặng học sinh lớp 2',
      category: 'real_world',
      questionText: 'Cân nặng ước lượng phù hợp nhất của một bạn học sinh lớp 2 là khoảng:',
      options: ['25 kg', '250 kg', '2 kg', '5 kg'],
      correctAnswer: '25 kg',
      unit: 'kg',
      explanation: 'Học sinh lớp 2 thường có cân nặng từ 20 kg đến 30 kg, 25 kg là phù hợp nhất.'
    });
    addL2({
      id: 'r8_l2_08',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'Sắp xếp theo khối lượng',
      category: 'measurement',
      questionText: 'Có 3 con vật: Con chó nặng 14 kg, con mèo nặng 4 kg, con lợn nặng 45 kg. Sắp xếp các con vật theo thứ tự từ nặng nhất đến nhẹ nhất:',
      options: [
        'Con lợn, con chó, con mèo',
        'Con chó, con lợn, con mèo',
        'Con mèo, con chó, con lợn',
        'Con lợn, con mèo, con chó'
      ],
      correctAnswer: 'Con lợn, con chó, con mèo',
      explanation: '45 kg > 14 kg > 4 kg.'
    });
    addL2({
      id: 'r8_l2_09',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đúng sai về cân thăng bằng',
      category: 'logic',
      questionText: 'Khi chiếc cân đĩa ở trạng thái thăng bằng, kim chỉ đúng vạch chính giữa thì:',
      options: [
        'Khối lượng trên hai đĩa cân bằng nhau',
        'Đĩa cân bên trái luôn nặng hơn',
        'Đĩa cân bên phải luôn nặng hơn',
        'Hai đĩa cân không có vật thể nào'
      ],
      correctAnswer: 'Khối lượng trên hai đĩa cân bằng nhau',
      explanation: 'Cân thăng bằng tức là tổng khối lượng ở hai bên đĩa cân bằng nhau.'
    });
    addL2({
      id: 'r8_l2_10',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Cộng ba số đo khối lượng',
      category: 'measurement',
      questionText: 'Tính: 15 kg + 20 kg + 35 kg = ?',
      options: ['70 kg', '60 kg', '75 kg', '65 kg'],
      correctAnswer: '70 kg',
      unit: 'kg',
      explanation: '(15 + 35) + 20 = 50 + 20 = 70 kg.'
    });

    // Vòng 8: Level 3
    addL3({
      id: 'r8_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Cân thăng bằng hai bên có vật phẩm',
      category: 'logic',
      visualType: 'balance_scale',
      visualData: { leftWeight: 9, rightWeight: 9 },
      questionText: 'Đĩa cân bên trái có quả dưa hấu và quả cân 2 kg. Đĩa cân bên phải có quả cân 5 kg và quả cân 3 kg. Cân thăng bằng. Quả dưa hấu cân nặng bao nhiêu kg?',
      options: ['6 kg', '8 kg', '10 kg', '5 kg'],
      correctAnswer: '6 kg',
      unit: 'kg',
      explanation: 'Đĩa phải nặng: 5 + 3 = 8 kg. Quả dưa hấu nặng: 8 - 2 = 6 kg.'
    });
    addL3({
      id: 'r8_l3_02',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Toán 2 bước cân nặng con vật',
      category: 'real_world',
      questionText: 'Con ngỗng nặng 6 kg. Con gà nhẹ hơn con ngỗng 4 kg. Con lợn nặng bằng cả con ngỗng và con gà cộng lại. Hỏi con lợn cân nặng bao nhiêu ki-lô-gam?',
      options: ['8 kg', '10 kg', '12 kg', '14 kg'],
      correctAnswer: '8 kg',
      unit: 'kg',
      explanation: 'Con gà nặng: 6 - 4 = 2 kg. Con lợn nặng: 6 + 2 = 8 kg.'
    });
    addL3({
      id: 'r8_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Khối lượng vỏ thùng',
      category: 'logic',
      questionText: 'Một thùng đựng đầy dầu hỏa cân nặng 22 kg. Sau khi rót ra một nửa số dầu thì thùng và lượng dầu còn lại cân nặng 12 kg. Hỏi riêng vỏ thùng không có dầu cân nặng bao nhiêu kg?',
      correctAnswer: '2',
      unit: 'kg',
      explanation: 'Một nửa số dầu nặng: 22 - 12 = 10 kg. Toàn bộ dầu nặng: 10 x 2 = 20 kg. Vỏ thùng nặng: 22 - 20 = 2 kg.'
    });
    addL3({
      id: 'r8_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Chuyển hàng cân bằng',
      category: 'logic',
      questionText: 'Bao thứ nhất có 38 kg ngô, bao thứ hai có 26 kg ngô. Hỏi phải chuyển từ bao thứ nhất sang bao thứ hai bao nhiêu kg để hai bao có khối lượng bằng nhau?',
      options: ['6 kg', '12 kg', '8 kg', '4 kg'],
      correctAnswer: '6 kg',
      unit: 'kg',
      explanation: 'Bao 1 hơn bao 2: 38 - 26 = 12 kg. Chuyển sang một nửa số hơn: 12 : 2 = 6 kg.'
    });
    addL3({
      id: 'r8_l3_05',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Tìm viên bi giả nhẹ hơn',
      category: 'logic',
      questionText: 'Có 3 đồng xu giống hệt nhau về hình dạng bên ngoài, trong đó có 1 đồng xu giả nhẹ hơn 2 đồng xu thật. Chỉ dùng một chiếc cân đĩa không có quả cân, cần ít nhất mấy lần cân để chắc chắn tìm ra đồng xu giả?',
      options: ['1 lần cân', '2 lần cân', '3 lần cân', 'Không thể tìm được'],
      correctAnswer: '1 lần cân',
      explanation: 'Đặt 2 đồng xu lên 2 đĩa cân. Nếu cân lệch, bên nào nhẹ hơn là đồng xu giả. Nếu cân bằng nhau thì đồng xu chưa cân chính là đồng xu giả. Chỉ cần đúng 1 lần cân.'
    });
  }

  else if (round === 9) {
    // Vòng 9: Lít (l) & Dung tích thực tế
    addL2({
      id: 'r9_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Đơn vị Lít',
      category: 'measurement',
      questionText: 'Đơn vị lít viết tắt là chữ cái nào?',
      options: ['l', 'kg', 'dm', 'm'],
      correctAnswer: 'l',
      explanation: 'Lít được viết tắt là l (chữ L thường).'
    });
    addL2({
      id: 'r9_l2_02',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Cộng dung tích lít',
      category: 'measurement',
      questionText: 'Tính: 35 l + 18 l = ... l',
      correctAnswer: '53',
      unit: 'l',
      explanation: '35 + 18 = 53 l.'
    });
    addL2({
      id: 'r9_l2_03',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Can dầu thực tế',
      category: 'real_world',
      visualType: 'liters_pitcher',
      visualData: { capacity: 20, current: 15 },
      questionText: 'Một can đựng đầy 20 lít dầu ăn. Mẹ đã dùng hết 8 lít dầu. Trong can còn lại bao nhiêu lít dầu ăn?',
      options: ['12 l', '10 l', '28 l', '14 l'],
      correctAnswer: '12 l',
      unit: 'l',
      explanation: '20 - 8 = 12 lít.'
    });
    addL2({
      id: 'r9_l2_04',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'So sánh dung tích',
      category: 'measurement',
      questionText: 'Điền dấu thích hợp: 45 l - 15 l ... 18 l + 12 l',
      options: ['=', '>', '<', 'Không so sánh được'],
      correctAnswer: '=',
      explanation: '45 l - 15 l = 30 l; 18 l + 12 l = 30 l. Hai bên bằng nhau nên điền dấu =.'
    });
    addL2({
      id: 'r9_l2_05',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Bể nước gia đình',
      category: 'real_world',
      questionText: 'Buổi sáng máy bơm bơm được 48 l nước vào bể. Buổi chiều bơm thêm 37 l nước nữa. Cả hai buổi đã bơm vào bể bao nhiêu lít nước?',
      options: ['85 l', '75 l', '86 l', '84 l'],
      correctAnswer: '85 l',
      unit: 'l',
      explanation: '48 + 37 = 85 lít nước.'
    });
    addL2({
      id: 'r9_l2_06',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Đong rót vào các chai',
      category: 'measurement',
      questionText: 'Có một can 10 l nước khoáng. Rót đầy vào hai bình, bình thứ nhất chứa 4 l. Bình thứ hai chứa được bao nhiêu lít?',
      correctAnswer: '6',
      unit: 'l',
      explanation: '10 - 4 = 6 lít.'
    });
    addL2({
      id: 'r9_l2_07',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đúng sai về ước lượng dung tích',
      category: 'real_world',
      questionText: 'Đồ vật nào dưới đây thường có dung tích khoảng 1 lít?',
      options: ['Hộp sữa tươi lớn dùng cho cả nhà', 'Bể bơi trường tiểu học', 'Cái thìa cà phê', 'Ấm chén uống trà mini'],
      correctAnswer: 'Hộp sữa tươi lớn dùng cho cả nhà',
      explanation: 'Hộp sữa tươi cỡ lớn của gia đình thường có dung tích đúng 1 lít.'
    });
    addL2({
      id: 'r9_l2_08',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Tìm số lít còn thiếu',
      category: 'measurement',
      questionText: 'Điền số thích hợp vào dấu ?: ? + 27 l = 60 l',
      options: ['33 l', '43 l', '87 l', '37 l'],
      correctAnswer: '33 l',
      unit: 'l',
      explanation: '60 - 27 = 33 lít.'
    });
    addL2({
      id: 'r9_l2_09',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Tưới cây trong vườn',
      category: 'real_world',
      questionText: 'Bố dùng một thùng 15 lít nước và một xô 8 lít nước để tưới cây. Bố đã dùng tất cả bao nhiêu lít nước?',
      options: ['23 l', '22 l', '25 l', '24 l'],
      correctAnswer: '23 l',
      unit: 'l',
      explanation: '15 + 8 = 23 lít nước.'
    });
    addL2({
      id: 'r9_l2_10',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Trừ liên tiếp',
      category: 'calculation',
      questionText: 'Tính nhanh: 90 l - 30 l - 20 l = ... l',
      correctAnswer: '40',
      unit: 'l',
      explanation: '90 - 30 = 60; 60 - 20 = 40 lít.'
    });

    // Vòng 9: Level 3
    addL3({
      id: 'r9_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Đong nước bằng hai can',
      category: 'logic',
      questionText: 'Có một can 3 lít và một can 5 lít (không có vạch chia). Chỉ dùng hai can này và nguồn nước thoải mái, làm thế nào để lấy được đúng 2 lít nước?',
      options: [
        'Đong đầy can 5 lít, rồi rót đầy sang can 3 lít; phần còn lại trong can 5 lít chính là 2 lít',
        'Đong nửa can 3 lít và nửa can 5 lít',
        'Đong đầy can 3 lít rồi đổ bớt một ít',
        'Không thể lấy được đúng 2 lít nước'
      ],
      correctAnswer: 'Đong đầy can 5 lít, rồi rót đầy sang can 3 lít; phần còn lại trong can 5 lít chính là 2 lít',
      explanation: '5 l - 3 l = 2 l. Lượng nước còn lại trong can 5 lít đúng bằng 2 lít.'
    });
    addL3({
      id: 'r9_l3_02',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Toán 2 bước tính dung tích thùng nước',
      category: 'real_world',
      questionText: 'Thùng thứ nhất có 45 lít nước. Thùng thứ hai có ít hơn thùng thứ nhất 12 lít nước. Người ta lấy ở cả hai thùng ra 30 lít để rửa rau. Hỏi cả hai thùng còn lại bao nhiêu lít nước?',
      options: ['48 lít', '78 lít', '58 lít', '38 lít'],
      correctAnswer: '48 lít',
      unit: 'lít',
      explanation: 'Thùng hai có: 45 - 12 = 33 lít. Tổng hai thùng: 45 + 33 = 78 lít. Còn lại sau khi dùng: 78 - 30 = 48 lít.'
    });
    addL3({
      id: 'r9_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Rót đều vào các can',
      category: 'logic',
      questionText: 'Có 20 lít mật ong rót đều vào 4 can nhỏ. Hỏi 3 can nhỏ như thế chứa được bao nhiêu lít mật ong?',
      correctAnswer: '15',
      unit: 'l',
      explanation: 'Mỗi can chứa: 20 : 4 = 5 lít. 3 can chứa: 5 x 3 = 15 lít.'
    });
    addL3({
      id: 'r9_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Can dầu rò rỉ dung tích',
      category: 'logic',
      questionText: 'Một thùng đựng 30 lít nước bị rò rỉ, mỗi giờ chảy mất 2 lít nước. Sau 4 giờ trong thùng còn lại bao nhiêu lít nước?',
      options: ['22 lít', '24 lít', '26 lít', '20 lít'],
      correctAnswer: '22 lít',
      unit: 'lít',
      explanation: 'Sau 4 giờ chảy mất: 2 x 4 = 8 lít. Trong thùng còn lại: 30 - 8 = 22 lít.'
    });
    addL3({
      id: 'r9_l3_05',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Chia sữa học đường',
      category: 'real_world',
      questionText: 'Có hai bình sữa: Bình A có 16 lít, bình B có 8 lít. Phải rót từ bình A sang bình B bao nhiêu lít sữa để hai bình có lượng sữa bằng nhau?',
      options: ['4 lít', '8 lít', '6 lít', '2 lít'],
      correctAnswer: '4 lít',
      unit: 'lít',
      explanation: 'Bình A hơn bình B: 16 - 8 = 8 lít. Rót sang một nửa: 8 : 2 = 4 lít (khi đó mỗi bình có 12 lít).'
    });
  }

  else if (round === 10) {
    // Vòng 10: Phép trừ có nhớ (2 chữ số - 1 chữ số, dạng 11 - 5, 31 - 5, 52 - 8)
    addL2({
      id: 'r10_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Trừ qua 10 phạm vi 20',
      category: 'calculation',
      questionText: 'Tính nhẩm: 13 - 7 = ?',
      options: ['6', '5', '7', '8'],
      correctAnswer: '6',
      explanation: 'Tách 7 = 3 + 4; 13 - 3 = 10; 10 - 4 = 6.'
    });
    addL2({
      id: 'r10_l2_02',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Trừ có nhớ 2 chữ số cho 1 chữ số',
      category: 'calculation',
      questionText: 'Đặt tính rồi tính: 42 - 7 = ?',
      options: ['35', '45', '34', '36'],
      correctAnswer: '35',
      explanation: '2 không trừ được 7, lấy 12 - 7 = 5, viết 5 nhớ 1; 4 bớt 1 còn 3. Kết quả là 35.'
    });
    addL2({
      id: 'r10_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tính nhẩm phép trừ',
      category: 'calculation',
      questionText: 'Tính: 61 - 5 = ...',
      correctAnswer: '56',
      explanation: '11 - 5 = 6, 6 bớt 1 còn 5. Kết quả là 56.'
    });
    addL2({
      id: 'r10_l2_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Cửa hàng đồ chơi',
      category: 'real_world',
      questionText: 'Một cửa hàng có 35 con gấu bông, cửa hàng đã bán đi 8 con. Hỏi cửa hàng còn lại bao nhiêu con gấu bông?',
      options: ['27 con', '28 con', '26 con', '29 con'],
      correctAnswer: '27 con',
      unit: 'con',
      explanation: '35 - 8 = 27 con gấu bông.'
    });
    addL2({
      id: 'r10_l2_05',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Tìm số trừ',
      category: 'calculation',
      questionText: 'Tìm y biết: 53 - y = 46. y là số nào?',
      options: ['7', '8', '6', '9'],
      correctAnswer: '7',
      explanation: 'Số trừ y = 53 - 46 = 7.'
    });
    addL2({
      id: 'r10_l2_06',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'So sánh kết quả các phép trừ',
      category: 'calculation',
      questionText: 'Phép tính nào sau đây có kết quả lớn nhất?',
      options: ['52 - 6', '61 - 9', '43 - 8', '50 - 7'],
      correctAnswer: '61 - 9',
      explanation: '61 - 9 = 52. Các phép khác: 52 - 6 = 46; 43 - 8 = 35; 50 - 7 = 43.'
    });
    addL2({
      id: 'r10_l2_07',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Điền chữ số thích hợp',
      category: 'calculation',
      questionText: 'Điền số thích hợp: 74 - ... = 68',
      correctAnswer: '6',
      explanation: '74 - 68 = 6.'
    });
    addL2({
      id: 'r10_l2_08',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Quả trên cây',
      category: 'real_world',
      questionText: 'Cây táo có 41 quả, gió bão làm rụng mất 9 quả. Trên cây còn lại bao nhiêu quả táo?',
      options: ['32 quả', '31 quả', '33 quả', '34 quả'],
      correctAnswer: '32 quả',
      unit: 'quả',
      explanation: '41 - 9 = 32 quả táo.'
    });
    addL2({
      id: 'r10_l2_09',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đúng sai phép trừ có nhớ',
      category: 'calculation',
      questionText: 'Phát biểu nào sau đây là ĐÚNG?',
      options: [
        '83 - 8 = 75',
        '51 - 4 = 48',
        '72 - 6 = 67',
        '34 - 9 = 26'
      ],
      correctAnswer: '83 - 8 = 75',
      explanation: '83 - 8 = 75 là phép tính chính xác.'
    });
    addL2({
      id: 'r10_l2_10',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Dãy tính trừ cộng kết hợp',
      category: 'calculation',
      questionText: 'Tính: 62 - 7 + 15 = ?',
      options: ['70', '60', '71', '69'],
      correctAnswer: '70',
      explanation: '62 - 7 = 55; 55 + 15 = 70.'
    });

    // Vòng 10: Level 3
    addL3({
      id: 'r10_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Tìm số bị trừ khi quên nhớ',
      category: 'logic',
      questionText: 'Khi thực hiện phép tính trừ một số có hai chữ số cho 8, bạn An quên mượn 1 ở hàng chục nên được kết quả là 56. Kết quả đúng của phép tính đó phải là bao nhiêu?',
      options: ['46', '66', '54', '48'],
      correctAnswer: '46',
      explanation: 'Do quên nhớ mượn 1 ở hàng chục nên kết quả của bạn An bị thừa mất 10 đơn vị. Kết quả đúng là: 56 - 10 = 46.'
    });
    addL3({
      id: 'r10_l3_02',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Chữ số tận cùng phép trừ',
      category: 'logic',
      questionText: 'Cho phép trừ: 5A - 7 = 48. Chữ số A là chữ số nào?',
      options: ['5', '6', '4', '7'],
      correctAnswer: '5',
      explanation: '48 + 7 = 55, vậy chữ số A = 5.'
    });
    addL3({
      id: 'r10_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Hiệu số tuổi khi giảm',
      category: 'real_world',
      questionText: 'Cách đây 3 năm bố 38 tuổi và con 9 tuổi. Hỏi hiện nay bố hơn con bao nhiêu tuổi?',
      correctAnswer: '29',
      unit: 'tuổi',
      explanation: '38 - 9 = 29 tuổi. Hiệu số tuổi của bố và con luôn không đổi.'
    });
    addL3({
      id: 'r10_l3_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Toán bẫy thừa thiếu',
      category: 'logic',
      questionText: 'Một thanh sắt dài 52 cm. Người ta cắt đi 3 đoạn, mỗi đoạn dài 9 cm. Đoạn sắt còn lại dài bao nhiêu xăng-ti-mét?',
      options: ['25 cm', '27 cm', '23 cm', '35 cm'],
      correctAnswer: '25 cm',
      unit: 'cm',
      explanation: '3 đoạn dài: 9 + 9 + 9 = 27 cm. Đoạn còn lại: 52 - 27 = 25 cm.'
    });
    addL3({
      id: 'r10_l3_05',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Quy luật nhảy lùi tia số',
      category: 'pattern',
      questionText: 'Một chú thỏ nhảy lùi trên tia số từ số 51, mỗi bước nhảy lùi 6 đơn vị. Sau 5 bước nhảy chú thỏ dừng lại ở số nào?',
      options: ['21', '25', '27', '19'],
      correctAnswer: '21',
      explanation: '5 bước nhảy lùi: 6 x 5 = 30 đơn vị. Điểm dừng lại: 51 - 30 = 21.'
    });
  }

  else if (round === 11) {
    // Vòng 11: Phép trừ có nhớ 2 chữ số - 2 chữ số (dạng 54 - 28, 70 - 35)
    addL2({
      id: 'r11_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Đặt tính phép trừ có nhớ',
      category: 'calculation',
      questionText: 'Đặt tính rồi tính: 64 - 28 = ?',
      options: ['36', '46', '35', '34'],
      correctAnswer: '36',
      explanation: '4 không trừ được 8, lấy 14 - 8 = 6, viết 6 nhớ 1; 2 thêm 1 bằng 3; 6 - 3 = 3. Kết quả là 36.'
    });
    addL2({
      id: 'r11_l2_02',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Trừ số tròn chục có nhớ',
      category: 'calculation',
      questionText: 'Tính: 70 - 35 = ?',
      options: ['35', '45', '30', '40'],
      correctAnswer: '35',
      explanation: '0 không trừ được 5, lấy 10 - 5 = 5; 3 thêm 1 bằng 4; 7 - 4 = 3. Kết quả 35.'
    });
    addL2({
      id: 'r11_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tìm số bị trừ',
      category: 'calculation',
      questionText: 'Tìm x biết: x - 37 = 25. x = ...',
      correctAnswer: '62',
      explanation: 'x = 25 + 37 = 62.'
    });
    addL2({
      id: 'r11_l2_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Vườn hoa cúc',
      category: 'real_world',
      questionText: 'Vườn nhà bà có 82 bông hoa cúc, bà đã cắt 36 bông hoa để bán. Trong vườn còn lại bao nhiêu bông hoa cúc?',
      options: ['46 bông', '56 bông', '45 bông', '47 bông'],
      correctAnswer: '46 bông',
      unit: 'bông hoa',
      explanation: '82 - 36 = 46 bông hoa.'
    });
    addL2({
      id: 'r11_l2_05',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'So sánh phép trừ',
      category: 'calculation',
      questionText: 'Điền dấu thích hợp: 83 - 29 ... 91 - 38',
      options: ['>', '<', '=', 'Không so sánh được'],
      correctAnswer: '>',
      explanation: '83 - 29 = 54; 91 - 38 = 53. Vì 54 > 53 nên điền dấu >.'
    });
    addL2({
      id: 'r11_l2_06',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tính nhẩm nhanh hiệu',
      category: 'calculation',
      questionText: 'Tính: 92 - 47 = ...',
      correctAnswer: '45',
      explanation: '12 - 7 = 5 nhớ 1; 4 thêm 1 là 5; 9 - 5 = 4. Kết quả là 45.'
    });
    addL2({
      id: 'r11_l2_07',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Tiết kiệm tiền mua sách',
      category: 'real_world',
      questionText: 'Hà có 90 nghìn đồng, Hà mua một bộ màu vẽ hết 45 nghìn đồng. Hà còn lại bao nhiêu nghìn đồng?',
      options: ['45 nghìn đồng', '55 nghìn đồng', '35 nghìn đồng', '50 nghìn đồng'],
      correctAnswer: '45 nghìn đồng',
      explanation: '90 - 45 = 45 nghìn đồng.'
    });
    addL2({
      id: 'r11_l2_08',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đúng sai phép trừ dọc',
      category: 'calculation',
      questionText: 'Phép tính nào dưới đây có kết quả SAI?',
      options: ['73 - 39 = 44', '55 - 28 = 27', '80 - 46 = 34', '61 - 15 = 46'],
      correctAnswer: '73 - 39 = 44',
      explanation: '73 - 39 = 34 chứ không phải 44 (do quên nhớ sang hàng chục).'
    });
    addL2({
      id: 'r11_l2_09',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Dãy tính liên tiếp',
      category: 'calculation',
      questionText: 'Tính giá trị: 100 - 38 - 22 = ...',
      correctAnswer: '40',
      explanation: '100 - (38 + 22) = 100 - 60 = 40.'
    });
    addL2({
      id: 'r11_l2_10',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Tìm số hạng giảm',
      category: 'calculation',
      questionText: 'Một số bớt đi 38 thì bằng 45. Số đó là:',
      options: ['83', '73', '7', '17'],
      correctAnswer: '83',
      explanation: '45 + 38 = 83.'
    });

    // Vòng 11: Level 3
    addL3({
      id: 'r11_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Thay đổi hiệu khi số bị trừ và số trừ cùng đổi',
      category: 'logic',
      questionText: 'Hiệu của hai số là 35. Nếu tăng số bị trừ thêm 10 đơn vị và giảm số trừ đi 5 đơn vị thì hiệu mới bằng bao nhiêu?',
      options: ['50', '40', '30', '45'],
      correctAnswer: '50',
      explanation: 'Tăng số bị trừ 10 thì hiệu tăng 10; giảm số trừ 5 thì hiệu tăng tiếp 5. Hiệu mới: 35 + 10 + 5 = 50.'
    });
    addL3({
      id: 'r11_l3_02',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Toán 2 bước tính học sinh',
      category: 'real_world',
      questionText: 'Một đội văn nghệ có 52 bạn, trong đó có 28 bạn nữ. Hỏi số bạn nam ít hơn số bạn nữ bao nhiêu bạn?',
      options: ['4 bạn', '24 bạn', '6 bạn', '8 bạn'],
      correctAnswer: '4 bạn',
      unit: 'bạn',
      explanation: 'Số bạn nam là: 52 - 28 = 24 bạn. Số bạn nam ít hơn bạn nữ: 28 - 24 = 4 bạn.'
    });
    addL3({
      id: 'r11_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Chữ số ẩn trong phép trừ',
      category: 'logic',
      questionText: 'Tìm chữ số B biết: 82 - 3B = 47. B = ...',
      correctAnswer: '5',
      explanation: '3B = 82 - 47 = 35. Do đó chữ số B = 5.'
    });
    addL3({
      id: 'r11_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Tổng lớn nhất trừ bé nhất',
      category: 'logic',
      questionText: 'Hiệu giữa số lớn nhất có hai chữ số khác nhau và số bé nhất có hai chữ số khác nhau là:',
      options: ['88', '89', '87', '78'],
      correctAnswer: '88',
      explanation: 'Số lớn nhất có 2 chữ số khác nhau là 98. Số bé nhất có 2 chữ số khác nhau là 10. 98 - 10 = 88.'
    });
    addL3({
      id: 'r11_l3_05',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Tiền trả lại Trạng Nguyên',
      category: 'real_world',
      questionText: 'Mẹ mang 100 nghìn đồng đi chợ. Mẹ mua thịt hết 48 nghìn đồng và mua rau hết 16 nghìn đồng. Hỏi mẹ mang về bao nhiêu nghìn đồng?',
      options: ['36 nghìn đồng', '46 nghìn đồng', '26 nghìn đồng', '34 nghìn đồng'],
      correctAnswer: '36 nghìn đồng',
      explanation: 'Tổng tiền đã tiêu: 48 + 16 = 64 nghìn đồng. Tiền còn lại: 100 - 64 = 36 nghìn đồng.'
    });
  }

  else if (round === 12) {
    // Vòng 12: Đường cong, đường thẳng, đoạn thẳng, tính độ dài đường gấp khúc
    addL2({
      id: 'r12_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Nhận biết đường gấp khúc',
      category: 'geometry',
      questionText: 'Đường gấp khúc là đường gồm:',
      options: [
        'Nhiều đoạn thẳng nối tiếp nhau không thẳng hàng',
        'Một đoạn thẳng duy nhất',
        'Các đường cong uốn lượn',
        'Các đường tròn khép kín'
      ],
      correctAnswer: 'Nhiều đoạn thẳng nối tiếp nhau không thẳng hàng',
      explanation: 'Đường gấp khúc gồm các đoạn thẳng nối tiếp nhau mà không cùng nằm trên một đường thẳng.'
    });
    addL2({
      id: 'r12_l2_02',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tính độ dài đường gấp khúc 3 đoạn',
      category: 'measurement',
      questionText: 'Một đường gấp khúc gồm 3 đoạn thẳng có độ dài lần lượt là 12 cm, 18 cm và 15 cm. Độ dài đường gấp khúc đó là ... cm.',
      correctAnswer: '45',
      unit: 'cm',
      explanation: 'Độ dài đường gấp khúc = 12 + 18 + 15 = 45 cm.'
    });
    addL2({
      id: 'r12_l2_03',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Đường cong thực tế',
      category: 'geometry',
      questionText: 'Hình ảnh nào dưới đây gợi lên hình ảnh một đường cong?',
      options: ['Cầu vồng trên bầu trời', 'Cạnh của chiếc thước kẻ', 'Cột cờ sân trường', 'Dây dọi thẳng đứng'],
      correctAnswer: 'Cầu vồng trên bầu trời',
      explanation: 'Cầu vồng có dạng hình vòng cung (đường cong).'
    });
    addL2({
      id: 'r12_l2_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Kiến bò theo đường gấp khúc',
      category: 'geometry',
      questionText: 'Một chú kiến bò từ A qua B, C đến D theo đường gấp khúc ABCD. Biết AB = 14 cm, BC = 20 cm, CD = 16 cm. Quãng đường chú kiến bò dài bao nhiêu đề-xi-mét?',
      options: ['5 dm', '50 dm', '5 cm', '4 dm'],
      correctAnswer: '5 dm',
      unit: 'dm',
      explanation: 'Tổng độ dài = 14 + 20 + 16 = 50 cm. Đổi 50 cm = 5 dm.'
    });
    addL2({
      id: 'r12_l2_05',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Đường gấp khúc các đoạn bằng nhau',
      category: 'geometry',
      questionText: 'Đường gấp khúc gồm 4 đoạn thẳng bằng nhau, mỗi đoạn dài 6 cm. Độ dài đường gấp khúc đó là:',
      options: ['24 cm', '20 cm', '18 cm', '30 cm'],
      correctAnswer: '24 cm',
      unit: 'cm',
      explanation: '6 + 6 + 6 + 6 = 24 cm.'
    });
    addL2({
      id: 'r12_l2_06',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tìm đoạn thẳng còn lại của đường gấp khúc',
      category: 'measurement',
      questionText: 'Đường gấp khúc ABC dài 36 cm. Biết đoạn AB dài 19 cm. Đoạn BC dài bao nhiêu xăng-ti-mét?',
      correctAnswer: '17',
      unit: 'cm',
      explanation: 'BC = 36 - 19 = 17 cm.'
    });
    addL2({
      id: 'r12_l2_07',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đúng sai về tính chất đường gấp khúc',
      category: 'geometry',
      questionText: 'Chọn khẳng định ĐÚNG trong các câu sau:',
      options: [
        'Độ dài đường gấp khúc bằng tổng độ dài các đoạn thẳng tạo nên nó',
        'Đường gấp khúc khép kín không thể là hình tam giác',
        'Đường thẳng cũng có thể đo được độ dài chính xác như đoạn thẳng',
        'Đường gấp khúc luôn có độ dài bằng 100 cm'
      ],
      correctAnswer: 'Độ dài đường gấp khúc bằng tổng độ dài các đoạn thẳng tạo nên nó',
      explanation: 'Quy tắc chuẩn: Muốn tính độ dài đường gấp khúc, ta tính tổng độ dài các đoạn thẳng của đường gấp khúc đó.'
    });
    addL2({
      id: 'r12_l2_08',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Đếm số đoạn thẳng tạo đường gấp khúc',
      category: 'geometry',
      questionText: 'Đường gấp khúc MNPQK gồm bao nhiêu đoạn thẳng?',
      options: ['4 đoạn thẳng', '5 đoạn thẳng', '3 đoạn thẳng', '6 đoạn thẳng'],
      correctAnswer: '4 đoạn thẳng',
      explanation: 'Các đoạn thẳng là: MN, NP, PQ, QK (tổng cộng 4 đoạn thẳng).'
    });
    addL2({
      id: 'r12_l2_09',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Quy đổi đơn vị độ dài đường gấp khúc',
      category: 'measurement',
      questionText: 'Đường gấp khúc gồm 2 đoạn: đoạn một dài 4 dm, đoạn hai dài 35 cm. Độ dài cả đường gấp khúc là ... cm.',
      correctAnswer: '75',
      unit: 'cm',
      explanation: '4 dm = 40 cm; 40 cm + 35 cm = 75 cm.'
    });
    addL2({
      id: 'r12_l2_10',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'So sánh hai đường gấp khúc',
      category: 'measurement',
      questionText: 'Đường gấp khúc 1 dài 5 dm 2 cm; Đường gấp khúc 2 dài 48 cm. Khẳng định nào đúng?',
      options: [
        'Đường gấp khúc 1 dài hơn đường gấp khúc 2 là 4 cm',
        'Đường gấp khúc 2 dài hơn',
        'Hai đường gấp khúc bằng nhau',
        'Đường gấp khúc 1 ngắn hơn 4 cm'
      ],
      correctAnswer: 'Đường gấp khúc 1 dài hơn đường gấp khúc 2 là 4 cm',
      explanation: 'Đường 1 dài 52 cm. Đường 2 dài 48 cm. 52 - 48 = 4 cm.'
    });

    // Vòng 12: Level 3
    addL3({
      id: 'r12_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Đường gấp khúc khép kín hình tam giác',
      category: 'geometry',
      questionText: 'Một sợi dây thép dài 48 cm được uốn thành một đường gấp khúc khép kín tạo thành một hình tam giác có 3 cạnh bằng nhau. Độ dài mỗi cạnh tam giác là:',
      options: ['16 cm', '12 cm', '14 cm', '18 cm'],
      correctAnswer: '16 cm',
      unit: 'cm',
      explanation: 'Độ dài mỗi cạnh là: 48 : 3 = 16 cm (vì 16 + 16 + 16 = 48).'
    });
    addL3({
      id: 'r12_l3_02',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Uốn sợi dây thành hình chữ nhật',
      category: 'geometry',
      questionText: 'Một sợi dây đồng dài 60 cm được uốn thành một hình chữ nhật có chiều dài 20 cm. Chiều rộng của hình chữ nhật đó là bao nhiêu xăng-ti-mét?',
      options: ['10 cm', '20 cm', '15 cm', '5 cm'],
      correctAnswer: '10 cm',
      unit: 'cm',
      explanation: 'Nửa chu vi: 60 : 2 = 30 cm. Chiều rộng: 30 - 20 = 10 cm.'
    });
    addL3({
      id: 'r12_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Quy luật tăng dần của các đoạn',
      category: 'pattern',
      questionText: 'Một đường gấp khúc có 4 đoạn thẳng. Đoạn thứ nhất dài 5 cm, mỗi đoạn tiếp theo dài hơn đoạn đứng trước nó 3 cm. Độ dài đường gấp khúc đó là ... cm.',
      correctAnswer: '38',
      unit: 'cm',
      explanation: 'Đoạn 1: 5 cm; Đoạn 2: 8 cm; Đoạn 3: 11 cm; Đoạn 4: 14 cm. Tổng: 5 + 8 + 11 + 14 = 38 cm.'
    });
    addL3({
      id: 'r12_l3_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'So sánh đường thẳng và đường gấp khúc',
      category: 'logic',
      questionText: 'Từ điểm A đến điểm B có một đoạn thẳng trực tiếp dài 30 cm và một đường gấp khúc ACB (điểm C không thẳng hàng với A và B). So sánh độ dài đường đi theo đường gấp khúc ACB với đoạn thẳng AB:',
      options: [
        'Đường gấp khúc ACB luôn dài hơn đoạn thẳng AB',
        'Đoạn thẳng AB dài hơn',
        'Hai con đường dài bằng nhau',
        'Tùy thuộc vào vị trí điểm C mà có lúc ngắn hơn'
      ],
      correctAnswer: 'Đường gấp khúc ACB luôn dài hơn đoạn thẳng AB',
      explanation: 'Đoạn thẳng nối hai điểm luôn là con đường ngắn nhất giữa hai điểm đó.'
    });
    addL3({
      id: 'r12_l3_05',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Ốc sên bò vòng',
      category: 'logic',
      questionText: 'Ốc sên bò theo các cạnh của một chiếc bàn hình vuông có cạnh dài 25 cm. Sau khi bò được một vòng rưỡi quanh mép bàn, ốc sên đã bò được quãng đường dài bao nhiêu đề-xi-mét?',
      options: ['15 dm', '10 dm', '150 dm', '20 dm'],
      correctAnswer: '15 dm',
      unit: 'dm',
      explanation: 'Chu vi 1 vòng bàn hình vuông: 25 x 4 = 100 cm. Nửa vòng nữa: 50 cm. Tổng quãng đường: 100 + 50 = 150 cm = 15 dm.'
    });
  }

  else if (round === 13) {
    // Vòng 13: Lịch tờ, ngày trong tuần, ngày trong tháng, hôm nay - hôm qua - ngày mai
    addL2({
      id: 'r13_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Một tuần lễ',
      category: 'measurement',
      questionText: 'Một tuần lễ có bao nhiêu ngày?',
      options: ['7 ngày', '5 ngày', '6 ngày', '8 ngày'],
      correctAnswer: '7 ngày',
      explanation: 'Một tuần lễ có 7 ngày: Thứ Hai, Thứ Ba, Thứ Tư, Thứ Năm, Thứ Sáu, Thứ Bảy, Chủ Nhật.'
    });
    addL2({
      id: 'r13_l2_02',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Hôm nay, ngày mai',
      category: 'measurement',
      questionText: 'Nếu hôm nay là Thứ Năm thì ngày mai là thứ mấy?',
      options: ['Thứ Sáu', 'Thứ Bảy', 'Thứ Tư', 'Chủ Nhật'],
      correctAnswer: 'Thứ Sáu',
      explanation: 'Liền sau Thứ Năm là Thứ Sáu.'
    });
    addL2({
      id: 'r13_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Xem tờ lịch tháng',
      category: 'measurement',
      questionText: 'Nếu ngày 5 của tháng là Thứ Hai thì ngày Thứ Hai tuần sau là ngày mùng mấy của tháng đó?',
      correctAnswer: '12',
      explanation: 'Thứ Hai tuần sau hơn đúng 7 ngày: 5 + 7 = 12.'
    });
    addL2({
      id: 'r13_l2_04',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Số ngày trong một tháng',
      category: 'measurement',
      questionText: 'Tháng nào dưới đây có đúng 30 ngày?',
      options: ['Tháng 4', 'Tháng 1', 'Tháng 3', 'Tháng 5'],
      correctAnswer: 'Tháng 4',
      explanation: 'Các tháng có 30 ngày là: tháng 4, 6, 9, 11.'
    });
    addL2({
      id: 'r13_l2_05',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Ngày sinh nhật của bạn',
      category: 'real_world',
      questionText: 'Hôm nay là Thứ Ba ngày 10. Còn đúng 1 tuần lễ nữa là đến sinh nhật Nam. Sinh nhật Nam vào thứ mấy, ngày bao nhiêu?',
      options: ['Thứ Ba ngày 17', 'Thứ Ba ngày 16', 'Thứ Tư ngày 17', 'Thứ Hai ngày 17'],
      correctAnswer: 'Thứ Ba ngày 17',
      explanation: 'Sau 1 tuần lễ thì vẫn là Thứ Ba và ngày là: 10 + 7 = 17.'
    });
    addL2({
      id: 'r13_l2_06',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tính lùi ngày trong tuần',
      category: 'measurement',
      questionText: 'Nếu ngày 20 của tháng là Chủ Nhật thì ngày Chủ Nhật của tuần trước đó là ngày mùng mấy?',
      correctAnswer: '13',
      explanation: 'Lùi về trước 7 ngày: 20 - 7 = 13.'
    });
    addL2({
      id: 'r13_l2_07',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đúng sai về thời gian tuần',
      category: 'logic',
      questionText: 'Khẳng định nào dưới đây là ĐÚNG?',
      options: [
        'Nếu hôm qua là Chủ Nhật thì hôm nay là Thứ Hai',
        'Tháng 2 luôn luôn có 31 ngày',
        'Một tuần lễ học sinh đi học cả 7 ngày',
        'Ngày liền trước của ngày 1 tháng 10 là ngày 31 tháng 8'
      ],
      correctAnswer: 'Nếu hôm qua là Chủ Nhật thì hôm nay là Thứ Hai',
      explanation: 'Chủ Nhật là ngày cuối tuần, ngày tiếp theo của tuần mới là Thứ Hai.'
    });
    addL2({
      id: 'r13_l2_08',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Ngày Quốc tế Thiếu nhi',
      category: 'real_world',
      questionText: 'Ngày Quốc tế Thiếu nhi 1 tháng 6 rơi vào Thứ Sáu. Hỏi ngày 8 tháng 6 cùng năm đó là thứ mấy?',
      options: ['Thứ Sáu', 'Thứ Bảy', 'Thứ Năm', 'Chủ Nhật'],
      correctAnswer: 'Thứ Sáu',
      explanation: '1 + 7 = 8, cách nhau đúng 7 ngày (1 tuần lễ) nên vẫn là Thứ Sáu.'
    });
    addL2({
      id: 'r13_l2_09',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Số ngày nghỉ cuối tuần',
      category: 'real_world',
      questionText: 'Trong 4 tuần lễ, các bạn học sinh được nghỉ Thứ Bảy và Chủ Nhật. Hỏi các bạn được nghỉ tất cả bao nhiêu ngày cuối tuần?',
      correctAnswer: '8',
      unit: 'ngày',
      explanation: 'Mỗi tuần nghỉ 2 ngày cuối tuần: 2 x 4 = 8 ngày.'
    });
    addL2({
      id: 'r13_l2_10',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Kì nghỉ hè của em',
      category: 'real_world',
      questionText: 'Lan về quê thăm ông bà từ sáng Thứ Hai ngày 12 đến chiều Chủ Nhật ngày 18. Lan đã ở quê mấy ngày?',
      options: ['7 ngày', '6 ngày', '8 ngày', '5 ngày'],
      correctAnswer: '7 ngày',
      unit: 'ngày',
      explanation: 'Từ 12 đến 18 gồm 7 ngày: 12, 13, 14, 15, 16, 17, 18 (trọn 1 tuần lễ).'
    });

    // Vòng 13: Level 3
    addL3({
      id: 'r13_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Số ngày Chủ nhật trong tháng',
      category: 'logic',
      questionText: 'Một tháng nào đó có 3 ngày Chủ Nhật đều rơi vào các ngày chẵn của tháng. Hỏi ngày 20 của tháng đó rơi vào thứ mấy?',
      options: ['Thứ Năm', 'Thứ Tư', 'Thứ Sáu', 'Chủ Nhật'],
      correctAnswer: 'Thứ Năm',
      explanation: 'Để có 3 ngày Chủ nhật chẵn thì tháng đó phải có 5 ngày Chủ nhật: Chủ nhật rơi vào ngày 2, 9, 16, 23, 30. Ngày 16 là Chủ Nhật thì ngày 20 = 16 + 4 ngày (Chủ Nhật + 4 = Thứ Năm).'
    });
    addL3({
      id: 'r13_l3_02',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Hôm qua, ngày mai của ngày kia',
      category: 'logic',
      questionText: 'Nếu ngày mai của hôm qua là Thứ Tư thì ngày kia là thứ mấy?',
      options: ['Thứ Sáu', 'Thứ Năm', 'Thứ Bảy', 'Thứ Tư'],
      correctAnswer: 'Thứ Sáu',
      explanation: 'Ngày mai của hôm qua chính là hôm nay! Hôm nay là Thứ Tư. Ngày mai là Thứ Năm, ngày kia là Thứ Sáu.'
    });
    addL3({
      id: 'r13_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Chuyển tháng tiếp theo',
      category: 'logic',
      questionText: 'Tháng 4 có 30 ngày. Nếu ngày 28 tháng 4 là Thứ Bảy thì ngày 2 tháng 5 cùng năm đó là thứ mấy? (Điền số: Thứ Hai điền 2, Thứ Ba điền 3, Thứ Tư điền 4, Thứ Năm điền 5...)',
      correctAnswer: '4',
      explanation: '28/4: Thứ 7; 29/4: Chủ Nhật; 30/4: Thứ Hai; 1/5: Thứ Ba; 2/5: Thứ Tư (điền 4).'
    });
    addL3({
      id: 'r13_l3_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Toán lịch trực nhật lớp',
      category: 'real_world',
      questionText: 'Cứ sau 3 ngày bạn Hùng lại trực nhật một lần. Lần đầu Hùng trực vào Thứ Hai. Hỏi lần trực tiếp theo của Hùng vào thứ mấy?',
      options: ['Thứ Năm', 'Thứ Sáu', 'Thứ Tư', 'Thứ Bảy'],
      correctAnswer: 'Thứ Năm',
      explanation: 'Thứ Hai + 3 ngày = Thứ Năm.'
    });
    addL3({
      id: 'r13_l3_05',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Số ngày trong 2 tháng hè liên tiếp',
      category: 'logic',
      questionText: 'Hai tháng liên tiếp trong một năm có tổng số ngày là 62 ngày là hai tháng nào?',
      options: ['Tháng 7 và Tháng 8', 'Tháng 6 và Tháng 7', 'Tháng 8 và Tháng 9', 'Tháng 11 và Tháng 12'],
      correctAnswer: 'Tháng 7 và Tháng 8',
      explanation: 'Cả tháng 7 và tháng 8 đều có 31 ngày: 31 + 31 = 62 ngày.'
    });
  }

  return { level2: l2, level3: l3 };
}
