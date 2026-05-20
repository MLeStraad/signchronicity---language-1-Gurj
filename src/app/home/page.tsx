'use client';

import { useOnboardingStore } from '@/store/onboardingStore';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const router = useRouter();
  const { resetOnboarding } = useOnboardingStore();

  const handleReset = () => {
    resetOnboarding();
    router.push('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4 text-[#1D5EBC]">Welcome to the App!</h1>
      <p className="mb-8">You have successfully completed the onboarding.</p>
      <Button onClick={handleReset} variant="destructive">Reset Onboarding (Demo)</Button>
    </div>
  );
}
