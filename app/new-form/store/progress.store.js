import { create } from 'zustand'

const useProgressStore = create((set) => ({
  listItensProgress: [
     
    {
      text: "País",
      icon: "/country.svg",
      first: true,
      active: true,
    },
    {
      text: "Cultura",
      icon: "/crop.svg",
      first: false,
      active: false,
    },
    {
      text: "Aplicação",
      icon: "/aplication.svg",
      first: false,
      active: false,
    },
    {
      text: "Objetivo",
      icon: "/goal.svg",
      first: false,
      active: false,
    },
    {
      text: "Ferramenta",
      icon: "/tool.svg",
      first: false,
      active: false,
    },
  ],

  setActive: (item) => set((state) => {
    const itemIndex = state.listItensProgress.findIndex(itemProgress => itemProgress.text === item);
    const itens = state.listItensProgress.map((itemProgress, index) => {
      return {
        ...itemProgress,
        active: index <= itemIndex
      }
    });

    return {
      listItensProgress: itens
    }
  })
}))

export default useProgressStore;