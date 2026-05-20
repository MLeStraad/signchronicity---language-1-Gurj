'use client';

import { useRouter } from 'next/navigation';
import { useOnboardingStore } from '@/store/onboardingStore';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Fingerprint, Grid3X3 } from 'lucide-react';

export default function SecurityPage() {
  const router = useRouter();
  const { securityPreference, setSecurityPreference } = useOnboardingStore();

  // Local state until confirmed via Next
  const [localPref, setLocalPref] = useState<'pin' | 'biometric' | 'none'>(securityPreference);

  const handleNext = () => {
    if (localPref === 'none') {
        alert("Please select a security method");
        return;
    }

    if (localPref === 'pin') {
      // Prompt for PIN setup
      const pin = prompt("Please set a 4-digit PIN for this demo:", "1234");
      if (pin && pin.length >= 4) {
        setSecurityPreference('pin', pin);
        router.push('/onboarding/done');
      }
    } else {
      // Biometric
      setSecurityPreference('biometric');
      router.push('/onboarding/done');
    }
  };

  return (
    <div className="flex flex-col h-full bg-white px-4 pt-8 pb-6 overflow-y-auto">
      <h1 className="text-4xl font-bold text-[#1D5EBC] mb-4">About you.</h1>

      <div className="border border-blue-200 border-l-4 border-l-[#1D5EBC] p-3 mb-6 rounded-r">
        <h3 className="text-[#1D5EBC] font-bold mb-1">Your security is important.</h3>
        <p className="text-xs text-black font-medium mb-1">We take your privacy and security seriously.</p>
        <p className="text-xs text-black font-medium">Please choose how to unlock your app.</p>
      </div>

      <div className="flex justify-between space-x-4 mb-6">

        {/* Biometric */}
        <div className="flex-1 flex flex-col">
          <p className="text-xs font-bold text-black mb-2 h-8 leading-tight">
            Unlock with<br/>finger print.
          </p>
          <button
            onClick={() => setLocalPref('biometric')}
            className={`w-full aspect-[3/4] bg-[#1D5EBC] rounded-sm flex flex-col p-3 relative ${localPref === 'biometric' ? 'ring-4 ring-blue-300' : ''}`}
          >
            <div className="flex-1 flex items-center justify-center mb-6">
               <Fingerprint className="w-20 h-20 text-white" strokeWidth={1} />
            </div>
            <div className="mt-auto flex items-center space-x-2">
                <div className={`w-5 h-5 rounded-full border-2 border-white flex-shrink-0 ${localPref === 'biometric' ? 'bg-[#f4f3ea]' : 'bg-transparent'}`}></div>
                <span className="text-white text-xs font-bold">Finger print</span>
            </div>
          </button>
        </div>

        {/* PIN */}
        <div className="flex-1 flex flex-col">
          <p className="text-xs font-bold text-black mb-2 h-8 leading-tight">
            Unlock with<br/>P I N code.
          </p>
          <button
            onClick={() => setLocalPref('pin')}
            className={`w-full aspect-[3/4] bg-[#1D5EBC] rounded-sm flex flex-col p-3 relative ${localPref === 'pin' ? 'ring-4 ring-blue-300' : ''}`}
          >
            <div className="flex-1 flex items-center justify-center mb-6">
               <Grid3X3 className="w-20 h-20 text-white" strokeWidth={1.5} />
            </div>
            <div className="mt-auto flex items-center space-x-2">
                <div className={`w-5 h-5 rounded-full border-2 border-white flex-shrink-0 ${localPref === 'pin' ? 'bg-[#f4f3ea]' : 'bg-transparent'}`}></div>
                <span className="text-white text-xs font-bold">PIN code</span>
            </div>
          </button>
        </div>
      </div>

      <div className="border border-blue-200 border-l-4 border-l-[#1D5EBC] p-3 mb-6 rounded-r">
        <h3 className="text-[#1D5EBC] font-bold mb-1">You can change this anytime.</h3>
        <p className="text-xs text-black font-medium leading-tight">
          You can change how you unlock the app anytime in settings. The choice you make now will be remembered.
        </p>
      </div>

      <div className="flex justify-end mb-auto">
        <Button onClick={handleNext} className="bg-[#1D5EBC] hover:bg-blue-800 text-white font-bold py-2 px-6 rounded">
          Next
        </Button>
      </div>
    </div>
  );
}
