'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useOnboardingStore } from '@/store/onboardingStore';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function OnboardingPhonePage() {
  const router = useRouter();
  const { phoneNumber, setPhoneNumber } = useOnboardingStore();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim()) {
      router.push('/onboarding/gp');
    }
  };

  const isComplete = phoneNumber.trim().length >= 10;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and spaces/plus
    const val = e.target.value;
    if (val === '' || /^[\d\s+]+$/.test(val)) {
      setPhoneNumber(val);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--onboarding-bg)] flex flex-col text-[var(--onboarding-text)] px-6 pt-6 pb-8">
      <div className="mb-6">
        <Link href="/onboarding/address" className="flex items-center text-[var(--onboarding-text)]/80 hover:text-[var(--onboarding-text)]">
          <ChevronLeft className="w-6 h-6 mr-1" />
          Back
        </Link>
      </div>

      <div className="flex-1 max-w-md mx-auto w-full">
        <h1 className="text-3xl font-bold mb-2">What is your telephone number?</h1>
        <p className="text-lg opacity-90 mb-8">
          We'll only use this if we need to contact you about your translation settings.
        </p>

        <form id="phoneForm" onSubmit={handleNext}>
          <div>
            <label htmlFor="phoneNumber" className="block text-lg font-medium mb-2">
              Telephone number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handleChange}
              className="w-full bg-[var(--onboarding-input-bg)] text-[var(--onboarding-input-text)] text-lg p-4 rounded-md outline-none focus:ring-4 focus:ring-yellow-400"
              placeholder="e.g. 07700 900 982"
              required
            />
          </div>
        </form>
      </div>

      <div className="w-full max-w-md mx-auto pt-8">
        <button
          form="phoneForm"
          type="submit"
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
