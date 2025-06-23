import { create } from 'zustand';

interface ConsentState {
  agreed: boolean;
  setAgreed: (value: boolean) => void;
}

export const useConsentStore = create<ConsentState>((set) => ({
  agreed: false,
  setAgreed: (value) => set({ agreed: value }),
}));
