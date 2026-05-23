'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useOnboardingStore } from '@/store/onboardingStore';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function OnboardingGpPage() {
  const router = useRouter();
  const { gpName, gpPractice, setGp } = useOnboardingStore();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (gpName.trim() && gpPractice.trim()) {
      router.push('/onboarding/translator');
    }
  };

  const isComplete = gpName.trim().length > 0 && gpPractice.trim().length > 0;

  return (
    <div className="min-h-screen bg-[var(--onboarding-bg)] flex flex-col text-[var(--onboarding-text)] px-6 pt-6 pb-8">
      <div className="mb-6">
        <Link href="/onboarding/phone" className="flex items-center text-[var(--onboarding-text)]/80 hover:text-[var(--onboarding-text)]">
          <ChevronLeft className="w-6 h-6 mr-1" />
          Back
        </Link>
      </div>

      <div className="flex-1 max-w-md mx-auto w-full">
        <h1 className="text-3xl font-bold mb-2">Who is your GP?</h1>
        <p className="text-lg opacity-90 mb-8">
          This helps clinicians know who to contact with any notes from your consultations.
        </p>

        <form id="gpForm" onSubmit={handleNext} className="space-y-6">
          <div>
            <label htmlFor="gpName" className="block text-lg font-medium mb-2">
              GP's Name
            </label>
            <input
              type="text"
              id="gpName"
              value={gpName}
              onChange={(e) => setGp(e.target.value, gpPractice)}
              className="w-full bg-[var(--onboarding-input-bg)] text-[var(--onboarding-input-text)] text-lg p-4 rounded-md outline-none focus:ring-4 focus:ring-yellow-400"
              placeholder="e.g. Dr. Smith"
              required
            />
          </div>

          <div>
            <label htmlFor="gpPractice" className="block text-lg font-medium mb-2">
              GP Practice Name
            </label>
            <input
              type="text"
              id="gpPractice"
              value={gpPractice}
              onChange={(e) => setGp(gpName, e.target.value)}
              className="w-full bg-[var(--onboarding-input-bg)] text-[var(--onboarding-input-text)] text-lg p-4 rounded-md outline-none focus:ring-4 focus:ring-yellow-400"
              placeholder="e.g. Riverside Surgery"
              required
            />
          </div>
        </form>
      </div>

      <div className="w-full max-w-md mx-auto pt-8">
        <button
          form="gpForm"
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
