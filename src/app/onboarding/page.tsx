'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const OnboardingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-nhs-blue">
      <div className="text-center text-white mb-12">
        <Image
          src="/S-logo.png" 
          alt="Signchronicity Logo"
          width={150}
          height={150}
          className="mx-auto mb-4"
        />
        <h1 className="text-5xl font-bold">signchronicity</h1>
        <p className="text-xl mt-2">your health. your words. your way.</p>
      </div>
      <Link href="/onboarding/dark-light-mode">
        <button className="bg-white text-nhs-blue font-bold py-3 px-12 rounded-lg text-xl shadow-lg hover:bg-gray-200 transition-colors">
          Start
        </button>
      </Link>
    </div>
  );
};

export default OnboardingPage;