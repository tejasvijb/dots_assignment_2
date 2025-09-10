"use client";
import { FC } from 'react';
import { Users } from 'lucide-react';
import { PeopleResult } from '@/app/interfaces/searchTypes';
import { highlightMatch, formatDate } from '../utils';

interface PeopleResultProps {
  item: PeopleResult;
  searchTerm: string;
}

const PeopleResultItem: FC<PeopleResultProps> = ({ item, searchTerm }) => {
  return (
    <div className="flex items-center p-3 hover:bg-gray-100 rounded-md transition-colors cursor-pointer">
      <div className="flex-shrink-0">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.active_status ? 'bg-green-500' : 'bg-gray-300'}`}>
          <Users size={16} className="text-white" />
        </div>
      </div>
      <div className="ml-3 flex-1">
        <div className="font-medium">{highlightMatch(item.name, searchTerm)}</div>
        <div className="text-sm text-gray-500 flex items-center">
          <span className={`w-2 h-2 rounded-full ${item.active_status ? 'bg-green-500' : 'bg-gray-400'} mr-1`}></span>
          <span>{item.active_status ? 'Active now' : `Last active ${formatDate(item.last_active)}`}</span>
        </div>
      </div>
    </div>
  );
};

export default PeopleResultItem;
