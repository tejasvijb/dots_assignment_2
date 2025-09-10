// Interfaces for search result types

export interface FileResult {
  id: string;
  type: 'file';
  name: string;
  parent_dir: string;
  created_on: string;
  last_updated: string;
}

export interface PeopleResult {
  id: string;
  type: 'people';
  name: string;
  active_status: boolean;
  last_active: string;
}

export interface ChatResult {
  id: string;
  type: 'chat';
  name: string;
  message: string;
  time: string;
}

export interface ListResult {
  id: string;
  type: 'list';
  name: string;
  info: string;
  created_on: string;
  last_updated: string;
}

export interface SearchResults {
  results: {
    file: FileResult[];
    people: PeopleResult[];
    chat: ChatResult[];
    list: ListResult[];
  };
  count: {
    file: number;
    people: number;
    chat: number;
    list: number;
  };
}
