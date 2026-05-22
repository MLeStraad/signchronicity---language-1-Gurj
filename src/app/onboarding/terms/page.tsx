'use client';

import React from 'react';
import Link from 'next/link';

const TermsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-nhs-blue mb-4 text-center">Terms and conditions of use during 120 day trial period.</h1>
        <div className="prose prose-sm sm:prose-base max-w-none text-gray-700 space-y-4">
          <p>Welcome to signchronicity. We are committed to protecting your privacy and ensuring your data remains secure. Please read these terms carefully.</p>
          <h2 className="font-bold text-lg sm:text-xl">1. Data Privacy and Local Storage</h2>
          <p>
            Signchronicity is a local-first application. This means that all of your personal information, including your name, date of birth, address, and any other data you provide, is stored exclusively on your own device. 
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><span className="font-semibold">Zero Cloud Storage:</span> Your personal data is never sent to, or stored on, any cloud servers or external databases.</li>
            <li><span className="font-semibold">No Central Integration:</span> The app does not integrate with any NHS or clinical systems like the NHS Spine or EMIS. No NHS numbers or medical data are stored.</li>
            <li><span className="font-semibold">Privacy First:</span> No audio or transcription data ever leaves your device during the translation process.</li>
          </ul>
          <h2 className="font-bold text-lg sm:text-xl">2. 120-Day Trial</h2>
          <p>
            This application is provided to you for a 120-day trial period. After the trial, you may be required to take further action to continue using the service.
          </p>
          <h2 className="font-bold text-lg sm:text-xl">3. Your Agreement</h2>
          <p>
            By clicking "I agree," you acknowledge that you have read, understood, and agree to these terms, confirming that your data will be held locally and securely on your device.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/onboarding" className="w-full sm:w-auto">
            <button className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors">
              I decline
            </button>
          </Link>
          <Link href="/onboarding/hello" className="w-full sm:w-auto">
            <button className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors">
              I agree
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
