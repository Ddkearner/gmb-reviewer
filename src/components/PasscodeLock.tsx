import React, { useState } from 'react';

interface PasscodeLockProps {
  onSuccess: () => void;
}

export const PasscodeLock: React.FC<PasscodeLockProps> = ({ onSuccess }) => {
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleUnlock = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMsg('');

    const trimmed = password.trim();
    if (trimmed === '124520') {
      try {
        sessionStorage.setItem('gmb_admin_auth', 'true');
        localStorage.setItem('gmb_admin_auth', 'true');
      } catch {}
      onSuccess();
    } else {
      setErrorMsg('Incorrect password');
      setPassword('');
    }
  };

  return (
    <div className="min-h-[100dvh] w-full bg-[#F2F2F7] flex flex-col items-center justify-center px-4 py-6 select-none safe-top safe-bottom">
      <div className="w-full max-w-xs bg-[#FFFFFF] rounded-3xl p-6 text-center text-[#000000]">
        <h2 className="text-xl font-bold tracking-tight mb-1">
          Admin Access
        </h2>
        <p className="text-xs text-[#8E8E93] mb-5">
          Enter password to open management panel
        </p>

        <form onSubmit={handleUnlock} className="space-y-3">
          <input
            type="password"
            inputMode="numeric"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
              setErrorMsg('');
              // If user typed 6 digits and it matches 124520, auto unlock immediately
              if (e.target.value === '124520') {
                try {
                  sessionStorage.setItem('gmb_admin_auth', 'true');
                  localStorage.setItem('gmb_admin_auth', 'true');
                } catch {}
                onSuccess();
              }
            }}
            placeholder="Enter passcode"
            className="w-full bg-[#F2F2F7] rounded-xl px-4 py-3 text-center text-lg tracking-widest text-[#000000] focus:outline-none placeholder:tracking-normal placeholder:text-xs placeholder:text-[#8E8E93]"
            autoFocus
          />

          {errorMsg && (
            <p className="text-xs text-red-600 font-medium">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            className="w-full min-h-[46px] rounded-full bg-[#000000] text-xs font-semibold text-[#FFFFFF] active:scale-95 transition-transform"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
};
