'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useOnboardingStore } from '@/store/onboardingStore';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function OnboardingAddressPage() {
  const router = useRouter();
  const { addressLine1, addressLine2, city, postcode, setAddress } = useOnboardingStore();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (addressLine1.trim() && city.trim() && postcode.trim()) {
      router.push('/onboarding/phone');
    }
  };

  const isComplete = addressLine1.trim().length > 0 && city.trim().length > 0 && postcode.trim().length > 0;

  return (
    <div className="min-h-screen bg-[var(--onboarding-bg)] flex flex-col text-[var(--onboarding-text)] px-6 pt-6 pb-8">
      <div className="mb-6">
        <Link href="/onboarding/dob" className="flex items-center text-[var(--onboarding-text)]/80 hover:text-[var(--onboarding-text)]">
          <ChevronLeft className="w-6 h-6 mr-1" />
          Back
        </Link>
      </div>

      <div className="flex-1 max-w-md mx-auto w-full">
        <h1 className="text-3xl font-bold mb-8">What is your address?</h1>

        <form id="addressForm" onSubmit={handleNext} className="space-y-4">
          <div>
            <label htmlFor="addressLine1" className="block text-lg font-medium mb-2">
              Address line 1
            </label>
            <input
              type="text"
              id="addressLine1"
              value={addressLine1}
              onChange={(e) => setAddress({ addressLine1: e.target.value, addressLine2, city, postcode })}
              className="w-full bg-[var(--onboarding-input-bg)] text-[var(--onboarding-input-text)] text-lg p-4 rounded-md outline-none focus:ring-4 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label htmlFor="addressLine2" className="block text-lg font-medium mb-2">
              Address line 2 (optional)
            </label>
            <input
              type="text"
              id="addressLine2"
              value={addressLine2}
              onChange={(e) => setAddress({ addressLine1, addressLine2: e.target.value, city, postcode })}
              className="w-full bg-[var(--onboarding-input-bg)] text-[var(--onboarding-input-text)] text-lg p-4 rounded-md outline-none focus:ring-4 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-lg font-medium mb-2">
              Town or city
            </label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setAddress({ addressLine1, addressLine2, city: e.target.value, postcode })}
              className="w-full bg-[var(--onboarding-input-bg)] text-[var(--onboarding-input-text)] text-lg p-4 rounded-md outline-none focus:ring-4 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label htmlFor="postcode" className="block text-lg font-medium mb-2">
              Postcode
            </label>
            <input
              type="text"
              id="postcode"
              value={postcode}
              onChange={(e) => setAddress({ addressLine1, addressLine2, city, postcode: e.target.value.toUpperCase() })}
              className="w-full md:w-1/2 bg-[var(--onboarding-input-bg)] text-[var(--onboarding-input-text)] text-lg p-4 rounded-md outline-none focus:ring-4 focus:ring-yellow-400 uppercase"
              required
            />
          </div>
        </form>
      </div>

      <div className="w-full max-w-md mx-auto pt-8">
        <button
          form="addressForm"
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
