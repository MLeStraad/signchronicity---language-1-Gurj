"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { InactivityWrapper } from '@/components/onboarding/InactivityWrapper';
import { PinUnlock } from '@/components/onboarding/PinUnlock';
import { ChevronRight, Play, Square, SkipBack } from 'lucide-react';
import Image from 'next/image';

export default function UnhappyScreen() {
  const router = useRouter();
  const [locked, setLocked] = useState(false);

  if (locked) {
    return <PinUnlock onSuccess={() => setLocked(false)} />;
  }

  return (
    <InactivityWrapper onTimeout={() => setLocked(true)}>
      <div className="min-h-screen bg-[#f0f4f5] flex flex-col items-center">
        <div className="w-full max-w-md bg-[#f0f4f5] flex flex-col flex-grow relative">

          <div className="p-4 space-y-4 pt-8">
            <div className="bg-[#ffebee] border-l-8 border-[#d32f2f] p-4 rounded shadow-sm">
                <p className="font-bold text-lg text-[#212121]">The consultation has stopped.</p>
                <p className="text-md text-[#424242] mt-1">The member of staff has been notified by voice.</p>
            </div>

            <div className="bg-[#e8f5e9] border-l-8 border-[#2e7d32] p-4 rounded shadow-sm">
                <p className="font-bold text-lg text-[#212121]">Your dignity is our priority.</p>
                <p className="text-md text-[#424242] font-bold mt-1">You have indicated you feel unhappy/upset</p>
            </div>

             <div className="bg-[#e3f2fd] border-l-8 border-[#1565c0] p-4 rounded shadow-sm">
                <p className="font-bold text-lg text-[#1565c0]">If you feel able.</p>
                <p className="text-md text-[#424242] mt-1">Show the video to the staff member.</p>
                <p className="text-md text-[#424242]">Alternatively, remove yourself and seek help.</p>
            </div>
          </div>

          <div className="flex-grow flex flex-col px-4">
             <div className="bg-black w-full aspect-square mt-2 relative">
                {/* Video Placeholder */}
                <div className="absolute inset-x-0 bottom-0 bg-[#bdbdbd] p-2 flex justify-center items-center gap-6">
                    <button className="bg-red-600 w-8 h-8 rounded-sm"></button>
                    <SkipBack className="w-8 h-8 text-gray-500 fill-current" />
                    <Play className="w-10 h-10 text-green-600 fill-current" />
                </div>
             </div>

             <button
                className="mt-4 bg-[#005eb8] text-white p-4 flex justify-between items-center w-full shadow-md"
                onClick={() => router.push('/home/safety/translation')}
             >
                <span className="font-bold text-xl">Translation Screen</span>
                <ChevronRight className="w-8 h-8" />
             </button>
          </div>

          <div className="mt-auto p-6 flex justify-between bg-[#f0f4f5]">
            <button className="text-black font-bold text-lg" onClick={() => router.back()}>
              Back
            </button>
            <button className="text-black font-bold text-lg" onClick={() => router.push('/home')}>
              Exit app
            </button>
          </div>
        </div>
      </div>
    </InactivityWrapper>
  );
}
