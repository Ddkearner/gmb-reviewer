import React, { useState, useEffect } from 'react';

interface PasscodeLockProps {
  onSuccess: () => void;
}

const CORRECT_PIN = '124520';

export const PasscodeLock: React.FC<PasscodeLockProps> = ({ onSuccess }) => {
  const [pin, setPin] = useState<string>('');
  const [error, setError] = useState(false);

  const handleDigit = (digit: string) => {
    if (pin.length < 6) {
      const nextPin = pin + digit;
      setPin(nextPin);
      if (nextPin.length === 6) {
        if (nextPin === CORRECT_PIN) {
          onSuccess();
        } else {
          setError(true);
          setTimeout(() => {
            setPin('');
            setError(false);
          }, 400);
        }
      }
    }
  };

  const handleDelete = () => {
    setPin(prev => prev.slice(0, -1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= '0' && e.key <= '9') {
        handleDigit(e.key);
      } else if (e.key === 'Backspace') {
        handleDelete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pin]);

  const numpad = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'del'];

  return (
    <div className="min-h-[100dvh] w-full bg-[#F2F2F7] flex flex-col items-center justify-center px-4 py-6 select-none safe-top safe-bottom">
      <div className="w-full max-w-[280px] flex flex-col items-center">
        {/* 6 PIN dots */}
        <div className={`flex gap-3 mb-8 sm:mb-10 ${error ? 'animate-bounce' : ''}`}>
          {[0, 1, 2, 3, 4, 5].map(i => (
            <div
              key={i}
              className={`w-3.5 h-3.5 rounded-full transition-colors ${
                i < pin.length ? 'bg-[#000000]' : 'bg-[#D1D1D6]'
              }`}
            />
          ))}
        </div>

        {/* Responsive Numpad */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full">
          {numpad.map((btn, i) => {
            if (btn === '') return <div key={i} />;
            if (btn === 'del') {
              return (
                <button
                  key={i}
                  type="button"
                  onClick={handleDelete}
                  className="w-14 h-14 sm:w-16 sm:h-16 mx-auto flex items-center justify-center text-xs sm:text-sm font-medium text-[#8E8E93] active:text-[#000000] active:scale-95"
                >
                  Delete
                </button>
              );
            }
            return (
              <button
                key={i}
                type="button"
                onClick={() => handleDigit(btn)}
                className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-[#FFFFFF] text-xl sm:text-2xl font-medium text-[#000000] active:bg-[#E5E5EA] active:scale-95 transition-transform"
              >
                {btn}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
