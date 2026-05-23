import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function OnboardingSplashPage() {
  return (
    <div className="min-h-screen bg-[var(--onboarding-bg)] flex flex-col items-center justify-center text-[var(--onboarding-text)] px-6 text-center">
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Placeholder for Signchronicity Logo */}
        <div className="w-32 h-32 mb-8 relative">
           {/* If we had an actual SVG, we'd place it here. Using placeholder for now */}
           <div className="text-6xl font-bold">S<span className="text-4xl">)</span>)</div>
        </div>

        <h1 className="text-4xl font-bold mb-2 tracking-tight">signchronicity</h1>
        <p className="text-lg font-medium mb-12">your health. your words. your way.</p>

        <div className="mt-8">
           <h2 className="text-2xl font-bold mb-4">Welcome to signchronicity</h2>
           <p className="text-lg">
             A patient-controlled translation tool.
           </p>
        </div>
      </div>

      <div className="w-full pb-12">
        <Link
          href="/onboarding/theme"
          className="w-full block bg-[var(--onboarding-input-bg)] text-[#005EB8] text-center font-bold text-xl py-4 rounded-md transition-colors hover:bg-gray-100"
        >
          Begin setup
        </Link>
      </div>
    </div>
  );
}
