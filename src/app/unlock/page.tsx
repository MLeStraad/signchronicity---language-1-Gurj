'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useOnboardingStore } from '@/store/onboardingStore';
import { Fingerprint } from 'lucide-react';

export default function UnlockPage() {
  const router = useRouter();
  const { securityChoice, pin } = useOnboardingStore();
  const [enteredPin, setEnteredPin] = useState('');
  const [error, setError] = useState(false);

  // If no security is set, redirect to home immediately
  if (securityChoice === 'none') {
    router.push('/');
    return null;
  }

  const handlePinInput = (digit: string) => {
    if (enteredPin.length < 4) {
      const newPin = enteredPin + digit;
      setEnteredPin(newPin);
      setError(false);

      if (newPin.length === 4) {
        if (newPin === pin) {
          // Success
          router.push('/');
        } else {
          // Error
          setError(true);
          setTimeout(() => setEnteredPin(''), 1000);
        }
      }
    }
  };

  const handleDelete = () => {
    setEnteredPin(enteredPin.slice(0, -1));
    setError(false);
  };

  const handleBiometricUnlock = () => {
    // In a real app this would call native WebAuthn/Biometric APIs
    // For this mockup, we just let them in
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-[var(--onboarding-bg)] flex flex-col items-center justify-center text-[var(--onboarding-text)] px-6">
      <div className="w-24 h-24 mb-6 relative">
         <div className="text-5xl font-bold text-center">S<span className="text-3xl">)</span>)</div>
      </div>

      <h1 className="text-3xl font-bold mb-1 tracking-tight">signchronicity</h1>
      <p className="text-sm font-medium mb-12">your health. your words. your way.</p>

      {securityChoice === 'pin' ? (
        <div className="w-full max-w-xs flex flex-col items-center">
          <div className="flex space-x-4 mb-6">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-12 h-1 border-b-2 transition-colors ${
                  error ? 'border-red-500' :
                  i < enteredPin.length ? 'border-white' : 'border-white/50'
                }`}
              />
            ))}
          </div>
          <p className={`mb-8 ${error ? 'text-red-300' : 'text-[var(--onboarding-text)]'}`}>
            {error ? 'Incorrect PIN' : 'Enter your PIN to unlock'}
          </p>

          <div className="grid grid-cols-3 gap-6 w-full max-w-[250px]">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handlePinInput(num.toString())}
                className="w-16 h-16 rounded-full bg-[var(--onboarding-input-bg)]/10 flex items-center justify-center text-2xl font-bold hover:bg-[var(--onboarding-input-bg)]/20 active:bg-[var(--onboarding-input-bg)]/30 transition-colors"
              >
                {num}
              </button>
            ))}
            <div className="w-16 h-16"></div> {/* Empty space */}
            <button
              onClick={() => handlePinInput('0')}
              className="w-16 h-16 rounded-full bg-[var(--onboarding-input-bg)]/10 flex items-center justify-center text-2xl font-bold hover:bg-[var(--onboarding-input-bg)]/20 active:bg-[var(--onboarding-input-bg)]/30 transition-colors"
            >
              0
            </button>
            <button
              onClick={handleDelete}
              className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-medium hover:bg-[var(--onboarding-input-bg)]/10 active:bg-[var(--onboarding-input-bg)]/20 transition-colors"
            >
              DEL
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-xs flex flex-col items-center mt-8">
          <button
            onClick={handleBiometricUnlock}
            className="flex flex-col items-center justify-center hover:opacity-80 transition-opacity"
          >
            <div className="w-24 h-24 rounded-full border-4 border-white flex items-center justify-center mb-6">
               <Fingerprint className="w-12 h-12" />
            </div>
            <p className="text-xl">Use Face ID / Touch ID</p>
            <p className="text-sm opacity-80 mt-2">to unlock</p>
          </button>
        </div>
      )}
    </div>
  );
}
