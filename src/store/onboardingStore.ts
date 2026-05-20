import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface OnboardingState {
  hasCompletedOnboarding: boolean;
  theme: 'light' | 'dark' | 'system';
  agreedToTerms: boolean;
  gpDetails: {
    name: string;
    practiceName: string;
    address: string;
    telephone: string;
  };
  personalDetails: {
    title: string;
    firstName: string;
    lastName: string;
    preferredName: string;
    dobDay: string;
    dobMonth: string;
    dobYear: string;
    addressLine1: string;
    addressLine2: string;
    postcode: string;
    telephone: string;
  };
  translator: string | null;
  securityPreference: 'pin' | 'biometric' | 'none';
  pinHash: string | null;

  // Actions
  completeOnboarding: () => void;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setAgreedToTerms: (agreed: boolean) => void;
  setPersonalDetails: (details: Partial<OnboardingState['personalDetails']>) => void;
  setGpDetails: (details: Partial<OnboardingState['gpDetails']>) => void;
  setTranslator: (translator: string) => void;
  setSecurityPreference: (pref: 'pin' | 'biometric' | 'none', pinHash?: string) => void;
  resetOnboarding: () => void;
}

const initialState = {
  hasCompletedOnboarding: false,
  theme: 'system' as const,
  agreedToTerms: false,
  personalDetails: {
    title: '',
    firstName: '',
    lastName: '',
    preferredName: '',
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    addressLine1: '',
    addressLine2: '',
    postcode: '',
    telephone: '',
  },
  gpDetails: {
    name: '',
    practiceName: '',
    address: '',
    telephone: '',
  },
  translator: null,
  securityPreference: 'none' as const,
  pinHash: null,
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
      setTranslator: (translator) => set({ translator }),
      setSecurityPreference: (securityPreference, pinHash = null) =>
        set({ securityPreference, pinHash }),
      resetOnboarding: () => set(initialState),
    }),
    {
      name: 'signchronicity-storage',
    }
  )
);
