import React, { useState } from 'react';
import { useOnboardingStore } from '@/store/onboardingStore';

interface PracticeManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PracticeManagerModal({ isOpen, onClose }: PracticeManagerModalProps) {
  const store = useOnboardingStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md flex flex-col">
        <div className="bg-[#005eb8] text-white p-4 rounded-t-lg">
          <h2 className="text-2xl font-bold">The Practice Manager</h2>
        </div>

        <div className="p-6 flex flex-col gap-4">
          <p className="text-lg">
            Our practice manager is <span className="font-bold">Mrs Jane Smith</span>.
          </p>

          <div className="bg-blue-50 p-4 border-l-4 border-[#005eb8]">
            <p className="text-md mb-2">You can contact the Practice Manager about:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>General enquiries</li>
              <li>Comments and suggestions</li>
              <li>Complaints</li>
              <li>Compliments</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="font-bold text-lg mb-2">Contact Details</h3>
            <p><strong>Telephone:</strong> 0151 123 4567</p>
            <p><strong>Email:</strong> manager@brownlowhealth.nhs.uk</p>
          </div>

          <div className="mt-2">
            <h3 className="font-bold text-lg mb-2">In Person</h3>
            <p>
              Please ask at reception if you would like to speak to the Practice Manager.
              They may be able to see you immediately or arrange an appointment.
            </p>
          </div>
        </div>

        <div className="p-4 border-t flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#005eb8] text-white px-6 py-2 rounded font-bold hover:bg-[#004a92]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
