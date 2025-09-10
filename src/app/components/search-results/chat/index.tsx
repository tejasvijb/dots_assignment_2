"use client";
import { FC } from 'react';
import { MessageCircle } from 'lucide-react';
import { ChatResult } from '@/app/interfaces/searchTypes';
import { highlightMatch, formatDate } from '../utils';

interface ChatResultProps {
  item: ChatResult;
  searchTerm: string;
}

const ChatResultItem: FC<ChatResultProps> = ({ item, searchTerm }) => {
  return (
    <div className="flex items-start p-3 hover:bg-gray-100 rounded-md transition-colors cursor-pointer">
      <div className="flex-shrink-0 mt-1">
        <MessageCircle size={18} className="text-purple-500" />
      </div>
      <div className="ml-3 flex-1">
        <div className="font-medium">{highlightMatch(item.name, searchTerm)}</div>
        <div className="text-sm text-gray-600 mt-1">{item.message}</div>
        <div className="text-xs text-gray-500 mt-1">{formatDate(item.time)}</div>
      </div>
    </div>
  );
};

export default ChatResultItem;
