export type TabType = 'all' | 'file' | 'people' | 'chat' | 'list';

import { ReactNode } from "react";

export interface TabData {
  id: TabType;
  text: string;
  count?: number;
  icon?: ReactNode;
  isVisible?: boolean;
}

export interface TabProps {
  tabs: TabData[];
  onChange?: (tabId: TabType) => void;
  endIcon?: ReactNode;
}
