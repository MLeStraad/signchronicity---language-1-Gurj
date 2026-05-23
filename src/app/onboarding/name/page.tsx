'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useOnboardingStore } from '@/store/onboardingStore';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function OnboardingNamePage() {
  const router = useRouter();
  const { firstName, lastName, setName } = useOnboardingStore();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName.trim() && lastName.trim()) {
      router.push('/onboarding/dob');
    }
  };

  const isComplete = firstName.trim().length > 0 && lastName.trim().length > 0;

  return (
    <div className="min-h-screen bg-[var(--onboarding-bg)] flex flex-col text-[var(--onboarding-text)] px-6 pt-6 pb-8">
      <div className="mb-6">
        <Link href="/onboarding/hello" className="flex items-center text-[var(--onboarding-text)]/80 hover:text-[var(--onboarding-text)]">
          <ChevronLeft className="w-6 h-6 mr-1" />
          Back
        </Link>
      </div>

      <div className="flex-1 max-w-md mx-auto w-full">
        <h1 className="text-3xl font-bold mb-8">What is your name?</h1>

        <form id="nameForm" onSubmit={handleNext} className="space-y-6">
          <div>
            <label htmlFor="firstName" className="block text-lg font-medium mb-2">
              First name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setName(e.target.value, lastName)}
              className="w-full bg-[var(--onboarding-input-bg)] text-[var(--onboarding-input-text)] text-lg p-4 rounded-md outline-none focus:ring-4 focus:ring-yellow-400"
              placeholder="e.g. Jane"
              required
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-lg font-medium mb-2">
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setName(firstName, e.target.value)}
              className="w-full bg-[var(--onboarding-input-bg)] text-[var(--onboarding-input-text)] text-lg p-4 rounded-md outline-none focus:ring-4 focus:ring-yellow-400"
              placeholder="e.g. Doe"
              required
            />
          </div>
        </form>
      </div>

      <div className="w-full max-w-md mx-auto pt-8">
        <button
          form="nameForm"
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
