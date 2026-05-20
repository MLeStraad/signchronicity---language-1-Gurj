'use client';

import { usePathname } from 'next/navigation';

export function ProgressCounter() {
  const pathname = usePathname();

  // Define the ordered steps that should show the counter
  const steps = [
    '/onboarding/name',
    '/onboarding/dob',
    '/onboarding/address',
    '/onboarding/telephone',
    '/onboarding/gp',
    '/onboarding/translator',
    '/onboarding/security'
  ];

  const currentIndex = steps.indexOf(pathname || '');

  // Only show if we are on one of the counted steps
  if (currentIndex === -1) {
    return null;
  }

  const currentStep = currentIndex + 1;
  const totalSteps = steps.length;

  return (
    <div className="w-full bg-[#E8EDEE] px-4 py-2 border-b border-gray-300">
      <div className="flex justify-between items-center text-sm font-bold text-[#005EB8]">
        <span>Step {currentStep} of {totalSteps}</span>
      </div>
      <div className="w-full bg-gray-300 h-2 mt-2 rounded-full overflow-hidden">
        <div
          className="bg-[#005EB8] h-full transition-all duration-300"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );
}
