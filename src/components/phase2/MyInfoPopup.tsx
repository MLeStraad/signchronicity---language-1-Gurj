"use client";
import React, { useEffect, useState } from 'react';
import { useOnboardingStore } from '@/store/onboardingStore';

export function MyInfoPopup({ onClose }: { onClose: () => void }) {
  const { name, dateOfBirth, address, phoneNumber, gpDetails } = useOnboardingStore();
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft <= 0) {
      onClose();
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onClose]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-md shadow-lg overflow-hidden flex flex-col h-[85vh]">
        <div className="bg-[#005EB8] text-white p-6">
          <h2 className="text-4xl font-bold">My Info</h2>
        </div>

        <div className="p-6 flex-grow overflow-y-auto space-y-6 text-xl">
          <div>
            <span className="font-bold">Name:</span> {name}
          </div>
          <div>
            <span className="font-bold">Address:</span>
            <p className="whitespace-pre-wrap">{address}</p>
          </div>
          <div>
            <span className="font-bold">Date of Birth:</span> {dateOfBirth}
          </div>
          <div>
            <span className="font-bold">Telephone:</span> {phoneNumber}
          </div>
          <div className="pt-4 border-t border-gray-300">
            <div><span className="font-bold">GP Name:</span> {gpDetails.name}</div>
            <div className="mt-2"><span className="font-bold">GP Practice:</span> {gpDetails.address}</div>
          </div>
        </div>

        <div className="p-6 bg-white border-t flex flex-col items-center gap-4">
          <p className="text-sm text-center">This window will close automatically in {timeLeft} seconds</p>
          <button
            onClick={onClose}
            className="w-full py-4 border-2 border-[#005EB8] text-black text-2xl font-bold rounded-xl"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
