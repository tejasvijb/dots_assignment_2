"use client";
import { FC } from 'react';
import { FileIcon } from 'lucide-react';
import { FileResult } from '@/app/interfaces/searchTypes';
import { highlightMatch, formatDate } from '../utils';

interface FileResultProps {
  item: FileResult;
  searchTerm: string;
}

const FileResultItem: FC<FileResultProps> = ({ item, searchTerm }) => {
  return (
    <div className="flex items-start p-3 hover:bg-gray-100 rounded-md transition-colors cursor-pointer">
      <div className="flex-shrink-0 mt-1">
        <FileIcon size={18} className="text-blue-500" />
      </div>
      <div className="ml-3 flex-1">
        <div className="font-medium">{highlightMatch(item.name, searchTerm)}</div>
        <div className="text-sm text-gray-500 mt-1 flex justify-between">
          <span>{item.parent_dir}</span>
          <span>Updated {formatDate(item.last_updated)}</span>
        </div>
      </div>
    </div>
  );
};

export default FileResultItem;
