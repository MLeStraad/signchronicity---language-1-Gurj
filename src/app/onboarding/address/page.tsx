'use client';

import { useRouter } from 'next/navigation';
import { useOnboardingStore } from '@/store/onboardingStore';
import { Button } from '@/components/ui/button';

export default function AddressPage() {
  const router = useRouter();
  const { personalDetails, setPersonalDetails } = useOnboardingStore();

  const handleNext = () => router.push('/onboarding/telephone');
  const handleBack = () => router.back();

  const inputStyle = "border-2 border-[#1D5EBC] rounded px-2 py-1 bg-[#f4f3ea] text-black focus:outline-none focus:ring-2 focus:ring-[#1D5EBC]/50 h-8";

  return (
    <div className="flex flex-col h-full bg-white px-4 pt-8 pb-6 overflow-y-auto">
      <h1 className="text-4xl font-bold text-[#1D5EBC] mb-4">About you.</h1>
      <h2 className="text-xl font-bold text-black mb-8">Please tell us your address.</h2>

      <div className="space-y-4 mb-8 text-black font-bold text-sm">
        <div className="flex items-center space-x-4">
          <label className="w-36">House or Flat number</label>
          <input
            type="text"
            className={`${inputStyle} w-12`}
            value={personalDetails.addressLine1}
            onChange={(e) => setPersonalDetails({ addressLine1: e.target.value })}
          />
        </div>

        <div className="flex items-center space-x-4">
          <label className="w-36">Address</label>
          <input
            type="text"
            className={`${inputStyle} flex-1`}
            value={personalDetails.addressLine2}
            onChange={(e) => setPersonalDetails({ addressLine2: e.target.value })}
          />
        </div>

        <div className="flex items-center space-x-4">
          <label className="w-36">Post code</label>
          <input
            type="text"
            placeholder="eg. L1 1AA"
            className={`${inputStyle} w-24 text-xs`}
            value={personalDetails.postcode}
            onChange={(e) => setPersonalDetails({ postcode: e.target.value })}
          />
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
