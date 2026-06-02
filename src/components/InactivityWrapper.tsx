'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

const InactivityWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  const [showModal, setShowModal] = useState(false);

  const resetTimer = () => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = setTimeout(() => {
      setShowModal(true);
    }, 5 * 60 * 1000); // 5 minutes
  };

  const handleActivity = () => {
    resetTimer();
  };

  const handleLogout = () => {
    router.push('/login');
  };

  const handleContinue = () => {
    setShowModal(false);
    resetTimer();
  }

  useEffect(() => {
    resetTimer();

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('click', handleActivity);

    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('click', handleActivity);
    };
  }, []);

  return (
    <>
      {children}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Still there?</h2>
            <p className="mb-8">You've been inactive for a while. For your security, we'll log you out soon.</p>
            <div className="flex justify-around">
              <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg">Logout</button>
              <button onClick={handleContinue} className="bg-green-500 text-white px-4 py-2 rounded-lg">Continue</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InactivityWrapper;
