'use client';

import { useEffect, useRef } from 'react';
import { useOnboardingStore } from '@/store/onboardingStore';

export function InactivityWrapper({ children, onTimeout }: { children: React.ReactNode, onTimeout: () => void }) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const securityPreference = useOnboardingStore((state) => state.securityPreference);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (securityPreference !== 'none') {
      timeoutRef.current = setTimeout(() => {
        onTimeout();
      }, 10 * 60 * 1000); // 10 minutes
    }
  };

  useEffect(() => {
    resetTimeout();

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach((event) => {
      window.addEventListener(event, resetTimeout);
    });

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      events.forEach((event) => {
        window.removeEventListener(event, resetTimeout);
      });
    };
  }, [securityPreference]);

  return <>{children}</>;
}
