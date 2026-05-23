'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useOnboardingStore } from '@/store/onboardingStore';
import { Check } from 'lucide-react';

export default function OnboardingThemePage() {
  const router = useRouter();
  const { theme, setTheme } = useOnboardingStore();

  const handleNext = () => {
    router.push('/onboarding/terms');
  };

  return (
    <div className="min-h-screen bg-[var(--onboarding-bg)] flex flex-col text-[var(--onboarding-text)] px-6 pt-12 pb-8">
      <div className="flex-1 max-w-md mx-auto w-full">
        <h1 className="text-3xl font-bold mb-4">Choose your theme</h1>
        <p className="text-lg mb-8">
          Select a theme for the application. You can change this later in settings.
        </p>

        <div className="space-y-4">
          <button
            onClick={() => setTheme('light')}
            className={`w-full flex items-center justify-between p-4 rounded-md border-2 text-left ${theme === 'light' ? 'border-white bg-[#004a91]' : 'border-transparent bg-[#004a91]/50 hover:bg-[#004a91]'}`}
          >
            <div>
              <div className="font-bold text-xl">Light Mode</div>
              <div className="text-sm opacity-80">Default appearance</div>
            </div>
            {theme === 'light' && <Check className="w-6 h-6" />}
          </button>

          <button
            onClick={() => setTheme('dark')}
            className={`w-full flex items-center justify-between p-4 rounded-md border-2 text-left ${theme === 'dark' ? 'border-white bg-[#004a91]' : 'border-transparent bg-[#004a91]/50 hover:bg-[#004a91]'}`}
          >
            <div>
              <div className="font-bold text-xl">Dark Mode</div>
              <div className="text-sm opacity-80">Easier on the eyes in low light</div>
            </div>
            {theme === 'dark' && <Check className="w-6 h-6" />}
          </button>

          <button
            onClick={() => setTheme('accessible')}
            className={`w-full flex items-center justify-between p-4 rounded-md border-2 text-left ${theme === 'accessible' ? 'border-white bg-[#004a91]' : 'border-transparent bg-[#004a91]/50 hover:bg-[#004a91]'}`}
          >
            <div>
              <div className="font-bold text-xl">High Contrast</div>
              <div className="text-sm opacity-80">Maximum readability</div>
            </div>
            {theme === 'accessible' && <Check className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className="w-full max-w-md mx-auto pt-8">
        <button
          onClick={handleNext}
          className="w-full bg-[var(--onboarding-input-bg)] text-[#005EB8] font-bold text-xl py-4 rounded-md transition-colors hover:bg-gray-100"
        >
          Next
        </button>
      </div>
    </div>
  );
}
