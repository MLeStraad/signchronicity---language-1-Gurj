"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function AboutApp() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white">
      <div className="w-full max-w-md aspect-video bg-gray-800 flex items-center justify-center mb-8">
        <span className="text-gray-400">Video Player Placeholder</span>
      </div>
      <button
        onClick={() => router.back()}
        className="px-8 py-4 bg-white text-black font-bold rounded-xl text-xl"
      >
        Close Video
      </button>
    </div>
  );
}
