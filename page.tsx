"use client";

import { NHSHeader } from '@/components/NHSHeader';
import { MenuButton } from '@/components/MenuButton';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function SettingsPage() {
  const router = useRouter();

  const options = [
    { label: "Language settings", desc: "Select your preferred language" },
    { label: "Accessibility", desc: "Change font size and high contrast" },
    { label: "Notifications", desc: "Manage vibration and alert sounds" },
    { label: "About Signchronicity", desc: "App version and terms" }
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#D0D5DB] min-h-screen">
      <NHSHeader />
      <main className="flex-1 max-w-md w-full mx-auto flex flex-col">
        <div className="p-4 py-8 bg-white border-b-4 border-[#005EB8]">
           <h1 className="text-4xl font-extrabold text-[#005EB8] tracking-tight">Settings</h1>
        </div>

        <div className="flex flex-col flex-1">
          {options.map((opt, i) => (
            <MenuButton 
              key={i} 
              href="#"
              description={opt.desc}
              className="border-b border-gray-200"
            >
              {opt.label}
            </MenuButton>
          ))}
        </div>

        <footer className="mt-auto p-6">
          <Button 
            onClick={() => router.back()} 
            className="w-full bg-[#005EB8] hover:bg-[#003087] text-white rounded-none py-6 h-auto text-2xl font-bold flex items-center justify-between px-8 border-b-4 border-[#003087] nhs-focus"
          >
            <span>Back</span>
            <ChevronRight className="w-12 h-12" />
          </Button>
        </footer>
      </main>
    </div>
  );
}
