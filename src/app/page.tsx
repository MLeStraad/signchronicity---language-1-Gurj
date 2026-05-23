'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useOnboardingStore } from '@/store/onboardingStore';
import { Card } from '@/components/ui/card';
import { PinUnlock } from '@/components/onboarding/PinUnlock';

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
      if (!hasCompletedOnboarding) {
        // Redirect to onboarding if not completed
        const timer = setTimeout(() => {
          router.push('/onboarding');
        }, 2000);
        return () => clearTimeout(timer);
      } else {
        // User has completed onboarding, show unlock or redirect to home
        if (securityPreference === 'pin') {
          const timer = setTimeout(() => {
            setShowUnlock(true);
          }, 1500);
          return () => clearTimeout(timer);
        } else if (securityPreference === 'biometric') {
           // TODO: Implement biometric prompt
           router.push('/home');
        } else {
          router.push('/home');
        }
      }
    }
  }, [isClient, hasCompletedOnboarding, securityPreference, router]);

  if (!isClient) {
    return <SplashLayout />; // Server-side render safe state
  }

  if (showUnlock && securityPreference === 'pin') {
    return <PinUnlock onSuccess={() => router.push('/home')} />;
  }

  return <SplashLayout />;
}

function SplashLayout() {
  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center text-white p-6 animate-in fade-in duration-500">
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-sm space-y-8">

        {/* Logo Icon */}
        <div className="w-32 h-32 flex items-center justify-center">
            {/* Using text for S instead of SVG for simplicity in mockup, actual implementation would use SVG */}
            <div className="text-6xl font-bold flex items-center relative">
                S
                <div className="flex space-x-1 ml-2">
                    <div className="w-2 h-6 bg-white rounded-full animate-wave" style={{animationDelay: '0ms'}}></div>
                    <div className="w-2 h-10 bg-white rounded-full animate-wave" style={{animationDelay: '100ms'}}></div>
                    <div className="w-2 h-14 bg-white rounded-full animate-wave" style={{animationDelay: '200ms'}}></div>
                </div>
            </div>
        </div>

        {/* Wordmark */}
        <div className="text-center space-y-2 w-full">
          <h1 className="text-4xl font-extrabold tracking-tight lowercase">signchronicity</h1>
          <div className="w-full h-px bg-white/50 my-2"></div>
          <p className="text-sm font-semibold tracking-wide">your health. your words. your way.</p>
        </div>
      </div>
    </div>
  );
}
