'use client';

import React from 'react';
import Link from 'next/link';
import OnboardingProgressBar from '@/components/OnboardingProgressBar';

const DateOfBirthPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <OnboardingProgressBar currentStep={2} totalSteps={7} />
        <h1 className="text-4xl font-bold text-nhs-blue mb-2">About you.</h1>
        <p className="text-lg text-gray-600 mb-6">Please tell us your date of birth.</p>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label htmlFor="day" className="block text-gray-700 font-bold mb-2">Day</label>
            <input type="text" id="day" placeholder="DD" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div>
            <label htmlFor="month" className="block text-gray-700 font-bold mb-2">Month</label>
            <input type="text" id="month" placeholder="MM" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div>
            <label htmlFor="year" className="block text-gray-700 font-bold mb-2">Year</label>
            <input type="text" id="year" placeholder="YYYY" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
        </div>

        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-6">
          <p className="font-bold">Just so you know.</p>
          <p>Information you give us here will be used to populate the "My Info" pop up in the app.</p>
          <p>All personal information is held on your device ONLY.</p>
        </div>

        <div className="flex justify-between items-center">
          <Link href="/onboarding/name">
            <span className="text-nhs-blue hover:underline">Back</span>
          </Link>
          <Link href="/onboarding/address">
            <button className="bg-nhs-blue text-white font-bold py-2 px-8 rounded-lg text-lg hover:bg-blue-700 transition-colors">
              Next &gt;
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DateOfBirthPage;