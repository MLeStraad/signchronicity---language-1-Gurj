"use client";
import React, { useState } from 'react';
import { NHSHeader } from '@/components/NHSHeader';
import { RedChaperonePopup } from './RedChaperonePopup';
import { Volume2, Square, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function TranslationScreen({
  title,
  onExit
}: {
  title: string;
  onExit?: () => void;
}) {
  const router = useRouter();
  const [isRecording, setIsRecording] = useState(false);
  const [showChaperone, setShowChaperone] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--onboarding-bg)] text-[var(--onboarding-text)] flex flex-col">
      <NHSHeader />

      {/* Top Banner */}
      <div className="bg-[#005EB8] text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <button
          onClick={() => setShowChaperone(true)}
          className="bg-[#DA291C] text-white px-4 py-2 font-bold"
        >
          Red Chaperone flag
        </button>
      </div>

      {/* Main Content Area - Split View */}
      <div className="flex-grow flex flex-col p-4 gap-4">
        {/* Patient Translation Area */}
        <div className="flex-1 bg-white border border-gray-300 flex flex-col rounded shadow-sm">
          <div className="bg-gray-100 p-2 font-bold border-b text-black text-center">Patient English translation will appear here</div>
          <div className="flex-grow p-4 flex items-center justify-center text-gray-400">
            {isRecording ? "Translating..." : "Waiting for input..."}
          </div>
        </div>

        {/* Staff Translation Area */}
        <div className="flex-1 bg-white border border-gray-300 flex flex-col rounded shadow-sm">
          <div className="bg-gray-100 p-2 font-bold border-b text-black text-center">Your language translation will appear here</div>
          <div className="flex-grow p-4 flex items-center justify-center text-gray-400">
            {isRecording ? "Listening..." : "Waiting to record..."}
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="p-4 bg-gray-200 border-t border-gray-300">
        {!isRecording ? (
          <button
            onClick={() => setIsRecording(true)}
            className="w-full bg-[#005EB8] text-white py-6 rounded-xl font-bold text-2xl flex items-center justify-center gap-3"
          >
            <Volume2 className="w-8 h-8" />
            Start Record
          </button>
        ) : (
          <button
            onClick={() => setIsRecording(false)}
            className="w-full bg-[#DA291C] text-white py-6 rounded-xl font-bold text-2xl flex items-center justify-center gap-3"
          >
            <Square className="w-8 h-8 fill-current" />
            Stop record
          </button>
        )}
      </div>

      {/* Exit Button */}
      <div className="p-4 bg-gray-200 flex justify-end pb-8">
        <button
          onClick={onExit || (() => router.back())}
          className="text-black bg-white px-8 py-4 font-bold border-2 border-black rounded shadow"
        >
          Exit
        </button>
      </div>

      {showChaperone && (
        <RedChaperonePopup
          onClose={() => setShowChaperone(false)}
          onContinue={() => setShowChaperone(false)}
        />
      )}
    </div>
  );
}
