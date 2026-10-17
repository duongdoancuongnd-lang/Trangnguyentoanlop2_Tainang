import React from 'react';
import { VisualType } from '../types/quiz';

interface VisualDiagramProps {
  type?: VisualType;
  data?: any;
}

export const VisualDiagram: React.FC<VisualDiagramProps> = ({ type, data }) => {
  if (!type || type === 'none') return null;

  return (
    <div className="my-4 p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl flex flex-col items-center justify-center">
      {type === 'clock' && <ClockDiagram data={data} />}
      {type === 'balance_scale' && <BalanceScaleDiagram data={data} />}
      {type === 'liters_pitcher' && <LitersPitcherDiagram data={data} />}
      {type === 'number_line' && <NumberLineDiagram data={data} />}
      {type === 'ruler' && <RulerDiagram data={data} />}
      {type === 'geo_shapes' && <GeoShapesDiagram data={data} />}
      {type === 'blocks_tens' && <BlocksTensDiagram data={data} />}
      {type === 'chart_icons' && <ChartIconsDiagram data={data} />}
    </div>
  );
};

// 1. Clock Component
const ClockDiagram: React.FC<{ data: any }> = ({ data }) => {
  const hour = data?.hour || 12;
  const minute = data?.minute || 0;

  // Calculate hand angles
  const minuteAngle = minute * 6; // 360 / 60
  const hourAngle = (hour % 12) * 30 + (minute / 60) * 30; // 360 / 12

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="180" height="180" viewBox="0 0 200 200" className="drop-shadow-md">
        {/* Outer Ring */}
        <circle cx="100" cy="100" r="92" fill="#FFFBEB" stroke="#D97706" strokeWidth="8" />
        <circle cx="100" cy="100" r="85" fill="#FFFFFF" stroke="#FDE68A" strokeWidth="2" />

        {/* Hour marks and numbers */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => {
          const angle = (num * 30 - 90) * (Math.PI / 180);
          const x = 100 + 68 * Math.cos(angle);
          const y = 100 + 68 * Math.sin(angle);
          return (
            <text
              key={num}
              x={x}
              y={y + 5}
              textAnchor="middle"
              className="fill-slate-700 font-bold text-sm select-none"
              fontFamily="sans-serif"
            >
              {num}
            </text>
          );
        })}

        {/* Hour Hand (short, dark amber) */}
        <line
          x1="100"
          y1="100"
          x2={100 + 45 * Math.sin((hourAngle * Math.PI) / 180)}
          y2={100 - 45 * Math.cos((hourAngle * Math.PI) / 180)}
          stroke="#B45309"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Minute Hand (long, red/rose) */}
        <line
          x1="100"
          y1="100"
          x2={100 + 65 * Math.sin((minuteAngle * Math.PI) / 180)}
          y2={100 - 65 * Math.cos((minuteAngle * Math.PI) / 180)}
          stroke="#DC2626"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Center pin */}
        <circle cx="100" cy="100" r="5" fill="#B45309" />
      </svg>
      <div className="text-xs font-semibold text-amber-900 bg-amber-100/80 px-3 py-1 rounded-full border border-amber-300">
        Hình: Đồng hồ kim chỉ {hour} giờ {minute > 0 ? `${minute} phút` : 'đúng'}
      </div>
    </div>
  );
};

// 2. Balance Scale Component
const BalanceScaleDiagram: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="240" height="130" viewBox="0 0 240 130">
        {/* Base */}
        <polygon points="120,50 100,120 140,120" fill="#78350F" />
        <rect x="90" y="118" width="60" height="8" rx="3" fill="#B45309" />

        {/* Beam */}
        <line x1="40" y1="50" x2="200" y2="50" stroke="#D97706" strokeWidth="6" strokeLinecap="round" />
        <circle cx="120" cy="50" r="6" fill="#F59E0B" />

        {/* Left Pan */}
        <line x1="50" y1="50" x2="35" y2="85" stroke="#92400E" strokeWidth="2" />
        <line x1="50" y1="50" x2="65" y2="85" stroke="#92400E" strokeWidth="2" />
        <ellipse cx="50" cy="85" rx="30" ry="8" fill="#FDE68A" stroke="#D97706" strokeWidth="2" />
        {/* Left Item */}
        <rect x="35" y="65" width="30" height="18" rx="4" fill="#3B82F6" opacity="0.9" />
        <text x="50" y="78" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">
          {data?.leftKg || 'Vật A'}
        </text>

        {/* Right Pan */}
        <line x1="190" y1="50" x2="175" y2="85" stroke="#92400E" strokeWidth="2" />
        <line x1="190" y1="50" x2="205" y2="85" stroke="#92400E" strokeWidth="2" />
        <ellipse cx="190" cy="85" rx="30" ry="8" fill="#FDE68A" stroke="#D97706" strokeWidth="2" />
        {/* Right Weight */}
        <rect x="175" y="62" width="30" height="22" rx="4" fill="#EF4444" opacity="0.9" />
        <text x="190" y="77" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">
          {data?.rightKg || '5 kg'}
        </text>
      </svg>
      <span className="text-xs text-amber-800 font-medium">Cân thăng bằng: Hai bên đĩa cân có khối lượng bằng nhau</span>
    </div>
  );
};

