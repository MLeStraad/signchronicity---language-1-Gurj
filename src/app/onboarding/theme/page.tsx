'use client';

import { useRouter } from 'next/navigation';
import { useOnboardingStore } from '@/store/onboardingStore';
import { Button } from '@/components/ui/button';

export default function ThemePage() {
  const router = useRouter();
  const { theme, setTheme } = useOnboardingStore();

  const handleNext = () => {
    // Default to light if not chosen
    if (!theme || theme === 'system') setTheme('light');
    router.push('/onboarding/terms');
  };

  return (
    <div className="flex flex-col h-full bg-white relative">
      <div className="flex-1 overflow-y-auto pt-6 px-6">
        <h1 className="text-3xl font-bold text-[#1D5EBC] leading-tight mb-6">
          <span className="text-black">Welcome</span><br />
          to signchronicity!
        </h1>

        <p className="text-gray-600 mb-8 font-medium">
          Please choose a colour to display the app in.
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          {/* Dark Mode Choice */}
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setTheme('dark')}
          >
            <div className={`w-[140px] h-[220px] rounded-lg border-2 flex items-center justify-center bg-[#2b353e] overflow-hidden ${theme === 'dark' ? 'border-[#1D5EBC] ring-4 ring-[#1D5EBC]/30' : 'border-gray-800'}`}>
               <div className="w-[110px] h-[190px] border-4 border-white bg-[#1D5EBC] rounded-sm flex flex-col p-2 pt-6 items-center">
                  <span className="text-white font-bold text-xl mb-2">Hello!</span>
                  <span className="text-white text-[10px] text-center leading-tight mb-auto">
                    Welcome! This<br/>app helps you<br/>communicate.<br/>Setup is quick.
                  </span>
                  <div className="w-[80px] h-[12px] bg-white rounded-full mt-2"></div>
               </div>
            </div>
            <div className={`mt-0 w-[140px] py-2 text-center text-white font-bold rounded-b-lg ${theme === 'dark' ? 'bg-[#1D5EBC]' : 'bg-[#2b353e]'}`}>
               Use Dark<br/>Mode
            </div>
          </div>

          {/* Light Mode Choice */}
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setTheme('light')}
          >
            <div className={`w-[140px] h-[220px] rounded-lg border-2 flex items-center justify-center bg-white overflow-hidden ${theme === 'light' ? 'border-[#1D5EBC] ring-4 ring-[#1D5EBC]/30' : 'border-gray-300'}`}>
               <div className="w-[110px] h-[190px] border-4 border-[#1D5EBC] bg-white rounded-sm flex flex-col p-2 pt-6 items-center">
                  <span className="text-black font-bold text-xl mb-2">Hello!</span>
                  <span className="text-gray-600 text-[10px] text-center leading-tight mb-auto">
                    Welcome! This<br/>app helps you<br/>communicate.<br/>Setup is quick.
                  </span>
                  <div className="w-[80px] h-[12px] bg-gray-300 rounded-full mt-2"></div>
               </div>
            </div>
            <div className="mt-2 text-center text-gray-700 font-bold">
               Use Light<br/>Mode
            </div>
          </div>
        </div>

        <div className="flex justify-end pr-2">
          <Button onClick={handleNext} className="bg-[#1D5EBC] hover:bg-blue-800 text-white font-bold py-2 px-6 rounded">
            Next {'>'}
          </Button>
        </div>

      </div>

      <div className="mt-16 border-t border-gray-200 mx-6 mb-12"></div>
    </div>
  );
}
