export type QuestionLevel = 1 | 2 | 3;

export type VisualType = 
  | 'clock'           // Xem đồng hồ kim / điện tử
  | 'balance_scale'   // Cân đĩa ki-lô-gam
  | 'liters_pitcher'  // Can nước, bình nước lít
  | 'number_line'     // Tia số
  | 'ruler'           // Thước kẻ đo độ dài cm / dm
  | 'geo_shapes'      // Đếm hình tam giác, tứ giác, khối trụ, khối cầu
  | 'blocks_tens'     // Khối lập phương hàng chục, que tính
  | 'chart_icons'     // Biểu đồ tranh
  | 'pattern'         // Quy luật hình/số
  | 'none';

export interface Question {
  id: string;
  roundNumber: number;
  questionNumber: number; // 1 to 30
  level: QuestionLevel; // 1 (15 items), 2 (10 items), 3 (5 items)
  questionText: string;
  subText?: string;
  visualType?: VisualType;
  visualData?: any;
  type: 'multiple_choice' | 'fill_blank';
  options?: string[]; // for multiple choice
  correctAnswer: string;
  correctIndex?: number; // 0 for A, 1 for B, 2 for C, 3 for D
  unit?: string;
  explanation: string;
  points: number; // 10 points
  topic?: string;
  category?: 'logic' | 'real_world' | 'geometry' | 'calculation' | 'measurement' | 'data' | 'pattern';
  formatType?: 'mcq' | 'true_false' | 'fill' | 'situation' | 'ordering' | 'logic' | 'pattern';
}

export interface RoundInfo {
  id: number;
  title: string;
  subtitle: string;
  week: number;
  stageName: string; // Vòng tuần / Sơ khảo / Hương / Hội / Đình
  badge: string;
  topics: string[];
}

export interface StudentProfile {
  schoolName: string;
  studentName: string;
  className: string;
}

export interface RoundResult {
  roundNumber: number;
  score: number;
  maxScore: number;
  totalTimeSeconds: number; // time spent in seconds
  completedAt: string;
  answers: Record<number, string>; // questionNumber -> answer
  questions?: Question[]; // Snapshot of questions & options for this attempt
  isPassed: boolean;
  levelCorrectCount: {
    level1: number;
    level2: number;
    level3: number;
  };
  rankTitle: string; // Trạng Nguyên, Bảng Nhãn, Thám Hoa...
}
