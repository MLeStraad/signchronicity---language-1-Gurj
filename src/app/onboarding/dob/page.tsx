'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useOnboardingStore } from '@/store/onboardingStore';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function OnboardingDobPage() {
  const router = useRouter();
  const { dob, setDob } = useOnboardingStore();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (dob.day && dob.month && dob.year) {
      router.push('/onboarding/address');
    }
  };

  const isComplete = dob.day.trim().length > 0 && dob.month.trim().length > 0 && dob.year.trim().length >= 4;

  const handleChange = (field: 'day' | 'month' | 'year', value: string) => {
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return;

    // Length limits
    if (field === 'day' && value.length > 2) return;
    if (field === 'month' && value.length > 2) return;
    if (field === 'year' && value.length > 4) return;

    setDob({ ...dob, [field]: value });
  };

  return (
    <div className="min-h-screen bg-[var(--onboarding-bg)] flex flex-col text-[var(--onboarding-text)] px-6 pt-6 pb-8">
      <div className="mb-6">
        <Link href="/onboarding/name" className="flex items-center text-[var(--onboarding-text)]/80 hover:text-[var(--onboarding-text)]">
          <ChevronLeft className="w-6 h-6 mr-1" />
          Back
        </Link>
      </div>

      <div className="flex-1 max-w-md mx-auto w-full">
        <h1 className="text-3xl font-bold mb-2">What is your date of birth?</h1>
        <p className="text-lg opacity-90 mb-8">For example, 31 3 1980</p>

        <form id="dobForm" onSubmit={handleNext}>
          <div className="flex space-x-4">
            <div className="w-20">
              <label htmlFor="day" className="block text-lg font-medium mb-2">
                Day
              </label>
              <input
                type="text"
                id="day"
                inputMode="numeric"
                value={dob.day}
                onChange={(e) => handleChange('day', e.target.value)}
                className="w-full bg-[var(--onboarding-input-bg)] text-[var(--onboarding-input-text)] text-center text-lg p-4 rounded-md outline-none focus:ring-4 focus:ring-yellow-400"
                placeholder="DD"
                required
              />
            </div>

            <div className="w-20">
              <label htmlFor="month" className="block text-lg font-medium mb-2">
                Month
              </label>
              <input
                type="text"
                id="month"
                inputMode="numeric"
                value={dob.month}
                onChange={(e) => handleChange('month', e.target.value)}
                className="w-full bg-[var(--onboarding-input-bg)] text-[var(--onboarding-input-text)] text-center text-lg p-4 rounded-md outline-none focus:ring-4 focus:ring-yellow-400"
                placeholder="MM"
                required
              />
            </div>

            <div className="w-32">
              <label htmlFor="year" className="block text-lg font-medium mb-2">
                Year
              </label>
              <input
                type="text"
                id="year"
                inputMode="numeric"
                value={dob.year}
                onChange={(e) => handleChange('year', e.target.value)}
                className="w-full bg-[var(--onboarding-input-bg)] text-[var(--onboarding-input-text)] text-center text-lg p-4 rounded-md outline-none focus:ring-4 focus:ring-yellow-400"
                placeholder="YYYY"
                required
              />
            </div>
          </div>
        </form>
      </div>

      <div className="w-full max-w-md mx-auto pt-8">
        <button
          form="dobForm"
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
