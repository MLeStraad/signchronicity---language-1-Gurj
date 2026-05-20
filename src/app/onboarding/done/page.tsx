'use client';

import { useRouter } from 'next/navigation';
import { useOnboardingStore } from '@/store/onboardingStore';
import { Button } from '@/components/ui/button';

export default function DonePage() {
  const router = useRouter();
  const { completeOnboarding } = useOnboardingStore();

  const handleComplete = () => {
    completeOnboarding();
    router.push('/'); // Route back to / to demonstrate login
  };

  return (
    <div className="flex flex-col h-full bg-white px-6 pt-24 pb-12">

      <h1 className="text-3xl font-bold text-black mb-8 leading-tight">
        Thats it.<br/><br/>
        Your all set.
      </h1>

      <div className="space-y-6 text-black font-bold text-sm flex-1">
        <p>
          Please enjoy your 120 day<br/>trial of signchronicity.
        </p>
        <p>
          If you have any problems, let us know.
        </p>
        <p>
          You can contact us at signchonicity.com
        </p>
      </div>

      <div className="mt-8 space-y-8">
        <p className="text-[#1D5EBC] font-bold text-lg">
          Press complete to get started.
        </p>

        <div className="flex justify-end">
          <Button onClick={handleComplete} className="bg-[#1D5EBC] hover:bg-blue-800 text-white font-bold py-2 px-6 rounded">
            Complete
          </Button>
        </div>
      </div>
    </div>
  );
}
