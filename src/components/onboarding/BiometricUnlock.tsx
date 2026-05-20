'use client';

import { Button } from '@/components/ui/button';
import { Fingerprint } from 'lucide-react';
import { Logo } from '@/components/Logo';

export function BiometricUnlock({ onSuccess }: { onSuccess: () => void }) {
  const handleUnlock = () => {
    // In a real app, this would trigger the Web Authentication API
    // For this mockup, we just assume success after a click to simulate the prompt
    onSuccess();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 animate-in fade-in duration-500 max-w-md mx-auto sm:border-x shadow-xl">
      <div className="flex-1 flex flex-col items-center justify-center w-full space-y-12">

        <div className="w-full flex justify-center px-4 transform scale-75 sm:scale-100">
          <Logo />
        </div>

        <div className="flex flex-col items-center space-y-8 mt-12">
          <button
            onClick={handleUnlock}
            className="w-32 h-32 rounded-full bg-[#1D5EBC] text-white flex items-center justify-center shadow-lg hover:bg-blue-800 transition-colors animate-pulse"
            aria-label="Tap to unlock with Biometrics"
          >
            <Fingerprint className="w-16 h-16" strokeWidth={1} />
          </button>

          <p className="text-xl font-bold text-[#1D5EBC]">
            Unlock with Biometrics
          </p>
          <p className="text-sm text-gray-500">
            Tap the fingerprint to simulate unlocking
          </p>
        </div>

      </div>
    </div>
  );
}
