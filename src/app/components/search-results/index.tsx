"use client";
import { FC } from 'react';
import { FileResult, PeopleResult, ChatResult, ListResult } from '@/app/interfaces/searchTypes';
import FileResultItem from './file';
import PeopleResultItem from './people';
import ChatResultItem from './chat';
import ListResultItem from './list';
import Skeleton from './skeleton';

// Union type for all result items
type SearchResultItem = FileResult | PeopleResult | ChatResult | ListResult;

interface SearchResultsProps {
  results: SearchResultItem[];
  searchTerm: string;
  isLoading: boolean;
}

const SearchResults: FC<SearchResultsProps> = ({ results, searchTerm, isLoading }) => {
  if (isLoading) {
    return (
      <div className='space-y-4'>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />

      </div>
    );
  }

  if (!searchTerm) {
    return (
      <div className="text-center py-8 text-gray-500">
        Type to start searching...
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No results found for "{searchTerm}"
      </div>
    );
  }

  const renderResultItem = (item: SearchResultItem) => {
    switch (item.type) {
      case 'file':
        return <FileResultItem item={item} searchTerm={searchTerm} />;
      case 'people':
        return <PeopleResultItem item={item} searchTerm={searchTerm} />;
      case 'chat':
        return <ChatResultItem item={item} searchTerm={searchTerm} />;
      case 'list':
        return <ListResultItem item={item} searchTerm={searchTerm} />;
      default:
        return null;
    }
  };

  return (
    <div className="divide-y divide-gray-200">
      {results.map((item, index) => (
        <div key={`${item.type}-${item.id}-${index}`}>
          {renderResultItem(item)}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
