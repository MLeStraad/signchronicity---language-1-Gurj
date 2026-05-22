'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import OnboardingProgressBar from '@/components/OnboardingProgressBar';

const SecurityPage = () => {
  const [securityChoice, setSecurityChoice] = useState('fingerprint');

  const handleSaveChoice = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('securityChoice', securityChoice);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <OnboardingProgressBar currentStep={7} totalSteps={7} />
        <h1 className="text-4xl font-bold text-nhs-blue mb-2 text-center">Security.</h1>
        <p className="text-lg text-gray-600 mb-6 text-center">Choose a way to unlock the app.</p>

        <div className="flex justify-center space-x-4 mb-8">
          <div 
            className={`cursor-pointer p-4 border-4 ${securityChoice === 'fingerprint' ? 'border-blue-500' : 'border-transparent'} rounded-lg text-center`}
            onClick={() => setSecurityChoice('fingerprint')}
          >
            <img src="/fingerprint.svg" alt="Fingerprint" className="w-24 h-24 mx-auto mb-2" />
            <p className="font-semibold">Fingerprint</p>
          </div>
          <div 
            className={`cursor-pointer p-4 border-4 ${securityChoice === 'pin' ? 'border-blue-500' : 'border-transparent'} rounded-lg text-center`}
            onClick={() => setSecurityChoice('pin')}
          >
            <img src="/pin.svg" alt="PIN" className="w-24 h-24 mx-auto mb-2" />
            <p className="font-semibold">PIN</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Link href="/onboarding/gender">
            <span className="text-nhs-blue hover:underline">Back</span>
          </Link>
          <Link href="/onboarding/complete" onClick={handleSaveChoice}>
            <button className="bg-nhs-blue text-white font-bold py-2 px-8 rounded-lg text-lg hover:bg-blue-700 transition-colors">
              Next &gt;
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;