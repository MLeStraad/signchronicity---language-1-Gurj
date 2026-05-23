import React from 'react';
import Link from 'next/link';

export default function OnboardingHelloPage() {
  return (
    <div className="min-h-screen bg-[var(--onboarding-bg)] flex flex-col items-center justify-center text-[var(--onboarding-text)] px-6 text-center">
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md">
        <h1 className="text-5xl font-bold mb-6">Hello!</h1>
        <p className="text-xl mb-8 leading-relaxed">
          Let's set up your profile. We'll ask for some basic details to help your clinicians know who you are.
        </p>
        <p className="text-lg opacity-90">
          This should only take a couple of minutes.
        </p>
      </div>

      <div className="w-full max-w-md mx-auto pb-12">
        <Link
          href="/onboarding/name"
          className="w-full block bg-[var(--onboarding-input-bg)] text-[#005EB8] text-center font-bold text-xl py-4 rounded-md transition-colors hover:bg-gray-100"
        >
          Let's go
        </Link>
      </div>
    </div>
  );
}
