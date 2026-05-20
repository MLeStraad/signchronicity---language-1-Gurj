'use client';

import { useRouter } from 'next/navigation';
import { useOnboardingStore } from '@/store/onboardingStore';
import { Button } from '@/components/ui/button';

export default function TermsPage() {
  const router = useRouter();
  const { setAgreedToTerms } = useOnboardingStore();

  const handleAgree = () => {
    setAgreedToTerms(true);
    router.push('/onboarding/hello');
  };

  const handleDecline = () => {
    // Usually decline means go back to splash or close app. We'll just alert or go back for now.
    router.push('/');
  };

  return (
    <div className="flex flex-col h-full bg-[#f2f4f5] px-4 pt-6">
      <h1 className="text-xl font-bold text-black mb-4">
        Terms and conditions of use<br/>during 120 day trial period.
      </h1>

      <div className="flex-1 bg-[#cfd1d5] border border-gray-300 rounded mb-6 min-h-[400px] overflow-y-auto p-4">
         {/* Placeholder for T&Cs text */}
      </div>

      <div className="flex justify-between pb-8">
        <Button
          onClick={handleDecline}
          variant="destructive"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded"
        >
          I decline
        </Button>
        <Button
          onClick={handleAgree}
          className="bg-[#1D5EBC] hover:bg-blue-800 text-white font-bold py-2 px-6 rounded"
        >
          I agree
        </Button>
      </div>
    </div>
  );
}
