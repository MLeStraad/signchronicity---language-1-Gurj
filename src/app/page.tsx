'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useOnboardingStore } from '@/store/onboardingStore';
import Link from 'next/link';

export default function RootPage() {
  const router = useRouter();
  const { hasCompletedOnboarding, securityChoice } = useOnboardingStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      if (!hasCompletedOnboarding) {
        router.push('/onboarding');
      } else if (securityChoice !== 'none') {
        // Here we could check a session variable to see if already unlocked
        // For simplicity in this demo, always go to unlock
        router.push('/unlock');
      }
    }
  }, [mounted, hasCompletedOnboarding, securityChoice, router]);

  if (!mounted || !hasCompletedOnboarding || securityChoice !== 'none') {
    return <div className="min-h-screen bg-[var(--onboarding-bg)]" />; // Loading state
  }

  // Temporary Dashboard for Demo
  return (
    <div className="min-h-screen bg-[var(--onboarding-input-bg)] text-[var(--onboarding-input-text)] p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p>Welcome to Signchronicity! You have completed onboarding.</p>

      <button
        onClick={() => useOnboardingStore.getState().resetOnboarding()}
        className="mt-8 bg-red-600 text-[var(--onboarding-text)] px-4 py-2 rounded-md"
      >
        Reset Onboarding & Start Over
      </button>
    </div>
  );
}
