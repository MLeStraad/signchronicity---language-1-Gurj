'use client';

import { useRouter } from 'next/navigation';
import { useOnboardingStore } from '@/store/onboardingStore';
import { Button } from '@/components/ui/button';

export default function NamePage() {
  const router = useRouter();
  const { personalDetails, setPersonalDetails } = useOnboardingStore();

  const handleNext = () => {
    router.push('/onboarding/dob');
  };

  const inputStyle = "w-full border-2 border-[#1D5EBC] rounded px-3 py-2 bg-[#f4f3ea] text-black focus:outline-none focus:ring-2 focus:ring-[#1D5EBC]/50 h-10";

  return (
    <div className="flex flex-col h-full bg-white px-4 pt-8 pb-6 overflow-y-auto">
      <h1 className="text-4xl font-bold text-[#1D5EBC] mb-4">About you.</h1>
      <h2 className="text-xl font-bold text-black mb-6">Please enter your name.</h2>

      <div className="space-y-4 mb-8">
        <div>
          <label className="block text-black font-bold mb-1">Title</label>
          <select
            className={`${inputStyle} w-1/2`}
            value={personalDetails.title}
            onChange={(e) => setPersonalDetails({ title: e.target.value })}
          >
            <option value="">Please select</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Ms">Ms</option>
            <option value="Dr">Dr</option>
          </select>
        </div>

        <div>
          <label className="block text-black font-bold mb-1">First name</label>
          <input
            type="text"
            className={inputStyle}
            placeholder="Type here"
            value={personalDetails.firstName}
            onChange={(e) => setPersonalDetails({ firstName: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-black font-bold mb-1">Last name</label>
          <input
            type="text"
            className={inputStyle}
            placeholder="Type here"
            value={personalDetails.lastName}
            onChange={(e) => setPersonalDetails({ lastName: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-black font-bold mb-1">I prefer to be called</label>
          <input
            type="text"
            className={inputStyle}
            placeholder="Type here"
            value={personalDetails.preferredName}
            onChange={(e) => setPersonalDetails({ preferredName: e.target.value })}
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

      <div className="flex justify-end mt-auto">
        <Button onClick={handleNext} className="bg-[#1D5EBC] hover:bg-blue-800 text-white font-bold py-2 px-6 rounded">
          Next {'>'}
        </Button>
      </div>
    </div>
  );
}
