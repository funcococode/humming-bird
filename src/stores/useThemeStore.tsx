import { create } from "zustand";
interface Store {
  isDark: boolean;
  toggleIsDark: () => void;
}
export const useThemeStore = create<Store>((set) => ({
  isDark: false,
  toggleIsDark: () => set((state) => ({ isDark: !state.isDark })),
}));
