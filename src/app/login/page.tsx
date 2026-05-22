'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const PinEntry = () => {
  const [pin, setPin] = useState('');
  const router = useRouter();

  const handlePinChange = (value: string) => {
    if (pin.length < 4) {
      setPin(pin + value);
    }
  };

  const handlePinDelete = () => {
    setPin(pin.slice(0, -1));
  };

  const handleUnlock = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-nhs-blue mb-4">Enter your PIN</h1>
      <div className="flex space-x-4 mb-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className={`w-8 h-8 rounded-full ${pin.length > i ? 'bg-nhs-blue' : 'bg-gray-300'}`}></div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 w-64">
        {[...Array(9)].map((_, i) => (
          <button 
            key={i+1}
            className="text-2xl font-bold bg-white rounded-lg p-4 shadow-md hover:bg-gray-200"
            onClick={() => handlePinChange((i + 1).toString())}
          >
            {i + 1}
          </button>
        ))}
        <div />
        <button 
            className="text-2xl font-bold bg-white rounded-lg p-4 shadow-md hover:bg-gray-200"
            onClick={() => handlePinChange('0')}
          >
            0
          </button>
        <button 
          className="text-xl font-bold bg-white rounded-lg p-4 shadow-md hover:bg-gray-200"
          onClick={handlePinDelete}
        >
          Del
        </button>
      </div>
      <button 
        className="mt-8 bg-nhs-blue text-white font-bold py-3 px-12 rounded-lg text-xl shadow-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
        onClick={handleUnlock}
        disabled={pin.length !== 4}
      >
        Unlock
      </button>
    </div>
  );
};

const FingerprintEntry = ({ onAuthenticated }: { onAuthenticated: () => void }) => {
  const router = useRouter();

  const handleFingerprintSuccess = () => {
    onAuthenticated();
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold text-nhs-blue mb-4">Unlock with your fingerprint</h1>
        <p className="text-lg text-gray-600 mb-8">Place your finger on the sensor.</p>
        <img src="/fingerprint.svg" alt="Fingerprint Scanner" className="w-32 h-32 mb-8 animate-pulse" />
        <button 
          onClick={handleFingerprintSuccess} 
          className="text-nhs-blue hover:underline"
        >
          (Simulate successful scan)
        </button>
    </div>
  );
};

const LoginPage = () => {
  const [securityChoice, setSecurityChoice] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const choice = localStorage.getItem('securityChoice');
      setSecurityChoice(choice);
    }
  }, []);

  if (isAuthenticated) {
      return null; 
  }
  
  if (securityChoice === 'fingerprint') {
    return <FingerprintEntry onAuthenticated={() => setIsAuthenticated(true)} />;
  }

  if (securityChoice === 'pin') {
    return <PinEntry />;
  }
  
  // Default to PIN if no choice is stored
  return <PinEntry />;
};

export default LoginPage;