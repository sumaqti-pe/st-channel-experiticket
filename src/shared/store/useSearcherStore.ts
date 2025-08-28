import { create } from "zustand";
import { SearcherItem } from "../types";

interface SearcherStore {
  items: SearcherItem[];
  value: string;
  setItems: (items: SearcherItem[]) => void;
  setValue: (value: string) => void;
}

export const useSearcherStore = create<SearcherStore>((set) => ({
  items: [],
  value: "",
  setItems: (items) => set({ items }),
  setValue: (value) => set({ value }),
}));
