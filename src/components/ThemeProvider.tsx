'use client';

import React, { useEffect } from 'react';
import { useOnboardingStore } from '@/store/onboardingStore';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useOnboardingStore((state) => state.theme);

  useEffect(() => {
    // Remove all theme classes first
    document.documentElement.classList.remove('theme-light', 'theme-dark', 'theme-accessible');

    // Add the current theme class
    // Default to light if system (for demo purposes) or undefined
    const activeTheme = theme === 'system' ? 'light' : theme || 'light';
    document.documentElement.classList.add(`theme-${activeTheme}`);

    // In a real implementation we would also set CSS variables here
    // based on NHS accessibility guidelines
  }, [theme]);

  return <>{children}</>;
}
