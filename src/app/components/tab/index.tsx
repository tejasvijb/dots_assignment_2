import { useState, useRef } from 'react';
import TabItem from './TabItem';
import { TabProps, TabType } from '@/app/interfaces/tabStore';
import { useTabStore } from '@/app/store/tabstore';
import Popover from '../ui/Popover';
import TabPopoverContent from './TabPopoverContent';

export default function Tab({ tabs, onChange, endIcon }: TabProps) {
  const { selectedTab, setSelectedTab } = useTabStore();

  const [popoverOpen, setPopoverOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const endIconBtnRef = useRef<HTMLButtonElement>(null);

  const handleTabClick = (tabId: TabType) => {
    setSelectedTab?.(tabId);
    onChange?.(tabId);
  };

  const handleEndIconClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
    setPopoverOpen((prev) => !prev);
  };

  const handlePopoverClose = () => {
    setPopoverOpen(false);
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
            ref={endIconBtnRef}
            className="hover:bg-gray-100 p-2 rounded-md transition-colors"
            aria-label="Settings"
            onClick={handleEndIconClick}
          >
            {endIcon}
          </button>
          <Popover
            open={popoverOpen}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
          >
            {/* Replace below with actual popover content as needed */}
            <TabPopoverContent />
          </Popover>
        </div>
      )}
    </div>
  );
}