import { create } from "zustand";
interface NavStore {
  current: string;
  setCurrent: (value: string) => void;
}
export const useNavStore = create<NavStore>((set) => ({
  current: "",
  setCurrent: (value) => set(() => ({ current: value })),
}));
