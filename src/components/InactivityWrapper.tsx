'use client';

import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useOnboardingStore } from '@/store/onboardingStore';

const INACTIVITY_LIMIT_MS = 10 * 60 * 1000; // 10 minutes

export function InactivityWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { hasCompletedOnboarding, securityPreference } = useOnboardingStore();

  const handleInactivity = useCallback(() => {
    if (hasCompletedOnboarding && securityPreference !== 'none') {
      // Force user back to splash screen which will show the unlock prompt
      router.push('/');
    }
  }, [hasCompletedOnboarding, securityPreference, router]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const resetTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleInactivity, INACTIVITY_LIMIT_MS);
    };

    // Events to monitor for activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];

    // Setup initial timer and listeners
    resetTimer();
    events.forEach((event) => document.addEventListener(event, resetTimer, { passive: true }));

    return () => {
      clearTimeout(timeoutId);
      events.forEach((event) => document.removeEventListener(event, resetTimer));
    };
  }, [handleInactivity]);

  return <>{children}</>;
}
