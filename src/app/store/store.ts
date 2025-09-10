import { create } from 'zustand';
import type { SearchResults } from '../interfaces/searchTypes';

const initialSearchResults: SearchResults = {
  results: {
    file: [],
    people: [],
    chat: [],
    list: [],
  },
  count: {
    file: 0,
    people: 0,
    chat: 0,
    list: 0,
  },
};


interface SearchState {
  searchResults: SearchResults | null;
  setSearchResults: (results: SearchResults | null) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  clearSearch: () => void;
  resetResults: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  clearSearch: () => set({ searchTerm: '', searchResults: initialSearchResults }),
  searchResults: initialSearchResults,
  setSearchResults: (results) => set({ searchResults: results }),
  resetResults: () => set({ searchResults: initialSearchResults }),
}));
