'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useOnboardingStore } from '@/store/onboardingStore';

export function PinUnlock({ onSuccess }: { onSuccess: () => void }) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const storedPinHash = useOnboardingStore((state) => state.pinHash);

  const handleKeyPress = (num: string) => {
    if (pin.length < 4) {
      const newPin = pin + num;
      setPin(newPin);
      setError(false);

      if (newPin.length === 4) {
        verifyPin(newPin);
      }
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
    setError(false);
  };

  const verifyPin = async (enteredPin: string) => {
    // In a real app, hash the entered pin and compare with storedPinHash
    // For this mockup, we'll assume a simple hash or plain match if no crypto is available
    const isValid = enteredPin === storedPinHash; // Simplified for MVP

    if (isValid) {
      onSuccess();
    } else {
      setError(true);
      setTimeout(() => setPin(''), 500); // Clear after error
    }
  };

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center text-white p-6 animate-in fade-in zoom-in duration-300">
      <div className="flex-1 flex flex-col items-center justify-start w-full max-w-sm mt-12 space-y-12">

        {/* Logo Header */}
        <div className="flex flex-col items-center space-y-4">
            <Image
                src="/images/logo.png"
                alt="Signchronicity Logo"
                width={80}
                height={80}
            />
          <div className="text-center w-full">
            <h1 className="text-3xl font-extrabold tracking-tight lowercase">signchronicity</h1>
            <div className="w-full h-px bg-white/50 my-1"></div>
            <p className="text-xs font-semibold tracking-wide">your health. your words. your way.</p>
          </div>
        </div>

        {/* PIN Entry Area */}
        <div className="w-full space-y-8 flex flex-col items-center">
          <div className="flex justify-center space-x-4">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className={`w-12 h-1 border-b-2 transition-colors duration-200 ${
                  error ? 'border-destructive' :
                  pin.length > index ? 'border-white' : 'border-white/40'
                }`}
              />
            ))}
          </div>
          <p className={`text-lg font-medium ${error ? 'text-destructive-foreground bg-destructive px-3 py-1 rounded' : ''}`}>
            {error ? 'Incorrect PIN' : 'Enter your PIN to unlock'}
          </p>
        </div>

        {/* Keypad */}
        <div className="grid grid-cols-3 gap-4 w-full max-w-[280px] mt-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleKeyPress(num.toString())}
              className="w-full aspect-square rounded-full flex items-center justify-center text-2xl font-semibold hover:bg-white/10 active:bg-white/20 transition-colors"
            >
              {num}
            </button>
          ))}
          <div className="w-full aspect-square"></div>
          <button
            onClick={() => handleKeyPress('0')}
            className="w-full aspect-square rounded-full flex items-center justify-center text-2xl font-semibold hover:bg-white/10 active:bg-white/20 transition-colors"
          >
            0
          </button>
          <button
            onClick={handleDelete}
            className="w-full aspect-square rounded-full flex items-center justify-center text-lg font-medium hover:bg-white/10 active:bg-white/20 transition-colors"
          >
            Del
          </button>
        </div>

      </div>
    </div>
  );
}
