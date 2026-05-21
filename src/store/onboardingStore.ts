import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface OnboardingState {
  hasCompletedOnboarding: boolean;
  theme: 'light' | 'dark' | 'system';
  agreedToTerms: boolean;
  personalDetails: {
    name: string;
    dob: string;
    address: string;
    telephone: string;
  };
  gpDetails: {
    name: string;
    address: string;
  };
  securityPreference: 'pin' | 'biometric' | 'none';
  pinHash: string | undefined;

  // Actions
  completeOnboarding: () => void;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setAgreedToTerms: (agreed: boolean) => void;
  setPersonalDetails: (details: Partial<OnboardingState['personalDetails']>) => void;
  setGpDetails: (details: Partial<OnboardingState['gpDetails']>) => void;
  setSecurityPreference: (pref: 'pin' | 'biometric' | 'none', pinHash?: string) => void;
  resetOnboarding: () => void;
}

const initialState = {
  hasCompletedOnboarding: false,
  theme: 'system' as const,
  agreedToTerms: false,
  personalDetails: {
    name: '',
    dob: '',
    address: '',
    telephone: '',
  },
  gpDetails: {
    name: '',
    address: '',
  },
  securityPreference: 'none' as const,
  pinHash: undefined,
};

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      ...initialState,
      completeOnboarding: () => set({ hasCompletedOnboarding: true }),
      setTheme: (theme) => set({ theme }),
      setAgreedToTerms: (agreed) => set({ agreedToTerms: agreed }),
      setPersonalDetails: (details) =>
        set((state) => ({
          personalDetails: { ...state.personalDetails, ...details }
        })),
      setGpDetails: (details) =>
        set((state) => ({
          gpDetails: { ...state.gpDetails, ...details }
        })),
      setSecurityPreference: (securityPreference, pinHash = undefined) =>
        set({ securityPreference, pinHash }),
      resetOnboarding: () => set(initialState),
    }),
    {
      name: 'signchronicity-storage',
    }
  )
);
