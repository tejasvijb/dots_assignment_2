
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSearchStore } from '../store/store';
import { SearchResults } from '../interfaces/searchTypes';


const fetchSearchResults = async (query: string) => {
  if (!query) {
    const { data } = await axios.get('/api/search');
    return data;
  }
  const { data } = await axios.get('/api/search', { params: { q: query } });
  return data;
};

export function useDebouncedSearch(query: string, delay = 400) {
  const { setSearchResults, resetResults } = useSearchStore();
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [query, delay]);


  const queryResult = useQuery({
    queryKey: ['search', debouncedQuery],
    queryFn: async () => {
      const searchResults: SearchResults = await fetchSearchResults(debouncedQuery);
      setSearchResults(searchResults);
      return searchResults;
    },
  });

  // Optionally clear previous data if query is empty and not loading
  useEffect(() => {
    if (debouncedQuery === '' && !queryResult.isFetching && !queryResult.isLoading) {
      resetResults();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery, queryResult.isFetching, queryResult.isLoading]);

  return queryResult;
}
