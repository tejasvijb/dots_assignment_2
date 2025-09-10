import { create } from 'zustand';

export interface SearchResults {
  results: Record<string, any[]>;
  count: Record<string, number>;
}


const initialSearchResults: SearchResults = {
  results: {},
  count: {
    total: 0,
    files: 0,
    people: 0,
    chats: 0,
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
