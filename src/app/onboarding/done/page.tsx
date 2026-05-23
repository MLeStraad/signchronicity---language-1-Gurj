'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useOnboardingStore } from '@/store/onboardingStore';
import { CheckCircle } from 'lucide-react';

export default function OnboardingDonePage() {
  const router = useRouter();
  const { completeOnboarding, firstName } = useOnboardingStore();

  const handleFinish = () => {
    completeOnboarding();
    // In a real flow, we'd redirect to the dashboard or the unlock screen depending on setup
    // For now, redirecting to the main page / dashboard
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-[var(--onboarding-bg)] flex flex-col items-center justify-center text-[var(--onboarding-text)] px-6 text-center">
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md">
        <div className="bg-[var(--onboarding-input-bg)] rounded-full p-4 mb-8">
          <CheckCircle className="w-24 h-24 text-[#005EB8]" />
        </div>

        <h1 className="text-4xl font-bold mb-4">All done!</h1>
        <p className="text-xl mb-8 leading-relaxed">
          Thanks {firstName || 'there'}. Your profile is set up and ready to use.
        </p>
      </div>

      <div className="w-full max-w-md mx-auto pb-12">
        <button
          onClick={handleFinish}
          className="w-full block bg-[var(--onboarding-input-bg)] text-[#005EB8] text-center font-bold text-xl py-4 rounded-md transition-colors hover:bg-gray-100"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
