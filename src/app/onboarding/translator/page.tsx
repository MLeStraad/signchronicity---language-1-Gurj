'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useOnboardingStore } from '@/store/onboardingStore';
import Link from 'next/link';
import { ChevronLeft, Check } from 'lucide-react';

const TRANSLATOR_OPTIONS = [
  { id: 'professional', title: 'Professional Medical Translator', desc: 'Connects to a certified human translator' },
  { id: 'ai', title: 'AI Assistant', desc: 'Uses advanced local AI for real-time translation' },
  { id: 'family', title: 'Family Member/Friend', desc: 'I will bring someone to translate for me' },
];

export default function OnboardingTranslatorPage() {
  const router = useRouter();
  const { translatorChoice, setTranslatorChoice } = useOnboardingStore();

  const handleNext = () => {
    if (translatorChoice) {
      router.push('/onboarding/security');
    }
  };

  const isComplete = translatorChoice.length > 0;

  return (
    <div className="min-h-screen bg-[var(--onboarding-bg)] flex flex-col text-[var(--onboarding-text)] px-6 pt-6 pb-8">
      <div className="mb-6">
        <Link href="/onboarding/gp" className="flex items-center text-[var(--onboarding-text)]/80 hover:text-[var(--onboarding-text)]">
          <ChevronLeft className="w-6 h-6 mr-1" />
          Back
        </Link>
      </div>

      <div className="flex-1 max-w-md mx-auto w-full">
        <h1 className="text-3xl font-bold mb-2">Choose your default translator</h1>
        <p className="text-lg opacity-90 mb-8">
          How do you prefer to communicate during your appointments?
        </p>

        <div className="space-y-4">
          {TRANSLATOR_OPTIONS.map((option) => (
            <button
              key={option.id}
              onClick={() => setTranslatorChoice(option.id)}
              className={`w-full flex items-center justify-between p-4 rounded-md border-2 text-left ${translatorChoice === option.id ? 'border-white bg-[#004a91]' : 'border-transparent bg-[#004a91]/50 hover:bg-[#004a91]'}`}
            >
              <div>
                <div className="font-bold text-xl">{option.title}</div>
                <div className="text-sm opacity-80">{option.desc}</div>
              </div>
              {translatorChoice === option.id && <Check className="w-6 h-6 flex-shrink-0 ml-2" />}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full max-w-md mx-auto pt-8">
        <button
          onClick={handleNext}
          disabled={!isComplete}
          className={`w-full font-bold text-xl py-4 rounded-md transition-colors ${
            isComplete
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
