"use client";
import React from 'react';

export function RedChaperonePopup({ onClose, onContinue }: { onClose: () => void, onContinue: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex flex-col items-center justify-center z-50 p-4">
      <div className="bg-[#DA291C] text-white w-full max-w-md p-6 shadow-lg flex flex-col items-center text-center space-y-6">
        <h2 className="text-3xl font-bold uppercase tracking-wider">Warning</h2>

        <div className="space-y-4 text-xl font-bold">
          <p>Please wait!</p>
          <p>The patient has requested a Chaperone for this appointment.</p>
          <p>Please DO NOT proceed until a chaperone is present.</p>
        </div>

        <button
          onClick={onContinue}
          className="w-full py-4 mt-8 bg-black text-white text-2xl font-bold rounded"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}
