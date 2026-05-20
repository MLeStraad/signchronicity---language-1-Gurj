'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useOnboardingStore } from '@/store/onboardingStore';
import { PinUnlock } from '@/components/onboarding/PinUnlock';
import { BiometricUnlock } from '@/components/onboarding/BiometricUnlock';
import { Logo } from '@/components/Logo';

export default function SplashPage() {
  const router = useRouter();
  const { hasCompletedOnboarding, securityPreference } = useOnboardingStore();
  const [isClient, setIsClient] = useState(false);
  const [showUnlock, setShowUnlock] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      if (hasCompletedOnboarding) {
        if (securityPreference === 'pin' || securityPreference === 'biometric') {
          setShowUnlock(true);
        } else {
          router.push('/home');
        }
      }
    }
  }, [isClient, hasCompletedOnboarding, securityPreference, router]);

  if (!isClient) {
    return <SplashLayout onEnter={() => {}} showEnter={false} />;
  }

  if (hasCompletedOnboarding && showUnlock) {
    if (securityPreference === 'pin') {
      return <PinUnlock onSuccess={() => router.push('/home')} />;
    } else if (securityPreference === 'biometric') {
      return <BiometricUnlock onSuccess={() => router.push('/home')} />;
    }
  }

  return <SplashLayout onEnter={() => router.push('/onboarding/theme')} showEnter={!hasCompletedOnboarding} />;
}

function SplashLayout({ onEnter, showEnter }: { onEnter: () => void, showEnter: boolean }) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 animate-in fade-in duration-500 max-w-md mx-auto sm:border-x shadow-xl">
      <div className="flex-1 flex flex-col items-center justify-center w-full space-y-12">
        <div className="w-full flex justify-center px-4 transform scale-75 sm:scale-100">
          <Logo />
        </div>
        {showEnter && (
           <button
             onClick={onEnter}
             className="px-8 py-3 bg-[#1D5EBC] text-white text-xl font-bold rounded shadow-md hover:bg-blue-800 transition-colors"
           >
             Enter
           </button>
        )}
      </div>
    </div>
  );
}
