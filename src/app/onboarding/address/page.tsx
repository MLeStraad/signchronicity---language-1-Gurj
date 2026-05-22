'use client';

import React from 'react';
import Link from 'next/link';
import OnboardingProgressBar from '@/components/OnboardingProgressBar';

const AddressPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <OnboardingProgressBar currentStep={3} totalSteps={7} />
        <h1 className="text-4xl font-bold text-nhs-blue mb-2">About you.</h1>
        <p className="text-lg text-gray-600 mb-6">Please tell us your address.</p>
        
        <div className="mb-4">
          <label htmlFor="address-1" className="block text-gray-700 font-bold mb-2">Address line 1</label>
          <input type="text" id="address-1" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div className="mb-4">
          <label htmlFor="address-2" className="block text-gray-700 font-bold mb-2">Address line 2 (optional)</label>
          <input type="text" id="address-2" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div className="mb-4">
          <label htmlFor="town" className="block text-gray-700 font-bold mb-2">Town or city</label>
          <input type="text" id="town" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div className="mb-6">
          <label htmlFor="postcode" className="block text-gray-700 font-bold mb-2">Postcode</label>
          <input type="text" id="postcode" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-6">
          <p className="font-bold">Just so you know.</p>
          <p>Information you give us here will be used to populate the "My Info" pop up in the app.</p>
          <p>All personal information is held on your device ONLY.</p>
        </div>

        <div className="flex justify-between items-center">
          <Link href="/onboarding/date-of-birth">
            <span className="text-nhs-blue hover:underline">Back</span>
          </Link>
          <Link href="/onboarding/telephone">
            <button className="bg-nhs-blue text-white font-bold py-2 px-8 rounded-lg text-lg hover:bg-blue-700 transition-colors">
              Next &gt;
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddressPage;