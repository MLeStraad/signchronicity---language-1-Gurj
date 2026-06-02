'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import InactivityWrapper from '@/components/InactivityWrapper';

// A mapping from the display name to the actual path
const settingsLinks = {
  'Dark/Light Mode': '/onboarding/dark-light-mode',
  'Name': '/onboarding/name',
  'Address/Post Code': '/onboarding/address',
  'Telephone': '/onboarding/telephone',
  'GP Details': '/onboarding/gp-details',
  'Gender of signer': '/onboarding/gender',
  'Biometric passcode': '/onboarding/biometrics',
  'PIN passcode': '/onboarding/pin',
};

const SettingsPage = () => {
  const menuItems = Object.keys(settingsLinks) as (keyof typeof settingsLinks)[];

  return (
    <InactivityWrapper>
      <div className="flex flex-col h-screen bg-white font-sans">
        {/* Header */}
        <header className="bg-white border-b-4 border-nhs-blue px-4">
          <div className="container mx-auto py-5">
            <h1 className="text-4xl font-bold text-nhs-blue">Settings</h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          <ul className="divide-y divide-gray-200">
            {menuItems.map((item) => (
              <li key={item}>
                <Link href={settingsLinks[item]} className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400">
                  <span className="text-xl text-black">{item}</span>
                  <ChevronRight className="h-8 w-8 text-gray-400" />
                </Link>
              </li>
            ))}
          </ul>
        </main>

        {/* Footer */}
        <footer className="py-6 px-4">
            <div className="container mx-auto flex justify-between">
                <Link href="/home" className="text-lg text-nhs-blue font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-md">
                    Main Menu
                </Link>
                <Link href="/" className="text-lg text-nhs-blue font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-md">
                    Exit app
                </Link>
            </div>
        </footer>
      </div>
    </InactivityWrapper>
  );
};

export default SettingsPage;
