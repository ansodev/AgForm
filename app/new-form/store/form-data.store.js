import { create } from 'zustand'

const useFormDataStore = create((set) => ({
  country: '',
  crop: '',
  application: '',
  setCountry: (value) => set(() => ({ country: value })),
  setCrop: (value) => set(() => ({crop: value})),
  setApplication: (value) => set(() => ({application: value})),
}));

export default useFormDataStore;