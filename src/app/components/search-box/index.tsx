"use client";

import SearchInput from './SearchInput';
import { useSearchStore } from '@/app/store/store';
import { useDebouncedSearch } from '@/app/hooks/useDebouncedSearch';
import Tab from '../tab';
import { useTabStore } from '@/app/store/tabstore';
import { Users, Settings, Paperclip, MessageCircle, List } from 'lucide-react';
import { TabData } from '@/app/interfaces/tabStore';
import { SearchResults as SearchResultsType } from '@/app/interfaces/searchTypes';
import { TabType } from '@/app/interfaces/tabStore';
import SearchResults from '../search-results';
import { motion, AnimatePresence } from 'framer-motion';


function getTabs(searchResults: SearchResultsType | null, visibleTabs: Record<TabType, boolean>): TabData[] {
  const tabDefs: TabData[] = [
    {
      id: 'all',
      text: 'All',
      icon: undefined,
      count:
        (searchResults?.count?.file || 0) +
        (searchResults?.count?.people || 0) +
        (searchResults?.count?.chat || 0) +
        (searchResults?.count?.list || 0),
    },
    {
      id: 'file',
      text: 'Files',
      icon: <Paperclip size={18} />,
      count: searchResults?.count?.file || 0,
    },
    {
      id: 'people',
      text: 'People',
      icon: <Users size={18} />,
      count: searchResults?.count?.people || 0,
    },
    {
      id: 'chat',
      text: 'Chats',
      icon: <MessageCircle size={18} />,
      count: searchResults?.count?.chat || 0,
    },
    {
      id: 'list',
      text: 'Lists',
      icon: <List size={18} />,
      count: searchResults?.count?.list || 0,
    },
  ];
  return tabDefs
    .filter((tab) => visibleTabs[tab.id] !== false)
    .map((tab) => ({ ...tab, isVisible: visibleTabs[tab.id] !== false }));
}


export default function SearchBox() {
  const { searchTerm, setSearchTerm, clearSearch, searchResults } = useSearchStore();
  const { isLoading, error, data } = useDebouncedSearch(searchTerm);
  const { setSelectedTab, visibleTabs, selectedTab } = useTabStore();

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };
  const handleSearchClear = () => {
    clearSearch();
  };

  const handleTabChange = (tabId: TabType) => {
    setSelectedTab?.(tabId);
  };

  const tabs = getTabs(searchResults, visibleTabs);

  // Filter results based on selected tab
  const getFilteredResults = () => {
    if (!searchResults?.results) return [];

    if (selectedTab === 'all') {
      return [
        ...searchResults.results.file,
        ...searchResults.results.people,
        ...searchResults.results.chat,
        ...searchResults.results.list
      ];
    }

    return searchResults.results[selectedTab as keyof typeof searchResults.results] || [];
  };

  return (
    <div
      className="max-w-sm md:max-w-md lg:max-w-lg mx-auto border border-gray-300 shadow-sm rounded-xl bg-white overflow-y-auto"
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



      {/* Tab and results */}
      <AnimatePresence>
        {searchTerm && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: 'hidden' }}
          >
            <Tab
              tabs={tabs}
              onChange={handleTabChange}
              endIcon={<Settings size={20} className="text-gray-500" />}
            />
            {/* Error state */}
            {error && (
              <div className="p-4 text-center text-red-500 border-t border-gray-200">
                Error loading results: {error instanceof Error ? error.message : 'Unknown error'}
              </div>
            )}
            {/* Search results */}
            <div className="border-t border-gray-200">
              <SearchResults
                results={getFilteredResults()}
                searchTerm={searchTerm}
                isLoading={isLoading}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}