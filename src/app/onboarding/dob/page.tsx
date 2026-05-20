'use client';

import { useRouter } from 'next/navigation';
import { useOnboardingStore } from '@/store/onboardingStore';
import { Button } from '@/components/ui/button';

export default function DobPage() {
  const router = useRouter();
  const { personalDetails, setPersonalDetails } = useOnboardingStore();

  const handleNext = () => router.push('/onboarding/address');
  const handleBack = () => router.back();

  const inputStyle = "border-2 border-[#1D5EBC] rounded px-2 py-2 bg-[#f4f3ea] text-black focus:outline-none focus:ring-2 focus:ring-[#1D5EBC]/50 text-center h-10";

  return (
    <div className="flex flex-col h-full bg-white px-4 pt-8 pb-6 overflow-y-auto">
      <h1 className="text-4xl font-bold text-[#1D5EBC] mb-4">About you.</h1>
      <h2 className="text-xl font-bold text-black mb-6">Please enter your date of birth.</h2>

      <div className="flex space-x-3 mb-8">
        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="DD"
            maxLength={2}
            className={`${inputStyle} w-14`}
            value={personalDetails.dobDay}
            onChange={(e) => setPersonalDetails({ dobDay: e.target.value })}
          />
          <span className="text-[#1D5EBC] text-sm font-bold mt-1">Day</span>
        </div>
        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="MM"
            maxLength={2}
            className={`${inputStyle} w-14`}
            value={personalDetails.dobMonth}
            onChange={(e) => setPersonalDetails({ dobMonth: e.target.value })}
          />
          <span className="text-[#1D5EBC] text-sm font-bold mt-1">Month</span>
        </div>
        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="YYYY"
            maxLength={4}
            className={`${inputStyle} w-20`}
            value={personalDetails.dobYear}
            onChange={(e) => setPersonalDetails({ dobYear: e.target.value })}
          />
          <span className="text-[#1D5EBC] text-sm font-bold mt-1">Year</span>
        </div>
      </div>

      <div className="bg-[#dce6f2] border-l-4 border-[#1D5EBC] p-4 mb-4 rounded-r">
        <h3 className="text-[#1D5EBC] font-bold mb-1">Just so you know.</h3>
        <p className="text-xs text-black mb-2">
          Information you give us here will be used to populate the "My Info" pop up in the app.
        </p>
        <p className="text-xs text-black font-bold">
          All personal information is held on your device ONLY.
        </p>
      </div>

      <div className="flex justify-end mb-auto">
        <Button onClick={handleNext} className="bg-[#1D5EBC] hover:bg-blue-800 text-white font-bold py-2 px-6 rounded">
          Next {'>'}
        </Button>
      </div>

      <div className="mt-8">
        <button onClick={handleBack} className="text-black underline">
          Back
        </button>
      </div>
    </div>
  );
}
