"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { NHSHeader } from '@/components/NHSHeader';
import { InactivityWrapper } from '@/components/onboarding/InactivityWrapper';
import { PinUnlock } from '@/components/onboarding/PinUnlock';
import { ChevronRight } from 'lucide-react';
import { MyInfoPopup } from '@/components/phase2/MyInfoPopup';

export default function Home() {
  const router = useRouter();
  const [locked, setLocked] = useState(false);
  const [showMyInfo, setShowMyInfo] = useState(false);

  if (locked) {
    return <PinUnlock onSuccess={() => setLocked(false)} />;
  }

  const menuItems = [
    { title: 'Play "About app video" for staff', bg: 'bg-[#1d70b8]', text: 'text-white', onClick: () => router.push('/home/about') },
    { title: 'GP Check-in', bg: 'bg-white', text: 'text-black', onClick: () => router.push('/home/appointments/gp') },
    { title: 'Practice Nurse Check-in', bg: 'bg-white', text: 'text-black', onClick: () => router.push('/home/appointments/nurse') },
    { title: 'Blood Test Check-in', bg: 'bg-white', text: 'text-black', onClick: () => router.push('/home/appointments/blood') },
    { title: 'Pharmacy visit', bg: 'bg-white', text: 'text-black', onClick: () => router.push('/home/pharmacy') },
    { title: 'Discuss my medicines', bg: 'bg-white', text: 'text-black' },
    { title: 'Make follow-up appointment', bg: 'bg-white', text: 'text-black' },
    { title: 'Change my details', bg: 'bg-white', text: 'text-black', onClick: () => setShowMyInfo(true) },
    { title: 'Do something else', bg: 'bg-white', text: 'text-black' },
  ];

  return (
    <InactivityWrapper onTimeout={() => setLocked(true)}>
      <div className="min-h-screen bg-[var(--onboarding-bg)] text-[var(--onboarding-text)] flex flex-col items-center pb-8">
        <NHSHeader />
        <div className="w-full max-w-md p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-[#005eb8]">Hello!</h1>
            <button
              onClick={() => setShowMyInfo(true)}
              className="bg-[#005eb8] text-white px-4 py-2 font-bold rounded"
            >
              My Info
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className={`${item.bg} ${item.text} p-4 flex justify-between items-center shadow border border-gray-300 rounded-sm w-full`}
              >
                <span className="font-bold text-lg">{item.title}</span>
                <ChevronRight className="w-8 h-8" />
              </button>
            ))}
          </div>

          <div className="mt-8">
            <button
              onClick={() => router.push('/settings')}
              className="bg-white text-black p-4 flex justify-between items-center shadow border border-gray-300 rounded-sm w-full"
            >
              <span className="font-bold text-lg">Settings</span>
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          <div className="mt-auto pt-8 flex justify-end">
            <button
              className="text-[#005eb8] font-bold text-lg underline"
              onClick={() => router.push('/home/safety')}
            >
              Exit app
            </button>
          </div>
        </div>
      </div>

      {showMyInfo && <MyInfoPopup onClose={() => setShowMyInfo(false)} />}
    </InactivityWrapper>
  );
}
