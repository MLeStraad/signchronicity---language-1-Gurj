import React from 'react';
import { useOnboardingStore } from '@/store/onboardingStore';

interface PracticeManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PracticeManagerModal({ isOpen, onClose }: PracticeManagerModalProps) {
  const store = useOnboardingStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white flex flex-col z-50">
      <div className="bg-[#005eb8] text-white p-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">The Practice Manager</h2>
      </div>

      <div className="p-6 flex-grow overflow-y-auto">
        <p className="text-lg mb-4">
          You can contact the Practice Manager at <span className="font-bold">{store.gpDetails.name || 'your GP practice'}</span> about:
        </p>

        <ul className="list-disc pl-5 mb-6 space-y-1 text-lg">
          <li>General enquiries</li>
          <li>Comments and suggestions</li>
          <li>Complaints</li>
          <li>Compliments</li>
        </ul>

        <div className="mb-6">
          <h3 className="font-bold text-lg mb-2">In Person</h3>
          <p className="text-lg">
            Please ask at reception if you would like to speak to the Practice Manager. They may be able to see you immediately or arrange an appointment.
          </p>
        </div>
      </div>

      <div className="p-6">
        <button
          onClick={onClose}
          className="w-full bg-[#005eb8] text-white text-xl py-4 rounded-full font-bold hover:bg-[#004a92]"
        >
          Close
        </button>
      </div>
    </div>
  );
}
