import { create } from 'zustand';
import { TabType } from '../interfaces/tabStore';


interface TabStore {
  visibleTabs: Record<TabType, boolean>;
  setTabVisible: (tab: TabType, visible: boolean) => void;
  selectedTab?: TabType;
  setSelectedTab?: (tab: TabType) => void;
}

export const useTabStore = create<TabStore>((set) => ({
  visibleTabs: {
    all: true,
    file: true,
    people: true,
    chat: false,
    list: false,
  },
  setTabVisible: (tab, visible) =>
    set((state) => ({
      visibleTabs: {
        ...state.visibleTabs,
        [tab]: visible,
      },
    })),
  selectedTab: 'all',
  setSelectedTab: (tab) => set({ selectedTab: tab }),
}));
