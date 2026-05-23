'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useOnboardingStore } from '@/store/onboardingStore';
import Link from 'next/link';
import { ChevronLeft, Check } from 'lucide-react';

export default function OnboardingSecurityPage() {
  const router = useRouter();
  const { securityChoice, setSecurityChoice, pin, setPin } = useOnboardingStore();
  const [showPinInput, setShowPinInput] = useState(securityChoice === 'pin');

  const handleChoice = (choice: 'biometric' | 'pin' | 'none') => {
    setSecurityChoice(choice);
    setShowPinInput(choice === 'pin');
    if (choice !== 'pin') {
      setPin('');
    }
  };

  const handleNext = () => {
    if (securityChoice === 'pin' && pin.length < 4) {
      return;
    }
    if (securityChoice) {
      router.push('/onboarding/done');
    }
  };

  const isComplete = securityChoice !== 'none' && (securityChoice !== 'pin' || pin.length >= 4);

  return (
    <div className="min-h-screen bg-[var(--onboarding-bg)] flex flex-col text-[var(--onboarding-text)] px-6 pt-6 pb-8">
      <div className="mb-6">
        <Link href="/onboarding/translator" className="flex items-center text-[var(--onboarding-text)]/80 hover:text-[var(--onboarding-text)]">
          <ChevronLeft className="w-6 h-6 mr-1" />
          Back
        </Link>
      </div>

      <div className="flex-1 max-w-md mx-auto w-full">
        <h1 className="text-3xl font-bold mb-2">Secure your app</h1>
        <p className="text-lg opacity-90 mb-8">
          Protect your medical information by adding a lock.
        </p>

        <div className="space-y-4">
          <button
            onClick={() => handleChoice('biometric')}
            className={`w-full flex items-center justify-between p-4 rounded-md border-2 text-left ${securityChoice === 'biometric' ? 'border-white bg-[#004a91]' : 'border-transparent bg-[#004a91]/50 hover:bg-[#004a91]'}`}
          >
            <div>
              <div className="font-bold text-xl">Face ID / Touch ID</div>
              <div className="text-sm opacity-80">Use your device's biometric security</div>
            </div>
            {securityChoice === 'biometric' && <Check className="w-6 h-6 flex-shrink-0 ml-2" />}
          </button>

          <button
            onClick={() => handleChoice('pin')}
            className={`w-full flex items-center justify-between p-4 rounded-md border-2 text-left ${securityChoice === 'pin' ? 'border-white bg-[#004a91]' : 'border-transparent bg-[#004a91]/50 hover:bg-[#004a91]'}`}
          >
            <div>
              <div className="font-bold text-xl">Create a PIN</div>
              <div className="text-sm opacity-80">Set a 4-digit numeric code</div>
            </div>
            {securityChoice === 'pin' && <Check className="w-6 h-6 flex-shrink-0 ml-2" />}
          </button>

          {showPinInput && (
            <div className="pt-4 pb-2 animate-in fade-in slide-in-from-top-4">
               <label htmlFor="pin" className="block text-lg font-medium mb-2">
                 Enter 4-digit PIN
               </label>
               <input
                 type="password"
                 id="pin"
                 inputMode="numeric"
                 maxLength={4}
                 value={pin}
                 onChange={(e) => setPin(e.target.value.replace(/\D/g, ''))}
                 className="w-full bg-[var(--onboarding-input-bg)] text-[var(--onboarding-input-text)] text-center text-2xl tracking-[1em] p-4 rounded-md outline-none focus:ring-4 focus:ring-yellow-400"
                 placeholder="••••"
               />
            </div>
          )}

          <button
            onClick={() => handleChoice('none')}
            className={`w-full flex items-center justify-between p-4 rounded-md border-2 text-left ${securityChoice === 'none' ? 'border-white bg-[#004a91]' : 'border-transparent bg-[#004a91]/50 hover:bg-[#004a91]'}`}
          >
            <div>
              <div className="font-bold text-xl">No Security</div>
              <div className="text-sm opacity-80">Not recommended. Anyone can access your data.</div>
            </div>
            {securityChoice === 'none' && <Check className="w-6 h-6 flex-shrink-0 ml-2" />}
          </button>
        </div>
      </div>

      <div className="w-full max-w-md mx-auto pt-8">
        <button
          onClick={handleNext}
          disabled={!isComplete && securityChoice !== 'none'}
          className={`w-full font-bold text-xl py-4 rounded-md transition-colors ${
            isComplete || securityChoice === 'none'
              ? 'bg-[var(--onboarding-input-bg)] text-[#005EB8] hover:bg-gray-100'
              : 'bg-[var(--onboarding-input-bg)]/30 text-[var(--onboarding-text)]/50 cursor-not-allowed'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
