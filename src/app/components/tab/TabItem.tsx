import { ReactNode } from 'react';

interface TabItemProps {
  icon?: ReactNode;
  text: string;
  count?: number;
  isSelected: boolean;
  onClick: () => void;
}

export default function TabItem({ icon, text, count, isSelected, onClick }: TabItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-2 gap-1 py-3 relative transition-all hover:bg-gray-50 ${isSelected ? 'font-semibold' : 'font-normal'
        }`}
      role="tab"
      aria-selected={isSelected}
      aria-controls={`${text.toLowerCase()}-panel`}
      id={`tab-${text.toLowerCase()}`}
      tabIndex={isSelected ? 0 : -1}
    >
      {icon && (
        <span
          className={`${isSelected ? 'text-black' : 'text-gray-400'} transition-colors`}
          aria-hidden="true"
        >
          {icon}
        </span>
      )}
      <span className={`${isSelected ? 'text-black' : 'text-gray-400'} transition-colors`}>{text}</span>
      {count !== undefined && (
        <span
          className="text-md bg-gray-200 rounded-md px-2 text-gray-400 ml-1"
          aria-label={`${count} ${text.toLowerCase()}`}
        >
          {count}
        </span>
      )}
      {isSelected && (
        <div
          className="absolute bottom-0 left-0 w-full h-0.5 bg-black transition-transform origin-bottom"
          aria-hidden="true"
        ></div>
      )}
    </button>
  );
}