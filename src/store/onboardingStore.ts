import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface OnboardingState {
  hasCompletedOnboarding: boolean;
  theme: 'light' | 'dark' | null;
  termsAccepted: boolean;
  name: string;
  dateOfBirth: string;
  address: string;
  phoneNumber: string;
  gpDetails: { name: string; address: string };
  translatorChoice: string;
  securityPreference: 'pin' | 'biometric' | 'none';
  pinHash: string | null;

  setHasCompletedOnboarding: (completed: boolean) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  setTermsAccepted: (accepted: boolean) => void;
  setName: (name: string) => void;
  setDateOfBirth: (dob: string) => void;
  setAddress: (address: string) => void;
  setPhoneNumber: (phone: string) => void;
  setGpDetails: (gpDetails: { name: string; address: string }) => void;
  setTranslatorChoice: (choice: string) => void;
  setSecurityPreference: (preference: 'pin' | 'biometric' | 'none') => void;
  setPinHash: (pinHash: string | null) => void;
  reset: () => void;
}

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      hasCompletedOnboarding: false,
      theme: null,
      termsAccepted: false,
      name: '',
      dateOfBirth: '',
      address: '',
      phoneNumber: '',
      gpDetails: { name: '', address: '' },
      translatorChoice: '',
      securityPreference: 'none',
      pinHash: null,

      setHasCompletedOnboarding: (completed) => set({ hasCompletedOnboarding: completed }),
      setTheme: (theme) => set({ theme }),
      setTermsAccepted: (accepted) => set({ termsAccepted: accepted }),
      setName: (name) => set({ name }),
      setDateOfBirth: (dateOfBirth) => set({ dateOfBirth }),
      setAddress: (address) => set({ address }),
      setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
      setGpDetails: (gpDetails) => set({ gpDetails }),
      setTranslatorChoice: (translatorChoice) => set({ translatorChoice }),
      setSecurityPreference: (securityPreference) => set({ securityPreference }),
      setPinHash: (pinHash) => set({ pinHash }),
      reset: () => set({
        hasCompletedOnboarding: false,
        theme: null,
        termsAccepted: false,
        name: '',
        dateOfBirth: '',
        address: '',
        phoneNumber: '',
        gpDetails: { name: '', address: '' },
        translatorChoice: '',
        securityPreference: 'none',
        pinHash: null
      }),
    }),
    {
      name: 'onboarding-storage',
    }
  )
);
