"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { NHSHeader } from '@/components/NHSHeader';
import { ChevronRight } from 'lucide-react';

interface SubMenuScreenProps {
  title: string;
  items: string[];
  nextRoute: string;
}

export function SubMenuScreen({ title, items, nextRoute }: SubMenuScreenProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[var(--onboarding-bg)] text-[var(--onboarding-text)] flex flex-col items-center">
      <NHSHeader />

      <div className="w-full max-w-md p-6 flex flex-col flex-grow">
        <h1 className="text-4xl font-bold text-[#005eb8] mb-6">{title}</h1>

        <div className="flex flex-col gap-2">
          <button
            onClick={() => router.push('/home/about')}
            className="bg-[#1d70b8] text-white p-4 flex justify-between items-center shadow-sm w-full"
          >
            <span className="font-bold text-lg">Play "About app video" for staff</span>
            <ChevronRight className="w-8 h-8" />
          </button>

          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => router.push(nextRoute)}
              className="bg-white text-black p-4 flex justify-between items-center shadow-sm w-full border-b border-gray-200"
            >
              <span className="font-bold text-lg">{item}</span>
              <ChevronRight className="w-8 h-8 text-black" />
            </button>
          ))}
        </div>

        <div className="mt-auto pt-8 flex justify-between">
          <button
            className="text-black font-bold text-lg"
            onClick={() => router.back()}
          >
            Back
          </button>
          <button
            className="text-black font-bold text-lg"
            onClick={() => router.push('/home')}
          >
            Main Menu
          </button>
        </div>
      </div>
    </div>
  );
}
