'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useOnboardingStore } from '@/store/onboardingStore';
import { CheckSquare, Square } from 'lucide-react';

export default function OnboardingTermsPage() {
  const router = useRouter();
  const { acceptedTerms, setAcceptedTerms } = useOnboardingStore();

  const handleNext = () => {
    if (acceptedTerms) {
      router.push('/onboarding/hello');
    }
  };

  return (
    <div className="min-h-screen bg-[var(--onboarding-bg)] flex flex-col text-[var(--onboarding-text)] px-6 pt-12 pb-8">
      <div className="flex-1 max-w-md mx-auto w-full">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

        <div className="bg-[var(--onboarding-input-bg)]/10 rounded-md p-4 mb-8 h-64 overflow-y-auto text-sm leading-relaxed">
          <p className="mb-4">
            Welcome to signchronicity. By using this application, you agree to the following terms and conditions:
          </p>
          <p className="mb-4">
            <strong>1. Privacy and Data:</strong> All your personal data and medical information remain on this device. Signchronicity does not transmit this data to external servers without your explicit consent during a consultation.
          </p>
          <p className="mb-4">
            <strong>2. Translation Accuracy:</strong> While we strive for high accuracy using advanced local AI models, automated translation may contain errors. This tool is designed to assist communication and does not replace professional medical interpreters where critical.
          </p>
          <p className="mb-4">
            <strong>3. Security:</strong> You are responsible for securing this device using PIN or Biometric locks to protect your health information.
          </p>
          <p>
            <strong>4. Usage:</strong> This app is intended for use within NHS clinical environments to facilitate patient-clinician communication.
          </p>
        </div>

        <button
          onClick={() => setAcceptedTerms(!acceptedTerms)}
          className="flex items-start w-full text-left"
        >
          <div className="mr-3 mt-1 flex-shrink-0">
            {acceptedTerms ? (
              <CheckSquare className="w-6 h-6 text-[var(--onboarding-text)]" />
            ) : (
              <Square className="w-6 h-6 text-[var(--onboarding-text)]" />
            )}
          </div>
          <span className="text-lg">
            I have read and agree to the terms and conditions and privacy policy.
          </span>
        </button>
      </div>

      <div className="w-full max-w-md mx-auto pt-8">
        <button
          onClick={handleNext}
          disabled={!acceptedTerms}
          className={`w-full font-bold text-xl py-4 rounded-md transition-colors ${
            acceptedTerms
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
