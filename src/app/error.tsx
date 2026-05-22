'use client';

import { useEffect } from 'react';
import { NHSHeader } from '@/components/NHSHeader';
import { Button } from '@/components/ui/button';
import { ShieldAlert, RefreshCcw } from 'lucide-react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service if needed
    console.error(error);
  }, [error]);

  return (
    <div className="flex-1 flex flex-col bg-[#D0D5DB] min-h-screen">
      <NHSHeader />
      <main className="flex-1 max-w-md w-full mx-auto flex flex-col justify-center items-center p-6 text-center">
        <ShieldAlert className="w-24 h-24 text-[#DA291C] mb-6" />
        <h1 className="text-3xl font-extrabold text-[#212B32] mb-4">
          Something went wrong
        </h1>
        <p className="text-[#4C6272] mb-8 text-lg">
          We encountered an unexpected error. Your privacy and security have not been compromised.
          Please try refreshing the application.
        </p>
        <Button
          onClick={() => reset()}
          className="w-full bg-[#005EB8] hover:bg-[#003087] text-white rounded-none py-6 h-auto text-xl font-bold flex items-center justify-center gap-3 border-b-4 border-[#003087] nhs-focus"
        >
          <RefreshCcw className="w-6 h-6" />
          <span>Try again</span>
        </Button>
      </main>
    </div>
  );
}
