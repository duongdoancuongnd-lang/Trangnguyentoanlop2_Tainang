import React, { useRef, useState, useEffect } from 'react';
import { Pencil, Eraser, Trash2, X, Minimize2, Maximize2 } from 'lucide-react';

interface ScratchpadProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Scratchpad: React.FC<ScratchpadProps> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#1E3A8A'); // Navy blue
  const [lineWidth, setLineWidth] = useState(3);
  const [isEraser, setIsEraser] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    if (!isOpen || isMinimized) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas dimensions
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    }
  }, [isOpen, isMinimized]);

  if (!isOpen) return null;

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = isEraser ? '#FFFDF5' : color;
    ctx.lineWidth = isEraser ? 16 : lineWidth;
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div
      className={`fixed z-50 transition-all duration-200 shadow-2xl rounded-2xl sm:rounded-2xl border-2 border-amber-300 bg-[#FFFDF5] overflow-hidden ${
        isMinimized
          ? 'bottom-4 right-4 w-64 h-12'
          : 'inset-2 sm:inset-auto sm:bottom-4 sm:right-6 sm:w-[500px] sm:h-[400px] h-[calc(100%-16px)] sm:h-[400px]'
      }`}
    >
      {/* Scratchpad Header */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-4 py-2.5 flex items-center justify-between text-white select-none">
        <div className="flex items-center gap-2">
          <span className="text-lg">📝</span>
          <span className="font-bold text-sm">Bảng Nháp Toán Học</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="hidden sm:block p-1.5 hover:bg-white/20 rounded-md transition-colors"
            title={isMinimized ? "Mở rộng bảng nháp" : "Thu nhỏ"}
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/20 rounded-md transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
            title="Đóng bảng nháp"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <div className="flex flex-col h-[calc(100%-48px)]">
          {/* Toolbar */}
          <div className="flex items-center justify-between px-3 py-2 bg-amber-100/80 border-b border-amber-200 gap-2 flex-wrap">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setIsEraser(false)}
                className={`py-1.5 px-2.5 rounded-lg flex items-center gap-1 text-xs font-bold min-h-[36px] ${
                  !isEraser ? 'bg-amber-600 text-white shadow-xs' : 'bg-white text-slate-700 hover:bg-amber-50'
                }`}
              >
                <Pencil className="w-4 h-4" />
                <span>Bút</span>
              </button>
              <button
                type="button"
                onClick={() => setIsEraser(true)}
                className={`py-1.5 px-2.5 rounded-lg flex items-center gap-1 text-xs font-bold min-h-[36px] ${
                  isEraser ? 'bg-amber-600 text-white shadow-xs' : 'bg-white text-slate-700 hover:bg-amber-50'
                }`}
              >
                <Eraser className="w-4 h-4" />
                <span>Tẩy</span>
              </button>
            </div>

            {/* Colors */}
            {!isEraser && (
              <div className="flex items-center gap-2">
                {[
                  { hex: '#1E3A8A', title: 'Xanh lam' },
                  { hex: '#DC2626', title: 'Đỏ' },
                  { hex: '#15803D', title: 'Xanh lá' },
                  { hex: '#1E293B', title: 'Đen' }
                ].map((c) => (
                  <button
                    key={c.hex}
                    onClick={() => setColor(c.hex)}
                    style={{ backgroundColor: c.hex }}
                    title={c.title}
                    className={`w-6 h-6 rounded-full border-2 transition-transform ${
                      color === c.hex ? 'scale-125 border-amber-500 shadow-xs' : 'border-white hover:scale-110'
                    }`}
                  />
                ))}
              </div>
            )}

            <button
              onClick={clearCanvas}
              type="button"
              className="py-1.5 px-2.5 bg-rose-50 text-rose-700 hover:bg-rose-100 rounded-lg text-xs font-bold flex items-center gap-1 border border-rose-200 min-h-[36px]"
              title="Xóa trắng bảng nháp"
            >
              <Trash2 className="w-4 h-4" />
              <span>Xóa nháp</span>
            </button>
          </div>

          {/* Canvas area with grid background like student notebook */}
          <div className="relative flex-1 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:16px_16px] touch-none overflow-hidden">
            <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              className="w-full h-full cursor-crosshair touch-none select-none block"
            />
          </div>
        </div>
      )}
    </div>
  );
};
