import { create } from 'zustand'

const useFormDataStore = create((set) => ({
  country: '',
  crop: '',
  application: '',
  goals: [],
  practices: [],
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
  addPractices: (value) => set((state) => ({practices: [...state.practices, value]})),
  removePractices: (value) => set((state) => {
    const newList = state.practices.filter((practices => practices !== value));
    return {
      practices: newList
    }
  }),
}));

export default useFormDataStore;