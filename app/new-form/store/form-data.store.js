import { create } from 'zustand'

const useFormDataStore = create((set) => ({
  country: '',
  crop: '',
  setCountry: (value) => set(() => ({ country: value })),
  setCrop: (value) => set(() => ({crop: value}))
}));

export default useFormDataStore;