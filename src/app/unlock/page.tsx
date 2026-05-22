'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useOnboardingStore } from '@/store/onboardingStore';
import { PinUnlock } from '@/components/onboarding/PinUnlock';
import { Button } from '@/components/ui/button';

const UnlockPage = () => {
  const router = useRouter();
  const { securityPreference } = useOnboardingStore();

  const handleSuccess = () => {
    router.push('/home');
  };

  // Render PIN unlock screen
  if (securityPreference === 'pin') {
    return <PinUnlock onSuccess={handleSuccess} />;
  }

  // Render Biometric unlock screen
  if (securityPreference === 'biometric') {
    return (
      <div className="min-h-screen bg-primary flex flex-col items-center justify-center text-white p-6 animate-in fade-in zoom-in duration-300">
        <div className="flex-1 flex flex-col items-center justify-start w-full max-w-sm mt-12 space-y-12">
            <Image
                src="/images/logo.png"
                alt="Signchronicity Logo"
                width={80}
                height={80}
            />
          <div className="text-center w-full">
            <h1 className="text-3xl font-extrabold tracking-tight lowercase">signchronicity</h1>
            <div className="w-full h-px bg-white/50 my-1"></div>
            <p className="text-xs font-semibold tracking-wide">your health. your words. your way.</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-sm space-y-8">
            <Image
                src="/public/fingerprint.svg"
                alt="Fingerprint Icon"
                width={80}
                height={80}
            />
            <p className="text-lg font-medium">Press to unlock with fingerprint</p>
             <Button onClick={handleSuccess} className="mt-4 bg-white text-primary hover:bg-white/90">
                Unlock
             </Button>
        </div>

      </div>
    );
  }

  // Fallback for no security choice or other states
  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center text-white p-6">
      <p>No security method selected. Please complete onboarding.</p>
      <Button onClick={() => router.push('/onboarding')} className="mt-4 bg-white text-primary hover:bg-white/90">
        Go to Onboarding
      </Button>
    </div>
  );
};

export default UnlockPage;
