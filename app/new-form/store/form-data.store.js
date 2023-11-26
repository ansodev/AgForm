import { create } from 'zustand'

const useFormDataStore = create((set) => ({
  country: '',
  crop: '',
  application: '',
  goals: [],
  setCountry: (value) => set(() => ({ country: value })),
  setCrop: (value) => set(() => ({crop: value})),
  setApplication: (value) => set(() => ({application: value})),
  addGoal: (value) => set((state) => ({goals: [...state.goals, value]})),
  removeGoal: (value) => set((state) => {
    const newList = state.goals.filter((goal => goal !== value));
    return {
      goals: newList
    }
  }),
}));

export default useFormDataStore;