import { create } from "zustand";
interface SearchStore {
  searchOpen?: boolean;
  toggleSearch?: () => void;
}
export const useSearchStore = create<SearchStore>((set) => ({
  searchOpen: false,
  toggleSearch: () => set((state) => ({ searchOpen: !state.searchOpen })),
}));
