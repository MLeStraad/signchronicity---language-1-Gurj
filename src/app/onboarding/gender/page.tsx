'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import OnboardingProgressBar from '@/components/OnboardingProgressBar';

const GenderPage = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(1);
  const [playingAvatar, setPlayingAvatar] = useState<number | null>(null);

  const handleSelectAvatar = (avatarId: number) => {
    setSelectedAvatar(avatarId);
    setPlayingAvatar(null);
  };

  // NOTE: The video files (e.g., /avatars/avatar1.mp4) and thumbnail images (e.g., /avatars/avatar1.png) 
  // need to be created in the `public/avatars` directory.

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
        <div className="w-full max-w-lg">
          <OnboardingProgressBar currentStep={6} totalSteps={7} />
          <h1 className="text-4xl font-bold text-nhs-blue mb-2 text-center">Personalise.</h1>
          <p className="text-lg text-gray-600 mb-6 text-center">Choose an avatar. Click to preview.</p>

          <div className="grid grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map((avatarId) => (
              <div
                key={avatarId}
                className={`cursor-pointer p-2 border-4 ${selectedAvatar === avatarId ? 'border-blue-500' : 'border-transparent'} rounded-full`}
                onClick={() => setPlayingAvatar(avatarId)}
              >
                <img src={`/avatars/avatar${avatarId}.png`} alt={`Avatar ${avatarId}`} className="w-24 h-24 rounded-full mx-auto" />
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <Link href="/onboarding/gp-details">
              <span className="text-nhs-blue hover:underline">Back</span>
            </Link>
            <Link href="/onboarding/security">
              <button className="bg-nhs-blue text-white font-bold py-2 px-8 rounded-lg text-lg hover:bg-blue-700 transition-colors">
                Next &gt;
              </button>
            </Link>
          </div>
        </div>
      </div>

      {playingAvatar && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold text-nhs-blue mb-4">Preview Avatar</h2>
            <video 
              src={`/avatars/avatar${playingAvatar}.mp4`} 
              className="w-full rounded-lg mb-4"
              controls 
              autoPlay 
              loop
            >
              Your browser does not support the video tag.
            </video>
            <div className="flex justify-between">
              <button 
                onClick={() => setPlayingAvatar(null)}
                className="text-nhs-blue hover:underline"
              >
                Close
              </button>
              <button 
                onClick={() => handleSelectAvatar(playingAvatar)}
                className="bg-nhs-blue text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Select this Avatar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GenderPage;