// 3. Liters Pitcher Component
const LitersPitcherDiagram: React.FC<{ data: any }> = ({ data }) => {
  const cap = data?.capacity || 10;
  return (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center">
        <svg width="90" height="120" viewBox="0 0 90 120">
          {/* Can */}
          <rect x="15" y="25" width="60" height="85" rx="10" fill="#E0F2FE" stroke="#0284C7" strokeWidth="3" />
          {/* Handle */}
          <path d="M 15 40 C 0 40 0 75 15 75" fill="none" stroke="#0284C7" strokeWidth="4" />
          {/* Cap */}
          <rect x="35" y="15" width="20" height="10" rx="2" fill="#0369A1" />
          {/* Water level */}
          <rect x="18" y="55" width="54" height="52" rx="6" fill="#38BDF8" opacity="0.75" />
          {/* Text */}
          <text x="45" y="85" textAnchor="middle" fill="#0C4A6E" fontWeight="bold" fontSize="14">
            {cap} l
          </text>
        </svg>
        <span className="text-xs text-sky-800 font-semibold mt-1">Bình chứa {cap} lít</span>
      </div>
    </div>
  );
};

// 4. Number Line Component
const NumberLineDiagram: React.FC<{ data: any }> = ({ data }) => {
  const start = data?.start || 0;
  const end = data?.end || 20;
  const mark = data?.mark || 10;

  return (
    <div className="w-full max-w-md px-2">
      <svg width="100%" height="70" viewBox="0 0 360 70">
        {/* Line */}
        <line x1="20" y1="35" x2="330" y2="35" stroke="#475569" strokeWidth="3" />
        <polygon points="340,35 325,30 325,40" fill="#475569" />

        {/* Ticks */}
        {[0, 1, 2, 3, 4, 5, 6].map((idx) => {
          const x = 30 + idx * 48;
          const val = start + Math.round((idx * (end - start)) / 6);
          const isTarget = val === mark;
          return (
            <g key={idx}>
              <line x1={x} y1="27" x2={x} y2="43" stroke="#475569" strokeWidth="2" />
              <text
                x={x}
                y="58"
                textAnchor="middle"
                fontSize="12"
                fontWeight={isTarget ? 'bold' : 'normal'}
                fill={isTarget ? '#DC2626' : '#334155'}
              >
                {val}
              </text>
              {isTarget && (
                <circle cx={x} cy="35" r="5" fill="#DC2626" stroke="#FEF2F2" strokeWidth="2" />
              )}
            </g>
          );
        })}
      </svg>
      <div className="text-center text-xs text-slate-600 font-medium">Tia số thẳng hàng tăng dần từ trái sang phải</div>
    </div>
  );
};

// 5. Ruler Diagram
const RulerDiagram: React.FC<{ data: any }> = ({ data }) => {
  const len = data?.lengthCm || 8;
  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-md">
      <svg width="100%" height="90" viewBox="0 0 340 90">
        {/* Pencil */}
        <rect x="30" y="15" width={len * 24} height="12" rx="3" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" />
        <polygon points={`${30 + len * 24},15 ${30 + len * 24 + 14},21 ${30 + len * 24},27`} fill="#FCD34D" stroke="#D97706" />
        <polygon points={`${30 + len * 24 + 10},19 ${30 + len * 24 + 14},21 ${30 + len * 24 + 10},23`} fill="#1E293B" />
        {/* Ruler Base */}
        <rect x="20" y="38" width="300" height="38" rx="4" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" />
        {/* Ruler Ticks */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((cm) => {
          const x = 30 + cm * 22;
          if (x > 310) return null;
          return (
            <g key={cm}>
              <line x1={x} y1="38" x2={x} y2="50" stroke="#78350F" strokeWidth="1.5" />
              <text x={x} y="68" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#78350F">
                {cm}
              </text>
            </g>
          );
        })}
      </svg>
      <span className="text-xs text-amber-900 font-semibold">Thước đo vạch xăng-ti-mét (cm)</span>
    </div>
  );
};

