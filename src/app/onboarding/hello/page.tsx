'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function HelloPage() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/onboarding/name');
  };

  return (
    <div className="flex flex-col h-full bg-white px-6 pt-12 pb-6">
      <h1 className="text-4xl font-bold text-[#1D5EBC] mb-8">
        Hello!
      </h1>

      <div className="space-y-6 text-gray-500 font-medium text-lg flex-1">
        <p>
          Welcome to your new<br/>signchronicity translation<br/>app.
        </p>
        <p>
          We're going to guide you<br/>through some questions<br/>about you.
        </p>
        <p>
          These questions are used<br/>to populate the My Info<br/>pop up screen in the app.
        </p>
        <p>
          It will take about 5 minutes<br/>to complete.
        </p>
        <p>
          All of your information is<br/>stored locally on your device.
        </p>
      </div>

      <div className="flex justify-end pt-8">
        <Button onClick={handleNext} className="bg-[#1D5EBC] hover:bg-blue-800 text-white font-bold py-2 px-6 rounded">
          Next {'>'}
        </Button>
      </div>
    </div>
  );
}
