import { useTabStore } from "@/app/store/tabstore";
import CheckBox from "../ui/CheckBox";
import TabItem from "./TabItem";
import { TabType } from "@/app/interfaces/tabStore";

import { Users, Paperclip, MessageCircle, List } from 'lucide-react';


export default function TabPopoverContent() {
  const { visibleTabs, setTabVisible } = useTabStore();

  // Tab name mapping for better display
  const tabNames: Partial<Record<TabType, string>> = {
    file: 'Files',
    people: 'People',
    chat: 'Chats',
    list: 'Lists'
  };

  const tabIcons: Partial<Record<TabType, React.ReactNode>> = {
    file: <Paperclip size={16} />,
    people: <Users size={16} />,
    chat: <MessageCircle size={16} />,
    list: <List size={16} />
  };



  return (
    <div className="text-sm text-gray-700">
      {Object.keys(visibleTabs)
        .filter(tab => tab !== 'all')
        .map((tab) => (
          <div key={tab} className="flex items-center justify-between py-1">
            <div className="flex items-center">
              {tabIcons[tab as TabType] && <span className="mr-2">{tabIcons[tab as TabType]}</span>}
              <span className={`${visibleTabs[tab as TabType] ? 'font-semibold' : ''}`}>{tabNames[tab as TabType] || tab}</span>
            </div>
            <CheckBox
              checked={visibleTabs[tab as TabType]}
              onChange={() => setTabVisible(tab as TabType, !visibleTabs[tab as TabType])}
            />
          </div>
        ))}


    </div>
  );
}