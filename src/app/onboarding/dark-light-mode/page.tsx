'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const DarkLightModePage = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-2">Welcome to signchronicity!</h1>
      <p className="text-lg text-gray-600 mb-8">Please choose a colour to display the app in.</p>
      <div className="flex space-x-8 mb-8">
        <div 
          className={`cursor-pointer p-4 border-4 ${theme === 'dark' ? 'border-blue-500' : 'border-transparent'} rounded-lg`}
          onClick={() => setTheme('dark')}
        >
          <div className="w-40 h-64 bg-gray-800 rounded-lg flex flex-col justify-center items-center text-white">
            <h2 className="font-bold">Hello!</h2>
            <p className="text-xs text-center">Welcome! This app helps you communicate. Setup is quick.</p>
          </div>
          <p className="text-center mt-2 font-semibold">Use Dark Mode</p>
        </div>
        <div 
          className={`cursor-pointer p-4 border-4 ${theme === 'light' ? 'border-blue-500' : 'border-transparent'} rounded-lg`}
          onClick={() => setTheme('light')}
        >
          <div className="w-40 h-64 bg-white rounded-lg flex flex-col justify-center items-center text-black border-2 border-gray-200">
            <h2 className="font-bold">Hello!</h2>
            <p className="text-xs text-center">Welcome! This app helps you communicate. Setup is quick.</p>
          </div>
          <p className="text-center mt-2 font-semibold">Use Light Mode</p>
        </div>
      </div>
      <Link href="/onboarding/terms">
        <button className="bg-blue-500 text-white font-bold py-2 px-8 rounded-lg text-lg hover:bg-blue-600 transition-colors">
          Next &gt;
        </button>
      </Link>
    </div>
  );
};

export default DarkLightModePage;