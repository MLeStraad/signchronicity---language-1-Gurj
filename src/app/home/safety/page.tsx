"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { NHSHeader } from '@/components/NHSHeader';
import { InactivityWrapper } from '@/components/onboarding/InactivityWrapper';
import { PinUnlock } from '@/components/onboarding/PinUnlock';
import { ChevronRight } from 'lucide-react';
import PracticeManagerModal from './PracticeManagerModal';

export default function SafetyMenu() {
  const router = useRouter();
  const [locked, setLocked] = useState(false);
  const [isManagerModalOpen, setIsManagerModalOpen] = useState(false);

  if (locked) {
    return <PinUnlock onSuccess={() => setLocked(false)} />;
  }

  return (
    <InactivityWrapper onTimeout={() => setLocked(true)}>
      <div className="min-h-screen bg-gray-200 flex flex-col items-center">
        <NHSHeader />
        <div className="w-full max-w-md bg-[#f0f4f5] flex flex-col flex-grow">
          <div className="p-4 border-b-2 border-black">
             <h1 className="text-3xl font-bold text-[#005eb8]">Safety</h1>
          </div>

          <div className="flex flex-col border-b-2 border-white">
            <button
              className="bg-red-600 text-white p-4 flex justify-between items-center w-full"
              onClick={() => router.push('/home/safety/unhappy')}
            >
              <span className="font-bold text-lg">I feel unhappy/unsafe</span>
              <ChevronRight className="w-8 h-8" />
            </button>
            <button
              className="bg-red-600 text-white p-4 flex justify-between items-center w-full border-t border-white"
              onClick={() => router.push('/home/safety/interpreter')}
            >
              <span className="font-bold text-lg">I need a face-to-face interpreter</span>
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          <div className="bg-[#f0f4f5] p-4">
            <h2 className="text-2xl font-bold text-[#005eb8]">Support & Advocacy</h2>
          </div>
          <button className="bg-white text-black p-4 flex justify-between items-center w-full">
            <span className="font-bold text-lg">HealthWatch Liverpool</span>
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="bg-[#f0f4f5] p-4">
            <h2 className="text-2xl font-bold text-[#005eb8]">Complaints process</h2>
          </div>
          <button className="bg-white text-black p-4 flex justify-between items-center w-full">
            <span className="font-bold text-lg">How to make a complaint</span>
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="bg-[#f0f4f5] p-4">
            <h2 className="text-2xl font-bold text-[#005eb8]">How to contact</h2>
          </div>
          <button
            className="bg-white text-black p-4 flex justify-between items-center w-full mb-1"
            onClick={() => setIsManagerModalOpen(true)}
          >
            <span className="font-bold text-lg">The Practice Manager</span>
            <ChevronRight className="w-8 h-8" />
          </button>
          <button className="bg-white text-black p-4 flex justify-between items-center w-full mb-1">
            <span className="font-bold text-lg">NHS Cheshire & Merseyside</span>
            <ChevronRight className="w-8 h-8" />
          </button>
          <button className="bg-white text-black p-4 flex justify-between items-center w-full mb-1">
            <span className="font-bold text-lg">Parliamentary & Health Service Ombudsman</span>
            <ChevronRight className="w-8 h-8" />
          </button>
          <button className="bg-white text-black p-4 flex justify-between items-center w-full mb-1">
            <span className="font-bold text-lg">The Care Quality Commission</span>
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="mt-auto p-6 flex justify-between bg-white">
            <button className="text-black font-bold text-lg" onClick={() => router.back()}>
              Back
            </button>
            <button className="text-black font-bold text-lg" onClick={() => router.push('/home')}>
              Main Menu
            </button>
          </div>
        </div>
      </div>

      <PracticeManagerModal
        isOpen={isManagerModalOpen}
        onClose={() => setIsManagerModalOpen(false)}
      />
    </InactivityWrapper>
  );
}
