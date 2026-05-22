'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useOnboardingStore } from '@/store/onboardingStore';

const CompletePage = () => {
  const router = useRouter();
  const completeOnboarding = useOnboardingStore((state) => state.completeOnboarding);

  useEffect(() => {
    completeOnboarding();
  }, [completeOnboarding]);

  const handleComplete = () => {
    router.push('/unlock');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4 text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold text-nhs-blue">You are all set.</h1>
        <p className="mt-4 text-lg text-gray-700">
          Thank you for setting up your profile.
        </p>
        <button 
          onClick={handleComplete} 
          className="mt-8 bg-nhs-blue text-white font-bold py-3 px-12 rounded-lg text-xl shadow-lg hover:bg-blue-700 transition-colors"
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default CompletePage;
