'use client';

import React from 'react';
import Link from 'next/link';

const HelloPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4 text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold text-nhs-blue">Hello!</h1>
        <p className="mt-4 text-lg text-gray-700">
          Welcome to signchronicity, the app that helps you communicate during your health appointments.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          Setup is very quick - we just need a few details. This will take about 2 minutes.
        </p>
        <Link href="/onboarding/name">
          <button className="mt-8 bg-nhs-blue text-white font-bold py-3 px-12 rounded-lg text-xl shadow-lg hover:bg-blue-700 transition-colors">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HelloPage;