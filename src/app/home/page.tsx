"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { NHSHeader } from '@/components/NHSHeader';
import { InactivityWrapper } from '@/components/onboarding/InactivityWrapper';
import { PinUnlock } from '@/components/onboarding/PinUnlock';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  const router = useRouter();
  const [locked, setLocked] = useState(false);

  if (locked) {
    return <PinUnlock onSuccess={() => setLocked(false)} />;
  }

  const menuItems = [
    { title: 'Play "About app video" for staff', bg: 'bg-[#1d70b8]', text: 'text-white' },
    { title: 'GP Check-in', bg: 'bg-white', text: 'text-black', onClick: () => router.push('/home/appointments/gp') },
    { title: 'Practice Nurse Check-in', bg: 'bg-white', text: 'text-black', onClick: () => router.push('/home/appointments/nurse') },
    { title: 'Blood Test Check-in', bg: 'bg-white', text: 'text-black', onClick: () => router.push('/home/appointments/blood') },
    { title: 'Pharmacy visit', bg: 'bg-white', text: 'text-black', onClick: () => router.push('/home/pharmacy') },
    { title: 'Discuss my medicines', bg: 'bg-white', text: 'text-black' },
    { title: 'Make follow-up appointment', bg: 'bg-white', text: 'text-black' },
    { title: 'Change my details', bg: 'bg-white', text: 'text-black' },
    { title: 'Do something else', bg: 'bg-white', text: 'text-black', onClick: () => router.push('/home/do-something-else') },
  ];

  return (
    <InactivityWrapper onTimeout={() => setLocked(true)}>
      <div className="min-h-screen bg-gray-200 flex flex-col items-center">
        <NHSHeader />
        <div className="w-full max-w-md bg-gray-200 p-6 flex flex-col flex-grow">
          <h1 className="text-4xl font-bold text-[#005eb8] mb-6">Hello!</h1>

          <div className="flex flex-col gap-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className={`${item.bg} ${item.text} p-4 flex justify-between items-center shadow-sm w-full`}
              >
                <span className="font-bold text-lg">{item.title}</span>
                <ChevronRight className="w-8 h-8" />
              </button>
            ))}
          </div>

          <div className="mt-8">
            <button
              onClick={() => router.push('/home/settings')}
              className="bg-white text-black p-4 flex justify-between items-center shadow-sm w-full"
            >
              <span className="font-bold text-lg">Settings</span>
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          <div className="mt-auto pt-8 flex justify-end">
            <button
              className="text-[#005eb8] font-bold text-lg"
              onClick={() => router.push('/home/safety')}
            >
              Exit app
            </button>
          </div>
        </div>
      </div>
    </InactivityWrapper>
  );
}
