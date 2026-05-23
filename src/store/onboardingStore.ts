import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface OnboardingState {
  hasCompletedOnboarding: boolean;
  completeOnboarding: () => void;
  resetOnboarding: () => void;

  theme: 'light' | 'dark' | 'accessible' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'accessible' | 'system') => void;

  acceptedTerms: boolean;
  setAcceptedTerms: (accepted: boolean) => void;

  firstName: string;
  lastName: string;
  setName: (firstName: string, lastName: string) => void;

  dob: { day: string; month: string; year: string };
  setDob: (dob: { day: string; month: string; year: string }) => void;

  addressLine1: string;
  addressLine2: string;
  city: string;
  postcode: string;
  setAddress: (address: { addressLine1: string; addressLine2: string; city: string; postcode: string }) => void;

  phoneNumber: string;
  setPhoneNumber: (phone: string) => void;

  gpName: string;
  gpPractice: string;
  setGp: (gpName: string, gpPractice: string) => void;

  translatorChoice: string;
  setTranslatorChoice: (choice: string) => void;

  securityChoice: 'biometric' | 'pin' | 'none';
  setSecurityChoice: (choice: 'biometric' | 'pin' | 'none') => void;

  pin: string;
  setPin: (pin: string) => void;

  // Legacy mappings for backwards compatibility (don't break existing components)
  securityPreference: 'biometric' | 'pin' | 'none';
  pinHash: string | undefined;
  setSecurityPreference: (pref: 'pin' | 'biometric' | 'none', pinHash?: string) => void;
  gpDetails: { name: string; address: string };
  setGpDetails: (details: Partial<{ name: string; address: string }>) => void;
  personalDetails: { name: string; dob: string; address: string; telephone: string };
  setPersonalDetails: (details: Partial<{ name: string; dob: string; address: string; telephone: string }>) => void;
  agreedToTerms: boolean;
  setAgreedToTerms: (agreed: boolean) => void;
}

const initialState = {
  hasCompletedOnboarding: false,
  theme: 'system' as const,
  acceptedTerms: false,
  firstName: '',
  lastName: '',
  dob: { day: '', month: '', year: '' },
  addressLine1: '',
  addressLine2: '',
  city: '',
  postcode: '',
  phoneNumber: '',
  gpName: '',
  gpPractice: '',
  translatorChoice: '',
  securityChoice: 'none' as const,
  pin: '',

  // Legacy
  securityPreference: 'none' as const,
  pinHash: undefined,
  gpDetails: { name: '', address: '' },
  personalDetails: { name: '', dob: '', address: '', telephone: '' },
  agreedToTerms: false,
};

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      ...initialState,
      completeOnboarding: () => set({ hasCompletedOnboarding: true }),
      resetOnboarding: () => set(initialState),

      setTheme: (theme) => set({ theme }),
      setAcceptedTerms: (acceptedTerms) => set({ acceptedTerms, agreedToTerms: acceptedTerms }),
      setName: (firstName, lastName) => set((state) => ({ firstName, lastName, personalDetails: { ...state.personalDetails, name: `${firstName} ${lastName}`.trim() } })),
      setDob: (dob) => set((state) => ({ dob, personalDetails: { ...state.personalDetails, dob: `${dob.day}/${dob.month}/${dob.year}` } })),
      setAddress: (address) => set((state) => ({ ...address, personalDetails: { ...state.personalDetails, address: `${address.addressLine1}, ${address.city}, ${address.postcode}` } })),
      setPhoneNumber: (phoneNumber) => set((state) => ({ phoneNumber, personalDetails: { ...state.personalDetails, telephone: phoneNumber } })),
      setGp: (gpName, gpPractice) => set((state) => ({ gpName, gpPractice, gpDetails: { ...state.gpDetails, name: gpName } })),
      setTranslatorChoice: (translatorChoice) => set({ translatorChoice }),
      setSecurityChoice: (securityChoice) => set({ securityChoice, securityPreference: securityChoice }),
      setPin: (pin) => set({ pin, pinHash: pin }),

      // Legacy setters
      setSecurityPreference: (securityPreference, pinHash) => set({ securityPreference, pinHash, securityChoice: securityPreference, pin: pinHash || '' }),
      setGpDetails: (details) => set((state) => ({ gpDetails: { ...state.gpDetails, ...details }, gpName: details.name || state.gpName })),
      setPersonalDetails: (details) => set((state) => ({ personalDetails: { ...state.personalDetails, ...details } })),
      setAgreedToTerms: (agreedToTerms) => set({ agreedToTerms, acceptedTerms: agreedToTerms }),
    }),
    {
      name: 'onboarding-storage', // name of the item in the storage (must be unique)
    }
  )
);
