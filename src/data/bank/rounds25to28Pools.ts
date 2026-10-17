import { Question } from '../../types/quiz';

/**
 * NGÂN HÀNG CÂU HỎI MỨC 2 & MỨC 3: VÒNG 25 ĐẾN VÒNG 28
 * SGK Toán 2 Kết Nối Tri Thức Với Cuộc Sống (GDPT 2018)
 * Các chủ đề: Khối trụ & Khối cầu, Mét & Ki-lô-mét, Các số có 3 chữ số, So sánh số có 3 chữ số.
 */

export function getRounds25to28Questions(round: number): { level2: Question[]; level3: Question[] } {
  const l2: Question[] = [];
  const l3: Question[] = [];

  const addL2 = (q: Omit<Question, 'roundNumber' | 'level' | 'points' | 'questionNumber'>) => {
    l2.push({ ...q, roundNumber: round, level: 2, points: 10, questionNumber: 0 });
  };

  const addL3 = (q: Omit<Question, 'roundNumber' | 'level' | 'points' | 'questionNumber'>) => {
    l3.push({ ...q, roundNumber: round, level: 3, points: 10, questionNumber: 0 });
  };

  if (round === 25) {
    // Vòng 25: Khối trụ & Khối cầu
    addL2({
      id: 'r25_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Nhận biết khối trụ thực tế',
      category: 'geometry',
      questionText: 'Đồ vật nào dưới đây có dạng khối trụ?',
      options: ['Hộp sữa đặc ông Thọ', 'Quả bóng đá', 'Hộp quà hình lập phương', 'Quyển sách'],
      correctAnswer: 'Hộp sữa đặc ông Thọ',
      explanation: 'Hộp sữa đặc, lon nước ngọt, ống bơ có dạng khối trụ.'
    });
    addL2({
      id: 'r25_l2_02',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Nhận biết khối cầu',
      category: 'geometry',
      questionText: 'Đồ vật nào dưới đây có dạng khối cầu?',
      options: ['Quả bóng bàn', 'Cục tẩy hình hộp', 'Cái cốc thủy tinh', 'Bút sáp màu'],
      correctAnswer: 'Quả bóng bàn',
      explanation: 'Quả bóng bàn, viên bi ve, quả địa cầu có dạng khối cầu tròn vo lăn được về mọi phía.'
    });
    addL2({
      id: 'r25_l2_03',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đặc điểm khối trụ',
      category: 'geometry',
      questionText: 'Khối trụ có đặc điểm nào dưới đây?',
      options: [
        'Có hai mặt đáy là hai hình tròn bằng nhau',
        'Lăn được về mọi phía như khối cầu',
        'Có 6 mặt hình vuông',
        'Có 8 đỉnh nhọn'
      ],
      correctAnswer: 'Có hai mặt đáy là hai hình tròn bằng nhau',
      explanation: 'Khối trụ gồm 2 mặt đáy phẳng hình tròn bằng nhau và 1 mặt cong xung quanh.'
    });
    addL2({
      id: 'r25_l2_04',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'So sánh khối trụ và khối cầu',
      category: 'geometry',
      questionText: 'Khối nào có thể vừa đặt đứng vững vàng vừa có thể lăn được?',
      options: ['Khối trụ', 'Khối cầu', 'Khối lập phương', 'Khối hộp chữ nhật'],
      correctAnswer: 'Khối trụ',
      explanation: 'Khối trụ khi đặt đáy phẳng thì đứng vững, khi đặt nằm ngang thì lăn được.'
    });
    addL2({
      id: 'r25_l2_05',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Đếm số khối lập phương và khối trụ',
      category: 'geometry',
      questionText: 'Bạn An xếp một lâu đài đồ chơi gồm: 4 khối trụ, 3 khối cầu và 5 khối lập phương. Bạn An đã dùng tất cả bao nhiêu khối hình?',
      correctAnswer: '12',
      unit: 'khối',
      explanation: '4 + 3 + 5 = 12 khối hình.'
    });
    addL2({
      id: 'r25_l2_06',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Lăn về mọi phía',
      category: 'geometry',
      questionText: 'Khối nào có đặc điểm lăn được về MỌI PHÍA?',
      options: ['Khối cầu', 'Khối trụ', 'Khối lập phương', 'Hình tròn'],
      correctAnswer: 'Khối cầu',
      explanation: 'Khối cầu tròn đều về mọi hướng nên có thể lăn được về bất kì phía nào.'
    });
    addL2({
      id: 'r25_l2_07',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Xếp chồng khối hình',
      category: 'geometry',
      questionText: 'Muốn xếp chồng 2 khối trụ lên nhau một cách vững chắc nhất, ta phải làm thế nào?',
      options: [
        'Đặt mặt phẳng đáy của khối này lên mặt phẳng đáy của khối kia',
        'Đặt mặt cong của hai khối tiếp xúc nhau',
        'Đặt nghiêng một khối',
        'Không thể xếp chồng khối trụ được'
      ],
      correctAnswer: 'Đặt mặt phẳng đáy của khối này lên mặt phẳng đáy của khối kia',
      explanation: 'Hai mặt đáy hình tròn là mặt phẳng nên khi đặt tiếp xúc nhau sẽ đứng vững chắc.'
    });
    addL2({
      id: 'r25_l2_08',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Phân loại đồ vật',
      category: 'geometry',
      questionText: 'Trong các đồ vật: (1) Quả địa cầu, (2) Lon nước ngọt, (3) Viên bi, (4) Hộp bánh quy tròn. Có bao nhiêu đồ vật dạng khối cầu?',
      correctAnswer: '2',
      explanation: 'Quả địa cầu và Viên bi có dạng khối cầu (2 đồ vật).'
    });
    addL2({
      id: 'r25_l2_09',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Khối hình không gian',
      category: 'geometry',
      questionText: 'Hình dạng của viên phấn viết bảng mới chưa dùng giống với khối hình nào nhất?',
      options: ['Khối trụ', 'Khối cầu', 'Khối lập phương', 'Hình chữ nhật'],
      correctAnswer: 'Khối trụ',
      explanation: 'Viên phấn có hình dạng dài và hai đầu tròn, tức là khối trụ tròn.'
    });
    addL2({
      id: 'r25_l2_10',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'Phân biệt khối hình phẳng và khối hình học',
      category: 'geometry',
      questionText: 'Phát biểu nào sau đây phân biệt ĐÚNG giữa hình tròn và khối cầu?',
      options: [
        'Hình tròn là hình phẳng trên mặt giấy, còn khối cầu là vật thể hình học trong không gian',
        'Hình tròn và khối cầu là hai tên gọi của cùng một thứ',
        'Hình tròn có thể lăn được về mọi phía',
        'Khối cầu có thể vẽ được trên mặt giấy mà không có độ dày'
      ],
      correctAnswer: 'Hình tròn là hình phẳng trên mặt giấy, còn khối cầu là vật thể hình học trong không gian',
      explanation: 'Hình tròn là hình phẳng 2D, khối cầu là vật thể không gian 3D.'
    });

    // Vòng 25: Level 3
    addL3({
      id: 'r25_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Xếp hình tháp khối',
      category: 'geometry',
      questionText: 'Để xây một chiếc tháp đứng vững, khối nào KHÔNG NÊN đặt ở tầng dưới cùng làm chân tháp?',
      options: ['Khối cầu', 'Khối lập phương', 'Khối trụ đặt đứng', 'Khối hộp chữ nhật'],
      correctAnswer: 'Khối cầu',
      explanation: 'Khối cầu có mặt cong tròn vo, không có mặt đáy phẳng nên không thể giữ thăng bằng để đỡ các khối bên trên.'
    });
    addL3({
      id: 'r25_l3_02',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Đếm số khối hình bị che khuất',
      category: 'geometry',
      questionText: 'Một chiếc hộp kín chứa 10 khối hình gồm khối trụ và khối cầu. Số khối trụ gấp 4 lần số khối cầu. Hỏi trong hộp có bao nhiêu khối trụ?',
      options: ['8 khối trụ', '2 khối trụ', '6 khối trụ', '4 khối trụ'],
      correctAnswer: '8 khối trụ',
      explanation: 'Tổng số phần bằng nhau: 4 + 1 = 5 phần. Giá trị 1 phần (khối cầu): 10 : 5 = 2 khối. Số khối trụ: 2 x 4 = 8 khối.'
    });
    addL3({
      id: 'r25_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Cắt khối trụ bằng một nhát phẳng',
      category: 'geometry',
      questionText: 'Nếu dùng một nhát cưa cắt ngang một khúc gỗ hình khối trụ song song với hai đáy thì ta sẽ nhận được bao nhiêu khối trụ nhỏ hơn?',
      correctAnswer: '2',
      explanation: 'Cắt ngang 1 nhát chia khúc gỗ khối trụ thành 2 khối trụ nhỏ hơn.'
    });
    addL3({
      id: 'r25_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Dấu chân của khối hình trên cát',
      category: 'logic',
      questionText: 'Đặt khối trụ ấn thẳng mặt phẳng đáy của nó xuống mặt cát mịn rồi nhấc lên. Vết in để lại trên cát có dạng hình gì?',
      options: ['Hình tròn', 'Hình vuông', 'Hình chữ nhật', 'Hình tam giác'],
      correctAnswer: 'Hình tròn',
      explanation: 'Mặt đáy của khối trụ là hình tròn nên vết in để lại là hình tròn.'
    });
    addL3({
      id: 'r25_l3_05',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Trạng Nguyên Nhí xếp khối',
      category: 'logic',
      questionText: 'Nam dùng 8 khối lập phương nhỏ xếp thành một khối lập phương lớn. Nam sơn màu đỏ tất cả các mặt bên ngoài của khối lớn. Hỏi có bao nhiêu khối nhỏ được sơn đúng 3 mặt?',
      options: ['8 khối', '4 khối', '6 khối', '0 khối'],
      correctAnswer: '8 khối',
      explanation: 'Cả 8 khối nhỏ đều nằm ở 8 đỉnh của khối lập phương lớn nên mỗi khối nhỏ đều có đúng 3 mặt bị lộ ra ngoài và được sơn đỏ.'
    });
  }

  else if (round === 26) {
    // Vòng 26: Đơn vị Mét (m) và Ki-lô-mét (km)
    addL2({
      id: 'r26_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Quy đổi mét sang đề-xi-mét và xăng-ti-mét',
      category: 'measurement',
      questionText: '1 mét bằng bao nhiêu xăng-ti-mét?',
      options: ['100 cm', '10 cm', '1000 cm', '50 cm'],
      correctAnswer: '100 cm',
      explanation: '1 m = 10 dm = 100 cm.'
    });
    addL2({
      id: 'r26_l2_02',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Quy đổi ki-lô-mét sang mét',
      category: 'measurement',
      questionText: '1 ki-lô-mét (1 km) bằng bao nhiêu mét?',
      options: ['1000 m', '100 m', '10 m', '10000 m'],
      correctAnswer: '1000 m',
      explanation: '1 km = 1000 m.'
    });
    addL2({
      id: 'r26_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Cộng đơn vị mét',
      category: 'measurement',
      questionText: 'Tính: 45 m + 38 m = ... m',
      correctAnswer: '83',
      unit: 'm',
      explanation: '45 + 38 = 83 m.'
    });
    addL2({
      id: 'r26_l2_04',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Khoảng cách giữa hai tỉnh',
      category: 'measurement',
      questionText: 'Để đo khoảng cách giữa hai thành phố lớn như Hà Nội và Hải Phòng, người ta thường dùng đơn vị nào?',
      options: ['Ki-lô-mét (km)', 'Mét (m)', 'Xăng-ti-mét (cm)', 'Đề-xi-mét (dm)'],
      correctAnswer: 'Ki-lô-mét (km)',
      explanation: 'Khoảng cách địa lý xa giữa các thành phố được đo bằng ki-lô-mét (km).'
    });
    addL2({
      id: 'r26_l2_05',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'So sánh mét và ki-lô-mét',
      category: 'measurement',
      questionText: 'Điền dấu thích hợp: 800 m ... 1 km',
      options: ['<', '>', '=', 'Không so sánh được'],
      correctAnswer: '<',
      explanation: '1 km = 1000 m. Vì 800 m < 1000 m nên điền dấu <.'
    });
    addL2({
      id: 'r26_l2_06',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Khoảng cách đường đi',
      category: 'real_world',
      questionText: 'Quãng đường từ nhà Nam đến trường dài 500 m. Nam đi học rồi lại đi bộ từ trường về nhà. Cả đi và về Nam đã đi được ... mét.',
      correctAnswer: '1000',
      unit: 'm',
      explanation: '500 + 500 = 1000 m (tương đương 1 km).'
    });
    addL2({
      id: 'r26_l2_07',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Ước lượng chiều cao thực tế',
      category: 'real_world',
      questionText: 'Chiều cao của cột cờ trường tiểu học khoảng bao nhiêu là phù hợp nhất?',
      options: ['8 m', '8 km', '8 cm', '80 m'],
      correctAnswer: '8 m',
      explanation: 'Cột cờ trường học cao khoảng 6 m đến 10 m, 8 m là số đo hợp lý nhất.'
    });
    addL2({
      id: 'r26_l2_08',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Trừ đơn vị mét',
      category: 'measurement',
      questionText: 'Cuộn dây cáp dài 100 m, người ta đã cắt lấy 35 m. Cuộn dây còn lại dài ... mét.',
      correctAnswer: '65',
      unit: 'm',
      explanation: '100 - 35 = 65 m.'
    });
    addL2({
      id: 'r26_l2_09',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đúng sai về quy đổi độ dài',
      category: 'measurement',
      questionText: 'Phát biểu nào dưới đây là SAI?',
      options: [
        '1 km = 100 m',
        '1 m = 10 dm',
        '1 m = 100 cm',
        '1 dm = 10 cm'
      ],
      correctAnswer: '1 km = 100 m',
      explanation: '1 km = 1000 m, viết 100 m là sai.'
    });
    addL2({
      id: 'r26_l2_10',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'Sắp xếp các đơn vị đo độ dài',
      category: 'measurement',
      questionText: 'Sắp xếp các đơn vị đo theo thứ tự từ lớn đến bé:',
      options: [
        'km, m, dm, cm',
        'km, dm, m, cm',
        'm, km, dm, cm',
        'cm, dm, m, km'
      ],
      correctAnswer: 'km, m, dm, cm',
      explanation: 'Thứ tự từ lớn đến bé: ki-lô-mét > mét > đề-xi-mét > xăng-ti-mét.'
    });

    // Vòng 26: Level 3
    addL3({
      id: 'r26_l3_01',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Toán hành trình 3 địa điểm',
      category: 'real_world',
      questionText: 'Từ thị trấn A đến thị trấn B dài 12 km. Từ thị trấn B đến thị trấn C dài 28 km (theo cùng một đường thẳng). Bác tài xế đi từ A qua B đến C rồi quay trở về B. Bác đã đi tất cả bao nhiêu ki-lô-mét?',
      options: ['68 km', '40 km', '56 km', '80 km'],
      correctAnswer: '68 km',
      unit: 'km',
      explanation: 'Từ A đến C dài: 12 + 28 = 40 km. Đi từ C về B thêm 28 km nữa. Tổng quãng đường: 40 + 28 = 68 km.'
    });
    addL3({
      id: 'r26_l3_02',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Chạy đua vòng quanh sân',
      category: 'real_world',
      questionText: 'Một vòng sân vận động trường học dài 200 m. Bạn Dũng chạy bộ đúng 5 vòng quanh sân. Hỏi bạn Dũng đã chạy được bao nhiêu ki-lô-mét?',
      options: ['1 km', '1000 km', '2 km', '10 km'],
      correctAnswer: '1 km',
      unit: 'km',
      explanation: '5 vòng dài: 200 x 5 = 1000 m. Đổi 1000 m = 1 km.'
    });
    addL3({
      id: 'r26_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Trồng cây bên đường',
      category: 'logic',
      questionText: 'Một đoạn đường dài 50 m. Người ta trồng cây ở một bên đường, cây nọ cách cây kia 10 m, cả hai đầu đường đều có cây. Hỏi đoạn đường đó trồng tất cả bao nhiêu cây?',
      correctAnswer: '6',
      unit: 'cây',
      explanation: 'Số khoảng cách: 50 : 10 = 5 khoảng. Số cây: 5 + 1 = 6 cây.'
    });
    addL3({
      id: 'r26_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'So sánh các tổng khoảng cách',
      category: 'measurement',
      questionText: 'Biết đoạn đường AB = 450 m, đoạn đường BC = 550 m. Quãng đường AC khi đi từ A qua B đến C là:',
      options: ['Đúng 1 km', '900 m', '100 m', '1100 m'],
      correctAnswer: 'Đúng 1 km',
      explanation: '450 m + 550 m = 1000 m = đúng 1 km.'
    });
    addL3({
      id: 'r26_l3_05',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'Vận động viên bơi lội',
      category: 'real_world',
      questionText: 'Một bể bơi dài 50 m. Một vận động viên bơi qua bơi lại được 4 lượt (từ đầu này sang đầu kia tính là 1 lượt). Vận động viên đó đã bơi được bao nhiêu mét?',
      options: ['200 m', '100 m', '150 m', '250 m'],
      correctAnswer: '200 m',
      unit: 'm',
      explanation: '50 x 4 = 200 m.'
    });
  }

  else if (round === 27) {
    // Vòng 27: Các số có ba chữ số (trăm - chục - đơn vị), số tròn trăm
    addL2({
      id: 'r27_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Cấu tạo số có 3 chữ số',
      category: 'calculation',
      questionText: 'Số gồm 5 trăm, 3 chục và 8 đơn vị được viết là:',
      options: ['538', '583', '358', '835'],
      correctAnswer: '538',
      explanation: '5 trăm + 3 chục + 8 đơn vị = 538.'
    });
    addL2({
      id: 'r27_l2_02',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Đọc số có chữ số 0 ở giữa',
      category: 'calculation',
      questionText: 'Số 405 được đọc là:',
      options: ['Bốn trăm linh năm', 'Bốn mươi năm', 'Bốn trăm năm', 'Bốn trăm không lăm'],
      correctAnswer: 'Bốn trăm linh năm',
      explanation: 'Chữ số hàng chục là 0 đọc là "linh" (hoặc "lẻ"): Bốn trăm linh năm.'
    });
    addL2({
      id: 'r27_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Số liền sau số có 3 chữ số',
      category: 'calculation',
      questionText: 'Số liền sau của số 299 là số nào?',
      correctAnswer: '300',
      explanation: '299 + 1 = 300.'
    });
    addL2({
      id: 'r27_l2_04',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Số tròn trăm',
      category: 'calculation',
      questionText: 'Số tròn trăm liền trước của số 600 là:',
      options: ['500', '590', '700', '599'],
      correctAnswer: '500',
      explanation: 'Các số tròn trăm: 100, 200, 300, 400, 500, 600... Liền trước 600 là 500.'
    });
    addL2({
      id: 'r27_l2_05',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Phân tích số thành tổng',
      category: 'calculation',
      questionText: 'Số 762 được viết thành tổng các trăm, chục, đơn vị là:',
      options: ['700 + 60 + 2', '70 + 60 + 2', '700 + 62', '700 + 6 + 2'],
      correctAnswer: '700 + 60 + 2',
      explanation: '762 = 700 + 60 + 2.'
    });
    addL2({
      id: 'r27_l2_06',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Số liền trước số có 3 chữ số',
      category: 'calculation',
      questionText: 'Số liền trước của số 500 là số nào?',
      correctAnswer: '499',
      explanation: '500 - 1 = 499.'
    });
    addL2({
      id: 'r27_l2_07',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đúng sai về số có 3 chữ số',
      category: 'logic',
      questionText: 'Khẳng định nào dưới đây là ĐÚNG?',
      options: [
        'Số bé nhất có ba chữ số là 100',
        'Số lớn nhất có ba chữ số là 900',
        'Số 350 gồm 3 trăm và 5 đơn vị',
        'Số tròn trăm bé nhất là 200'
      ],
      correctAnswer: 'Số bé nhất có ba chữ số là 100',
      explanation: '100 là số có 3 chữ số bé nhất trong hệ thập phân.'
    });
    addL2({
      id: 'r27_l2_08',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Đếm thêm 100',
      category: 'pattern',
      questionText: 'Điền số tiếp theo vào dãy số tròn trăm: 100, 200, 300, 400, 500, ...',
      correctAnswer: '600',
      explanation: '500 + 100 = 600.'
    });
    addL2({
      id: 'r27_l2_09',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Đọc số có hàng đơn vị là 5',
      category: 'calculation',
      questionText: 'Số 615 được đọc chuẩn xác là:',
      options: ['Sáu trăm mười lăm', 'Sáu trăm mười năm', 'Sáu trăm linh năm', 'Sáu mươi lăm'],
      correctAnswer: 'Sáu trăm mười lăm',
      explanation: 'Khi hàng chục từ 1 trở lên, chữ số 5 ở hàng đơn vị đọc là "lăm".'
    });
    addL2({
      id: 'r27_l2_10',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'Xác định hàng của chữ số',
      category: 'calculation',
      questionText: 'Trong số 839, chữ số 3 có giá trị là bao nhiêu?',
      options: ['30 (3 chục)', '300 (3 trăm)', '3 (3 đơn vị)', '39'],
      correctAnswer: '30 (3 chục)',
      explanation: 'Chữ số 3 đứng ở hàng chục nên có giá trị là 30.'
    });

    // Vòng 27: Level 3
    addL3({
      id: 'r27_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Lập số có 3 chữ số khác nhau từ 3 số',
      category: 'logic',
      questionText: 'Từ 3 chữ số 0, 4, 7 có thể lập được bao nhiêu số có ba chữ số KHÁC NHAU?',
      options: ['4 số', '6 số', '3 số', '5 số'],
      correctAnswer: '4 số',
      explanation: 'Chữ số hàng trăm không thể là 0, chỉ có thể là 4 hoặc 7. Các số lập được: 407, 470, 704, 740 (tổng cộng 4 số).'
    });
    addL3({
      id: 'r27_l3_02',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Số có ba chữ số tổng bằng 3',
      category: 'logic',
      questionText: 'Có bao nhiêu số có ba chữ số mà tổng các chữ số của mỗi số bằng 3?',
      options: ['6 số', '5 số', '4 số', '7 số'],
      correctAnswer: '6 số',
      explanation: 'Các số là: 300, 210, 201, 120, 102, 111 (tổng cộng 6 số).'
    });
    addL3({
      id: 'r27_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Tìm số tròn trăm thỏa mãn điều kiện',
      category: 'logic',
      questionText: 'Tìm số tròn trăm có ba chữ số biết chữ số hàng trăm là số lớn nhất có một chữ số:',
      correctAnswer: '900',
      explanation: 'Số lớn nhất có 1 chữ số là 9. Số tròn trăm tương ứng là 900.'
    });
    addL3({
      id: 'r27_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Hiệu giữa số lớn nhất và bé nhất có 3 chữ số giống nhau',
      category: 'logic',
      questionText: 'Hiệu giữa số lớn nhất có 3 chữ số giống nhau và số bé nhất có 3 chữ số giống nhau là:',
      options: ['888', '999', '111', '800'],
      correctAnswer: '888',
      explanation: 'Số lớn nhất là 999. Số bé nhất là 111. 999 - 111 = 888.'
    });
    addL3({
      id: 'r27_l3_05',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Bí ẩn dãy số tròn chục ba chữ số',
      category: 'pattern',
      questionText: 'Điền số tiếp theo vào dãy số: 120, 140, 160, 180, ...',
      options: ['200', '190', '210', '220'],
      correctAnswer: '200',
      explanation: 'Mỗi số cộng thêm 20: 180 + 20 = 200.'
    });
  }

  else if (round === 28) {
    // Vòng 28: So sánh các số có ba chữ số
    addL2({
      id: 'r28_l2_01',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'So sánh số hàng trăm khác nhau',
      category: 'calculation',
      questionText: 'Điền dấu thích hợp: 472 ... 518',
      options: ['<', '>', '=', 'Không so sánh được'],
      correctAnswer: '<',
      explanation: 'So sánh chữ số hàng trăm: 4 < 5 nên 472 < 518.'
    });
    addL2({
      id: 'r28_l2_02',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'So sánh cùng hàng trăm',
      category: 'calculation',
      questionText: 'Điền dấu thích hợp: 635 ... 629',
      options: ['>', '<', '=', 'Không có dấu'],
      correctAnswer: '>',
      explanation: 'Cùng hàng trăm là 6. Hàng chục: 3 > 2 nên 635 > 629.'
    });
    addL2({
      id: 'r28_l2_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Số lớn nhất có 3 chữ số khác nhau',
      category: 'logic',
      questionText: 'Số lớn nhất có ba chữ số khác nhau là số nào?',
      correctAnswer: '987',
      explanation: 'Chọn chữ số hàng trăm là 9, hàng chục là 8, hàng đơn vị là 7. Số đó là 987.'
    });
    addL2({
      id: 'r28_l2_04',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'Sắp xếp dãy số có 3 chữ số từ bé đến lớn',
      category: 'calculation',
      questionText: 'Sắp xếp các số sau theo thứ tự từ bé đến lớn: 345, 543, 435, 354',
      options: [
        '345, 354, 435, 543',
        '354, 345, 435, 543',
        '543, 435, 354, 345',
        '345, 435, 354, 543'
      ],
      correctAnswer: '345, 354, 435, 543',
      explanation: 'So sánh: 345 < 354 < 435 < 543.'
    });
    addL2({
      id: 'r28_l2_05',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Số bé nhất có 3 chữ số khác nhau',
      category: 'logic',
      questionText: 'Số bé nhất có ba chữ số khác nhau là số nào?',
      correctAnswer: '102',
      explanation: 'Hàng trăm bé nhất khác 0 là 1. Hàng chục bé nhất là 0. Hàng đơn vị tiếp theo là 2. Số đó là 102.'
    });
    addL2({
      id: 'r28_l2_06',
      type: 'multiple_choice',
      formatType: 'mcq',
      topic: 'Tìm chữ số thích hợp để so sánh',
      category: 'calculation',
      questionText: 'Điền chữ số thích hợp vào dấu * để: 78* < 781',
      options: ['0', '1', '2', '8'],
      correctAnswer: '0',
      explanation: '780 < 781, nên chữ số duy nhất thỏa mãn là 0.'
    });
    addL2({
      id: 'r28_l2_07',
      type: 'multiple_choice',
      formatType: 'true_false',
      topic: 'Đúng sai về so sánh số có 3 chữ số',
      category: 'logic',
      questionText: 'Khi so sánh hai số có ba chữ số, bước đầu tiên ta so sánh các chữ số ở hàng nào?',
      options: ['Hàng trăm', 'Hàng chục', 'Hàng đơn vị', 'Hàng nào cũng được'],
      correctAnswer: 'Hàng trăm',
      explanation: 'Ta so sánh từ hàng cao nhất (hàng trăm), nếu hàng trăm bằng nhau mới so sánh đến hàng chục.'
    });
    addL2({
      id: 'r28_l2_08',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Số tròn trăm nằm giữa',
      category: 'calculation',
      questionText: 'Số tròn trăm x thỏa mãn 450 < x < 550 là số nào?',
      correctAnswer: '500',
      explanation: 'Số tròn trăm nằm giữa 450 và 550 là 500.'
    });
    addL2({
      id: 'r28_l2_09',
      type: 'multiple_choice',
      formatType: 'situation',
      topic: 'So sánh số học sinh các trường',
      category: 'real_world',
      questionText: 'Trường Tiểu học An Hòa có 650 học sinh, trường Tiểu học Hoa Mai có 680 học sinh, trường Tiểu học Lê Quý Đôn có 615 học sinh. Trường có nhiều học sinh nhất là:',
      options: ['Trường Hoa Mai', 'Trường An Hòa', 'Trường Lê Quý Đôn', 'Hai trường bằng nhau'],
      correctAnswer: 'Trường Hoa Mai',
      explanation: '680 > 650 > 615 nên trường Hoa Mai có nhiều học sinh nhất.'
    });
    addL2({
      id: 'r28_l2_10',
      type: 'multiple_choice',
      formatType: 'ordering',
      topic: 'Sắp xếp theo thứ tự từ lớn đến bé',
      category: 'calculation',
      questionText: 'Dãy số nào dưới đây được sắp xếp theo thứ tự từ lớn đến bé?',
      options: [
        '890, 875, 857, 798',
        '798, 857, 875, 890',
        '890, 857, 875, 798',
        '875, 890, 857, 798'
      ],
      correctAnswer: '890, 875, 857, 798',
      explanation: '890 > 875 > 857 > 798.'
    });

    // Vòng 28: Level 3
    addL3({
      id: 'r28_l3_01',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Tìm chữ số thỏa mãn bất đẳng thức kép',
      category: 'logic',
      questionText: 'Có bao nhiêu chữ số x thích hợp để: 540 < 54x < 546?',
      options: ['5 chữ số (1, 2, 3, 4, 5)', '4 chữ số', '6 chữ số', '3 chữ số'],
      correctAnswer: '5 chữ số (1, 2, 3, 4, 5)',
      explanation: 'x có thể là các chữ số: 1, 2, 3, 4, 5. Tổng cộng có 5 chữ số.'
    });
    addL3({
      id: 'r28_l3_02',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Tìm số lớn nhất từ các chữ số cho trước',
      category: 'logic',
      questionText: 'Cho 4 chữ số: 1, 0, 7, 5. Số lớn nhất có ba chữ số khác nhau được lập từ 4 chữ số trên là:',
      options: ['751', '750', '571', '715'],
      correctAnswer: '751',
      explanation: 'Để số lớn nhất, chọn 3 chữ số lớn nhất: 7, 5, 1 xếp theo thứ tự giảm dần: 751.'
    });
    addL3({
      id: 'r28_l3_03',
      type: 'fill_blank',
      formatType: 'fill',
      topic: 'Hiệu giữa số lớn nhất và bé nhất 3 chữ số khác nhau lập được',
      category: 'logic',
      questionText: 'Từ 3 chữ số 3, 5, 8 lập được số lớn nhất và số bé nhất có ba chữ số khác nhau. Hiệu của hai số đó là ...',
      correctAnswer: '495',
      explanation: 'Số lớn nhất: 853. Số bé nhất: 358. Hiệu: 853 - 358 = 495.'
    });
    addL3({
      id: 'r28_l3_04',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Số có ba chữ số hàng trăm gấp đôi hàng đơn vị',
      category: 'logic',
      questionText: 'Có bao nhiêu số tròn chục có ba chữ số mà chữ số hàng trăm gấp đôi chữ số hàng chục?',
      options: ['4 số (210, 420, 630, 840)', '5 số', '3 số', '8 số'],
      correctAnswer: '4 số (210, 420, 630, 840)',
      explanation: 'Hàng đơn vị là 0. Hàng chục là 1 => trăm là 2 (210); chục là 2 => trăm 4 (420); chục 3 => trăm 6 (630); chục 4 => trăm 8 (840). Có đúng 4 số.'
    });
    addL3({
      id: 'r28_l3_05',
      type: 'multiple_choice',
      formatType: 'logic',
      topic: 'Số trang sách có 3 chữ số',
      category: 'logic',
      questionText: 'Để đánh số trang của một cuốn truyện tranh từ trang 100 đến trang 110, người ta phải dùng tất cả bao nhiêu chữ số?',
      options: ['33 chữ số', '30 chữ số', '11 chữ số', '22 chữ số'],
      correctAnswer: '33 chữ số',
      explanation: 'Từ 100 đến 110 có: 110 - 100 + 1 = 11 trang. Mỗi trang gồm 3 chữ số nên số chữ số cần dùng là: 11 x 3 = 33 chữ số.'
    });
  }

  return { level2: l2, level3: l3 };
}
