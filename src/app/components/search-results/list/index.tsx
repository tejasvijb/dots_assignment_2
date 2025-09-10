"use client";
import { FC } from 'react';
import { List } from 'lucide-react';
import { ListResult } from '@/app/interfaces/searchTypes';
import { highlightMatch, formatDate } from '../utils';

interface ListResultProps {
  item: ListResult;
  searchTerm: string;
}

const ListResultItem: FC<ListResultProps> = ({ item, searchTerm }) => {
  return (
    <div className="flex items-start p-3 hover:bg-gray-100 rounded-md transition-colors cursor-pointer">
      <div className="flex-shrink-0 mt-1">
        <List size={18} className="text-orange-500" />
      </div>
      <div className="ml-3 flex-1">
        <div className="font-medium">{highlightMatch(item.name, searchTerm)}</div>
        <div className="text-sm text-gray-600 mt-1">{item.info}</div>
        <div className="text-xs text-gray-500 mt-1">Updated {formatDate(item.last_updated)}</div>
      </div>
    </div>
  );
};

export default ListResultItem;
