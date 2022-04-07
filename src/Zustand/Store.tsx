import create from 'zustand';

type State = {
  count: number;
  increment: (value: number) => void;
  decrement: (value: number) => void;
  fetch: (url: any) => void;
  data: {};
};

export const useStore = create<State>((set) => ({
  count: 0,
  data: {},
  increment: (value) => set((state) => ({ count: state.count + value })),
  decrement: (value) => set((state) => ({ count: state.count - value })),
  fetch: async (url) => {
    const res = await fetch(url);
    set({ data: await res.json() });
  },
}));
