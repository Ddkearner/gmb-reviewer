import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { LandingPage } from '../types';
import { X, Download, Printer, ArrowLeft, Loader2 } from 'lucide-react';
import { buildShareableLandingPageUrl } from '../utils/storage';

interface PrintReadyModalProps {
  page: LandingPage;
  onClose: () => void;
}

export const PrintReadyModal: React.FC<PrintReadyModalProps> = ({ page, onClose }) => {
  const [posterDataUrl, setPosterDataUrl] = useState<string>('');
  const [isReady, setIsReady] = useState(false);
  const fullUrl = buildShareableLandingPageUrl(page);

  useEffect(() => {
    let isMounted = true;

    const generatePoster = async () => {
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

        // 2. Clean Double Border Frame
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 14;
        ctx.strokeRect(50, 50, width - 100, height - 100);

        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 3;
        ctx.strokeRect(66, 66, width - 132, height - 132);

        // 3. Top Google Reviews Tag
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        ctx.fillStyle = '#000000';
        ctx.font = 'bold 36px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        if ('letterSpacing' in ctx) {
          (ctx as any).letterSpacing = '6px';
        }
        ctx.fillText('GOOGLE REVIEWS', width / 2, 160);

        // 4. 5 Solid Stars
        if ('letterSpacing' in ctx) {
          (ctx as any).letterSpacing = '14px';
        }
        ctx.font = 'bold 54px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
        ctx.fillStyle = '#000000';
        ctx.fillText('★ ★ ★ ★ ★', width / 2, 235);

        // 5. Divider Line
        ctx.beginPath();
        ctx.moveTo(width / 2 - 280, 290);
        ctx.lineTo(width / 2 + 280, 290);
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#000000';
        ctx.stroke();

        // 6. Business Name (Auto-scaled)
        if ('letterSpacing' in ctx) {
          (ctx as any).letterSpacing = '-1px';
        }
        const bName = page.businessName.trim();
        let fontSize = 68;
        if (bName.length > 20) fontSize = 56;
        if (bName.length > 30) fontSize = 44;
        ctx.font = `900 ${fontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
        ctx.fillStyle = '#000000';
        ctx.fillText(bName, width / 2, 385);

        // 7. Call To Action Headline
        if ('letterSpacing' in ctx) {
          (ctx as any).letterSpacing = '0px';
        }
        ctx.font = 'bold 44px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
        ctx.fillStyle = '#222222';
        ctx.fillText('Review Us On Google', width / 2, 475);

        // 8. Generate Crisp QR Code
        const qrDataUrl = await QRCode.toDataURL(fullUrl, {
          width: 720,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF',
          },
        });

        const qrImg = new Image();
        qrImg.onload = () => {
          if (!isMounted) return;

          const qrSize = 680;
          const qrX = (width - qrSize) / 2;
          const qrY = 550;

          // Subtle box behind QR
          ctx.strokeStyle = '#E5E5EA';
          ctx.lineWidth = 4;
          ctx.strokeRect(qrX - 10, qrY - 10, qrSize + 20, qrSize + 20);

          ctx.drawImage(qrImg, qrX, qrY, qrSize, qrSize);

          // 9. Instructions below QR
          ctx.fillStyle = '#000000';
          ctx.font = 'bold 38px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
          ctx.fillText('Scan with your smartphone camera', width / 2, 1315);

          ctx.fillStyle = '#555555';
          ctx.font = 'normal 30px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
          ctx.fillText('Open camera → Point at code → Tap the link to rate us', width / 2, 1380);

          // 10. Thank You Footer
          ctx.fillStyle = '#000000';
          ctx.font = '900 36px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
          ctx.fillText('THANK YOU FOR YOUR SUPPORT!', width / 2, 1535);

          const finalUrl = canvas.toDataURL('image/png');
          setPosterDataUrl(finalUrl);
          setIsReady(true);
        };
        qrImg.src = qrDataUrl;
      } catch (err) {
        console.error('Failed to generate poster:', err);
      }
    };

    generatePoster();

    return () => {
      isMounted = false;
    };
  }, [fullUrl, page.businessName]);

  const handleDownloadHD = () => {
    if (!posterDataUrl) return;
    const link = document.createElement('a');
    link.download = `${page.slug}-print-ready-poster.png`;
    link.href = posterDataUrl;
    link.click();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white print:overflow-hidden">
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

        {/* Live A4 Poster Sheet (Identical for on-screen preview AND A4 printing) */}
        <div className="w-full flex justify-center mb-5 overflow-hidden print:m-0 print:p-0">
          <div
            id="print-poster-sheet"
            className="w-full max-w-[340px] aspect-[1/1.414] bg-[#FFFFFF] flex items-center justify-center text-center select-none print:max-w-none print:w-full print:h-full print:p-0"
          >
            {isReady && posterDataUrl ? (
              <img
                src={posterDataUrl}
                alt={`${page.businessName} Google Review Standee`}
                className="w-full h-full object-contain rounded-xl shadow-sm print:rounded-none print:shadow-none print:max-h-screen"
              />
            ) : (
              <div className="w-full h-full min-h-[440px] bg-[#F2F2F7] rounded-xl flex flex-col items-center justify-center gap-2 text-xs text-[#8E8E93]">
                <Loader2 className="w-5 h-5 animate-spin text-[#000000]" />
                <span>Preparing Print Sheet...</span>
              </div>
            )}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row gap-2 print:hidden">
          <button
            type="button"
            onClick={handlePrint}
            disabled={!isReady}
            className="flex-1 min-h-[46px] flex items-center justify-center gap-2 rounded-full bg-[#000000] text-xs font-semibold text-[#FFFFFF] active:scale-95 transition-transform disabled:opacity-50"
          >
            <Printer className="w-4 h-4" />
            <span>Print Directly</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadHD}
            disabled={!isReady}
            className="flex-1 min-h-[46px] flex items-center justify-center gap-2 rounded-full bg-[#F2F2F7] text-xs font-semibold text-[#000000] active:bg-[#E5E5EA] active:scale-95 transition-all disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            <span>Download Poster (HD)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
