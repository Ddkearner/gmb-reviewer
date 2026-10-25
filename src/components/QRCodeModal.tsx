import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { LandingPage } from '../types';
import { X, Download } from 'lucide-react';

interface QRCodeModalProps {
  page: LandingPage;
  onClose: () => void;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ page, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fullUrl = `${window.location.origin}/${page.slug}`;

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, fullUrl, {
        width: 220,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
    }
  }, [fullUrl]);

  const handleDownload = () => {
    if (!canvasRef.current) return;
    const url = canvasRef.current.toDataURL('image/png');
    const a = document.createElement('a');
    a.download = `${page.slug}-qr.png`;
    a.href = url;
    a.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="relative w-full max-w-[290px] bg-[#FFFFFF] rounded-3xl p-5 text-center text-[#000000]">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#E5E5EA] flex items-center justify-center text-[#8E8E93] active:text-[#000000]"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="text-sm sm:text-base font-bold text-[#000000] mb-3 pr-6 truncate">
          {page.businessName}
        </h3>

        <div className="bg-[#F2F2F7] p-3 rounded-2xl flex justify-center mb-4">
          <canvas ref={canvasRef} className="rounded-lg max-w-[200px] h-auto" />
        </div>

        <button
          type="button"
          onClick={handleDownload}
          className="w-full min-h-[46px] flex items-center justify-center gap-1.5 rounded-full bg-[#000000] text-xs font-semibold text-[#FFFFFF] active:scale-95"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download QR</span>
        </button>
      </div>
    </div>
  );
};
