"use client";

import SearchInput from './SearchInput';
import { useSearchStore } from '@/app/store/store';
import { useDebouncedSearch } from '@/app/hooks/useDebouncedSearch';


export default function SearchBox() {

  const { searchTerm, setSearchTerm, clearSearch, searchResults } = useSearchStore();
  const { isLoading } = useDebouncedSearch(searchTerm);

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };
  const handleSearchClear = () => {
    clearSearch();
  };

  console.log('Loading:', isLoading);

  console.log('Search Results:', searchResults);



  return (
    <div
      className="max-w-sm md:max-w-md lg:max-w-lg mx-auto border border-gray-300 shadow-sm rounded-xl bg-white"
      role="search"
      aria-label="Search across files, people, chats, and lists"
    >
      <div className='px-6 py-4'>
        <SearchInput
          value={searchTerm}
          onChange={handleSearchChange}
          onClear={handleSearchClear}
          isLoading={isLoading}
          placeholder="Search files, people, chats..."
        />
      </div>
    </div>
  );
}