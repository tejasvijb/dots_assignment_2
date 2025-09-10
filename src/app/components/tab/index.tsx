import { useState } from 'react';
import TabItem from './TabItem';
import { TabProps, TabType } from '@/app/interfaces/tabStore';
import { useTabStore } from '@/app/store/tabstore';

export default function Tab({ tabs, onChange, endIcon }: TabProps) {
  const { selectedTab, setSelectedTab } = useTabStore();

  const handleTabClick = (tabId: TabType) => {
    setSelectedTab?.(tabId);
    onChange?.(tabId);
  };

  return (
    <div className="flex items-center justify-between w-full border-b px-4 border-gray-200 bg-white overflow-x-auto">
      <div
        className="flex gap-1 items-center flex-grow overflow-x-hidden"
        role="tablist"
        aria-label="Search categories"
      >
        {tabs.map((tab) => (
          <TabItem
            key={tab.id}
            icon={tab.icon}
            text={tab.text}
            count={tab.count}
            isSelected={selectedTab === tab.id}
            onClick={() => handleTabClick(tab.id)}
          />
        ))}
      </div>
      {endIcon && (
        <div className="px-2 flex items-center justify-center border-gray-200">
          <button
            className="hover:bg-gray-100 p-2 rounded-md transition-colors"
            aria-label="Settings"
          >
            {endIcon}
          </button>
        </div>
      )}
    </div>
  );
}