// 6. Geometric Shapes Diagram
const GeoShapesDiagram: React.FC<{ data: any }> = ({ data }) => {
  const shape = data?.shape;

  if (shape === 'cylinder') {
    return (
      <div className="flex items-center gap-4">
        <svg width="100" height="110" viewBox="0 0 100 110">
          {/* Top Ellipse */}
          <ellipse cx="50" cy="25" rx="35" ry="12" fill="#93C5FD" stroke="#1D4ED8" strokeWidth="3" />
          {/* Body */}
          <path d="M 15 25 L 15 80 A 35 12 0 0 0 85 80 L 85 25" fill="#BFDBFE" stroke="#1D4ED8" strokeWidth="3" />
          {/* Bottom Ellipse */}
          <ellipse cx="50" cy="80" rx="35" ry="12" fill="#60A5FA" stroke="#1D4ED8" strokeWidth="3" />
        </svg>
        <div className="text-left">
          <div className="font-bold text-blue-900 text-sm">Khối Trụ</div>
          <div className="text-xs text-blue-700">Có 2 mặt đáy hình tròn và 1 mặt xung quanh</div>
        </div>
      </div>
    );
  }

  if (shape === 'sphere') {
    return (
      <div className="flex items-center gap-4">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="url(#sphereGradient)" stroke="#EA580C" strokeWidth="3" />
          <defs>
            <radialGradient id="sphereGradient" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FED7AA" />
              <stop offset="60%" stopColor="#FB923C" />
              <stop offset="100%" stopColor="#C2410C" />
            </radialGradient>
          </defs>
        </svg>
        <div className="text-left">
          <div className="font-bold text-orange-900 text-sm">Khối Cầu</div>
          <div className="text-xs text-orange-700">Hình tròn không gian, có thể lăn về mọi phía</div>
        </div>
      </div>
    );
  }

  if (shape === 'triangle_subdivided') {
    return (
      <svg width="160" height="130" viewBox="0 0 160 130">
        <polygon points="80,15 15,115 145,115" fill="#FEF3C7" stroke="#D97706" strokeWidth="3" />
        {/* Inner inverted triangle */}
        <polygon points="47.5,65 112.5,65 80,115" fill="#FDE68A" stroke="#B45309" strokeWidth="2.5" />
      </svg>
    );
  }

  if (shape === 'broken_line') {
    return (
      <div className="flex flex-col items-center">
        <svg width="220" height="90" viewBox="0 0 220 90">
          <polyline points="20,70 90,20 150,75 205,30" fill="none" stroke="#2563EB" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="20" cy="70" r="4" fill="#DC2626" />
          <circle cx="90" cy="20" r="4" fill="#DC2626" />
          <circle cx="150" cy="75" r="4" fill="#DC2626" />
          <circle cx="205" cy="30" r="4" fill="#DC2626" />
          <text x="15" y="85" fontSize="11" fontWeight="bold">A</text>
          <text x="88" y="15" fontSize="11" fontWeight="bold">B</text>
          <text x="150" y="88" fontSize="11" fontWeight="bold">C</text>
          <text x="205" y="25" fontSize="11" fontWeight="bold">D</text>
        </svg>
        <span className="text-xs text-slate-700 font-medium">Đường gấp khúc ABCD gồm các đoạn thẳng nối tiếp</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <div className="w-12 h-12 bg-amber-200 border-2 border-amber-600 rounded-lg flex items-center justify-center font-bold text-amber-900">
        Hình 1
      </div>
      <div className="w-12 h-12 bg-amber-200 border-2 border-amber-600 rounded-lg flex items-center justify-center font-bold text-amber-900">
        Hình 2
      </div>
    </div>
  );
};

// 7. Blocks of Tens & Units
const BlocksTensDiagram: React.FC<{ data: any }> = ({ data }) => {
  const h = data?.hundreds || 0;
  const t = data?.tens || 0;
  const u = data?.units || 0;

  return (
    <div className="flex items-center gap-4 text-xs font-semibold">
      {h > 0 && (
        <div className="flex flex-col items-center bg-blue-100 p-2 rounded-xl border border-blue-300">
          <div className="text-blue-800 text-lg font-bold">{h}</div>
          <div className="text-blue-700">Trăm</div>
        </div>
      )}
      <div className="flex flex-col items-center bg-emerald-100 p-2 rounded-xl border border-emerald-300">
        <div className="text-emerald-800 text-lg font-bold">{t}</div>
        <div className="text-emerald-700">Chục</div>
      </div>
      <div className="flex flex-col items-center bg-amber-100 p-2 rounded-xl border border-amber-300">
        <div className="text-amber-800 text-lg font-bold">{u}</div>
        <div className="text-amber-700">Đơn vị</div>
      </div>
    </div>
  );
};

// 8. Chart Icons Diagram
const ChartIconsDiagram: React.FC<{ data: any }> = ({ data }) => {
  const items = data?.items || [
    { name: 'Táo', count: 5 },
    { name: 'Cam', count: 8 },
    { name: 'Xoài', count: 3 }
  ];

  return (
    <div className="w-full max-w-sm space-y-2">
      <div className="text-xs font-bold text-slate-700 text-center border-b pb-1">
        BẢNG BIỂU ĐỒ TRANH THỐNG KÊ
      </div>
      {items.map((it: any, idx: number) => (
        <div key={idx} className="flex items-center justify-between text-xs py-1 px-2 bg-white rounded-lg border border-amber-200">
          <span className="font-semibold w-16 text-slate-800">{it.name}:</span>
          <div className="flex items-center gap-1 flex-wrap">
            {Array.from({ length: it.count }).map((_, i) => (
              <span key={i} className="text-base select-none">
                {it.name === 'Cam' ? '🍊' : it.name === 'Táo' ? '🍎' : '🥭'}
              </span>
            ))}
          </div>
          <span className="font-bold text-amber-700 ml-2">({it.count})</span>
        </div>
      ))}
    </div>
  );
};
