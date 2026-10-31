import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { LandingPage } from '../types';
import { X, Download, Printer, ArrowLeft, Star } from 'lucide-react';
import { buildShareableLandingPageUrl } from '../utils/storage';

interface PrintReadyModalProps {
  page: LandingPage;
  onClose: () => void;
}

export const PrintReadyModal: React.FC<PrintReadyModalProps> = ({ page, onClose }) => {
  const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const fullUrl = buildShareableLandingPageUrl(page);

  useEffect(() => {
    if (previewCanvasRef.current) {
      QRCode.toCanvas(previewCanvasRef.current, fullUrl, {
        width: 240,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
      });
    }
  }, [fullUrl]);

  // High-Resolution 300DPI equivalent Canvas Generation for Download
  const handleDownloadHD = async () => {
    try {
      const width = 1240;
      const height = 1754; // A4 standard ratio
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // 1. Pure White Background
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, width, height);

      // 2. Clean Modern Outer Frame Border
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 14;
      ctx.strokeRect(50, 50, width - 100, height - 100);

      // Inner subtle border
      ctx.strokeStyle = '#222222';
      ctx.lineWidth = 3;
      ctx.strokeRect(66, 66, width - 132, height - 132);

      // 3. Top Google Reviews Tag
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      ctx.fillStyle = '#000000';
      ctx.font = 'bold 36px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
      ctx.letterSpacing = '6px';
      ctx.fillText('GOOGLE REVIEWS', width / 2, 170);

      // 4. 5 Solid Stars
      ctx.font = 'bold 54px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
      ctx.letterSpacing = '14px';
      ctx.fillStyle = '#000000';
      ctx.fillText('★ ★ ★ ★ ★', width / 2, 250);

      // 5. Divider Line
      ctx.beginPath();
      ctx.moveTo(width / 2 - 260, 310);
      ctx.lineTo(width / 2 + 260, 310);
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#000000';
      ctx.stroke();

      // 6. Business Name
      ctx.fillStyle = '#000000';
      ctx.font = '900 68px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
      ctx.letterSpacing = '-1px';

      let bName = page.businessName.trim();
      if (bName.length > 28) {
        ctx.font = '900 52px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
      }
      ctx.fillText(bName, width / 2, 400);

      // 7. Call To Action Headline
      ctx.font = 'bold 44px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
      ctx.fillStyle = '#333333';
      ctx.letterSpacing = '0px';
      ctx.fillText('Review Us On Google', width / 2, 490);

      // 8. Generate Crisp QR Code
      const qrDataUrl = await QRCode.toDataURL(fullUrl, {
        width: 660,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
      });

      const qrImg = new Image();
      qrImg.onload = () => {
        // Draw centered QR Code
        const qrSize = 640;
        const qrX = (width - qrSize) / 2;
        const qrY = 570;

        // Subtle box behind QR
        ctx.strokeStyle = '#E5E5EA';
        ctx.lineWidth = 4;
        ctx.strokeRect(qrX - 10, qrY - 10, qrSize + 20, qrSize + 20);

        ctx.drawImage(qrImg, qrX, qrY, qrSize, qrSize);

        // 9. Instructions below QR
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 38px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
        ctx.letterSpacing = '1px';
        ctx.fillText('Scan with your smartphone camera', width / 2, 1310);

        ctx.fillStyle = '#666666';
        ctx.font = 'normal 30px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
        ctx.fillText('Open camera → Point at code → Tap the link to rate us', width / 2, 1375);

        // 10. Thank You Footer
        ctx.fillStyle = '#111111';
        ctx.font = 'bold 36px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
        ctx.fillText('Thank You For Your Support!', width / 2, 1530);

        // Download trigger
        const link = document.createElement('a');
        link.download = `${page.slug}-print-ready-poster.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      };
      qrImg.src = qrDataUrl;
    } catch (err) {
      console.error('Failed to generate HD print sheet:', err);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white">
      <div className="relative w-full max-w-md bg-[#FFFFFF] rounded-3xl p-5 sm:p-6 text-[#000000] my-auto shadow-2xl print:shadow-none print:p-0 print:max-w-none print:rounded-none">
        {/* Header Bar */}
        <div className="flex items-center justify-between mb-4 print:hidden">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-[#F2F2F7] text-xs font-semibold text-[#000000] active:scale-95 transition-transform"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>

          <h3 className="text-sm font-bold text-[#000000]">Print Ready Standee</h3>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#E5E5EA] flex items-center justify-center text-[#8E8E93] active:text-[#000000]"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Live A4 Print Sheet Preview */}
        <div className="w-full flex justify-center mb-5 overflow-hidden print:m-0 print:p-0">
          <div
            id="print-poster-sheet"
            className="w-full max-w-[340px] aspect-[1/1.414] bg-[#FFFFFF] border-4 border-[#000000] rounded-2xl p-5 flex flex-col items-center justify-between text-center select-none shadow-sm print:max-w-none print:w-full print:h-full print:border-8 print:p-12 print:rounded-none"
          >
            {/* Top Badge */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-[11px] sm:text-xs font-black tracking-[0.2em] text-[#000000] uppercase">
                Google Reviews
              </span>
              <div className="flex items-center gap-1 text-[#000000]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-black stroke-black" />
                ))}
              </div>
              <div className="w-20 h-0.5 bg-black mt-1" />
            </div>

            {/* Business Name & Main Headline */}
            <div className="w-full my-2">
              <h1 className="text-xl sm:text-2xl font-black text-[#000000] tracking-tight leading-tight truncate px-1">
                {page.businessName}
              </h1>
              <p className="text-xs sm:text-sm font-bold text-[#444444] mt-0.5">
                Review Us On Google
              </p>
            </div>

            {/* Sharp Black & White QR */}
            <div className="p-2 border-2 border-[#E5E5EA] rounded-xl bg-white flex items-center justify-center my-1">
              <canvas ref={previewCanvasRef} className="rounded max-w-[190px] h-auto" />
            </div>

            {/* Bottom Instructions */}
            <div className="flex flex-col items-center gap-0.5 mt-1">
              <p className="text-xs font-bold text-[#000000]">
                Scan with your phone camera
              </p>
              <p className="text-[10px] text-[#777777]">
                Open camera → Point at code → Tap the link
              </p>
              <p className="text-[11px] font-black text-[#000000] mt-1.5 uppercase tracking-wide">
                Thank You For Your Support!
              </p>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row gap-2 print:hidden">
          <button
            type="button"
            onClick={handlePrint}
            className="flex-1 min-h-[46px] flex items-center justify-center gap-2 rounded-full bg-[#000000] text-xs font-semibold text-[#FFFFFF] active:scale-95 transition-transform"
          >
            <Printer className="w-4 h-4" />
            <span>Print Directly</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadHD}
            className="flex-1 min-h-[46px] flex items-center justify-center gap-2 rounded-full bg-[#F2F2F7] text-xs font-semibold text-[#000000] active:bg-[#E5E5EA] active:scale-95 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Poster (HD)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
